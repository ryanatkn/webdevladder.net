<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '@ryanatkn/fuz_code/prism.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import Contextmenu_Root from '@ryanatkn/fuz/Contextmenu_Root.svelte';
	import {contextmenu_action} from '@ryanatkn/fuz/contextmenu_state.svelte.js';
	import type {Snippet} from 'svelte';
	import {set_blog_feed} from '@ryanatkn/fuz_blog/blog.js';

	import {feed} from '$routes/blog/feed.js';
	import Settings from '$routes/Settings.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	set_blog_feed(feed);

	let show_settings = $state(false);
</script>

<svelte:head>
	<title>webdevladder.net</title>
	<link rel="alternate" type="application/atom+xml" title="Atom" href={feed.atom.feed_url} />
</svelte:head>

<svelte:body
	use:contextmenu_action={[
		{
			snippet: 'text',
			props: {
				content: 'Settings',
				icon: '?',
				run: () => {
					show_settings = true;
				},
			},
		},
		{
			snippet: 'text',
			props: {
				content: 'Reload',
				icon: '⟳',
				run: () => {
					location.reload();
				},
			},
		},
	]}
/>

<Themed>
	<Contextmenu_Root>
		{@render children()}
		{#if show_settings}
			<Dialog onclose={() => (show_settings = false)}>
				<div class="pane">
					<Settings />
				</div>
			</Dialog>
		{/if}
	</Contextmenu_Root>
</Themed>
