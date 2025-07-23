<script>
    import Accordion from "$lib/Accordion.svelte";

    const questions = [
        {
            "question": "Can everyone become a programmer?",
            "answer": "Everyone can become a professional programmer, with some effort and hard work. Everything depends on a person, person's obsession with coding.",
        },
        {
            "question": "What is the worst programming language?",
            "answer": "All programming languages are nice on their own, and there is no such answer: the worst one. Every language can be used in specific fields, and have their pros and cons.",
        },
        {
            "question": "Are programmers millionaires?",
            "answer": "No, they are not. Programming is tough, and to reach a level of success, like 'millionaire', requires a lot of practice, hard work, patience and consistency. Just a few individuals in this sphere manage to become one.",
        },
        {
            "question": "Do programmers start their career from childhood?",
            "answer": "No, they do not. Average age of a programmer is 30 years old and most programmers start learning this field at not very young age, therefore the concept of 'baby programmer' is absolutely absurd!",
        },
    ]

    let currentAccordion = $state(-1);

    function openAccordion(id) {
        if (id === currentAccordion) {
            currentAccordion = -1;
        } else {
            currentAccordion = id;
        }
    }
</script>

<main class="max-w-5xl mx-auto w-full px-8 flex flex-col">
    <h1 class="text-center text-6xl font-extrabold mt-10 mb-4">FAQ</h1>
    <p class="text-xl text-neutral-200 text-center mb-14">Frequently asked questions.</p>

    <div class="flex gap-4 flex-col">
        {#each questions as question, id (id)}
            <Accordion {question} {id} {openAccordion} open={id === currentAccordion} />
        {/each}
    </div>
</main>

<style>
    :global(body) {
        background: #222;
        color: white;
    }
</style>
