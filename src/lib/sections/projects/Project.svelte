<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SkribbleButton from '$lib/components/SkribbleButton.svelte';
	import DividerOrange from '$lib/components/dividers/DividerOrange.svelte';
	import DividerPink from '$lib/components/dividers/DividerPink.svelte';
	import DividerBlue from '$lib/components/dividers/DividerBlue.svelte';
	import { goto } from '$app/navigation';

	export let year = '2022';
	export let title = 'Infographic Design';
	export let buttonText = 'buttonText';

	export let description = 'Description with html support';
	export let divider: 'pink' | 'blue' | 'orange' = 'orange';
	export let path: string;
</script>

<article class="py-12">
	{#if divider === 'orange'}
		<DividerOrange />
	{:else if divider === 'pink'}
		<DividerPink />
	{:else if divider === 'blue'}
		<DividerBlue />
	{/if}
	<Wrapper>
		<p class="pb-10 text-4xl">{year}</p>
		<div class="flex flex-wrap justify-center gap-12">
			<div class="grow basis-2/4">
				<h2 class=" pb-10 text-3xl font-bold md:text-7xl">{title}</h2>
				<p>
					{description}
				</p>

				<div class="pt-12">
					<SkribbleButton on:click={() => goto(path)}>{buttonText}</SkribbleButton>
				</div>
			</div>
			<div class="min-w-20 md:basis-1/4">
				<slot>Image Slot</slot>
			</div>
		</div>
	</Wrapper>
</article>
