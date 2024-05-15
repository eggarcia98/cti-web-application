<script lang="ts">
	console.log(' PRODUCTS ');
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Productos</h1>
{#each data.products as { title, description, stock }}
	<div>
		<h2>{title}</h2>
		<p>Stock: {stock}</p>
		{@html description}
	</div>
	<span>========================</span>
{/each}
