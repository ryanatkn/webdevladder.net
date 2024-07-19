<script lang="ts">
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import {package_json, src_json} from '$routes/package.js';
	import Time_Converted from '$routes/tools/Time_Converter.svelte';

	const pkg = parse_package_meta(package_json, src_json);
</script>

<main class="width_md box mx_auto px_lg">
	<header>
		<h1 class="my_xl3">Tools</h1>
		<div class="mb_xl5">
			<Breadcrumb>{package_json.glyph}</Breadcrumb>
		</div>
	</header>
	<section>
		<Time_Converted />
	</section>
	<section class="box">
		<Library_Footer {pkg}>
			<div class="mb_xl">
				<Breadcrumb>{package_json.glyph}</Breadcrumb>
			</div>
		</Library_Footer>
	</section>
</main>
