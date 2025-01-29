<script lang="ts">
	export let colorButtonPath = '/shapes/call-to-action.svg';
</script>

<div class="flex flex-col items-center">
	<div class="relative h-12 h-24 min-w-72 transition-all duration-300 hover:scale-105">
		{#if colorButtonPath === '/shapes/call-to-action-pink.svg'}
			<img class="absolute bottom-0 ml-10" src={colorButtonPath} alt="scribble" />
		{:else if colorButtonPath === '/shapes/call-to-action-orange.svg'}
			<img class="absolute bottom-0 ml-6" src={colorButtonPath} alt="scribble" />
		{:else}
			<img class="absolute bottom-0" src={colorButtonPath} alt="scribble" />
		{/if}
		<!--<img class="absolute bottom-0" src={colorButtonPath} alt="scribble" />-->
		<div class="absolute bottom-3 left-0 flex w-full justify-center px-8">
			<button class="text-center" on:click>
				<slot />
			</button>
		</div>
	</div>
</div>
