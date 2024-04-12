<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
</script>

<header class="fixed z-20 h-12 w-full">
	<div class="flex px-12 py-4">
		<h1 class="shrink-0 text-3xl font-bold text-white">KS</h1>
		<div class="flex grow justify-center">
			<Menu />
		</div>
	</div>
</header>
