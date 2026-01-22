<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	const pdfUrl =
		'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/WS23_GvisG_Abgabe_St%C3%B6tter_Katrin.pdf';
	let itemsMethod = ['Green', 'Blue', 'Red', 'Yellow', 'Light Blue'];
	let itemsMethodHeadings = [
		'Health, youth, and well-being:',
		'Science, concentration, and precision:',
		'Love and intensity:',
		'Optimism and joy:',
		'Relaxation:'
	];
	let itemsFeaturesHeadings = [
		'Color psychology:',
		'Contrasting color schemes:',
		'Balanced layout:'
	];
	let itemsFeatures = [
		'Enhances the emotional impact of data visualization.',
		'Can effectively highlight differences between structured and unstructured time.',
		'Improves readability and makes complex information more accessible.'
	];
	const title = 'Infographic Design Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<DetailProjectLayout
	imgSrc="/imgs/Projects/ScaleIndustrialDesign/scale_and_box.jpg"
	altText="Background Image Info Graphic Design"
	duration="17.10.2022 - 20.02.2023 (~ 18 weeks)"
	contributors="Individual project"
	opacity="opacity-50"
	sectionTitle="Info-Graphic Design"
	colorHeader="bg-funpink"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			This infographic was created to visually represent my Work-Life-Balance based on a randomly
			selected week in 2022. The design uses color as a semantic tool, making different aspects of
			my daily life immediately distinguishable.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Design Approach & Methods</SubsectionHeader>
		<p>
			The infographic was structured using <strong>semantic color coding</strong> to convey meaning
			intuitively. The chosen <strong>color palette</strong> was carefully selected to reflect different
			aspects of my routine:
		</p>
		<UnorderedList items={itemsMethod} headings={itemsMethodHeadings}></UnorderedList>
		<p>
			For the <strong>work and university</strong> sections, a
			<strong>monochromatic color scheme</strong> was used to create a uniform, structured appearance,
			emphasizing the routine nature of these activities.
		</p>
		<p>
			In contrast, the <strong>life and leisure</strong> sections feature
			<strong>vibrant, complementary colors</strong>, reinforcing the contrast between structured
			obligations and free time.
		</p>
		<p>
			The infographic follows the <strong>recognition rather than recal</strong> principle, ensuring
			that the viewer can quickly interpret the data without needing prior context.
		</p>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/InfoGraphic/infographic2.jpg"
				alt="Infographic Image with Hex Codes"
				class="small-image mt-10 rounded-lg md:w-1/3"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Key Insights and Learnings</SubsectionHeader>
		<OrderedList items={itemsFeatures} headings={itemsFeaturesHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Additional Work</SubsectionHeader>
		<p>
			Beyond this infographic, I have also worked on typography-focused designs, UX portfolio
			layouts, and corporate identity projects, applying structured design principles to various
			visual communication challenges. All of them can be seen in my Handout below (only available
			in German).
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>The final handbook for this Project:</SubsectionHeader>
		<div class="mt-8 flex items-center justify-center">
			<iframe
				src={pdfUrl}
				width="500"
				height="1000"
				title="PDF Handout Stoetter Interaction Prototyping"
			/>
		</div>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}
</style>
