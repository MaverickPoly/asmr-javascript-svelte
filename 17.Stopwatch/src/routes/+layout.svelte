<script>
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex min-h-screen w-full items-center justify-center">
	{@render children()}
</main>
