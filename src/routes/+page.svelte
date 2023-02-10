<script lang="ts">
	import IASSchool from '$lib/assets/images/School.jpg';
	import IASMun from '$lib/assets/logos/IASMUN.png';

	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	import Youssef from '$lib/assets/executive-board/Youssef.jpg';
	import Maya from '$lib/assets/executive-board/Maya.jpg';
	import Amina from '$lib/assets/executive-board/Amina.jpg';
	import Daniel from '$lib/assets/executive-board/Daniel.jpg';
	import Sama from '$lib/assets/executive-board/Sama.jpg';

	import Line1 from '$lib/assets/lines/Vector 1.svg';
	import Line2 from '$lib/assets/lines/Vector 2.svg';
	import Line3 from '$lib/assets/lines/Vector 3.svg';

	import Blob1 from '$lib/assets/blobs/Vector 1.svg';
	import Blob2 from '$lib/assets/blobs/Vector 2.svg';
	import Blob3 from '$lib/assets/blobs/Vector 3.svg';

	import Saos from 'saos';

	import countdown from 'countdown';

	let ready = false;
	onMount(() => {
		ready = true;
		width = window.innerWidth;
	});

	let width: number;

	const sg_letter =
		'Dear venerable delegates, advisors, and organizers,<br /><br />I am delighted to welcome you to International Academic School Model United Nations (IASMUN) 2023, our first annual conference at International Academic School. It is an honour to be the founder and Secretary-General of IASMUN 2023!<br /><br />IASMUN has been initiated for all students across the region for diversity, competitiveness, and the concoction of creative ideas. IASMUN will commence with four distinct committees for the delegates to choose between based on their interest and level.<br /><br />IASMUN possesses a superior set of members with various perks and a remarkable skill set. IASMUN grants students the opportunity to enhance their research and debating skills, confidence, extemporization, and writing and speaking abilities through various committees and issues. It provides all its participants to display their inner talents and flourish them. Furthermore, IASMUN fundamentally prepares its participants for university and the future as a whole.<br /><br />We highly encourage you to participate in an enlightening, pleasurable, and memorable occasion that will remarkably transfigure and inspire everyone. IASMUN strives to reinforce and develop all required skills that create an exceptional ambassador!<br /><br />Best regards,<br /><br />Youssef Ashraf Hussein Zaki';

	let confDate = new Date();

	// TODO: Check If Conference Has Started
	confDate.setSeconds(0);
	confDate.setMinutes(30);
	confDate.setHours(13);
	confDate.setDate(10);
	confDate.setMonth(3);
	confDate.setFullYear(2023);

	let countDownDate: any = null;

	setInterval(() => {
		countDownDate = countdown(
			null,
			confDate,
			countdown.MONTHS | countdown.DAYS | countdown.HOURS
		).toString();
	}, 1000);
</script>

<svelte:window bind:innerWidth={width} />

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="intro">
	<img class="IAS-pic" src={IASSchool} alt="IAS School" />
	{#if ready}
		<img in:fly={{ y: 300, duration: 1800 }} class="IASMUN-pic" src={IASMun} alt="IASMUN" />
	{/if}
</div>

<div class="hero">
	<Saos once={true} animation="fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
		<p class="countdown">
			<span class="header">Next Conference:</span>{countDownDate}<br />(10th March 2023)
		</p>
	</Saos>

	<Saos once={true} animation="scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
		<div class="container theme">
			<div>
				<h1>Our <b>Theme</b></h1>
				<p>Welcoming Opportunities, Embracing Challenges, and Aspiring (Seeking) Development.</p>
			</div>
		</div>
	</Saos>

	<Saos once={true} animation="scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both">
		<div class="container vision">
			<div>
				<h1>About <b>Us</b></h1>
				<p>
					IASMUN started when a group of passionate IAS students decided to bring the amazing
					experience of Model United Nations to their school. They had a vision for an immersive,
					diverse, and engaging MUN.<br /><br />After students who have MUN experience talked to
					organizers from various MUNs rigorously. Soon, the selected chairs and Co-chairs, the head
					of media, and the head of logistics were decided. Ever since, the students have started
					working, documenting, and preparing everything accordingly and systematically. With grit,
					persistence, and the full support of IAS, the passion project soon became a reality.
				</p>
			</div>
		</div>
	</Saos>

	<img class="lines line1" src={Line1} alt="" />
	<img class="blobs blob1" src={Blob1} alt="" />

	<img class="lines line2" src={Line2} alt="" />
	<img class="blobs blob2" src={Blob2} alt="" />
</div>

<div class="letters">
	{#if width >= 1220}
		<Saos
			once={true}
			animation={'scale-up-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
		>
			<div class="container sg">
				<h1>Secretary General's<br /><b>Welcome</b></h1>

				<div class="content">
					<p>
						{@html sg_letter}
					</p>

					<img src={Youssef} alt="Secretary General" />
				</div>
			</div>
		</Saos>
	{:else}
		<div class="container sg">
			<h1>Secretary General's<br /><b>Welcome</b></h1>

			<div class="content">
				<p>
					{@html sg_letter}
				</p>

				<img src={Youssef} alt="Secretary General" />
			</div>
		</div>
	{/if}
</div>

<div class="executive-board">
	<Saos once={true} animation="slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
		<h1>Meet Our <br /> <b>Executive Board</b></h1>
	</Saos>

	<Saos once={true} animation="slide-top-sg 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
		<div class="container sg">
			<img class="img" src={Youssef} alt="Secretary General" />

			<p>Youssef Ashraf Hussein <br /> <b>Secretary General</b></p>
		</div>
	</Saos>

	<Saos once={true} animation="slide-top 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
		<div class="board">
			<div class="container">
				<img class="img" src={Maya} alt="Head of PR" />

				<p>Maya Munir Jasser <br /> <b>Head of PR</b></p>
			</div>
			<div class="container">
				<img class="img" src={Amina} alt="Head of PR" />

				<p>Amina Amrouni <br /> <b>Head of Media</b></p>
			</div>
			<div class="container">
				<img class="img" src={Daniel} alt="Head of PR" />

				<p>Daniel Obeid <br /> <b>Head of Logistics</b></p>
			</div>
			<div class="container">
				<img class="img" src={Sama} alt="Head of PR" />

				<p>Samaa Hamdy Afifi <br /> <b>Chief Advisor</b></p>
			</div>
		</div>
	</Saos>

	<img class="lines line3" src={Line3} alt="" />
	<img class="blobs blob3" src={Blob3} alt="" />
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
		min-width: 100%;
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
	.countdown .header {
		font-weight: bold;
		display: block;
		margin-bottom: 22px;
	}
	.countdown {
		text-align: center;
		font-size: 28px;
		margin: 46px 0;
		background-color: #326198;
		border-radius: 6px;
		color: #fff;
		padding: 18px 32px;
	}
	.hero {
		display: grid;
		place-items: center;
		gap: 50px;
		padding: 30px 0;
		padding-bottom: 50px;
		position: relative;
		overflow: visible;
	}
	.hero .container {
		width: 600px;
		height: 300px;
		display: grid;
		place-items: center;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.8);
		color: #fff;
		font-family: 'Rubik', sans-serif;
		padding: 0 12px;
	}
	.hero .container p {
		text-align: center;
		margin-top: 18px;
		max-width: 450px;
		font-size: 18px;
	}
	.hero .theme {
		background-color: #080a68;
	}
	.hero .vision {
		background-color: #1f4e60;
		padding: 28px 12px;
		height: auto;
	}
	.hero .vision p {
		max-width: 550px;
		text-align: start;
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
		height: 750px;
	}
	.letters .sg p {
		font-size: 20px;
	}
	.letters h1 {
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
		flex: 0.9;
	}
	.content img {
		height: 380px;
		background-color: #326198;
		flex: 0.4;
	}
	.letters .sg {
		background-image: linear-gradient(to bottom, #1f4360, #000);
	}

	.executive-board {
		display: grid;
		place-items: center;
		padding: 0 48px;
		margin: 48px 0;
		text-align: center;
		position: relative;
		overflow: visible;
	}
	.executive-board h1 {
		margin-bottom: 70px;
	}

	.board {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 50px;
	}
	.container > .img {
		height: 180px;
		width: 150px;
		background-color: #326198;
		margin-bottom: 12px;
	}
	.container > p {
		font-size: 20px;
	}
	.executive-board .sg {
		margin-bottom: 55px;
	}
	.board .sg p {
		font-size: 28px;
	}
	.executive-board .sg .img {
		height: 210px;
		width: 180px;
	}
	.executive-board .container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.lines,
	.blobs {
		position: absolute;
		z-index: -1;
	}
	.line1 {
		left: 0;
		top: 0;
	}
	.blob1 {
		bottom: 120px;
		left: -40px;
	}

	.line2 {
		right: 0;
		top: -28px;
	}
	.blob2 {
		bottom: -100px;
		right: 0;
		width: 380px;
	}

	.line3 {
		bottom: 40px;
		left: 0;
	}
	.blob3 {
		bottom: 56px;
		left: -48px;
	}

	@keyframes -global-fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes -global-slide-bottom {
		0% {
			-webkit-transform: translateY(-100px);
			transform: translateY(-100px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}

	@keyframes -global-slide-top {
		0% {
			-webkit-transform: translateY(200px);
			transform: translateY(200px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}

	@keyframes -global-slide-top-sg {
		0% {
			-webkit-transform: translateY(400px);
			transform: translateY(400px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
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

	@media screen and (max-width: 640px) {
		.theme,
		.vision {
			width: calc(100vw - 40px) !important;
		}
	}

	@media screen and (max-width: 1220px) {
		.letters .container {
			width: calc(100% - 20px);
			height: auto;
		}
	}

	@media screen and (max-width: 1100px) {
		.content {
			flex-direction: column !important;
			gap: 48px;
		}
		.content img {
			width: 350px;
			height: 370px;
			background-color: #326198;
			flex: auto;
		}
		.content p {
			flex: auto;
		}
		.line2 {
			display: none;
		}
		.blob2 {
			display: none;
		}
	}

	@media screen and (max-width: 550px) {
		.content {
			padding: 0 20px;
		}
	}

	@media screen and (max-width: 750px) {
		.board {
			grid-template-columns: repeat(2, 1fr) !important;
			gap: 24px;
		}
		.line3 {
			top: -80px;
			left: 0;
		}
		.blob3 {
			width: 360px;
		}
	}

	@media screen and (max-width: 360px) {
		.IASMUN-pic {
			height: 380px;
		}
	}

	@media screen and (max-width: 320px) {
		.blob3 {
			width: 260px;
		}
	}

	@media screen and (max-width: 600px) {
		.line3 {
			display: none;
		}
		.blob3 {
			top: 0;
		}
	}

	@media screen and (max-width: 475px) {
		.countdown {
			width: calc(100vw - 80px);
		}
	}

	@media screen and (max-width: 480px) {
		.line1 {
			top: 190px;
		}
		.blob1 {
			display: none;
		}
	}

	@media screen and (max-width: 450px) {
		.board {
			grid-template-columns: repeat(1, 1fr) !important;
			gap: 24px;
		}
	}
</style>
