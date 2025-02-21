<script lang="ts">
	import Project from '$lib/sections/projects/Project.svelte';
	import Image from 'svimg/Image.svelte';
	const title = 'Forget Me Not Box Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Project
	divider="blue"
	title="Forget Me Not Box"
	description="This project was created as my final exam for the interaction guidelines seminar. It includes a tangible prototype for a box that connects children with their parents over distance and enables collaborative play with legos. To see the entire design pocess, click below."
	year="2022"
	buttonText="Design process"
	path="/projects/ux-design/forgetmenot"
	colorButtonPath="/shapes/call-to-action-pink.svg"
>
	<Image src="/imgs/forgetmenot.png" alt="forgetmenot box" class="md:pt-24" />
</Project>
