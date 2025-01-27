<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import InfoGraphic from '$lib/sections/projects/InfoGraphic.svelte';
	import ForgetMeNotProject from '$lib/sections/projects/ForgetMeNotProject.svelte';

	const sectionTitle = 'UX Design Projects';
	const sectionDescription = `EXCHANGE THIS TEXT: The project section contains a collection of projects that I have
  completed during my studies at university. These projects cover a wide range of fields,
  including usability, programming, and design. In this section, you can find examples of my
  work and see how I have applied my skills and knowledge to tackle a variety of challenges.
  Whether you are looking for inspiration, or just want to learn more about my experiences as a
  university student, the project section has something for everyone. So be sure to check it
  out!`;
</script>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<InfoGraphic />
	<ForgetMeNotProject />
</ProjectOverviewLayout>
