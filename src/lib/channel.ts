import type {Flavored} from '@ryanatkn/belt/types.js';
import type {Url} from '@ryanatkn/belt/url.js';

import type {VideoJson} from './video.js';

// TODO @many probably extract, maybe to `fuz_video`

export interface Channel {
	name: ChannelName;
	url: Url;
	summary: ChannelSummary; // TODO maybe accept a snippet
	videos: Array<VideoJson>;
	playlists: Array<Playlist>;
}

export type ChannelName = Flavored<string, 'ChannelName'>;
export type ChannelSummary = Flavored<string, 'ChannelSummary'>;

export interface Playlist {
	name: PlaylistName;
	url: Url;
	summary: PlaylistSummary; // TODO maybe accept a snippet
}

export type PlaylistName = Flavored<string, 'Playlist'>; // TODO maybe refactor to an object with `PlaylistName`?
export type PlaylistSummary = Flavored<string, 'PlaylistSummary'>;
