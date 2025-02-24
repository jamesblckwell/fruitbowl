<script lang="ts">
	import type Ingredients from '$types/Ingredients';

	export let ingredients: Ingredients[], ingredientSections: string[];
</script>

<h2 class="text-5xl mb-8">Ingredients</h2>
{#each ingredientSections as section}
	<div class="mb-8">
		<h3 class="text-3xl mb-4 capitalize">{section}</h3>
		{#each ingredients as ingredient}
			{#if ingredient.section == section}
				<div class="flex flex-row justify-between prose lg:prose-xl">
					<p class="!m-0">{ingredient.name}</p>
					<p class="!m-0">{ingredient.amount}</p>
				</div>
			{/if}
		{/each}
	</div>
{/each}
