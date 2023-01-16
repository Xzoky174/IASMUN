<script lang="ts">
	import IASSchool from '../lib/assets/images/School.jpg';
	import IASMun from '../lib/assets/logos/IASMUN.png';

	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Saos from 'saos';

	let ready = false;
	onMount(() => (ready = true));
</script>

<div class="intro">
	<img class="IAS-pic" src={IASSchool} alt="IAS School" />
	{#if ready}
		<img in:fly={{ y: 200, duration: 1800 }} class="IASMUN-pic" src={IASMun} alt="IASMUN" />
	{/if}
</div>

<div class="hero">
	<Saos once={true} animation={'slide-right 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)'}>
		<div class="container theme">
			<div>
				<h1>Our <b>Theme</b></h1>
				<p>Sample Text</p>
			</div>
		</div>
	</Saos>

	<Saos once={true} animation={'slide-left 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940)'}>
		<div class="container vision">
			<div>
				<h1>Our <b>Vision</b></h1>
				<p>Sample Text</p>
			</div>
		</div>
	</Saos>
</div>

<div class="letters">
	<Saos once={true} animation={'slide-right 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
		<div class="container sg" in:fly={{ x: -1000, duration: 1600 }}>
			<h1>Secretary General's<br /><b>Welcome</b></h1>

			<div class="content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare accumsan neque eu
					aliquam. Maecenas magna nibh, pulvinar ut risus et, tempor gravida nunc. Vestibulum a nisl
					sit amet massa ultricies malesuada vel et lacus.
				</p>

				<div class="img" />
			</div>
		</div>
	</Saos>

	<Saos once={true} animation={'slide-left 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}>
		<div class="container ca" in:fly={{ x: 1000, duration: 1600 }}>
			<h1><b>Chief Advisor</b></h1>

			<div class="content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare accumsan neque eu
					aliquam. Maecenas magna nibh, pulvinar ut risus et, tempor gravida nunc. Vestibulum a nisl
					sit amet massa ultricies malesuada vel et lacus.
				</p>

				<div class="img" />
			</div>
		</div>
	</Saos>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap');

	* {
		font-family: 'Rubik', sans-serif;
		overflow-x: hidden;
	}

	h1 {
		font-weight: 400;
		text-align: center;
	}

	h1,
	p {
		margin: 0;
	}

	.intro {
		display: grid;
		place-items: center;
	}
	.IAS-pic {
		height: calc(100vh - 85px);
		-webkit-filter: blur(60%);
		filter: blur(60%);
		position: relative;
	}
	.IASMUN-pic {
		height: 500px;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
	}
	.hero {
		display: grid;
		place-items: center;
		gap: 50px;
		padding: 60px 0;
	}
	.hero .container {
		width: 600px;
		height: 300px;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0);
		display: grid;
		place-items: center;
		color: #fff;
		font-family: 'Rubik', sans-serif;
	}
	.hero p {
		text-align: center;
	}
	.hero .theme {
		background-color: #080a68;
	}
	.hero .vision {
		background-color: #1f4e60;
	}

	@media screen and (max-width: 620px) {
		.hero > * {
			width: calc(100% - 20px);
		}
	}

	.letters {
		margin-top: 18px;
		display: grid;
		place-items: center;
		gap: 45px;
	}
	.letters .container {
		width: 1000px;
		height: 520px;
		display: grid;
		justify-content: center;
		color: #fff;
		padding: 28px 0;
	}
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 30px;
		padding: 0 40px;
	}
	.content p {
		font-size: 36px;
		flex: 0.8;
	}
	.img {
		height: 360px;
		background-color: #326198;
		flex: 0.5;
	}
	.sg {
		background-image: linear-gradient(to bottom, #1f4360, #000);
	}
	.ca {
		background-image: linear-gradient(to bottom, #3f0c55, #000);
	}

	.ca .content {
		flex-direction: row-reverse;
	}

	@keyframes -global-slide-right {
		0% {
			-webkit-transform: translateX(-1000px);
			transform: translateX(-1000px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}

	@keyframes -global-slide-left {
		0% {
			-webkit-transform: translateX(1000px);
			transform: translateX(1000px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
</style>
