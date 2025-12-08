<script lang="ts">
	import type {VideoJson} from './video.js';
	import Duration from './Duration.svelte';

	const {
		video,
	}: {
		video: VideoJson;
	} = $props();

	// TODO @many probably extract, maybe to `fuz_video`
</script>

<div class="panel p_md mb_lg">
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a href={video.url}>{video.title}</a>
	<div>
		<Duration duration={video.duration} />
	</div>
</div>
