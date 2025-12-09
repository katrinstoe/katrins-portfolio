<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import Video from '$lib/components/Video.svelte';

	let items = [
		'Ideation and concept development for the game mechanics and narrative concept.',
		'Prototyping the game using pixel art and no-code tools.'
	];
	let itemsHeaders = ['Concept development:', 'Prototyping:'];
	let itemsMethod = [
		'Rapid and creative ideation',
		'Decide on one concept, specifically the idea of a video game where the camera is locked and events happen outside the perceivable frame',
		'Using green screen and video editing for the first prototype',
		'Using GDevelop to quickly create a playable pixel-art game.'
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

	let itemsTakeawaysHeadings = ['Rapid Prototyping:', 'No-Code Tools:'];
	let itemsTakeaways = [
		'This project was part of the UX Design and Evaluation class at KTH (DM2630), which includes multiple design challenges with companies. This was the second challenge we had and as time was so short, I think it really helped me learn how to let go of finding the perfect idea and solution and rather focusing on getting something out there quickly to test and iterate on. ',
		'This was my first time using no-code tools for game development. I was suprised how quickly I could develop a game which was super rewarding and fun, but it also did have some of the similar bugs that would occur when actually coding so it was still a bit challenging to use at times especially as I added more complex features like the speech-to-text or the music.'
	];
	const title = "Reinterpreting Blast Theory's TRUCOLD as an Interactive Game Page";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<DetailProjectLayout
	imgSrc="/imgs/Projects/BlastTheory/thumbnail.png"
	altText="Blast Theory Game Screenshot"
	duration="27. October- 08. December 2025 (~ 6 weeks)"
	contributors="Sara Norman, Weicheng Yuan, Jing Xu"
	opacity="opacity-50"
	sectionTitle="Reinterpreting Blast Theory's TRUCOLD as an Interactive Game"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			Blast Theory’s TRUCOLD is a video <a
				class="project-link"
				href="https://www.blasttheory.co.uk/projects/trucold/"
				target="_blank"
				aria-label="External Link to Blast Theory Page on Trucold project.">project</a
			>
			that explores the gaps a fixed camera creates between what is fictional and what is real. The work
			highlights how much meaning viewers create themselves when parts of an event remain outside their
			field of view.
		</p>
		<p>
			In our group project, we were inspired by these boundaries of the viewer’s perception of
			reality and translated them into an interactive video game prototype. Rather than presenting a
			full narrative, the game is designed around absence: events consciously happen outside the
			visible frame, forcing players to interpret what they cannot see.
		</p>
		<p>
			The game plays with the uncanniness of stories unfolding outside of the camera view and how
			these unseen events affect the relationship between the characters and the player. This
			creates a world where certainty is impossible, and truth is always partial.
		</p>
		<p>
			The first version of the project was a video prototype, shot among our group members. In my
			redesign, the project was further developed into a coded, pixel-art style game that users can
			play interactively. The game can be played
			<a
				class="project-link"
				target="_blank"
				href="https://gd.games/games/c3ca4d5f-d2ac-4048-9a71-d4e4a1b34965"
				aria-label="External Link to Video game, the game is not accessible as as the position of the walking characters is not transcribed and the text so far is not read aloud."
				>here</a
			>.
		</p></ProjectSectionWrapper
	>

	<ProjectSectionWrapper>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=FWFmrzh_d9o" />
		</div>
	</ProjectSectionWrapper>
	<!-- Add an Audio component to display the project audio -->

	<ProjectSectionWrapper>
		<SubsectionHeader>Design Challenge & Reference</SubsectionHeader>
		<p>
			This project was part of the UX Design and Evaluation course at KTH (DM2630). The design
			challenge was to select a Blast Theory project, identify one way in which it creates change in
			the user or participant, and then design an exclusively online version that preserves or
			enhances that change. Our group selected TRUCOLD by Blast Theory as our main reference.
			TRUCOLD is a video-based work that uses fixed camera recordings of empty urban spaces to blur
			the boundary between what is real, fictional, or imagined. By withholding narrative context,
			the work encourages viewers to project meaning onto what they see, and especially also to what
			they they do not see.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Intended Change in the User</SubsectionHeader>
		<p></p>
		<p>
			Rather than explicitly telling the viewer what to think, TRUCOLD works by creating an
			atmosphere of uncertainty. Through fixed camera views and a lack of narrative context, the
			work leaves gaps that viewers naturally start to fill in themselves, often without being fully
			aware of it.
		</p>
		<p>
			The camera appears neutral and objective, but consistently shows only a partial view of what
			is happening. This creates a tension where meaning is not clearly given, but gradually formed
			through what is missing as much as through what is shown.
		</p>
		<p>Our goal was to keep this quality and tranlate it into an interactive, digital format.</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Translating TRUCOLD into an Online Game</SubsectionHeader>
		<p>
			To shift TRUCOLD into an even more digital space, we chose to translate its core idea into a
			video game. We wanted to to see if shifting the role of the user from passive observer to
			active participant, can preserve the uncertainty.
		</p>
		<p>
			We designed a game with a fixed camera that the player cannot control. Characters enter and
			leave the frame freely, and their lives continue outside the visible area. The player can
			interact with characters when they are on-screen, but has no way of observing everything that
			happens in the game world.
		</p>
		<p>
			The design preserves TRUCOLD's use of absence and simultaneously reinforces it through
			gameplay: the player must understand the world based on incomplete, subjective information,
			knowing that important events may be taking place outside of their view.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Group Work: Video Prototype</SubsectionHeader>
		<!--		<Image-->
		<!--			src="/imgs/Projects/BlastTheory/video_prototype_screenshot.png"-->
		<!--			alt="Interaction in Video Prototype by choosing an answer in the dialogue"-->
		<!--			class="small-image mt-10 w-full rounded-lg sm:w-3/4 md:w-4/5 lg:w-4/5"-->
		<!--		></Image>-->
		<p>
			As a group, we initially explored this idea using a short video prototype created with green
			screen techniques. Viewers could simulate interaction by selecting dialogue options while
			events continued to unfold outside the frame. This prototype helped us test if the concept
			transition into a game worked, and we felt it did. This is why I chose to further develop it
			to an interactive format.
		</p>
		<p class="pt-4 font-bold">The first Video Prototype:</p>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=30RogyIj5dI" />
		</div>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Individual Development: Interactive Game Prototype</SubsectionHeader>
		<p>
			In my individual work, I expanded the group project by developing a fully playable pixel art
			game using the no-code engine GDevelop 5. Choosing a no-code tool allowed for rapid iteration
			and experimentation.
		</p>
		<p>
			In the game, characters move randomly in and out of the camera frame. When clicked, they
			present short dialogue snippets that often feel out of context or incomplete. These fragments
			hint at relationships, conflicts, or shared histories that the player never fully witnesses.
		</p>
		<p>
			Instead than creating a cohesive storyline, these interactions create ambiguity. Players are
			left to question what actually happened, whose account is reliable, and how much of the story
			they are imagining themselves.
		</p>
		<p>
			The atmosphere plays an important role in amplifying this uncertainty. Background music, a
			foggy overlay, and text-to-speech voices were deliberately chosen to create a slightly eerie
			feeling. The voices are similar but not identical using text-to-speech, contributing to a
			sense of coherence that is never entirely trustworthy.
		</p>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/BlastTheory/playScreenshots/character_talking2.png"
				alt="Interaction in Video Prototype by choosing an answer in the dialogue"
				class="small-image mt-10 w-full rounded-lg sm:w-3/4 md:w-4/5 lg:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Extension: AI as an Unreliable Witness</SubsectionHeader>
		<p>
			In a later iteration, I explored an extension of the original concept by introducing an
			reconstruction layer for the player to get context for the stories he is being told. The
			project group had the idea of using AI to visualize the concept at the beginning of the
			project to add a current critique to the design. After my Design critique I wanted to enhance
			the gameplay a bit more, to make the use of the game play mechanics make more sense. So I
			decided to use our original idea of incorporating AI to add another layer or unreliability by
			letting AI images recall what happened behind the scenes and provide context.
		</p>
		<p>
			At any moment, players can choose to see what the system claims happened outside the camera’s
			view. These reconstructions show AI-generated images that depict unseen conversations or
			events. Some of them give context to the player, others also describe unrelated stories where
			you feel like you are introduding private conversations, some look eerie and some like they
			could actually be snippets from outside of the screen.
		</p>
		<p>
			It is important to note that these reconstructions are not consistent but randomized. The
			system may present a different interpretation of the same unseen moment each time. The player
			has no way of verifying which version, if any, is correct.
		</p>
		<p>
			Instead of eliminating uncertainty, AI becomes an unreliable witness. Although it appears
			authoritative, it actively alters perception by confidently filling gaps with plausible but
			unverifiable narratives. This reflects general concerns about how generative systems influence
			memory, truth and interpretation when direct experience is limited.
		</p>
		<p>
			For practical reasons, the current prototype uses pre-generated images instead of live AI
			generation. This decision was made deliberately, as the idea was to prototype the concept, and
			generating them only once makes it a bit more sustainable.
		</p>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/BlastTheory/playScreenshots/ai_talks2.png"
				alt="Interaction in Video Prototype by choosing an answer in the dialogue"
				class="small-image mt-10 w-full rounded-lg sm:w-3/4 md:w-4/5 lg:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Design Decisions Informed by Theory</SubsectionHeader>
		<p>
			The project applies concepts from the course discussion on stochastic and agent-based AI
			systems, in which designers no longer control the exact outcomes but instead design
			interaction frameworks around uncertainty and variability. The fixed camera and the behaviour
			of characters off-screen create an incomplete information space that reflects how users
			interact with systems that show only partial views. Fragmented dialogues further shift the
			meaning-making to the player. This logic is extended by the AI reconstruction layer, which
			generates multiple plausible interpretations of unseen events rather than a single correct
			representation. In line with the stochastic AI framework presented in the course, the system
			acts as an active participant in shaping perception and illustrates how generative systems can
			appear authoritarian while remaining unpredictable.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Reflection</SubsectionHeader>
		<p>
			This project shows how uncertainty can be shaped rather than eliminated. By combining spatial
			constraints, narrative gaps and AI-assisted reconstruction, the game makes players aware of
			how their perception is shaped by what is shown, what remains hidden and what is interpreted
			for them. Rather than offering a solution, the project invites players to engage with
			ambiguity, and to reflect on how quickly they outsource their judgement to systems that appear
			objective but are anything but that.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<p class="mb-5">I was responsible for:</p>
		<UnorderedList {items} headings={itemsHeaders}></UnorderedList>
	</ProjectSectionWrapper>

	<!--	<ProjectSectionWrapper>-->
	<!--		<SubsectionHeader>Methods & Approach</SubsectionHeader>-->
	<!--		<p>-->
	<!--			Because we had only two weeks for the entire group development process, we focused on rapid-->
	<!--			ideation and prototyping. We used:-->
	<!--		</p>-->
	<!--		<UnorderedList items={itemsMethod} headings={itemsMethodHeadings}></UnorderedList>-->

	<!--		<p class="pt-4 font-bold">The first Video Prototype:</p>-->
	<!--		<div class="flex items-center justify-center py-8">-->
	<!--			<Video src="https://www.youtube.com/watch?v=30RogyIj5dI" />-->
	<!--		</div>-->
	<!--	</ProjectSectionWrapper>-->

	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<OrderedList items={itemsTools} headings={itemsToolsHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<!--	<ProjectSectionWrapper>-->
	<!--		<SubsectionHeader>The Design Process</SubsectionHeader>-->
	<!--		<p>-->
	<!--			We started by individually browsing Blast Theory’s projects and each selecting three-->
	<!--			favourites. For every chosen project, we created short summaries and discussed what kind of-->
	<!--			change the work might provoke in the audience. After sharing and clustering these, we-->
	<!--			dot-voted on our twelve selected projects. Two project were popular among our team,-->
	<!--			<a-->
	<!--				class="project-link"-->
	<!--				href="https://www.blasttheory.co.uk/projects/route-1236/"-->
	<!--				aria-label="External Link to Blast Theory Page on Route 12:36 project."-->
	<!--				target="_blank"-->
	<!--				>Route 12:36-->
	<!--			</a>-->
	<!--			and-->
	<!--			<a-->
	<!--				class="project-link"-->
	<!--				href="https://www.blasttheory.co.uk/projects/trucold/"-->
	<!--				target="_blank"-->
	<!--				aria-label="External Link to Blast Theory Page on Route 12:36 project.">TRUCOLD</a-->
	<!--			>. Both appealed to us because of their eerie and unsettling qualities, perhaps because it was-->
	<!--			almost Halloween. After discussing further we decided to go with TRUCOLD as our project to-->
	<!--			adapt, as we felt we had a real chance to take the idea into something new by making it-->
	<!--			digital, as the Route 12:36 was already quite concrete and hard to imagine taking completely-->
	<!--			out of the real world context it was situated in.-->
	<!--		</p>-->
	<!--		<br />-->
	<!--		<p>-->
	<!--			We defined the change in the audience for TRUCOLD and felt like the gap between what is real-->
	<!--			and what is fictional was the biggest part, besides the power of the view or participant to-->
	<!--			fictionalitze their surroundings and to experience things which are not really there. We also-->
	<!--			thought about the parallels to today's world with AI and the parallels that could be drawn-->
	<!--			there. A <b>How Might We Statement</b> was created: How Might We make viewers aware of the boundaries-->
	<!--			of their perception of reality?-->
	<!--		</p>-->
	<!--		<br />-->

	<!--		<p>-->
	<!--			During the ideation we followed the <b>Worst possible Idea</b> method and after dot voted on-->
	<!--			our favorite ideas again. We had many ideas with AI usage, as we drew that parallel earlier,-->
	<!--			but decided to go with an idea we all liked, which was creating a video game. Specifically a-->
	<!--			game, where the camera is fixed and you are able to interact and talk to the characters, but-->
	<!--			their lives continue once they walk of the screen. This was meant to highlight those-->
	<!--			boundaries of the in-game reality again and create an uncanny feeling for the player as they-->
	<!--			reference him in their storyline aswell. Afterwards we came up with a script and-->
	<!--			<b>video prototyped</b> a first version of our game by using a green screen function of one of-->
	<!--			our teammates' macbook.-->
	<!--		</p>-->

	<!--		<div class="flex justify-center">-->
	<!--			<Image-->
	<!--				src="/imgs/Projects/BlastTheory/video_prototype_screenshot.png"-->
	<!--				alt="Interaction in Video Prototype by choosing an answer in the dialogue"-->
	<!--				class="small-image mt-10 w-full rounded-lg sm:w-3/4 md:w-4/5 lg:w-4/5"-->
	<!--			></Image>-->
	<!--		</div>-->
	<!--		<br />-->
	<!--		<p>-->
	<!--			In my subsequent work I took our idea and further developed it into a <b-->
	<!--				>playable pixelart game</b-->
	<!--			>. I used a <b>no-code website</b> to prototype the game a quickly as possible, so that if it's-->
	<!--			not what I was hoping it to be, I wouldn't have lost a lot of time on the development. GDevelop-->
	<!--			5 was useful for this and I was able to create a little stationary game with some characters randomly-->
	<!--			moving around and of screen. When the characters are clicked they will show a little conversation-->
	<!--			snippet that seems out of context and alludes to the characters having conversations and events-->
	<!--			happening off-screen. I reused and extended our original script snippets for this and added a few-->
	<!--			more prompts to have less repetition when playing for longer. I also tried making the game eerie-->
	<!--			by adding some background music and a foggy overlay and using Google text-to-speech voices to make-->
	<!--			the characters seem similar but different and also a bit scary sounding.-->
	<!--		</p>-->
	<!--	</ProjectSectionWrapper>-->

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} headings={itemsTakeawaysHeadings} />
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/BlastTheory/playScreenshots/end_screen.png"
				alt="Interaction in Video Prototype by confirming the dialogue"
				class="small-image mt-10 w-full rounded-lg sm:w-3/4 md:w-4/5 lg:w-4/5"
			></Image>
		</div>
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
	<ProjectSectionWrapper>
		<SubsectionHeader>Notes on the Resources I used:</SubsectionHeader>
		<p>
			The audio for the game is Empty Echo by Silicon Transmitter, found on <a
				class="project-link"
				href="https://freemusicarchive.org/music/Silicon_Transmitter/broken-pulse/empty-echo/"
				target="_blank"
				aria-label="External Link to Freemusic archive song page.">freemusicarchive.org</a
			>, licence type CC BY-NC-SA.
		</p>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}

	.project-link {
		/*color: #719193;*/
		color: #f7a343;
		background-color: transparent;
		text-decoration: none;
	}
</style>
