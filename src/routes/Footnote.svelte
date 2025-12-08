<script lang="ts">
	const {
		number,
	}: {
		number: number; // TODO name?
	} = $props();

	// TODO redesign, probably putting footnote content in the margins to the side when there's available space
</script>

<sup class="font_family_mono"
	><a id="footnote_link_{number}" href="#footnote_{number}">[{number}]</a></sup
>
