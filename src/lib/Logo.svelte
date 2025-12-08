<script lang="ts">
	import Svg, {type SvgData} from '@fuzdev/fuz_ui/Svg.svelte';
	import {logo_fuz, logo_fuz_css, logo_fuz_blog, logo_fuz_mastodon} from '@fuzdev/fuz_ui/logos.js';

	import type {ChannelName, PlaylistName} from './channel.js';
	import {logo_webdevladder, logo_earbetter} from './logos.js';

	const {
		name,
		size = 'var(--icon_size_lg)',
	}: {
		name: ChannelName | PlaylistName;
		size?: string;
	} = $props();

	const logos_by_name: Record<ChannelName | PlaylistName, SvgData | undefined> = {
		webdevladder: logo_webdevladder,
		'webdevladder.net': logo_webdevladder,
		webdevladder_vods: logo_webdevladder,
		fuz: logo_fuz,
		fuz_css: logo_fuz_css,
		fuz_blog: logo_fuz_blog,
		fuz_mastodon: logo_fuz_mastodon,
		Earbetter: logo_earbetter,
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
