<script lang="ts">
	import {SvelteDate} from 'svelte/reactivity';

	const {
		duration,
	}: {
		/**
		 * Time in milliseconds.
		 */
		duration: number;
	} = $props();

	const date = new SvelteDate(duration);
	// TODO is this ill advised? is there a better way to sync the prop to the reactive object?
	$effect(() => {
		date.setTime(duration); // TODO this actually sets twice, on init and then here on mount
	});

	const hours = $derived(date.getUTCHours());
	const minutes = $derived(date.getUTCMinutes());
	const seconds = $derived(date.getUTCSeconds());

	const formatted_minutes = $derived(hours ? minutes.toString().padStart(2, '0') : minutes);
	const formatted_seconds = $derived(minutes ? seconds.toString().padStart(2, '0') : seconds);
</script>

<span
	>{#if hours}{hours}:{/if}{formatted_minutes}:{formatted_seconds}</span
>
