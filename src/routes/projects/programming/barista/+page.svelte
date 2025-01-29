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
		'I created the initial design theme of the website, ensuring a cohesive and user-friendly interface.',
		'Worked on implementing the Level 1 memory game, which teaches users coffee ingredients. I also added tooltips to assist users unfamiliar with the ingredients.',
		'Contributed to the development of the authoring tool, enabling efficient content management.',
		'Took initiative in supporting less experienced team members and resolving teamwork challenges, such as ensuring everyone contributed effectively by the end of the project.'
	];
	let itemsHeaders = [
		'Design:',
		'Game Development:',
		'Backend Authoring Tool:',
		'Team Collaboration:'
	];
	let itemsMethod = [
		'Identified user needs and outlined functional requirements for the website and game.',
		'Created a consistent UI/UX for the website.',
		'The tools used were a requirement by the course and included HTML, CSS, JavaScript, Scala, SQL, JDBC, JUnit, and the Play Framework to build the platform.',
		'Ensured functionality and usability through iterative testing.',
		'Scrum, used GitLab for version control, task management, and collaborative development.'
	];
	let itemsMethodHeadings = [
		'Requirements Analysis:',
		'Design:',
		'Implementation:',
		'Testing:',
		'Project Management:'
	];

	let itemsToolsHeadings = ['Version Control and Management:', 'Frontend:', 'Backend:', 'Testing:'];
	let itemsTools = [
		'GitLab (GitHub repository: sopra-barista)',
		'HTML, CSS, JavaScript',
		'Scala, Play Framework, SQL, JDBC',
		'JUnit'
	];

	let itemsTakeawaysHeadings = ['Technical Skills:', 'Teamwork:', 'Problem-Solving:'];

	let itemsTakeaways = [
		'Gained hands-on experience in web development, including front-end and back-end technologies, and learned how to use Scala, Play Framework, and SQL.',
		'Improved my ability to work in diverse teams, learned to address varying skill levels, and developed communication strategies to keep the team on track.',
		'Successfully navigated challenges like uneven team contributions and supported weaker team members to ensure project success.'
	];
</script>

<div>hi</div>

<DetailProjectLayout
	imgSrc="/imgs/Projects/Barista/Barista.png"
	altText="Background Image Organ Barista Game"
	duration="16. November 2021 - 16. March 2022 (~ 17 weeks)"
	contributors="Julius Arzberger, Ronja Fricke, Lisa Rieder, Cristina Titrat"
	opacity="opacity-50"
	sectionTitle="Barista Learning Platform"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			This project was developed during my bachelor's degree as part of the Programming Course
			Interface Development (10 ECTS). The goal was to create a website featuring an educational
			game and an authoring tool for backend management. Our team of five decided on a gamified
			barista-themed learning platform, to help future baristas learn coffee ingredients and a
			backend authoring tool for content creation.
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
	</ProjectSectionWrapper>
	<Wrapper>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=ILSIfWrq8zk" />
		</div>
	</Wrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods</SubsectionHeader>
		<p>The project involved the full software development lifecycle:</p>
		<OrderedList items={itemsMethod} headings={itemsMethodHeadings}></OrderedList>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/Barista/screenshotgame.png"
				alt="Coffee Ingredients Mixing Game"
				class="small-image mt-10 rounded-lg md:w-2/3"
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
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/Barista/AuthoringTool.png"
				alt="Authoring Tool for the Barista Learning Platform"
				class="small-image mt-10 rounded-lg md:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Outcome</SubsectionHeader>
		<p>
			The project achieved all goals and received the highest possible grade (1.0/A). The final
			deliverable included a working website, an interactive memory game, an authoring tool, and a
			demonstration video showcasing the project.
		</p>
		<p>
			This project highlights my skills in web development, teamwork, and problem-solving, as well
			as my ability to effectively use tools like GitLab for project management and collaborative
			development. This full code can be found on Github with the following link:
		</p>
		<a
			href="https://github.com/katrinstoe/sopra-barista"
			target="_blank"
			aria-label="External Link to the Github Repository"
			style="color: blue;">Link to Github Repository</a
		>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}
</style>
