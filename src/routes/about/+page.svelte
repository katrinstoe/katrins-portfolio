<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import BgImage from './BgImage.svelte';
	import CvDisplay from './CVDisplay.svelte';
	import Shapes from './shapes.svelte';
</script>

<div class="h-full min-h-screen">
	<div class="relative min-h-screen w-full">
		<BgImage />
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
								class="xs:grow-0 xs:basis-3/4 grow bg-crazyorange/90 p-6 backdrop-blur sm:basis-2/3 sm:p-8"
							>
								<SectionHeader>About</SectionHeader>
								<p>
									Human-Computer Interaction graduate from Germany with a strong passion for UX
									Design, Usability and Programming. Adept at applying Human-Centered Design
									principles to create intuitive and inclusive products, ensuring accessibility for
									broad range of user needs. Self-driven and skilled in collaborative teamwork, I am
									eager to continuously expand my knowledge in the field and contribute to
									innovative design solutions.
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
