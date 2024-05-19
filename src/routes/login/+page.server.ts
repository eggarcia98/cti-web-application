import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const AuthorizationToken = cookies.get('AuthorizationToken');

	const response = await fetch(
		`${PUBLIC_BACKEND_HOST}:${PUBLIC_BACKEND_PORT}/api/user/authorizate`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ AuthorizationToken })
		}
	);

	const data = await response.json();
	if (data.authorized) redirect(302, '/');
	return data;
};

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const body = {
			user: formData?.user,
			password: formData?.password
		};

		const response = await event.fetch(
			`${PUBLIC_BACKEND_HOST}:${PUBLIC_BACKEND_PORT}/api/user/login`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			}
		);

		const authorization = await response.json();
		const { message, authorized, token } = authorization;

		if (response.status !== 200) return { error: message, authorized };

		event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 120,
			expires: new Date(new Date().getTime() + 120)
		});

		redirect(302, '/');
	}
} satisfies Actions;
