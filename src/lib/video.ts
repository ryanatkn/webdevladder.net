import type { Url } from '@fuzdev/fuz_util/url.ts';
import type { Flavored } from '@fuzdev/fuz_util/types.ts';

import type { Milliseconds } from './time.ts';
import type { Playlist, PlaylistName } from './channel.ts';

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
	playlist: Playlist
): Array<VideoJson> => videos.filter((v) => v.playlists.includes(playlist.name));
