<script lang="ts">
	import Project from '$lib/sections/projects/Project.svelte';
	import Image from 'svimg/Image.svelte';
</script>

<Project
	divider="pink"
	title="Accessible Emoji Sonification"
	description="This project was developed as my bachelor's thesis to explore solutions for making digital communication more inclusive for blind and visually impaired individuals. By replacing traditional emojis with sonified emotional cues using prosody and vocal bursts, the system enhances emotional clarity in text messages. The study involved a custom-built accessible survey tool, a user study with 46 participants, and statistical analysis to evaluate recognition accuracy and user preferences. To see the full research process, listen to audio samples, or access the published paper, click below."
	year="Thesis: 2023, paper: 2024"
	buttonText="Project details"
	path="/projects/ux-research/emoji-sonification"
	colorButtonPath="/shapes/call-to-action-orange.svg"
>
	<img
		src="/imgs/Projects/EmojiSonification/SonificationScreens.webp"
		alt="Screens indicating the sonification of emojis with prosody and vocal bursts."
		class="md:pt-40"
	/>
</Project>
