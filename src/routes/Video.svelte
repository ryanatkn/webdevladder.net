<script lang="ts">
	import type {Video_Item} from '$routes/video.js';
	import Duration from '$routes/Duration.svelte';

	interface Props {
		video: Video_Item;
	}

	const {video}: Props = $props();
</script>

<div class="panel p_md mb_lg">
	<a href={video.url}>{video.title}</a>
	<div>
		<Duration duration={video.duration} />
	</div>
</div>
