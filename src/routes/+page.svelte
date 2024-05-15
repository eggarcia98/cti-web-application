<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	//  const load: PageData = async ({ fetch, params }: any) => {
	// 	const res = await fetch(`/api/items/${params.id}`);
	// 	const item = await res.json();

	// 	return { item };
	// };
	// console.log(PUBLIC_BACKEND_HOST);
	console.log(' PRODUCTS ');
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <button on:click={() => goto('/products')}>Go To Product</button></p>
