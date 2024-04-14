<script lang="ts">
	import HeroShapes from '$lib/components/shapes/HeroShapes.svelte';
	import Introduction from '$lib/sections/hero/Introduction.svelte';

	let introText =
		'Hi, my name is Katrin. <br>' +
		'I am a Human-Computer-Interaction graduate (BSc). Elevating UX, one beautiful design and user-friendly line of code at a time.\n';
</script>

<div class="relative min-h-screen">
	<HeroShapes />
	<div class="absolute grid h-full w-full place-content-center">
		<div class="wrapper max-w-4xl">
			<Introduction {introText} />
		</div>
	</div>
</div>

<style>
	.wrapper {
		margin-inline: clamp(4rem, 4vw, 9rem);
	}
</style>
