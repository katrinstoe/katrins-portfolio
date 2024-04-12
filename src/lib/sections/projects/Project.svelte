<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Image from 'svimg/Image.svelte';

	export let year = '2022';
	export let title = 'Infographic Design';
</script>

<article class="py-12">
	<div class="flex items-center">
		<div class="triangle bg-crazyorange aspect-square rotate-90"></div>
		<div class="bg-crazyorange ml-2 mr-12 h-1 w-full"></div>
	</div>
	<Wrapper>
		<p class="pb-10 text-4xl">{year}</p>
		<div class="flex flex-wrap justify-center gap-12">
			<div class="grow basis-2/4">
				<h2 class=" pb-10 text-7xl font-bold">{title}</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum eligendi illo incidunt
					iure minima necessitatibus nulla officia optio porro reiciendis rerum soluta, vel velit
					voluptas. A asperiores laborum nesciunt.
				</p>
			</div>
			<Image src="/imgs/info-graphic.png" alt="infographic poster" class="min-w-20 basis-1/4" />
		</div>
	</Wrapper>
</article>

<style>
	.triangle {
		clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
		height: clamp(4rem, 12vw, 15rem);
	}
</style>
