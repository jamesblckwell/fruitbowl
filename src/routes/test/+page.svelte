<script lang="ts">
	import type { PageData } from './$types';
	import SvelteLogo from '~icons/logos/svelte-icon';
	import WarningIcon from '~icons/material-symbols/warning';
	import Google from '~icons/logos/google';

	export let data: PageData;
</script>

<WarningIcon width="100" height="100" color="#ff0000" />
<SvelteLogo width="100" height="100" />
<Google width="300" height="100" />
<h1 class="text-6xl">{data.title}</h1>

{#if data.content}
	<p class="content">{data.content}</p>
{/if}
