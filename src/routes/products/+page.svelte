<script lang="ts">
	console.log(' PRODUCTS ');
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Products</h1>
{#each data.products as { title, description, stock }}
	<div>
		<h2>{title}</h2>
		<p>Stock: {stock}</p>
		{@html description}
	</div>
	<span>========================</span>
{/each}
<p>Visit <a href="/"> {JSON.stringify(data)} </a></p>
s
