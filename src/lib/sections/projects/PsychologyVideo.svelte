<script lang="ts">
	import Project from '$lib/sections/projects/Project.svelte';
	import Image from 'svimg/Image.svelte';
	const title = 'Psychology Video Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Project
	divider="pink"
	title="Psychology Video"
	description="This project was created during the Selected Areas of Psychology course at the University of Würzburg. It features an educational video explaining the Big Five personality traits through engaging visuals and polished editing. My contributions included designing custom illustrations, editing the video using Adobe After Effects and Premiere Pro, and collaborating on content development. This project combined technical skills in video production with psychological insights to communicate complex concepts effectively. To learn more about the design process and insights, click below."
	year="2021"
	buttonText="Project details"
	path="/projects/ux-design/psychology-video"
	colorButtonPath="/shapes/call-to-action-orange.svg"
>
	<Image
		src="/imgs/Projects/PsychologyVideo/PsychologyVideoIllustration.png"
		alt="Screenshot of Illustration of the Video showing two people and a growing mountain of papers"
		class="pt-32"
	/>
</Project>
