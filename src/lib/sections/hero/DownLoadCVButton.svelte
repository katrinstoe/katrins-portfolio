<script lang="ts">
	import { onMount } from 'svelte';

	let isGerman: boolean;
	onMount(() => {
		isGerman = navigator.language.startsWith('de-');
	});
	$: pdfLink = isGerman ? 'cv/de-cv-long-ks.pdf' : 'cv/en-cv-long-ks.pdf';
</script>

<div class=" mt-16 flex h-12 flex-col justify-center">
	<div class="relative h-12 transition-all duration-300 hover:rotate-2 hover:scale-105">
		<img class="absolute bottom-0" src="/shapes/call-to-action.svg" alt="Katrin portrait" />
		<div class=" sm:left-12 absolute bottom-3 left-10 w-full">
			<a class="text-md mx-auto xs:text-xl" href={pdfLink} target="_blank" download={pdfLink}
				>Download my resume
			</a>
		</div>
	</div>
</div>
