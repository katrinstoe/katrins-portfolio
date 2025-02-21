<script lang="ts">
	import Project from '$lib/sections/projects/Project.svelte';
	import Image from 'svimg/Image.svelte';
	const title = 'Barista Learning Platform Project Page';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Barista Project using Web Development" />
</svelte:head>

<Project
	divider="pink"
	title="Barista Learning Platform"
	description="As part of the Programming Course Interface Development, our team developed a gamified barista-themed learning platform featuring an educational game and a backend authoring tool. The project aimed to help future baristas learn coffee ingredients interactively while enabling content management through a custom-built backend. My contributions included designing the website’s UI, implementing the Level 1 memory game, and assisting in backend development. Through collaborative problem-solving and iterative testing, we delivered a fully functional platform, achieving top marks. To explore the full project and its development process, click below."
	year="2022"
	buttonText="Project details"
	path="/projects/programming/barista"
	colorButtonPath="/shapes/call-to-action-orange.svg"
>
	<Image
		src="/imgs/Projects/Barista/Barista.png"
		alt="Screenshot of Barista Learning Platform"
		class="md:pt-40"
	/>
</Project>
