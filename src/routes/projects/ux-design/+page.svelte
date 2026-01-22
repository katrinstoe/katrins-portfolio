<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScoutsKit from '$lib/sections/projects/ScoutsKit.svelte';
	import BlastTheoryGame from '$lib/sections/projects/BlastTheoryGame.svelte';
	import ScaleIndustrialDesign from '$lib/sections/projects/ScaleIndustrialDesign.svelte';

	const sectionTitle = 'UX Design Projects';
	const sectionDescription = `This section contains my favourite three UX Design projects.`;
	const title = 'UX Design Projects Katrin Stötter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<ScaleIndustrialDesign />
	<BlastTheoryGame />
	<ScoutsKit />
</ProjectOverviewLayout>
<Footer />
