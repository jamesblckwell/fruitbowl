<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<h1 class="text-4xl">These are the recipes</h1>
{#each data.posts as post}
	<h2>
		<a href={post.path}>
			{post.title}
		</a>
	</h2>
	Published {post.date}
{/each}
