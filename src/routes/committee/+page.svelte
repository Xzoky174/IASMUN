<script lang="ts">
	const committees = [
		{
			name: 'GA',
			description: 'GA Description',
			topics: [
				{
					name: 'Topic 1',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				},
				{
					name: 'Topic 2',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				}
			],
			chair_letter: '',
			chair_photo: '',
			cochair_letter: '',
			cochair_photo: ''
		},
		{
			name: 'DISEC',
			description: 'DISEC Description',
			topics: [
				{
					name: 'Topic 1',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				},
				{
					name: 'Topic 2',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				}
			],
			chair_letter: '',
			chair_photo: '',
			cochair_letter: '',
			cochair_photo: ''
		},
		{
			name: 'WHO',
			description: 'WHO Description',
			topics: [
				{
					name: 'Topic 1',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				},
				{
					name: 'Topic 2',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				}
			],
			chair_letter: '',
			chair_photo: '',
			cochair_letter: '',
			cochair_photo: ''
		},
		{
			name: 'UNODOC',
			description: 'UNODOC Description',
			topics: [
				{
					name: 'Topic 1',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				},
				{
					name: 'Topic 2',
					subtopics: ['Sub Topic 1', 'Sub Topic 2']
				}
			],
			chair_letter: '',
			chair_photo: '',
			cochair_letter: '',
			cochair_photo: ''
		}
	];
</script>

<h1 class="header">Our Committees</h1>

<div class="committees">
	{#each committees as committee}
		<div class={`committee ${committee.name}`}>
			<div class="committee-header">
				<h1>{committee.name}</h1>
				<p class="committee-description">{committee.description}</p>
			</div>

			{#each committee.topics as topic}
				<div class="topic">
					<p>{topic.name}</p>
					<ol>
						{#each topic.subtopics as subtopic}
							<p>{subtopic}</p>
						{/each}
					</ol>
				</div>
			{/each}

			<div class="letters">
				<div class="chair">
					<p>{committee.chair_letter}</p>
					<img src={committee.chair_photo} alt="Chair" />
				</div>

				<div class="co-chair">
					<p>{committee.cochair_letter}</p>
					<img src={committee.cochair_photo} alt="Co-Chair" />
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- GA-DISEC-WHO-UNODC -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

	h1 {
		margin: 0;
		font-weight: 700;
	}

	* {
		font-family: 'Montserrat', sans-serif;
	}

	.header {
		text-align: center;
		margin: 46px 0;
	}
	.committees {
		display: grid;
		place-items: center;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
		margin-bottom: 36px;
	}
	.committee {
		background-color: green;
		color: #fff;
		width: 680px;
		padding: 24px;
	}
	.committee-description {
		margin-top: 8px;
	}
	.committee-header {
		text-align: center;
		margin-bottom: 16px;
	}
	.topic {
		margin-bottom: 12px;
	}
</style>
