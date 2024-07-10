<script lang="ts" context="module">
	import type {Blog_Post_Data} from '@ryanatkn/fuz_blog/blog.js';

	export const post = {
		title: 'Hello webdevladder blog',
		slug: 'hello-webdevladder-blog',
		date_published: '2024-07-10T22:07:32.473Z',
		date_modified: '2024-07-10T22:07:32.473Z',
		summary: "creating webdevladder's blog",
		tags: ['webdev', 'svelte', 'typescript', 'sveltekit', 'vite'],
	} satisfies Blog_Post_Data;
</script>

<script lang="ts">
	import {base} from '$app/paths';
</script>

<p>
	<a href="{base}/a/b/c">todo a local link example</a>
</p>
