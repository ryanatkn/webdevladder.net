<script lang="ts">
	import type {Video_Item} from '$routes/video.js';

	interface Props {
		video: Video_Item;
	}

	const {video}: Props = $props();
</script>

<div>
	<a href={video.url}>{video.title}</a>
</div>
