<script lang="ts">
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Webdevladder_Logo from '@ryanatkn/fuz/Webdevladder_Logo.svelte';
	import Community_Links from '@ryanatkn/fuz/Community_Links.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Project_Links from '$routes/Project_Links.svelte';
	import Videos from '$lib/Videos.svelte';
	import {channels} from '$routes/channel_data.js';

	// TODO put in context?
	const pkg = parse_package_meta(package_json, src_json);
</script>

<main class="width_md">
	<section class="box">
		<header class="box">
			<Webdevladder_Logo size="var(--icon_size_xl2)" classes="mt_xl5" />
			<h1 class="my_xl3">webdevladder</h1>
			<blockquote class="shadow_inset_xs px_xl">climbing together 🪜</blockquote>
		</header>
	</section>
	<section class="panel p_md shadow_outset_xs w_100">
		<div class="panel shadow_inset_xs bg p_xl">
			<h2 class="mt_md">welcome</h2>
			<p>
				Webdevladder is a blog and collection of YouTube channels for <a
					href="https://www.ryanatkn.com/">my realworld webdev work</a
				>. The blog will be created soon, and I'll post videos here about the process of making it.
			</p>
			<ul>
				<li>
					<a href="https://www.youtube.com/@webdevladder">@webdevladder</a> - technical videos about
					realworld topics in TypeScript and <a href="https://svelte.dev/">Svelte</a>
				</li>
				<li>
					<a href="https://www.youtube.com/@webdevladder_vods">@webdevladder_vods</a> - raw realworld
					programming in TypeScript and Svelte
				</li>
			</ul>
			<p>
				While working on free and open source software, I'm making these videos on the realworld
				technical topics I find most interesting, often advanced and very niche.
			</p>
			<p>Some videos will have an accompanying blog post here - Atom feed coming soon.</p>
			<aside>
				<Community_Links />
			</aside>
			<nav class="size_xl5 box row flex_wrap">
				<Project_Links />
			</nav>
		</div>
	</section>
	<section class="box">
		<Card href="{base}/blog" icon="🖊️">blog</Card>
	</section>
	<section class="panel p_md shadow_outset_xs w_100">
		<div class="panel shadow_inset_xs bg p_xl">
			<Videos {channels} />
		</div>
	</section>
	<section>
		<a class="chip mb_md size_xl" href="{base}/tools">tools</a>
	</section>
	<section class="mb_xl7">
		<Library_Footer {pkg}>
			{#snippet logo_header()}
				<a class="mb_md" href="{base}/about">about</a>
			{/snippet}
		</Library_Footer>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
