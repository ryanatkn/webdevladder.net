<script lang="ts">
	import 'virtual:fuz.css';
	import '@fuzdev/fuz_code/theme.css';
	import './style.css';

	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import {SiteState, site_context} from '@fuzdev/fuz_ui/site.svelte.ts';
	import type {Snippet} from 'svelte';
	import {blog_feed_context} from '@fuzdev/fuz_blog/blog.ts';
	import pkg_json from 'virtual:pkg.json';

	import {logo_webdevladder} from '$lib/logos.ts';
	import {feed} from './blog/feed.ts';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	blog_feed_context.set(feed);

	site_context.set(new SiteState({icon: logo_webdevladder, pkg_json}));
</script>

<svelte:head>
	<title>webdevladder.net</title>
	<link rel="alternate" type="application/atom+xml" title="Atom" href={feed.atom.feed_url} />
</svelte:head>

<ThemeRoot>
	{@render children()}
</ThemeRoot>
