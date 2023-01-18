<script lang="ts">
	import TwitterLogo from '../assets/logos/Twitter-logo.svg';
	import FacebookLogo from '../assets/logos/Facebook-logo.svg';
	import InstagramLogo from '../assets/logos/Instagram-logo.svg';
	import YoutubeLogo from '../assets/logos/Youtube-logo.svg';

	import IASSchool from '../assets/logos/IAS Logo.png';
	import IASMun from '../assets/logos/IASMUN.png';
	import Saos from 'saos';

	let slide_left = 'slide-left 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
	let slide_right = 'slide-right 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
</script>

<footer>
	<div class="socials">
		<Saos once={true} animation={slide_right}>
			<a href="/">
				<img class="youtube-logo" src={YoutubeLogo} alt="YouTube" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>IASMUN</p>
		</Saos>

		<Saos once={true} animation={slide_right}>
			<a href="/" class="instagram">
				<img src={InstagramLogo} alt="Instagram" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>@IASMUN</p>
		</Saos>

		<Saos once={true} animation={slide_right}>
			<a href="/">
				<img class="facebook-logo" src={FacebookLogo} alt="Facebook" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>IASMUN</p>
		</Saos>

		<Saos once={true} animation={slide_right}>
			<a href="/">
				<img class="twitter-logo" src={TwitterLogo} alt="Twitter" />
			</a>
		</Saos>

		<Saos once={true} animation={slide_left}>
			<p>@IASMUN</p>
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

	<p>&#169; IASMUN {new Date().getFullYear()}</p>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #000;
		padding: 18px 48px;
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
	}
	.instagram {
		margin-left: 4px;
	}
	.youtube-logo {
		height: 35px;
	}
	.facebook-logo {
		width: 30px;
		height: 25px;
	}
	.twitter-logo {
		width: 28px;
		height: 25px;
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
	footer p {
		align-self: flex-end;
	}

	@keyframes -global-slide-right {
		0% {
			-webkit-transform: translateX(-100px);
			transform: translateX(-100px);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}

	@keyframes -global-slide-left {
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
	}

	@media screen and (max-width: 750px) {
		.IASMUN {
			width: 100px;
		}
		.IAS {
			width: 140px;
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
