<script lang="ts">
	export let items: string[]; // Expecting an array of strings
</script>

<ul>
	{#each items as item}
		<li>
			{item}
		</li>
	{/each}
</ul>

<style>
	/* Ensure the unordered list looks correct */
	ul {
		list-style-type: disc;
		padding-left: 20px;
	}

	li {
		margin-bottom: 8px;
	}

	sup {
		font-size: 0.8em;
		vertical-align: super;
	}
</style>
