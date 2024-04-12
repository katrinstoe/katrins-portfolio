<script lang="ts">
	import Image from 'svimg/Image.svelte';
	import ContactHeroShapes from '$lib/components/shapes/AboutHeroShapes.svelte';
</script>

<div class="relative min-h-screen">
	<div class="absolute h-screen w-full">
		<Image
			class="h-screen w-full"
			src="imgs/contact/katrin-contact-header-img.jpg"
			quality="100%"
		/>
		<ContactHeroShapes />
	</div>
</div>
