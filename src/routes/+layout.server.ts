import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch, cookies, route }) => {
	const AuthorizationToken = cookies.get('AuthorizationToken');

	const response = await fetch('http://localhost:3006/api/user/authorizate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ AuthorizationToken })
	});

	const data = await response.json();
	return data;
};
