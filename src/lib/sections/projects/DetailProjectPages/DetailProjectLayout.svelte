<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import BgImage from '../../../../routes/about/BgImage.svelte';
	import Shapes from '$lib/components/Shapes.svelte';

	export let duration: string;
	export let contributors: string;

	export let imgSrc: string;
	export let altText: string;
	export let opacity: string;
	export let sectionTitle: string;
	export let colorHeader: string;
</script>

<div class="h-full min-h-screen">
	<div class="relative min-h-screen w-full">
		<!--<SectionHeader>{sectionTitle}</SectionHeader>-->
		<BgImage src={imgSrc} alt={altText} {opacity} />
		<Shapes />

		<div>
			<div class="flex min-h-screen flex-col pb-12">
				<div class="h-[40vh] sm:h-[50vh]"></div>

				<div class="basis-1/2">
					<Wrapper>
						<div class="flex flex-row-reverse">
							<!-- spacer -->
							<!-- <div class="shrink-0 sm:basis-1/3"></div> -->
							<!-- content -->
							<div
								class="grow {colorHeader} p-6 backdrop-blur xs:grow-0 xs:basis-3/4 sm:basis-2/3 sm:p-8"
							>
								<h2 class="mb-4 text-4xl font-bold">{sectionTitle}</h2>
								<p>
									Duration: {duration} <br />
									Contributors: {contributors} <br />
								</p>
							</div>
						</div>
					</Wrapper>
				</div>
			</div>
		</div>
	</div>
	<div class="pt-8">
		<slot />
	</div>
	<Footer />
</div>
