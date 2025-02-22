<script lang="ts">
	import HeroShapes from '$lib/components/shapes/HeroShapes.svelte';
	import Introduction from '$lib/sections/hero/Introduction.svelte';

	let introText =
		'Hi, my name is Katrin. <br>' +
		'I am a Human-Computer-Interaction graduate (BSc) and currently studying Interactive Media Technology (MSc) at KTH in Stockholm, Sweden.<br>' +
		'Elevating UX, one beautiful design and user-friendly line of code at a time.\n';

	const title = 'Katrin Stötter Portfolio';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="Page shows most recent projects and a short description about Katrin Stötter"
	/>
</svelte:head>

<div class="relative min-h-screen">
	<HeroShapes />
	<div class="absolute grid h-full w-full place-content-center">
		<div class="wrapper max-w-4xl">
			<!-- H1 here for accessibility reasons -->
			<h1 class="hidden">About me</h1>
			<Introduction {introText} />
		</div>
	</div>
</div>

<style>
	.wrapper {
		margin-inline: clamp(4rem, 4vw, 9rem);
	}
</style>
