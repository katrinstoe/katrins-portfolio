<script lang="ts">
	import Project from '$lib/sections/projects/Project.svelte';
	import Image from 'svimg/Image.svelte';
</script>

<Project
	divider="orange"
	title="Expo Companion"
	description="The ExpoCompanion was developed as part of a Human-Computer-Interaction Project at the University of Würzburg. The project was a collaboration with the CoTeach project and the Religion Department at the University of Würzburg. Designed as a digital alternative to paper questionnaires, it engaged teachers visiting an exhibition on digitalization in teaching. By integrating NFC-tagged leaves with a tablet-based app, the system encouraged reflection on technology use in classrooms while addressing needs for stimulation, competence, and autonomy. The project involved ideation, prototyping, development, and evaluation through comparative studies. To explore the full process and findings, click below."
	year="2023"
	buttonText="Project details"
	path="/projects/ux-research/expo-companion"
>
	<Image
		src="/imgs/Projects/ExpoCompanion/ExpoCompanion.png"
		alt="Illustration of ExpoCompanion App on a tablet with NFC-tagged leaves."
	/>
</Project>
