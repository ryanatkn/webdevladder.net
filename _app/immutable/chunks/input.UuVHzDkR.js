import{u as o,b as n,h as u}from"./runtime.CdcJ3TD1.js";import{l as h}from"./disclose-version.tiXKnEBk.js";function m(e,a,v=a){h(e,"input",l=>{var r=l?e.defaultValue:e.value;if(r=c(e)?f(r):r,v(r),r!==(r=a())){var s=e.selectionStart,d=e.selectionEnd;e.value=r??"",d!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(d,e.value.length))}}),(u&&e.defaultValue!==e.value||o(a)==null&&e.value)&&v(c(e)?f(e.value):e.value),n(()=>{var l=a();c(e)&&l===f(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function b(e,a,v=a){h(e,"change",l=>{var r=l?e.defaultChecked:e.checked;v(r)}),(u&&e.defaultChecked!==e.checked||o(a)==null)&&v(e.checked),n(()=>{var l=a();e.checked=!!l})}function c(e){var a=e.type;return a==="number"||a==="range"}function f(e){return e===""?null:+e}export{b as a,m as b};
