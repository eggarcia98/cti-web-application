import { redirect, type Handle } from '@sveltejs/kit';
import { parse } from 'svelte/compiler';
export const csr = false; // If both `csr` and `ssr` are `false`, nothing will be rendered!

// /src/hooks.server.ts
export const handle: Handle = async ({ event, resolve }) => {
	const notAuthenticationRouteRequires = ['/error/auth', '/', '/login'];

	(event as any).locals['authorized'] = false;

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

	console.log(event.route.id);
	if (event.route.id === '/login') redirect(302, '/');
	(event as any).locals['authorized'] = true;
	return await resolve(event);
};
