<script>
    let quote = $state("");
    let error = $state(null);
    /*
    {
      "quote": "The will of man is his happiness.",
      "author": "Friedrich Schiller",
      "category": "happiness"
    }
    */

    async function generateQuote() {
        await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: {'X-Api-Key': '8niGfnH7H86EM6U/2TCXkw==tSXbQuKD5BjGzGuD'}
        })
            .then(response => response.json())
            .then(data => quote = data[0])
            .catch(err => error = err)
    }
</script>

<main class="flex items-center justify-center w-full min-h-[80vh]">
    <div class="rounded-lg shadow-md hover:shadow-xl bg-white p-8 flex flex-col gap-4 items-center max-w-lg w-full mx-auto duration-300">
        <h1 class="text-3xl font-bold mb-6">Random Quote Generator</h1>
        {#if quote}
            <h3 class="text-xl text-neutral-800 text-center">{quote.quote}</h3>
            <h3 class="text-2xl font-semibold">- {quote.author}</h3>
        {:else if error}
            <p class="text-semibold text-red-500 text-lg">{error}</p>
        {/if}

        <button onclick={generateQuote} class="px-5 mt-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white cursor-pointer">Generate Quote</button>
    </div>
</main>
