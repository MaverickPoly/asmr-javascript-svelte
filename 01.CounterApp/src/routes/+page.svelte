<script>
    let counter = $state(0);

    function increment() {
        counter++;
    }
    function decrement() {
        counter--;
    }
</script>


<div class="container">
    <div class="counter">
        <button class="" onclick={decrement}>-</button>
        <span>{counter}</span>
        <button class="" onclick={increment}>+</button>
    </div>

    <a href="/about">About Page</a>
</div>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 18px;
    }
    .counter {
        border: 1px solid #aaa;
        border-radius: 6px;
        background: #f9f9f9;
        overflow: hidden;
    }
    button {
        background: #eee;
        border: none;
        padding: 12px;
        font-size: 18px;
        cursor: pointer
    }
    button:hover {
        background: #e9e9e9;
    }
    span {
        padding: 0 10px;
        font-size: 24px;
    }

    a {
        margin-top: 30px;
        font-size: 17px;
        color: #2860c5;
        text-decoration: underline;
    }
</style>
