<script lang="ts">
	import ContactHeroShapes from '$lib/components/shapes/ContactHeroShapes.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import IconGithub from '$lib/components/icons/IconGithub.svelte';
	import IconLinkedIn from '$lib/components/icons/IconLinkedIn.svelte';
</script>

<ContactHeroShapes />
<div class="absolute grid h-full w-full">
	<div class="flex flex-col justify-center px-[10vw]">
		<SectionHeader>Contact</SectionHeader>
		<div class="flex flex-col">
			<div class="email pb-2 text-xl font-bold">
				<a
					href="mailto:katrin.stoetter1@gmail.com"
					aria-label="External Email Link for katrin(dot)stoetter1@gmail(dot)com"
					>katrin.stoetter1@gmail.com</a
				>
			</div>
			<div class="icons col-span-1 flex gap-4 md:justify-start">
				<a href="https://github.com/katrinstoe" target="_blank" aria-label="Github external Link">
					<IconGithub class="w-10" />
				</a>
				<a
					href="https://www.linkedin.com/in/katrin-stoetter/"
					target="_blank"
					aria-label="LinkedIn external Link"
				>
					<IconLinkedIn class="w-10" />
				</a>
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
