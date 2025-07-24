import { writable } from 'svelte/store';
import type { Expense } from '$lib/index';

function createExpenseStore() {
	const expenses = writable<Expense[]>([]);

	function fetchExpenses() {
		const stored = localStorage.getItem('expenses');
		if (stored) {
			try {
				expenses.set(JSON.parse(stored) as Expense[]);
			} catch (e) {
				expenses.set([]);
			}
		} else {
			localStorage.setItem('expenses', JSON.stringify([]));
		}
	}

	function addExpense({
		type,
		title,
		amount
	}: {
		type: 'expenditure' | 'earning';
		title: string;
		amount: number;
	}) {
		const expense: Expense = { type, title, amount, date: new Date().toISOString() };

		expenses.update((prev) => {
			const updated = [...prev, expense];
			localStorage.setItem('expenses', JSON.stringify(updated));
			return updated;
		});
	}

	function deleteExpense(date: string) {
		expenses.update((prev) => {
			const updated = prev.filter((expense) => expense.date !== date);
			localStorage.setItem('expenses', JSON.stringify(updated));
			return updated;
		});
	}

	return {
		subscribe: expenses.subscribe,
		fetchExpenses,
		addExpense,
		deleteExpense
	};
}

export const expenseStore = createExpenseStore();
