<script lang="ts">
    const {createTodo}: {createTodo: (title: string) => void} = $props();

    let title = $state("");

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        if (title) {
            createTodo(title);
            title = ""
        }
    }
</script>


<form onsubmit={handleSubmit}>
    <input type="text" name="text" bind:value={title} placeholder="Todo title.."/>
    <button type="submit">Create</button>
</form>

<style>
    form {
        width: 100%;
        display: flex;
        gap: 14px;
    }
    input {
        flex: 1;
        border-radius: 6px;
        outline: none;
        background: #ddd;
        font-size: 18px;
        padding: 8px;
        border: 2px solid #888;
    }
    input:focus {
        border-color: #9000ff;
    }
    button {
        font-size: 18px;
        padding: 10px 20px;
        background: indigo;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    }
    button:hover {
        background: #5a009b;
    }
</style>