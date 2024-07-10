<script lang="ts">
	// import {SvelteDate} from 'svelte/reactivity';

	interface Props {
		/**
		 * Time in milliseconds.
		 */
		duration: number;
	}

	const {duration}: Props = $props();

	const date = new Date(duration);
	// TODO is this ill advised?
	// $effect(() => {
	// 	// date.setTime(duration); // TODO this actually sets twice, on init and then here on mount
	// });
	// $inspect(date, date.getTime());

	const hours = $derived(date.getUTCHours());
	const minutes = $derived(date.getUTCMinutes());
	const seconds = $derived(date.getUTCSeconds());

	const formatted_minutes = $derived(hours ? minutes.toString().padStart(2, '0') : minutes);
	const formatted_seconds = $derived(minutes ? seconds.toString().padStart(2, '0') : seconds);
</script>

<span
	>{#if hours}{hours}:{/if}{formatted_minutes}:{formatted_seconds}</span
>
