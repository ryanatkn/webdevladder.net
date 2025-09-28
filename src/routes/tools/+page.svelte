<script lang="ts">
	import Docs_Footer from '@ryanatkn/fuz/Docs_Footer.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import {parse_pkg} from '@ryanatkn/belt/pkg.js';

	import {package_json, src_json} from '$routes/package.js';
	import Time_Converter from '$routes/tools/Time_Converter.svelte';

	const pkg = parse_pkg(package_json, src_json);
</script>

<main class="width_upto_md box mx_auto px_lg pt_xl5 pb_xl9">
	<header>
		<div class="mb_xl5" style:--font_size="var(--font_size_xl)">
			<Breadcrumb>{package_json.glyph}</Breadcrumb>
		</div>
	</header>
	<section>
		<div class="mb_lg">
			<Time_Converter />
		</div>
		<p>
			<a href="https://www.youtube.com/watch?v=tNoG-CLLWXc&list=PLio_5jgyVNVlYerzp8npCg8mUs2zKEavS"
				>video</a
			> of me making this
		</p>
	</section>
	<section class="box">
		<Docs_Footer {pkg}>
			<div class="mb_xl">
				<Breadcrumb>{package_json.glyph}</Breadcrumb>
			</div>
		</Docs_Footer>
	</section>
</main>
