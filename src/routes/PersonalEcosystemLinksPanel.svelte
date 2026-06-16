<script lang="ts">
	import type {Snippet} from 'svelte';

	import EcosystemLinks from './PersonalEcosystemLinks.svelte';
	import ProjectLinks from './PersonalProjectLinks.svelte';

	const {
		children,
	}: {
		children?: Snippet;
	} = $props();
</script>

<section class="panel p_lg">
	{#if children}
		{@render children()}
	{:else}
		<h2 class="mt_0 mb_lg">Links</h2>
	{/if}
	<EcosystemLinks />
	<div class="box row"><ProjectLinks /></div>
</section>
