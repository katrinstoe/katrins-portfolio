<script lang="ts">
	import Project from '$lib/sections/projects/Project.svelte';
	import Image from 'svimg/Image.svelte';
	const title = 'Interactive Organ Locator Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Project
	divider="orange"
	title="Interactive Organ Locator"
	description="This project was developed for the Multimodal Interaction and Interfaces course. It features an Augmented Reality (AR) application that helps users locate human organs interactively using audio and haptic feedback. The app was tested in a user study with 24 participants to evaluate immersion and usability. My contributions included app development, user testing, data analysis, and research writing. To explore the full design process, click below."
	year="2024"
	buttonText="Project details"
	path="/projects/programming/organ-locator"
>
	<Image
		src="/imgs/Projects/OrganLocator/IdeaDrawing.jpg"
		alt="Organ Locator Idea Illustration. Scanning a human body with a phone to locate organs."
		class="md:pt-40"
	/>
</Project>
