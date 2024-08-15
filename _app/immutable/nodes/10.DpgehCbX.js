import{c as j,a as $,t as L,w as X,f as Y,V,r as C,b as K,s as A,W as se}from"../chunks/disclose-version.B1zrP28X.js";import{p as Q,t as B,b as ee,k as w,m as O,x as ie,z as H}from"../chunks/runtime.DYTKtxhX.js";import{p as Ae,L as we,s as ke,a as re}from"../chunks/package.xLK73N_i.js";import{B as de}from"../chunks/Breadcrumb.B4Wwa3tG.js";import{i as Z}from"../chunks/if.BqKfRXlQ.js";import{s as le,r as Se}from"../chunks/attributes.BzbUC27w.js";import{b as Ee}from"../chunks/input.DtfPdazN.js";import{h as $e}from"../chunks/html.BsUEGhb3.js";import{s as me,t as Te}from"../chunks/style.C8ZnVzF1.js";import{p as pe}from"../chunks/props.CTyPBPX5.js";var fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pe(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var be={exports:{}};(function(c){var g=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(o){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,f=0,m={},s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof v?new v(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++f}),a.__id},clone:function a(e,n){n=n||{};var r,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),n[i])return n[i];r={},n[i]=r;for(var u in e)e.hasOwnProperty(u)&&(r[u]=a(e[u],n));return r;case"Array":return i=s.util.objId(e),n[i]?n[i]:(r=[],n[i]=r,e.forEach(function(h,l){r[l]=a(h,n)}),r);default:return e}},getLanguage:function(a){for(;a;){var e=d.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(d,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==a)return e[n]}return null}},isActive:function(a,e,n){for(var r="no-"+e;a;){var i=a.classList;if(i.contains(e))return!0;if(i.contains(r))return!1;a=a.parentElement}return!!n}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(a,e){var n=s.util.clone(s.languages[a]);for(var r in e)n[r]=e[r];return n},insertBefore:function(a,e,n,r){r=r||s.languages;var i=r[a],u={};for(var h in i)if(i.hasOwnProperty(h)){if(h==e)for(var l in n)n.hasOwnProperty(l)&&(u[l]=n[l]);n.hasOwnProperty(h)||(u[h]=i[h])}var _=r[a];return r[a]=u,s.languages.DFS(s.languages,function(T,N){N===_&&T!=a&&(this[T]=u)}),u},DFS:function a(e,n,r,i){i=i||{};var u=s.util.objId;for(var h in e)if(e.hasOwnProperty(h)){n.call(e,h,e[h],r||h);var l=e[h],_=s.util.type(l);_==="Object"&&!i[u(l)]?(i[u(l)]=!0,a(l,n,null,i)):_==="Array"&&!i[u(l)]&&(i[u(l)]=!0,a(l,n,h,i))}}},plugins:{},highlightAll:function(a,e){s.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,n){var r={callback:n,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),s.hooks.run("before-all-elements-highlight",r);for(var i=0,u;u=r.elements[i++];)s.highlightElement(u,e===!0,r.callback)},highlightElement:function(a,e,n){var r=s.util.getLanguage(a),i=s.languages[r];s.util.setLanguage(a,r);var u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(u,r);var h=a.textContent,l={element:a,language:r,grammar:i,code:h};function _(N){l.highlightedCode=N,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),n&&n.call(l.element)}if(s.hooks.run("before-sanity-check",l),u=l.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code){s.hooks.run("complete",l),n&&n.call(l.element);return}if(s.hooks.run("before-highlight",l),!l.grammar){_(s.util.encode(l.code));return}if(e&&o.Worker){var T=new Worker(s.filename);T.onmessage=function(N){_(N.data)},T.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else _(s.highlight(l.code,l.grammar,l.language))},highlight:function(a,e,n){var r={code:a,grammar:e,language:n};if(s.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=s.tokenize(r.code,r.grammar),s.hooks.run("after-tokenize",r),v.stringify(s.util.encode(r.tokens),r.language)},tokenize:function(a,e){var n=e.rest;if(n){for(var r in n)e[r]=n[r];delete e.rest}var i=new F;return S(i,i.head,a),b(a,i,e,i.head,0),E(i)},hooks:{all:{},add:function(a,e){var n=s.hooks.all;n[a]=n[a]||[],n[a].push(e)},run:function(a,e){var n=s.hooks.all[a];if(!(!n||!n.length))for(var r=0,i;i=n[r++];)i(e)}},Token:v};o.Prism=s;function v(a,e,n,r){this.type=a,this.content=e,this.alias=n,this.length=(r||"").length|0}v.stringify=function a(e,n){if(typeof e=="string")return e;if(Array.isArray(e)){var r="";return e.forEach(function(_){r+=a(_,n)}),r}var i={type:e.type,content:a(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(i.classes,u):i.classes.push(u)),s.hooks.run("wrap",i);var h="";for(var l in i.attributes)h+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+h+">"+i.content+"</"+i.tag+">"};function k(a,e,n,r){a.lastIndex=e;var i=a.exec(n);if(i&&r&&i[1]){var u=i[1].length;i.index+=u,i[0]=i[0].slice(u)}return i}function b(a,e,n,r,i,u){for(var h in n)if(!(!n.hasOwnProperty(h)||!n[h])){var l=n[h];l=Array.isArray(l)?l:[l];for(var _=0;_<l.length;++_){if(u&&u.cause==h+","+_)return;var T=l[_],N=T.inside,ue=!!T.lookbehind,oe=!!T.greedy,ye=T.alias;if(oe&&!T.pattern.global){var Fe=T.pattern.toString().match(/[imsuy]*$/)[0];T.pattern=RegExp(T.pattern.source,Fe+"g")}for(var ce=T.pattern||T,P=r.next,D=i;P!==e.tail&&!(u&&D>=u.reach);D+=P.value.length,P=P.next){var R=P.value;if(e.length>a.length)return;if(!(R instanceof v)){var q=1,z;if(oe){if(z=k(ce,D,a,ue),!z||z.index>=a.length)break;var U=z.index,xe=z.index+z[0].length,M=D;for(M+=P.value.length;U>=M;)P=P.next,M+=P.value.length;if(M-=P.value.length,D=M,P.value instanceof v)continue;for(var G=P;G!==e.tail&&(M<xe||typeof G.value=="string");G=G.next)q++,M+=G.value.length;q--,R=a.slice(D,M),z.index-=D}else if(z=k(ce,0,R,ue),!z)continue;var U=z.index,W=z[0],ae=R.slice(0,U),ge=R.slice(U+W.length),te=D+R.length;u&&te>u.reach&&(u.reach=te);var J=P.prev;ae&&(J=S(e,J,ae),D+=ae.length),I(e,J,q);var _e=new v(h,N?s.tokenize(W,N):W,ye,W);if(P=S(e,J,_e),ge&&S(e,P,ge),q>1){var ne={cause:h+","+_,reach:te};b(a,e,n,P.prev,D,ne),u&&ne.reach>u.reach&&(u.reach=ne.reach)}}}}}}function F(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function S(a,e,n){var r=e.next,i={value:n,prev:e,next:r};return e.next=i,r.prev=i,a.length++,i}function I(a,e,n){for(var r=e.next,i=0;i<n&&r!==a.tail;i++)r=r.next;e.next=r,r.prev=e,a.length-=i}function E(a){for(var e=[],n=a.head.next;n!==a.tail;)e.push(n.value),n=n.next;return e}if(!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(a){var e=JSON.parse(a.data),n=e.language,r=e.code,i=e.immediateClose;o.postMessage(s.highlight(r,s.languages[n],n)),i&&o.close()},!1)),s;var y=s.util.currentScript();y&&(s.filename=y.src,y.hasAttribute("data-manual")&&(s.manual=!0));function p(){s.manual||s.highlightAll()}if(!s.manual){var x=document.readyState;x==="loading"||x==="interactive"&&y&&y.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return s}(g);c.exports&&(c.exports=t),typeof fe<"u"&&(fe.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(d,f){var m={};m["language-"+f]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[f]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};s["language-"+f]={pattern:/[\s\S]+/,inside:t.languages[f]};var v={};v[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",v)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(o,d){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:t.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(o){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+d.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var f=o.languages.markup;f&&(f.tag.addInlined("style","css"),f.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",d=function(y,p){return"✖ Error "+y+" while fetching file: "+p},f="✖ Error: File does not exist or is empty",m={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",v="loading",k="loaded",b="failed",F="pre[data-src]:not(["+s+'="'+k+'"]):not(['+s+'="'+v+'"])';function S(y,p,x){var a=new XMLHttpRequest;a.open("GET",y,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?p(a.responseText):a.status>=400?x(d(a.status,a.statusText)):x(f))},a.send(null)}function I(y){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(y||"");if(p){var x=Number(p[1]),a=p[2],e=p[3];return a?e?[x,Number(e)]:[x,void 0]:[x,x]}}t.hooks.add("before-highlightall",function(y){y.selector+=", "+F}),t.hooks.add("before-sanity-check",function(y){var p=y.element;if(p.matches(F)){y.code="",p.setAttribute(s,v);var x=p.appendChild(document.createElement("CODE"));x.textContent=o;var a=p.getAttribute("data-src"),e=y.language;if(e==="none"){var n=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=m[n]||n}t.util.setLanguage(x,e),t.util.setLanguage(p,e);var r=t.plugins.autoloader;r&&r.loadLanguages(e),S(a,function(i){p.setAttribute(s,k);var u=I(p.getAttribute("data-range"));if(u){var h=i.split(/\r\n?|\n/g),l=u[0],_=u[1]==null?h.length:u[1];l<0&&(l+=h.length),l=Math.max(0,Math.min(l-1,h.length)),_<0&&(_+=h.length),_=Math.max(0,Math.min(_,h.length)),i=h.slice(l,_).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(l+1))}x.textContent=i,t.highlightElement(x)},function(i){p.setAttribute(s,b),x.textContent=i})}}),t.plugins.fileHighlight={highlight:function(p){for(var x=(p||document).querySelectorAll(F),a=0,e;e=x[a++];)t.highlightElement(e)}};var E=!1;t.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(be);var je=be.exports;const he=Pe(je);(function(c){c.languages.typescript=c.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),c.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete c.languages.typescript.parameter,delete c.languages.typescript["literal-property"];var g=c.languages.extend("typescript",{});delete g["class-name"],c.languages.typescript["class-name"].inside=g,c.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:g}}}}),c.languages.ts=c.languages.typescript})(Prism);const ve="(if|else if|await|then|catch|each|html|debug)";Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{[#/]each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/[#/]each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+ve+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+ve+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}});Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity;Prism.hooks.add("wrap",c=>{c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(g,t){const o={};o["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;const d={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};d["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};const f={};f[g]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,g),"i"),lookbehind:!0,greedy:!0,inside:d},Prism.languages.insertBefore("svelte","cdata",f)}});Prism.languages.svelte.tag.addInlined("style","css");Prism.languages.svelte.tag.addInlined("script","javascript");var Ce=L("<pre><code><!></code></pre>");function Ie(c,g){Q(g,!0);const t=pe(g,"lang",3,"svelte"),o=pe(g,"inline",3,!1),d=O(()=>t()===null?null:he.languages[t()]),f=O(()=>w(d)===null?null:g.content&&he.highlight(g.content,w(d),t())),m=O(()=>w(f)??g.content);var s=Ce();let v;var k=j(s);let b;var F=j(k);Z(F,()=>g.children,S=>{var I=X(),E=Y(I);me(E,()=>g.children,()=>w(m)),$(S,I)},S=>{var I=X(),E=Y(I);Z(E,()=>w(f)!==null,y=>{var p=X(),x=Y(p);$e(x,()=>w(f),!1,!1),$(y,p)},y=>{var p=V();B(()=>K(p,g.content)),$(y,p)},!0),$(S,I)}),C(k),C(s),B(()=>{v=le(s,v,{...g.pre_attrs},"svelte-1a6bj2n"),Te(s,"inline",o()),b=le(k,b,{...g.code_attrs},"svelte-1a6bj2n")}),$(c,s),ee()}var ze=L("📋",1),De=L('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),Le=L('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),Ne=L("<button><!><!><!></button>");function Me(c,g){Q(g,!0);let t=ie(!1),o=ie(!1);const d=async()=>{H(t,!1),H(o,!1);try{await navigator.clipboard.writeText(g.text)}catch{H(o,!0);return}H(t,!0)};var f=Ne();let m;var s=j(f);Z(s,()=>g.children,b=>{var F=X(),S=Y(F);me(S,()=>g.children,()=>w(t),()=>w(o)),$(b,F)},b=>{var F=ze();$(b,F)});var v=A(s);Z(v,()=>w(t),b=>{var F=De();$(b,F)});var k=A(v);Z(k,()=>w(o),b=>{var F=Le();$(b,F)}),C(f),B(()=>m=le(f,m,{...g.attrs,type:"button",class:g.classes??(g.children?void 0:"icon_button size_lg"),onclick:d},"svelte-rumh1g")),$(c,f),ee()}const Oe=c=>{const[g,t,o]=c.split(":").map(F=>F.trim()).reverse(),[d,f=null]=g.split("."),m=parseInt(d,10),s=f===null?NaN:parseInt(f.padEnd(3,"0"),10),v=Number.isNaN(s)?0:s,k=parseInt(o,10),b=parseInt(t,10);return Number.isNaN(m)&&Number.isNaN(v)?null:{hours:Number.isNaN(k)?0:k,minutes:Number.isNaN(b)?0:b,seconds:Number.isNaN(m)?0:m,ms:Number.isNaN(v)?0:v}},Re=({hours:c,minutes:g,seconds:t,ms:o})=>(c*60*60+g*60+t)*1e3+o;var Ze=L("null",1),Be=L('<div class="time_converter"><label><div class="title">Time converter</div> <input> <p>Paste or type in a time like <code>1:23:45.999</code>.</p></label> <div class="panel p_sm my_sm relative pr_xl7"><div class="size_xl"><!></div> <small class="block text_color_3">milliseconds</small> <div class="copy svelte-te2gam"><!></div></div> <!></div>');function Ge(c,g){Q(g,!0);let t=ie("");const o=O(()=>Oe(w(t))),d=O(()=>w(o)?Re(w(o)):null);var f=Be(),m=j(f),s=j(m),v=A(A(s,!0));Se(v);var k=A(A(v,!0));A(j(k)),se(),C(k),C(m);var b=A(A(m,!0)),F=j(b),S=j(F);Z(S,()=>w(d)!=null,e=>{var n=V();B(()=>K(n,w(d))),$(e,n)},e=>{var n=Ze();$(e,n)}),C(F);var I=A(A(F,!0)),E=A(A(I,!0)),y=j(E),p=O(()=>w(d)+"");Me(y,{get text(){return w(p)}}),C(E),C(b);var x=A(A(b,!0)),a=O(()=>`const time = ${JSON.stringify(w(o),null,"	")}`);Ie(x,{get content(){return w(a)},lang:"ts"}),C(f),Ee(v,()=>w(t),e=>H(t,e)),$(c,f),ee()}var He=L('<div class="mb_xl"><!></div>'),qe=L('<main class="width_md box mx_auto px_lg"><header><h1 class="my_xl3">Tools</h1> <div class="mb_xl5"><!></div></header> <section><!></section> <section class="box"><!></section></main>');function ta(c,g){Q(g,!0);const t=Ae(re,ke);var o=qe(),d=j(o),f=j(d),m=A(A(f,!0)),s=j(m);de(s,{children:(S,I)=>{se();var E=V();B(()=>K(E,re.glyph)),$(S,E)},$$slots:{default:!0}}),C(m),C(d);var v=A(A(d,!0)),k=j(v);Ge(k,{}),C(v);var b=A(A(v,!0)),F=j(b);we(F,{pkg:t,children:(S,I)=>{var E=He(),y=j(E);de(y,{children:(p,x)=>{se();var a=V();B(()=>K(a,re.glyph)),$(p,a)},$$slots:{default:!0}}),C(E),$(S,E)},$$slots:{default:!0}}),C(b),C(o),$(c,o),ee()}export{ta as component};
