<script lang="ts">
	import MobileMenu from '$lib/components/menu/MobileMenu.svelte';

	export let items = [
		{ name: 'Home', route: '/' },
		{ name: 'Projects', route: '/projects' },
		{ name: 'About', route: '/about' },
		{ name: 'Contact', route: '/contact' }
	];
</script>

<nav>
	<MobileMenu {items} />
	<!--px-16 py-4  sm:rounded-lg sm:bg-white sm:bg-opacity-50-->
	<div class="hidden justify-center sm:flex">
		<ul
			class="flex px-16 py-4 text-xl sm:rounded-lg sm:bg-white sm:bg-opacity-60"
			style="gap: clamp(2rem, 6vw, 4rem)"
		>
			{#each items as item}
				<a
					href={item.route}
					class="border-b-2 border-black border-opacity-0 hover:border-opacity-100"
				>
					{item.name}</a
				>
			{/each}
		</ul>
	</div>
</nav>
