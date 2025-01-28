<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';

	let items = [
		'Designing and implementing a prototype for emotion sonification.',
		'Conducting iterative user research with participants who are blind, visually impaired, or sighted.',
		'Evaluated recognition accuracy, confidence, and user preferences through quantitative and qualitative methods.',
		'Analyzed results using statistical tests (e.g., ANOVA).'
	];

	let itemsMethod = [
		'Studied existing accessibility challenges in emoji usage and human voice-based emotion recognition.',
		'Developed sonified versions of emojis using validated emotion categories (Cowen et al.) and tested them with diverse participants during pre-tests.',
		'During the pre-tests, I also found that no research tool was adequately accessible for my purpose of navigating independently and listening to audio files. Therefore I developed my own accessible research tool called BUES (Barrierefreies Umfragetool für Emoji Sonifizierung), which uses SvelteKit, a PostgressSQL-Database and client-side RSA encryption to ensure anonymity. The tool was expanded from the open-source survey tool developed by Jacob Heim called AISS (Audio-Image-Schema Surveys) (link).',
		'I conducted a quantitative online study with 46 participants, including both blind/visually impaired (n=27) and sighted individuals (n=19). Participants evaluated seven sonified emotion categories (e.g., anger, amusement, sadness) in four conditions: Vocal bursts only, Prosody only, Prosody + vocal bursts, and Screen reader + vocal bursts. The study measured Recognition Accuracy, Confidence, Speed, and Preference.',
		'Applied statistical methods to compare the effectiveness of different sonification approaches. For this part, I used JASP to calculate the statistics and Pandas to retrieve the data from the database and format it correctly.'
	];

	let itemsMethodHeadings = [
		'Research and Literature Review: ',
		'Prototyping: ',
		'Developed own Research Tool (BUES): ',
		'User Testing: ',
		'Data Analysis :'
	];

	let itemsTools = [
		'Custom survey tool designed for accessibility (BUES).',
		'Hume.ai for validating emotion-specific vocalizations.',
		'G*Power for sample size calculation, ANOVA for statistical evaluation.',
		'Typeform for conducting pilot studies and main surveys.'
	];

	let itemsToolsHeadings = [
		'Development: ',
		'Audio Processing: ',
		'Analysis: ',
		'Survey Hosting: '
	];

	let itemsInsights = [
		'Combination Matters: Prosody combined with vocal bursts significantly improved emotion recognition accuracy compared to vocal bursts alone or screen reader outputs.',
		'Positioning is Key: Placing vocal bursts at the beginning of a sentence enhanced recognition speed and confidence for both user groups.',
		'Inclusivity Works: Blind and sighted participants performed equally well in recognizing sonified emotions, showing the potential for inclusive solutions.',
		'User Preferences: Participants preferred prosody and vocal bursts over traditional screen reader descriptions, emphasizing the importance of natural and expressive audio cues.'
	];

	let itemsTakeaways = [
		'Prototyping, accessibility-focused design, user testing, and statistical analysis.',
		'Literature review, pilot studies, quantitative and qualitative research.',
		'Accessible survey design, advanced audio tools, and statistical software.',
		'Applying sonification to other non-visual communication contexts.'
	];

	let itemsTakeawaysHeadings = [
		'Strengths: ',
		'Methods Mastered: ',
		'Tools Utilized: ',
		'Future Opportunities: '
	];
</script>

<div>hi</div>

<DetailProjectLayout
	imgSrc="/imgs/Projects/EmojiSonification/SonificationScreens.png"
	altText="Background Image Organ Locator Illustration"
	duration="01. February - 29. August 2023 (~ 7 weeks)"
	contributors="solo project, Supervision & Paper publishing: Stephan Huber"
	opacity="opacity-50"
	sectionTitle="Emoji Sonification"
	colorHeader="bg-crazyorange/90"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Summary</SubsectionHeader>
		<p>
			For my bachelor's thesis, I explored solutions to make digital communication more inclusive
			for blind and visually impaired individuals. By replacing traditional emojis with sonified
			emotional cues, my work addresses accessibility challenges and enhances emotional context in
			text messages. Using prosody (melody, rhythm, timbre) and vocal bursts (non-verbal sounds like
			sighs or laughter), I developed and tested an accessible solution that enhances emotional
			clarity in digital communication.
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
		<UnorderedList {items} />
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods</SubsectionHeader>
		<OrderedList items={itemsMethod} headings={itemsMethodHeadings}></OrderedList>
		<Image
			src="/imgs/Projects/EmojiSonification/emojiTable.jpg"
			alt="Emoji Sonification Table - which Emoji to which Sound"
			class="small-image mt-10 rounded-lg"
		></Image>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Tools</SubsectionHeader>
		<UnorderedList items={itemsTools} />
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Key Learnings and Insights</SubsectionHeader>
		<OrderedList items={itemsInsights} headings={itemsToolsHeadings}></OrderedList>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Impact</SubsectionHeader>
		<p>
			This thesis was later published as a paper, underscoring its contribution to the field of
			Human-Computer Interaction (HCI) and accessible design. The findings have practical
			implications for improving emotion communication in screen readers and voice assistants,
			paving the way for more inclusive digital interactions.
			<a
				href="https://doi.org/10.1145/3679318.3685403"
				target="_blank"
				aria-label="External Link to the paper on the ACM Digital Library"
				style="color: blue;">Link to Paper</a
			>
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Key Takeaways</SubsectionHeader>
		<UnorderedList items={itemsTakeaways} headings={itemsTakeawaysHeadings}></UnorderedList>
	</ProjectSectionWrapper>
</DetailProjectLayout>

<style>
	.small-image {
		max-width: 50%;
		height: auto;
	}
</style>
