import{c as t,a as c,t as h,r as a,s as e,f as ce,Y as i}from"../chunks/disclose-version.BYBXgRTm.js";import{a as p}from"../chunks/attributes.D3tYDR4N.js";import{B as mt}from"../chunks/Blog_Post.DIsqY5Xn.js";import{C as r}from"../chunks/Code.Di8R_7WS.js";import{D as ft}from"../chunks/Details.CdcsDgcH.js";import{t as ue,p as gt,a as bt}from"../chunks/runtime.DaMnY2TH.js";import{s as ve}from"../chunks/render.Cfeg4UTt.js";import{s as yt}from"../chunks/snippet.CQl_kiRo.js";var wt=h('<sup class="font_mono"><a> </a></sup>');function he(u,s){var o=wt(),l=t(o),d=t(l);a(l),a(o),ue(()=>{p(l,"id",`footnote_link_${s.number??""}`),p(l,"href",`#footnote_${s.number??""}`),ve(d,`[${s.number??""}]`)}),c(u,o)}var _t=h('<div class="mb_xl5"><span class="font_mono float_left mr_sm"><a> </a></span> <!></div>');function pe(u,s){gt(s,!0);var o=_t(),l=t(o),d=t(l),v=t(d);a(d),a(l);var m=e(e(l,!0));yt(m,()=>s.children),a(o),ue(()=>{p(o,"id",`footnote_${s.number??""}`),p(d,"href",`#footnote_link_${s.number??""}`),ve(v,`[${s.number??""}]`)}),c(u,o),bt()}var At=h(`Here are the same lines verbatim from the demo, including the added
					noise:`,1),St=h("<p>Reactive statements:</p> <!> <p>Derived stores:</p> <!> <p>Signals:</p> <!>",1),kt=h(`<p>Not all signals implementations are glitch-free, as I understand the term. For example <a href="https://www.youtube.com/watch?v=IsJtmbvW2SI">my first video</a> describes glitchy values that are possible in the store-compatible <a href="https://github.com/preactjs/signals">Preact Signals</a> library (starting at <a href="https://youtu.be/IsJtmbvW2SI?si=V1HVyf_IGs02ZWP-&amp;t=164">this timestamp</a>). Preact
				Signals provides <code>batch</code> to create explicit transactions that do not glitch. Svelte 5 instead batches
				automatically, with tradeoffs like effects being deferred instead of eager. I generally prefer
				Svelte 5's tradeoffs.</p>`),xt=h(`<p>The deferred effects of Svelte 5's signals have good ergonomics, but like reactive
				statements, they cannot observe intermediate values. This makes Svelte 5's control less
				fine-grained than what's possible, although one can imagine extending its API to opt into
				eager effects (which are sometimes glitchy and wasteful). <a href="https://github.com/tc39/proposal-signals">The TC39 signals proposal</a> has no opinion on effects because it's unclear what's best - and maybe there's no perfect answer.
				I'd love to learn more about this if you have resources to share.</p>`),It=h(`<section><aside>This blog post is also <a href="https://www.youtube.com/watch?v=lcnimZTNOCA">a video</a>.</aside> <p><a href="https://svelte.dev/">Svelte</a> is a frontend JS framework that's known in part for
			its terse and ergonomic reactivity. Reactivity is how changes to data synchronize with the UI
			and other downstream data. In 2019 Svelte 3 <a href="https://svelte.dev/blog/svelte-3-rethinking-reactivity">introduced a reactivity design</a> that caught a lot of attention for its ease and apparent simplicity. Svelte rapidly rose to prominence
			in its crowded space, and in surveys it has consistently been <a href="https://2023.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_experience">well-liked</a> by its users. But 5 years later, Svelte 5 is again rethinking its reactivity, this time with <a href="https://svelte.dev/blog/runes">runes-based signals</a> - why? I thought we loved it?</p> <p>To many, Svelte 3 was a fresh and attractive answer to the hard problem of building reactive
			UIs. It chose plain HTML as its starting point, and added some of the simplest possible syntax
			to make it reactive. Few frameworks look better in trivial examples:</p> <!> <p>This terse and fairly efficient reactivity was one of the main reasons I switched to Svelte
			full-time in 2019 after 5 years of React. But while its reactivity looks simple on the
			surface, problems appear in nontrivial cases. There be dragons beyond this inviting facade.</p> <p>This post describes two specific problems with Svelte 3's reactivity and how they're fixed in
			Svelte 5 with signals, the primitive behind its runes. Svelte 5 fixes many other reactivity
			issues, and also improves its composability and other aspects, but we'll focus on two things:</p> <ol><li>reactive statement inconsistency</li> <li>derived store glitches</li></ol> <aside>When I refer to Svelte 3 it also applies to Svelte 4. I say 3 because that's the version that
			introduced the lauded and fraught reactivity. Version 4 was a small and recent release that
			mostly just eases the path to 5.</aside> <p>Svelte 5, largely inspired by <a href="https://www.solidjs.com/">Solid</a>, uses signals to
			improve its reactivity and fix these two problems, among others. In 2024 signals are being
			adopted by most popular frontend frameworks, React being the notable exception with its purely
			functional roots. Signals are popular enough to have a broadly-backed <a href="https://github.com/tc39/proposal-signals">proposal to standardize them</a> in the JS language.</p> <aside>For more about signals in great detail, Solid creator Ryan Carniato's <a href="https://dev.to/ryansolid">blog posts</a> and <a href="https://www.youtube.com/@ryansolid">YouTube channel</a> are excellent resources. He's
			known as the main popularizer of signals.</aside></section> <section><h2>Inconsistent reactive statements</h2> <p>Inconsistency is a term I'm borrowing from Ryan Carniato (see <a href="https://www.youtube.com/live/kz-p_017Usc?si=FeF63XruPUEJXH-w&amp;t=16161">this video</a> for example) that describes the situation where you update the dependencies of a derived value
			(in this case, derived via a reactive statement), and then synchronously read the derived value,
			but you get the old value. For example:</p> <!> <p><a href="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAA3WOywrCMBBFf2UYXLRSWqy7pA_8B3fGRR9TCaRJaKaClP67RN26vOdcLnfDSRsKKG4b2m4mFHjxHjPkl48hPMkwYYbBrcsQSRWGRXtulFVsiKGDGk4ypoOAHmro4AjlBwTiq57JrZwkKdQNbJEqHpwNzlBu3CPpUwlFAeXXxLGz_N-Ctm2j3VOpbFX8rmCGsxv1pGlEwctK-31_A4xoLxvZAAAA">REPL</a></p> <p>It seems logical that <code>b</code> would be <code>6</code> after reassigning <code>a</code> to <code>3</code>, not still <code>2</code>. The problem is the reactive statement starting
			with <code>$:</code> does not re-run immediately - its update is deferred to the next tick of the JS runtime. The same
			problem causes <code>b</code> to be <code>undefined</code> during initialization:</p> <!> <p><a href="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAAy3MSwrCMBRG4a1cfhyoFIMO0xeuwzpIm1sJpElIUkFK9y4Rh-cbnA2zsZwgHxucWhgS9xBQIX9CifRmmxkVkl_jVKRJUzQhd4MbsuVMilq61qUOkkZqSdGZbj-YvEve8sX613E81SQErU7zbBxr6vt-cI3431Bh8drMhjVkjivvz_0L4hPggZwAAAA=">REPL</a></p> <p>Svelte 5 fixes this problem with runes, which use signals under the hood:</p> <!> <p><a href="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAA22OzQqDMBCEX2VZekiKVGqhB_-g79Bb7SHqWgLRhGQVivjuJVTopbeZbxhmVhy0oYD5Y8VJjYQ53pzDBPntogkLGSZMMNjZd5GUofPacd1MDRtiUFDBIbBiEmdZRNrZKTC0kffk9UK9UHCE7JdaQydjX6KVBaQpZJDLGAXiux7JziyEhKqGNdKG48Sl-Oo_9ete3-JAme7_MMHR9nrQ1GPOfqbtuX0AnMmRUe4AAAA=">REPL</a></p> <p>This behavior of reactive statements wasn't unthoughtful design. It avoids numerous issues
			that result from eager evaluation, and it was an exploration of the limits of static analysis,
			which was a promising direction to improve the ergonomics and efficiency of reactive systems,
			as Svelte creator Rich Harris <a href="https://youtu.be/z7n17ajJpCo?si=Vzvwm5QeUbaax-v3&amp;t=2539">discusses in this video</a>.</p> <p>Signals straightforwardly resolve this wicked problem of reading stale derived values by
			consistently having the latest value.</p> <aside>In 2024 we benefit from years of practical investigation into better reactivity systems, and
			in 2019 signals were on few peoples' radars in frontend JS. Ryan Carniato deserves a lot of
			credit for educating the community and popularizing signals - many epithets could apply, today
			I'll call him the CMO of Signals.</aside></section> <section><h2>Glitchy derived stores</h2> <p>In reactive programming, <a href="https://wikipedia.org/wiki/Reactive_programming#Glitches">glitches</a> occur when a program computes temporary values that make no sense. For example if you have <code>fullname</code> that combines a <code>firstname</code> and <code>lastname</code>, an example glitch might
			involve computing a full name using the first and last names of two different people, even
			when the code updates variables sequentially:</p> <!> <p>Glitches can be a source of:</p> <ul><li>bugs: what happens if you make an API call with a nonsense value? or will your frontend code
				error when encountering them? who knows! I hope your tests are thorough</li> <li>complexity: your code may have to deal with strange values that needn't exist</li> <li>waste: glitchy calculations are by definition immediately invalidated, so they're pure waste
				- this can affect the UX with many updates or expensive calculations</li></ul> <p>Signals are one reactivity system that can avoid glitches, depending on the implementation<!>. Svelte 5 and the proposed standard are glitch-free.</p> <p>One important detail here is that signals do allow reading intermediate values. If you read <code>fullname</code> in between the two updates, you will indeed see the same value as the glitch. This makes sense,
			because it means it's consistent as described above with reactive statements. The key point is
			that unlike derived stores, signals do not see or calculate intermediate values by default - they
			can but it's under your control. Explicitly pulling an intermediate value is not a glitch.</p> <p>Also, reactive statements are incapable of observing intermediate values, a limitation that
			can necessitate some painful restructuring in rare but valid cases.</p> <p>Signals give us the best of both worlds, with the eager observability of derived stores, and
			the glitch-free efficient batching of reactive statements. They afford not only <a href="https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf">fine-grained performance</a>, but also fine-grained control<!>.</p> <aside>The signals algorithm is <a href="https://github.com/tc39/proposal-signals#how-do-signals-work">often described</a> as push-pull, a hybrid of push and pull reactivity - see <a href="https://wikipedia.org/wiki/Reactive_programming#Change_propagation_algorithms">Wikipedia</a> for more. This may sound complex, and internally I consider it so, but it's how we get these simple
			guarantees externally as users. This behavior means you sometimes need to pay close attention to <em>when</em> you read values - for example pulling an intermediate value is not a glitch, but
			it may be an error in your logic. Sometimes you need to structure your code accordingly, but in
			my experience, it's a good and coherent set of tradeoffs.</aside></section> <section><h2>A complete example</h2> <p><a>This REPL</a> compares Svelte 3 reactive statements, derived stores, and Svelte
			5 signal-based runes. These three different reactive systems have subtle but important differences.</p> <aside>The <a href="https://www.youtube.com/watch?v=lcnimZTNOCA">video</a> walkthrough of this code is
			probably easier to follow.</aside> <p>Here are the key lines of code being compared, rewritten to remove the logging noise needed
			for the demo:</p> <p>Reactive statements:</p> <!> <p>Derived stores:</p> <!> <p>Signals:</p> <!> <aside><!></aside> <p>Things to notice in <a>the REPL</a>:</p> <ul><li>the final rendered output in the DOM is what we expect, leading many people to be unaware of
				the lurking problems (e.g. clicking "swap uppercase and lowercase" never displays <code>A b</code> or <code>a B</code>)</li> <li>reactive statements are <code>undefined</code> during initialization - this is inconsistent</li> <li>reactive statements have stale values when read synchronously after writes to their
				dependencies - click the swap button and see how the <code>after swap</code> values are the
				same as <code>before swap</code> for reactive statements, unlike the other two examples - this
				is inconsistent</li> <li>derived stores calculate and notify glitchy values like <code>A b</code>, <code>a B</code>,
				and they also wastefully recompute immediately after each dependency change, even when more
				changes to other dependencies are synchronously incoming</li> <li>the signals-based <code>$derived</code> rune has neither of these problems</li></ul> <p>With both the reactive statements and derived stores, your code receives unexpected values in
			some cases, whereas signals always give you the latest value and they update predictably.
			Though subtle, these details can sometimes be critically important.</p> <p>Signals sidestep glitches while providing a consistent and more optimal reactivity model.</p></section> <section><h2>From easy to simple</h2> <p>Engineering is all about tradeoffs, and as Rich Harris said in <a href="https://www.youtube.com/live/uWLTDUjNrhQ?si=sirvPwCLiieg-x8R&amp;t=1373">this interview</a>, Svelte before version 5 was overly focused on the first 5 minutes of the developer
			experience. Svelte 3's apparent simplicity is full of subtle complexity. The cost of easy was
			unexpectedly high, and part of that cost was paid in simplicity for nontrivial usage. This
			post covers only a small fraction of Svelte 3's complexities. If you're curious about the
			details you could start with <a href="https://www.reddit.com/r/sveltejs/comments/1b1fsna/svelte_5_is_easy_made_simple_v3_and_v4_are_easy/">these issues</a>.</p> <p>Svelte 3 has two different reactive systems - component-local reactivity (including reactive
			statements) and stores (including derived) - each with its own problems, and where the former
			system is available only inside <code>.svelte</code> files. This creates two worlds where interactions
			between them can be surprising, reasoning through the details is challenging, and refactoring code
			between them is tedious and error-prone.</p> <p>In 2019 I rationalized this by thinking I could select the better system for the problem at
			hand, but I eventually felt that neither system is great, and the combination is unwelcomed
			complexity. The Svelte team concluded similar and did some serious engineering to isolate the
			unavoidable complexities behind friendly APIs.</p> <p>Svelte 5 has universal reactivity across both JS/TS modules and Svelte files instead of
			splitting the world in two, and runes, which leverage Svelte's compiler architecture, further
			sweeten signals syntax. I could continue listing the wins in Svelte 5's design, but I think
			the most important points are the improved reactivity model, universality, and composability
			(maybe a future post). The UX improves too with better performance, not to mention the
			likelihood of more productive and happier developers.</p> <p>I've experienced many of the pain points of the previous design, and now having spent months
			with the pre-release of Svelte 5, I can confidently say the relief it brings is significant.
			My code is easier to read and write, runes guide me to better decision making, and its
			performance characteristics are pushing the state of the art. I'm looking forward to many more
			years of using Svelte with solid productivity and good vibes.</p></section> <section><h2>Footnotes</h2> <!> <!></section>`,1);const Tt={title:"Svelte 5 signals fix its glitchy and inconsistent reactivity",slug:"svelte-5-signals-fix-its-glitchy-and-inconsistent-reactivity",date_published:"2024-08-15T12:53:55.522Z",date_modified:"2024-08-15T12:53:55.522Z",summary:"Svelte 5 adopted signals to replace its old reactivity system that had some subtle but important problems",tags:["svelte","signals"]};function Mt(u){const s="https://svelte-5-preview.vercel.app/#H4sIAAAAAAAAA-1YzY7bNhB-lakrQHJiS2mLoIBXdlA0vRVokaSn9SKgpLHFhhYFcWSv4fhWtLee2zfp8-QF-goFSf3a8mZTZFGgyGG9Jufv45D8ZujDaMUFqtHs-jDK2AZHs9E3eT6ajGif64HaoiAcTUZKlkWsZ0IVFzynxTJbEt_ksiB4gSwmvsWXxAg3mJGCVSE34PrBuci3Lt2rjoPnWPAtJi9JFtja9maHzF6UWUfdjLpq2ZKCR_pT_71KuYIX3_34PSS4kZmighEq4FksM8UVYRbvgWUJrAWnOOXZGvJCRgI3SpvvOKXw0viGr1wFhV0Xpz1QyqgWPQUlxRYVGP1CI5oY85THKZQKQfF1xoSCMkuwAEoRUikT38KNhFxDLhXNICXK1SwIdrudv8Mowa1gSYKFnyEFWi-wK50-nVYupyt-O-WkpnYF-ynLkmlnfTRtQddZeRTYwAKpXhK-Vs1evcZbtskFwhwcM-uNr2r1xO7Oa2W25y5Nk4YLCpWKkGvVSg7HWqbBGynMwTNJnIDgGY5hvoCDWQUppFd8g7Ikz-vOL8nTbq-N2Q08ezaH65uxn5cq9YyPK6tng9GxF7LME0YabM_lHSnyrYVXex1Oz6lWLzV9YR9PgQrpFE6VtcOxMQiD9nZmocKYuMzMVQ2jkkhmILNY8PjN_GCDHRdqx3Io8xyLmCk0V0DInR2FgbUa9mAwHRfmX0czDDpxT0AQiwQuLPqQUmTJot6skIrmuxEuqrSEAaUnkhUvFGm6GpAJdlG0KoU4E4VBE1jPt5BCimSyb_XOqaz1HvEsmVHKlc7KxTNybA2EXM8PXnOUhVx7bm0JraVbHffGMmjx9OhxEMrwGXwPisoIrNFdAAzhDuege6zfE8-pAxqji_HCoN2OMKjP0fBZg1gwpebLkb4gy5GxOXyOLE7hh-hnjMl_g3tl2GEMTIFhiCpimPBtYx9LUW6yyoOR6vOBxeJgTcKgGtfyKkqXd5gyK-pkIcwXBzMVBnlrGWjLGkSQ8K2FXU-frpT21UWq11xxQs6ShGfrGXzhPy1wA08sN1guobRWI7ylKRN8nc1A4IoaLaLUVKzZWsiICY-S8ZnrJ_6XBW66jn1DRZVewlUu2H4GK4G3rWObqlppJTOa7pCvU5rB109amOTbrNeKG1aseTYtrGYvMOV9pRpZu-gwqBM1mow2MuErjsloRkWJx0nT8Zzf7Ps2QHhrGpGqhFWMXU3eVUg06Xqulbl9vte-GMzBZW5TQSM9juqmxpkB0zPtdTW74sJjYPAYXPMtGsPbt91xr5wY0jclFbOTiuK57377xSpoO6NRVSu-shbw2VzjwZUsEAwX6-YhcccW0rtf__j7r9-hkmtPFbio64jBfG5WOW4Ltl4380n-pMvRt0y1hXJJQQD3jD-dQlIWuoMbir0knbtoMMoRUCg8x_O9LogPjuc8yvED8_6nzjtbERYDoeoDZs_egJf6AFa1SN913_er42lmW-2e68apDT3g81KP1sSqUJNVOgE-PutsqpIdUrI4r5phQEkjPrBjfxydjFkzUXUCdzFFr-Z-4CvpsCu4qVuTunc-Vm8Xax6Yiuv2SeRjMos102e6RuLp63fVyqKeLHL7bbghnQq6d80mEN1MwLt22ASc6KYLwuo7xsBpOciJrjrb3mcup70RBVJZZHqm3X5z3543Lzd9mVK5A1VGOtERFgoUYvV428OWiRLVrLJjkd8oep6O1GANArBwpUD_vP-pA-S6xJ4ADQJo3im9jflPyNXps6szRK96EpyHIViny2iO2fj7cWwL6uOz7AVQD0S0zgMyrfOwVOvcj2t7d6NPo84pzzqnROt8ENOax8V9Gdbeu4OQ66Pe47yQufIG7-a_bseqnyYawqzbsnq-JcsggA5f1s8br9uadSi3p-RH-4FNu9zi9QnzpNmjk19RPvV8n3q-_0nP1_vN4KO3ezfHfwC8rN4sFhcAAA==";mt(u,{post:Tt,children:(o,l)=>{var d=It(),v=ce(d),m=t(v);e(t(m)),i(),a(m);var w=e(e(m,!0)),me=t(w),fe=e(e(me,!0)),ge=e(e(fe,!0));e(e(ge,!0)),i(),a(w);var be=e(e(w,!0)),Y=e(e(be,!0));r(Y,{content:`<script>
  let count = 1;
<\/script>

<button on:click={() => count++}>
  {count}
</button>`});var ye=e(e(Y,!0)),we=e(e(ye,!0)),_=e(e(we,!0)),_e=t(_);e(e(_e,!0)),a(_);var Ae=e(e(_,!0)),A=e(e(Ae,!0)),Se=e(t(A));e(e(Se,!0)),i(),a(A);var N=e(e(A,!0)),ke=e(t(N));e(e(ke,!0)),i(),a(N),a(v);var S=e(e(v,!0)),xe=t(S),k=e(e(xe,!0));e(t(k)),i(),a(k);var D=e(e(k,!0));r(D,{lang:"ts",content:`let a = 1;
$: b = a * 2;
setTimeout(() => {
	console.log(b); // 2
	a = 3;
	console.log(b); // 2 ???
});
`});var x=e(e(D,!0));t(x),a(x);var I=e(e(x,!0)),Ie=e(t(I)),Te=e(e(Ie,!0)),Re=e(e(Te,!0)),Ge=e(e(Re,!0)),Pe=e(e(Ge,!0)),Ve=e(e(Pe,!0)),ze=e(e(Ve,!0));e(e(ze,!0)),i(),a(I);var $=e(e(I,!0));r($,{lang:"ts",content:`let a = 1;
$: b = a * 2;
console.log(b); // undefined ???
`});var T=e(e($,!0));t(T),a(T);var je=e(e(T,!0)),ee=e(e(je,!0));r(ee,{lang:"ts",content:`let a = $state(1);
const b = $derived(a * 2);
console.log(b); // 2 :)
setTimeout(() => {
	a = 3;
	console.log(b); // 6 :)
});
`});var R=e(e(ee,!0));t(R),a(R);var G=e(e(R,!0));e(t(G)),i(),a(G);var Fe=e(e(G,!0));e(e(Fe,!0)),a(S);var P=e(e(S,!0)),Oe=t(P),V=e(e(Oe,!0)),Me=e(t(V)),Ue=e(e(Me,!0)),Ke=e(e(Ue,!0));e(e(Ke,!0)),i(),a(V);var te=e(e(V,!0));r(te,{content:`// pseudo-code
firstname = 'Alan'
lastname  = 'Turing'
fullname  = firstname + ' ' + lastname
firstname = 'Barbara' // does code see 'Barbara Turing' here? if so it's a glitch
lastname  = 'Liskov'
`,lang:"ts"});var Le=e(e(te,!0)),z=e(e(Le,!0)),Be=t(z),Je=e(e(Be,!0));e(e(Je,!0)),a(z);var j=e(e(z,!0)),Ee=e(t(j));he(Ee,{number:1}),i(),a(j);var F=e(e(j,!0));e(t(F)),i(),a(F);var We=e(e(F,!0)),O=e(e(We,!0)),Xe=e(t(O)),Ce=e(e(Xe,!0));he(Ce,{number:2}),i(),a(O);var ae=e(e(O,!0)),He=e(t(ae)),Ze=e(e(He,!0));e(e(Ze,!0)),i(),a(ae),a(P);var M=e(e(P,!0)),qe=t(M),U=e(e(qe,!0)),Qe=t(U);p(Qe,"href",s),i(),a(U);var K=e(e(U,!0));e(t(K)),i(),a(K);var Ye=e(e(K,!0)),Ne=e(e(Ye,!0)),ie=e(e(Ne,!0));r(ie,{lang:"ts",content:"$: ab = a + ' ' + b;"});var De=e(e(ie,!0)),se=e(e(De,!0));r(se,{lang:"ts",content:"const ab = derived([a, b], ([$a, $b]) => $a + ' ' + $b);"});var $e=e(e(se,!0)),re=e(e($e,!0));r(re,{lang:"ts",content:"const ab = $derived(a + ' ' + b);"});var L=e(e(re,!0)),et=t(L);ft(et,{summary:f=>{i();var n=At();c(f,n)},children:(f,n)=>{var b=St(),Q=ce(b),y=e(e(Q,!0));r(y,{lang:"ts",content:"$: ab = log('deriving: ' + a + ' ' + b) || a + ' ' + b;"});var pt=e(e(y,!0)),de=e(e(pt,!0));r(de,{lang:"ts",content:`const ab = derived([a, b], ([$a, $b]) => {
	const $ab = $a + ' ' + $b;
	log('deriving: ' + $ab);
	return $ab;
});`});var ut=e(e(de,!0)),vt=e(e(ut,!0));r(vt,{lang:"ts",content:`const ab = $derived.by(() => {
	log('deriving: ' + a + ' ' + b);
	return a + ' ' + b;
})`}),c(f,b)},$$slots:{default:!0}}),a(L);var B=e(e(L,!0)),tt=e(t(B));p(tt,"href",s),i(),a(B);var J=e(e(B,!0)),E=t(J),at=e(t(E));e(e(at,!0)),i(),a(E);var W=e(e(E,!0));e(t(W)),i(),a(W);var X=e(e(W,!0)),it=e(t(X));e(e(it,!0)),i(),a(X);var C=e(e(X,!0)),st=e(t(C));e(e(st,!0)),i(),a(C);var oe=e(e(C,!0));e(t(oe)),i(),a(oe),a(J);var rt=e(e(J,!0));e(e(rt,!0)),a(M);var H=e(e(M,!0)),ot=t(H),Z=e(e(ot,!0)),nt=e(t(Z));e(e(nt,!0)),i(),a(Z);var q=e(e(Z,!0));e(t(q)),i(),a(q);var lt=e(e(q,!0)),dt=e(e(lt,!0));e(e(dt,!0)),a(H);var ne=e(e(H,!0)),ct=t(ne),le=e(e(ct,!0));pe(le,{number:1,children:(g,f)=>{var n=kt(),b=e(t(n)),Q=e(e(b,!0)),y=e(e(Q,!0));e(e(y,!0)),i(),a(n),c(g,n)},$$slots:{default:!0}});var ht=e(e(le,!0));pe(ht,{number:2,children:(g,f)=>{var n=xt();e(t(n)),i(),a(n),c(g,n)},$$slots:{default:!0}}),a(ne),c(o,d)},$$slots:{default:!0}})}export{Mt as component};
