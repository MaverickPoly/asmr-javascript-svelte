<script>
	const { text, disabled, onclick } = $props();
</script>

<button
	class="cursor:normal cursor-pointer rounded-lg bg-rose-600 px-5 py-2 text-white hover:bg-rose-700 disabled:bg-neutral-400"
	{disabled}
	{onclick}
>
	{text}
</button>
