import type {Blog_Feed_Data} from '@ryanatkn/fuz_blog/blog.js';

// TODO extract to fuz.config.ts?
export const blog: Blog_Feed_Data = {
	title: "Ryan Atkinson's blog",
	id: 'https://www.webdevladder.net/',
	home_page_url: 'https://www.webdevladder.net/',
	description: 'blog of a web developer building free and open source tools and toys',
	icon: 'https://www.webdevladder.net/favicon.png',
	favicon: 'https://www.webdevladder.net/favicon.png',
	author: {
		name: 'Ryan Atkinson',
		url: 'https://www.ryanatkn.com/',
		email: 'mail@ryanatkn.com',
	},
	atom: {
		feed_url: 'https://www.webdevladder.net/blog/feed.xml',
	},
};
