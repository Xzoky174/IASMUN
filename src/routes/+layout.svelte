<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Top from '$lib/components/Top.svelte';

	import IntersectionObserver from 'svelte-intersection-observer';

	let show_top_btn = false;

	let footer: any;
	let footer_intersecting = false;

	let change_top_btn = false;

	$: {
		change_top_btn = footer_intersecting;
	}

	let scrollY: number;

	const scroll = (e: any) => {
		show_top_btn = e.view.scrollY > 120;
	};
</script>

<Navbar />

<svelte:window on:scroll={scroll} bind:scrollY />

<div class="main">
	<slot />
</div>

{#if show_top_btn}
	<Top onClick={() => (scrollY = 0)} changeBtn={change_top_btn} />
{/if}

<IntersectionObserver element={footer} bind:intersecting={footer_intersecting}>
	<div bind:this={footer}>
		<Footer />
	</div>
</IntersectionObserver>

<style>
	.main {
		height: 100%;
		padding-top: 85px;
	}
</style>
