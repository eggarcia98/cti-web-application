import type { Actions } from './$types';
import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const body = {
			user: formData?.user,
			password: formData?.password
		};

		const response = await event.fetch('http://localhost:3006/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		const authorization = await response.json();
		const { message, authorized, token } = authorization;

		if (response.status !== 200) return { error: message, authorized };

		event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 120, // EXPIRE in 1min
			expires: new Date(new Date().getTime() + 120)
		});

		throw redirect(302, '/');
	}
} satisfies Actions;
