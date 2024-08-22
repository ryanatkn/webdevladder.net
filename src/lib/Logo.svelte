<script lang="ts">
	import Webdevladder_Logo from '@ryanatkn/fuz/Webdevladder_Logo.svelte';
	import Fuz_Logo from '@ryanatkn/fuz/Fuz_Logo.svelte';
	import Moss_Logo from '@ryanatkn/fuz/Moss_Logo.svelte';
	import Earbetter_Logo from '@ryanatkn/fuz/Earbetter_Logo.svelte';
	import type {Channel_Name, Playlist_Name} from '$lib/channel.js';

	interface Props {
		name: Channel_Name | Playlist_Name;
		size?: string;
	}

	const {name, size = 'var(--icon_size_lg)'}: Props = $props();

	// TODO make generic so we can extract to `fuz_video`
</script>

{#if name === 'webdevladder' || name === 'webdevladder.net'}
	<Webdevladder_Logo {size} />
{:else if name === 'webdevladder_vods'}
	<Webdevladder_Logo {size} fill="#6a3e1b" />
{:else if name === 'Moss'}
	<Moss_Logo {size} />
{:else if name === 'fuz'}
	<Fuz_Logo {size} />
{:else if name === 'fuz_blog'}
	<Fuz_Logo fill="#b19a25" {size} />
{:else if name === 'fuz_mastodon'}
	<Fuz_Logo fill="#6a40bf" {size} />
{:else if name === 'Earbetter'}
	<Earbetter_Logo {size} />
{:else}
	<p>unknown logo: {name}</p>
{/if}
