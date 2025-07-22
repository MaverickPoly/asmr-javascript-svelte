<script lang="ts">
    import type {Todo} from "$lib";
    import Form from "$lib/Form.svelte";
    import TodoCard from "$lib/TodoCard.svelte";
    import {onMount} from "svelte";


    let todos: Todo[]  = $state([]);

    onMount(() => {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify([
                {
                    title: "Workout",
                    createdAt: new Date(),
                    completed: true,
                }
            ]))
        }

        todos = (JSON.parse(localStorage.getItem("todos") || "[]") as Todo[])
            .map(todo => ({...todo, createdAt: new Date(todo.createdAt)}));
    })

    $effect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    })

    function createTodo(title: string) {
        todos = [...todos, {title: title, createdAt: new Date(), completed: false}];
    }

    function deleteTodo(createdAt: Date) {
        todos = todos.filter(todo => todo.createdAt.getTime() !== createdAt.getTime());
    }

    function toggleComplete(createdAt: Date) {
        todos = todos.map(todo => todo.createdAt.getTime() === createdAt.getTime() ? {...todo, completed: !todo.completed} : todo);
    }
</script>

<div class="container">
    <Form {createTodo}/>

    <div class="list">
        {#each todos as todo (todo.createdAt)}
            <TodoCard {todo} {deleteTodo} {toggleComplete} />
        {/each}
    </div>
</div>

<style>
    :global {
        body {
            display: flex;
            background: #222;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin: 0;
            padding: 0;
            width: 100%;
        }
    }
    .container {
        max-width: 800px;
        width: 100%;
        margin: 20px;
    }
    .list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 20px;
    }
</style>
