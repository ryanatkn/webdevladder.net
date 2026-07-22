<script lang="ts">
	// TODO docs?
	// import LibraryDetail from '@fuzdev/fuz_ui/LibraryDetail.svelte';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';
	import { site_context } from '@fuzdev/fuz_ui/site.svelte.ts';

	import PersonalEcosystemLinksPanel from '$routes/PersonalEcosystemLinksPanel.svelte';

	const site = site_context.get();
</script>

<main class="column align-items:center mx_auto width_atmost_md pb_xl9">
	<section class="box">
		<header class="box">
			<h1 class="my_xl3 text-align:center">webdevladder</h1>
		</header>
		<Breadcrumb />
	</section>
	<PersonalEcosystemLinksPanel />
	<!-- <section class="box width:100% mb_lg">
		<div class="panel p_md width_atmost_md">
			<LibraryDetail {library} />
		</div>
	</section> -->
	<section class="box">
		<DocsFooter repo_url={site.repo_url}>
			<div class="mb_xl">
				<Breadcrumb />
			</div>
		</DocsFooter>
	</section>
</main>
