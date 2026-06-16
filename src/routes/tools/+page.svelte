<script lang="ts">
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';
	import {site_context} from '@fuzdev/fuz_ui/site.svelte.ts';

	import TimeConverter from './TimeConverter.svelte';

	const site = site_context.get();
</script>

<main class="width_atmost_md box mx_auto px_lg pt_xl5 pb_xl9">
	<header>
		<div class="mb_xl5" style:--font_size="var(--font_size_xl)">
			<Breadcrumb />
		</div>
	</header>
	<section>
		<div class="mb_lg">
			<TimeConverter />
		</div>
		<p>
			<a href="https://www.youtube.com/watch?v=tNoG-CLLWXc&list=PLio_5jgyVNVlYerzp8npCg8mUs2zKEavS"
				>video</a
			> of me making this
		</p>
	</section>
	<section class="box">
		<DocsFooter repo_url={site.repo_url}>
			<div class="mb_xl">
				<Breadcrumb />
			</div>
		</DocsFooter>
	</section>
</main>
