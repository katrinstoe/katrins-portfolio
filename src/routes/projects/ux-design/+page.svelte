<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import InfoGraphic from '$lib/sections/projects/InfoGraphic.svelte';
	import ForgetMeNotProject from '$lib/sections/projects/ForgetMeNotProject.svelte';
	import PsychologyVideo from '$lib/sections/projects/PsychologyVideo.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScoutsKit from '$lib/sections/projects/ScoutsKit.svelte';

	const sectionTitle = 'UX Design Projects';
	const sectionDescription = `This section contains my favourite three UX Design projects.`;
	const title = 'UX Design Projects Katrin Stötter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<ScoutsKit />
	<InfoGraphic />
	<ForgetMeNotProject />
</ProjectOverviewLayout>
<Footer />
