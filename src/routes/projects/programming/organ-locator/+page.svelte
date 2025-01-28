<script>
	import BgImage from '../../../about/BgImage.svelte';
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Video from '$lib/components/Video.svelte';
</script>

<DetailProjectLayout
	imgSrc="/imgs/Projects/OrganLocator/IdeaDrawing.jpg"
	altText="Background Image Organ Locator Illustration"
	duration="14. November 2024 - 10. January 2025 (~ 6 weeks - excluding Christmas break)"
	contributors="Amanda Arbinge, Gabriela Kirlyuk, Hannah Johnson"
	opacity="opacity-50"
>
	<div class="main">
		<Wrapper>
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<SectionHeader>Summary</SectionHeader>
				<p>
					The Interactive Organ Locator is an Augmented Reality (AR) application designed to support
					anatomy education by allowing users to locate human organs interactively. By integrating
					multimodal feedback—audio and haptics—the app provides an engaging learning experience,
					tested in a user study with 24 participants. The project was part of the Multimodal
					Interaction and Interfaces course and involved iterative design, development, and
					evaluation.
				</p>
			</div>
		</Wrapper>
		<Wrapper>
			<div class="flex items-center justify-center py-8">
				<Video src="/imgs/Projects/OrganLocator/OrganLocatorDemo.MP4" />
			</div>
		</Wrapper>
		<Wrapper>
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<h3 class="mb-4 text-2xl font-bold">My Contributions</h3>
				<ul class="space-y-3">
					<li>
						<strong>Application Development:</strong> Despite having no prior experience with Unity or
						AR development, I took the lead in coding the application. The decision to create an Android-based
						app arose midway through the project, and as the only team member with an Android device,
						I developed the app independently. This led to a simplified implementation, balancing functionality
						and feasibility within the constraints of time and resources.
					</li>
					<li>
						<strong>Participant Tests:</strong> I independently tested half of the participants due to
						the same hardware restraints. This involved guiding participants through the app, addressing
						technical issues, and recording observations.
					</li>
					<li>
						<strong>Quantitative Analysis:</strong> Conducted statistical analysis using JASP, focusing
						on participant data to evaluate immersion, naturalness, and task performance.
					</li>
					<li>
						<strong>Qualitative Analysis:</strong> Transcribed open-ended survey responses and contributed
						to qualitative insights using affinity diagramming.
					</li>
					<li>
						<strong>Report Writing:</strong> Authored sections of the research paper, including parts
						of the methodology, analysis, and discussion.
					</li>
					<li>
						<strong>Collaboration:</strong> Participated in team ideation sessions, task planning, and
						iterative testing to refine the app’s functionality and usability.
					</li>
				</ul>
			</div>
		</Wrapper>
	</div>
</DetailProjectLayout>
