<script lang="ts">
	import TwitterLogo from '$lib/assets/logos/socials/Twitter.svg';
	import FacebookLogo from '$lib/assets/logos/socials/Facebook.svg';
	import InstagramLogo from '$lib/assets/logos/socials/Instagram.svg';
	import YoutubeLogo from '$lib/assets/logos/socials/Youtube.svg';

	import Menu from '$lib/assets/logos/Menu.svg';

	import { page } from '$app/stores';

	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let menu: any;
	let links: any;

	let width: number;
	let showLinks = false;

	let ready = false;

	onMount(() => (ready = true));
</script>

<svelte:window
	bind:innerWidth={width}
	on:click={(e) => {
		if (width < 980) {
			if (e.target !== links && e.target !== menu) {
				showLinks = false;
			}
		}
	}}
/>

<nav>
	<div class="socials">
		{#if ready}
			<div class="links" in:fly={{ y: -200, duration: 1500 }}>
				<a href="/"><img src={TwitterLogo} alt="twitter" /></a>
				<a href="/"><img src={FacebookLogo} alt="facebook" /></a>
				<a href="/"><img src={InstagramLogo} alt="instagram" /></a>
				<a class="youtube-logo" href="/">
					<img class="youtube-logo-img" src={YoutubeLogo} alt="youtube" />
				</a>
			</div>

			<div class="text" in:fly={{ x: -100, duration: 1500 }}>
				<span>#IASMUN2023</span>
				<span class="right">email</span>
			</div>
		{/if}
	</div>

	{#if width >= 980 || showLinks}
		<div
			class="page-links"
			bind:this={links}
			in:fly={showLinks ? { x: 200, duration: 800 } : undefined}
			out:fly={{ x: 200, duration: 800 }}
		>
			{#if ready}
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 1200 }}
					class={$page.url.pathname == '/' ? 'active' : ''}
					href="/">Home</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 1700 }}
					class={$page.url.pathname == '/committee' ? 'active' : ''}
					href="/committee">Committee</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 2200 }}
					class={$page.url.pathname == '/agenda' ? 'active' : ''}
					href="/agenda">Agenda</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 2700 }}
					class={$page.url.pathname == '/guidebooks' ? 'active' : ''}
					href="/guidebooks">Guidebooks</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 3200 }}
					class={$page.url.pathname == '/registration' ? 'active' : ''}
					href="/registration">Registration</a
				>
				<a
					in:fly={showLinks ? undefined : { x: 200, duration: 3700 }}
					class="contact"
					href="mailto:email@gmail.com">Contact Us</a
				>
			{/if}
		</div>
	{/if}

	{#if width < 980}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			in:fade={{ duration: 600 }}
			bind:this={menu}
			class="menu"
			on:click={() => (showLinks = !showLinks)}
			src={Menu}
			alt="Menu"
		/>
	{/if}
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

	a {
		margin: 0;
		padding: 0;
	}
	nav {
		height: 97px;
		background-color: #000;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		padding: 0 65px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		z-index: 99;
	}
	.socials {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #fff;
	}
	.text {
		display: flex;
		justify-content: space-between;
	}
	.text .right {
		align-self: end;
	}
	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
	}
	.socials .links a {
		cursor: pointer;
		position: relative;
		transition: 0.25s;
	}
	.socials .links a:hover {
		transform: translateY(-6px);
	}
	.socials .links img {
		width: 35px;
		height: 25px;
	}
	.youtube-logo-img {
		height: 38px !important;
	}
	.youtube-logo {
		margin-left: 7px;
	}
	.page-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 25px;
	}
	.page-links * {
		font-family: 'Inter', sans-serif;
		color: rgba(206, 212, 218, 0.56);
		text-decoration: none;
		transition: 0.25s;
		position: relative;
	}
	.page-links .active,
	.page-links *:hover {
		color: #fff;
	}
	.page-links .active::after,
	.page-links *::after {
		content: '';
		width: 100%;
		height: 1.5px;
		background-color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		bottom: -4px;
	}
	.page-links *::after {
		width: 0;
		transition: 0.25s;
		margin-left: auto;
		margin-right: auto;
	}
	.page-links *:hover:after {
		width: 100%;
	}
	.menu {
		width: 55px;
		height: 35px;
		cursor: pointer;
	}

	@media screen and (max-width: 980px) {
		.page-links {
			position: fixed;
			top: 0;
			bottom: 0;
			right: 0;
			flex-direction: column;
			background-color: #000;
			padding: 35px 40px;
			width: 200px;
		}
	}
	@media screen and (max-width: 800px) {
		.page-links {
			width: 100px;
		}
	}
	@media screen and (max-width: 460px) {
		nav {
			padding: 0 20px;
		}
	}
</style>
