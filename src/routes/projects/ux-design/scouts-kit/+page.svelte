<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Video from '$lib/components/Video.svelte';

	let pdfUrl =
		'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/SoundBoxWorkshop%20final%20submission.pdf';

	let items = [
		'Designed and sewed a wearable forest exploration kit using recycled fabric.',
		'Participated in all ideation sessions and contributed to refining the final concept based on feedback. Took part in bioplastic recipe exploration and material sourcing.',
		'Learned how to solder, assemble, disassemble electronics throughout the project.',
		'Learned about designing physical interaction elements (like the larva mic and sensor layout) through working closely with teammates.',
		'Researched around Forest and soil health, climate change consequences on forests in Europe and tools already in use by foresters. Researched and started building a beetle trap using Adafruit Circuit, Servo Motors, etc. (which we couldn’t realize due to time).'
	];

	let itemsHeaders = [
		'Toolkit Design:',
		'Ideation & Feedback:',
		'Electronics:',
		'Interface:',
		'Research:'
	];

	let itemsMethod = [
		'Bodystorming, Embodied Sketching, and Iterative Prototyping using low-fi and soft materials.',
		'Knolling, dissecting old devices, and making our own bioplastics using agar agar and glycerin.',
		'Soldering and assembling circuits with LEDs and sensors, based on readings around soil and forest health.',
		'Frequent feedback sessions with peers and supervisors helped us refine the prototype, its use case and user group (young scouts).'
	];

	let itemsMethodHeadings = [
		'Design Process:',
		'Material Exploration:',
		'Electronics & Sensors:',
		'Iteration:'
	];

	let itemsTools = [
		'Canva for Designing the leaflet, Figjam for Ideation',
		'Sewing Machine, Soldering for assembling sensors, Laser cutting for wooden case, Pot for cooking bioplastics, standard tools for screwing and assembling.',
		'Piezo microphones, LED components, and moisture sensors, Arduino, Adafruit Circuit, vibration motor, and servo motors, etc.'
	];

	let itemsToolsHeadings = ['Digital Tools:', 'Tools for physical fabrication:', 'Components:'];

	let itemsTakeaways = [
		'I really enjoyed learning how to work hands-on with new materials and tools I hadn’t used before.',
		'Creating something physical together in a short time felt very different from digital work, we used a very creative process which I enjoyed and creating something physical was very rewarding.',
		'I learned how to make bioplastics, sew soft interfaces, and solder simple circuits, all completely new to me before this.',
		'Working with a solarpunk narrative made me think more about future tools and how they could be sustainable and playful at the same time.'
	];

	const title = 'Forester Kit for Solarpunk Scouts';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<DetailProjectLayout
	imgSrc="/imgs/Projects/ScoutsKit/Solarpunk%20kit%20small%20pic.png"
	altText="Forester Kit Prototype Hanging on Tree"
	duration="17. March – 26. May 2025 (10 weeks)"
	contributors="Katrin Stötter, Amina-Kamra Maglic, Gabriela Kirlyuk, Yu Lu"
	opacity="opacity-50"
	sectionTitle="Forester Kit for Solarpunk Scouts"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			We designed a wearable toolkit for scouts in a solarpunk future as part of the course Physical
			Interaction Design and Realization at KTH. The kit contains tools and sensors to explore
			forest health (like a soil moisture meter, “larva mic,” seed bombs, bioplastics, and a scout
			notebook), and can be worn or hung on trees. The components were built using recycled
			materials, and all components were inspired by literature on soil and forest ecology.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<UnorderedList {items} headings={itemsHeaders} />
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Methods</SubsectionHeader>
		<UnorderedList items={itemsMethod} headings={itemsMethodHeadings} />
		<div class="mt-10 flex justify-center">
			<Video src="https://www.youtube.com/watch?v=uSYS0gFZK8k" />
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<UnorderedList items={itemsTools} headings={itemsToolsHeadings} />
		<div class="mt-10 flex justify-center">
			<img
				src="https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/Figma%20jam%20board%20scouts%20kit.png"
				alt="Ideation Process Figjam board"
				class="w-full rounded-lg"
			/>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} />
		<p class="pt-7"></p>
		<SubsectionHeader>Soundbox Seminar</SubsectionHeader>
		<p>
			During one of the Seminars we also created a Soundbox and matching Scores for it. This was my
			first experience with souldering and assembling an entire working electronic piece and
			therefore had a huge learning effect for me as well. We soldered all the components to the
			board and assembled it in the box and later created scored together with another group. The
			process and be seen below.
		</p>
		<Video src="https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/VID-20250503-WA0018~2.mp4" />
		<div class="mt-8 flex items-center justify-center">
			<iframe src={pdfUrl} width="500" height="1000" title="PDF Summary Soundbox Workshop" />
		</div>
	</ProjectSectionWrapper>
</DetailProjectLayout>
