<script lang="ts">
	export let items: string[]; // Expecting an array of strings
	export let headings: string[] | undefined = undefined; // Optional array of headings
</script>

<ol>
	{#each items as item, index}
		<li>
			{#if headings && headings[index]}
				<strong>{headings[index]}</strong>
			{/if}
			{@html item}
		</li>
	{/each}
</ol>

<style>
	/* Ensure the ordered list looks correct */
	ol {
		list-style-type: decimal; /* Makes sure numbers are shown */
		padding-left: 20px; /* Adjust left padding if needed */
	}

	li {
		margin-bottom: 8px; /* Space between list items */
	}

	sup {
		font-size: 0.8em;
		vertical-align: super;
	}
</style>
