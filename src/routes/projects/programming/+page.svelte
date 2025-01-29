<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import InfoGraphic from '$lib/sections/projects/InfoGraphic.svelte';
	import ForgetMeNotProject from '$lib/sections/projects/ForgetMeNotProject.svelte';
	import OrganLocator from '$lib/sections/projects/OrganLocator.svelte';
	import MuehleNimbits from '$lib/sections/projects/MuehleNimbits.svelte';
	import Barista from '$lib/sections/projects/Barista.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const sectionTitle = 'Programming Projects';
	const sectionDescription = `This section contains my favourite three Programming projects.`;
</script>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<OrganLocator />
	<MuehleNimbits />
	<Barista />
</ProjectOverviewLayout>
<Footer />
