<script lang="ts">
	// TODO docs?
	// import PackageDetail from '@ryanatkn/fuz/PackageDetail.svelte';
	import {Pkg} from '@ryanatkn/fuz/pkg.svelte.js';
	import EcosystemLinksPanel from '@ryanatkn/fuz/EcosystemLinksPanel.svelte';
	import DocsFooter from '@ryanatkn/fuz/DocsFooter.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import {package_json, src_json} from '$routes/package.js';

	const pkg = new Pkg(package_json, src_json);

	// TODO standardize
</script>

<main class="width_upto_md">
	<section class="box">
		<header class="box">
			<h1 class="my_xl3">webdevladder</h1>
		</header>
		<Breadcrumb>{package_json.glyph}</Breadcrumb>
	</section>
	<EcosystemLinksPanel />
	<!-- <section class="box width_100 mb_lg">
		<div class="panel p_md width_upto_md">
			<PackageDetail {pkg} />
		</div>
	</section> -->
	<section class="box">
		<DocsFooter {pkg}>
			<div class="mb_xl">
				<Breadcrumb>{package_json.glyph}</Breadcrumb>
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
