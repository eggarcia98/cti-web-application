<script lang="ts">
	import image from '$lib/image.jpg';

	import Categories from '../components/categories.svelte';
</script>

<div class="dark:bg-neutral-900">
	<main id="content">
		<!-- Features -->
		<div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<Categories />

			<div
				style={`background-image: url(${image})`}
				class="min-h-[35vh] bg-center bg-cover bg-no-repeat relative rounded-xl"
			>
				<div
					class="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0"
				>
					<!-- Card -->
					<div class="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-neutral-800">
						<div class="hidden md:block">
							<h3 class="text-lg font-bold text-gray-800 sm:text-2xl dark:text-neutral-200">
								Do you wnat to know more?
							</h3>
						</div>
						<div class="md:mt-16">
							<a
								class="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-neutral-400"
								href="/products"
							>
								<svg
									class="flex-shrink-0 size-4"
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
									<polygon points="5 3 19 12 5 21 5 3" />
								</svg>
								Go to our Products
							</a>
						</div>
					</div>
					<!-- End Card -->
				</div>
			</div>
		</div>
		<!-- End Features -->
		<div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Contact -->
			<div class="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 mx-auto">
				<div class="grid grid-cols-1 lg:grid-cols-1 lg:items-center gap-6 md:gap-8 lg:gap-12">
					<div class="space-y-8 lg:space-y-16">
						<div>
							<h3 class="mb-5 font-semibold text-black dark:text-white">Our contacts</h3>

							<!-- Grid -->
							<div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
								<div class="flex gap-4">
									<svg
										class="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
										></path>
										<path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
									</svg>

									<div class="grow">
										<p class="text-sm text-gray-600 dark:text-neutral-400">Email us</p>
										<p>
											<a
												class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
												href="#"
											>
												eggarcia9814@gmail.com
											</a>
										</p>
									</div>
								</div>

								<div class="flex gap-4">
									<svg
										class="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
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
										<path
											d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
										/>
									</svg>

									<div class="grow">
										<p class="text-sm text-gray-600 dark:text-neutral-400">Call us</p>
										<p>
											<a
												class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
												href="#"
											>
												+61 42 6432 597
											</a>
										</p>
									</div>
								</div>
							</div>
							<!-- End Grid -->
						</div>
					</div>
					<!-- End Col -->
				</div>
			</div>
			<!-- End Contact -->
		</div>
	</main>
	<!-- ========== END MAIN CONTENT ========== -->

	<!-- ========== FOOTER ========== -->
	<footer class="mt-auto border-t md:border-t-0 border-gray-200 dark:border-neutral-700">
		<div class="w-full max-w-7xl py-10 md:pt-0 px-4 sm:px-6 lg:px-8 mx-auto">
			<!-- Grid -->
			<div class="grid grid-cols-1 md:grid-cols-1 items-center gap-5">
				<!-- Social Brands -->
				<div class="text-center md:text-end space-x-2">
					<a
						class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
						href="#"
					>
						<svg
							class="flex-shrink-0 size-3.5"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
							/>
						</svg>
					</a>
					<a
						class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
						href="#"
					>
						<svg
							class="flex-shrink-0 size-3.5"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
							/>
						</svg>
					</a>
					<a
						class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
						href="#"
					>
						<svg
							class="flex-shrink-0 size-3.5"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							/>
						</svg>
					</a>
					<a
						class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-black hover:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-neutral-400"
						href="#"
					>
						<svg
							class="flex-shrink-0 size-3.5"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"
							/>
						</svg>
					</a>
				</div>
				<!-- End Social Brands -->
			</div>
			<!-- End Grid -->
		</div>
	</footer>
	<!-- ========== END FOOTER ========== -->

	<div
		class="fixed bottom-2 sm:bottom-4 end-2 sm:end-4 ms-2 z-[70] bg-neutral-900 border border-neutral-800 rounded-lg dark:bg-neutral-800"
	>
		<!-- Button Group -->
		<div class="flex items-center gap-px">
			<!-- Templates Dropdown -->
			<div
				class="hs-dropdown relative inline-flex [--strategy:absolute] [--placement:bottom-right] before:absolute before:top-1/2 before:-start-px before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden"
			></div>
			<!-- End Templates Dropdown -->
		</div>
		<!-- End Button Group -->
	</div>
</div>
