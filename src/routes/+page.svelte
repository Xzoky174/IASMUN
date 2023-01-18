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
	<Saos once={true} animation="scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
		<div class="container theme">
			<div>
				<h1>Our <b>Theme</b></h1>
				<p>Welcoming Opportunities, Embracing Challenges, and Seeking Development.</p>
			</div>
		</div>
	</Saos>

	<Saos once={true} animation="scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
		<div class="container vision">
			<div>
				<h1>Our <b>Vision</b></h1>
				<p>Sample Text</p>
			</div>
		</div>
	</Saos>
</div>

<div class="letters">
	<Saos once={true} animation="slide-right 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
		<div class="container sg" in:fly={{ x: -1000, duration: 1600 }}>
			<h1>Secretary General's<br /><b>Welcome</b></h1>

			<div class="content">
				<p>
					Dear venerable delegates, advisors, and organizers,<br /><br />

					I am delighted to welcome you to International Academic School Model United Nations
					(IASMUN) 2023, our first annual conference at International Academic School. It is an
					honor to be the Secretary-General of IASMUN 2023!<br /><br />

					IASMUN has been initiated for all students across the region for diversity,
					competitiveness, and the concoction of creative ideas. IASMUN will commence with four
					distinct committees for the delegates to choose between based on their interest and level.
					IASMUN possesses a superior set of members with various perks and a remarkable skill set.
					IASMUN grants students the opportunity to enhance their research and debating skills,
					confidence, extemporization, and writing and speaking abilities through a variety of
					committees and issues. It provides all its participants to display their inner talents and
					flourish them. Furthermore, IASMUN fundamentally prepares its participants for university
					and the future as a whole.<br /><br />

					We highly encourage you to participate in an enlightening, pleasurable, and memorable
					occasion that will remarkably transfigure and inspire everyone. IASMUN strives for
					reinforcing and developing all required skills that create an exceptional ambassador!
					<br /><br />

					Best regards, <br /><br />

					Youssef Ashraf Hussein Zaki
				</p>

				<div class="img" />
			</div>
		</div>
	</Saos>

	<Saos once={true} animation="slide-left 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
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

<div class="executive-board">
	<Saos once={true} animation="slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
		<h1>Meet Our <br /> <b>Executive Board</b></h1>
	</Saos>

	<Saos once={true} animation="slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
		<div class="board">
			<div class="container sg">
				<div class="img" />

				<p>Youssef Ashraf Hussein <br /> <b>Secretary General</b></p>
			</div>
			<div class="container">
				<div class="img" />

				<p>Maya Munir Jasser <br /> <b>Head of PR</b></p>
			</div>
			<div class="container">
				<div class="img" />

				<p>Amina Amrouni <br /> <b>Head of Media</b></p>
			</div>
			<div class="container">
				<div class="img" />

				<p>Daniel Obeid <br /> <b>Head of Logistics</b></p>
			</div>
			<div class="container">
				<div class="img" />

				<p>Samaa Hamdy Afifi <br /> <b>Chief Advisor</b></p>
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
		display: grid;
		place-items: center;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.8);
		color: #fff;
		font-family: 'Rubik', sans-serif;
	}
	.hero p {
		text-align: center;
		margin-top: 18px;
		max-width: 400px;
		font-size: 18px;
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
		width: 1200px;
		height: 520px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		color: #fff;
		padding: 28px 0;
	}
	.letters .sg {
		height: 740px;
	}
	.letters .sg p {
		font-size: 20px;
	}
	.letters .sg h1 {
		margin-bottom: 24px;
	}
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 38px;
		padding: 0 40px;
	}
	.content p {
		font-size: 36px;
		flex: 0.8;
	}
	.content .img {
		height: 400px;
		background-color: #326198;
		flex: 0.5;
	}
	.letters .sg {
		background-image: linear-gradient(to bottom, #1f4360, #000);
	}
	.letters .ca {
		background-image: linear-gradient(to bottom, #3f0c55, #000);
	}

	.letters .ca .content {
		flex-direction: row-reverse;
	}

	.executive-board {
		display: grid;
		place-items: center;
		padding: 0 48px;
		margin: 48px 0;
		text-align: center;
	}
	.executive-board h1 {
		margin-bottom: 70px;
	}

	.board {
		display: grid;
		grid-template-columns: repeat(4, 220px);
	}
	.board .sg {
		grid-area: 1 / 1 / span 1 / span 4;
		margin-bottom: 48px;
	}
	.board .sg p {
		font-size: 28px !important;
	}
	.board .sg .img {
		height: 140px;
		width: 120px;
	}
	.board .container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.container > .img {
		height: 120px;
		width: 100px;
		background-color: #326198;
		margin-bottom: 12px;
	}
	.container > p {
		font-size: 20px;
	}

	@keyframes -global-slide-bottom {
		0% {
			-webkit-transform: translateY(-800px);
			transform: translateY(-800px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}

	@keyframes -global-slide-top {
		0% {
			-webkit-transform: translateY(800px);
			transform: translateY(800px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
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

	@keyframes -global-scale-up-center {
		0% {
			-webkit-transform: scale(0.5);
			transform: scale(0.5);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
</style>
