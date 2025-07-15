<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Video from '$lib/components/Video.svelte';

	const pdfUrl =
		'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/readme%20export%20disney%20princess.pdf';

	let itemsMethodHeadings = [
		'Iterative Development',
		'UI Implementation',
		'Application Logic & State Handling',
		'Database Connectivity',
		'Feature Extension'
	];

	let itemsMethod = [
		'Worked in an agile team using Git pull requests and code reviews, as well as User Testing to iteratively develop the project.',
		'Developed responsive interface components with JSX, an external MUI components, styled using Bootstrap.',
		'Handled state updates and business logic using Redux with custom middleware for side effects.',
		'Integrated Google Firestore for syncing and persisting application data in real time.',
		'Connected external APIs to bring in dynamic content and enhance platform capabilities.'
	];

	let itemsToolsHeadings = ['Development:', 'Project Management:', 'Documentation:'];

	let itemsTools = [
		'React, JSX, Redux, Redux Middleware, MUI, Bootstrap, Google Firestore, MVP.',
		'Git, Pull Requests, Code Reviews, Agile Workflows.',
		'Git README, User Test Word documents (summaries, notes, scripts, consent forms), internal discussions and documented feedback from code reviews.'
	];
	let itemsTakeawaysHeadings = [
		'React & Redux Skills',
		'State Management Practice',
		'Git-Based Collaboration',
		'Integration Experience'
	];

	let itemsTakeaways = [
		'Learned React and Redux.',
		'Learned to manage application state effectively.',
		'Developed collaboration skills by working with Git-based workflows and code review processes.',
		'Gained practical experience in integrating external services including Firestore and APIs.'
	];

	const title = 'Once Upon a Budget';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<DetailProjectLayout
	imgSrc="/imgs/Projects/DisneyPrincess/LandingPageOnceUponABudget.png"
	altText="Background Image Landingpage Once Upon a Budget Website"
	duration="05. March 2025 - 19. June 2025 (~ 15 weeks)"
	contributors="Diagnosa Fenomena, Hyosun Kim, Katrin Stötter, Marta Casandra Lendínez Ibáñez"
	opacity="opacity-50"
	sectionTitle="Once Upon a Budget"
	colorHeader="pastelgreen"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			The Once Upon a Budget plattform is a website designed to support finanical literacy amongst
			women and girls. The platform includes a personality quiz, educational content, and simple
			investment tools aswell as a Forum functionality all meant to support a low barrier of
			entrance and a supportive environment of learning. The platform was developed using React,
			Redux, and MUI, with data persistence via Firestore and external API integrations.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<ul class="space-y-3">
			<li>
				<strong>Application Development:</strong> As a group we all acted as Senior Developers reviewing
				our teammates codes. My tasks included developing the authentification functionality for the
				application for Email and Google Login and Signup, as well as the personal portfolio planner
				integrating MUI components.
			</li>
			<li>
				<strong>Participant Tests:</strong> I created a script and the consent forms for our user Testing.
				We decided to do a Think aloud to evaluate if the concept was understandable without prior explanation
				and if the navigation and other features were intuitive. One User Test was held at the beginning
				of the project after a first low-fidelity prototype was created on Figma to gain general feedback
				on the concept and the general layout of our website. A second User Test was held towards the
				end, when the platform was almost finished, to evaluate the usability of the platform and the
				features.
			</li>
			<li>
				<strong>Collaboration:</strong> Participated in team ideation sessions, code reviews, task planning,
				and iterative testing to refine the app’s functionality and usability.
			</li>
		</ul>
	</ProjectSectionWrapper>
	<Wrapper>
		<div class="flex items-center justify-center py-8">
			<Video
				src="https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/Disney%20Princess%20Recording.mov"
			/>
		</div>
	</Wrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods</SubsectionHeader>
		<OrderedList items={itemsMethod} headings={itemsMethodHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<OrderedList items={itemsTools} headings={itemsToolsHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} headings={itemsTakeawaysHeadings} />
		<p>
			Through this project, I deepened my understanding of frontend development, particularly in
			structuring applications with React, Redux, and MUI. I gained experience in managing state,
			using middleware effectively, and connecting to external services like Firestore.
			Additionally, I learned how to collaborate efficiently in a team environment using Git for
			version control, code reviews, and project management.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>The final Readme for this Project can be viewed here:</SubsectionHeader>
		<div class="mt-8 flex items-center justify-center">
			<iframe src={pdfUrl} width="500" height="1000" title="PDF" />
		</div>
		<p class="pt-5">
			If you are interested in seeing the entire project code, contact me and I can invite you as a
			collaborator or send you a zipped folder.
		</p>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}
</style>
