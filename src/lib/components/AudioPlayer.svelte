<script lang="ts">
	export let src: string; // The source URL for the audio file
</script>

<audio controls>
	<source {src} type="audio/mpeg" />
	Your browser does not support the audio element.
</audio>
