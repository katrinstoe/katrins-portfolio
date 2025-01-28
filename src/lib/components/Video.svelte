<script lang="ts">
	export let src: string;

	// Convert Vimeo URLs to embed format
	const getEmbedUrl = (url: string) => {
		if (url.startsWith('https://vimeo.com')) {
			const videoId = url.split('/').pop(); // Extract video ID
			return `https://player.vimeo.com/video/${videoId}`;
		}
		return url; // Return as is for non-Vimeo links
	};

	$: embedUrl = getEmbedUrl(src); // Determine if it's an embeddable URL
	$: isEmbed = embedUrl.startsWith('https://player.vimeo.com'); // Check for Vimeo embed links
</script>

{#if isEmbed}
	<!-- Use an iframe for Vimeo embed -->
	<div class="video-container">
		<iframe src={embedUrl} allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
		></iframe>
	</div>
{:else}
	<!-- Use a <video> tag for static video files -->
	<div class="video-container">
		<video controls>
			<source {src} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
{/if}

<style>
	.video-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%; /* Full width of parent container */
		max-width: 1200px; /* Optional: Limit max size */
		aspect-ratio: 16 / 9; /* Maintain aspect ratio */
		margin: auto;
	}

	iframe,
	video {
		width: 100%;
		height: 100%;
		border: none; /* Remove default iframe border */
	}
</style>
