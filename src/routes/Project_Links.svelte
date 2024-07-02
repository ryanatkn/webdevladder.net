<script lang="ts">
	import Zzz_Logo from '@ryanatkn/fuz/Zzz_Logo.svelte';
	import Moss_Logo from '@ryanatkn/fuz/Moss_Logo.svelte';
	import Fuz_Logo from '@ryanatkn/fuz/Fuz_Logo.svelte';
	import Gro_Logo from '@ryanatkn/fuz/Gro_Logo.svelte';
	import Fuzling from '@ryanatkn/fuz/Fuzling.svelte';

	const size = 'var(--icon_size_lg)';
</script>

<!--<a href="https://www.spiderspace.org/"></a>--><!--<a href="https://www.webdevladder.net/"></a>--><a
	class="project_link"
	title="Zzz - social web app framework"
	href="https://zzz.ryanatkn.com/"><Zzz_Logo {size} /><span class="name">Zzz</span></a
>
<a class="project_link" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"
	><Moss_Logo {size} /><span class="name">Moss</span></a
>
<a class="project_link" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"
	><Fuz_Logo {size} /><span class="name">Fuz</span></a
>
<a
	class="project_link"
	title="Gro - task runner and toolkit extending SvelteKit"
	href="https://gro.ryanatkn.com/"><Gro_Logo {size} /><span class="name">Gro</span></a
>
<a
	class="project_link"
	title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro"
	href="https://template.fuz.dev/"><Fuzling {size} /><span class="name">fuz_template</span></a
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
		margin-top: var(--size_sm);
		font-size: var(--size_lg);
		font-weight: 400;
	}
</style>
