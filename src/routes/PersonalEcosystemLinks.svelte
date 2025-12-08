<script lang="ts">
	const {
		selected,
	}: {
		selected?: 'webdevladder.net' | 'ryanatkn.com'; // 'spiderspace.org' |
	} = $props();
</script>

<ul>
	<li>
		<a rel="me" href="https://www.ryanatkn.com/" class:selected={selected === 'ryanatkn.com'}
			>ryanatkn.com</a
		>
		- my homepage{#if selected === 'ryanatkn.com'}, you are here{/if}
	</li>
	<!-- <li>
		<a rel="me" href="https://www.spiderspace.org/" class:selected={selected === 'spiderspace.org'}
			>spiderspace.org</a
		>
		- nontechnical design videos where we'll make a social website together with
		<a href="https://www.zzz.software/">Zzz</a> when it's ready, YouTube channel
		<a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a
		>{#if selected === 'spiderspace.org'}, you are here{/if}
	</li> -->
	<li>
		GitHub as <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and Bluesky as
		<a href="https://bsky.app/profile/ryanatkn.com">@ryanatkn.com</a>
	</li>
	<li>
		Mastodon as
		<a rel="me" href="https://fosstodon.org/@ryanatkn">@ryanatkn@fosstodon.org</a> and
		<a rel="me" href="https://fosstodon.org/@webdevladder">@webdevladder@fosstodon.org</a>
	</li>
	<li>
		<a
			rel="me"
			href="https://www.webdevladder.net/"
			class:selected={selected === 'webdevladder.net'}>webdevladder.net</a
		>
		- realworld webdev with TypeScript and Svelte,
		<a href="https://www.webdevladder.net/blog">blog</a>
		and YouTube channels
		<a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a>
		and
		<a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a>, also
		@webdevladder on <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a> and
		<a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a
		>{#if selected === 'webdevladder.net'}, you are here{/if}
	</li>
	<!-- <li>
		support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a>
	</li> -->
</ul>
