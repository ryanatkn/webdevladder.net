<script lang="ts">
	import Video from '$lib/Video.svelte';
	import type {Channel} from '$lib/channel.js';
	import {filter_playlist_videos} from '$lib/video.js';
	import Logo from '$lib/Logo.svelte';

	interface Props {
		channel: Channel;
	}

	const {channel}: Props = $props();

	// TODO @many probably extract, maybe to `fuz_video`

	// TODO @many maybe render a tab with all videos for this channel, or even all channels in one list

	const videos_without_playlists = channel.videos.filter((v) => v.playlists.length === 0);
</script>

<section class="channel_videos">
	<!-- TODO format these logos, responsive design -->
	<header class="mb_xl7">
		<div class="logo_wrapper"><Logo name={channel.name} size="var(--icon_size_xl)" /></div>
		<div class="logo_label">
			<h3>
				<a href={channel.url}>@{channel.name}</a>
			</h3>
			<blockquote>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html channel.summary}
			</blockquote>
		</div>
	</header>
	{#each channel.playlists as playlist (playlist.name)}
		<section>
			<!-- TODO format these logos, responsive design -->
			<header class="mb_lg">
				<div class="logo_wrapper"><Logo name={playlist.name} /></div>
				<div class="logo_label">
					<h4>
						<a href={playlist.url}>{playlist.name}</a>
					</h4>
					<blockquote>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html playlist.summary}
					</blockquote>
				</div>
			</header>
			<ol>
				{#each filter_playlist_videos(channel.videos, playlist) as video (video.url)}
					<li>
						<Video {video} />
					</li>
				{/each}
			</ol>
		</section>
	{/each}
	{#if videos_without_playlists.length}
		<section>
			<ol>
				{#each videos_without_playlists as video (video.url)}
					<li>
						<Video {video} />
					</li>
				{/each}
			</ol>
		</section>
	{/if}
</section>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	h3,
	h4 {
		margin-top: var(--space_md);
		margin-bottom: 0;
	}
	blockquote {
		margin-top: var(--space_md);
	}
	.logo_wrapper {
		margin-right: var(--space_lg);
	}
	.logo_label {
		flex: 1;
		max-width: 100%;
	}
	/* @media max-width(600px) {
		header {
		}
	} */
</style>
