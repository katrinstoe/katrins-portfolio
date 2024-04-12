<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import InfoGraphic from '$lib/sections/projects/InfoGraphic.svelte';
	import ForgetMeNotProject from '$lib/sections/projects/ForgetMeNotProject.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<section class="pt-12">
	<Wrapper>
		<SectionHeader>Latest Projects</SectionHeader>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam consequuntur corporis
			doloremque ex exercitationem fuga id, mollitia, quae quaerat quis quisquam recusandae
			reiciendis ut veniam vero voluptas voluptatem voluptatum.
		</p>
	</Wrapper>
	<InfoGraphic />
	<ForgetMeNotProject />
</section>
