<script lang="ts">
	import Svg, {type Svg_Data} from '@ryanatkn/fuz/Svg.svelte';
	import {
		webdevladder_logo,
		fuz_logo,
		moss_logo,
		earbetter_logo,
		fuz_blog_logo,
		fuz_mastodon_logo,
	} from '@ryanatkn/fuz/logos.js';
	import type {Channel_Name, Playlist_Name} from '$lib/channel.js';

	interface Props {
		name: Channel_Name | Playlist_Name;
		size?: string;
	}

	const {name, size = 'var(--icon_size_lg)'}: Props = $props();

	const logos_by_name: Record<Channel_Name | Playlist_Name, Svg_Data | undefined> = {
		webdevladder: webdevladder_logo,
		'webdevladder.net': webdevladder_logo,
		webdevladder_vods: webdevladder_logo,
		Moss: moss_logo,
		fuz: fuz_logo,
		fuz_blog: fuz_blog_logo,
		fuz_mastodon: fuz_mastodon_logo,
		Earbetter: earbetter_logo,
	};

	// TODO make generic so we can extract to `fuz_video`
	const data = $derived.by(() => {
		const d = logos_by_name[name];
		if (!d) throw Error('unknown logo: ' + name);
		return d;
	});

	const fill = $derived(name === 'webdevladder_vods' ? '#6a3e1b' : undefined);
</script>

<Svg {data} {size} {fill} />
