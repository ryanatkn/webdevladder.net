<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Copy_To_Clipboard from '@ryanatkn/fuz/Copy_To_Clipboard.svelte';

	import {parse_time, time_to_ms} from '$routes/tools/time.js';

	/**
	 * This component takes in a YouTube-formatted timestamp and outputs milliseconds.
	 */

	let str = $state('');

	const parsed_time = $derived(parse_time(str));

	const ms = $derived(parsed_time ? time_to_ms(parsed_time) : null);
</script>

<div class="time_converter">
	<label>
		<div class="title">Time converter</div>
		<input bind:value={str} />
		<p>Paste or type in a time like <code>1:23:45.999</code>.</p>
	</label>
	<div class="panel p_sm my_sm relative pr_xl7">
		<div class="size_xl">
			{#if ms != null}{ms}{:else}null{/if}
		</div>
		<small class="block text_2">milliseconds </small>
		<div class="copy">
			<Copy_To_Clipboard text={ms + ''} />
		</div>
	</div>
	<Code content={`const time = ${JSON.stringify(parsed_time, null, '\t')}`} lang="ts" />
</div>

<style>
	.copy {
		position: absolute;
		right: var(--space_sm);
		top: var(--space_sm);
	}
</style>
