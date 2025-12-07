<script lang="ts">
	// TODO docs?
	// import LibraryDetail from '@fuzdev/fuz_ui/LibraryDetail.svelte';
	import {Library} from '@fuzdev/fuz_ui/library.svelte.js';
	import EcosystemLinksPanel from '@fuzdev/fuz_ui/EcosystemLinksPanel.svelte';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';

	import {library_json} from '$routes/library.js';

	const library = new Library(library_json);

	// TODO standardize
</script>

<main class="width_upto_md">
	<section class="box">
		<header class="box">
			<h1 class="my_xl3">webdevladder</h1>
		</header>
		<Breadcrumb>{library_json.package_json.glyph}</Breadcrumb>
	</section>
	<EcosystemLinksPanel />
	<!-- <section class="box width_100 mb_lg">
		<div class="panel p_md width_upto_md">
			<LibraryDetail {library} />
		</div>
	</section> -->
	<section class="box">
		<DocsFooter {library}>
			<div class="mb_xl">
				<Breadcrumb>{library_json.package_json.glyph}</Breadcrumb>
			</div>
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
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
	section {
		margin-bottom: var(--space_xl5);
	}
</style>
