<script lang="ts">
	import HeroShapes from '$lib/components/shapes/HeroShapes.svelte';
	import Introduction from '$lib/sections/hero/Introduction.svelte';

	let introText =
		'Hi, my name is Katrin. <br>' +
		'Currently pursuing an M.Sc. in Interactive Media Technology at KTH in Stockholm.<br>' +
		'I’m interested in how design research, accessibility, and feminist HCI can make technology more inclusive and sustainable.\n';

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
