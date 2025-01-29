<script>
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import HeroShapes from '$lib/components/shapes/HeroShapes.svelte';
	import ProjectCategories from '$lib/sections/projectCategories/ProjectCategories.svelte';

	let projectIntro =
		'The project page contains a collection of projects that I have completed during my studies at university or during internships at a company. These projects cover a wide range of fields, including UX research, programming, and design. In each section, you can find examples of my work and see how I have applied my skills and knowledge to tackle a variety of challenges. Be sure to check them out!';
</script>

<div class="relative min-h-screen overflow-hidden pt-20 sm:pt-32">
	<HeroShapes />
	<div class="relative z-10 flex items-center justify-center p-4">
		<div class="wrapper max-w-4xl">
			<div
				class="basis-96 rounded-lg bg-white bg-opacity-90 p-6 sm:bg-opacity-60 xl:bg-transparent"
			>
				<SectionHeader>Projects</SectionHeader>
				<p class="text-xl">{projectIntro}</p>

				<ProjectCategories />
			</div>
		</div>
	</div>
</div>

<style>
</style>
