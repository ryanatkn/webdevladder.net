<script lang="ts">
	import Channel_Videos from './Channel_Videos.svelte';
	import type {Channel} from './channel.js';

	interface Props {
		channels: Array<Channel>;
	}

	const {channels}: Props = $props();

	// TODO @many probably extract, maybe to `fuz_video`

	// TODO @many maybe render a tab with all videos for this channel, or even all channels in one list
</script>

<h2 class="mt_md">videos</h2>
{#each channels as channel (channel.name)}
	<Channel_Videos {channel} />
{/each}
