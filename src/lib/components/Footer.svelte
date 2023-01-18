<script lang="ts">
	import TwitterLogo from '../assets/logos/Twitter-logo.svg';
	import FacebookLogo from '../assets/logos/Facebook-logo.svg';
	import InstagramLogo from '../assets/logos/Instagram-logo.svg';
	import YoutubeLogo from '../assets/logos/Youtube-logo.svg';

	import IASSchool from '../assets/logos/IAS Logo.png';
	import IASMun from '../assets/logos/IASMUN.png';
	import Saos from 'saos';
</script>

<footer>
	<div class="socials">
		<a href="/">
			<img class="youtube-logo" src={YoutubeLogo} alt="YouTube" />
			<p>IASMUN</p>
		</a>
		<a href="/" class="instagram">
			<img src={InstagramLogo} alt="Instagram" />
			<p>@IASMUN</p>
		</a>
		<a href="/">
			<img class="facebook-logo" src={FacebookLogo} alt="Facebook" />
			<p>IASMUN</p>
		</a>
		<a href="/">
			<img class="twitter-logo" src={TwitterLogo} alt="Twitter" />
			<p>@IASMUN</p>
		</a>
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
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.socials > * {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 18px;
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
</style>
