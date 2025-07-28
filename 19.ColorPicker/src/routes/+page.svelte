<script>
	let color = $state('#111');
	let colorPicker;

	function openColorPicker() {
		colorPicker.click();
	}
	function onchange(e) {
		color = e.target.value;
		console.log(color);
	}
</script>

<main class="flex items-center justify-center w-full min-h-screen">
	<input type="color" bind:this={colorPicker} class="hidden" {onchange} />
	<div
		class="w-64 h-64 rounded-2xl border border-neutral-400 cursor-pointer"
		onclick={openColorPicker}
		style={`background: ${color}`}
	></div>
</main>
