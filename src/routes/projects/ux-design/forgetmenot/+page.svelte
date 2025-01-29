<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Video from '$lib/components/Video.svelte';

	let items = [
		'Creating an intuitive and engaging interaction method.',
		'Handcrafting a physical model using cardboard and other materials.',
		'Designing a playful yet minimalist experience for children and parents.'
	];
	let itemsHeaders = ['Concept development:', 'Prototyping:', 'Interaction design:'];
	let itemsMethod = [
		'to each other remotely.',
		'via a simple button mechanism.',
		'through a physical opening and closing action, just like a mailbox.'
	];
	let itemsMethodHeadings = [
		'Send LEGO creations:',
		'Record and receive voice messages:',
		'Easily interact with the box:'
	];

	let itemsFeaturesHeadings = [
		'Tangible interaction:',
		'Playful & accessible:',
		'Designed for travel:',
		'Visual progress indicator:'
	];
	let itemsFeatures = [
		'Users physically place and retrieve objects, making remote communication feel more personal.',
		'A flower-shaped button allows easy voice recording.',
		'The box is lightweight and foldable, making it easy to carry.',
		'A physical letter indicator shows the status of a sent item.'
	];
	let itemsToolsHeadings = [
		'Cardboard and crafting materials:',
		'Basic electronics:',
		'Handcrafting techniques:'
	];
	let itemsTools = ['for the prototype.', 'for interactive elements.', 'to refine usability.'];
	let itemsTakeawaysHeadings = [
		'Physical interaction creates emotional connection:',
		'Simplicity improves accessibility:',
		'Craft-based prototyping is powerful:'
	];
	let itemsTakeaways = [
		'A tangible, hands-on design makes remote communication feel more personal.',
		'Keeping interactions intuitive ensures usability for both children and parents.',
		'Even without advanced fabrication tools, a well-crafted prototype can effectively communicate an idea.'
	];
</script>

<DetailProjectLayout
	imgSrc="/imgs/Projects/ForgetMeNot/forgetmenot.png"
	altText="Background Image Forget-Me-Not Box"
	duration="20. April- 19. July 2022 (~ 12 weeks)"
	contributors="solo project"
	opacity="opacity-50"
	sectionTitle="Forget-me-not Box"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			The Vergiss-Mein-Nicht Box is a playful solution designed to help parents and children stay
			emotionally connected despite physical distance due to work-related travel. Inspired by a
			mailbox, it allows families to send LEGO® creations and voice messages, making interaction
			simple, intuitive, and engaging across different time zones.
		</p>
	</ProjectSectionWrapper>
	<!-- Add an Audio component to display the project audio -->
	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<p class="mb-5">I was responsible for:</p>
		<UnorderedList {items} headings={itemsHeaders}></UnorderedList>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods & Approach</SubsectionHeader>
		<p>
			The design focused on easy, playful interaction without requiring advanced technical skills.
			The mailbox-inspired form makes the experience familiar and intuitive. Users can:
		</p>
		<UnorderedList items={itemsMethod} headings={itemsMethodHeadings}></UnorderedList>
		<p>
			The prototype was crafted using cardboard and other materials, allowing for rapid iteration
			and testing of the interaction concept.
		</p>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/ForgetMeNot/boxBild.png"
				alt="Coffee Ingredients Mixing Game"
				class="small-image mt-10 rounded-lg md:w-2/3"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Key Features</SubsectionHeader>
		<OrderedList items={itemsFeatures} headings={itemsFeaturesHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<OrderedList items={itemsTools} headings={itemsToolsHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} headings={itemsTakeawaysHeadings} />
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/ForgetMeNot/userStory.png"
				alt="Authoring Tool for the Barista Learning Platform"
				class="small-image mt-10 rounded-lg md:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Reflection</SubsectionHeader>
		<p>
			The Vergiss-Mein-Nicht Box transforms long-distance family interaction into a fun, creative
			experience, proving that simple, tangible design can foster emotional closeness. Through this
			project, I strengthened my skills in handcrafted prototyping, interaction design, and playful
			user experience development. I also learned how to defend my own designs and re-iterate them
			over time.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader
			>The final handbook for this Project can be viewed here (only available in German):</SubsectionHeader
		>
		<div class="mt-8 flex items-center justify-center">
			<iframe
				src="/pdfs/Handout_Stoetter_InteractionPrototyping_2619471.pdf"
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
