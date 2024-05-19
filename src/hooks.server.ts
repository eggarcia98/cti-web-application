import { redirect, type Handle } from '@sveltejs/kit';
export const csr = false; // If both `csr` and `ssr` are `false`, nothing will be rendered!
import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	const notAuthenticationRouteRequires = ['/error/auth', '/', '/login'];

	const { cookies } = event;
	const AuthorizationToken = cookies.get('AuthorizationToken');

	if (notAuthenticationRouteRequires.includes(event.route.id ?? '')) return await resolve(event);

	if (!AuthorizationToken) redirect(302, '/error/auth');

	try {
		const response = await event.fetch(
			`${PUBLIC_BACKEND_HOST}:${PUBLIC_BACKEND_PORT}/api/user/authorizate`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ AuthorizationToken })
			}
		);

		const { authorized } = await response.json();
		if (!authorized) redirect(302, '/error/auth');
	} catch (error) {
		if (notAuthenticationRouteRequires.includes(event.route.id ?? '')) return await resolve(event)
		else redirect(302, '/login');
	}

	return await resolve(event);
};
