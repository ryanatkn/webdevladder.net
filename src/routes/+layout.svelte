<script lang="ts">
	import '$routes/fuz.css';
	import '@fuzdev/fuz_code/theme.css';
	import '$routes/style.css';

	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import type {Snippet} from 'svelte';
	import {blog_feed_context} from '@fuzdev/fuz_blog/blog.js';

	import {feed} from '$routes/blog/feed.js';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	blog_feed_context.set(feed);
</script>

<svelte:head>
	<title>webdevladder.net</title>
	<link rel="alternate" type="application/atom+xml" title="Atom" href={feed.atom.feed_url} />
</svelte:head>

<ThemeRoot>
	{@render children()}
</ThemeRoot>
