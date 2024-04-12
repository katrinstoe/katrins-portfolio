<script lang="ts">
	import BlueSquare from '$lib/components/shapes/BlueSquare.svelte';
</script>

<div class="absolute left-0 top-0 h-full w-full overflow-clip">
	<div class="absolute left-0 top-0 w-full px-[10vw]">
		<BlueSquare />
	</div>

	<div class="greenwiggle absolute bottom-0 left-0 h-56 w-full">
		<div class="copywright text absolute bottom-5 px-[10vw] text-white">
			<div>Copyright © Katrin Stötter</div>
			<div>Icons courtesy of Flaticon. Illustrations courtesy of ...</div>
		</div>
	</div>
</div>

<style>
	.greenwiggle {
		background-image: url('/shapes/green-wiggle.svg');
		background-repeat: repeat-x;
	}
</style>
