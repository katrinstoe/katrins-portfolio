<script lang="ts">
	export let src: string;
</script>

<video controls width="640" height="360">
	<source {src} type="video/mp4" />
	Your browser does not support the video tag.
	<track
		kind="captions"
		src="/captions/OrganLocatorCaptions.vtt"
		srclang="en"
		label="English"
		default
	/>
</video>
