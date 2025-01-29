<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Video from '$lib/components/Video.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';

	const videoUrl = 'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/OrganLocatorDemo.mp4';

	let items = [
		'Designing a between-subjects study to compare audio and haptic feedback modalities.',
		'Conducting a user study with participants of varying backgrounds and analyzing their experiences through surveys and open-ended feedback.',
		'Using statistical tools to test hypotheses about naturalness, immersion, and task completion.'
	];
</script>

<DetailProjectLayout
	imgSrc="/imgs/Projects/OrganLocator/IdeaDrawing.jpg"
	altText="Background Image Organ Locator Illustration"
	duration="14. November 2024 - 10. January 2025 (~ 6 weeks - excluding Christmas break)"
	contributors="Amanda Arbinge, Gabriela Kirlyuk, Hannah Johnson, Katrin Stötter"
	opacity="opacity-50"
	sectionTitle="Interactive Organ Locator"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			The Interactive Organ Locator is an Augmented Reality (AR) application designed to support
			anatomy education by allowing users to locate human organs interactively. By integrating
			multimodal feedback—audio and haptics—the app provides an engaging learning experience, tested
			in a user study with 24 participants. The project was part of the Multimodal Interaction and
			Interfaces course and involved iterative design, development, and evaluation.
		</p>
	</ProjectSectionWrapper>
	<Wrapper>
		<div class="flex items-center justify-center py-8">
			<!--<Video src="https://vimeo.com/1044357819" />-->
			<Video src={videoUrl} />
		</div>
	</Wrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<ul class="space-y-3">
			<li>
				<strong>Application Development:</strong> Despite having no prior experience with Unity or AR
				development, I took the lead in coding the application. The decision to create an Android-based
				app arose midway through the project, and as the only team member with an Android device, I developed
				the app independently. This led to a simplified implementation, balancing functionality and feasibility
				within the constraints of time and resources.
			</li>
			<li>
				<strong>Participant Tests:</strong> I independently tested half of the participants due to the
				same hardware restraints. This involved guiding participants through the app, addressing technical
				issues, and recording observations.
			</li>
			<li>
				<strong>Quantitative Analysis:</strong> Conducted statistical analysis using JASP, focusing on
				participant data to evaluate immersion, naturalness, and task performance.
			</li>
			<li>
				<strong>Qualitative Analysis:</strong> Transcribed open-ended survey responses and contributed
				to qualitative insights using affinity diagramming.
			</li>
			<li>
				<strong>Report Writing:</strong> Authored sections of the research paper, including parts of
				the methodology, analysis, and discussion.
			</li>
			<li>
				<strong>Collaboration:</strong> Participated in team ideation sessions, task planning, and iterative
				testing to refine the app’s functionality and usability.
			</li>
		</ul>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods</SubsectionHeader>
		<p>
			The project adhered to a <strong>structured research and evaluation process</strong>,
			including:
		</p>
		<UnorderedList {items} />
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/OrganLocator/3interfaceStates.jpg"
				alt="Three Interface States Screenshots, wrong, correct, nothing clicked"
				class="mt-10 w-full rounded-lg sm:w-3/4 md:w-1/2 lg:w-1/3"
			></Image>
		</div>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<ul>
			<li>
				<strong>Development</strong>: Unity, AR Foundation, ARKit (Android 11+ compatibility).
			</li>
			<li>
				<strong>Data Analysis</strong>: JASP for statistical evaluations of participant feedback.
				Miro for affinity diagramming of the qualitative statistic evaluation.
			</li>
			<li>
				<strong>Survey and Feedback</strong>: Google Forms for collecting quantitative and
				qualitative data.
			</li>
		</ul>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Key Learnings and Insights</SubsectionHeader>

		<ul>
			<li>
				<strong>Learning by Doing</strong>: Developing the app independently without prior Unity
				experience was both challenging and rewarding. This experience enhanced my ability to
				quickly learn new tools and adapt to unforeseen project constraints.
			</li>
			<li>
				<strong>Haptic Feedback Advantage</strong>: Contrary to initial hypotheses, haptic feedback
				was perceived as more immersive and natural than audio, despite similar task performance.
			</li>
			<li>
				<strong>Usability Challenges</strong>: Participants highlighted technical issues like
				unstable plane detection, emphasizing the importance of robust usability testing in AR
				applications.
			</li>
			<li>
				<strong>Educational Potential</strong>: The study reinforced AR’s value in anatomy
				education, particularly when combined with multimodal feedback for spatial learning.
			</li>
		</ul>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>The final report Paper for this Project can be viewed here:</SubsectionHeader>
		<div class="mt-8 flex items-center justify-center">
			<iframe
				src="/pdfs/Multimodal_Interaction_and_Interfaces_DT2140.pdf"
				width="500"
				height="1000"
				title="PDF Multimodal Interaction and Interfaces Report"
			/>
		</div>
	</ProjectSectionWrapper>
</DetailProjectLayout>
