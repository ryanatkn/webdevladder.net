import{e as C,t as z,f as U}from"./disclose-version.Dn2LuS9l.js";import{G as K,J as Z,O as q,K as $,I as p,Q as ee}from"./runtime.WHH172tf.js";import{a as N}from"./render.DakY9b14.js";import{i as te}from"./if.f6iZzexO.js";import{s as ne,b as re}from"./string.va89mA_g.js";const I=6048e5,ae=864e5,yt=43200,bt=1440,H=Symbol.for("constructDateFrom");function y(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&H in t?t[H](e):t instanceof Date?new t.constructor(e):new Date(e)}function l(t,e){return y(e||t,t)}let ie={};function W(){return ie}function v(t,e){var c,o,d,m;const n=W(),r=(e==null?void 0:e.weekStartsOn)??((o=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:o.weekStartsOn)??n.weekStartsOn??((m=(d=n.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,a=l(t,e==null?void 0:e.in),i=a.getDay(),u=(i<r?7:0)+i-r;return a.setDate(a.getDate()-u),a.setHours(0,0,0,0),a}function D(t,e){return v(t,{...e,weekStartsOn:1})}function R(t,e){const n=l(t,e==null?void 0:e.in),r=n.getFullYear(),a=y(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=D(a),u=y(n,0);u.setFullYear(r,0,4),u.setHours(0,0,0,0);const c=D(u);return n.getTime()>=i.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function Q(t){const e=l(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function ue(t,...e){const n=y.bind(null,t||e.find(r=>typeof r=="object"));return e.map(n)}function X(t,e){const n=l(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function se(t,e,n){const[r,a]=ue(n==null?void 0:n.in,t,e),i=X(r),u=X(a),c=+i-Q(i),o=+u-Q(u);return Math.round((c-o)/ae)}function ce(t,e){const n=R(t,e),r=y((e==null?void 0:e.in)||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),D(r)}function oe(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function de(t){return!(!oe(t)&&typeof t!="number"||isNaN(+l(t)))}function fe(t,e){const n=l(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const me={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},he=(t,e,n)=>{let r;const a=me[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const le={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ge={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},we={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ye={date:Y({formats:le,defaultWidth:"full"}),time:Y({formats:ge,defaultWidth:"full"}),dateTime:Y({formats:we,defaultWidth:"full"})},be={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Pe=(t,e,n,r)=>be[t];function k(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const u=t.defaultFormattingWidth||t.defaultWidth,c=n!=null&&n.width?String(n.width):u;a=t.formattingValues[c]||t.formattingValues[u]}else{const u=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[u]}const i=t.argumentCallback?t.argumentCallback(e):e;return a[i]}}const Me={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Oe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ke={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ve={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},De={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},We=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Se={ordinalNumber:We,era:k({values:Me,defaultWidth:"wide"}),quarter:k({values:Oe,defaultWidth:"wide",argumentCallback:t=>t-1}),month:k({values:ke,defaultWidth:"wide"}),day:k({values:xe,defaultWidth:"wide"}),dayPeriod:k({values:ve,defaultWidth:"wide",formattingValues:De,defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;const u=i[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],o=Array.isArray(c)?Te(c,g=>g.test(u)):Ye(c,g=>g.test(u));let d;d=t.valueCallback?t.valueCallback(o):o,d=n.valueCallback?n.valueCallback(d):d;const m=e.slice(u.length);return{value:d,rest:m}}}function Ye(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Te(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function Fe(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],i=e.match(t.parsePattern);if(!i)return null;let u=t.valueCallback?t.valueCallback(i[0]):i[0];u=n.valueCallback?n.valueCallback(u):u;const c=e.slice(a.length);return{value:u,rest:c}}}const Ee=/^(\d+)(th|st|nd|rd)?/i,_e=/\d+/i,Ce={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qe={any:[/^b/i,/^(a|c)/i]},Ne={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},He={any:[/1/i,/2/i,/3/i,/4/i]},Qe={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Xe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ge={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Le={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},je={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Be={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ae={ordinalNumber:Fe({matchPattern:Ee,parsePattern:_e,valueCallback:t=>parseInt(t,10)}),era:x({matchPatterns:Ce,defaultMatchWidth:"wide",parsePatterns:qe,defaultParseWidth:"any"}),quarter:x({matchPatterns:Ne,defaultMatchWidth:"wide",parsePatterns:He,defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:Qe,defaultMatchWidth:"wide",parsePatterns:Xe,defaultParseWidth:"any"}),day:x({matchPatterns:Ge,defaultMatchWidth:"wide",parsePatterns:Le,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:je,defaultMatchWidth:"any",parsePatterns:Be,defaultParseWidth:"any"})},Ie={code:"en-US",formatDistance:he,formatLong:ye,formatRelative:Pe,localize:Se,match:Ae,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Re(t,e){const n=l(t,e==null?void 0:e.in);return se(n,fe(n))+1}function Ve(t,e){const n=l(t,e==null?void 0:e.in),r=+D(n)-+ce(n);return Math.round(r/I)+1}function V(t,e){var m,g,M,O;const n=l(t,e==null?void 0:e.in),r=n.getFullYear(),a=W(),i=(e==null?void 0:e.firstWeekContainsDate)??((g=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(M=a.locale)==null?void 0:M.options)==null?void 0:O.firstWeekContainsDate)??1,u=y((e==null?void 0:e.in)||t,0);u.setFullYear(r+1,0,i),u.setHours(0,0,0,0);const c=v(u,e),o=y((e==null?void 0:e.in)||t,0);o.setFullYear(r,0,i),o.setHours(0,0,0,0);const d=v(o,e);return+n>=+c?r+1:+n>=+d?r:r-1}function Je(t,e){var c,o,d,m;const n=W(),r=(e==null?void 0:e.firstWeekContainsDate)??((o=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:o.firstWeekContainsDate)??n.firstWeekContainsDate??((m=(d=n.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,a=V(t,e),i=y((e==null?void 0:e.in)||t,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),v(i,e)}function ze(t,e){const n=l(t,e==null?void 0:e.in),r=+v(n,e)-+Je(n,e);return Math.round(r/I)+1}function s(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const w={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return s(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):s(n+1,2)},d(t,e){return s(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return s(t.getHours()%12||12,e.length)},H(t,e){return s(t.getHours(),e.length)},m(t,e){return s(t.getMinutes(),e.length)},s(t,e){return s(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return s(a,e.length)}},P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},G={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return w.y(t,e)},Y:function(t,e,n,r){const a=V(t,r),i=a>0?a:1-a;if(e==="YY"){const u=i%100;return s(u,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):s(i,e.length)},R:function(t,e){const n=R(t);return s(n,e.length)},u:function(t,e){const n=t.getFullYear();return s(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return s(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return w.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=ze(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):s(a,e.length)},I:function(t,e,n){const r=Ve(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):s(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):w.d(t,e)},D:function(t,e,n){const r=Re(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):s(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return s(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return s(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return s(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=P.noon:r===0?a=P.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=P.evening:r>=12?a=P.afternoon:r>=4?a=P.morning:a=P.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return w.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):w.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):s(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):w.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):w.s(t,e)},S:function(t,e){return w.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return j(r);case"XXXX":case"XX":return b(r);case"XXXXX":case"XXX":default:return b(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return j(r);case"xxxx":case"xx":return b(r);case"xxxxx":case"xxx":default:return b(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(r,":");case"OOOO":default:return"GMT"+b(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(r,":");case"zzzz":default:return"GMT"+b(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return s(r,e.length)},T:function(t,e,n){return s(+t,e.length)}};function L(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return i===0?n+String(a):n+String(a)+e+s(i,2)}function j(t,e){return t%60===0?(t>0?"-":"+")+s(Math.abs(t)/60,2):b(t,e)}function b(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=s(Math.trunc(r/60),2),i=s(r%60,2);return n+a+e+i}const B=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},J=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Ue=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return B(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",B(r,e)).replace("{{time}}",J(a,e))},Ke={p:J,P:Ue},Ze=/^D+$/,$e=/^Y+$/,pe=["D","DD","YY","YYYY"];function et(t){return Ze.test(t)}function tt(t){return $e.test(t)}function nt(t,e,n){const r=rt(t,e,n);if(console.warn(r),pe.includes(t))throw new RangeError(r)}function rt(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const at=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,it=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ut=/^'([^]*?)'?$/,st=/''/g,ct=/[a-zA-Z]/;function ot(t,e,n){var m,g,M,O,T,F,E,_;const r=W(),a=(n==null?void 0:n.locale)??r.locale??Ie,i=(n==null?void 0:n.firstWeekContainsDate)??((g=(m=n==null?void 0:n.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??r.firstWeekContainsDate??((O=(M=r.locale)==null?void 0:M.options)==null?void 0:O.firstWeekContainsDate)??1,u=(n==null?void 0:n.weekStartsOn)??((F=(T=n==null?void 0:n.locale)==null?void 0:T.options)==null?void 0:F.weekStartsOn)??r.weekStartsOn??((_=(E=r.locale)==null?void 0:E.options)==null?void 0:_.weekStartsOn)??0,c=l(t,n==null?void 0:n.in);if(!de(c))throw new RangeError("Invalid time value");let o=e.match(it).map(h=>{const f=h[0];if(f==="p"||f==="P"){const S=Ke[f];return S(h,a.formatLong)}return h}).join("").match(at).map(h=>{if(h==="''")return{isToken:!1,value:"'"};const f=h[0];if(f==="'")return{isToken:!1,value:dt(h)};if(G[f])return{isToken:!0,value:h};if(f.match(ct))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:h}});a.localize.preprocessor&&(o=a.localize.preprocessor(c,o));const d={firstWeekContainsDate:i,weekStartsOn:u,locale:a};return o.map(h=>{if(!h.isToken)return h.value;const f=h.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&tt(f)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&et(f))&&nt(f,e,String(t));const S=G[f[0]];return S(c,f,a.localize,d)}).join("")}function dt(t){const e=t.match(ut);return e?e[1].replace(st,"'"):t}const A=t=>ot(typeof t=="string"?new Date(t):t,"PP"),Pt=(t,e)=>ne(t,re(e,"/"));var ft=z(" <!>",1);function Mt(t,e){K(e,!0),ee();var n=ft(),r=Z(n,!0);q(()=>N(r,A(e.item.date_published||e.item.date_modified)));var a=$(r);{var i=u=>{var c=U();q(()=>N(c,`,
	updated ${A(e.item.date_modified)??""}`)),C(u,c)};te(a,u=>{e.item.date_published&&e.item.date_modified&&e.item.date_published!==e.item.date_modified&&u(i)})}C(t,n),p()}export{Mt as F,l as a,yt as b,W as c,Ie as e,ot as f,Q as g,bt as m,ue as n,Pt as t};