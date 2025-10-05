<script lang="ts">
	import Image from 'svimg/Image.svelte';
	import DownLoadCVButton from '$lib/sections/hero/DownLoadCVButton.svelte';

	export let introText: string;
	export let title = 'Katrin Stötter Landing Page Portfolio';
</script>

<div class=" flex flex-wrap items-center justify-center gap-12">
	<div class="basis-36 self-start sm:basis-56">
		<Image
			src="/imgs/katrin-bild.webp"
			alt="Katrin Stötter Portrait"
			immediate={true}
			class="mx-auto"
		/>
	</div>
	<div class="basis-96">
		<p class="text-xl">{@html introText}</p>
		<DownLoadCVButton
			pdfLink={'/cv/CVKatrinStötter_industry.pdf'}
			buttonText="Download CV"
			buttonPadding="left-10 sm:left-12"
		/>
	</div>
</div>
