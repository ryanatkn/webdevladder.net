<script lang="ts">
	import type {Video_Json} from './video.js';
	import Duration from './Duration.svelte';

	interface Props {
		video: Video_Json;
	}

	const {video}: Props = $props();

	// TODO @many probably extract, maybe to `fuz_video`
</script>

<div class="panel p_md mb_lg">
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a href={video.url}>{video.title}</a>
	<div>
		<Duration duration={video.duration} />
	</div>
</div>
