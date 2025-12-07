<script lang="ts" module>
	import type {BlogPostData} from '@fuzdev/fuz_blog/blog.js';
	import BlogPost from '@fuzdev/fuz_blog/BlogPost.svelte';

	export const post = {
		title: 'Hello webdevladder blog',
		slug: 'hello-webdevladder-blog',
		date_published: '2024-07-10T22:07:32.473Z',
		date_modified: '2024-07-10T23:06:38.928Z',
		summary: "creating webdevladder's blog",
		tags: ['webdev', 'svelte', 'typescript', 'sveltekit', 'vite'],
		comments: {
			type: 'mastodon',
			url: 'https://fosstodon.org/@webdevladder/113312147463274655',
		},
	} satisfies BlogPostData;
</script>

<script lang="ts">
	//
</script>

<BlogPost {post}>
	<section>
		<p>
			This blog was created with <code>fuz_blog</code>, a SvelteKit library for making blogs for
			developers. (<a href="https://blog.fuz.dev">blog.fuz.dev</a>,
			<a href="https://github.com/fuzdev/fuz_blog">source code</a>)
		</p>
		<p>
			Here's the video where I added the blog and this post with Mastodon comments: <a
				href="https://www.youtube.com/watch?v=V4Fg3-B6Su8"
				>Creating my channel's blog and adding Mastodon comments</a
			>
		</p>
		<p>
			If you're interested in the videos where I created <code>fuz_blog</code>, extracting it from
			my personal blog:
		</p>
		<ol>
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
		</ol>
		<p>Stay tuned for more.</p>
	</section>
</BlogPost>
