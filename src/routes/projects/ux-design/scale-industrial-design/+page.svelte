<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import Image from 'svimg/Image.svelte';
	const pdfUrl =
		'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/Final%20Presentation%20Alessi%20Scale%20Group%204%20(1).pdf';

	const pdfUrl2 = 'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/Kitchen%20Scales.pdf';
	const pdfUrl3 =
		'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/Grey%20Bold%20Minimalist%20Project%20Proposal%20Presentation.pdf';

	const title = 'Infographic Design Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<DetailProjectLayout
	imgSrc="/imgs/Projects/ScaleIndustrialDesign/scale_and_box.jpg"
	altText="Background Image Info Graphic Design"
	duration="27.10.2025 - 13.12.2025 (~ 7 weeks)"
	contributors="Gabriela Kiryluk, Katrin Stötter, Vignesh Dayalan"
	opacity="opacity-50"
	sectionTitle="Scale-Design"
	colorHeader="bg-funpink"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			This project was developed as part of the Industrial Design course at KTH, focusing on the
			design of a kitchen scale inspired by Alessi’s brand identity. Working in a team of three, we
			followed a Double Diamond design process to move from user research and brand analysis to a
			refined product and packaging concept. The final design targets a professional cook who hosts
			cooking classes for children, balancing durability, usability, and playful aesthetics.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Design - Research & Framing</SubsectionHeader>
		<p>
			We started by researching existing kitchen scales and kitchen tools, alongside a visual and
			material analysis of brands such as Alessi, Joseph Joseph, and Ferm Living. In parallel, we
			conducted an online survey (10 responses) to understand purchasing decisions, aesthetic
			preferences, and functional expectations around kitchen scales.
		</p>

		<p class="mt-4">
			Based on this input, we developed personas, with our primary persona being a professional cook
			teaching children, someone who values durability, easy cleaning, and playful design without
			unnecessary complexity. These insights helped frame the design challenge around combining
			functionality, child-friendliness, and a fun and creative form.
		</p>
		<div class="mt-8 flex gap-2">
			<Image
				src="/imgs/Projects/ScaleIndustrialDesign/Kitchen_Scales_Persona.png"
				alt="Persona 1, a young woman, student, fun personality in Stockholm."
				class="w-1/3 rounded-md"
			></Image>
			<Image
				src="/imgs/Projects/ScaleIndustrialDesign/Kitchen_Scales_1_Persona.png"
				alt="Persona 2, 61 year old dad, practical, efficient, German."
				class="w-1/3 rounded-md"
			></Image>
			<Image
				src="/imgs/Projects/ScaleIndustrialDesign/Kitchen_Scales_2_Persona.png"
				alt="Persona 3, 30 years old, professional chef that hosts cooking lessons for kids, practical and fun, Gothenburg."
				class="w-1/3 rounded-md"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Develop — Concept Generation & Form Exploration</SubsectionHeader>
		<p>
			During the development phase, we explored multiple scale concepts through sketching and
			ideation. Early ideas focused on multifunctional scales, extendable or hidden scales, and
			decorative scales that could double as kitchen objects or wall-mounted elements.
		</p>
		<p class="mt-4">
			Through iterative sketching rounds, we refined the form of the scale towards and abstract,
			rounded, creature-like shape, inspired by Alessi’s playful and minimal aesthetic. We
			ultimately chose the decorative scale concept, aiming to integrate the scale into the kitchen
			environment while keeping it intuitive and approachable.
		</p>
		<Image
			src="/imgs/Projects/ScaleIndustrialDesign/Grey_Bold_Minimalist_Project_Proposal_Presentation.png"
			alt="Multiple Images of Sketch iterations showing how the design evolved into something organicly shaped and inspired by creatures."
			class="mt-10 rounded-md"
		></Image>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Deliver — Final Design & Materialization</SubsectionHeader>
		<p>
			The final design resulted in a decorative, wall-mountable kitchen scale that combines
			expressive form with practical use. Material choices included stainless steel for durability,
			plastic for the weighing plate, and transparent resin or acrylic elements for buttons and
			display components. Production methods such as press forming, laser cutting, and injection
			molding were considered to ensure feasibility.
		</p>
		<p>
			The project concluded with a 3D model, technical drawings, final renders, and a packaging
			concept aligned with Alessi’s visual language, including minimalist layout, material
			transparency, and playful graphic details.
		</p>
		<div class="mt-8 flex gap-2">
			<Image
				src="/imgs/Projects/ScaleIndustrialDesign/technical_drawing.png"
				alt="Technical Drawing."
				class="w-1/2 rounded-md"
			></Image>
			<Image
				src="/imgs/Projects/ScaleIndustrialDesign/Renders_and_final_design.png"
				alt="Renders of the final design and image of the final prototype."
				class="w-1/2 rounded-md"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader
			>Presentations throughout the course presenting the progress:
		</SubsectionHeader>
		<div class="mt-8 flex items-center justify-center">
			<iframe src={pdfUrl2} width="500" height="500" title="Presentation Double Diamon Part 2" />
			<iframe src={pdfUrl3} width="500" height="500" title="Final Presentation" />
			<iframe src={pdfUrl} width="500" height="500" title="Presentation Double Diamond Step 1" />
		</div>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Some of the Sketches done during the Sketching exercises</SubsectionHeader>
		<div class="mt-8 grid grid-cols-2 gap-4">
			<!-- Left: big image -->
			<Image
				src="/imgs/Projects/ScaleIndustrialDesign/catlamp_sketch.png"
				alt="Sketch of a catlamp."
				class="h-full w-full rounded-md object-cover"
			/>

			<!-- Right: stacked images -->
			<div class="grid grid-rows-2 gap-4">
				<Image
					src="/imgs/Projects/ScaleIndustrialDesign/bottle_sketch.png"
					alt="Sketch of a bottle."
					class="h-full w-full rounded-md object-cover"
				/>
				<Image
					src="/imgs/Projects/ScaleIndustrialDesign/stamp_sketch.png"
					alt="Sketch of a stamp."
					class="h-full w-full rounded-md object-cover"
				/>
			</div>
		</div>
	</ProjectSectionWrapper>
</DetailProjectLayout>
