<!-- ProjectLayout.svelte -->
<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	export let sectionTitle: string;
	export let sectionDescription: string;
</script>

<section class="pt-12">
	<Wrapper>
		<SectionHeader>{sectionTitle}</SectionHeader>
		<p>{sectionDescription}</p>
	</Wrapper>
	<div class="flex flex-col gap-8">
		<slot />
	</div>
</section>
