<script lang="ts">
	import type {Video_Item} from '$routes/video.js';
	import Video from '$routes/Video.svelte';

	const webdevladder_videos: Video_Item[] = [
		{
			title: 'How Svelte runes syntax is better than plain JavaScript with signals',
			url: 'https://www.youtube.com/watch?v=IsJtmbvW2SI',
		},
	];

	const webdevladder_vods_videos: Video_Item[] = [
		{
			title: 'Svelte 5 refactoring to reactive SvelteSet in my ear trainer Earbetter',
			url: 'https://www.youtube.com/watch?v=bE-BYtepFr8',
		},
	];
</script>

<h2 class="mt_md">videos</h2>
<section>
	<h3><a href="https://www.youtube.com/@webdevladder">@webdevladder</a></h3>
	<blockquote>
		technical videos about realworld topics in TypeScript and <a href="https://svelte.dev/"
			>Svelte</a
		>
	</blockquote>
	<ol>
		{#each webdevladder_videos as video (video.url)}
			<li>
				<Video {video} />
			</li>
		{/each}
	</ol>
</section>
<section>
	<h3><a href="https://www.youtube.com/@webdevladder_vods">@webdevladder_vods</a></h3>
	<blockquote>raw realworld programming in TypeScript and Svelte</blockquote>
	<ol>
		{#each webdevladder_vods_videos as video (video.url)}
			<li>
				<Video {video} />
			</li>
		{/each}
	</ol>
</section>
