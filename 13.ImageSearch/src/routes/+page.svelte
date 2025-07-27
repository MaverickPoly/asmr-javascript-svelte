<script>
    let search = $state("");
    let images = $state([]);

    async function onsubmit(e) {
        e.preventDefault();

        if (!search) return alert("Invalid search!")

        await fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=KmAl00U7hxyRuHW5mBmMh-rbbRK0hPp-lZwfBJ6xrMk`)
            .then(response => response.json())
            .then(data => images = data.results)
            .catch(error => alert(error));
    }
</script>

<main class="flex items-center justify-center w-full">
    <div class="max-w-7xl w-full mx-auto flex flex-col gap-4 min-h-screen">
        <h1 class="text-4xl text-center font-bold mt-3">Unsplash API Images</h1>
        <form {onsubmit} class="flex gap-6 items-center w-full p-4 w-full">
            <input
                type="text"
                placeholder="Search..."
                name="search"
                class="rounded-xl flex-1 outline-none border border-neutral-200 focus:border-neutral-500 p-3 text-lg"
                bind:value={search}
                required
            >
            <button type="submit" class="cursor-pointer bg-emerald-600 hover:bg-emerald-700 rounded-lg text-neutral-100 px-6 text-lg py-3">Search</button>
        </form>

        <!-- List of images -->
        <div class="flex flex-wrap gap-5 justify-center">
            {#each images as image (image.id)}
                <a class="group overflow-hidden rounded-lg relative w-96 h-72" href={image.urls.raw} target="_blank">
                    <div class="h-full w-full flex items-center absolute transition-transform inset-0 text-white p-5 top-0 left-0 justify-center bg-neutral-800/90 -translate-y-full group-hover:translate-y-0 duration-300">
                        <p class="text-center text-sm text-white">{image.description || "No description"}</p>
                    </div>
                    <img src={image.urls.raw} alt={image.slug} class="object-cover w-full h-full" loading="lazy">
                </a>
            {/each}
        </div>
    </div>
</main>