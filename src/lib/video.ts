import type {Url} from '@ryanatkn/belt/url.js';
import type {Flavored} from '@ryanatkn/belt/types.js';

import type {Milliseconds} from './time.js';
import type {Playlist, PlaylistName} from './channel.js';

// TODO @many probably extract, maybe to `fuz_video`

export type VideoTitle = Flavored<string, 'VideoTitle'>;

export interface VideoJson {
	title: VideoTitle;
	url: Url;
	duration: Milliseconds;
	playlists: Array<PlaylistName>;
}

export const filter_playlist_videos = (
	videos: Array<VideoJson>,
	playlist: Playlist,
): Array<VideoJson> => videos.filter((v) => v.playlists.includes(playlist.name));
