<script lang="ts">
	import TwitterLogo from '../assets/logos/Twitter-logo.svg';
	import FacebookLogo from '../assets/logos/Facebook-logo.svg';
	import InstagramLogo from '../assets/logos/Instagram-logo.svg';
	import YoutubeLogo from '../assets/logos/Youtube-logo.svg';

	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));

	import { page } from '$app/stores';
</script>

<nav>
	<div class="socials">
		{#if ready}
			<div class="links" in:fly={{ y: -200, duration: 1500 }}>
				<a href="/"><img class="twitter-logo-img" src={TwitterLogo} alt="twitter" /></a>
				<a href="/"><img class="facebook-logo-img" src={FacebookLogo} alt="facebook" /></a>
				<a href="/"><img src={InstagramLogo} alt="instagram" /></a>
				<a class="youtube-logo" href="/"
					><img class="youtube-logo-img" src={YoutubeLogo} alt="youtube" /></a
				>
			</div>

			<div class="text" in:fly={{ x: -100, duration: 1500 }}>
				<span>#IASMUN2023</span>
				<span class="right">email</span>
			</div>
		{/if}
	</div>

	<div class="page-links">
		{#if ready}
			<a
				in:fly={{ x: 200, duration: 1200 }}
				class={$page.url.pathname == '/' ? 'active' : ''}
				href="/">Home</a
			>
			<a
				in:fly={{ x: 200, duration: 1700 }}
				class={$page.url.pathname == '/committee' ? 'active' : ''}
				href="/committee">Committee</a
			>
			<a
				in:fly={{ x: 200, duration: 2200 }}
				class={$page.url.pathname == '/agenda' ? 'active' : ''}
				href="/agenda">Agenda</a
			>
			<a
				in:fly={{ x: 200, duration: 2700 }}
				class={$page.url.pathname == '/guidebooks' ? 'active' : ''}
				href="/guidebooks">Guidebooks</a
			>
			<a
				in:fly={{ x: 200, duration: 3200 }}
				class={$page.url.pathname == '/registration' ? 'active' : ''}
				href="/registration">Registration</a
			>
			<a in:fly={{ x: 200, duration: 3700 }} class="contact" href="mailto:email@gmail.com"
				>Contact Us</a
			>
		{/if}
	</div>
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
		transform: translateY(-4px);
	}
	.socials .links img {
		width: 35px;
		height: 25px;
	}
	.youtube-logo-img {
		height: 35px !important;
	}
	.youtube-logo {
		margin-left: 7px;
	}
	.facebook-logo-img {
		width: 30px;
		height: 25px;
	}
	.twitter-logo-img {
		width: 28px;
		height: 25px;
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

	.contact {
		background-color: #080a68;
		color: #fff;
		padding: 12px 14px;
		border-radius: 4px;
		transition: 0.5s;
	}
	.contact:hover {
		opacity: 0.7;
	}
	.contact::after {
		width: 0 !important;
	}
</style>
