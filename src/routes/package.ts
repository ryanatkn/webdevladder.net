// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'webdevladder.net',
	version: '0.0.1',
	description: 'a YouTube channel and blog for realworld webdev with TypeScript and Svelte',
	motto: 'up ↗',
	glyph: '🪜',
	logo: 'logo.svg',
	logo_alt: 'a spider web between two rungs of a ladder',
	license: 'MIT',
	public: true,
	homepage: 'https://www.webdevladder.net/',
	repository: 'https://github.com/ryanatkn/webdevladder.net',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/webdevladder.net/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=22.11'},
	devDependencies: {
		'@ryanatkn/belt': '^0.30.1',
		'@ryanatkn/eslint-config': '^0.8.0',
		'@ryanatkn/fuz': '^0.135.0',
		'@ryanatkn/fuz_blog': '^0.11.0',
		'@ryanatkn/fuz_code': '^0.21.0',
		'@ryanatkn/fuz_mastodon': '^0.28.0',
		'@ryanatkn/gro': '^0.149.2',
		'@ryanatkn/moss': '^0.24.2',
		'@sveltejs/adapter-static': '^3.0.8',
		'@sveltejs/kit': '^2.20.4',
		'@sveltejs/vite-plugin-svelte': '^5.0.3',
		eslint: '^9.24.0',
		'eslint-plugin-svelte': '^3.5.1',
		prettier: '^3.5.3',
		'prettier-plugin-svelte': '^3.3.3',
		svelte: '^5.25.6',
		'svelte-check': '^4.1.5',
		tslib: '^2.8.1',
		typescript: '^5.8.3',
		'typescript-eslint': '^8.29.0',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist'],
} satisfies Package_Json;

export const src_json = {name: 'webdevladder.net', version: '0.0.1'} satisfies Src_Json;

// generated by src/routes/package.gen.ts
