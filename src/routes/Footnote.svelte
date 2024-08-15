<script lang="ts">
	interface Props {
		number: number; // TODO name?
	}

	const {number}: Props = $props();

	// TODO redesign, probably putting footnote content in the margins to the side when there's available space
</script>

<sup class="font_mono"><a id="footnote_link_{number}" href="#footnote_{number}">[{number}]</a></sup>
