<script lang="ts">
	import Video from '$routes/Video.svelte';
	import {webdevladder_videos, webdevladder_vods_videos} from '$routes/video_data.js';
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
