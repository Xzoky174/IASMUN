import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Xzoky174/IASMUN.git', // Update to point to your repository
		user: {
			name: 'Xzoky174', // update to use your name
			email: 'xzoky123@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
