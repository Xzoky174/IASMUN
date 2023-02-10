<script lang="ts">
	import TwitterLogo from '$lib/assets/logos/socials/Twitter.svg';
	import TikTokLogo from '$lib/assets/logos/socials/Tiktok.svg';
	import InstagramLogo from '$lib/assets/logos/socials/Instagram.svg';
	import YoutubeLogo from '$lib/assets/logos/socials/Youtube.svg';

	import IASSchool from '$lib/assets/logos/IAS Logo.png';
	import IASMun from '$lib/assets/logos/IASMUN.png';
	import Saos from 'saos';

	let slide_left = 'footer-slide-left 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
	let slide_right = 'footer-slide-right 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';

	export let onTopClick: any;
</script>

<footer>
	<div class="socials">
		<Saos once={true} animation={slide_right}>
			<a target="_blank" rel="noreferrer" href="https://www.youtube.com/@IASMUN">
				<img class="youtube-logo" src={YoutubeLogo} alt="YouTube" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>@IASMUN</p>
		</Saos>

		<Saos once={true} animation={slide_right}>
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.instagram.com/ias.mun"
				class="instagram"
			>
				<img class="instagram-logo" src={InstagramLogo} alt="Instagram" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>@ias.mun</p>
		</Saos>

		<Saos once={true} animation={slide_right}>
			<a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@ias.mun">
				<img class="tiktok-logo" src={TikTokLogo} alt="tiktok" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>@ias.mun</p>
		</Saos>

		<Saos once={true} animation={slide_right}>
			<a target="_blank" rel="noreferrer" href="https://twitter.com/ias_mun">
				<img class="twitter-logo" src={TwitterLogo} alt="Twitter" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>@ias_mun</p>
		</Saos>
	</div>

	<div class="images">
		<Saos
			once={true}
			animation="scale-up-center 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
		>
			<img class="IASMUN" alt="IASMUN" src={IASMun} />
		</Saos>

		<Saos
			once={true}
			animation="scale-up-center 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
		>
			<img class="IAS" alt="IAS" src={IASSchool} />
		</Saos>
	</div>

	<p class="copyright">&#169; All Rights Reserved</p>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svg
		on:click={onTopClick}
		class="top"
		width="25"
		height="25"
		viewBox="0 0 248 121"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class="outline"
			d="M248 116.169C248 117.113 247.713 118.036 247.174 118.821C246.634 119.606 245.867 120.217 244.97 120.579C244.073 120.94 243.086 121.034 242.133 120.85C241.181 120.666 240.306 120.211 239.619 119.544L129.797 12.8177C128.246 11.3222 126.15 10.483 123.966 10.483C121.781 10.483 119.685 11.3222 118.134 12.8177L8.31864 119.544C7.39286 120.413 6.15289 120.893 4.86586 120.883C3.57884 120.872 2.34776 120.37 1.43766 119.485C0.527561 118.601 0.0113694 117.404 0.000185547 116.153C-0.0109983 114.903 0.483794 113.697 1.37794 112.798L111.19 6.07186C114.583 2.78652 119.177 0.941895 123.966 0.941895C128.755 0.941895 133.349 2.78652 136.741 6.07186L246.56 112.798C247.017 113.24 247.379 113.765 247.626 114.344C247.874 114.922 248.001 115.543 248 116.169Z"
			fill="black"
		/>
	</svg>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

	footer {
		position: relative;
		display: grid;
		align-items: center;
		justify-content: center;
		background-color: #000;
		padding: 28px 48px;
		font-family: 'Montserrat', sans-serif;
		color: #fff;
	}
	a {
		color: #fff;
		text-decoration: none;
	}
	.socials {
		display: grid;
		grid-template-columns: 50px 1fr;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 60px;
		margin-bottom: 28px;
	}
	.youtube-logo {
		height: 38px;
	}
	.tiktok-logo {
		width: 35px;
		height: 35px;
	}
	.twitter-logo {
		width: 28px;
		height: 25px;
	}
	.instagram-logo {
		width: 38px;
		height: 38px;
	}
	.images {
		display: flex;
		align-items: center;
	}
	.IASMUN {
		width: 200px;
	}
	.IAS {
		width: 280px;
	}
	footer .copyright {
		position: absolute;
		bottom: 8px;
		right: 22px;
	}
	.top {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
		background-color: #fff;
		border-radius: 100%;
		padding: 8px 8px;
		transition: 0.55s;
	}
	.top:hover {
		transform: translateY(-10px);
	}

	@keyframes -global-footer-slide-right {
		0% {
			-webkit-transform: translateX(-100px);
			transform: translateX(-100px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}

	@keyframes -global-footer-slide-left {
		0% {
			-webkit-transform: translateX(100px);
			transform: translateX(100px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}

	@media screen and (max-width: 1000px) {
		.IASMUN {
			width: 120px;
		}
		.IAS {
			width: 200px;
		}
		footer {
			height: 210px;
		}
	}

	@media screen and (max-width: 750px) {
		.IASMUN {
			width: 100px;
		}
		.IAS {
			width: 140px;
		}
		footer {
			flex-direction: column;
			gap: 16px;
		}
		.socials {
			left: 40px;
		}
	}

	@media screen and (max-width: 660px) {
		.IASMUN {
			display: none;
		}
		.IAS {
			display: none;
		}
	}
</style>
