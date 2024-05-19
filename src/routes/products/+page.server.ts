import type { PageServerLoad } from './$types';
import { PUBLIC_BACKEND_HOST, PUBLIC_BACKEND_PORT } from '$env/static/public';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_BACKEND_HOST}:${PUBLIC_BACKEND_PORT}/api/products`);
	const data = await res.json();

	return { products: data };
};
