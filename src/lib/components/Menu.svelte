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
	<div class="hidden justify-center sm:flex">
		<ul class="flex text-xl" style="gap: clamp(2rem, 6vw, 4rem)">
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
