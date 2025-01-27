<script>
	import IconGithub from '$lib/components/icons/IconGithub.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import ContactHeroShapes from '$lib/components/shapes/ContactHeroShapes.svelte';
	import IconLinkedIn from '$lib/components/icons/IconLinkedIn.svelte';
	import Shapes from '../about/shapes.svelte';
	import HeroShapes from '$lib/components/shapes/HeroShapes.svelte';
	import Introduction from '$lib/sections/hero/Introduction.svelte';
	import ProjectCategories from '$lib/sections/projectCategories/ProjectCategories.svelte';

	let projectIntro =
		'The project page contains a collection of projects that I have completed during my studies at university or during internships at a company. These projects cover a wide range of fields, including UX research, programming, and design. In each section, you can find examples of my work and see how I have applied my skills and knowledge to tackle a variety of challenges. Be sure to check them out!';
</script>

<div class="relative min-h-screen">
	<HeroShapes />
	<div class="absolute grid h-full w-full place-content-center">
		<div class="wrapper max-w-4xl">
			<div class="basis-96 rounded-lg bg-white bg-opacity-60 xl:bg-transparent">
				<SectionHeader>Projects</SectionHeader>
				<p class="text-xl">{projectIntro}</p>

				<ProjectCategories />
			</div>
		</div>
	</div>
</div>

<style>
</style>
