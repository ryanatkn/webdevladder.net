<script lang="ts" module>
	import type {Blog_Post_Data} from '@ryanatkn/fuz_blog/blog.js';

	export const post = {
		title: 'Introducing webdevladder',
		slug: 'introducing-webdevladder',
		date_published: '2024-08-14T18:10:26.092Z',
		date_modified: '2024-08-14T18:10:26.092Z',
		summary:
			'I describe the purpose of my YouTube channel and blog, webdevladder, and my plans for the future',
		tags: ['webdevladder'],
		comments: {
			type: 'mastodon',
			url: 'https://mastodon.social/@webdevladder/112963856513901706',
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
		<p>But before you subscribe to the feed, here's some more context.</p>
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
			can make good software with a company, even great software, but not the best, not for the kind
			of software I'm building. Incentives always influence action, and the profit motive with group
			control is a relentless force.
		</p>
		<p>
			I'm also not an influencer or video content creator. Making software, not videos, will remain
			my priority. Being funded through YouTube ad revenue or sponsorships would create different
			incentives compared to user funding, taking my focus away from building software. My current
			stance is that I won't do any software-related sponsorships, which means the opinions you get
			from me are entirely rooted in either my preferences or professional experience.
		</p>
		<p>
			And finally, I'm not a comprehensive educator. I won't retread the same beginner content
			that's excellently covered elsewhere, and I won't sell courses or create content for media
			companies. While webdevladder is educational content, it's tailored to what I find interesting
			and generally more advanced and less accessible. There's mentorship happening in my Discord,
			but it can't take me away from the software too much or I'll have to scale it back. I would
			like to create a community of people who help each other learn, but there are educators who
			make that their whole thing and do it much better, and my community focuses more on my
			projects.
		</p>
	</section>
	<section>
		<h2>My plan</h2>
		<p>
			I'm lucky to have the resources to pursue my projects for a few more years, but I need funding
			in order to continue beyond that. I hope to be funded directly by the people who value my
			software, videos, and blog posts, so my incentives are as aligned as possible with both you
			and the software itself.
		</p>
		<p>
			<a href="https://zzz.ryanatkn.com/">Zzz</a> is the social app framework that I hope will
			provide enough value to be funded through donations. It builds on SvelteKit to streamline the
			creation of many kinds of social websites that are smaller-scale (think Postgres, not sqlite
			or <a href="https://www.youtube.com/watch?v=b2F-DItXtZs">webscale</a>). Out of the box it'll
			have chats, true forums, and other discussion formats and information management views using a
			shared data protocol. The idea is to take care of the bulk of the infrastructure needed to
			experiment with novel ideas in social contexts.
		</p>
		<p>
			My <a href="https://www.ryanatkn.com/tree">other software projects</a> either support Zzz -
			for example, my CSS framework <a href="https://moss.ryanatkn.com/">Moss</a> and Svelte UI
			library
			<a href="https://www.fuz.dev/">Fuz</a> - or they use Zzz (stay tuned for announcements), or they're
			for my own amusement and curiosity. They all share a common software base that I've largely built
			myself, which enables rapid and customizable development.
		</p>
		<p>
			While Zzz is my only active project that's not yet publicly available, I hope to have the
			first version released in late 2024. But it may be 2025. Definitely by the end of 2025, that's
			one software estimate I'll stand by. When it's ready, I'll make a new blog post and video with
			more of the story.
		</p>
		<p>
			My plan B is looking for a job where I can work on open source at least some of the time, even
			if it's not on my own projects. For longer than my 13 year career as a programmer, I've been
			prototyping software like Zzz as a hobby, and I've taken multiple self-funded breaks to pursue
			ideas with creative autonomy. This flexibility has led to some unexpected connections that a
			business would not value like I do, and I can't wait to share the fruits of these
			explorations.
		</p>
		<p>
			<a href="https://youtube.com/@webdevladder">@webdevladder</a> is a channel where I get to
			learn the ropes of video communication in a low pressure environment, and
			<a href="https://www.spiderspace.org/">Spiderspace</a> will be the channel I launch to share
			Zzz with a nontechnical audience when it's ready. My other channel
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
