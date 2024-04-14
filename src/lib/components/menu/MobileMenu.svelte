<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let items: MenuItem[] = [];
	let showMobileMenu = false;
</script>

<div class="block w-full grow text-black sm:hidden">
	<div class=" flex justify-end">
		<button
			on:click={() => {
				showMobileMenu = true;
			}}
			class="flex flex-col gap-2"
		>
			{#each { length: 3 } as _, idx}
				<div class="h-1 w-8 rounded-sm bg-black"></div>
			{/each}
		</button>
	</div>
	{#if showMobileMenu}
		<div
			class="bg-slaywhite/90 absolute bottom-0 left-0 top-0 z-50 h-screen w-screen backdrop-blur"
			transition:fly={{ y: -400, easing: cubicInOut, duration: 600 }}
		>
			<div class="grid h-full w-full place-content-center">
				<ul class="flex flex-col gap-8">
					{#each items as item}
						<a href={item.route} class=" text-center text-2xl"> {item.name}</a>
					{/each}
				</ul>
				<button
					class="pt-8 text-2xl font-bold"
					on:click={() => {
						showMobileMenu = false;
					}}
					>X
				</button>
			</div>
		</div>
	{/if}
</div>
