<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Copy_To_Clipboard from '@ryanatkn/fuz/Copy_To_Clipboard.svelte';

	import {parse_time, time_to_ms} from '$lib/time.js';

	/**
	 * This component takes in a YouTube-formatted timestamp and outputs milliseconds.
	 */

	let str = $state('');

	const parsed_time = $derived(parse_time(str));

	const ms = $derived(parsed_time ? time_to_ms(parsed_time) : null);
</script>

<label>
	<div class="title">Time converter</div>
	<input bind:value={str} />
	<p>Paste or type in a time like <code>1:23:45.999</code>.</p>
</label>
<div class="panel p_sm my_sm position_relative pr_xl7">
	<div class="font_size_xl">
		{#if ms != null}{ms}{:else}null{/if}
	</div>
	<small class="display_block text_color_3">milliseconds </small>
	<div class="copy">
		<Copy_To_Clipboard text={ms + ''} />
	</div>
</div>
<Code content={`const time = ${JSON.stringify(parsed_time, null, '\t')}`} lang="ts" />

<style>
	.copy {
		position: absolute;
		right: var(--space_sm);
		top: var(--space_sm);
	}
</style>
