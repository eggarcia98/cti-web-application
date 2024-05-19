import type { LayoutServerLoad } from './$types';
import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';

export const load: LayoutServerLoad = async ({ fetch, cookies, route }) => {
	const AuthorizationToken = cookies.get('AuthorizationToken');

	try {
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
		return data;
	} catch (error) {
		return {};
	}
};
