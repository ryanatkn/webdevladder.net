export interface Time {
	hours: number;
	minutes: number;
	seconds: number;
	ms: number;
}

export const parse_time = (str: string): Time | null => {
	const [seconds_with_ms_str, minutes_str, hours_str] = str
		.split(':')
		.map((s) => s.trim())
		.reverse();
	const [seconds_str, ms_part = null] = seconds_with_ms_str.split('.');
	const seconds = parseInt(seconds_str, 10);
	const maybe_ms = ms_part === null ? NaN : parseInt(ms_part.padEnd(3, '0'), 10);
	const ms = Number.isNaN(maybe_ms) ? 0 : maybe_ms;
	const hours = parseInt(hours_str, 10);
	const minutes = parseInt(minutes_str, 10);
	if (Number.isNaN(seconds) && Number.isNaN(ms)) {
		return null;
	}
	return {
		hours: Number.isNaN(hours) ? 0 : hours,
		minutes: Number.isNaN(minutes) ? 0 : minutes,
		seconds: Number.isNaN(seconds) ? 0 : seconds,
		ms: Number.isNaN(ms) ? 0 : ms,
	};
};

export const time_to_ms = ({hours, minutes, seconds, ms}: Time): number =>
	(hours * 60 * 60 + minutes * 60 + seconds) * 1000 + ms;
