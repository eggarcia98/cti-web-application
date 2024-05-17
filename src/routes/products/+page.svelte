<script lang="ts">
	console.log(' PRODUCTS ');
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class=" max-w-6xl mx-auto w-full bg-white rounded-lg shadow-md dark:bg-neutral-800 pt-5">
	{#each data.products as { title, description, stock }}
		<div class="mt-5">
			<details
				class="group inline-flex items-center gap-x-3 text-sm w-full text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400"
			>
				<summary
					class="px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400"
				>
					<svg
						class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14"></path>
						<path d="M12 5v14"></path>
					</svg>
					<svg
						class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M5 12h14"></path>
					</svg>
					<span>{title}</span>
					<p>Stock: {stock}</p>
				</summary>
				<div
					id="hs-basic-collapse-one"
					class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
					aria-labelledby="hs-basic-heading-one"
				>
					<div class="pb-4 px-6">
						<p class="text-sm text-gray-600 dark:text-neutral-200">
							{@html description.replaceAll('<br>', ' ')}
						</p>
					</div>
				</div>
			</details>
		</div>
	{/each}
</div>
