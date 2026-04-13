<script lang="ts">
	// TODO docs?
	// import LibraryDetail from '@fuzdev/fuz_ui/LibraryDetail.svelte';
	import {Library} from '@fuzdev/fuz_ui/library.svelte.js';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';

	import PersonalEcosystemLinksPanel from '$routes/PersonalEcosystemLinksPanel.svelte';
	import {library_json} from '$routes/library.js';

	const library = new Library(library_json);

	// TODO standardize
</script>

<main class="column align-items:center mx_auto width_atmost_md pb_xl9">
	<section class="box">
		<header class="box">
			<h1 class="my_xl3 text-align:center">webdevladder</h1>
		</header>
		<Breadcrumb>{library_json.package_json.glyph}</Breadcrumb>
	</section>
	<PersonalEcosystemLinksPanel />
	<!-- <section class="box width:100% mb_lg">
		<div class="panel p_md width_atmost_md">
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
