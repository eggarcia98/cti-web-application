import type { Handle } from '@sveltejs/kit';
import { parse } from 'svelte/compiler';

// /src/hooks.server.ts
export const handle: Handle = async ({ event, resolve }) => {
	const { headers } = event.request;
	const cookies = parse(headers.get('cookie') ?? '');

	const { AuthorizationToken } = cookies as any;

	if (AuthorizationToken) {
		// Remove Bearer prefix
		const token = AuthorizationToken.split(' ')[1];

		const response = await event.fetch('http://localhost:3006/api/user/authorizate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ token })
		});

		try {
			const jwtUser = jwt.verify(token, import.meta.env.VITE_JWT_ACCESS_SECRET);
			if (typeof jwtUser === 'string') {
				throw new Error('Something went wrong');
			}

			const user = await db.user.findUnique({
				where: {
					id: jwtUser.id
				}
			});

			if (!user) {
				throw new Error('User not found');
			}

			const sessionUser: SessionUser = {
				id: user.id,
				email: user.email
			};

			event.locals.user = sessionUser;
		} catch (error) {
			console.error(error);
		}
	}

	return await resolve(event);
};
