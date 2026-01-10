<script lang="ts">
	import type {Snippet} from 'svelte';

	const {
		number,
		children,
	}: {
		number: number; // TODO name?
		children: Snippet;
	} = $props();
</script>

<div class="mb_xl5" id="footnote_{number}">
	<span class="font_family_mono float:left mr_sm"
		><a href="#footnote_link_{number}">[{number}]</a></span
	>
	{@render children()}
</div>
