<script lang="ts">
	const options = ['celsius', 'fahrenheit', 'kelvin'] as const;
	type TempUnit = (typeof options)[number];

	let fromSelection = $state<TempUnit>('celsius');
	let fromValue = $state(32);
	let toSelection = $state<TempUnit>('fahrenheit');
	let result = $state<number | null>(null);

	function toCelsius(value: number, from: TempUnit): number {
		switch (from) {
			case 'celsius':
				return value;
			case 'fahrenheit':
				return ((value - 32) * 5) / 9;
			case 'kelvin':
				return value - 273.15;
		}
	}

	function fromCelsius(value: number, to: TempUnit): number {
		switch (to) {
			case 'celsius':
				return value;
			case 'fahrenheit':
				return (value * 9) / 5 + 32;
			case 'kelvin':
				return value + 273.15;
		}
	}

	function onclick() {
		if (isNaN(fromValue)) {
			alert('Invalid input!');
			return;
		}

		const celsiusValue = toCelsius(fromValue, fromSelection);
		result = parseFloat(fromCelsius(celsiusValue, toSelection).toFixed(1));
	}
</script>

<div class="flex w-full max-w-2xl flex-col gap-2 rounded-xl border-2 border-neutral-600 p-5">
	<h3 class="mt-3 mb-6 text-center text-4xl font-bold">Convert temperature</h3>

	<span class="text-lg font-semibold">From:</span>
	<select
		class="mb-4 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 text-neutral-100"
		bind:value={fromSelection}
	>
		{#each options as option (option)}
			<option value={option}>{option}</option>
		{/each}
	</select>

	<span class="text-lg font-semibold">To:</span>
	<select
		class="mb-4 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 text-neutral-100"
		bind:value={toSelection}
	>
		{#each options as option (option)}
			<option value={option}>{option}</option>
		{/each}
	</select>

	<input
		type="number"
		name="fromValue"
		bind:value={fromValue}
		class="rounded-xl border border-neutral-700 px-4 py-2 text-xl outline-none"
	/>

	{#if result}
		<h3 class="mt-8 mb-4 text-center text-4xl font-bold">{result} {toSelection}</h3>
	{/if}

	<button
		class="mt-6 cursor-pointer rounded-lg bg-violet-600 py-2 text-xl font-semibold hover:bg-violet-700"
		{onclick}>Convert</button
	>
</div>
