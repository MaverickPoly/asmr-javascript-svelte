<script>
    import {fade, slide} from "svelte/transition";

    const {question, id, openAccordion, open} = $props();
</script>


<div class="w-full border border-neutral-600 rounded-md p-6 hover:bg-neutral-800">
    <!-- Header -->
    <div class="cursor-pointer" onclick={() => openAccordion(id)}>
        <h3 class="text-2xl font-bold">{question.question}</h3>
    </div>

    <!-- Open State -->
    {#if open}
        <div transition:slide>
            <div class="w-full bg-neutral-600 h-[1px] my-6"></div>
            <p class="text-neutral-200">{question.answer}</p>
        </div>
    {/if}
</div>
