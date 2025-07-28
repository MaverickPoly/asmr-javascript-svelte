<script lang="ts">
	import { marked } from 'marked';

	let input = $state('');
	let markdownState = $derived(marked.parse(input));

	function markdownContent(node: HTMLDivElement, html: string) {
		node.innerHTML = html;
		return {
			update(newHtml: string) {
				node.innerHTML = newHtml;
			}
		};
	}
</script>

<main class="flex h-screen w-screen">
	<textarea bind:value={input} class="h-full flex-1 resize-none p-4 text-lg outline-none"
	></textarea>

	<div
		class="md:prose-md prose prose-sm max-w-none flex-1 overflow-auto bg-neutral-50 p-4 lg:prose-lg"
		use:markdownContent={markdownState.toString()}
	></div>
</main>
