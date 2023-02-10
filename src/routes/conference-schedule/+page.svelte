<script>
	import Saos from 'saos';

	let days = [
		{
			day: 'Friday (10th March)',
			timing: [
				{ start: '1:30pm', end: '3pm', desc: 'Arrival and Registration' },
				{ start: '3pm', end: '5pm', desc: 'Opening Ceremony' },
				{ start: '5pm', end: '5:30pm', desc: 'Short Break' },
				{ start: '5:30pm', end: '7:30pm', desc: 'First Committee Session' }
			]
		},
		{
			day: 'Saturday (11th March)',
			timing: [
				{ start: '9:20am', end: '10am', desc: 'Arrival' },
				{ start: '10am', end: '12:30pm', desc: 'Second Committee Session' },
				{ start: '12:30pm', end: '2pm', desc: 'Break' },
				{ start: '2pm', end: '4pm', desc: 'Third Committee Session' },
				{ start: '4pm', end: '5pm', desc: 'Break' },
				{ start: '5pm', end: '6:30pm', desc: 'Fourth Committee Session' },
				{ start: '6:30pm', end: '7pm', desc: 'Short Break' },
				{ start: '7pm', end: '8:30pm', desc: 'Social Night' }
			]
		},
		{
			day: 'Sunday (12th March)',
			timing: [
				{ start: '9:20am', end: '10am', desc: 'Arrival' },
				{ start: '10am', end: '12pm', desc: 'Fifth Committee Session' },
				{ start: '12pm', end: '1:30pm', desc: 'Break' },
				{ start: '1:30pm', end: '3:30pm', desc: 'Suprise' },
				{ start: '3:30pm', end: '4:30pm', desc: 'Suprise' },
				{ start: '4:30pm', end: '6pm', desc: 'Awards Ceremony' }
			]
		}
	];
</script>

<svelte:head>
	<title>Conference Schedule</title>
</svelte:head>

<Saos once={true} animation="slide-bottom 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;">
	<h1 class="header">Conference <b>Timings</b></h1>
</Saos>

<div class="timings">
	{#each days as day}
		<div class={`container ${day.day}`}>
			<h1>{day.day}</h1>

			{#each day.timing as timing}
				<p class="timing">{timing.start} - {timing.end}</p>
				<p class="timing-desc">{timing.desc}</p>
			{/each}
		</div>
	{/each}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	* {
		font-family: 'Montserrat', sans-serif;
		text-align: center;
	}

	.header {
		font-weight: 400;
		text-align: center;
		margin: 40px 0;
	}
	.container {
		height: 100%;
		width: calc(100% - 2px);
		border-collapse: collapse;
		border: 2px dashed #000;
		border-bottom: none;
		border-right: none;
	}
	.container:first-child {
		border-left: none;
	}
	.timings {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
		margin-bottom: 16px;
	}
	.timing {
		font-weight: 700;
		margin-bottom: 0;
		margin-top: 12px;
		font-size: 20px;
	}
	.timing-desc {
		margin-top: 0;
		margin-bottom: 22px;
		font-size: 18px;
	}

	@media screen and (max-width: 790px) {
		.timings {
			grid-template-columns: 1fr;
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
</style>
