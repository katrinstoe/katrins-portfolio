<script lang="ts">
	export let src: string; // Accepts the image path as a prop
	export let alt: string = ''; // Accepts the image alt text as a prop
	export let opacity: string = ''; // Accepts the image opacity as a prop
</script>

<div class="bg-image absolute {opacity}">
	<!--	<p>Alt Debug: {opacity}</p>-->
	<img {src} {alt} class="h-screen w-screen object-cover" />
</div>
