<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import Video from '$lib/components/Video.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';

	let items = [
		'Designed and created custom visuals to explain complex psychological concepts clearly and engagingly.',
		'Assembled and polished the video using After Effects and Premiere Pro to ensure a professional and cohesive presentation.',
		'Each of the team members prepared their part of the video content-wise.'
	];
	let itemsHeaders = ['Illustration:', 'Video Editing:', 'Content:'];
	let itemsMethod = [
		'Based on course materials and additional readings [1].',
		'Adobe After Effects and Premiere Pro.'
	];
	let itemsMethodHeadings = ['Content Development:', 'Tools:'];
	let itemsFeaturesHeadings = [
		'Tangible interaction:',
		'Playful & accessible:',
		'Designed for travel:',
		'Visual progress indicator:'
	];
	let itemsTakeaways = [
		'Gained hands-on experience in transforming abstract psychological theories into digestible visual content.',
		'Learned to balance creativity and scientific accuracy while working collaboratively in a group setting.',
		'Learned how to use After Effects and Premiere Pro.'
	];
</script>

<DetailProjectLayout
	imgSrc="/imgs/Projects/PsychologyVideo/PsychologyVideoIllustration.png"
	altText="Background Image Psychology Video"
	duration="01. April - 27. April 2021 (~ 3 weeks)"
	contributors="Daniel and Daniel Ehrhardt"
	opacity="opacity-50"
	sectionTitle="Psychology Video"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			As part of the course Selected Areas of Psychology (06-MCS-SGP-152-m01) at the University of
			Würzburg in Germany, my team created an educational video exploring the Big Five personality
			traits. The project synthesized concepts from motivational, emotional, social, and personality
			psychology.
		</p>
	</ProjectSectionWrapper>
	<Wrapper>
		<div class="flex items-center justify-center py-8">
			<Video src="https://www.youtube.com/watch?v=70ITnB6KvBQ" />
		</div>
	</Wrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<UnorderedList {items} headings={itemsHeaders}></UnorderedList>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods & Approach</SubsectionHeader>
		<UnorderedList items={itemsMethod} headings={itemsMethodHeadings}></UnorderedList>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/PsychologyVideo/BigFive.png"
				alt="Coffee Ingredients Mixing Game"
				class="small-image mt-10 rounded-lg md:w-2/3"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} />
		<p>
			The video was a rewarding opportunity to combine technical skills in illustration and video
			production with the understanding of psychological concepts, enhancing my ability to
			communicate scientific ideas effectively.
		</p>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/PsychologyVideo/PsychologyVideoIllustration.png"
				alt="Authoring Tool for the Barista Learning Platform"
				class="small-image mt-10 rounded-lg md:w-4/5"
			></Image>
		</div>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}
</style>
