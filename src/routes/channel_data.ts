import type {Channel} from '$lib/channel.js';
import type {Video} from '$lib/video.js';

const webdevladder_videos: Video[] = [
	{
		title: 'How Svelte runes syntax is better than plain JavaScript with signals',
		url: 'https://www.youtube.com/watch?v=IsJtmbvW2SI',
		duration: 1389000,
		playlists: [],
	},
];

const webdevladder_vods_videos: Video[] = [
	{
		title: 'Svelte 5 refactoring to reactive SvelteSet in my ear trainer Earbetter',
		url: 'https://www.youtube.com/watch?v=bE-BYtepFr8',
		duration: 1367000,
		playlists: ['Earbetter'],
	},
	{
		title: 'Embedding Mastodon toots with rules to control reply visibility with Svelte components',
		url: 'https://www.youtube.com/watch?v=5w9iUZ5TesE',
		duration: 6537000,
		playlists: ['fuz_mastodon'],
	},
	{
		title: 'Refactoring my messy Mastodon library',
		url: 'https://www.youtube.com/watch?v=QET2GbcW9ww',
		duration: 5392000,
		playlists: ['fuz_mastodon'],
	},
	{
		title: "Programming my channel's website using Svelte, adding videos with reactive durations",
		url: 'https://www.youtube.com/watch?v=A8u5_0mNEO8',
		duration: 3231000,
		playlists: ['webdevladder.net'],
	},
	{
		title: 'Coding a blog creation library for SvelteKit developers from scratch',
		url: 'https://www.youtube.com/watch?v=wP9qghWkTLc',
		duration: 3585000,
		playlists: ['fuz_blog'],
	},
	{
		title: 'Extracting fuz_blog from my personal blog and publishing to npm',
		url: 'https://www.youtube.com/watch?v=dh_6Vyjbuiw',
		duration: 8504000,
		playlists: ['fuz_blog'],
	},
	{
		title: "Creating my channel's blog and adding Mastodon comments",
		url: 'https://www.youtube.com/watch?v=V4Fg3-B6Su8',
		duration: 2784000,
		playlists: ['webdevladder.net'],
	},
	{
		title: 'Adding features to my blog software for SvelteKit developers',
		url: 'https://www.youtube.com/watch?v=YWxT8WZLWgM',
		duration: 9146000,
		playlists: ['fuz_blog'],
	},
	{
		title: 'Programming automatic Mastodon comments into my SvelteKit blog library',
		url: 'https://www.youtube.com/watch?v=j1qTO5xolC4',
		duration: 3931000,
		playlists: ['fuz_blog'],
	},
];

export const webdevladder_channel: Channel = {
	name: 'webdevladder',
	url: 'https://www.youtube.com/@webdevladder',
	summary:
		'technical videos about realworld topics in TypeScript and <a href="https://svelte.dev/">Svelte</a>',
	videos: webdevladder_videos,
	playlists: [],
};

export const webdevladder_vods_channel: Channel = {
	name: 'webdevladder_vods',
	url: 'https://www.youtube.com/@webdevladder_vods',
	summary: 'raw realworld programming in TypeScript and Svelte',
	videos: webdevladder_vods_videos,
	playlists: [
		{
			name: 'webdevladder.net',
			url: 'https://www.youtube.com/playlist?list=PLio_5jgyVNVlYerzp8npCg8mUs2zKEavS',
			summary: "coding my channel's website",
		},
		{
			name: 'fuz_blog',
			url: 'https://www.youtube.com/playlist?list=PLio_5jgyVNVm0nMXojbEP7vQOEakA8n4X',
			summary: 'coding blog software from scratch',
		},
		{
			name: 'fuz_mastodon',
			url: 'https://www.youtube.com/playlist?list=PLio_5jgyVNVlxnUGhFTSzcs8p6YB_bj67',
			summary: 'Mastodon library programming',
		},
		{
			name: 'Earbetter',
			url: 'https://www.youtube.com/playlist?list=PLio_5jgyVNVnamRztrGFag4XihZNmLKZT',
			summary: 'ear training programming',
		},
	],
};

export const channels: Channel[] = [webdevladder_channel, webdevladder_vods_channel];
