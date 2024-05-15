import type { Handle } from '@sveltejs/kit';
import { parse } from 'svelte/compiler';

// /src/hooks.server.ts
export const handle: Handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const AuthorizationToken = cookies.get('AuthorizationToken');
	console.log({ AuthorizationToken });

	if (AuthorizationToken) {
		// Remove Bearer prefix

		const response = await event.fetch('http://localhost:3006/api/user/authorizate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ AuthorizationToken })
		});

		console.log(await response.json());
	}

	return await resolve(event);
};
