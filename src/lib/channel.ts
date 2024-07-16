import type {Flavored} from '@ryanatkn/belt/types.js';
import type {Url} from '@ryanatkn/gro/package_json.js';

import type {Video} from '$lib/video.js';

// TODO @many probably extract, maybe to `fuz_video`

export interface Channel {
	name: Channel_Name;
	url: Url;
	summary: Channel_Summary; // TODO maybe accept a snippet
	videos: Video[];
	playlists: Playlist[];
}

export type Channel_Name = Flavored<string, 'Channel_Name'>;
export type Channel_Summary = Flavored<string, 'Channel_Summary'>;
export type Playlist = Flavored<string, 'Playlist'>;
