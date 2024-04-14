<script lang="ts">
</script>

<div class="flex flex-col items-center">
	<div class="relative h-12 h-24 min-w-72 transition-all duration-300 hover:scale-105">
		<img class="absolute bottom-0" src="/shapes/call-to-action.svg" alt="scribble" />
		<div class="absolute bottom-3 left-0 flex w-full justify-center px-8">
			<button class="text-center" on:click>
				<slot />
			</button>
		</div>
	</div>
</div>
