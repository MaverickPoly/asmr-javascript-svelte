<script lang="ts">
    import type {Todo} from "$lib/index";

    const {todo, deleteTodo, toggleComplete}: {
        todo: Todo,
        deleteTodo: (createdAt: Date) => void,
        toggleComplete: (createdAt: Date) => void,
    } = $props();
</script>


<div class={`todo ${todo.completed ? 'complete' : 'incomplete'}`}>
    <div class="col">
        <h2>{todo.title}</h2>
        <p>{todo.createdAt.toLocaleString()}</p>
    </div>
    <div class="actions">
        <button class="delete" onclick={() => deleteTodo(todo.createdAt)}>Delete</button>
        <button class="toggle" onclick={() => toggleComplete(todo.createdAt)}>{todo.completed ? "Complete" : "Incomplete"}</button>
    </div>
</div>

<style>
    .todo {
        margin: 0;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        border-radius: 6px;
    }
    .todo.complete {
        background: #00672b;
    }
    .todo.incomplete {
        background: #940000;
    }
    .col {
        display: flex;
        flex-direction: column;
        gap: 6px;

        * {
            padding: 0;
            margin: 0;
        }
        p {
            font-size: 16px;
        }

    }

    .actions {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    button {
        padding: 8px 16px;
        font-size: 16px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        color: white;
    }
    button.delete {
        background: red;
    }
    button.toggle {
        background: orange;
    }
</style>
