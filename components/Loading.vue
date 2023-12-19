<template>
	<div class="fixed inset-0 flex items-center justify-center p-5">

		<div class="flex items-center space-x-2 animate-pulse">

			<svg class="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
				</path>
			</svg>

			<div class="py-1">
				<div class="h-2 bg-indigo-500 rounded"></div>
			</div>

		</div>

		<p class="mt-3 text-white">Loading...</p>

	</div>
</template>
  
<style scoped>
body {
	@apply bg-indigo-900;
}</style>