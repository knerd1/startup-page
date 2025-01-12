const CONFIG = {
	// General
	name: 'knerd',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,
	timeZone: 'Asia/Kolkata',

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'e35a2d8647a6dd23168201f026251be9', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '19.593',
	defaultLongitude: '-99.250',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://x.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],



	// First Links Container
	firstlistsContainer: [
		{
			icon: 'star',
			id: '1',
			links: [
				{
					name: 'knerd Home',
					link: 'https://github.com/knerd1/',
				},
				{
					name: 'Arch Linux',
					link: 'https://archlinux.org/',
				},
				{
					name: 'ChatGPT',
					link: 'https://chat.openai.com/',
				},
				{
					name: 'MonkeyType',
					link: 'https://monkeytype.com/',
				},
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'Strivers-A2Z',
					link: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2',
				},
				{
					name: 'Codeforces',
					link: 'https://codeforces.com/',
				},
				{
					name: 'OverLeaf',
					link: 'https://OverLeaf.com/',
				},
				{
					name: 'r/Astronvim',
					link: 'https://docs.astronvim.com/mappings',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'square-user-round',
			id: '1',
			links: [
				{
					name: 'Hashnode',
					link: 'https://hashnode.com/',
				},
				{
					name: 'Coding-Time',
					link: 'https://wakatime.com/dashboard',
				},
				{
					name: 'Roadmap',
					link: 'https://roadmap.sh/',
				},
				{
					name: 'Dev.to',
					link: 'https://dev.to/',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'Codechef',
					link: 'https://www.codechef.com/dashboard',
				},
				{
					name: 'React-Native',
					link: 'https://www.reddit.com/r/reactnative/',
				},
				{
					name: 'Codejeet',
					link: 'https://codejeet.com',
				},
				{
					name: 'Hackerrank',
					link: 'https://www.hackerrank.com/dashboard',
				},
			],
		},
	],
};
