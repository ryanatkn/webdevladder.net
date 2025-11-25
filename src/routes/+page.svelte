<script lang="ts">
	import {resolve} from '$app/paths';
	import {Pkg} from '@ryanatkn/fuz/pkg.svelte.js';
	import DocsFooter from '@ryanatkn/fuz/DocsFooter.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {webdevladder_logo} from '@ryanatkn/fuz/logos.js';
	import EcosystemLinks from '@ryanatkn/fuz/EcosystemLinks.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import ProjectLinks from '@ryanatkn/fuz/ProjectLinks.svelte';

	import {package_json, src_json} from '$routes/package.js';
	import Videos from '$lib/Videos.svelte';
	import {channels} from '$routes/channel_data.js';

	// TODO put in context?
	const pkg = new Pkg(package_json, src_json);
</script>

<main class="width_upto_md">
	<section class="box">
		<header class="box">
			<Svg data={webdevladder_logo} size="var(--icon_size_xl2)" attrs={{class: 'mt_xl5'}} />
			<h1 class="my_xl3">webdevladder</h1>
			<blockquote>up ↗ 🪜</blockquote>
		</header>
	</section>
	<section class="box gap_lg">
		<Card href={resolve('/blog')} icon="🖊️">blog</Card>
		<Card href={resolve('/tools')} icon="🪄" align="right">tools</Card>
	</section>
	<section class="panel p_md shadow_inset_bottom_xs width_100">
		<div class="panel shadow_inset_xs bg p_xl">
			<h2 class="mt_md">welcome</h2>
			<p>
				Webdevladder is a blog and collection of YouTube channels for my open source webdev <a
					href="https://www.ryanatkn.com/">work</a
				>. I'm writing blog posts and making educational videos on the technical topics I find most
				interesting, often advanced and very niche. Some topics have both a blog post and
				accompanying video.
			</p>
			<aside>
				<EcosystemLinks />
			</aside>
			<nav class="font_size_xl5 box row flex_wrap_wrap">
				<ProjectLinks />
			</nav>
		</div>
	</section>
	<section class="panel p_md shadow_inset_bottom_xs width_100">
		<div class="panel shadow_inset_xs bg p_xl">
			<Videos {channels} />
		</div>
	</section>
	<section class="mb_xl7">
		<DocsFooter {pkg}>
			{#snippet logo_header()}
				<a class="mb_md" href={resolve('/about')}>about</a>
			{/snippet}
		</DocsFooter>
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
