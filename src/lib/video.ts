import type {Url} from '@ryanatkn/gro/package_json.js';
import type {Flavored} from '@ryanatkn/belt/types.js';

import type {Milliseconds} from '$lib/time.js';

// TODO @many probably extract, maybe to `fuz_video`

export type Video_Title = Flavored<string, 'Video_Title'>;

export interface Video {
	title: Video_Title;
	url: Url;
	duration: Milliseconds;
}
