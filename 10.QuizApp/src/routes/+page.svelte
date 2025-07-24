<script lang="ts">
	import { goto } from '$app/navigation';

	const questions = [
		{
			question: 'What is the first programming language?',
			options: ['C', 'Fortran', 'Assembly', 'Pascal'],
			correct: 'Fortran'
		},
		{
			question: 'What is the fastest language?',
			options: ['Rust', 'C++', 'C', 'Python'],
			correct: 'C'
		},
		{
			question: 'What is the easiest language for beginners?',
			options: ['Python', 'C', 'PHP', 'Javascript'],
			correct: 'Python'
		},
		{
			question: 'Which programming language is used for machine learning and AI most?',
			options: ['Go', 'JavaScript', 'Python', 'C++'],
			correct: 'Python'
		},
		{
			question: 'Which programming language is used for Frontend?',
			options: ['PHP', 'Python', 'GO', 'Javascript'],
			correct: 'Javascript'
		}
	];

	let currentQuestion = $state(0);
	let selectedOptions = $state<number[]>(Array(questions.length).fill(-1));
	let progressPercent = $derived(calculateProgressPercent());

	function calculateProgressPercent() {
		let questionsAnswered = 0;
		for (let option of selectedOptions) {
			if (option !== -1) questionsAnswered++;
		}
		return Math.round((questionsAnswered / questions.length) * 100);
	}

	function next() {
		currentQuestion++;
	}

	function handleSubmit() {
		const correctAnswers = questions.filter((q, i) => q.options[selectedOptions[i]] === q.correct);
		goto(`/result?correct=${correctAnswers.length}&total=${questions.length}`);
	}

	function previous() {
		currentQuestion--;
	}

	function canUserSubmit() {
		for (let option of selectedOptions) {
			if (option === -1) {
				return false;
			}
		}
		return true;
	}
</script>

<div class="mx-auto flex w-full max-w-3xl flex-col gap-5 rounded-lg border border-neutral-600 p-8">
	<!-- Progress Bar -->
	<div class="mb-6 h-[10px] w-full overflow-hidden rounded-3xl bg-neutral-200">
		<div class={`h-full bg-blue-600`} style={`width: ${progressPercent}%`}></div>
	</div>

	<!-- Question -->
	<h3 class="mb-8 text-start text-3xl font-bold">
		{currentQuestion + 1}. {questions[currentQuestion].question}
	</h3>

	<!-- Options -->
	<div class="mb-6 flex flex-col gap-3 text-center">
		{#each questions[currentQuestion].options as option, id (id)}
			<button
				class={`
					cursor-pointer rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-2 hover:bg-neutral-100
					${selectedOptions[currentQuestion] === id ? 'border-2 border-sky-700' : ''}
				`}
				onclick={() => (selectedOptions[currentQuestion] = id)}
			>
				<span class="text-xl">{option}</span>
			</button>
		{/each}
	</div>

	<!-- Controls -->
	<div class="flex w-full items-center justify-between">
		{#if currentQuestion > 0}
			<button
				onclick={previous}
				class="cursor-pointer rounded-xl bg-blue-500 px-6 py-2 text-xl font-semibold text-white hover:bg-blue-600"
				>Previous</button
			>
		{/if}
		{#if currentQuestion !== questions.length - 1}
			<button
				onclick={next}
				class="cursor-pointer rounded-xl bg-blue-500 px-6 py-2 text-xl font-semibold text-white hover:bg-blue-600"
				>Next</button
			>
		{/if}
		{#if currentQuestion === questions.length - 1}
			<button
				onclick={handleSubmit}
				disabled={!canUserSubmit()}
				class="cursor-pointer rounded-xl bg-blue-500 px-6 py-2 text-xl font-semibold text-white hover:bg-blue-600 disabled:cursor-default disabled:bg-neutral-400"
				>Submit</button
			>
		{/if}
	</div>
</div>
