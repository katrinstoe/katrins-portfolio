<script>
	import DetailProjectLayout from '$lib/sections/projects/DetailProjectPages/DetailProjectLayout.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Video from '$lib/components/Video.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import ProjectSectionWrapper from '$lib/components/ProjectSectionWrapper.svelte';
	import UnorderedList from '$lib/components/shapes/UnorderedList.svelte';
	import Image from 'svimg/Image.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';

	const pdfUrl =
		'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/Pictorial%20Katrin%20St%C3%B6tter.pdf';
	const videoUrl =
		'https://pub-722d106e492140b5b7d5005a21545d37.r2.dev/Group14%20VideoPrototype%20hand%20in.mp4';

	let itemsDiscover = [
		'How can soft, sensory artefacts like microbial familiars and talismans make the invisible microbial body more visible and support feminist reflection on shame, leakage, and more-than-human identity?',
		'What kinds of speculative narratives and meanings emerge when these artefacts are used as symbolic companions in storytelling?'
	];

	let itemsDesignSpace = ['Sensing & Cultivating', 'Data Visualization', 'Education'];

	let items = [
		'speculative ideation and sketching',
		'low-fidelity prototyping',
		' material exploration',
		'visual and written speculative storytelling'
	];

	let itemsDeliver = [
		'explore long-term use and alternative reality context',
		'surface ethical and emotional implications',
		'reflect on how meanings around the vaginal microbiome shift across life stages and relationships'
	];

	let limitationItems = [
		'functional or high-fidelity prototypes',
		'biological experimentation beyond early material exploration',
		'empirical user studies'
	];

	let itemsTakeAway = [
		'This was my first project on a master`s level that I did and my first interaction design self-led project. Approaching it alone taught me a lot about setting boundaries.'
	];

	let itemsTakeAwayHeaders = ['Self-led Interaction Design project', ''];

	items = Array.isArray(items) ? items : [];
	itemsDiscover = Array.isArray(itemsDiscover) ? itemsDiscover : [];
	itemsDesignSpace = Array.isArray(itemsDesignSpace) ? itemsDesignSpace : [];
	limitationItems = Array.isArray(limitationItems) ? limitationItems : [];
	const title = 'Interactive E-Textile Prototype Project Page';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<DetailProjectLayout
	imgSrc="/imgs/Projects/VagMicrobiome/All_3_fabulations.png"
	altText="Background Image showing the fabulations faintly"
	duration="25. August - 24. October 2025 (~ 9 weeks)"
	contributors="Katrin Stötter, Supervisor: Nadia Campo Woytuk"
	opacity="opacity-20"
	sectionTitle="Microbial Companions: A speculative Feminist Design of Familiars and Talismanic Objects"
	colorHeader="bg-funpink"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Overview</SubsectionHeader>
		<p>
			Microbial Companions is an individual speculative design research project developed as part of
			the DM2905 Individual Course in Media Technology at KTH Royal Institute of Technology. The
			research is situated within the fields of feminist HCI, more-than-human design, Bio-HCI, and
			feminist posthumanist design. The project explores how speculative, soft, and sensory
			artefacts can make the vaginal microbiome more perceptible and discussable, and critically
			engages with shame, leakage, and dominant biomedical ways of knowing the body. Rather than
			aiming for technical solutions or clinical accuracy, the project aims to use design as a
			reflective and critical practice.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Research Focus and Methodological Grounding</SubsectionHeader>
		<p class="mb-2">The project was guided by the following research questions:</p>
		<p class="mt-5 bg-yellow-100">
			<UnorderedList items={itemsDiscover}></UnorderedList>
		</p>
		<p>
			In order to address the questions, the project followed a Research through Design (RtD)
			approach grounded in speculative and materially driven design.
		</p>
		<p class="my-4">Methods included:</p>
		<UnorderedList {items}></UnorderedList>
		<p>
			Materials and making were used not to validate solutions, but to generate knowledge and
			provoke reflection. The process was intentionally open, allowing form, narrative, and meaning
			to evolve together.
		</p>
		<Image
			src="/imgs/Projects/VagMicrobiome/Lo-fi_sketches_all_ideas.png"
			alt="Lo-fi sketches of the final ideas."
			class="mt-10 rounded-md"
		></Image>
		<p class="mt-7">
			As part of the projects theoretical grounding in More-Than-Human Design and posthumaist
			feminist Design, the project challenges the idea of the body as a bounded, autonomous entity.
			Caring for the vaginal microbiome is framed not as control or correction, but as a relational
			practice that connects bodily, microbial, and ecological care. This aligns with Feminist HCI,
			More-Than-Human Design, Bio-HCI and feminist posthumanist perspectives.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Microbial Ideation, Experimentation & Material Insights</SubsectionHeader>
		<p>
			As part of the projects' Research through Design approach, speculative ideation, low-fidelity
			prototyping, material exploration were combined to create insights into the topic and used for
			ideating possible design outcomes. As part of the material exploration, I prepared DIY agar
			fillings for Petri dishes using accessible, non-laboratory materials to better understand the
			practical conditions of microbial cultivation. The dishes were tested with vaginal microbiome
			samples to explore feasibility, effort, and constraints. This showed how demanding microbial
			cultivation is in terms of precision, time, and resources, which informed later design
			decisions by questioning DIY approaches' accessibility and focusing on easy care approaches,
			as well as avoiding notions of control in the design.
		</p>
		<p>
			The ideation was extensive and ended up with so many ideas, that had similar traits in common
			that I decided to start mapping them into Design Spaces.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Mapping the Design Space</SubsectionHeader>
		<Image
			src="/imgs/Projects/VagMicrobiome/all_pretty_designspaces_sm.png"
			alt="Design space mapping with all ideas and the final chosen ones."
			class="rounded-m2 mx-auto my-5 max-w-2xl"
		></Image>
		<p class="mb-7">
			Rather than picking a single artefact, I mapped a design space for speculative vaginal
			microbiome technologies using all the ideas from my ideation phase. Concepts were clustered
			into three themes using Concept mapping as a technique. The themes were:
		</p>
		<UnorderedList items={itemsDesignSpace}></UnorderedList>
		<p class="mt-7">
			These ideas were further compared using scales of visibility, proximity to the body, and
			temporality of data collection, adapted from <i>Tactful Feminist Sensing</i> by Campo Woytuk et
			al. (2023). This process showed that the value of the project lay in exploring multiple positions
			within the space, rather than refining one solution.
		</p>
		<Image
			src="/imgs/Projects/VagMicrobiome/design_scales_all.png"
			alt="Designs on scales for visibility, proximity to the body and temporality of data collection."
			class="mt-10 rounded-md"
		></Image>
		<p class="mt-7">
			For a more detailed insight into the ideation and mapping process and all the ideas, the full
			text and appendices of my final report in form of a pictorial are available at the end of the
			page.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Fabulation & Storytelling</SubsectionHeader>
		<p class="mb-5 mt-10">
			Speculative storytelling and fabulation were used as a design research method to explore
			meanings, relationships, and long-term use without relying on functional prototypes. By
			placing the artefacts in fictional but grounded everyday situations, the method makes social,
			emotional, and ethical implications visible that seemed difficult to access through
			form-making alone.
		</p>
		<p class="mb-2 mt-5">
			Fabulations allowed me to understand and express how the artefacts might be lived with over
			time and across different relationships, particularly in relation to intimacy, shame, and care
		</p>
		<!--		<UnorderedList items={itemsDeliver}></UnorderedList>-->
		<Image
			src="/imgs/Projects/VagMicrobiome/All_3_fabulations.png"
			alt="Fabulation visualized. Left image shows knitting your own microbiome prototype fabulation, middle fabulation the microbial necklace and the right side the vulvinal sensor."
			class="mt-10 rounded-lg"
		></Image>
		<p class="mt-5 font-bold">Knit Your Vaginal Microbiome</p>
		<p>
			A reflective craft practice translating vaginal pH values into knitted color patterns. The
			artefact consists of knitting needles with screen-based stoppers that count rows and display
			reflective prompts related to daily vaginal pH measurements. The story centers on
			intergenerational exchange, using knitting as a slow, abstract medium to open conversations
			around aging, menopause, and bodily change.
		</p>
		<p class="mt-5 font-bold">Microbial Necklace</p>
		<p>
			A wearable talisman containing a Petri dish and lenses for observing microbial growth. Through
			a life-spanning story, the necklace shifts from playful learning object to reflective
			companion, exploring how relationships to the vaginal microbiome, care, and reproductive
			health evolve across different life stages and social contexts. The necklace creates community
			through shared use, as it's being lent to friends, gifted to family members, and explored
			together.
		</p>
		<p class="mt-5 font-bold">Vulvinal Sensor</p>
		<p>
			A body-proximate, worn, accessory paired with a minimal, local digital diary in form of an
			app. The sensor is attached to the vagina and vulva as a sensing element, collecting data
			without trying to impose notions of control, optimization, or medical authority. Its
			fabulation explores bodily awareness, intimacy, and consent, showing how sensing technologies
			can support reflection and shared care without becoming tools of surveillance or optimization.
			The sensor is also imagined as a creative expression and bodily accessory, similar to perhaps
			tattoos or piercings.
		</p>
		<p class="mt-5">
			The full Stories can be found in the full Pictorial at the bottom of this page.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Scope & Limitations</SubsectionHeader>
		<p class="mb-5">The project intentionally excludes:</p>
		<UnorderedList items={limitationItems}></UnorderedList>
		<p>
			Its goal is reflection, critique, and design space exploration rather than implementation or
			evaluation.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>Main Learnings & Insights</SubsectionHeader>
		<!--		<OrderedList items={itemsTakeAway} headings={itemsTakeAwayHeaders}></OrderedList>-->
		<p>
			I initially planned to focus on physical prototyping, but during the project I shifted toward
			exploring several concepts in parallel and understanding the design space more broadly.
			Writing the fabulations and visualizing them made the ideas clearer and revealed implications
			I hadn’t noticed through sketching or prototyping alone. Working on the project individually
			also made me more aware that the work reflects a lot of my own perspective rather than being
			universal designs.
		</p>
		<p>
			I chose a pictorial as the final deliverable because I hadn’t worked with the format before
			and had seen it used often in this field. It adds a lot of work on top of the content, but it
			turned out to be a good fit for a project that relies heavily on visual materials.
		</p>
	</ProjectSectionWrapper>

	<ProjectSectionWrapper>
		<SubsectionHeader>The final pictorial can be viewed here:</SubsectionHeader>
		<div class="mt-8 flex items-center justify-center">
			<iframe src={pdfUrl} width="500" height="1000" title="PDF" />
		</div>
	</ProjectSectionWrapper>
</DetailProjectLayout>
