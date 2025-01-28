<script lang="ts">
	export let src: string;

	// Convert Vimeo URLs to embed format
	const getEmbedUrl = (url: string) => {
		if (url.startsWith('https://vimeo.com')) {
			const videoId = url.split('/').pop(); // Extract Vimeo video ID
			return `https://player.vimeo.com/video/${videoId}`;
		} else if (url.startsWith('https://www.youtube.com') || url.startsWith('https://youtube.com')) {
			const urlParams = new URLSearchParams(new URL(url).search);
			const videoId = urlParams.get('v'); // Extract YouTube video ID from URL query parameter
			return `https://www.youtube.com/embed/${videoId}`;
		}
		return url; // Return the URL as-is for non-Vimeo and non-YouTube links
	};

	$: embedUrl = getEmbedUrl(src); // Determine the embeddable URL
	$: isEmbed =
		embedUrl.startsWith('https://player.vimeo.com') ||
		embedUrl.startsWith('https://www.youtube.com/embed'); // Check for Vimeo or YouTube embed links
</script>

{#if isEmbed}
	<!-- Use an iframe for Vimeo or YouTube embed -->
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
