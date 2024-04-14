<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
</script>

<header class="fixed z-20 h-12 w-full">
	<div class="flex px-4 py-4 sm:px-12">
		<a href="/"><img src="Logo.png" alt="Logo" class="left-0 top-0 w-16 min-w-16" /></a>
		<!--	<div
            class="menu-background mx-16 grow pt-4 sm:max-2xl:rounded-lg sm:max-2xl:bg-white sm:max-2xl:bg-opacity-50"
        >-->
		<div class="menu-background grow">
			<Menu />
		</div>
	</div>
</header>
