<script lang="ts">
    import {usersStore, type UsersStoreType, type UserType} from "$lib/UsersStore";
    import {onDestroy, onMount} from "svelte";

    /*
    // Options 1:
    let data: UsersStoreType
    const unsubscribe = usersStore.subscribe(value => {
        data = value;
    });
    onDestroy(unsubscribe)

    // Option 2:
    $: users = $usersStore
     */

    let formState = {username: "", phone: ""};

    let data: UsersStoreType
    const unsubscribe = usersStore.subscribe(value => data = value)
    onDestroy(unsubscribe)

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        console.log(data.users)

        if (!formState.username) {
            return alert("Username is missing!")
        }
        if (!formState.phone) {
            return alert("Phone number is missing!")
        }

        for (let user of data.users) {
            if (user.username === formState.username) {
                return alert("User with that username already exists!")
            }
            if (user.phone === formState.phone) {
                return alert("User with that phone number already exists!")
            }
        }
        usersStore.addUser(formState)
        formState = {username: "", phone: ""};
    }

    const handleDelete = (user: UserType) => {
        usersStore.deleteUser(user.username)
    }
</script>

<main class="max-w-3xl mx-auto px-4">
    <h2 class="font-bold text-4xl mt-6 mb-5 text-center">Contact List Svelte</h2>

    <form onsubmit={handleSubmit} class="flex flex-col gap-3">
        <input
            type="text"
            name="username"
            bind:value={formState.username}
            placeholder="Username"
            class="p-2 rounded-xl border border-neutral-300 focus:border-green-600 outline-none"
        />

        <div class="flex gap-4">
            <input
                type="text"
                name="phone"
                bind:value={formState.phone}
                placeholder="Phone"
                class="flex-1 p-2 rounded-xl border border-neutral-300 focus:border-green-600 outline-none"
            />

            <button
                class="px-6 py-2 text-lg rounded-xl bg-green-600 duration-200 hover:bg-green-700 text-white cursor-pointer"
                type="submit"
            >Add</button>
        </div>
    </form>

    <div class="mt-6">
        {#each data.users as user, index (index)}
            <div class="flex w-full justify-between items-center rounded-xl border duration-300 border-neutral-200 hover:border-neutral-500 p-3 mb-2">
                <div class="flex flex-col gap-2">
                    <h3 class="text-2xl font-semibold">{user.username}</h3>
                    <h4 class="text-xl text-neutral-700">{user.phone}</h4>
                </div>

                <button class="rounded-xl flex items-center justify-center cursor-pointer text-white bg-red-500 hover:bg-red-600 w-10 h-10" onclick={() => handleDelete(user)} >
                    D
                </button>
            </div>
        {/each}
    </div>
</main>
