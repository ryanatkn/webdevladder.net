<script lang="ts">
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Community_Links from '$routes/Community_Links.svelte';
	import Project_Links from '$routes/Project_Links.svelte';

	// TODO put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="width_md">
	<section class="box">
		<header class="box">
			<h1 class="my_xl3">webdevladder</h1>
			<img
				src="{base}/favicon.png"
				width="var(--icon_size_xl2)"
				height="var(--icon_size_xl2)"
				alt="the webdevladder icon, the James Webb Space Telescope alignment light flare flower against deep star-filled space"
				class="mb_xl"
			/>
			<blockquote class="shadow_inset_xs px_xl">climbing together 🪜</blockquote>
		</header>
	</section>
	<section class="panel p_md shadow_outset_xs w_100">
		<div class="panel shadow_inset_xs bg px_xl3 py_xl">
			<h2 class="mt_md">welcome</h2>
			<p>
				Webdevladder is <a href="https://youtube.com/@webdevladder">a YouTube channel</a> and blog
				for realworld webdev with TypeScript and <a href="https://svelte.dev/">Svelte</a>.
			</p>
			<p>
				While working on free and open source software, I'm making these videos on the realworld
				technical topics I find most interesting, often advanced and very niche.
			</p>
			<p>Each video will have an accompanying blog post here - Atom feed coming soon.</p>
			<aside>
				<Community_Links />
			</aside>
			<nav class="size_xl5 box row wrap">
				<Project_Links />
			</nav>
		</div>
	</section>
	<section>
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
