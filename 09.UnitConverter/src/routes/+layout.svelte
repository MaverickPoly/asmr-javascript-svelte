<script lang="ts">
	import '../app.css';
	import { Thermometer, DollarSign, Weight } from '@lucide/svelte';

	let { children } = $props();
</script>

<nav class="fixed top-2 left-2 flex flex-col items-start gap-2">
	<a
		href="/temperature"
		class="rounded-lg border border-neutral-600 bg-neutral-900 p-3 hover:bg-neutral-800"
	>
		<Thermometer />
	</a>
	<a
		href="/currency"
		class="rounded-lg border border-neutral-600 bg-neutral-900 p-3 hover:bg-neutral-800"
	>
		<DollarSign />
	</a>
	<a
		href="/weight"
		class="rounded-lg border border-neutral-600 bg-neutral-900 p-3 hover:bg-neutral-800"
	>
		<Weight />
	</a>
</nav>

<div class="flex min-h-screen flex-col items-center justify-center">
	{@render children()}
</div>
