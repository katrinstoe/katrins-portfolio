<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SkribbleButton from '$lib/components/SkribbleButton.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Shapes from './shapes.svelte';
</script>

<div class="h-full min-h-screen">
	<Shapes />
	<div>
		<img src="/imgs/katrin-bg.png" alt="" class="min-h-screen object-cover" />
	</div>
	<Wrapper>
		<SectionHeader>About</SectionHeader>
		<p>
			Human-Computer Interaction graduate from Germany with a strong passion for UX Design,
			Usability and Programming. Adept at applying Human-Centered Design principles to create
			intuitive and inclusive products, ensuring accessibility for broad range of user needs.
			Self-driven and skilled in collaborative teamwork, I am eager to continuously expand my
			knowledge in the field and contribute to innovative design solutions.
		</p>
		<div class=" grid grid-cols-1 lg:grid-cols-2">
			<img src="/cv/cv-pic-1.png" alt="" class="" />
			<img src="/cv/cv-pic-2.png" alt="" class="" />
		</div>
		<div>
			<SkribbleButton>Download my resume</SkribbleButton>
		</div>
	</Wrapper>
	<Footer />
</div>
