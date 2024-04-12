<script lang="ts">
	import Rectangle from '$lib/components/shapes/Rectangle.svelte';
	import WaveTriangle from '$lib/components/shapes/WaveTriangle.svelte';
	import HalfCircle from '$lib/components/shapes/HalfCircle.svelte';
</script>

<div class="absolute left-0 top-0 h-full w-full overflow-clip">
	<div class="absolute left-0 top-0 w-full">
		<WaveTriangle />
	</div>
	<div class="absolute right-0 top-0 flex h-full flex-col justify-center">
		<Rectangle />
	</div>
	<div class="absolute bottom-0 flex w-full justify-center px-[10vw]">
		<HalfCircle />
	</div>
</div>
