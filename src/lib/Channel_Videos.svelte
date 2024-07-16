<script lang="ts">
	import Video from '$lib/Video.svelte';
	import type {Channel} from '$lib/channel.js';

	interface Props {
		channel: Channel;
	}

	const {channel}: Props = $props();

	// TODO @many probably extract, maybe to `fuz_video`
</script>

<section>
	<h3><a href={channel.url}>@{channel.name}</a></h3>
	<blockquote>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html channel.summary}
	</blockquote>
	<ol>
		{#each channel.videos as video (video.url)}
			<li>
				<Video {video} />
			</li>
		{/each}
	</ol>
</section>
