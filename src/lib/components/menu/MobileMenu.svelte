<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import type { MenuItem } from '$lib/components/menu/MenuItem';
	import CloseIcon from '$lib/components/icons/CloseIcon.svelte';

	export let items: MenuItem[] = [];
	let showMobileMenu = false;
</script>

<div class="block w-full grow text-black sm:hidden">
	<div class="flex justify-end">
		<button
			on:click={() => {
				showMobileMenu = true;
			}}
			class="flex flex-col gap-1.5 p-2"
		>
			{#each { length: 3 } as _, idx}
				<div class="h-1 w-7 rounded-sm bg-black"></div>
			{/each}
		</button>
	</div>
	{#if showMobileMenu}
		<div
			class="absolute bottom-0 left-0 top-0 z-50 h-screen w-screen bg-slaywhite/90 backdrop-blur"
			transition:fly={{ y: -400, easing: cubicInOut, duration: 600 }}
		>
			<div class="grid h-full w-full place-content-center">
				<ul class="flex flex-col gap-8">
					{#each items as item}
						<a
							href={item.route}
							on:click={() => {
								showMobileMenu = false;
							}}
							class=" text-center text-2xl"
						>
							{item.name}</a
						>
					{/each}
				</ul>
				<button
					class="flex justify-center pt-6 text-2xl font-bold"
					on:click={() => {
						showMobileMenu = false;
					}}
				>
					<CloseIcon class="text-black" />
				</button>
			</div>
		</div>
	{/if}
</div>
