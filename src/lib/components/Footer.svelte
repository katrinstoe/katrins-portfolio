<script lang="ts">
	import Wrapper from '$lib/components/Wrapper.svelte';
	import IconGithub from '$lib/components/icons/IconGithub.svelte';
	import IconLinkedIn from '$lib/components/icons/IconLinkedIn.svelte';
	import DividerPink from '$lib/components/dividers/DividerPink.svelte';
</script>

<section class="my-24">
	<DividerPink />
	<Wrapper>
		<div class="grid grid-cols-1 justify-between gap-4 md:grid-cols-5">
			<div class="col-span-3 md:col-start-2">
				<p class="text-center">Contact?</p>
				<p class="text-center">katrinstoetter1@gmail.com</p>
			</div>
			<div class="col-span-1 flex justify-center gap-4 md:justify-end">
				<IconGithub class="w-12" />
				<IconLinkedIn class="w-12" />
			</div>
		</div>
	</Wrapper>
</section>
