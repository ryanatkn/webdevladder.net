import type {Url} from '@ryanatkn/belt/url.js';
import type {Flavored} from '@ryanatkn/belt/types.js';

import type {Milliseconds} from './time.js';
import type {Playlist, Playlist_Name} from './channel.js';

// TODO @many probably extract, maybe to `fuz_video`

export type Video_Title = Flavored<string, 'Video_Title'>;

export interface Video_Json {
	title: Video_Title;
	url: Url;
	duration: Milliseconds;
	playlists: Array<Playlist_Name>;
}

export const filter_playlist_videos = (
	videos: Array<Video_Json>,
	playlist: Playlist,
): Array<Video_Json> => videos.filter((v) => v.playlists.includes(playlist.name));
