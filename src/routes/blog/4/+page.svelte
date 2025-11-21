<script lang="ts" module>
	import type {Blog_Post_Data} from '@ryanatkn/fuz_blog/blog.js';

	export const post = {
		title: 'Building a secure web server with Deno for fuz_app',
		slug: 'building-a-secure-web-server-with-deno-for-fuz_app',
		date_published: '2025-11-21T12:52:52.287Z',
		date_modified: '2025-11-21T12:52:52.287Z',
		summary: 'todo',
		tags: ['todo'],
	} satisfies Blog_Post_Data;
</script>

<script lang="ts">
	import Blog_Post from '@ryanatkn/fuz_blog/Blog_Post.svelte';
</script>

<!-- This component is totally optional, you have full control over the page. -->
<Blog_Post {post}>
	<p>TODO content goes here</p>
</Blog_Post>
