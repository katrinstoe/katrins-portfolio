<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import ExpoCompanion from '$lib/sections/projects/ExpoCompanion.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MuehleNimbits from '$lib/sections/projects/MuehleNimbits.svelte';
	import PsychologyVideo from '$lib/sections/projects/PsychologyVideo.svelte';
	import ForgetMeNotProject from '$lib/sections/projects/ForgetMeNotProject.svelte';
	import ETextile from '$lib/sections/projects/ETextile.svelte';

	const sectionTitle = 'All Old Projects';
	const sectionDescription = `This section contains all older projects.`;
	const title = 'Old Projects Katrin Stötter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<ETextile />
	<ExpoCompanion />
	<MuehleNimbits />
	<ForgetMeNotProject />
	<PsychologyVideo />
</ProjectOverviewLayout>
<Footer />
