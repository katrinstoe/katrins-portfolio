<script lang="ts">
	import ContactHeroShapes from '$lib/components/shapes/ContactHeroShapes.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import IconGithub from '$lib/components/icons/IconGithub.svelte';
	import IconLinkedIn from '$lib/components/icons/IconLinkedIn.svelte';
</script>

<ContactHeroShapes />
<div class="absolute grid h-full w-full">
	<div class="flex flex-col justify-center px-[10vw]">
		<SectionHeader>Contact</SectionHeader>
		<div class="flex flex-col">
			<div class="email pb-2 text-xl font-bold">katrin.stoetter1@gmail.com</div>
			<div class="icons col-span-1 flex gap-4 md:justify-start">
				<IconGithub class="w-10" />
				<IconLinkedIn class="w-10" />
			</div>
		</div>
	</div>
</div>

<style>
	.email {
		font-size: clamp(1rem, 5vw, 1.5rem);
		line-height: clamp(1rem, 1.75rem, 2rem);
	}
</style>
