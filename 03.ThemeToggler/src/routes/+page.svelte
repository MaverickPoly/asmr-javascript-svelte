<script>
    import IoIosMoon from "svelte-icons/io/IoIosMoon.svelte";
    import WiDaySunny from "svelte-icons/wi/WiDaySunny.svelte";

    let theme = $state("dark"); // dark | light

    function onclick() {
        theme = theme === "dark" ? "light" : "dark";
    }
</script>

<main class={`${theme}`}>
    <button {onclick} class="btn">
        {#if theme === "dark" }
             <IoIosMoon />
        {:else }
            <WiDaySunny />
        {/if}
    </button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad quod, totam doloremque natus dolor esse possimus quos neque impedit?</p>
</main>


<style>
    :global {
        body {
            display: flex;
            width: 100%;
            min-height: 100vh;
            margin: 0;
            padding: 0;
        }
    }

    main {
        display: flex;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background: #fff;
        color: black;
    }
    main.dark {
        background: #111;
        color: white;
    }
    .btn {
        border-radius: 50%;
        border: 1px solid blueviolet;
        width: 50px;
        background: #eddbff;
        height: 50px;
        cursor: pointer;
        padding: 10px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .btn:hover {
        background: #e4c7ff;
    }

</style>