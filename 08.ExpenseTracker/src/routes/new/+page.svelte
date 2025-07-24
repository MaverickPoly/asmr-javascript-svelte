<script lang="ts">
	import { expenseStore } from '$lib/expenses';
	import { goto } from '$app/navigation';

	let formState = $state<{ type: 'expenditure' | 'earning'; title: string; amount: number }>({
		title: '',
		amount: 0.0,
		type: 'expenditure'
	});

	function onsubmit(e: SubmitEvent) {
		e.preventDefault();

		expenseStore.addExpense(formState);

		goto('/');
	}
</script>

<div class="min-h-[90vh] flex items-center justify-center">
	<form
		{onsubmit}
		class="max-w-xl w-full mx-4 p-8 rounded-xl border-2 border-neutral-600 gap-4 flex flex-col"
	>
		<h2 class="text-4xl font-bold mb-4 text-center">New Expense</h2>

		<input
			class="px-4 py-2 rounded-lg border border-neutral-700 outline-none focus:ring-1"
			bind:value={formState.title}
			name="title"
			type="text"
			placeholder="Title..."
		/>
		<input
			class="px-4 py-2 rounded-lg border border-neutral-700 outline-none focus:ring-1 appearance-none"
			bind:value={formState.amount}
			name="amount"
			type="number"
			placeholder="Amount..."
		/>

		<select
			name="type"
			bind:value={formState.type}
			class="px-4 py-2 rounded-lg border border-neutral-700 outline-none focus:ring-1 bg-neutral-900 text-neutral-100"
		>
			<option value="expenditure">Expenditure</option>
			<option value="earning">Earning</option>
		</select>

		<button
			type="submit"
			class="cursor-pointer mt-4 font-semibold py-2 text-lg rounded-lg bg-neutral-300 hover:bg-neutral-100 text-neutral-800"
			>Create</button
		>
	</form>
</div>
