<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Video from '$lib/components/Video.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';

	let itemsDiscover = [
		'Reluctance to approach staff due to cultural or language barriers.',
		'A preference for non-intrusive solutions that offer assistance without overwhelming users.'
	];

	let items = [
		'LED cuffs to signal availability (green for available, red for busy).',
		'A digital display indicating languages spoken by staff and offering QR codes for self-service assistance.',
		'A proximity sensor to adapt interactions dynamically based on customer presence.'
	];

	let itemsDeliver = [
		'Feedback from these sessions emphasized the importance of simplifying visual cues and enhancing the clarity of the display.',
		'I participated in analyzing user feedback, ensuring the final design met user needs effectively.'
	];

	let itemsTakeAway = [
		'Visual communication reduces barriers: Elements like LED cuffs and language indicators made staff more approachable.',
		'Human interaction remains vital: Customers preferred direct engagement over purely digital solutions.',
		'Iterative refinement is essential: Testing highlighted the need for balancing functionality, usability, and emotional comfort.',
		'Importance of Testing an equally balanced user population: After finishing our project and talking to our professors we realized that by having interviewed only men, we missed a design flaw for women. Many women might feel uncomfortable with men in a supermarket being allowed to take pictures of their backs. This is an important factor and will be a learning for the following projects to come.'
	];

	items = Array.isArray(items) ? items : [];
	itemsDiscover = Array.isArray(itemsDiscover) ? itemsDiscover : [];
</script>

<DetailProjectLayout
	imgSrc="/imgs/Projects/ETextile/finalDesignBack.png"
	altText="Background Image Interactive E-Textile"
	duration="26. August - 11. October 2024 (~ 6 weeks)"
	contributors="Jingyi Yan, Katrin Stötter, Olle Söderberg, Oskar Bergström"
	opacity="opacity-20"
	sectionTitle="Interactive E-Textile"
	colorHeader="bg-funpink"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Interactive E-Textile</SubsectionHeader>
		<p>
			For the development of this project, we used the Double-Diamond Process. We utilized a variety
			of tools and methods throughout like Miro, Figma, Davinci Resolve, TinkerCAD, Zoom, and Google
			Docs. We all collaboratively worked on the project during our meetings which means I
			contributed to all aspects of the process, except for programming the Arduino. On top of that,
			I edited the project video and designed the workbook using a Figma template.
		</p>
	</ProjectSectionWrapper>
	<Wrapper>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=k9CtKm1X-JQ" />
		</div>
	</Wrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Discover</SubsectionHeader>
		<p class="mb-7">
			Understanding the problem was crucial. Through <strong>semi-structured interviews</strong> and
			<strong> inquiries</strong>, we explored the challenges people living abroad face when asking
			for help in grocery stores. Key findings included:
		</p>
		<UnorderedList items={itemsDiscover}></UnorderedList>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Define</SubsectionHeader>
		<Image
			src="/imgs/Projects/ETextile/AffinityDiagramInteractionDesign.png"
			alt="Affinity Diagram of the Define State"
			class="mt-10 rounded-lg"
		></Image>
		<p class="mt-10">
			To define a research question we applied <strong>Affinity Diagramming</strong> for the
			<strong>interviews</strong>
			and
			<strong>contextual inquiries</strong>. After having found some main problem areas we came up
			with <strong>Personas</strong>
			and created <strong>Scenarios</strong> for them, which helped us refine concrete statements to
			focus our research on. To create a final problem statement we used
			<strong>POV (Point-of-View)</strong>
			and <strong>HMW (How-Might-We) statements</strong> and decided on our final HMW of:
		</p>
		<p class="mt-5 bg-yellow-100">
			<strong
				>"How might we help a person who recently moved abroad feel more comfortable asking others
				for help while grocery shopping?</strong
			>
		</p>
		<p class="mt-5">
			This question guided our ideation process to focus on solutions that enhance comfort and
			facilitate communication.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Develop</SubsectionHeader>
		<p class="mb-5 mt-10">
			We brainstormed multiple ideas, using methods such as <strong
				>brainwriting, worst possible idea, assumption busting, lotus blossom</strong
			>, and to narrow down ideas the <strong>MOSCOW method</strong>. Prototyping sessions, included
			<strong>sketching and low-fidelity prototyping</strong>, and evolved into the concept of an
			interactive e-textile shirt for store staff, featuring:
		</p>
		<UnorderedList {items}></UnorderedList>
		<p class="mt-5">
			To refine our final prototype we conducted <strong>qualitative user interviews</strong>, using
			methods like
			<strong>think-aloud and cooperative evaluation</strong>, and used the feedback to re-iterate
			our prototype.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Deliver</SubsectionHeader>
		<p class="mb-5">
			The hi-fi prototype was developed using Arduino, LED strips, and proximity sensors, and tested
			through think-aloud and cooperative evaluation methods. Feedback led to key refinements,
			including more intuitive light signals and simplified language displays. Finally, we created a
			Video showing the interaction.
		</p>
		<UnorderedList items={itemsDeliver}></UnorderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings & Insights</SubsectionHeader>
		<OrderedList items={itemsTakeAway}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader
			>The final report for this Project in form of a Coffee table book can be viewed here:</SubsectionHeader
		>
		<!--<div class="mt-8 flex items-center justify-center">
			<iframe src="/pdfs/Workbook_Final%20hand%20in.pdf" width="500" height="1000" title="PDF" />
		</div>-->
	</ProjectSectionWrapper>
</DetailProjectLayout>
