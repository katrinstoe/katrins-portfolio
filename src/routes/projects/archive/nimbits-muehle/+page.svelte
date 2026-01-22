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
		'Improved platform responsiveness, fixed layout problems, and restructured pages for better usability.',
		'Learned and implemented Shopware 6 (Twig, PHP, Sass) and Shopware 5 (Smarty, PHP, Less) technologies to customize client solutions.',
		'Created internal guides to help future developers with plugin creation and system setup.',
		'For Mühle, I ensured cross-device compatibility and refined the platform’s frontend design.'
	];

	let itemsHeaders = [
		'Frontend Development:',
		'Shopware Integration:',
		'Documentation:',
		'Client Work:'
	];

	let itemsMethod = [
		'Participated in Scrum meetings to manage tasks and improve collaboration.',
		'Learned Shopware tools and programming languages on the job to meet project needs.'
	];

	let itemsMethodHeadings = ['Agile Workflows:', 'Self-Learning:'];

	let itemsToolsHeadings = ['Development:', 'Project Management:', 'Documentation:'];

	let itemsTools = [
		'Shopware 6, Shopware 5, Twig, Smarty, PHP, Sass, Less.',
		'Asana, Bitbucket, Docker.',
		'Internal company wiki.'
	];

	let itemsTakeawaysHeadings = [
		'Adaptability:',
		'Frontend Skills:',
		'Collaboration:',
		'Documentation:'
	];
	let itemsTakeaways = [
		'Quickly learned new tools and frameworks, such as Shopware and Sass.',
		'Gained experience in creating responsive and user-friendly designs.',
		'Worked in a small team that valued open feedback and efficient workflows.',
		'Developed clear guides to improve onboarding and knowledge sharing.'
	];

	const title = 'Nimbits GmbH: Mühle Platform Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<DetailProjectLayout
	imgSrc="/imgs/Projects/NimbitsMuehle/Muehle.png"
	altText="Background Image Muehle Homepage"
	duration="15. December 2022 - 31. June 2023 (~ 12 weeks)"
	contributors="Nimbits GmbH Team"
	opacity="opacity-50"
	sectionTitle="Nimbits GmbH - Mühle"
	colorHeader="bg-funpink"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			At Nimbits GmbH, I worked on e-commerce solutions using Shopware. My tasks included frontend
			development, plugin creation, and system configuration. I contributed to projects like the
			Mühle platform, where I focused on improving responsiveness and fixing layout issues.
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
				src="/imgs/Projects/NimbitsMuehle/MuehleCookies.png"
				alt="Screenshot of Cookie Banner on Muehle on Desktop and Mobile"
				class="small-image mt-10 rounded-lg md:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>
	<Wrapper>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=eDMNeBJ2OG0" />
		</div>
	</Wrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods</SubsectionHeader>
		<OrderedList items={itemsMethod} headings={itemsMethodHeadings}></OrderedList>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/NimbitsMuehle/iStockScrum.jpg"
				alt="Scrum Illustration Graphic"
				class="small-image mt-10 w-full rounded-lg sm:w-3/4 md:w-4/5 lg:w-2/3"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<OrderedList items={itemsTools} headings={itemsToolsHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} headings={itemsTakeawaysHeadings} />
		<p>
			This internship helped me build practical skills in development, problem-solving, and team
			collaboration while delivering real-world solutions.
		</p>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}
</style>
