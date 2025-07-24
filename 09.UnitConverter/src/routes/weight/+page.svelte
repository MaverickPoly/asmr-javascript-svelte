<script lang="ts">
	const weights = {
		kg: 1.0,
		tonn: 1000.0,
		gram: 0.001,
		pound: 0.45
	};
	const options = ['kg', 'tonn', 'gram', 'pound'];

	let fromSelection = $state<'kg' | 'tonn' | 'gram' | 'pound'>('kg');
	let fromValue = $state(5);
	let toSelection = $state<'kg' | 'tonn' | 'gram' | 'pound'>('gram');
	let result = $state<number | null>(null);

	function onclick() {
		if (!fromValue) {
			alert('Invalid input!');
		}
		const v1 = weights[fromSelection] * fromValue;
		result = parseFloat((v1 / weights[toSelection]).toFixed(1));
	}
</script>

<div class="flex w-full max-w-2xl flex-col gap-2 rounded-xl border-2 border-neutral-600 p-5">
	<h3 class="mt-3 mb-6 text-center text-4xl font-bold">Convert weight</h3>

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
