import type {Url} from '@ryanatkn/gro/package_json.js';
import type {Flavored} from '@ryanatkn/belt/types.js';

import type {Milliseconds} from '$lib/time.js';
import type {Playlist, Playlist_Name} from '$lib/channel.js';

// TODO @many probably extract, maybe to `fuz_video`

export type Video_Title = Flavored<string, 'Video_Title'>;

export interface Video {
	title: Video_Title;
	url: Url;
	duration: Milliseconds;
	playlists: Playlist_Name[];
}

export const filter_playlist_videos = (videos: Video[], playlist: Playlist): Video[] =>
	videos.filter((v) => v.playlists.includes(playlist.name));
