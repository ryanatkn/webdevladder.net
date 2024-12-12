import type {Flavored} from '@ryanatkn/belt/types.js';
import type {Url} from '@ryanatkn/gro/package_json.js';

import type {Video} from '$lib/video.js';

// TODO @many probably extract, maybe to `fuz_video`

export interface Channel {
	name: Channel_Name;
	url: Url;
	summary: Channel_Summary; // TODO maybe accept a snippet
	videos: Array<Video>;
	playlists: Array<Playlist>;
}

export type Channel_Name = Flavored<string, 'Channel_Name'>;
export type Channel_Summary = Flavored<string, 'Channel_Summary'>;

export interface Playlist {
	name: Playlist_Name;
	url: Url;
	summary: Playlist_Summary; // TODO maybe accept a snippet
}

export type Playlist_Name = Flavored<string, 'Playlist'>; // TODO maybe refactor to an object with `Playlist_Name`?
export type Playlist_Summary = Flavored<string, 'Playlist_Summary'>;
