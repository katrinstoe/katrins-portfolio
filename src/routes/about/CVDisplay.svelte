<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import DownLoadCVButton from '$lib/sections/hero/DownLoadCVButton.svelte';
	export let title = 'CV Page';
</script>

<Wrapper>
	<SectionHeader>My CV</SectionHeader>
	<div class=" grid grid-cols-1 gap-8 lg:grid-cols-2">
		<img src="/cv/cv_katrin_p1.png" alt="CV Page 1" class="" />
		<img src="/cv/cv_katrin_p2.png" alt="CV Page 2" class="" />
	</div>
	<div>
		<DownLoadCVButton>Download my resume</DownLoadCVButton>
	</div>
</Wrapper>
