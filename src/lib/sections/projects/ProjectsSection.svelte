<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Project from '$lib/sections/projects/Project.svelte';
</script>

<section class="pt-12">
	<Wrapper>
		<h2 class="heading">Latest Projects</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam consequuntur corporis
			doloremque ex exercitationem fuga id, mollitia, quae quaerat quis quisquam recusandae
			reiciendis ut veniam vero voluptas voluptatem voluptatum.
		</p>
	</Wrapper>
	<Project />
</section>

<style>
	.heading {
		font-size: clamp(2rem, 8vw, 7rem);
	}
</style>
