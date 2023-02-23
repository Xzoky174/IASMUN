<script>
	import Saos from 'saos';

	import Nour from '$lib/assets/credits/Logistics/Nour Ashraf.jpg';
	import Sara from '$lib/assets/credits/Logistics/Sara Nasser.jpg';
	import Youssef from '$lib/assets/credits/Logistics/Youssef Nasser.jpg';
	import Shamla from '$lib/assets/credits/Logistics/Shamla.jpg';
	import Daniel from '$lib/assets/executive-board/Daniel.jpg';

	import Shape1 from '$lib/assets/shapes/Vector 1.svg';
	import Shape5 from '$lib/assets/shapes/Vector 5.svg';
	import Shape7 from '$lib/assets/shapes/Vector 7.svg';

	let head_logistics = { img: Daniel, description: 'Head of Logistics', name: 'Daniel Obeid' };

	let logistics = [
		{ img: Nour, description: 'Interior Designer', name: 'Nour Ashraf' },
		{ img: Sara, description: 'Decorator', name: 'Sara Nasser' },
		{ img: Youssef, description: 'Manager', name: 'Youssef Nasser' },
		{ img: Shamla, description: 'Logistics', name: 'Shamla' }
	];

	import Ali from '$lib/assets/credits/Media/Ali Mamdani.jpg';
	import Ines from '$lib/assets/credits/Media/Ines Amrouni.jpg';
	import AliMofrad from '$lib/assets/credits/Media/Ali Mofrad.jpg';
	import Lauren from '$lib/assets/credits/Media/Lauren Manaloto.jpg';
	import Saeed from '$lib/assets/credits/Media/Saeed Awadh.jpg';
	import Jwairya from '$lib/assets/credits/Media/Jwairya Mohammed.jpg';
	import Amina from '$lib/assets/executive-board/Amina.jpg';

	let head_media = { img: Amina, description: 'Head of Media', name: 'Amina Amrouni' };

	let media1 = [
		{ img: Ali, description: 'Programmer', name: 'Ali Mamdani' },
		{ img: Ines, description: 'Video Editor', name: 'Ines Amrouni' },
		{ img: AliMofrad, description: 'Video Director', name: 'Ali Mofrad' },
		{ img: Lauren, description: 'Graphic Designer', name: 'Lauren Manaloto' }
	];

	let media2 = [
		{ img: Saeed, description: 'Product Designer', name: 'Saeed Awadh' },
		{ img: Jwairya, description: 'Digital Designer', name: 'Jwairya Mohammed' },
		{ img: Nour, description: 'Digital Designer', name: 'Nour Ashraf' }
	];

	import Mariyam from '$lib/assets/credits/Pagers/Mariyam.jpg';
	import Hala from '$lib/assets/credits/Pagers/Hala Adnan.jpg';
	import Joudy from '$lib/assets/credits/Pagers/Joudy Ramy.jpg';
	import NourPager from '$lib/assets/credits/Pagers/Nour Ashraf.jpg';

	let pagers = [
		{ img: Mariyam, description: 'Pager', name: 'Mariyam' },
		{ img: Joudy, description: 'Pager', name: 'Joudy Ramy' },
		{ img: Hala, description: 'Pager', name: 'Hala Adnan' },
		{ img: NourPager, description: 'Pager', name: 'Nour Ashraf' }
	];
</script>

<svelte:head>
	<title>Credits</title>
</svelte:head>

<div class="main">
	<img class="shapes shape1" src={Shape1} alt="" />
	<img class="shapes shape2" src={Shape5} alt="" />
	<img class="shapes shape3" src={Shape7} alt="" />

	<Saos once={true} animation="slide-bottom 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
		<h1 class="main-heading">Credits</h1>
	</Saos>

	<div class="container logistics">
		<Saos once={true} animation="slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1 class="heading">Logistics <b>Team</b></h1>
		</Saos>

		<Saos once={true} animation="slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
			<div class="head">
				<img class="head-logistics" src={head_logistics.img} alt={head_logistics.name} />
				<h1 class="name">{head_logistics.name}</h1>
				<p class="head-desc">{head_logistics.description}</p>
			</div>
		</Saos>

		<Saos once={true} animation="slide-top 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
			<div class="content">
				{#each logistics as logistic}
					<div>
						<img src={logistic.img} alt={logistic.name} />
						<h1 class="name">{logistic.name}</h1>
						<p>{logistic.description}</p>
					</div>
				{/each}
			</div>
		</Saos>
	</div>

	<div class="container media">
		<Saos once={true} animation="slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1 class="heading">Media <b>Team</b></h1>
		</Saos>

		<Saos once={true} animation="slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
			<div class="head">
				<img class="head-media" src={head_media.img} alt={head_media.name} />
				<h1 class="name">{head_media.name}</h1>
				<p class="head-desc">{head_media.description}</p>
			</div>
		</Saos>

		<Saos once={true} animation="slide-top 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
			<div class="content">
				{#each media1 as media_helper}
					<div>
						<img src={media_helper.img} alt={media_helper.name} />
						<h1 class="name">{media_helper.name}</h1>
						<p>{media_helper.description}</p>
					</div>
				{/each}
			</div>

			<div class="media2">
				{#each media2 as media_helper}
					<div>
						<img src={media_helper.img} alt={media_helper.name} />
						<h1 class="name">{media_helper.name}</h1>
						<p>{media_helper.description}</p>
					</div>
				{/each}
			</div>
		</Saos>
	</div>

	<div class="container pagers">
		<Saos once={true} animation="slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
			<h1 class="heading">Pager <b>Team</b></h1>
		</Saos>

		<Saos once={true} animation="slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both">
			<div class="content">
				{#each pagers as pager}
					<div>
						<img src={pager.img} alt={pager.name} />
						<h1 class="name">{pager.name}</h1>
						<p>{pager.description}</p>
					</div>
				{/each}
			</div>
		</Saos>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

	* {
		font-family: 'Montserrat', sans-serif;
	}

	.shapes {
		position: absolute;
		z-index: -1;
	}

	.shape1 {
		top: 100px;
		right: 0;
		width: 80px;
		height: 80px;
	}
	.shape2 {
		width: 60px;
		height: 60px;
		top: 100px;
		left: 8px;
	}
	.shape3 {
		width: 100px;
		height: 80px;
		top: 140px;
		left: 16px;
	}

	.main {
		display: grid;
		grid-template-columns: (1, calc(100vw - 20px));
		place-items: center;
	}
	.main-heading {
		font-size: 36px;
		margin-bottom: 45px;
		font-weight: 700;
	}
	.container {
		background-color: lightsalmon;
		color: #fff;
		width: calc(100vw - 40px);
		margin-bottom: 16px;
		padding: 28px 10px;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.93);
	}
	.container .heading {
		margin-bottom: 42px;
		font-weight: 400;
	}
	.container .head {
		text-align: center;
		margin-bottom: 48px;
	}
	.container .content {
		display: grid;
		grid-template-columns: repeat(4, 200px);
		justify-content: center;
		align-items: stretch;
		gap: 26px;
		width: 100%;
	}
	.media2 {
		display: flex;
		justify-content: center;
		text-align: center;
		gap: 26px;
	}
	.container h1,
	p {
		margin: 0;
		text-align: center;
	}
	.content .name,
	.media2 .name {
		font-weight: 700;
		font-size: 22px;
	}
	.head-desc {
		font-weight: 600;
	}
	.media .content {
		grid-template-columns: repeat(4, 200px);
		margin-bottom: 26px;
	}
	.container img {
		width: 200px;
		height: 280px;
	}
	.pagers img {
		height: 220px;
		width: 210px;
	}
	.head-media {
		width: 220px !important;
		height: 270px !important;
	}
	.head-logistics {
		width: 225px !important;
		height: 270px !important;
	}

	.logistics {
		background-image: linear-gradient(to bottom, #326198, #000);
	}
	.media {
		background-image: linear-gradient(to bottom, #1f4e60, #000);
	}
	.pagers {
		background-image: linear-gradient(to bottom, #080a68, #000);
	}

	@media screen and (max-width: 950px) {
		.container .content {
			grid-template-columns: repeat(2, 200px);
		}
		.media .content {
			grid-template-columns: repeat(1, 200px);
		}
		.media2 {
			flex-direction: column;
		}
	}
	@media screen and (max-width: 480px) {
		.logistics .content,
		.pagers .content {
			grid-template-columns: repeat(auto-fill, 200px);
		}
	}

	@keyframes -global-slide-bottom {
		0% {
			-webkit-transform: translateY(-100px);
			transform: translateY(-100px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes -global-slide-top {
		0% {
			-webkit-transform: translateY(80px);
			transform: translateY(80px);
			opacity: 0;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
