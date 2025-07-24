export interface Expense {
	type: 'expenditure' | 'earning';
	amount: number;
	title: string;
	date: string;
}
