<script lang="ts">
	import BlueSquare from '$lib/components/shapes/BlueSquare.svelte';
	import ContactFooter from '$lib/ContactFooter.svelte';
</script>

<div class="absolute left-0 top-0 h-full w-full overflow-clip">
	<div class="absolute left-0 top-0 w-full px-[10vw]">
		<BlueSquare />
	</div>
	<div class="greenwiggle absolute bottom-0 left-0 h-56 w-full">
		<ContactFooter />
	</div>
</div>

<style>
	.greenwiggle {
		background-image: url('/shapes/green-wiggle.svg');
		background-repeat: repeat-x;
	}
</style>
