<script lang="ts">
	// TODO docs?
	// import LibraryDetail from '@ryanatkn/fuz/LibraryDetail.svelte';
	import {Library} from '@ryanatkn/fuz/library.svelte.js';
	import EcosystemLinksPanel from '@ryanatkn/fuz/EcosystemLinksPanel.svelte';
	import DocsFooter from '@ryanatkn/fuz/DocsFooter.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

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
