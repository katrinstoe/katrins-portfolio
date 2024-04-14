<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
</script>

<header class="fixed z-20 h-12 w-full">
	<div class="flex px-4 py-4 sm:px-12">
		<!--
		<h1 class="shrink-0 text-3xl font-bold text-white">KS</h1>
-->
		<a href="/"><img src="Logo.png" alt="Logo" class="left-0 top-0 w-[4rem]" /></a>
		<div class="grow pt-4">
			<Menu />
		</div>
	</div>
</header>
