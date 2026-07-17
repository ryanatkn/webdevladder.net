<script lang="ts">
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import {
		logo_gro,
		logo_fuz,
		logo_fuz_css,
		logo_fuz_template,
		logo_fuz_ui,
	} from '@fuzdev/fuz_ui/logos.ts';

	const size = 'var(--icon_size_lg)';
</script>

<!--<a href="https://www.spiderspace.org/"></a>--><!--<a href="https://www.webdevladder.net/"></a>-->
<!-- <a
	class="project-link"
	title="Zzz - bot control hq"
	href="https://www.zzz.software/"><Svg data={logo_zzz} {size} /><span class="name">Zzz</span></a
> -->
<a
	class="project-link"
	title="Gro - task runner and toolkit extending SvelteKit"
	href="https://gro.ryanatkn.com/"><Svg data={logo_gro} {size} /><span class="name">Gro</span></a
>
<a class="project-link" title="Fuz - zippy stack for human agency" href="https://www.fuz.dev/"
	><Svg data={logo_fuz} {size} /><span class="name">Fuz</span></a
>
<a class="project-link" title="fuz_ui - Svelte UI library" href="https://ui.fuz.dev/"
	><Svg data={logo_fuz_ui} {size} /><span class="name">fuz_ui</span></a
>
<a
	class="project-link"
	title="fuz_css - semantic-first CSS framework and design system"
	href="https://css.fuz.dev/"><Svg data={logo_fuz_css} {size} /><span class="name">fuz_css</span></a
>
<a
	class="project-link"
	title="fuz_template - a web app template with TypeScript + SvelteKit + optional Rust for the fuz-stack"
	href="https://template.fuz.dev/"
	><Svg data={logo_fuz_template} {size} /><span class="name">fuz_template</span></a
>

<style>
	.project-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space_md);
		text-align: center;
	}

	.project-link:hover {
		text-decoration: none;
	}
	.project-link:hover .name {
		text-decoration: underline;
	}

	.project-link .name {
		display: block;
		margin-top: var(--font_size_sm);
		font-size: var(--font_size_lg);
		font-weight: 400;
	}
</style>
