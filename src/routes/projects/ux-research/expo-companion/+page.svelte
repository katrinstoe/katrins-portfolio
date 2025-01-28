<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';

	let items = [
		'Contributed to idea generation using methods like **Crazy 8, 10+10 method, Bodystorming** and **Dot Voting**. Developed the concept of using a tablet in combination with NFC-tagged leaves for interactive question prompts.',
		'Designed and tested prototypes in Figma, incorporating feedback from teachers and HCI experts.',
		'Built an Android app with Jetpack Compose, integrated with NFC technology for interaction, and implemented backend functionality using PocketBase.',
		'Conducted a comparative study to assess user experience and need fulfillment against traditional paper questionnaires.'
	];

	let itemsHeaders = ['Ideation & Design: ', 'Prototyping: ', 'App Development: ', 'Evaluation: '];

	let itemsMethod = [
		'Ideation with Focus on Needs, Think-Aloud Protocol, Focus Groups, and iterative feedback loops, Affinity Diagramming.',
		'Figma, Jetpack Compose, Onyx Boox Max Lumi tablet, ACR1251 NFC reader, PocketBase backend.',
		'Interaction Vocabulary, PANAS, UNeeds, Need Scales'
	];

	let itemsMethodHeadings = ['Methods:', 'Tools:', 'Questionnaires Used to Survey Participants:'];

	let itemsTakeaways = [
		'Participants (teachers) valued interactivity and novelty but required clear guidance to engage effectively.',
		'The study revealed higher stimulation and autonomy fulfillment with the ExpoCompanion compared to paper questionnaires, though improvements were needed in clarity and technical stability.'
	];
</script>

<div>hi</div>

<DetailProjectLayout
	imgSrc="/imgs/Projects/ExpoCompanion/ExpoCompanion.png"
	altText="Background Image Organ Locator Illustration"
	duration="7. Oktober - 31.03.2023 (~ 24 weeks)"
	contributors="Lorenz Bauer, Carina Frank, Jacob Heim, Marie Thienemann. Supervisor: Sara Wolf"
	opacity="opacity-50"
	sectionTitle="Expo Companion"
	colorHeader="bg-funpink"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			The ExpoCompanion was developed as part of the CoTeach project in collaboration with the
			Religion Department at the University of Würzburg. It served as a digital alternative to paper
			questionnaires, aiming to engage teachers visiting an exhibition on digitalization in
			teaching. Its focus was to encourage reflection on integrating technology into the classroom
			while addressing teachers’ needs for stimulation, competence, and autonomy.
		</p>
	</ProjectSectionWrapper>
	<!-- Add an Audio component to display the project audio -->
	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<p class="mb-5">
			I designed, developed, and tested a system that uses prosody (melody, rhythm, timbre) and
			vocal bursts (short non-verbal sounds like laughter or sighs) to convey emotions. This
			involved:
		</p>
		<UnorderedList {items} headings={itemsHeaders} />
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/ExpoCompanion/ideation1.webp"
				alt="Miro Screenshot of Ideation methods"
				class="small-image mt-10 rounded-lg md:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods & Tools</SubsectionHeader>
		<OrderedList items={itemsMethod} headings={itemsMethodHeadings}></OrderedList>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/ExpoCompanion/ExpoCompFigma.webp"
				alt="Expo Companion Screens and Expo Poster"
				class="small-image mt-10 rounded-lg md:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} />
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/ExpoCompanion/ExpoCompUserTest.webp"
				alt="Pictures of Prototype and User Test Environment"
				class="small-image mt-10 rounded-lg md:w-2/3"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Impact</SubsectionHeader>
		<p>
			The ExpoCompanion was further developed and implemented in an exhibition in Hamburg in 2023.
			The exhibition gave teachers a hands-on opportunity to reflect on digital technologies and
			their potential applications in education, making the ExpoCompanion a valuable tool for
			enhancing educational experiences.
		</p>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}
</style>
