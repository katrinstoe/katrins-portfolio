<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import ETextile from '$lib/sections/projects/ETextile.svelte';
	import EmojiSonification from '$lib/sections/projects/EmojiSonification.svelte';
	import ExpoCompanion from '$lib/sections/projects/ExpoCompanion.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MuehleNimbits from '$lib/sections/projects/MuehleNimbits.svelte';
	import PsychologyVideo from '$lib/sections/projects/PsychologyVideo.svelte';

	const sectionTitle = 'All Old Projects';
	const sectionDescription = `This section contains all older projects.`;
	const title = 'Old Projects Katrin Stötter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<ExpoCompanion />
	<MuehleNimbits />
	<PsychologyVideo />
</ProjectOverviewLayout>
<Footer />
