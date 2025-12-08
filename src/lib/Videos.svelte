<script lang="ts">
	import ChannelVideos from './ChannelVideos.svelte';
	import type {Channel} from './channel.js';

	const {
		channels,
	}: {
		channels: Array<Channel>;
	} = $props();

	// TODO @many probably extract, maybe to `fuz_video`

	// TODO @many maybe render a tab with all videos for this channel, or even all channels in one list
</script>

<h2 class="mt_md">videos</h2>
{#each channels as channel (channel.name)}
	<ChannelVideos {channel} />
{/each}
