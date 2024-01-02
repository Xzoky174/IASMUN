<script lang="ts">
	import { onMount } from 'svelte';
	export let destroyed: boolean;
	import Digit from './Digit.svelte';

	const getMs = (): { days: number; hours: number; minutes: number; seconds: number } => {
		let difference = Math.abs(
			new Date().getTime() - new Date('January 19, 2024, 13:30:00').getTime()
		);

		let seconds = difference / 1000;
		let minutes = seconds / 60;
		let hours = minutes / 60;
		let days = hours / 24;

		return {
			days: Math.floor(days),
			hours: Math.floor(hours % 24),
			minutes: Math.floor(minutes % 60),
			seconds: Math.floor(seconds % 60)
		};
	};

	let countdown = getMs();

	let interval: number;

	onMount(() => {
		interval = setInterval(() => {
			countdown = getMs();
			console.log(countdown);
		}, 1000);
	});

	$: if (destroyed) clearInterval(interval);
</script>

<ol>
	<li>
		<Digit position={0} val={countdown.days.toString().padStart(2, '0')} />
	</li>
	<li class="hours">
		<Digit position={1} val={countdown.hours.toString().padStart(2, '0')} />
	</li>
	<li>
		<Digit position={2} val={countdown.minutes.toString().padStart(2, '0')} />
	</li>
	<li>
		<Digit position={3} val={countdown.seconds.toString().padStart(2, '0')} />
	</li>
</ol>

<style>
	ol {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1em;
		list-style-type: none;
	}
	li {
		width: 240px;
	}
</style>
