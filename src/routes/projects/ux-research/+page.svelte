<script>
	import ProjectOverviewLayout from '$lib/components/ProjectOverviewLayout.svelte';
	import ETextile from '$lib/sections/projects/ETextile.svelte';
	import EmojiSonification from '$lib/sections/projects/EmojiSonification.svelte';
	import ExpoCompanion from '$lib/sections/projects/ExpoCompanion.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const sectionTitle = 'UX Research Projects';
	const sectionDescription = `This section contains my favourite three UX Research projects.`;
</script>

<ProjectOverviewLayout {sectionTitle} {sectionDescription}>
	<ETextile />
	<EmojiSonification />
	<ExpoCompanion />
</ProjectOverviewLayout>
<Footer />
