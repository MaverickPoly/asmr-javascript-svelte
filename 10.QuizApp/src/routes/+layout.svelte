<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center">
	{@render children()}
</div>
