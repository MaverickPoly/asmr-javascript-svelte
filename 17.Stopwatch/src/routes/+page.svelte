<script>
	import Button from '$lib/Button.svelte';

	let seconds = $state(0);
	let interval = $state(null);

	function formatTime() {
		const h = Math.floor(seconds / 3600);
		const m = Math.floor(seconds / 60) % 60;
		const s = seconds % 60;

		const pad = (el) => el.toString().padStart(2, '0');

		return `${pad(h)}:${pad(m)}:${pad(s)}`;
	}

	function start() {
		interval = setInterval(() => {
			seconds++;
		}, 1000);
	}

	function stop() {
		clearInterval(interval);
		interval = null;
	}

	function reset() {
		seconds = 0;
	}

	const timeDisplay = $derived(formatTime());
</script>

<div class="flex flex-col text-center">
	<h3 class="mb-10 text-5xl font-bold tracking-wide">{timeDisplay}</h3>

	<!-- Controls -->
	<div class="flex gap-3">
		<Button text="Start" disabled={interval} onclick={start} />
		<Button text="Stop" disabled={!interval} onclick={stop} />
		<Button text="Reset" disabled={interval || seconds === 0} onclick={reset} />
	</div>
</div>
