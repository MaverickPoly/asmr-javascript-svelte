<script lang="ts">
	import { goto } from '$app/navigation';

	let formState = $state({ username: '', email: '', password: '', confirmPassword: '', error: '' });

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		if (!formState.username) {
			return (formState.error = 'Username is required!');
		}
		if (!formState.email) {
			return (formState.error = 'Email is required!');
		}
		if (!formState.password) {
			return (formState.error = 'Password is required!');
		}
		if (!formState.confirmPassword) {
			return (formState.error = 'Confirm password is required!');
		}
		if (formState.password !== formState.confirmPassword) {
			return (formState.error = 'Passwords do not match!');
		}

		goto('/');
	}
</script>

<div class="flex items-center justify-center min-h-screen">
	<form
		onsubmit={handleSubmit}
		class="rounded-xl border-2 border-neutral-600 flex flex-col gap-4 max-w-xl p-6 w-full mx-auto text-center"
	>
		<h2 class="text-4xl font-bold mb-8">Create account</h2>

		<p class="text-red-500 text-lg font-semibold">{formState.error}</p>
		<input
			type="text"
			name="username"
			class="px-4 py-2 rounded-lg border border-neutral-700 outline-none focus:ring-1"
			placeholder="Username"
			bind:value={formState.username}
		/>
		<input
			type="email"
			name="email"
			class="px-4 py-2 rounded-lg border border-neutral-700 outline-none focus:ring-1"
			placeholder="Email"
			bind:value={formState.email}
		/>
		<input
			type="password"
			name="password"
			class="px-4 py-2 rounded-lg border border-neutral-700 outline-none focus:ring-1"
			placeholder="Password"
			bind:value={formState.password}
		/>
		<input
			type="password"
			name="confirmPassword"
			class="px-4 py-2 rounded-lg border border-neutral-700 outline-none focus:ring-1"
			placeholder="Confirm Password"
			bind:value={formState.confirmPassword}
		/>

		<button
			type="submit"
			class="bg-neutral-300 hover:bg-neutral-50 text-neutral-800 font-semibold text-lg rounded-lg p-1 mt-6 cursor-pointer"
			>Register</button
		>
	</form>
</div>
