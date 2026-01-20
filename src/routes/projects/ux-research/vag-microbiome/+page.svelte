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
		'low-fidelity prototyping and material exploration',
		'bodystorming',
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
	contributors="Katrin Stötter, Supervisor: Nadia Woytuk Campo"
	opacity="opacity-20"
	sectionTitle="Microbial Companions: A speculative Feminist Design of Familiars and Talismanic Objects"
	colorHeader="bg-funpink"
>
	<ProjectSectionWrapper>
		<SubsectionHeader>Overview</SubsectionHeader>
		<p>
			Microbial Companions is an individual speculative design research project developed within the
			fields of feminist HCI, more-than-human design, Bio-HCI, and feminist posthumanist design. The
			project explores how speculative, soft, and sensory artefacts can make the vaginal microbiome
			more perceptible and discussable, while critically engaging with shame, leakage, and dominant
			biomedical ways of knowing the body. Rather than aiming for technical solutions or clinical
			accuracy, the project positions design as a reflective and critical practice.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Research Focus and Theoretical Grounding</SubsectionHeader>
		<p class="mb-2">The project was guided by the following research questions:</p>
		<p class="mt-5 bg-yellow-100">
			<UnorderedList items={itemsDiscover}></UnorderedList>
		</p>
		<p class="mb-2">
			These questions make the project an exploration on leakage, more-than-human care, and
			speculation, rather than problem-solving or health optimization.
		</p>
		<p>
			The project challenges the idea of the body as a bounded, autonomous entity. Caring for the
			vaginal microbiome is framed not as control or correction, but as a relational practice that
			connects bodily, microbial, and ecological care. This aligns with Feminist HCI,
			More-Than-Human Design, Bio-HCI and feminist posthumanist perspectives.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Methods</SubsectionHeader>
		<!--		<Image-->
		<!--			src="/imgs/Projects/ETextile/AffinityDiagramInteractionDesign.png"-->
		<!--			alt="Affinity Diagram of the Define State"-->
		<!--			class="mt-10 rounded-lg"-->
		<!--		></Image>-->
		<p>
			The project followed a Research through Design (RtD) approach grounded in speculative and
			materially driven design.
		</p>
		<p class="my-4">Methods included:</p>
		<UnorderedList {items}></UnorderedList>
		<p>
			Materials and making were used not to validate solutions, but to generate knowledge and
			provoke reflection. The process remained intentionally open, allowing form, narrative, and
			meaning to evolve together.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Microbial Experimentation & Material Insights</SubsectionHeader>
		<p>
			The project followed a Research through Design approach combining speculative ideation,
			low-fidelity prototyping, material exploration, and visual and written fabulation. As part of
			the material exploration, I prepared DIY agar fillings for Petri dishes using accessible,
			non-laboratory materials to better understand the practical conditions of microbial
			cultivation. The dishes were tested with vaginal microbiome samples to explore feasibility,
			effort, and constraints. The process highlighted how demanding microbial cultivation is in
			terms of precision, time, and resources, which informed later design decisions and reinforced
			questions around accessibility and care rather than control in design.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Mapping the Design Space</SubsectionHeader>
		<p class="mb-7">
			Rather than converging on a single artefact, I mapped a design space for speculative vaginal
			microbiome technologies. Concepts were clustered into three themes:
		</p>
		<UnorderedList items={itemsDesignSpace}></UnorderedList>
		<p class="mt-7">
			These ideas were further compared using scales of visibility, proximity to the body, and
			temporality of data collection, adapted from prior feminist sensing research. This process
			revealed that the value of the project lay in exploring multiple positions within the space,
			rather than refining one solution.
		</p>
	</ProjectSectionWrapper>
	<ProjectSectionWrapper>
		<SubsectionHeader>Fabulation & Storytelling</SubsectionHeader>
		<p class="mb-5 mt-10">
			Speculative storytelling plays a central role in the project. Written narratives and visual
			fabulations were used to explore how the artefacts might be lived with over time and across
			different social contexts.
		</p>
		<p class="mb-2 mt-5">Fabulation allowed the project to:</p>
		<UnorderedList items={itemsDeliver}></UnorderedList>
		<Image
			src="/imgs/Projects/VagMicrobiome/All_3_fabulations.png"
			alt="Fabulation visualized. Left image shows knitting your own microbiome prototype fabulation, middle fabulation the microbial necklace and the right side the vulvinal sensor."
			class="mt-10 rounded-lg"
		></Image>
		<p class="mt-5 font-bold">Knit Your Vaginal Microbiome</p>
		<p>
			A reflective craft practice translating vaginal pH values into knitted color patterns. The
			story centers on intergenerational exchange, using knitting as a slow, abstract medium to open
			conversations around aging, menopause, and bodily change without direct exposure.
		</p>
		<p class="mt-5 font-bold">Microbial Necklace</p>
		<p>
			A wearable talisman containing a Petri dish and lenses for observing microbial growth. Through
			a life-spanning story, the necklace shifts from playful learning object to reflective
			companion, exploring how relationships to the microbiome, care, and reproductive health evolve
			across different life stages and social contexts.
		</p>
		<p class="mt-5 font-bold">Vulvinal Sensor</p>
		<p>
			A body-proximate speculative sensing concept paired with a minimal, local digital diary. Its
			fabulation explores bodily awareness, intimacy, and consent, showing how sensing technologies
			can support reflection and shared care without becoming tools of surveillance or optimization.
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
			also made me more aware that the work reflects my own perspective rather than universal
			experiences.
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
