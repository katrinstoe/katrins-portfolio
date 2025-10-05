<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import DownLoadCVButton from '$lib/sections/hero/DownLoadCVButton.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	export let title = 'CV Page';
	let academicPdf = '/cv/CVKatrinStötter_academia.pdf';
	let industryPdf = '/cv/CVKatrinStötter_industry.pdf';
</script>

<Wrapper>
	<SectionHeader>My CV</SectionHeader>

	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
		<!-- Academic Roles -->
		<div class="flex flex-col gap-4">
			<SubsectionHeader>Academic Roles</SubsectionHeader>

			<div class="relative min-h-[600px] flex-1 overflow-hidden rounded-xl shadow-lg">
				<iframe
					src="/cv/CVKatrinStötter_academia.pdf"
					class="h-full w-full border-0"
					title="Academic CV"
				></iframe>
			</div>

			<DownLoadCVButton
				pdfLink={'/cv/CVKatrinStötter_academia.pdf'}
				buttonText="Download Academic CV"
				buttonPadding="left-10 sm:left-7"
			>
				Download my Academic CV
			</DownLoadCVButton>
		</div>

		<!-- Industry Roles -->
		<div class="flex flex-col gap-4">
			<SubsectionHeader>Industry Roles</SubsectionHeader>

			<div class="relative min-h-[600px] flex-1 overflow-hidden rounded-xl shadow-lg">
				<iframe
					src="/cv/CVKatrinStötter_industry.pdf"
					class="h-full w-full border-0"
					title="Industry CV"
				></iframe>
			</div>

			<DownLoadCVButton
				pdfLink={'/cv/CVKatrinStötter_industry.pdf'}
				buttonText="Download Industry CV"
				buttonPadding="left-10 sm:left-7"
			>
				Download Industry CV
			</DownLoadCVButton>
		</div>
	</div>
</Wrapper>
