<!-- Card.svelte -->
<script>
	export let href = '';
	export let title = '';
	export let description = '';
	export let bgColor = 'bg-gray-100'; // Default background color
</script>

<a
	{href}
	class={`transform rounded-lg ${bgColor} w-full p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-300 sm:w-1/4`}
>
	<h2 class="text-xl font-semibold sm:text-2xl">{title}</h2>
	<p class="mt-2 text-sm sm:text-base">{description}</p>
</a>
