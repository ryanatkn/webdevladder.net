<script lang="ts">
	import '@fuzdev/fuz_css/style.css';
	import '@fuzdev/fuz_css/theme.css';
	import '@fuzdev/fuz_code/theme.css';
	import '$routes/fuz.css';
	import '$routes/style.css';

	import Themed from '@fuzdev/fuz_ui/Themed.svelte';
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

<Themed>
	{@render children()}
</Themed>
