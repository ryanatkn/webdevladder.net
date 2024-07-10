<script lang="ts" context="module">
	import type {Blog_Post_Data} from '@ryanatkn/fuz_blog/blog.js';
	import Blog_Post from '@ryanatkn/fuz_blog/Blog_Post.svelte';

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
	//
</script>

<Blog_Post {post}>
	<p>
		This blog was created with <code>fuz_blog</code>, a SvelteKit library for making blogs for
		developers. (<a href="https://blog.fuz.dev">blog.fuz.dev</a>,
		<a href="https://github.com/ryanatkn/fuz_blog">source code</a>)
	</p>
	<p>
		If you're interested in the full videos where I made the software, extracting it from my
		personal blog:
	</p>
	<ul>
		<li>
			<a href="https://www.youtube.com/watch?v=wP9qghWkTLc"
				>Coding a blog creation library for SvelteKit developers from scratch</a
			>
		</li>
		<li>
			<a href="https://www.youtube.com/watch?v=dh_6Vyjbuiw"
				>Extracting fuz_blog from my personal blog and publishing to npm</a
			>
		</li>
	</ul>
	<p>More to come!</p>
</Blog_Post>
