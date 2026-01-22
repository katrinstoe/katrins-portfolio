<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import DisneyPrincess from '$lib/sections/projects/DisneyPrincess.svelte';
	import SLAccessibility from '$lib/sections/projects/SLAccessibility.svelte';
	import ScoutsKit from '$lib/sections/projects/ScoutsKit.svelte';
	import BlastTheoryGame from '$lib/sections/projects/BlastTheoryGame.svelte';
	import VagMicrobiome from '$lib/sections/projects/VagMicrobiome.svelte';
</script>

<section class="pt-12">
	<Wrapper>
		<SectionHeader>Latest Projects</SectionHeader>
		<p>
			The project section contains a collection of projects that I have completed during my studies
			at university or during internships at companies. These projects cover a wide range of fields,
			including ux research, programming, and design. In this section, you can find my most recent
			examples of work and see how I have applied my skills and knowledge to tackle a variety of
			challenges. Whether you are looking for inspiration, or just want to learn more about my
			experiences as a university student, the project section has something for everyone. So be
			sure to check it out!
		</p>
		<a
			href="/projects/"
			target="_self"
			aria-label="Link redirekts to Projects page"
			style="color: blue;">Link to Projects Page</a
		>
	</Wrapper>
	<BlastTheoryGame />
	<VagMicrobiome />
	<ScoutsKit />
</section>
