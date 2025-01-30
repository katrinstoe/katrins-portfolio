<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SkribbleButton from '$lib/components/SkribbleButton.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<Wrapper>
	<SectionHeader>My CV</SectionHeader>
	<div class=" grid grid-cols-1 gap-8 lg:grid-cols-2">
		<img src="/cv/cv_katrin_p1.png" alt="CV Page 1" class="" />
		<img src="/cv/cv_katrin_p2.png" alt="CV Page 2" class="" />
	</div>
	<div>
		<SkribbleButton>Download my resume</SkribbleButton>
	</div>
</Wrapper>
