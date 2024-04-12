<script lang="ts">
	export let items = [
		{ name: 'Home', route: '/' },
		{ name: 'Projects', route: '/projects' },
		{ name: 'About', route: '/about' },
		{ name: 'Contact', route: '/contact' }
	];
</script>

<ul class="flex gap-16 text-xl">
	{#each items as item}
		<a href={item.route} class="border-b-2 border-black border-opacity-0 hover:border-opacity-100">
			{item.name}</a
		>
	{/each}
</ul>
