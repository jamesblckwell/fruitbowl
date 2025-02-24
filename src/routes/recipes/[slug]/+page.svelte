<script lang="ts">
	import type { PageData } from './$types';
	import IngredientsList from '$components/IngredientsList.svelte';
	import FluentFood48Regular from '~icons/fluent/food-48-regular';
	import MdiClockOutline from '~icons/mdi/clock-outline';
	import MaterialSymbolsStar from '~icons/material-symbols/star';

	export let data: PageData;
</script>

<div class="flex flex-row gap-8 mb-16">
	<div class="grow w-1/2 p-16">
		<div class="w-full h-full flex flex-col justify-between align-middle">
			<div>
				<h1 class="text-6xl mb-8">{data.title}</h1>
				<p class="text-xl hyphens-auto">{data.description}</p>
			</div>
			<div class="grid grid-cols-2 grid-rows-2 text-xl gap-8">
				<div class="flex flex-row gap-2 align-center">
					<FluentFood48Regular />
					<p>Serves: {data.serves}</p>
				</div>
				<div class="flex flex-row gap-2 align-center">
					<MdiClockOutline />
					<p>Takes: {data.time}</p>
				</div>
				<div class="flex flex-row gap-2 align-center">
					<p>Difficulty:</p>
					{#each { length: data.difficulty } as _, i}
						<MaterialSymbolsStar />
					{/each}
				</div>
				<div class="flex flex-row gap-2 align-center">
					<FluentFood48Regular />
					<p>Serves: {data.serves}</p>
				</div>
			</div>
		</div>
	</div>
	<div class="grow w-1/2">
		<img class="w-full" src={data.image} alt={data.image_alt} />
	</div>
</div>
<div class="flex flex-row gap-8">
	<div class="w-1/3">
		<div class="py-8 w-1/2 mx-auto">
			<IngredientsList
				ingredients={data.ingredients}
				ingredientSections={data.ingredientSections}
			/>
		</div>
	</div>

	<div class="w-2/3 flex justify-center items-center">
		<div class="py-8">
			<h2 class="text-5xl">Steps</h2>
			<ol class="list-decimal prose lg:prose-xl">
				{#each data.steps as step}
					<li><p>{step}</p></li>
				{/each}
			</ol>
		</div>
	</div>
</div>
