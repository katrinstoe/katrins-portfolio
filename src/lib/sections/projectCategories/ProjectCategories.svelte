<script>
	let pageToNavigateToUXResearch = '/projects/ux-research/';
	let pageToNavigateToProgramming = '/projects/programming';
	let pageToNavigateToUXDesign = '/projects/ux-design';

	import Card from '$lib/components/Card.svelte';
</script>

<div class="flex flex-wrap justify-between gap-4 pt-20">
	<!-- UX Research Card -->
	<Card
		href={pageToNavigateToUXResearch}
		title="UX Research"
		description="Tools & Skills: Double Diamond Process, Affinity Diagramming, Accessibility, Statistical Analysis."
		bgColor="bg-gray-100"
	/>
	<!-- Programming Card -->
	<Card
		href={pageToNavigateToProgramming}
		title="Programming"
		description="Tools & Skills: Unity, Web-Development, Java."
		bgColor="bg-gray-50"
	/>

	<!-- UX Design Card -->
	<Card
		href={pageToNavigateToUXDesign}
		title="UX Design"
		description="Tools & Skills: Adobe Suite, Figma, Tangible Prototyping."
		bgColor="bg-gray-50"
	/>
</div>
