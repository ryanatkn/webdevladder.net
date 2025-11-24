<script lang="ts">
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import {Pkg} from '@ryanatkn/fuz/pkg.svelte.js';
	import Ecosystem_Links_Panel from '@ryanatkn/fuz/Ecosystem_Links_Panel.svelte';
	import Docs_Footer from '@ryanatkn/fuz/Docs_Footer.svelte';
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
	<Ecosystem_Links_Panel />
	<section class="box width_100 mb_lg">
		<div class="panel p_md width_upto_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box">
		<Docs_Footer {pkg}>
			<div class="mb_xl">
				<Breadcrumb>{package_json.glyph}</Breadcrumb>
			</div>
		</Docs_Footer>
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
