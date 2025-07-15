<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import OrganLocator from '$lib/sections/projects/OrganLocator.svelte';
	import MuehleNimbits from '$lib/sections/projects/MuehleNimbits.svelte';
	import Barista from '$lib/sections/projects/Barista.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DisneyPrincess from '$lib/sections/projects/DisneyPrincess.svelte';

	const sectionTitle = 'Programming Projects';
	const sectionDescription = `This section contains my favourite three Programming projects.`;
	const title = 'Programming Projects Katrin Stötter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<DisneyPrincess />
	<OrganLocator />
	<Barista />
</ProjectOverviewLayout>
<Footer />
