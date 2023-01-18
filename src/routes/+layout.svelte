<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<Navbar />

<div class="main">
	<slot />
</div>

<Footer />

<style>
	.main {
		padding-top: 85px;
	}
</style>
