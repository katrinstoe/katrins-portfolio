<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import Video from '$lib/components/Video.svelte';

	let items = [
		'Ideation and concept development for the game mechanics and narrative.',
		'Prototyping the game using pixel art and coding tools.'
	];
	let itemsHeaders = ['Concept development:', 'Prototyping:'];
	let itemsMethod = [
		'Rapid and creative ideation',
		'Decide on one idea, specifically the idea of a video game where the camera is locked and events happen outside of the perceivable frame to the players.',
		'Greenscreen and video editing for the first prototype.',
		'GDevelop to quickly prototype a video game showcasing the concept in a pixelart game.'
	];
	let itemsMethodHeadings = [
		'Worst Possible Idea:',
		'Dot Voting:',
		'Video Prototyping:',
		'Code Prototyping:'
	];

	let itemsTools = [
		'For the ideation',
		'For the video prototype, and for the video editing of the second prototype.',
		'A no-code game engine for creating 2D and 3D games without programming'
	];
	let itemsToolsHeadings = ['Figma:', 'Video Editing Software:', 'GDevelop 5:'];

	let itemsTakeawaysHeadings = ['Rapid Prototyping:', 'TBD:'];
	let itemsTakeaways = [
		'This project was part of the UX Design and Evaluation class at KTH (DM2630), which includes multiple design challenges with companies. This was the second challenge we had and as time was so short, I think it really helped me learn how to let go of finding the perfect idea and solution and rather focusing on getting something out there quickly to test and iterate on. ',
		'Will be added as soon as I have received a feedback'
	];
	const title = 'Forget Me Not Box Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<DetailProjectLayout
	imgSrc="/imgs/Projects/BlastTheory/thumbnail.png"
	altText="Blast Theory Game Screenshot"
	duration="27. October- 01. December 2025 (~ 5 weeks)"
	contributors="Sara Norman, Weicheng Yuan, Jing Xu"
	opacity="opacity-50"
	sectionTitle="Blast Theory TRUCOLD to Video Game"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<!--		TODO: Decide if also put on main page-->
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			Blast Theories TRUCOLD <a
				class="project-link"
				href="https://www.blasttheory.co.uk/projects/trucold/">project</a
			> is a video exploring the gaps a fixed camera recording creates between what is fictional and
			what is real. In our group work we were inspired by these boundaries of the viewers perception
			of reality and created a video game prototype that plays with these ideas. The game plays with
			the uncannyness of stories happening outside of the video game camera view and how these impact
			the characters relation to the player. The first version was a video prototype shot amongst our
			group, the redesign is a coded more pixelart style game that users can play interactively.
		</p></ProjectSectionWrapper
	>
	<ProjectSectionWrapper>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=9jfP_rDgHqQ&feature=youtu.be" />
		</div>
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
			As we mainly had 2 weeks for the entire process, we focused on rapid ideation and prototyping.
			We used:
		</p>
		<UnorderedList items={itemsMethod} headings={itemsMethodHeadings}></UnorderedList>

		<p>The first Video Prototype</p>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=30RogyIj5dI" />
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<OrderedList items={itemsTools} headings={itemsToolsHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>The Design Process</SubsectionHeader>
		<p>
			We initially started by individually browsing through Blast Theories projects and each picking
			3 favourites. For each of our favorites we gave a little summary on the Figjam board and
			summarized what we thought the intended change on the user was that we liked so much about
			that particular project. Out of our 12 favorites we then dot voted on the one's where we liked
			the change on the user most, each team member got 4 votes. Two project were popular among our
			team,
			<a
				class="project-link"
				href="https://www.blasttheory.co.uk/projects/route-1236/"
				aria-label="Link to Blast Theory Page on Route 12:36 project."
				>Route 12:36
			</a>
			and
			<a
				class="project-link"
				href="https://www.blasttheory.co.uk/projects/trucold/"
				aria-label="Link to Blast Theory Page on Route 12:36 project.">TRUCOLD</a
			>. For both ideas we liked the eerie, scarie factor, perhaps because it was almost Halloween.
			After discussing it a bit more we decided to go with TRUCOLD as our inspiration, as we felt we
			had a real chance to take the idea into something new by making it digital, as the Route 12:36
			was already quite concrete and hard to imagine taking completely out of the real world context
			it was situated in.
		</p>
		<br />
		<p>
			We defined the change in the audience for TRUCOLD and felt like the gap between what is real
			and what is fictional was the biggest part, besides the power of the view or participant to
			fictionalitze their surroundings and to experience things which are not really there. We also
			thought about the parallels to today's world with AI and the parallels that could be drawn
			there. A How Might We Statement was created: How Might We make viewers aware of the boundaries
			of their perception of reality?
		</p>
		<br />

		<p>
			During the ideation we followed the Worst possible Idea method and after dot voted on our
			favorite ideas again. We had many ideas with AI usage, as we drew that parallel earlier but
			decided to go with an idea we all liked, which was creating a video came. Specifically a game,
			where the camera is fixed and you are able to interact and talk to the characters, but their
			lives continue once they walk of the screen. This was meant to highlight those boundaries of
			the in-game reality again and create an uncanny feeling for the player as they reference him
			in their storyline aswell. Afterwards we came up with a script and video prototyped a first
			version of our game by using a green screen function of one of our teammates' macbook.
		</p>

		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/BlastTheory/video_prototype_screenshot.png"
				alt="Interaction in Video Prototype by choosing an answer in the dialogue"
				class="small-image mt-10 w-full rounded-lg sm:w-3/4 md:w-4/5 lg:w-4/5"
			></Image>
		</div>
		<br />
		<p>
			In my subsequent work I took our idea and further developed it into a playable pixelart game.
			I used a no-code website to prototype the game a quickly as possible, so that if it's not what
			I was hoping it to be, I wouldn't have lost a lot of time on the development. GDevelop 5 was
			useful for this and I was able to create a little stationary game wwith some characters
			randomly moving around and of screen. When the characters are clicked they will show a little
			conversation snippet that seems out of context and alludes to the characters having
			conversations and events happening of screen. I reused and extended our original script
			snippets for this and added a few more prompts to have less repetition when playing for
			longer. I also tried making the game eerie by adding some background music and a foggy
			overlay.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} headings={itemsTakeawaysHeadings} />
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>The group work summary presentation can be seen here:</SubsectionHeader>
		<div class="mt-8 flex items-center justify-center">
			<iframe
				src="https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/TRUCOLD.pdf"
				width="1000"
				height="1000"
				title="PDF Presentation Group Work Trucold"
			/>
		</div>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}

	.project-link {
		color: #719193;
		background-color: transparent;
		text-decoration: none;
	}
</style>
