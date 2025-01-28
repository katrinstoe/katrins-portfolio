<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import InfoGraphic from '$lib/sections/projects/InfoGraphic.svelte';
	import ForgetMeNotProject from '$lib/sections/projects/ForgetMeNotProject.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import ETextile from '$lib/sections/projects/ETextile.svelte';
	import OrganLocator from '$lib/sections/projects/OrganLocator.svelte';
	import EmojiSonification from '$lib/sections/projects/EmojiSonification.svelte';
</script>

<section class="pt-12">
	<Wrapper>
		<SectionHeader>Latest Projects</SectionHeader>
		<p>
			The project section contains a collection of projects that I have completed during my studies
			at university. These projects cover a wide range of fields, including usability, programming,
			and design. In this section, you can find examples of my work and see how I have applied my
			skills and knowledge to tackle a variety of challenges. Whether you are looking for
			inspiration, or just want to learn more about my experiences as a university student, the
			project section has something for everyone. So be sure to check it out!
		</p>
	</Wrapper>
	<OrganLocator />
	<ETextile />
	<EmojiSonification />
</section>
