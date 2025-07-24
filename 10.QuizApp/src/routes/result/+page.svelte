<script>
	import { derived } from 'svelte/store';
	import { page } from '$app/state';

	const queryParams = $derived(page.url.searchParams);
</script>

<div class="text-center">
	<h2 class="mb-8 text-5xl font-bold">Awesome Job 👍👍🏿</h2>

	<h3 class="mb-4 text-3xl font-semibold">
		Your score:

		<span class="font-bold text-violet-600"
			>{queryParams.get('correct')}/{queryParams.get('total')}</span
		>
	</h3>

	<a href="/" class="text-xl font-semibold text-blue-500 hover:underline">Go to Quiz</a>
</div>
