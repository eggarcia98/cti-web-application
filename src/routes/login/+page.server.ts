import type { Actions } from './$types';

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
		const { message, authorized } = authorization;
		if (response.status) return { error: message, authorized };

		return { message, authorized };
	}
} satisfies Actions;
