<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SkribbleButton from '$lib/components/SkribbleButton.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<Wrapper>
	<SectionHeader>My CV</SectionHeader>
	<div class=" grid grid-cols-1 gap-8 lg:grid-cols-2">
		<img src="/cv/cv-pic-1.png" alt="" class="" />
		<img src="/cv/cv-pic-2.png" alt="" class="" />
	</div>
	<div>
		<SkribbleButton>Download my resume</SkribbleButton>
	</div>
</Wrapper>
