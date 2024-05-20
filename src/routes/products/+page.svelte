<script lang="ts">
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	export let data: PageData;

	const itemsPerPage = 10; // Update to 20 items per page
	const totalItems = data.products.length;
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const currentPage = writable(1);

	// Computed property to get current page's data
	$: currentPageData = data.products.slice(
		($currentPage - 1) * itemsPerPage,
		$currentPage * itemsPerPage
	);

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage.set(page);
		}
	}
</script>

<div class="max-w-6xl mx-auto w-full bg-white rounded-lg shadow-md dark:bg-neutral-800 pt-5 mt-20">
	{#each currentPageData as { title, description, stock }}
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

	<div
		class="inline-flex justify-center w-full  border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
	>
		<div class="flex flex-1 justify-between sm:hidden">
			<button
				on:click={() => goToPage($currentPage - 1)}
				class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				disabled={$currentPage === 1}>Previous</button
			>
			<button
				on:click={() => goToPage($currentPage + 1)}
				class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				disabled={$currentPage === totalPages}>Next</button
			>
		</div>
		<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
			<div class="mr-4">
				<p class="text-sm text-gray-700">
					Showing <span class="font-medium">{($currentPage - 1) * itemsPerPage + 1}</span> to
					<span class="font-medium">{Math.min($currentPage * itemsPerPage, totalItems)}</span>
					of <span class="font-medium">{totalItems}</span> results
				</p>
			</div>
			<div class="flex items-center">
				<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
					<button
						on:click={() => goToPage($currentPage - 1)}
						class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						disabled={$currentPage === 1}
					>
						<span class="sr-only">Previous</span>
						<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
					{#each Array(totalPages)
						.fill(0)
						.map((_, i) => i + 1) as page}
						{#if page <= 5 || page > totalPages - 4 || (page > 5 && page < totalPages - 4 && (page === $currentPage || page === $currentPage - 1 || page === $currentPage + 1))}
							<button
								on:click={() => goToPage(page)}
								class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
								class:selected={$currentPage === page}>{page}</button
							>
						{/if}
						{#if page === 6 && $currentPage > 6}
							<span
								class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
								>...</span
							>
						{/if}
						{#if page === totalPages - 4 && $currentPage < totalPages - 5}
							<span
								class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
								>...</span
							>
						{/if}
					{/each}
					<button
						on:click={() => goToPage($currentPage + 1)}
						class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						disabled={$currentPage === totalPages}
					>
						<span class="sr-only">Next</span>
						<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</nav>
			</div>
		</div>
	</div>
</div>
