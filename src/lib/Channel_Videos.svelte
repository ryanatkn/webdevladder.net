<script lang="ts">
	import Video from '$lib/Video.svelte';
	import type {Channel} from '$lib/channel.js';
	import {filter_playlist_videos} from '$lib/video.js';

	interface Props {
		channel: Channel;
	}

	const {channel}: Props = $props();

	// TODO @many probably extract, maybe to `fuz_video`

	// TODO @many maybe render a tab with all videos for this channel, or even all channels in one list

	const videos_without_playlists = channel.videos.filter((v) => v.playlists.length === 0);
</script>

<section>
	<h3><a href={channel.url}>@{channel.name}</a></h3>
	<blockquote>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html channel.summary}
	</blockquote>
	{#each channel.playlists as playlist (playlist.name)}
		<h4><a href={playlist.url}>{playlist.name}</a></h4>
		<ol>
			{#each filter_playlist_videos(channel.videos, playlist) as video (video.url)}
				<li>
					<Video {video} />
				</li>
			{/each}
		</ol>
	{/each}
	{#if videos_without_playlists.length}
		<ol>
			{#each videos_without_playlists as video (video.url)}
				<li>
					<Video {video} />
				</li>
			{/each}
		</ol>
	{/if}
</section>
