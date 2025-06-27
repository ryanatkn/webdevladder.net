<script lang="ts" module>
	import {base} from '$app/paths';
	import type {Blog_Post_Data} from '@ryanatkn/fuz_blog/blog.js';

	export const post = {
		title: 'Introducing webdevladder',
		slug: 'introducing-webdevladder',
		date_published: '2024-08-14T18:10:26.092Z',
		date_modified: '2025-06-27T14:22:22.080Z',
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
			<a href="https://github.com/ryanatkn">GitHub</a> as I write it. Webdevladder is a public alias
			that feels comfortably decoupled from my personal life (being on GitHub since 2012 with my real
			name is weird in some respects, the professional environment strongnudged me to do it; in 2024
			I created this alias and site to gain some distance).
		</p>
		<p>
			The open web is humanity's shared, decentralized platform. I love it for its wide reach and
			gatekeeper optionality. For all its flaws, the web allows us to reach more people with less
			friction than any other platform. My goal is to work on open source web software that I find
			meaningful. I've been lucky to have the resources to work independently for the past 6+ years
			as I pursue a career in open source, and over the next few years I hope to continue making
			software that people value enough to sustain its development.
		</p>
		<p>
			With Webdevladder, I'm producing videos and blog posts about the technology I use in my work,
			with an emphasis on <a href="https://svelte.dev/">Svelte</a> and
			<a href="https://www.typescriptlang.org/">TypeScript</a>. My projects span the whole stack,
			from a CSS framework to a Svelte UI library to a fullstack dev-and-end-user tool. I also make
			websites that use the stack and tools to streamline the process. The fullstack tool is
			<a href="https://www.zzz.software/">Zzz</a>, and it's my focus for funding because its target
			audience is both nontechnical and dev users, and it's the main thing my other software has
			been designed for.
		</p>
		<p>
			My goal here is to deepen my knowledge of web technology and improve my communication skills
			through blogging and videos. You're reading the blog now, and I'm producing educational videos
			on my <a href="https://youtube.com/@webdevladder">main channel</a>, and less polished content
			like raw programming sessions and demos of my apps on a
			<a href="https://youtube.com/@webdevladder_vods">second channel</a>.
		</p>
		<p>
			But before you subscribe to <a href="{base}/blog/feed.xml">the feed</a>, here's some more
			context.
		</p>
	</section>
	<section>
		<h2>What Webdevladder is not</h2>
		<p>
			I'm seeking to be an independent open source developer funded directly by my users, which is
			an uncommon situation in 2024. I hope that the few user-funded developers of today will be
			joined by many more in the future, and I want to be among them. I like the idea of having many
			smaller supporters versus one or a few large ones, permitting me more freedom from unhelpful
			influence. I don't need huge resources to sustain my work, and I may do some marginal hustling
			like selling merch. Thinking wishfully I'd like to hire a small team or be sponsored by a
			company while keeping independence on my open source projects.
		</p>
		<p>
			I share some similarities with a few contemporary archetypes, but there are important
			differences. The main point is that I'm devoting my time primarily to making software. All of
			the other stuff, like this blog, is supplementary.
		</p>
		<p>
			For one, I'm not a startup. I will never take investor funding for these projects or sell
			control over the core repos Zzz, Fuz, Moss, Gro, etc - excluding any products I build using
			the stack. I'm trying to make the social contract transparent and respectful for any community
			that forms. My goal is to make the best software I can, and profit-mindedness is
			counterproductive. I believe profit-incentivized companies can make geat software, but not the
			best of the kind I want in the long-term. I prefer to keep organizational profitability out of
			the equation for pure software projects that operate no services (a neat productivity trick:
			keep your FOSS dev unburdened by IRL service operations) If parts of my stack are successful,
			they'll be owned by a nonprofit or equivalent.
		</p>
		<p>
			I'm also not an entertainer, influencer, or video content creator. Making software, not
			videos, will remain my priority. Being funded through YouTube ad revenue or sponsorships would
			misalign my incentives, taking my focus away from building software. My current stance is that
			I won't do any software-related sponsorships, which means the dev opinions you get from me are
			entirely rooted in either my preferences or professional experience. I'm open to sponsorship
			in the form of a job where I can work on Zzz and its dependencies at least part-time (if I'm
			going to shill, I'll shill one company at a time, and I'll really mean it, mostly), and I may
			use the content creator playbook, minus dev-related sponsorships, to build a financially
			supportive audience.
		</p>
		<p>
			And finally, I'm not a comprehensive educator. I won't retread the same beginner content
			that's excellently covered elsewhere, and I won't sell courses or do any time-consuming
			content creation for media companies. While Webdevladder is educational content, it's tailored
			to what I find interesting and generally more advanced and less accessible. I don't run a
			Discord community and I'm focused on my projects, but I would like to, so to speak, prop up a
			ladder that anyone could climb.
		</p>
	</section>
	<section>
		<h2>My plan</h2>
		<p>
			I'm lucky to have the resources to pursue my <a href="https://www.ryanatkn.com/tree"
				>projects</a
			> for a few more years, and regardless of my personal situation I plan to continue working on this
			software and monetize it without possibly-enshittifying patterns. It's all permissively licensed
			so anyone can create commercial projects using it, and I may do this for a company to sustain development,
			but I'm a stickler for boundaries when it comes to what goes into the repos.
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
