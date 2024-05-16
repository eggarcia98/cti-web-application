import { redirect, type Handle } from '@sveltejs/kit';
import { parse } from 'svelte/compiler';

// /src/hooks.server.ts
export const handle: Handle = async ({ event, resolve }) => {
	const notAuthenticationRouteRequires = ['/error/auth', '/', '/login'];

	const { cookies } = event;
	const AuthorizationToken = cookies.get('AuthorizationToken');

	if (notAuthenticationRouteRequires.includes(event.route.id ?? '')) return await resolve(event);

	if (!AuthorizationToken) redirect(302, '/error/auth');
	// Remove Bearer prefix
	const response = await event.fetch('http://localhost:3006/api/user/authorizate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ AuthorizationToken })
	});

	const { authorized } = await response.json();
	if (!authorized) redirect(302, '/error/auth');

	return await resolve(event);
};
