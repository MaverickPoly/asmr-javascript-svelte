<script lang="ts">
	import type { Repo, User } from '$lib';
	import { Building, GitBranch, Link, Mail, MapPin, Twitter } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let username = $state('');
	let user = $state<User | null>(null);
	let repositories = $state<Repo[] | null>(null);
	async function onsubmit() {
		if (!username) return alert('Please enter a username!');
		await fetch(`https://api.github.com/users/${username}`)
			.then((res) => res.json())
			.then((data) => (user = data))
			.catch((err) => alert(err));
		await fetch(`https://api.github.com/users/${username}/repos`)
			.then((res) => res.json())
			.then((data) => (repositories = data))
			.catch((err) => alert(err));
	}
	// onMount(() => {
	// 	username = 'MaverickPoly';
	// 	onsubmit();
	// });
</script>

<main class="mx-auto flex w-full max-w-5xl flex-col">
	<form {onsubmit} class="mt-4 flex w-full items-center gap-5">
		<input
			type="text"
			placeholder="Username"
			bind:value={username}
			class="flex-1 rounded-full border border-neutral-200 p-3 text-lg outline-none focus:border-sky-600"
			required
		/>
		<button
			class="cursor-pointer rounded-full bg-sky-600 px-6 py-3 text-lg text-white hover:bg-sky-700 focus:ring-1"
			type="submit">Get User</button
		>
	</form>

	<!-- Profile Info -->
	<!--
		Login, visit, avatar, company?, location?, email?, bio?
		public_repos, public_gists, followers(url), following(url)
		created_at, blog?, twitter_username
	-->
	{#if user}
		<div class="mt-8 flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
			<div class="flex flex-col gap-2">
				<img class="h-72 w-72 rounded-full object-cover" src={user.avatar_url} alt={user.login} />
				<a
					href={user.html_url}
					class="mt-2 text-center text-xl font-semibold text-sky-500 hover:underline"
					target="_blank">Visit</a
				>

				<h2 class="text-3xl font-bold">{user.login}</h2>
				<p class="mb-2 text-lg">{user.created_at.split('T')[0]}</p>

				<div class="flex w-full items-center justify-between">
					<h5 class="">Following: {user.following}</h5>
					<h5 class="">Followers: {user.followers}</h5>
				</div>
				<div class="flex w-full items-center justify-between">
					<h5 class="">Repos: {user.public_repos}</h5>
					<h5 class="">Gists: {user.public_gists}</h5>
				</div>
			</div>
			<div class="flex flex-col items-start">
				{#if user.company}<h4 class="flex items-center gap-3 text-xl font-semibold">
						<Building />
						{user.company}
					</h4>{/if}
				{#if user.blog}<h4 class="flex items-center gap-3 text-lg">
						<Link />
						{user.blog}
					</h4>{/if}
				{#if user.location}<h4 class="flex items-center gap-3 text-lg font-semibold">
						<MapPin />
						{user.location}
					</h4>{/if}
				{#if user.email}<h4 class="flex items-center gap-3 text-xl font-semibold">
						<Mail />
						{user.email}
					</h4>{/if}
				{#if user.twitter_username}<h4 class="flex items-center gap-3 text-xl font-semibold">
						<Twitter />
						{user.twitter_username}
					</h4>{/if}

				{#if user.bio}
					<p class="mt-3 text-base text-neutral-800">{user.bio}</p>
				{/if}
			</div>
		</div>
	{/if}

	<!-- Repositories -->
	<!-- Repo:
	 Name, vist(html_url), description?, language, branch
	 -->
	{#if repositories}
		<div class="my-12 h-[1px] w-full bg-neutral-400"></div>

		<div class="grid-cols mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{#each repositories as repo (repo.id)}
				<a
					href={repo.html_url}
					class="rounded-lg border border-neutral-200 p-3 hover:border-sky-600"
					target="_blank"
				>
					<h2 class="mb-2 text-2xl font-semibold">{repo.name}</h2>
					<p class="text-sm text-neutral-800">{repo.description}</p>

					<h3 class="mt-1 mb-2 text-base text-sky-700">{repo.language}</h3>
					<span class="flex items-center gap-2">
						<GitBranch />
						{repo.default_branch}
					</span>
				</a>
			{/each}
		</div>
	{/if}
</main>
