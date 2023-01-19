<script lang="ts">
	import { fly } from 'svelte/transition';

	export let onClick: any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
	on:click={onClick}
	in:fly={{ duration: 500, y: 100 }}
	out:fly={{ duration: 500, y: 100 }}
	class="top"
	width="45"
	height="45"
	viewBox="0 0 301 183"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path class="outline" d="M13.3824 158.477L165.929 14" stroke="white" stroke-width="37" />
	<path class="outline" d="M287 170L140 14" stroke="white" stroke-width="37" />
</svg>

<style>
	.top {
		cursor: pointer;
		position: fixed;
		bottom: 15px;
		right: 15px;
		border-radius: 100%;
		background-color: #000;
		padding: 8px 8px;
		transition: 0.55s;
	}
	.top:hover {
		transform: translateY(-12px);
	}
</style>
