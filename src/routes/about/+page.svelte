<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import BgImage from './BgImage.svelte';
	import CvDisplay from './CVDisplay.svelte';
	import Shapes from '$lib/components/Shapes.svelte';
	export let title = 'About Katrin Stötter';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="h-full min-h-screen">
	<div class="relative min-h-screen w-full">
		<BgImage src="/imgs/katrin-bg.png" alt="Image of Katrin Stötter" opacity="opacity-100" />
		<Shapes />

		<div class="">
			<div class="flex min-h-screen flex-col pb-12">
				<div class="h-[40vh] sm:h-[50vh]"></div>
				<div class="basis-1/2">
					<Wrapper>
						<div class="flex flex-row-reverse">
							<!-- spacer -->
							<!-- <div class="shrink-0 sm:basis-1/3"></div> -->
							<!-- conent -->
							<div
								class="grow bg-crazyorange/90 p-6 backdrop-blur xs:grow-0 xs:basis-3/4 sm:basis-2/3 sm:p-8"
							>
								<SectionHeader>About</SectionHeader>
								<p>
									Human-Computer Interaction graduate and Interactive Media Design student from
									Germany with a strong passion for UX Design, Usability and Programming. Adept at
									applying Human-Centered Design principles to create intuitive and inclusive
									products, ensuring accessibility for broad range of user needs. Self-driven and
									skilled in collaborative teamwork, I am eager to continuously expand my knowledge
									in the field and contribute to innovative design solutions. Currently residing in
									Stockholm, Sweden.
								</p>
							</div>
						</div>
					</Wrapper>
				</div>
			</div>
			<div class="pt-8"><CvDisplay /></div>
		</div>
	</div>
	<Footer />
</div>
