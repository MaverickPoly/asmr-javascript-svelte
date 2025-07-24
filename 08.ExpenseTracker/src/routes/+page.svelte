<script lang="ts">
	import type { Expense } from '$lib';
	import { onDestroy, onMount } from 'svelte';
	import { expenseStore } from '$lib/expenses';

	let expenses: Expense[] = $state([]);

	const unsubscribe = expenseStore.subscribe((value) => (expenses = value));

	onMount(expenseStore.fetchExpenses);

	function calculateTotal() {
		let s = 0;
		for (const expense of expenses) {
			if (expense.type === 'expenditure') {
				s -= expense.amount;
			} else {
				s += expense.amount;
			}
		}
		return s;
	}

	const total = $derived(calculateTotal());

	onDestroy(unsubscribe);
</script>

<div class="flex items-center justify-center flex-col min-h-screen my-10">
	<div
		class="flex flex-col max-w-2xl w-full mx-auto bg-neutral-900 p-6 rounded-xl shadow-md shadow-neutral-200/10"
	>
		<!-- Info -->
		<div class={`text-center mt-8`}>
			<h2 class={`text-6xl font-bold ${total > 0 ? 'text-green-500' : 'text-red-500'}`}>
				{total}$
			</h2>
		</div>

		<div class="w-full h-[1px] bg-neutral-600 my-10"></div>

		<!-- List -->
		<div class="flex flex-col gap-2">
			{#each expenses as expense (expense.date)}
				<div class="flex justify-between items-center hover:bg-neutral-800 py-2 px-4 rounded-xl">
					<div class="flex gap-4 items-center">
						<!-- Icon -->
						{#if expense.type === 'earning'}
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
								<circle cx="16" cy="16" r="15" stroke="#4CAF50" stroke-width="2" fill="none" />
								<polygon points="16,8 24,20 8,20" fill="#4CAF50" />
							</svg>
						{:else}
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
								<circle cx="16" cy="16" r="15" stroke="#F44336" stroke-width="2" fill="none" />
								<polygon points="8,12 24,12 16,24" fill="#F44336" />
							</svg>
						{/if}
						<h4 class="text-2xl font-semibold">{expense.title}</h4>
					</div>
					<div class="flex gap-4 items-center">
						<h3 class="text-2xl font-semibold">{expense.amount}$</h3>
						<button
							onclick={() => expenseStore.deleteExpense(expense.date)}
							class="p-2 rounded-lg bg-red-800 hover:bg-red-700 cursor-pointer">Delete</button
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<a
		class="absolute top-4 right-4 rounded-xl w-12 h-12 flex items-center justify-center border border-neutral-700 p-3 text-3xl font-bold cursor-pointer hover:bg-neutral-900"
		href="/new"
		aria-label="New Expense"
	>
		<svg
			class="w-24 h-24 text-white"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				x1="12"
				y1="5"
				x2="12"
				y2="19"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<line
				x1="5"
				y1="12"
				x2="19"
				y2="12"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>
	</a>
</div>
