<script>
    import {onMount} from "svelte";

    let current = $state(new Date());

    onMount(() => {
        setInterval(update, 1000);
    })

    function update() {
        current = new Date();
    }
</script>

<div class="flex items-center justify-center min-h-[90vh] w-full">
    <h4 class="text-6xl font-bold">{current.toLocaleTimeString()}</h4>
</div>


