// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'webdevladder.net',
	version: '0.0.1',
	description: 'educational programming screencasts with Svelte and TypeScript',
	motto: 'climbing together',
	icon: '🪜',
	license: 'MIT',
	public: true,
	homepage: 'https://www.webdevladder.net/',
	repository: 'https://github.com/webdevladder/webdevladder.net',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/webdevladder/webdevladder.net/issues',
	funding: 'https://www.ryanatkn.com/funding',
	type: 'module',
	engines: {node: '>=20.10'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	devDependencies: {
		'@ryanatkn/belt': '^0.20.10',
		'@ryanatkn/eslint-config': '^0.1.2',
		'@ryanatkn/fuz': '^0.98.1',
		'@ryanatkn/gro': '^0.115.2',
		'@ryanatkn/moss': '^0.1.0',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.6',
		'@sveltejs/vite-plugin-svelte': '^3.1.0',
		'@typescript-eslint/eslint-plugin': '^7.7.0',
		'@typescript-eslint/parser': '^7.7.0',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.36.0-next.13',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.3',
		svelte: '^5.0.0-next.104',
		'svelte-check': '^3.6.9',
		tslib: '^2.6.2',
		typescript: '^5.4.5',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
} satisfies Package_Json;

export const src_json = {name: 'webdevladder.net', version: '0.0.1'} satisfies Src_Json;

// generated by src/routes/package.gen.ts
