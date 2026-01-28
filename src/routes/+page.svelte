<script lang="ts">
	import {resolve} from '$app/paths';
	import {Library} from '@fuzdev/fuz_ui/library.svelte.js';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import Card from '@fuzdev/fuz_ui/Card.svelte';

	import PersonalEcosystemLinks from '$routes/PersonalEcosystemLinks.svelte';
	import PersonalProjectLinks from '$routes/PersonalProjectLinks.svelte';
	import {logo_webdevladder} from '$lib/logos.js';
	import {library_json} from '$routes/library.js';
	import Videos from '$lib/Videos.svelte';
	import {channels} from '$routes/channel_data.js';

	// TODO put in context?
	const library = new Library(library_json);
</script>

<main class="width_atmost_md">
	<section class="box">
		<header class="box">
			<Svg data={logo_webdevladder} size="var(--icon_size_xl2)" class="mt_xl5" />
			<h1 class="my_xl3">webdevladder</h1>
			<blockquote>up ↗ 🪜</blockquote>
		</header>
	</section>
	<section class="box gap_lg">
		<Card href={resolve('/blog')} icon="🖊️">blog</Card>
		<Card href={resolve('/tools')} icon="🪄" align="right">tools</Card>
	</section>
	<section class="panel p_md shadow_inset_bottom_xs width:100%">
		<div class="panel shadow_inset_xs shade_00 p_xl">
			<h2 class="mt_md">welcome</h2>
			<p>
				Webdevladder is a blog and collection of YouTube channels for my open source webdev <a
					href="https://www.ryanatkn.com/">work</a
				>. I'm writing blog posts and making educational videos on the technical topics I find most
				interesting, often advanced and very niche. Some topics have both a blog post and
				accompanying video.
			</p>
			<aside>
				<PersonalEcosystemLinks />
			</aside>
			<nav class="font_size_xl5 box row flex-wrap:wrap">
				<PersonalProjectLinks />
			</nav>
		</div>
	</section>
	<section class="panel p_md shadow_inset_bottom_xs width:100%">
		<div class="panel shadow_inset_xs shade_00 p_xl">
			<Videos {channels} />
		</div>
	</section>
	<section class="mb_xl7">
		<DocsFooter {library}>
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
