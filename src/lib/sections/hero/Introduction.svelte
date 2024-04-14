<script lang="ts">
	import Image from 'svimg/Image.svelte';
	import DownLoadCVButton from '$lib/sections/hero/DownLoadCVButton.svelte';

	export let introText: string;
</script>

<div class=" flex flex-wrap items-center justify-center gap-12">
	<div class="basis-56">
		<Image src="/imgs/katrin-bild.png" immediate={true} />
	</div>
	<div class="basis-96 text-xl">
		<p>{@html introText}</p>
		<DownLoadCVButton />
	</div>
</div>
