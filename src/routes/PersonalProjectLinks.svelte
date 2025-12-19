<script lang="ts">
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import {
		logo_gro,
		logo_fuz,
		logo_fuz_css,
		logo_fuz_template,
		logo_fuz_ui,
	} from '@fuzdev/fuz_ui/logos.js';

	const size = 'var(--icon_size_lg)';
</script>

<!--<a href="https://www.spiderspace.org/"></a>--><!--<a href="https://www.webdevladder.net/"></a>-->
<!-- <a
	class="project_link"
	title="Zzz - bot control hq"
	href="https://www.zzz.software/"><Svg data={logo_zzz} {size} /><span class="name">Zzz</span></a
> -->
<a
	class="project_link"
	title="Gro - task runner and toolkit extending SvelteKit"
	href="https://gro.ryanatkn.com/"><Svg data={logo_gro} {size} /><span class="name">Gro</span></a
>
<a class="project_link" title="Fuz - zippy stack for digital autonomy" href="https://www.fuz.dev/"
	><Svg data={logo_fuz} {size} /><span class="name">Fuz</span></a
>
<a class="project_link" title="Fuz UI - Svelte UI library" href="https://ui.fuz.dev/"
	><Svg data={logo_fuz_ui} {size} /><span class="name">Fuz UI</span></a
>
<a class="project_link" title="Fuz CSS - CSS framework" href="https://css.fuz.dev/"
	><Svg data={logo_fuz_css} {size} /><span class="name">Fuz CSS</span></a
>
<a
	class="project_link"
	title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro"
	href="https://template.fuz.dev/"
	><Svg data={logo_fuz_template} {size} /><span class="name">fuz_template</span></a
>

<style>
	.project_link {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space_md);
		text-align: center;
	}

	.project_link:hover {
		text-decoration: none;
	}
	.project_link:hover .name {
		text-decoration: underline;
	}

	.project_link .name {
		display: block;
		margin-top: var(--font_size_sm);
		font-size: var(--font_size_lg);
		font-weight: 400;
	}
</style>
