<script lang="ts">
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<Navbar />

<div class="main">
	<slot />
</div>

<style>
	.main {
		padding-top: 85px;
	}
</style>
