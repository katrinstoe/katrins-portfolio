<script lang="ts">
	export let bg = '';
</script>

<div class="triangle aspect-square rotate-90 {bg}"></div>

<style>
	.triangle {
		clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
		height: clamp(4rem, 12vw, 15rem);
	}
</style>
