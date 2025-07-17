<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';

	let items = [
		'Helped plan and run semi-structured interviews with members of <i>Begripsam</i> inspired by <b>participatory design</b>. The interviews gave us valuable insights into the barriers people with impairments face using SL services.',
		'Used Miro to cluster feedback using <b>Affinity Diagramming</b> and helped identify key issue areas: physical, environmental, cognitive, and technical.',
		'Took part in ideation using <b>Brainwriting</b>, <b>Lotus Blossom</b>, and <b>Dot Voting</b>, and helped sketch ideas to improve delay info, station navigation, and train occupancy visibility.',
		'Worked on UI concepts in <b>Figma</b>, including redesigned screens for SL’s app that are easier to understand and more accessible to a wider audience.',
		'Helped evaluate SL’s website with the <b>WAVE accessibility tool</b>, identifying small issues and reflecting on what automated testing can and can’t catch.',
		'Contributed to the group reflection and iteration process, learning how to balance workload and quality without burning out.'
	];

	let itemsHeaders = [
		'User Research:',
		'Evaluating Feedback:',
		'Ideation:',
		'UI/UX Design:',
		'Web Evaluation:',
		'Reflection:'
	];

	let itemsMethod = [
		'User interviews (semi-structured), participatory design with <i>Begripsam</i>, journey mapping.',
		'Figma, Miro, WAVE Accessibility Tool, Affinity Diagramming.',
		'Universal Design, Nonclusive Design, Born-Accessible approach.'
	];

	let itemsMethodHeadings = ['Methods:', 'Tools:', 'Frameworks:'];

	let itemsTakeaways = [
		'Talking directly to users made a huge difference, some accessibility barriers we wouldn’t have thought of on our own.',
		'Automated tools like WAVE are helpful for spotting surface-level issues, and does not include occuring issues outside of the digital space. Therefore, it can only be used as a starting point or addition to talking to people impacted by the services.',
		'Designing for accessibility isn’t just about checking boxes, it’s about making things actually work for all kinds of users.',
		'I learned that stepping back and pacing myself doesn’t lower quality, it helps keep the work sustainable and thoughtful.'
	];

	let itemsFindings = [
		'delay updates',
		'real-time occupancy data',
		'and finding your way in complext situations'
	];
	const title = 'SL Accessibility Evaluation';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<DetailProjectLayout
	imgSrc="/imgs/Projects/SLAccessibility/SL_logo.svg.png"
	altText="Background Image Organ Locator Illustration"
	duration="20. January - 11.03.2025 (~ 7 weeks)"
	contributors="Chi Chen, Katrin Stötter, Olle Grönstedt Söderberg, Savannah Koh Ye"
	opacity="opacity-50"
	sectionTitle="SL Accessibility Evaluation"
	colorHeader="bg-funpink"
>
	<!--TODO: stattdessen Bild nehmen mit web accessibility tool also screenshot-->
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			This project was about evaluating how accessible Stockholm’s public transport system (SL) is,
			especially for people with impairments. We worked with members of Begripsam, an organization
			made up of people with different impairments, to understand the real problems they face when
			using SL services—both digital and physical.
		</p>

		<p class="pt-3">
			As part of this, we also used the WAVE accessibility tool to test SL’s website and see how
			well it meets web accessibility standards. The tool helped point out a few issues, but it also
			showed us that automated tests can’t catch everything—real user feedback was much more
			valuable.
		</p>

		<p class="pt-3">
			The goal of our work was to come up with design ideas that make SL easier to use for everyone,
			using a Universal Design approach. We focused on things like clearer delay info, showing how
			crowded trains are, and better navigation at stations. Our ideas were based on universal and
			inclusive design principles, aiming to make improvements that help a wide range of users—not
			just people with specific impairments.
		</p>
	</ProjectSectionWrapper>
	<!-- Add an Audio component to display the project audio -->
	<ProjectSectionWrapper>
		<SubsectionHeader>Contributions</SubsectionHeader>
		<UnorderedList {items} headings={itemsHeaders} />
		<div class="flex justify-center">
			<img
				src="https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/IssuesBoard.jpg"
				alt="Issues Affinity Diagram"
				class="small-image mt-10 rounded-lg md:w-4/5"
			/>
			<img
				src="https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/OpportunitiesBoard.jpg"
				alt="Opportunities Affinity Diagram"
				class="small-image mt-10 rounded-lg md:w-4/5"
			/>
		</div>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods & Tools</SubsectionHeader>
		<OrderedList items={itemsMethod} headings={itemsMethodHeadings}></OrderedList>
		<div class="flex justify-center">
			<img
				src="/imgs/Projects/SLAccessibility/JourneyMapBefore.png"
				alt="Journey Map Before Redesign"
				class="small-image mt-10 rounded-lg md:w-4/5"
			/>
			<img
				src="/imgs/Projects/SLAccessibility/JourneyMapAfter.png"
				alt="Journey Map After Redesign"
				class="small-image mt-10 rounded-lg md:w-4/5"
			/>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Key Findings & Redesign Direction</SubsectionHeader>
		<p>
			From our interviews with people at Begripsam, we learned that the biggest barriers weren’t
			just digital, but physical (like steps or missing railings), and also had to do with
			information retreival: people struggled with unclear signage, unpredictable delays, and not
			knowing how crowded a train or station might be.
		</p>
		<p class="pt-3">
			We mapped out the problems into four categories: physical, environmental, cognitive, and
			technical. Across all of them, one theme kept coming up, not having the right information at
			the right time.
		</p>

		<p class="py-3">
			That’s what guided our redesign. We focused on improving how SL communicates with passengers,
			especially around:
		</p>
		<UnorderedList items={itemsFindings}></UnorderedList>
		<p class="pt-3">
			We sketched out user journeys showing what the experience is like now vs. how it could be.
			Then we created Figma mockups for new app features, updated signage, and accessibility-focused
			map designs, all aimed at making SL easier and more comfortable to use for everyone.
		</p>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/SLAccessibility/slapp.png"
				alt="SL App Redesign"
				class="small-image mt-10 rounded-lg md:w-2/3"
			></Image>
		</div>
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/SLAccessibility/station.png"
				alt="SL Station Redesign"
				class="small-image mt-10 rounded-lg md:w-2/3"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} />
		<div class="flex justify-center">
			<Image
				src="/imgs/Projects/SLAccessibility/WAVEresult1.png"
				alt="WAVE automated accessibility evaluation tool result on one device"
				class="small-image mt-10 rounded-lg md:w-2/3"
			></Image>
			<Image
				src="/imgs/Projects/SLAccessibility/WAVEresult2.jpg"
				alt="WAVE automated accessibility evaluation tool result on another device"
				class="small-image ml-3 mt-10 rounded-lg md:w-2/3"
			></Image>
		</div>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Impact</SubsectionHeader>
		<p>
			The ExpoCompanion was further developed and implemented in an exhibition in Hamburg in 2023.
			The exhibition gave teachers a hands-on opportunity to reflect on digital technologies and
			their potential applications in education, making the ExpoCompanion a valuable tool for
			enhancing educational experiences.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>The final report Paper for this Project can be viewed here:</SubsectionHeader>
		<div class="mt-8 flex items-center justify-center">
			<iframe
				src="https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/KTH_report_HCT_for_Disabilities_SL%20(3).pdf"
				width="500"
				height="1000"
				title="Report SL Accessibility Evaluation"
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
