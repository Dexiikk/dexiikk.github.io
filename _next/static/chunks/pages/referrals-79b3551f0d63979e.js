(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{640:function(e,t,a){"use strict";var r=a(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,i,n,s,l,c,d,u,p=!1;t||(t={}),n=t.debug||!1;try{if(l=r(),c=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(a){if(a.stopPropagation(),t.format){if(a.preventDefault(),void 0===a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e)}t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))}),document.body.appendChild(u),c.selectNodeContents(u),d.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(m){n&&console.error("unable to copy using clipboardData: ",m),n&&console.error("falling back to prompt"),a="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=a.replace(/#{\s*key\s*}/g,i),window.prompt(s,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(c):d.removeAllRanges()),u&&document.body.removeChild(u),l()}return p}},2841:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/referrals",function(){return a(1174)}])},1174:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return ev},default:function(){return ew}});var r=a(9815),o=a(5893),i=a(3848),n=a(7294);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",o="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+n+";":r+="f"==i[1]?p(n,i):i+"{"+p(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=p(n,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=p.p?p.p(i,n):i+":"+n+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},y=(e,t,a,r,o)=>{var i,n,s,l;let y=f(e),g=m[y]||(m[y]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(y));if(!m[g]){let h=y!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[g]=p(o?{["@keyframes "+g]:h}:h,a?"":"."+g)}let b=a&&m.g?m.g:null;return a&&(m.g=m[g]),i=m[g],n=t,b?n.data=n.data.replace(b,i):-1===n.data.indexOf(i)&&(n.data=r?i+n.data:n.data+i),g},g=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let n=i(a),s=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=s?"."+s:n&&"object"==typeof n?n.props?"":p(n,""):!1===n?"":n}return e+r+(null==i?"":i)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return y(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let b,x,v,w=h.bind({k:1});function C(e,t){let a=this||{};return function(){let r=arguments;function o(i,n){let s=Object.assign({},i),l=s.className||o.className;a.p=Object.assign({theme:x&&x()},s),a.o=/ *go\d+/.test(l),s.className=h.apply(a,r)+(l?" "+l:""),t&&(s.ref=n);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),b(c,s)}return t?t(o):o}}var E=e=>"function"==typeof e,k=(e,t)=>E(e)?e(t):e;let D,N;var O=(D=0,()=>(++D).toString()),j=()=>{if(void 0===N&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");N=!e||e.matches}return N},$=new Map,A=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),I({type:4,toastId:e})},1e3);$.set(e,t)},T=e=>{let t=$.get(e);t&&clearTimeout(t)},_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&T(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?_(e,{type:1,toast:a}):_(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?A(r):e.toasts.forEach(e=>{A(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},R=[],S={toasts:[],pausedAt:void 0},I=e=>{S=_(S,e),R.forEach(e=>{e(S)})},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,a]=(0,n.useState)(S);(0,n.useEffect)(()=>(R.push(a),()=>{let e=R.indexOf(a);e>-1&&R.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},L=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||O()}),M=e=>(t,a)=>{let r=L(t,e,a);return I({type:2,toast:r}),r.id},U=(e,t)=>M("blank")(e,t);U.error=M("error"),U.success=M("success"),U.loading=M("loading"),U.custom=M("custom"),U.dismiss=e=>{I({type:3,toastId:e})},U.remove=e=>I({type:4,toastId:e}),U.promise=(e,t,a)=>{let r=U.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(U.success(k(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{U.error(k(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var H,F,Z,G=(e,t)=>{I({type:1,toast:{id:e,height:t}})},Y=()=>{I({type:5,time:Date.now()})},K=e=>{let{toasts:t,pausedAt:a}=z(e);(0,n.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&U.dismiss(t.id);return}return setTimeout(()=>U.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,n.useCallback)(()=>{a&&I({type:6,time:Date.now()})},[a]),o=(0,n.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},n=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),s=n.findIndex(t=>t.id===e.id),l=n.filter((e,t)=>t<s&&e.visible).length;return n.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:G,startPause:Y,endPause:r,calculateOffset:o}}},Q=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,W=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,X=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,q=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=C("div")`
  position: absolute;
`,J=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,V=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ee=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(V,null,t):t:"blank"===a?null:n.createElement(J,null,n.createElement(X,{...r}),"loading"!==a&&n.createElement(B,null,"error"===a?n.createElement(W,{...r}):n.createElement(q,{...r})))},et=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eo=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[et(a),ea(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=n.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(ee,{toast:e}),s=n.createElement(eo,{...e.ariaProps},k(e.message,e));return n.createElement(er,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:i,message:s}):n.createElement(n.Fragment,null,i,s))});H=n.createElement,p.p=void 0,b=H,x=void 0,v=void 0;var es=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let i=n.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return n.createElement("div",{ref:i,className:t,style:a},o)},el=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},ec=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=K(a);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let i=a.position||t,s=c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}),l=el(i,s);return n.createElement(es,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ec:"",style:l},"custom"===a.type?k(a.message,a):o?o(a):n.createElement(en,{toast:a,position:i}))}))},eu=a(640),ep=a.n(eu),em=a(1954),ef=a(4829),ey=a(425),eg=a(5786),eh=a(9035),eb=a(8025),ex=a(2536),ev=!0;function ew(e){var t=e.referrals,a=(0,ey.F)().theme,s=(0,ef.Z)("(prefers-color-scheme: dark)",!1),l=(0,n.useMemo)(function(){switch(a){case ex.Q2.SYSTEM:return!!s;case ex.Q2.LIGHT:return!1;case ex.Q2.DARK:return!0}},[s,a]);return 0===t.length?(0,o.jsx)(eb.mf,{title:"There's nothing here",message:"Sorry, there are no referral links for now. Check back later!"}):(0,o.jsxs)(eh.A.Default,{seo:{title:"WillyJL ─ Referrals"},children:[(0,o.jsx)(ed,{toastOptions:{position:"top-center",style:{background:l?eg.O9.gray[900]:eg.O9.gray[50],borderColor:l?eg.O9.gray[800]:eg.O9.gray[100],borderWidth:"2px",color:l?null===eg.O9||void 0===eg.O9?void 0:eg.O9.gray[400]:null===eg.O9||void 0===eg.O9?void 0:eg.O9.gray[700]}}}),(0,o.jsx)("div",{className:"my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8",children:(0,o.jsx)("div",{className:"relative max-w-xl mx-auto",children:(0,o.jsx)(eb.aV.W,{children:t.map(function(e,t){return(0,o.jsx)(eb.rs,{animation:{y:[50,0],opacity:[0,1]},transition:{delay:.1*t},children:(0,o.jsx)(eb.aV.c,{actions:(0,r.Z)(e.code?[{type:ex.GY.BUTTON,icon:"feather:hash",label:"Copy Referral Code",onClick:function(){ep()(e.code),U.success("Copied referral code")}},]:[]).concat((0,r.Z)(e.url?[{type:ex.GY.LINK,icon:"feather:external-link",label:"Referral Link",href:e.url,onClick:function(){return i.Z.track(e.name.toLowerCase(),{code:e.code,type:"referral",url:e.url})}},]:[]),(0,r.Z)(e.homepage?[{type:ex.GY.LINK,icon:"feather:home",label:"".concat(e.name," homepage"),href:e.homepage},]:[])),description:e.description,icon:e.icon,iconColor:e.color,title:e.name,children:e.bonus&&(0,o.jsx)("div",{className:"m-2 mt-0",children:(0,o.jsxs)(eb.DR.q,{className:"flex items-center justify-center w-full md:pb-2 bg-primary-900 bg-opacity-25 saturate-200 text-sm text-primary-500 font-semibold rounded-lg",children:[(0,o.jsx)(em.JO,{className:"mt-0.5 mr-2",icon:"feather:award"}),e.bonus]})})})},t)})})})})]})}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2841)}),_N_E=e.O()}]);