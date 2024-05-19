<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div class="">
	<div class="absolute inset-0 flex justify-center items-center z-10">
		<div
			class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 dark:bg-neutral-800 dark:border-neutral-700"
			role="alert"
		>
			<div class="flex">
				<div class="flex-shrink-0">
					<svg
						class="flex-shrink-0 size-4 text-blue-600 mt-1"
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
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M12 16v-4"></path>
						<path d="M12 8h.01"></path>
					</svg>
				</div>
				<div class="ms-3">
					<h3 class="text-gray-800 font-semibold dark:text-white">No authenticated</h3>
					<p class="mt-2 text-sm text-gray-700 dark:text-neutral-400">
						You are not logged or you user don't have enough permission.
					</p>
					<button
						class="mt-5 px-4 justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						on:click={() => goto('/login')}
						><div class="p-3">Go to Log In</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
