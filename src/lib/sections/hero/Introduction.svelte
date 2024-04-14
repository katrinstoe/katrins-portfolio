<script lang="ts">
	import Image from 'svimg/Image.svelte';
	import DownLoadCVButton from '$lib/sections/hero/DownLoadCVButton.svelte';

	export let introText: string;
</script>

<div class=" flex flex-wrap items-center justify-center gap-12">
	<div class="sm:basis-56 basis-36">
		<Image src="/imgs/katrin-bild.png" immediate={true} class="mx-auto" />
	</div>
	<div class="basis-96">
		<p class="text-xl">{@html introText}</p>
		<DownLoadCVButton />
	</div>
</div>
