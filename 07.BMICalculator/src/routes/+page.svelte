<script lang="ts">
	let weight = $state(70.0);
	let height = $state(170);
	let bmi = $derived(weight / Math.pow(height / 100, 2));
	let status = $derived(identifyStatus());

	function identifyStatus() {
		if (bmi < 18.5) {
			return 'Underweight';
		}
		if (bmi < 25) {
			return 'Healthy';
		}
		if (bmi < 30) {
			return 'Overweight';
		}
		return 'Obese';
	}

	$effect(() => {
		if (weight < 5) {
			weight = 5.0;
		}
		if (weight > 150) {
			weight = 150.0;
		}
	});
</script>

<div class="flex items-center justify-center w-full h-full min-h-[90vh]">
	<div
		class="max-w-xl w-full p-4 rounded-lg bg-neutral-900/60 backdrop-blur-xl flex flex-col gap-2 items-center"
	>
		<h1 class="text-7xl font-extrabold mt-8">{bmi.toFixed(1)}</h1>
		<p class="mt-4 text-3xl font-bold text-violet-500">{status}</p>

		<div class="h-[1px] bg-neutral-600 w-full my-5"></div>

		<div class="flex w-full items-center gap-4 px-4">
			<button
				class="p-4 w-14 h-14 text-5xl bg-neutral-900 rounded-xl hover:bg-neutral-800 cursor-pointer flex items-center justify-center"
				onclick={() => (weight -= 2)}>-</button
			>
			<button
				class="p-4 w-12 h-12 text-4xl bg-neutral-900 rounded-xl hover:bg-neutral-800 cursor-pointer flex items-center justify-center"
				onclick={() => (weight -= 0.5)}>-</button
			>

			<span class="flex-1 px-6 text-3xl font-bold text-center">{weight.toFixed(1)} kg</span>

			<button
				class="p-4 w-12 h-12 text-3xl bg-neutral-900 rounded-xl hover:bg-neutral-800 cursor-pointer flex items-center justify-center"
				onclick={() => (weight += 0.5)}>+</button
			>
			<button
				class="p-4 w-14 h-14 text-4xl bg-neutral-900 rounded-xl hover:bg-neutral-800 cursor-pointer flex items-center justify-center"
				onclick={() => (weight += 2)}>+</button
			>
		</div>

		<div class="flex items-center w-full px-5 mt-4 gap-6">
			<input
				type="range"
				bind:value={height}
				class="flex-1 appearance-none"
				min={120}
				step={1}
				max={230}
			/>
			<h3 class="text-3xl font-bold">{height} cm</h3>
		</div>
	</div>
</div>

<style>
	input[type='range']::-webkit-slider-runnable-track {
		height: 6px;
		background: #ddd;
		border-radius: 999px;
	}

	input[type='range']::-moz-range-thumb {
		height: 20px;
		width: 20px;
		background: #333;
		border-radius: 50%;
		cursor: pointer;
		border: 1px solid #888;
	}
	input[type='range']::-moz-range-track {
		height: 6px;
		background: #ccc;
		border-radius: 999px;
	}
</style>
