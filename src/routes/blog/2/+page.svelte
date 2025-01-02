<script lang="ts" module>
	import {base} from '$app/paths';
	import type {Blog_Post_Data} from '@ryanatkn/fuz_blog/blog.js';

	export const post = {
		title: 'Introducing webdevladder',
		slug: 'introducing-webdevladder',
		date_published: '2024-08-14T18:10:26.092Z',
		date_modified: '2025-01-02T23:41:35.315Z',
		summary:
			'I describe the purpose of my YouTube channel and blog, webdevladder, and my plans for the future',
		tags: ['webdevladder'],
		comments: {
			type: 'mastodon',
			url: 'https://fosstodon.org/@webdevladder/113312132188029470',
		},
	} satisfies Blog_Post_Data;
</script>

<script lang="ts">
	import Blog_Post from '@ryanatkn/fuz_blog/Blog_Post.svelte';
</script>

<Blog_Post {post}>
	<section>
		<!-- <aside>
			Prefer to watch? This blog post is also a <a
				href="https://www.youtube.com/watch?v=FHJnRybXZNw">video</a
			>.
		</aside> -->
		<p>
			Webdevladder is a <a href="https://youtube.com/@webdevladder">YouTube channel</a> and
			<a href="https://www.webdevladder.net/blog">blog</a> about the technical topics that interest
			me as I make open source software. I've been a professional web developer since 2011, and
			since 2019 I've been working in public full-time, publishing most of my code to
			<a href="https://github.com/ryanatkn">GitHub</a> as I write it.
		</p>
		<p>
			The open web is humanity's shared, decentralized platform. I love the web for its wide reach
			and gatekeeper optionality. For all its flaws, the web allows us to reach more people with
			less friction than any other platform. My goal is to work in this space on the things I find
			meaningful. I've been lucky to have the resources to work independently for the past 5 years
			as I pursue a career in open source. Over the next few years I hope to continue making
			software that people value enough to sustain its development.
		</p>
		<p>
			With webdevladder, I'm producing videos and blog posts about the technology I use in my work,
			with an emphasis on <a href="https://svelte.dev/">Svelte</a> and
			<a href="https://www.typescriptlang.org/">TypeScript</a>. My projects span the whole stack,
			from a CSS framework to a Svelte UI library to a fullstack social app framework. I also make
			websites that use the stack and tools to streamline the process. The social app framework is
			my only project that's not yet released, and I think it's the one that's most likely to gather
			a community that wants to fund it.
		</p>
		<p>
			My goal with webdevladder is to deepen my knowledge of web technology and improve my
			communication skills through blogging and videos. I'm producing educational videos on my <a
				href="https://youtube.com/@webdevladder">main channel</a
			>, and I have a <a href="https://youtube.com/@webdevladder_vods">second channel</a> with less polished
			content like raw programming sessions and demos of my apps.
		</p>
		<p>
			But before you subscribe to <a href="{base}/blog/feed.xml">the feed</a>, here's some more
			context.
		</p>
	</section>
	<section>
		<h2>What webdevladder is not</h2>
		<p>
			I'm seeking to be an independent open source developer funded directly by my users, which is
			an uncommon situation in 2024. I hope that the few user-funded developers of today will be
			joined by many more in the future, and I want to be among them.
		</p>
		<p>
			I share some similarities with a few contemporary archetypes, but there are important
			differences. The main point is that I'm devoting my time primarily to making software. All of
			the other stuff, like this blog, is supplementary.
		</p>
		<p>
			For one, I'm not a startup. I will never take investor funding for these projects. My goal is
			to make the best software I can, and extracting profits is counterproductive. I believe you
			can make good software with a company, even great software, but not the best of the kind I'm
			building. Incentives always influence action to some degree, and I prefer to keep
			organizational profitability out of the equation for pure software projects that operate no
			services.
		</p>
		<p>
			I'm also not an entertainer, influencer, or video content creator. Making software, not
			videos, will remain my priority. Being funded through YouTube ad revenue or sponsorships would
			misalign my incentives, taking my focus away from building software. My current stance is that
			I won't do any software-related sponsorships, which means the opinions you get from me are
			entirely rooted in either my preferences or professional experience.
		</p>
		<p>
			And finally, I'm not a comprehensive educator. I won't retread the same beginner content
			that's excellently covered elsewhere, and I won't sell courses or create content for media
			companies. While webdevladder is educational content, it's tailored to what I find interesting
			and generally more advanced and less accessible. I don't run a Discord community and I'm
			focused on my projects.
		</p>
	</section>
	<section>
		<h2>My plan</h2>
		<p>
			I'm lucky to have the resources to pursue my <a href="https://www.ryanatkn.com/tree"
				>projects</a
			> for a few more years, and whether I continue on my own or find a job to collaborate with a team
			(I miss this!), I'll continue working on my software without trying to monetize it directly. It's
			possible I could reach a point where user funding could make sense, but it's not a goal right now.
		</p>
		<p>
			<a href="https://youtube.com/@webdevladder">@webdevladder</a> is a channel where I get to
			learn the ropes of video communication in a low pressure environment. My other channel
			<a href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a> gives me even lower pressure
			experience making videos related to my software and practices, including unfiltered programming
			sessions for those interested in learning that particular way.
		</p>
		<p>For more about me, see my <a href="https://www.ryanatkn.com/">personal website</a>.</p>
		<p>
			If any of this sounds interesting, there's all kinds of links and buttons to click. See you
			next time.
		</p>
	</section>
</Blog_Post>
