import type {Url} from '@ryanatkn/belt/url.js';
import type {Fetch_Value_Cache_Item} from '@ryanatkn/belt/fetch.js';

export const mastodon_dev_cache_data: Array<[Url, Fetch_Value_Cache_Item]> = [
	[
		'GET::https://mastodon.social/api/v1/statuses/112764548975084845/context',
		{
			key: 'GET::https://mastodon.social/api/v1/statuses/112764548975084845/context',
			url: 'https://mastodon.social/api/v1/statuses/112764548975084845/context',
			params: null,
			value: {ancestors: [], descendants: []},
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://mastodon.social/api/v1/statuses/112764548975084845',
		{
			key: 'GET::https://mastodon.social/api/v1/statuses/112764548975084845',
			url: 'https://mastodon.social/api/v1/statuses/112764548975084845',
			params: null,
			value: {
				id: '112764548975084845',
				created_at: '2024-07-10T22:27:46.553Z',
				in_reply_to_id: null,
				in_reply_to_account_id: null,
				sensitive: false,
				spoiler_text: '',
				visibility: 'public',
				language: 'en',
				uri: 'https://mastodon.social/users/webdevladder/statuses/112764548975084845',
				url: 'https://fosstodon.org/@webdevladder/113312147463274655',
				replies_count: 0,
				reblogs_count: 0,
				favourites_count: 0,
				edited_at: '2024-07-10T22:56:16.987Z',
				content:
					'<p>I blogged about webdevladder.net&#39;s first blog post</p><p><a href="https://www.webdevladder.net/blog/hello-webdevladder-blog" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://www.</span><span class="ellipsis">webdevladder.net/blog/hello-we</span><span class="invisible">bdevladder-blog</span></a></p><p>It includes Mastodon comments using fuz_mastodon: <a href="https://github.com/ryanatkn/fuz_mastodon" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/ryanatkn/fuz_mastod</span><span class="invisible">on</span></a></p><p>If you reply to this post and I like it, it&#39;ll show up on the blog!</p><p>It&#39;s made with <a href="https://mastodon.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a> and <a href="https://mastodon.social/tags/TypeScript" class="mention hashtag" rel="tag">#<span>TypeScript</span></a> using fuz_blog, my blog creation library for developers - <a href="https://github.com/ryanatkn/fuz_blog" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn/fuz_blog</span><span class="invisible"></span></a></p><p>pull request for the blog: <a href="https://github.com/ryanatkn/webdevladder.net/pull/5" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/ryanatkn/webdevladd</span><span class="invisible">er.net/pull/5</span></a></p><p>pull request for the comments: <a href="https://github.com/ryanatkn/webdevladder.net/pull/6" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/ryanatkn/webdevladd</span><span class="invisible">er.net/pull/6</span></a></p>',
				reblog: null,
				application: {name: 'Web', website: null},
				account: {
					id: '112020728666685461',
					username: 'webdevladder',
					acct: 'webdevladder',
					display_name: 'webdevladder',
					locked: false,
					bot: false,
					discoverable: null,
					indexable: false,
					group: false,
					created_at: '2024-03-01T00:00:00.000Z',
					note: '<p>a YouTube channel and blog for realworld webdev with <a href="https://mastodon.social/tags/TypeScript" class="mention hashtag" rel="tag">#<span>TypeScript</span></a> and <a href="https://mastodon.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a></p>',
					url: 'https://mastodon.social/@webdevladder',
					uri: 'https://mastodon.social/users/webdevladder',
					avatar:
						'https://files.mastodon.social/accounts/avatars/112/020/728/666/685/461/original/4d51355f1091bbd6.png',
					avatar_static:
						'https://files.mastodon.social/accounts/avatars/112/020/728/666/685/461/original/4d51355f1091bbd6.png',
					header:
						'https://files.mastodon.social/accounts/headers/112/020/728/666/685/461/original/494899529f069baf.webp',
					header_static:
						'https://files.mastodon.social/accounts/headers/112/020/728/666/685/461/original/494899529f069baf.webp',
					followers_count: 1,
					following_count: 0,
					statuses_count: 16,
					last_status_at: '2024-07-20',
					hide_collections: null,
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'youtube',
							value:
								'<a href="https://youtube.com/@webdevladder" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@webdevladder</span><span class="invisible"></span></a>',
							verified_at: null,
						},
						{
							name: 'website',
							value:
								'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
							verified_at: '2024-07-09T05:35:59.267+00:00',
						},
						{
							name: 'github',
							value:
								'<a href="https://github.com/ryanatkn/webdevladder.net" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/ryanatkn/webdevladd</span><span class="invisible">er.net</span></a>',
							verified_at: null,
						},
						{
							name: 'me',
							value:
								'<a href="https://www.ryanatkn.com/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com/</span><span class="invisible"></span></a>',
							verified_at: '2024-03-01T17:19:07.902+00:00',
						},
					],
				},
				media_attachments: [],
				mentions: [],
				tags: [
					{name: 'sveltekit', url: 'https://mastodon.social/tags/sveltekit'},
					{name: 'typescript', url: 'https://mastodon.social/tags/typescript'},
				],
				emojis: [],
				card: {
					url: 'https://www.webdevladder.net/blog/hello-webdevladder-blog',
					title: 'Hello webdevladder blog',
					description: '',
					language: 'en',
					type: 'link',
					author_name: '',
					author_url: '',
					provider_name: '',
					provider_url: '',
					html: '',
					width: 0,
					height: 0,
					image: null,
					image_description: '',
					embed_url: '',
					blurhash: null,
					published_at: null,
					authors: [{name: '', url: '', account: null}],
				},
				poll: null,
			},
			etag: null,
			last_modified: null,
		},
	],
];
