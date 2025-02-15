const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainLayout-CWx1Ygbz.js","assets/QBtn-CDJIcIQw.js","assets/use-quasar-CZgfwtiR.js","assets/use-timeout-BIILnQ3A.js","assets/QSeparator-q9QxPffU.js","assets/IndexPage-B16sgscH.js","assets/QPage-DHBolHvo.js","assets/LoginPage-MKYXXc7d.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LoginPage-CqGYZqWd.css","assets/ContactUs-hKwR9PXM.js","assets/ContactUs-Bl6lDcRN.css","assets/ErrorNotFound-DPUX6QuO.js"])))=>i.map(i=>d[i]);
const nu=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),ru=function(e){return"/"+e},Vi={},vt=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(n.map(c=>{if(c=ru(c),c in Vi)return;Vi[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":nu,l||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ii(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const oe={},sn=[],Ye=()=>{},su=()=>!1,Br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),oi=e=>e.startsWith("onUpdate:"),pe=Object.assign,ai=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},iu=Object.prototype.hasOwnProperty,te=(e,t)=>iu.call(e,t),j=Array.isArray,on=e=>er(e)==="[object Map]",Pa=e=>er(e)==="[object Set]",ou=e=>er(e)==="[object RegExp]",q=e=>typeof e=="function",ue=e=>typeof e=="string",Mt=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Oa=e=>(le(e)||q(e))&&q(e.then)&&q(e.catch),ka=Object.prototype.toString,er=e=>ka.call(e),au=e=>er(e).slice(8,-1),xa=e=>er(e)==="[object Object]",ci=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},cu=/-(\w)/g,Le=jr(e=>e.replace(cu,(t,n)=>n?n.toUpperCase():"")),lu=/\B([A-Z])/g,Xt=jr(e=>e.replace(lu,"-$1").toLowerCase()),Vr=jr(e=>e.charAt(0).toUpperCase()+e.slice(1)),is=jr(e=>e?`on${Vr(e)}`:""),kt=(e,t)=>!Object.is(e,t),an=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Na=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ks=e=>{const t=parseFloat(e);return isNaN(t)?e:t},uu=e=>{const t=ue(e)?Number(e):NaN;return isNaN(t)?e:t};let Wi;const Wr=()=>Wi||(Wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function li(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ue(r)?pu(r):li(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ue(e)||le(e))return e}const fu=/;(?![^(]*\))/g,du=/:([^]+)/,hu=/\/\*[^]*?\*\//g;function pu(e){const t={};return e.replace(hu,"").split(fu).forEach(n=>{if(n){const r=n.split(du);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ui(e){let t="";if(ue(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=ui(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mu=ii(gu);function Ma(e){return!!e||e===""}const Da=e=>!!(e&&e.__v_isRef===!0),_u=e=>ue(e)?e:e==null?"":j(e)||le(e)&&(e.toString===ka||!q(e.toString))?Da(e)?_u(e.value):JSON.stringify(e,La,2):String(e),La=(e,t)=>Da(t)?La(e,t.value):on(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[os(r,i)+" =>"]=s,n),{})}:Pa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>os(n))}:Mt(t)?os(t):le(t)&&!j(t)&&!xa(t)?String(t):t,os=(e,t="")=>{var n;return Mt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class yu{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bu(){return Oe}let ce;const as=new WeakSet;class Ua{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,as.has(this)&&(as.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$a(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zi(this),Ha(this);const t=ce,n=Fe;ce=this,Fe=!0;try{return this.fn()}finally{Ba(this),ce=t,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)hi(t);this.deps=this.depsTail=void 0,zi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?as.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xs(this)&&this.run()}get dirty(){return xs(this)}}let Fa=0,kn,xn;function $a(e,t=!1){if(e.flags|=8,t){e.next=xn,xn=e;return}e.next=kn,kn=e}function fi(){Fa++}function di(){if(--Fa>0)return;if(xn){let t=xn;for(xn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;kn;){let t=kn;for(kn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ha(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ba(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hi(r),vu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function xs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ja(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ja(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Bn))return;e.globalVersion=Bn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!xs(e)){e.flags&=-3;return}const n=ce,r=Fe;ce=e,Fe=!0;try{Ha(e);const s=e.fn(e._value);(t.version===0||kt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ce=n,Fe=r,Ba(e),e.flags&=-3}}function hi(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hi(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function vu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Fe=!0;const Va=[];function Dt(){Va.push(Fe),Fe=!1}function Lt(){const e=Va.pop();Fe=e===void 0?!0:e}function zi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let Bn=0;class wu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!ce||!Fe||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new wu(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,Wa(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(t){this.version++,Bn++,this.notify(t)}notify(t){fi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{di()}}}function Wa(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Wa(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ns=new WeakMap,Kt=Symbol(""),Ms=Symbol(""),jn=Symbol("");function _e(e,t,n){if(Fe&&ce){let r=Ns.get(e);r||Ns.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new pi),s.map=r,s.key=n),s.track()}}function ot(e,t,n,r,s,i){const o=Ns.get(e);if(!o){Bn++;return}const a=c=>{c&&c.trigger()};if(fi(),t==="clear")o.forEach(a);else{const c=j(e),l=c&&ci(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===jn||!Mt(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(jn)),t){case"add":c?l&&a(o.get("length")):(a(o.get(Kt)),on(e)&&a(o.get(Ms)));break;case"delete":c||(a(o.get(Kt)),on(e)&&a(o.get(Ms)));break;case"set":on(e)&&a(o.get(Kt));break}}di()}function en(e){const t=X(e);return t===e?t:(_e(t,"iterate",jn),$e(e)?t:t.map(ve))}function gi(e){return _e(e=X(e),"iterate",jn),e}const Eu={__proto__:null,[Symbol.iterator](){return cs(this,Symbol.iterator,ve)},concat(...e){return en(this).concat(...e.map(t=>j(t)?en(t):t))},entries(){return cs(this,"entries",e=>(e[1]=ve(e[1]),e))},every(e,t){return nt(this,"every",e,t,void 0,arguments)},filter(e,t){return nt(this,"filter",e,t,n=>n.map(ve),arguments)},find(e,t){return nt(this,"find",e,t,ve,arguments)},findIndex(e,t){return nt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return nt(this,"findLast",e,t,ve,arguments)},findLastIndex(e,t){return nt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return nt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ls(this,"includes",e)},indexOf(...e){return ls(this,"indexOf",e)},join(e){return en(this).join(e)},lastIndexOf(...e){return ls(this,"lastIndexOf",e)},map(e,t){return nt(this,"map",e,t,void 0,arguments)},pop(){return Tn(this,"pop")},push(...e){return Tn(this,"push",e)},reduce(e,...t){return Ki(this,"reduce",e,t)},reduceRight(e,...t){return Ki(this,"reduceRight",e,t)},shift(){return Tn(this,"shift")},some(e,t){return nt(this,"some",e,t,void 0,arguments)},splice(...e){return Tn(this,"splice",e)},toReversed(){return en(this).toReversed()},toSorted(e){return en(this).toSorted(e)},toSpliced(...e){return en(this).toSpliced(...e)},unshift(...e){return Tn(this,"unshift",e)},values(){return cs(this,"values",ve)}};function cs(e,t,n){const r=gi(e),s=r[t]();return r!==e&&!$e(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Iu=Array.prototype;function nt(e,t,n,r,s,i){const o=gi(e),a=o!==e&&!$e(e),c=o[t];if(c!==Iu[t]){const f=c.apply(e,i);return a?ve(f):f}let l=n;o!==e&&(a?l=function(f,p){return n.call(this,ve(f),p,e)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Ki(e,t,n,r){const s=gi(e);let i=n;return s!==e&&($e(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,ve(a),c,e)}),s[t](i,...r)}function ls(e,t,n){const r=X(e);_e(r,"iterate",jn);const s=r[t](...n);return(s===-1||s===!1)&&yi(n[0])?(n[0]=X(n[0]),r[t](...n)):s}function Tn(e,t,n=[]){Dt(),fi();const r=X(e)[t].apply(e,n);return di(),Lt(),r}const Su=ii("__proto__,__v_isRef,__isVue"),za=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mt));function Tu(e){Mt(e)||(e=String(e));const t=X(this);return _e(t,"has",e),t.hasOwnProperty(e)}class Ka{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Du:Ya:i?Ja:Ga).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=j(t);if(!s){let c;if(o&&(c=Eu[n]))return c;if(n==="hasOwnProperty")return Tu}const a=Reflect.get(t,n,ye(t)?t:r);return(Mt(n)?za.has(n):Su(n))||(s||_e(t,"get",n),i)?a:ye(a)?o&&ci(n)?a:a.value:le(a)?s?Qa(a):En(a):a}}class qa extends Ka{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Gt(i);if(!$e(r)&&!Gt(r)&&(i=X(i),r=X(r)),!j(t)&&ye(i)&&!ye(r))return c?!1:(i.value=r,!0)}const o=j(t)&&ci(n)?Number(n)<t.length:te(t,n),a=Reflect.set(t,n,r,ye(t)?t:s);return t===X(s)&&(o?kt(r,i)&&ot(t,"set",n,r):ot(t,"add",n,r)),a}deleteProperty(t,n){const r=te(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ot(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Mt(n)||!za.has(n))&&_e(t,"has",n),r}ownKeys(t){return _e(t,"iterate",j(t)?"length":Kt),Reflect.ownKeys(t)}}class Cu extends Ka{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Au=new qa,Ru=new Cu,Pu=new qa(!0);const Ds=e=>e,ur=e=>Reflect.getPrototypeOf(e);function Ou(e,t,n){return function(...r){const s=this.__v_raw,i=X(s),o=on(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?Ds:t?Ls:ve;return!t&&_e(i,"iterate",c?Ms:Kt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function fr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ku(e,t){const n={get(s){const i=this.__v_raw,o=X(i),a=X(s);e||(kt(s,a)&&_e(o,"get",s),_e(o,"get",a));const{has:c}=ur(o),l=t?Ds:e?Ls:ve;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&_e(X(s),"iterate",Kt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=X(i),a=X(s);return e||(kt(s,a)&&_e(o,"has",s),_e(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=X(a),l=t?Ds:e?Ls:ve;return!e&&_e(c,"iterate",Kt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return pe(n,e?{add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear")}:{add(s){!t&&!$e(s)&&!Gt(s)&&(s=X(s));const i=X(this);return ur(i).has.call(i,s)||(i.add(s),ot(i,"add",s,s)),this},set(s,i){!t&&!$e(i)&&!Gt(i)&&(i=X(i));const o=X(this),{has:a,get:c}=ur(o);let l=a.call(o,s);l||(s=X(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?kt(i,u)&&ot(o,"set",s,i):ot(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:a}=ur(i);let c=o.call(i,s);c||(s=X(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ot(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&ot(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ou(s,e,t)}),n}function mi(e,t){const n=ku(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(te(n,s)&&s in r?n:r,s,i)}const xu={get:mi(!1,!1)},Nu={get:mi(!1,!0)},Mu={get:mi(!0,!1)};const Ga=new WeakMap,Ja=new WeakMap,Ya=new WeakMap,Du=new WeakMap;function Lu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uu(e){return e.__v_skip||!Object.isExtensible(e)?0:Lu(au(e))}function En(e){return Gt(e)?e:_i(e,!1,Au,xu,Ga)}function Xa(e){return _i(e,!1,Pu,Nu,Ja)}function Qa(e){return _i(e,!0,Ru,Mu,Ya)}function _i(e,t,n,r,s){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Uu(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Nn(e){return Gt(e)?Nn(e.__v_raw):!!(e&&e.__v_isReactive)}function Gt(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function yi(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function zr(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&Na(e,"__v_skip",!0),e}const ve=e=>le(e)?En(e):e,Ls=e=>le(e)?Qa(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function Za(e){return ec(e,!1)}function Fu(e){return ec(e,!0)}function ec(e,t){return ye(e)?e:new $u(e,t)}class $u{constructor(t,n){this.dep=new pi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||$e(t)||Gt(t);t=r?t:X(t),kt(t,n)&&(this._rawValue=t,this._value=r?t:ve(t),this.dep.trigger())}}function cn(e){return ye(e)?e.value:e}const Hu={get:(e,t,n)=>t==="__v_raw"?e:cn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function tc(e){return Nn(e)?e:new Proxy(e,Hu)}class Bu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new pi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return $a(this,!0),!0}get value(){const t=this.dep.track();return ja(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ju(e,t,n=!1){let r,s;return q(e)?r=e:(r=e.get,s=e.set),new Bu(r,s,n)}const dr={},Tr=new WeakMap;let Vt;function Vu(e,t=!1,n=Vt){if(n){let r=Tr.get(n);r||Tr.set(n,r=[]),r.push(e)}}function Wu(e,t,n=oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=w=>s?w:$e(w)||s===!1||s===0?at(w,1):at(w);let u,f,p,g,y=!1,C=!1;if(ye(e)?(f=()=>e.value,y=$e(e)):Nn(e)?(f=()=>l(e),y=!0):j(e)?(C=!0,y=e.some(w=>Nn(w)||$e(w)),f=()=>e.map(w=>{if(ye(w))return w.value;if(Nn(w))return l(w);if(q(w))return c?c(w,2):w()})):q(e)?t?f=c?()=>c(e,2):e:f=()=>{if(p){Dt();try{p()}finally{Lt()}}const w=Vt;Vt=u;try{return c?c(e,3,[g]):e(g)}finally{Vt=w}}:f=Ye,t&&s){const w=f,F=s===!0?1/0:s;f=()=>at(w(),F)}const U=bu(),x=()=>{u.stop(),U&&U.active&&ai(U.effects,u)};if(i&&t){const w=t;t=(...F)=>{w(...F),x()}}let I=C?new Array(e.length).fill(dr):dr;const S=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const F=u.run();if(s||y||(C?F.some((H,V)=>kt(H,I[V])):kt(F,I))){p&&p();const H=Vt;Vt=u;try{const V=[F,I===dr?void 0:C&&I[0]===dr?[]:I,g];c?c(t,3,V):t(...V),I=F}finally{Vt=H}}}else u.run()};return a&&a(S),u=new Ua(f),u.scheduler=o?()=>o(S,!1):S,g=w=>Vu(w,!1,u),p=u.onStop=()=>{const w=Tr.get(u);if(w){if(c)c(w,4);else for(const F of w)F();Tr.delete(u)}},t?r?S(!0):I=u.run():o?o(S.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function at(e,t=1/0,n){if(t<=0||!le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ye(e))at(e.value,t,n);else if(j(e))for(let r=0;r<e.length;r++)at(e[r],t,n);else if(Pa(e)||on(e))e.forEach(r=>{at(r,t,n)});else if(xa(e)){for(const r in e)at(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&at(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(e,t,n,r){try{return r?e(...r):e()}catch(s){Kr(s,t,n)}}function Be(e,t,n,r){if(q(e)){const s=tr(e,t,n,r);return s&&Oa(s)&&s.catch(i=>{Kr(i,t,n)}),s}if(j(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Be(e[i],t,n,r));return s}}function Kr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||oe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){Dt(),tr(i,null,10,[e,c,l]),Lt();return}}zu(e,n,s,r,o)}function zu(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const we=[];let qe=-1;const ln=[];let wt=null,tn=0;const nc=Promise.resolve();let Cr=null;function rc(e){const t=Cr||nc;return e?t.then(this?e.bind(this):e):t}function Ku(e){let t=qe+1,n=we.length;for(;t<n;){const r=t+n>>>1,s=we[r],i=Vn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function bi(e){if(!(e.flags&1)){const t=Vn(e),n=we[we.length-1];!n||!(e.flags&2)&&t>=Vn(n)?we.push(e):we.splice(Ku(t),0,e),e.flags|=1,sc()}}function sc(){Cr||(Cr=nc.then(oc))}function qu(e){j(e)?ln.push(...e):wt&&e.id===-1?wt.splice(tn+1,0,e):e.flags&1||(ln.push(e),e.flags|=1),sc()}function qi(e,t,n=qe+1){for(;n<we.length;n++){const r=we[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;we.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ic(e){if(ln.length){const t=[...new Set(ln)].sort((n,r)=>Vn(n)-Vn(r));if(ln.length=0,wt){wt.push(...t);return}for(wt=t,tn=0;tn<wt.length;tn++){const n=wt[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wt=null,tn=0}}const Vn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function oc(e){try{for(qe=0;qe<we.length;qe++){const t=we[qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),tr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;qe<we.length;qe++){const t=we[qe];t&&(t.flags&=-2)}qe=-1,we.length=0,ic(),Cr=null,(we.length||ln.length)&&oc()}}let Ce=null,ac=null;function Ar(e){const t=Ce;return Ce=e,ac=e&&e.type.__scopeId||null,t}function Gu(e,t=Ce,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&oo(-1);const i=Ar(t);let o;try{o=e(...s)}finally{Ar(i),r._d&&oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function G_(e,t){if(Ce===null)return e;const n=Qr(Ce),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=oe]=t[s];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&at(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function $t(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Dt(),Be(c,n,8,[e.el,a,e,t]),Lt())}}const cc=Symbol("_vte"),lc=e=>e.__isTeleport,Mn=e=>e&&(e.disabled||e.disabled===""),Gi=e=>e&&(e.defer||e.defer===""),Ji=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Yi=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Us=(e,t)=>{const n=e&&e.to;return ue(n)?t?t(n):null:n},uc={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:p,o:{insert:g,querySelector:y,createText:C,createComment:U}}=l,x=Mn(t.props);let{shapeFlag:I,children:S,dynamicChildren:w}=t;if(e==null){const F=t.el=C(""),H=t.anchor=C("");g(F,n,r),g(H,n,r);const V=(D,z)=>{I&16&&(s&&s.isCE&&(s.ce._teleportTarget=D),u(S,D,z,s,i,o,a,c))},Y=()=>{const D=t.target=Us(t.props,y),z=fc(D,t,C,g);D&&(o!=="svg"&&Ji(D)?o="svg":o!=="mathml"&&Yi(D)&&(o="mathml"),x||(V(D,z),_r(t,!1)))};x&&(V(n,H),_r(t,!0)),Gi(t.props)?de(()=>{Y(),t.el.__isMounted=!0},i):Y()}else{if(Gi(t.props)&&!e.el.__isMounted){de(()=>{uc.process(e,t,n,r,s,i,o,a,c,l),delete e.el.__isMounted},i);return}t.el=e.el,t.targetStart=e.targetStart;const F=t.anchor=e.anchor,H=t.target=e.target,V=t.targetAnchor=e.targetAnchor,Y=Mn(e.props),D=Y?n:H,z=Y?F:V;if(o==="svg"||Ji(H)?o="svg":(o==="mathml"||Yi(H))&&(o="mathml"),w?(p(e.dynamicChildren,w,D,s,i,o,a),Ii(e,t,!0)):c||f(e,t,D,z,s,i,o,a,!1),x)Y?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):hr(t,n,F,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=Us(t.props,y);J&&hr(t,J,null,l,0)}else Y&&hr(t,H,V,l,1);_r(t,x)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:f,props:p}=e;if(f&&(s(l),s(u)),i&&s(c),o&16){const g=i||!Mn(p);for(let y=0;y<a.length;y++){const C=a[y];r(C,t,n,g,!!C.dynamicChildren)}}},move:hr,hydrate:Ju};function hr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||Mn(u))&&c&16)for(let p=0;p<l.length;p++)s(l[p],t,n,2);f&&r(a,t,n)}function Ju(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},f){const p=t.target=Us(t.props,c);if(p){const g=Mn(t.props),y=p._lpa||p.firstChild;if(t.shapeFlag&16)if(g)t.anchor=f(o(e),t,a(e),n,r,s,i),t.targetStart=y,t.targetAnchor=y&&o(y);else{t.anchor=o(e);let C=y;for(;C;){if(C&&C.nodeType===8){if(C.data==="teleport start anchor")t.targetStart=C;else if(C.data==="teleport anchor"){t.targetAnchor=C,p._lpa=t.targetAnchor&&o(t.targetAnchor);break}}C=o(C)}t.targetAnchor||fc(p,t,u,l),f(y&&o(y),t,p,n,r,s,i)}_r(t,g)}return t.anchor&&o(t.anchor)}const J_=uc;function _r(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function fc(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[cc]=i,e&&(r(s,e),r(i,e)),i}const Et=Symbol("_leaveCb"),pr=Symbol("_enterCb");function Yu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vi(()=>{e.isMounted=!0}),wi(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],dc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},hc=e=>{const t=e.subTree;return t.component?hc(t.component):t},Xu={name:"BaseTransition",props:dc,setup(e,{slots:t}){const n=jc(),r=Yu();return()=>{const s=t.default&&mc(t.default(),!0);if(!s||!s.length)return;const i=pc(s),o=X(e),{mode:a}=o;if(r.isLeaving)return us(i);const c=Xi(i);if(!c)return us(i);let l=Fs(c,o,r,n,f=>l=f);c.type!==Ee&&mn(c,l);let u=n.subTree&&Xi(n.subTree);if(u&&u.type!==Ee&&!Ct(c,u)&&hc(n).type!==Ee){let f=Fs(u,o,r,n);if(mn(u,f),a==="out-in"&&c.type!==Ee)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},us(i);a==="in-out"&&c.type!==Ee?f.delayLeave=(p,g,y)=>{const C=gc(r,u);C[String(u.key)]=u,p[Et]=()=>{g(),p[Et]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{y(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function pc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ee){t=n;break}}return t}const Qu=Xu;function gc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Fs(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:y,onLeaveCancelled:C,onBeforeAppear:U,onAppear:x,onAfterAppear:I,onAppearCancelled:S}=t,w=String(e.key),F=gc(n,e),H=(D,z)=>{D&&Be(D,r,9,z)},V=(D,z)=>{const J=z[1];H(D,z),j(D)?D.every(M=>M.length<=1)&&J():D.length<=1&&J()},Y={mode:o,persisted:a,beforeEnter(D){let z=c;if(!n.isMounted)if(i)z=U||c;else return;D[Et]&&D[Et](!0);const J=F[w];J&&Ct(e,J)&&J.el[Et]&&J.el[Et](),H(z,[D])},enter(D){let z=l,J=u,M=f;if(!n.isMounted)if(i)z=x||l,J=I||u,M=S||f;else return;let Q=!1;const he=D[pr]=Ae=>{Q||(Q=!0,Ae?H(M,[D]):H(J,[D]),Y.delayedLeave&&Y.delayedLeave(),D[pr]=void 0)};z?V(z,[D,he]):he()},leave(D,z){const J=String(e.key);if(D[pr]&&D[pr](!0),n.isUnmounting)return z();H(p,[D]);let M=!1;const Q=D[Et]=he=>{M||(M=!0,z(),he?H(C,[D]):H(y,[D]),D[Et]=void 0,F[J]===e&&delete F[J])};F[J]=e,g?V(g,[D,Q]):Q()},clone(D){const z=Fs(D,t,n,r,s);return s&&s(z),z}};return Y}function us(e){if(Gr(e))return e=dt(e),e.children=null,e}function Xi(e){if(!Gr(e))return lc(e.type)&&e.children?pc(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&q(n.default))return n.default()}}function mn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,mn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function mc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ge?(o.patchFlag&128&&s++,r=r.concat(mc(o.children,t,a))):(t||o.type!==Ee)&&r.push(a!=null?dt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function qr(e,t){return q(e)?pe({name:e.name},t,{setup:e}):e}function _c(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Rr(e,t,n,r,s=!1){if(j(e)){e.forEach((y,C)=>Rr(y,t&&(j(t)?t[C]:t),n,r,s));return}if(un(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Rr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Qr(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===oe?a.refs={}:a.refs,f=a.setupState,p=X(f),g=f===oe?()=>!1:y=>te(p,y);if(l!=null&&l!==c&&(ue(l)?(u[l]=null,g(l)&&(f[l]=null)):ye(l)&&(l.value=null)),q(c))tr(c,a,12,[o,u]);else{const y=ue(c),C=ye(c);if(y||C){const U=()=>{if(e.f){const x=y?g(c)?f[c]:u[c]:c.value;s?j(x)&&ai(x,i):j(x)?x.includes(i)||x.push(i):y?(u[c]=[i],g(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else y?(u[c]=o,g(c)&&(f[c]=o)):C&&(c.value=o,e.k&&(u[e.k]=o))};o?(U.id=-1,de(U,n)):U()}}}Wr().requestIdleCallback;Wr().cancelIdleCallback;const un=e=>!!e.type.__asyncLoader,Gr=e=>e.type.__isKeepAlive,Zu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=jc(),r=n.ctx;if(!r.renderer)return()=>{const I=t.default&&t.default();return I&&I.length===1?I[0]:I};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,p=f("div");r.activate=(I,S,w,F,H)=>{const V=I.component;l(I,S,w,0,a),c(V.vnode,I,S,w,V,a,F,I.slotScopeIds,H),de(()=>{V.isDeactivated=!1,V.a&&an(V.a);const Y=I.props&&I.props.onVnodeMounted;Y&&De(Y,V.parent,I)},a)},r.deactivate=I=>{const S=I.component;Or(S.m),Or(S.a),l(I,p,null,1,a),de(()=>{S.da&&an(S.da);const w=I.props&&I.props.onVnodeUnmounted;w&&De(w,S.parent,I),S.isDeactivated=!0},a)};function g(I){fs(I),u(I,n,a,!0)}function y(I){s.forEach((S,w)=>{const F=Ws(S.type);F&&!I(F)&&C(w)})}function C(I){const S=s.get(I);S&&(!o||!Ct(S,o))?g(S):o&&fs(o),s.delete(I),i.delete(I)}Ln(()=>[e.include,e.exclude],([I,S])=>{I&&y(w=>Rn(I,w)),S&&y(w=>!Rn(S,w))},{flush:"post",deep:!0});let U=null;const x=()=>{U!=null&&(kr(n.subTree.type)?de(()=>{s.set(U,gr(n.subTree))},n.subTree.suspense):s.set(U,gr(n.subTree)))};return vi(x),bc(x),wi(()=>{s.forEach(I=>{const{subTree:S,suspense:w}=n,F=gr(S);if(I.type===F.type&&I.key===F.key){fs(F);const H=F.component.da;H&&de(H,w);return}g(I)})}),()=>{if(U=null,!t.default)return o=null;const I=t.default(),S=I[0];if(I.length>1)return o=null,I;if(!zn(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let w=gr(S);if(w.type===Ee)return o=null,w;const F=w.type,H=Ws(un(w)?w.type.__asyncResolved||{}:F),{include:V,exclude:Y,max:D}=e;if(V&&(!H||!Rn(V,H))||Y&&H&&Rn(Y,H))return w.shapeFlag&=-257,o=w,S;const z=w.key==null?F:w.key,J=s.get(z);return w.el&&(w=dt(w),S.shapeFlag&128&&(S.ssContent=w)),U=z,J?(w.el=J.el,w.component=J.component,w.transition&&mn(w,w.transition),w.shapeFlag|=512,i.delete(z),i.add(z)):(i.add(z),D&&i.size>parseInt(D,10)&&C(i.values().next().value)),w.shapeFlag|=256,o=w,kr(S.type)?S:w}}},Y_=Zu;function Rn(e,t){return j(e)?e.some(n=>Rn(n,t)):ue(e)?e.split(",").includes(t):ou(e)?(e.lastIndex=0,e.test(t)):!1}function ef(e,t){yc(e,"a",t)}function tf(e,t){yc(e,"da",t)}function yc(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Jr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Gr(s.parent.vnode)&&nf(r,t,n,s),s=s.parent}}function nf(e,t,n,r){const s=Jr(t,e,r,!0);vc(()=>{ai(r[t],s)},n)}function fs(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function gr(e){return e.shapeFlag&128?e.ssContent:e}function Jr(e,t,n=ge,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Dt();const a=nr(n),c=Be(t,n,e,o);return a(),Lt(),c});return r?s.unshift(i):s.push(i),i}}const gt=e=>(t,n=ge)=>{(!Kn||e==="sp")&&Jr(e,(...r)=>t(...r),n)},rf=gt("bm"),vi=gt("m"),sf=gt("bu"),bc=gt("u"),wi=gt("bum"),vc=gt("um"),of=gt("sp"),af=gt("rtg"),cf=gt("rtc");function lf(e,t=ge){Jr("ec",e,t)}const uf="components";function ff(e,t){return hf(uf,e,!0,t)||e}const df=Symbol.for("v-ndc");function hf(e,t,n=!0,r=!1){const s=Ce||ge;if(s){const i=s.type;{const a=Ws(i,!1);if(a&&(a===t||a===Le(t)||a===Vr(Le(t))))return i}const o=Qi(s[e]||i[e],t)||Qi(s.appContext[e],t);return!o&&r?i:o}}function Qi(e,t){return e&&(e[t]||e[Le(t)]||e[Vr(Le(t))])}const $s=e=>e?Vc(e)?Qr(e):$s(e.parent):null,Dn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$s(e.parent),$root:e=>$s(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ec(e),$forceUpdate:e=>e.f||(e.f=()=>{bi(e.update)}),$nextTick:e=>e.n||(e.n=rc.bind(e.proxy)),$watch:e=>Mf.bind(e)}),ds=(e,t)=>e!==oe&&!e.__isScriptSetup&&te(e,t),pf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ds(r,t))return o[t]=1,r[t];if(s!==oe&&te(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&te(l,t))return o[t]=3,i[t];if(n!==oe&&te(n,t))return o[t]=4,n[t];Hs&&(o[t]=0)}}const u=Dn[t];let f,p;if(u)return t==="$attrs"&&_e(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==oe&&te(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,te(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ds(s,t)?(s[t]=n,!0):r!==oe&&te(r,t)?(r[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==oe&&te(e,o)||ds(t,o)||(a=i[0])&&te(a,o)||te(r,o)||te(Dn,o)||te(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zi(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Hs=!0;function gf(e){const t=Ec(e),n=e.proxy,r=e.ctx;Hs=!1,t.beforeCreate&&eo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:y,activated:C,deactivated:U,beforeDestroy:x,beforeUnmount:I,destroyed:S,unmounted:w,render:F,renderTracked:H,renderTriggered:V,errorCaptured:Y,serverPrefetch:D,expose:z,inheritAttrs:J,components:M,directives:Q,filters:he}=t;if(l&&mf(l,r,null),o)for(const re in o){const Z=o[re];q(Z)&&(r[re]=Z.bind(n))}if(s){const re=s.call(n,n);le(re)&&(e.data=En(re))}if(Hs=!0,i)for(const re in i){const Z=i[re],tt=q(Z)?Z.bind(n,n):q(Z.get)?Z.get.bind(n,n):Ye,mt=!q(Z)&&q(Z.set)?Z.set.bind(n):Ye,Ve=Ue({get:tt,set:mt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Se=>Ve.value=Se})}if(a)for(const re in a)wc(a[re],r,n,re);if(c){const re=q(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Z=>{yr(Z,re[Z])})}u&&eo(u,e,"c");function fe(re,Z){j(Z)?Z.forEach(tt=>re(tt.bind(n))):Z&&re(Z.bind(n))}if(fe(rf,f),fe(vi,p),fe(sf,g),fe(bc,y),fe(ef,C),fe(tf,U),fe(lf,Y),fe(cf,H),fe(af,V),fe(wi,I),fe(vc,w),fe(of,D),j(z))if(z.length){const re=e.exposed||(e.exposed={});z.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:tt=>n[Z]=tt})})}else e.exposed||(e.exposed={});F&&e.render===Ye&&(e.render=F),J!=null&&(e.inheritAttrs=J),M&&(e.components=M),Q&&(e.directives=Q),D&&_c(e)}function mf(e,t,n=Ye){j(e)&&(e=Bs(e));for(const r in e){const s=e[r];let i;le(s)?"default"in s?i=Xe(s.from||r,s.default,!0):i=Xe(s.from||r):i=Xe(s),ye(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function eo(e,t,n){Be(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function wc(e,t,n,r){let s=r.includes(".")?Dc(n,r):()=>n[r];if(ue(e)){const i=t[e];q(i)&&Ln(s,i)}else if(q(e))Ln(s,e.bind(n));else if(le(e))if(j(e))e.forEach(i=>wc(i,t,n,r));else{const i=q(e.handler)?e.handler.bind(n):t[e.handler];q(i)&&Ln(s,i,e)}}function Ec(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Pr(c,l,o,!0)),Pr(c,t,o)),le(t)&&i.set(t,c),c}function Pr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Pr(e,i,n,!0),s&&s.forEach(o=>Pr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=_f[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const _f={data:to,props:no,emits:no,methods:Pn,computed:Pn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Pn,directives:Pn,watch:bf,provide:to,inject:yf};function to(e,t){return t?e?function(){return pe(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function yf(e,t){return Pn(Bs(e),Bs(t))}function Bs(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Pn(e,t){return e?pe(Object.create(null),e,t):t}function no(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:pe(Object.create(null),Zi(e),Zi(t??{})):t}function bf(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Ic(){return{app:null,config:{isNativeTag:su,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vf=0;function wf(e,t){return function(r,s=null){q(r)||(r=pe({},r)),s!=null&&!le(s)&&(s=null);const i=Ic(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:vf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:td,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(l,...f)):q(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const g=l._ceVNode||xe(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Qr(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Be(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=fn;fn=l;try{return u()}finally{fn=f}}};return l}}let fn=null;function yr(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function Xe(e,t,n=!1){const r=ge||Ce;if(r||fn){const s=fn?fn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&q(t)?t.call(r&&r.proxy):t}}const Sc={},Tc=()=>Object.create(Sc),Cc=e=>Object.getPrototypeOf(e)===Sc;function Ef(e,t,n,r=!1){const s={},i=Tc();e.propsDefaults=Object.create(null),Ac(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Xa(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function If(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=X(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Yr(e.emitsOptions,p))continue;const g=t[p];if(c)if(te(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const y=Le(p);s[y]=js(c,a,y,g,e,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Ac(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!te(t,f)&&((u=Xt(f))===f||!te(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=js(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!te(t,f))&&(delete i[f],l=!0)}l&&ot(e.attrs,"set","")}function Ac(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(On(c))continue;const l=t[c];let u;s&&te(s,u=Le(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yr(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||oe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=js(s,c,f,l[f],e,!te(l,f))}}return o}function js(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=te(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=nr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}const Sf=new WeakMap;function Rc(e,t,n=!1){const r=n?Sf:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!q(e)){const u=f=>{c=!0;const[p,g]=Rc(f,t,!0);pe(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return le(e)&&r.set(e,sn),sn;if(j(i))for(let u=0;u<i.length;u++){const f=Le(i[u]);ro(f)&&(o[f]=oe)}else if(i)for(const u in i){const f=Le(u);if(ro(f)){const p=i[u],g=o[f]=j(p)||q(p)?{type:p}:pe({},p),y=g.type;let C=!1,U=!0;if(j(y))for(let x=0;x<y.length;++x){const I=y[x],S=q(I)&&I.name;if(S==="Boolean"){C=!0;break}else S==="String"&&(U=!1)}else C=q(y)&&y.name==="Boolean";g[0]=C,g[1]=U,(C||te(g,"default"))&&a.push(f)}}const l=[o,a];return le(e)&&r.set(e,l),l}function ro(e){return e[0]!=="$"&&!On(e)}const Pc=e=>e[0]==="_"||e==="$stable",Ei=e=>j(e)?e.map(Je):[Je(e)],Tf=(e,t,n)=>{if(t._n)return t;const r=Gu((...s)=>Ei(t(...s)),n);return r._c=!1,r},Oc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Pc(s))continue;const i=e[s];if(q(i))t[s]=Tf(s,i,r);else if(i!=null){const o=Ei(i);t[s]=()=>o}}},kc=(e,t)=>{const n=Ei(t);e.slots.default=()=>n},xc=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Cf=(e,t,n)=>{const r=e.slots=Tc();if(e.vnode.shapeFlag&32){const s=t._;s?(xc(r,t,n),n&&Na(r,"_",s,!0)):Oc(t,r)}else t&&kc(e,t)},Af=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=oe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:xc(s,t,n):(i=!t.$stable,Oc(t,s)),o=t}else t&&(kc(e,t),o={default:1});if(i)for(const a in s)!Pc(a)&&o[a]==null&&delete s[a]},de=Bf;function Rf(e){return Pf(e)}function Pf(e,t){const n=Wr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=Ye,insertStaticContent:y}=e,C=(d,h,m,_=null,E=null,v=null,P=void 0,R=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ct(d,h)&&(_=b(d),Se(d,E,v,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:T,ref:B,shapeFlag:k}=h;switch(T){case Xr:U(d,h,m,_);break;case Ee:x(d,h,m,_);break;case ps:d==null&&I(h,m,_,P);break;case Ge:M(d,h,m,_,E,v,P,R,A);break;default:k&1?F(d,h,m,_,E,v,P,R,A):k&6?Q(d,h,m,_,E,v,P,R,A):(k&64||k&128)&&T.process(d,h,m,_,E,v,P,R,A,L)}B!=null&&E&&Rr(B,d&&d.ref,v,h||d,!h)},U=(d,h,m,_)=>{if(d==null)r(h.el=a(h.children),m,_);else{const E=h.el=d.el;h.children!==d.children&&l(E,h.children)}},x=(d,h,m,_)=>{d==null?r(h.el=c(h.children||""),m,_):h.el=d.el},I=(d,h,m,_)=>{[d.el,d.anchor]=y(d.children,h,m,_,d.el,d.anchor)},S=({el:d,anchor:h},m,_)=>{let E;for(;d&&d!==h;)E=p(d),r(d,m,_),d=E;r(h,m,_)},w=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},F=(d,h,m,_,E,v,P,R,A)=>{h.type==="svg"?P="svg":h.type==="math"&&(P="mathml"),d==null?H(h,m,_,E,v,P,R,A):D(d,h,E,v,P,R,A)},H=(d,h,m,_,E,v,P,R)=>{let A,T;const{props:B,shapeFlag:k,transition:$,dirs:K}=d;if(A=d.el=o(d.type,v,B&&B.is,B),k&8?u(A,d.children):k&16&&Y(d.children,A,null,_,E,hs(d,v),P,R),K&&$t(d,null,_,"created"),V(A,d,d.scopeId,P,_),B){for(const ae in B)ae!=="value"&&!On(ae)&&i(A,ae,null,B[ae],v,_);"value"in B&&i(A,"value",null,B.value,v),(T=B.onVnodeBeforeMount)&&De(T,_,d)}K&&$t(d,null,_,"beforeMount");const G=Of(E,$);G&&$.beforeEnter(A),r(A,h,m),((T=B&&B.onVnodeMounted)||G||K)&&de(()=>{T&&De(T,_,d),G&&$.enter(A),K&&$t(d,null,_,"mounted")},E)},V=(d,h,m,_,E)=>{if(m&&g(d,m),_)for(let v=0;v<_.length;v++)g(d,_[v]);if(E){let v=E.subTree;if(h===v||kr(v.type)&&(v.ssContent===h||v.ssFallback===h)){const P=E.vnode;V(d,P,P.scopeId,P.slotScopeIds,E.parent)}}},Y=(d,h,m,_,E,v,P,R,A=0)=>{for(let T=A;T<d.length;T++){const B=d[T]=R?It(d[T]):Je(d[T]);C(null,B,h,m,_,E,v,P,R)}},D=(d,h,m,_,E,v,P)=>{const R=h.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:B}=h;A|=d.patchFlag&16;const k=d.props||oe,$=h.props||oe;let K;if(m&&Ht(m,!1),(K=$.onVnodeBeforeUpdate)&&De(K,m,h,d),B&&$t(h,d,m,"beforeUpdate"),m&&Ht(m,!0),(k.innerHTML&&$.innerHTML==null||k.textContent&&$.textContent==null)&&u(R,""),T?z(d.dynamicChildren,T,R,m,_,hs(h,E),v):P||Z(d,h,R,null,m,_,hs(h,E),v,!1),A>0){if(A&16)J(R,k,$,m,E);else if(A&2&&k.class!==$.class&&i(R,"class",null,$.class,E),A&4&&i(R,"style",k.style,$.style,E),A&8){const G=h.dynamicProps;for(let ae=0;ae<G.length;ae++){const ne=G[ae],Re=k[ne],Te=$[ne];(Te!==Re||ne==="value")&&i(R,ne,Re,Te,E,m)}}A&1&&d.children!==h.children&&u(R,h.children)}else!P&&T==null&&J(R,k,$,m,E);((K=$.onVnodeUpdated)||B)&&de(()=>{K&&De(K,m,h,d),B&&$t(h,d,m,"updated")},_)},z=(d,h,m,_,E,v,P)=>{for(let R=0;R<h.length;R++){const A=d[R],T=h[R],B=A.el&&(A.type===Ge||!Ct(A,T)||A.shapeFlag&70)?f(A.el):m;C(A,T,B,null,_,E,v,P,!0)}},J=(d,h,m,_,E)=>{if(h!==m){if(h!==oe)for(const v in h)!On(v)&&!(v in m)&&i(d,v,h[v],null,E,_);for(const v in m){if(On(v))continue;const P=m[v],R=h[v];P!==R&&v!=="value"&&i(d,v,R,P,E,_)}"value"in m&&i(d,"value",h.value,m.value,E)}},M=(d,h,m,_,E,v,P,R,A)=>{const T=h.el=d?d.el:a(""),B=h.anchor=d?d.anchor:a("");let{patchFlag:k,dynamicChildren:$,slotScopeIds:K}=h;K&&(R=R?R.concat(K):K),d==null?(r(T,m,_),r(B,m,_),Y(h.children||[],m,B,E,v,P,R,A)):k>0&&k&64&&$&&d.dynamicChildren?(z(d.dynamicChildren,$,m,E,v,P,R),(h.key!=null||E&&h===E.subTree)&&Ii(d,h,!0)):Z(d,h,m,B,E,v,P,R,A)},Q=(d,h,m,_,E,v,P,R,A)=>{h.slotScopeIds=R,d==null?h.shapeFlag&512?E.ctx.activate(h,m,_,P,A):he(h,m,_,E,v,P,A):Ae(d,h,A)},he=(d,h,m,_,E,v,P)=>{const R=d.component=Jf(d,_,E);if(Gr(d)&&(R.ctx.renderer=L),Yf(R,!1,P),R.asyncDep){if(E&&E.registerDep(R,fe,P),!d.el){const A=R.subTree=xe(Ee);x(null,A,h,m)}}else fe(R,d,h,m,E,v,P)},Ae=(d,h,m)=>{const _=h.component=d.component;if($f(d,h,m))if(_.asyncDep&&!_.asyncResolved){re(_,h,m);return}else _.next=h,_.update();else h.el=d.el,_.vnode=h},fe=(d,h,m,_,E,v,P)=>{const R=()=>{if(d.isMounted){let{next:k,bu:$,u:K,parent:G,vnode:ae}=d;{const ze=Nc(d);if(ze){k&&(k.el=ae.el,re(d,k,P)),ze.asyncDep.then(()=>{d.isUnmounted||R()});return}}let ne=k,Re;Ht(d,!1),k?(k.el=ae.el,re(d,k,P)):k=ae,$&&an($),(Re=k.props&&k.props.onVnodeBeforeUpdate)&&De(Re,G,k,ae),Ht(d,!0);const Te=so(d),We=d.subTree;d.subTree=Te,C(We,Te,f(We.el),b(We),d,E,v),k.el=Te.el,ne===null&&Hf(d,Te.el),K&&de(K,E),(Re=k.props&&k.props.onVnodeUpdated)&&de(()=>De(Re,G,k,ae),E)}else{let k;const{el:$,props:K}=h,{bm:G,m:ae,parent:ne,root:Re,type:Te}=d,We=un(h);Ht(d,!1),G&&an(G),!We&&(k=K&&K.onVnodeBeforeMount)&&De(k,ne,h),Ht(d,!0);{Re.ce&&Re.ce._injectChildStyle(Te);const ze=d.subTree=so(d);C(null,ze,m,_,d,E,v),h.el=ze.el}if(ae&&de(ae,E),!We&&(k=K&&K.onVnodeMounted)){const ze=h;de(()=>De(k,ne,ze),E)}(h.shapeFlag&256||ne&&un(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&de(d.a,E),d.isMounted=!0,h=m=_=null}};d.scope.on();const A=d.effect=new Ua(R);d.scope.off();const T=d.update=A.run.bind(A),B=d.job=A.runIfDirty.bind(A);B.i=d,B.id=d.uid,A.scheduler=()=>bi(B),Ht(d,!0),T()},re=(d,h,m)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,If(d,h.props,_,m),Af(d,h.children,m),Dt(),qi(d),Lt()},Z=(d,h,m,_,E,v,P,R,A=!1)=>{const T=d&&d.children,B=d?d.shapeFlag:0,k=h.children,{patchFlag:$,shapeFlag:K}=h;if($>0){if($&128){mt(T,k,m,_,E,v,P,R,A);return}else if($&256){tt(T,k,m,_,E,v,P,R,A);return}}K&8?(B&16&&Ne(T,E,v),k!==T&&u(m,k)):B&16?K&16?mt(T,k,m,_,E,v,P,R,A):Ne(T,E,v,!0):(B&8&&u(m,""),K&16&&Y(k,m,_,E,v,P,R,A))},tt=(d,h,m,_,E,v,P,R,A)=>{d=d||sn,h=h||sn;const T=d.length,B=h.length,k=Math.min(T,B);let $;for($=0;$<k;$++){const K=h[$]=A?It(h[$]):Je(h[$]);C(d[$],K,m,null,E,v,P,R,A)}T>B?Ne(d,E,v,!0,!1,k):Y(h,m,_,E,v,P,R,A,k)},mt=(d,h,m,_,E,v,P,R,A)=>{let T=0;const B=h.length;let k=d.length-1,$=B-1;for(;T<=k&&T<=$;){const K=d[T],G=h[T]=A?It(h[T]):Je(h[T]);if(Ct(K,G))C(K,G,m,null,E,v,P,R,A);else break;T++}for(;T<=k&&T<=$;){const K=d[k],G=h[$]=A?It(h[$]):Je(h[$]);if(Ct(K,G))C(K,G,m,null,E,v,P,R,A);else break;k--,$--}if(T>k){if(T<=$){const K=$+1,G=K<B?h[K].el:_;for(;T<=$;)C(null,h[T]=A?It(h[T]):Je(h[T]),m,G,E,v,P,R,A),T++}}else if(T>$)for(;T<=k;)Se(d[T],E,v,!0),T++;else{const K=T,G=T,ae=new Map;for(T=G;T<=$;T++){const Pe=h[T]=A?It(h[T]):Je(h[T]);Pe.key!=null&&ae.set(Pe.key,T)}let ne,Re=0;const Te=$-G+1;let We=!1,ze=0;const Sn=new Array(Te);for(T=0;T<Te;T++)Sn[T]=0;for(T=K;T<=k;T++){const Pe=d[T];if(Re>=Te){Se(Pe,E,v,!0);continue}let Ke;if(Pe.key!=null)Ke=ae.get(Pe.key);else for(ne=G;ne<=$;ne++)if(Sn[ne-G]===0&&Ct(Pe,h[ne])){Ke=ne;break}Ke===void 0?Se(Pe,E,v,!0):(Sn[Ke-G]=T+1,Ke>=ze?ze=Ke:We=!0,C(Pe,h[Ke],m,null,E,v,P,R,A),Re++)}const Bi=We?kf(Sn):sn;for(ne=Bi.length-1,T=Te-1;T>=0;T--){const Pe=G+T,Ke=h[Pe],ji=Pe+1<B?h[Pe+1].el:_;Sn[T]===0?C(null,Ke,m,ji,E,v,P,R,A):We&&(ne<0||T!==Bi[ne]?Ve(Ke,m,ji,2):ne--)}}},Ve=(d,h,m,_,E=null)=>{const{el:v,type:P,transition:R,children:A,shapeFlag:T}=d;if(T&6){Ve(d.component.subTree,h,m,_);return}if(T&128){d.suspense.move(h,m,_);return}if(T&64){P.move(d,h,m,L);return}if(P===Ge){r(v,h,m);for(let k=0;k<A.length;k++)Ve(A[k],h,m,_);r(d.anchor,h,m);return}if(P===ps){S(d,h,m);return}if(_!==2&&T&1&&R)if(_===0)R.beforeEnter(v),r(v,h,m),de(()=>R.enter(v),E);else{const{leave:k,delayLeave:$,afterLeave:K}=R,G=()=>r(v,h,m),ae=()=>{k(v,()=>{G(),K&&K()})};$?$(v,G,ae):ae()}else r(v,h,m)},Se=(d,h,m,_=!1,E=!1)=>{const{type:v,props:P,ref:R,children:A,dynamicChildren:T,shapeFlag:B,patchFlag:k,dirs:$,cacheIndex:K}=d;if(k===-2&&(E=!1),R!=null&&Rr(R,null,m,d,!0),K!=null&&(h.renderCache[K]=void 0),B&256){h.ctx.deactivate(d);return}const G=B&1&&$,ae=!un(d);let ne;if(ae&&(ne=P&&P.onVnodeBeforeUnmount)&&De(ne,h,d),B&6)lr(d.component,m,_);else{if(B&128){d.suspense.unmount(m,_);return}G&&$t(d,null,h,"beforeUnmount"),B&64?d.type.remove(d,h,m,L,_):T&&!T.hasOnce&&(v!==Ge||k>0&&k&64)?Ne(T,h,m,!1,!0):(v===Ge&&k&384||!E&&B&16)&&Ne(A,h,m),_&&Qt(d)}(ae&&(ne=P&&P.onVnodeUnmounted)||G)&&de(()=>{ne&&De(ne,h,d),G&&$t(d,null,h,"unmounted")},m)},Qt=d=>{const{type:h,el:m,anchor:_,transition:E}=d;if(h===Ge){Zt(m,_);return}if(h===ps){w(d);return}const v=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:R}=E,A=()=>P(m,v);R?R(d.el,v,A):A()}else v()},Zt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},lr=(d,h,m)=>{const{bum:_,scope:E,job:v,subTree:P,um:R,m:A,a:T}=d;Or(A),Or(T),_&&an(_),E.stop(),v&&(v.flags|=8,Se(P,d,h,m)),R&&de(R,h),de(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ne=(d,h,m,_=!1,E=!1,v=0)=>{for(let P=v;P<d.length;P++)Se(d[P],h,m,_,E)},b=d=>{if(d.shapeFlag&6)return b(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),m=h&&h[cc];return m?p(m):h};let N=!1;const O=(d,h,m)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):C(h._vnode||null,d,h,null,null,null,m),h._vnode=d,N||(N=!0,qi(),ic(),N=!1)},L={p:C,um:Se,m:Ve,r:Qt,mt:he,mc:Y,pc:Z,pbc:z,n:b,o:e};return{render:O,hydrate:void 0,createApp:wf(O)}}function hs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ht({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Of(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ii(e,t,n=!1){const r=e.children,s=t.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=It(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ii(o,a)),a.type===Xr&&(a.el=o.el)}}function kf(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Nc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nc(t)}function Or(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const xf=Symbol.for("v-scx"),Nf=()=>Xe(xf);function Ln(e,t,n){return Mc(e,t,n)}function Mc(e,t,n=oe){const{immediate:r,deep:s,flush:i,once:o}=n,a=pe({},n),c=t&&r||!t&&i!=="post";let l;if(Kn){if(i==="sync"){const g=Nf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Ye,g.resume=Ye,g.pause=Ye,g}}const u=ge;a.call=(g,y,C)=>Be(g,u,y,C);let f=!1;i==="post"?a.scheduler=g=>{de(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,y)=>{y?g():bi(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=Wu(e,t,a);return Kn&&(l?l.push(p):c&&p()),p}function Mf(e,t,n){const r=this.proxy,s=ue(e)?e.includes(".")?Dc(r,e):()=>r[e]:e.bind(r,r);let i;q(t)?i=t:(i=t.handler,n=t);const o=nr(this),a=Mc(s,i.bind(r),n);return o(),a}function Dc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Df=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Le(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function Lf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||oe;let s=n;const i=t.startsWith("update:"),o=i&&Df(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>ue(u)?u.trim():u)),o.number&&(s=n.map(ks)));let a,c=r[a=is(t)]||r[a=is(Le(t))];!c&&i&&(c=r[a=is(Xt(t))]),c&&Be(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Be(l,e,6,s)}}function Lc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!q(e)){const c=l=>{const u=Lc(l,t,!0);u&&(a=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(le(e)&&r.set(e,null),null):(j(i)?i.forEach(c=>o[c]=null):pe(o,i),le(e)&&r.set(e,o),o)}function Yr(e,t){return!e||!Br(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,Xt(t))||te(e,t))}function so(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:g,ctx:y,inheritAttrs:C}=e,U=Ar(e);let x,I;try{if(n.shapeFlag&4){const w=s||r,F=w;x=Je(l.call(F,w,u,f,g,p,y)),I=a}else{const w=t;x=Je(w.length>1?w(f,{attrs:a,slots:o,emit:c}):w(f,null)),I=t.props?a:Uf(a)}}catch(w){Un.length=0,Kr(w,e,1),x=xe(Ee)}let S=x;if(I&&C!==!1){const w=Object.keys(I),{shapeFlag:F}=S;w.length&&F&7&&(i&&w.some(oi)&&(I=Ff(I,i)),S=dt(S,I,!1,!0))}return n.dirs&&(S=dt(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&mn(S,n.transition),x=S,Ar(U),x}const Uf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Br(n))&&((t||(t={}))[n]=e[n]);return t},Ff=(e,t)=>{const n={};for(const r in e)(!oi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $f(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?io(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Yr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?io(r,o,l):!0:!!o;return!1}function io(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Yr(n,i))return!0}return!1}function Hf({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const kr=e=>e.__isSuspense;function Bf(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):qu(e)}const Ge=Symbol.for("v-fgt"),Xr=Symbol.for("v-txt"),Ee=Symbol.for("v-cmt"),ps=Symbol.for("v-stc"),Un=[];let ke=null;function Uc(e=!1){Un.push(ke=e?null:[])}function jf(){Un.pop(),ke=Un[Un.length-1]||null}let Wn=1;function oo(e,t=!1){Wn+=e,e<0&&ke&&t&&(ke.hasOnce=!0)}function Fc(e){return e.dynamicChildren=Wn>0?ke||sn:null,jf(),Wn>0&&ke&&ke.push(e),e}function X_(e,t,n,r,s,i){return Fc(Bc(e,t,n,r,s,i,!0))}function $c(e,t,n,r,s){return Fc(xe(e,t,n,r,s,!0))}function zn(e){return e?e.__v_isVNode===!0:!1}function Ct(e,t){return e.type===t.type&&e.key===t.key}const Hc=({key:e})=>e??null,br=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||ye(e)||q(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function Bc(e,t=null,n=null,r=0,s=null,i=e===Ge?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hc(t),ref:t&&br(t),scopeId:ac,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ce};return a?(Si(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Wn>0&&!o&&ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ke.push(c),c}const xe=Vf;function Vf(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===df)&&(e=Ee),zn(e)){const a=dt(e,t,!0);return n&&Si(a,n),Wn>0&&!i&&ke&&(a.shapeFlag&6?ke[ke.indexOf(e)]=a:ke.push(a)),a.patchFlag=-2,a}if(ed(e)&&(e=e.__vccOpts),t){t=Wf(t);let{class:a,style:c}=t;a&&!ue(a)&&(t.class=ui(a)),le(c)&&(yi(c)&&!j(c)&&(c=pe({},c)),t.style=li(c))}const o=ue(e)?1:kr(e)?128:lc(e)?64:le(e)?4:q(e)?2:0;return Bc(e,t,n,r,s,o,i,!0)}function Wf(e){return e?yi(e)||Cc(e)?pe({},e):e:null}function dt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Kf(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Hc(l),ref:t&&t.ref?n&&i?j(i)?i.concat(br(t)):[i,br(t)]:br(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ge?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&mn(u,c.clone(u)),u}function zf(e=" ",t=0){return xe(Xr,null,e,t)}function Q_(e="",t=!1){return t?(Uc(),$c(Ee,null,e)):xe(Ee,null,e)}function Je(e){return e==null||typeof e=="boolean"?xe(Ee):j(e)?xe(Ge,null,e.slice()):zn(e)?It(e):xe(Xr,null,String(e))}function It(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function Si(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Si(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Cc(t)?t._ctx=Ce:s===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[zf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ui([t.class,r.class]));else if(s==="style")t.style=li([t.style,r.style]);else if(Br(s)){const i=t[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function De(e,t,n,r=null){Be(e,t,7,[n,r])}const qf=Ic();let Gf=0;function Jf(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||qf,i={uid:Gf++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(r,s),emitsOptions:Lc(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Lf.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const jc=()=>ge||Ce;let xr,Vs;{const e=Wr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};xr=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),Vs=t("__VUE_SSR_SETTERS__",n=>Kn=n)}const nr=e=>{const t=ge;return xr(e),e.scope.on(),()=>{e.scope.off(),xr(t)}},ao=()=>{ge&&ge.scope.off(),xr(null)};function Vc(e){return e.vnode.shapeFlag&4}let Kn=!1;function Yf(e,t=!1,n=!1){t&&Vs(t);const{props:r,children:s}=e.vnode,i=Vc(e);Ef(e,r,i,t),Cf(e,s,n);const o=i?Xf(e,t):void 0;return t&&Vs(!1),o}function Xf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,pf);const{setup:r}=n;if(r){Dt();const s=e.setupContext=r.length>1?Zf(e):null,i=nr(e),o=tr(r,e,0,[e.props,s]),a=Oa(o);if(Lt(),i(),(a||e.sp)&&!un(e)&&_c(e),a){if(o.then(ao,ao),t)return o.then(c=>{co(e,c)}).catch(c=>{Kr(c,e,0)});e.asyncDep=o}else co(e,o)}else Wc(e)}function co(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=tc(t)),Wc(e)}function Wc(e,t,n){const r=e.type;e.render||(e.render=r.render||Ye);{const s=nr(e);Dt();try{gf(e)}finally{Lt(),s()}}}const Qf={get(e,t){return _e(e,"get",""),e[t]}};function Zf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qf),slots:e.slots,emit:e.emit,expose:t}}function Qr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(tc(zr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)},has(t,n){return n in t||n in Dn}})):e.proxy}function Ws(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function ed(e){return q(e)&&"__vccOpts"in e}const Ue=(e,t)=>ju(e,t,Kn);function Ti(e,t,n){const r=arguments.length;return r===2?le(t)&&!j(t)?zn(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zn(n)&&(n=[n]),xe(e,t,n))}const td="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zs;const lo=typeof window<"u"&&window.trustedTypes;if(lo)try{zs=lo.createPolicy("vue",{createHTML:e=>e})}catch{}const zc=zs?e=>zs.createHTML(e):e=>e,nd="http://www.w3.org/2000/svg",rd="http://www.w3.org/1998/Math/MathML",it=typeof document<"u"?document:null,uo=it&&it.createElement("template"),sd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?it.createElementNS(nd,e):t==="mathml"?it.createElementNS(rd,e):n?it.createElement(e,{is:n}):it.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{uo.innerHTML=zc(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=uo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},_t="transition",Cn="animation",qn=Symbol("_vtc"),Kc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},id=pe({},dc,Kc),od=e=>(e.displayName="Transition",e.props=id,e),Z_=od((e,{slots:t})=>Ti(Qu,ad(e),t)),Bt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},fo=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function ad(e){const t={};for(const M in e)M in Kc||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,y=cd(s),C=y&&y[0],U=y&&y[1],{onBeforeEnter:x,onEnter:I,onEnterCancelled:S,onLeave:w,onLeaveCancelled:F,onBeforeAppear:H=x,onAppear:V=I,onAppearCancelled:Y=S}=t,D=(M,Q,he,Ae)=>{M._enterCancelled=Ae,jt(M,Q?u:a),jt(M,Q?l:o),he&&he()},z=(M,Q)=>{M._isLeaving=!1,jt(M,f),jt(M,g),jt(M,p),Q&&Q()},J=M=>(Q,he)=>{const Ae=M?V:I,fe=()=>D(Q,M,he);Bt(Ae,[Q,fe]),ho(()=>{jt(Q,M?c:i),rt(Q,M?u:a),fo(Ae)||po(Q,r,C,fe)})};return pe(t,{onBeforeEnter(M){Bt(x,[M]),rt(M,i),rt(M,o)},onBeforeAppear(M){Bt(H,[M]),rt(M,c),rt(M,l)},onEnter:J(!1),onAppear:J(!0),onLeave(M,Q){M._isLeaving=!0;const he=()=>z(M,Q);rt(M,f),M._enterCancelled?(rt(M,p),_o()):(_o(),rt(M,p)),ho(()=>{M._isLeaving&&(jt(M,f),rt(M,g),fo(w)||po(M,r,U,he))}),Bt(w,[M,he])},onEnterCancelled(M){D(M,!1,void 0,!0),Bt(S,[M])},onAppearCancelled(M){D(M,!0,void 0,!0),Bt(Y,[M])},onLeaveCancelled(M){z(M),Bt(F,[M])}})}function cd(e){if(e==null)return null;if(le(e))return[gs(e.enter),gs(e.leave)];{const t=gs(e);return[t,t]}}function gs(e){return uu(e)}function rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[qn]||(e[qn]=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[qn];n&&(n.delete(t),n.size||(e[qn]=void 0))}function ho(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ld=0;function po(e,t,n,r){const s=e._endId=++ld,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ud(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,p),i()},p=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,p)}function ud(e,t){const n=window.getComputedStyle(e),r=y=>(n[y]||"").split(", "),s=r(`${_t}Delay`),i=r(`${_t}Duration`),o=go(s,i),a=r(`${Cn}Delay`),c=r(`${Cn}Duration`),l=go(a,c);let u=null,f=0,p=0;t===_t?o>0&&(u=_t,f=o,p=i.length):t===Cn?l>0&&(u=Cn,f=l,p=c.length):(f=Math.max(o,l),u=f>0?o>l?_t:Cn:null,p=u?u===_t?i.length:c.length:0);const g=u===_t&&/\b(transform|all)(,|$)/.test(r(`${_t}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:g}}function go(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>mo(n)+mo(e[r])))}function mo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function _o(){return document.body.offsetHeight}function fd(e,t,n){const r=e[qn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const yo=Symbol("_vod"),dd=Symbol("_vsh"),hd=Symbol(""),pd=/(^|;)\s*display\s*:/;function gd(e,t,n){const r=e.style,s=ue(n);let i=!1;if(n&&!s){if(t)if(ue(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&vr(r,a,"")}else for(const o in t)n[o]==null&&vr(r,o,"");for(const o in n)o==="display"&&(i=!0),vr(r,o,n[o])}else if(s){if(t!==n){const o=r[hd];o&&(n+=";"+o),r.cssText=n,i=pd.test(n)}}else t&&e.removeAttribute("style");yo in e&&(e[yo]=i?r.display:"",e[dd]&&(r.display="none"))}const bo=/\s*!important$/;function vr(e,t,n){if(j(n))n.forEach(r=>vr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=md(e,t);bo.test(n)?e.setProperty(Xt(r),n.replace(bo,""),"important"):e[r]=n}}const vo=["Webkit","Moz","ms"],ms={};function md(e,t){const n=ms[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return ms[t]=r;r=Vr(r);for(let s=0;s<vo.length;s++){const i=vo[s]+r;if(i in e)return ms[t]=i}return t}const wo="http://www.w3.org/1999/xlink";function Eo(e,t,n,r,s,i=mu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(wo,t.slice(6,t.length)):e.setAttributeNS(wo,t,n):n==null||i&&!Ma(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Mt(n)?String(n):n)}function Io(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?zc(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ma(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function nn(e,t,n,r){e.addEventListener(t,n,r)}function _d(e,t,n,r){e.removeEventListener(t,n,r)}const So=Symbol("_vei");function yd(e,t,n,r,s=null){const i=e[So]||(e[So]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=bd(t);if(r){const l=i[t]=Ed(r,s);nn(e,a,l,c)}else o&&(_d(e,a,o,c),i[t]=void 0)}}const To=/(?:Once|Passive|Capture)$/;function bd(e){let t;if(To.test(e)){t={};let r;for(;r=e.match(To);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let _s=0;const vd=Promise.resolve(),wd=()=>_s||(vd.then(()=>_s=0),_s=Date.now());function Ed(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Be(Id(r,n.value),t,5,[r])};return n.value=e,n.attached=wd(),n}function Id(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Co=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Sd=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?fd(e,r,o):t==="style"?gd(e,n,r):Br(t)?oi(t)||yd(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Td(e,t,r,o))?(Io(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Eo(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ue(r))?Io(e,Le(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Eo(e,t,r,o))};function Td(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Co(t)&&q(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Co(t)&&ue(n)?!1:t in e}const Ao=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>an(t,n):t};function Cd(e){e.target.composing=!0}function Ro(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ys=Symbol("_assign"),ey={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ys]=Ao(s);const i=r||s.props&&s.props.type==="number";nn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=ks(a)),e[ys](a)}),n&&nn(e,"change",()=>{e.value=e.value.trim()}),t||(nn(e,"compositionstart",Cd),nn(e,"compositionend",Ro),nn(e,"change",Ro))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[ys]=Ao(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?ks(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},Ad=["ctrl","shift","alt","meta"],Rd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ad.some(n=>e[`${n}Key`]&&!t.includes(n))},ty=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Rd[t[o]];if(a&&a(s,t))return}return e(s,...i)})},Pd=pe({patchProp:Sd},sd);let Po;function Od(){return Po||(Po=Rf(Pd))}const kd=(...e)=>{const t=Od().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Nd(r);if(!s)return;const i=t._component;!q(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function xd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Nd(e){return ue(e)?document.querySelector(e):e}function Ci(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const Jt=Za(!1);let Ks;function Md(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function Dd(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const qc="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Ld(e){const t=e.toLowerCase(),n=Dd(t),r=Md(t,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Jt.value===!0&&(Ks={is:{...s}}),qc===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Oo=navigator.userAgent||navigator.vendor||window.opera,Ud={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Qe={userAgent:Oo,is:Ld(Oo),has:{touch:qc},within:{iframe:window.self!==window.top}},qs={install(e){const{$q:t}=e;Jt.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,Qe),Jt.value=!1}),t.platform=En(this)):t.platform=this}};{let e;Ci(Qe.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(qs,Qe),Jt.value===!0&&(Object.assign(qs,Ks,Ud),Ks=null)}function ny(e){return zr(qr(e))}function ry(e){return zr(e)}const Zr=(e,t)=>{const n=En(e);for(const r in e)Ci(t,r,()=>n[r],s=>{n[r]=s});return t},_n={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(_n,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Gn(){}function sy(e){return e.button===0}function iy(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function oy(e){e.stopPropagation()}function ko(e){e.cancelable!==!1&&e.preventDefault()}function ay(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function cy(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",ko,_n.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",ko,_n.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function ly(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],_n[s[3]])})}function uy(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],_n[r[3]])}),e[n]=void 0)}function Fd(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,e.apply(this,i)};r!==null&&clearTimeout(r),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const bs=["sm","md","lg","xl"],{passive:xo}=_n,$d=Zr({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Gn,setDebounce:Gn,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||Qe.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen!==void 0&&e.config.screen.bodyClasses===!0;this.__update=f=>{const[p,g]=i();if(g!==this.height&&(this.height=g),p!==this.width)this.width=p;else if(f!==!0)return;let y=this.sizes;this.gt.xs=p>=y.sm,this.gt.sm=p>=y.md,this.gt.md=p>=y.lg,this.gt.lg=p>=y.xl,this.lt.sm=p<y.sm,this.lt.md=p<y.md,this.lt.lg=p<y.lg,this.lt.xl=p<y.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,y=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",y!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${y}`)),this.name=y)};let a,c={},l=16;this.setSizes=f=>{bs.forEach(p=>{f[p]!==void 0&&(c[p]=f[p])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&bs.forEach(p=>{this.sizes[p]=parseInt(f.getPropertyValue(`--q-size-${p}`),10)}),this.setSizes=p=>{bs.forEach(g=>{p[g]&&(this.sizes[g]=p[g])}),this.__update(!0)},this.setDebounce=p=>{a!==void 0&&r.removeEventListener("resize",a,xo),a=p>0?Fd(this.__update,p):this.__update,r.addEventListener("resize",a,xo)},this.setDebounce(l),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Jt.value===!0?t.push(u):u()}}),me=Zr({isActive:!1,mode:!1},{__media:void 0,set(e){me.mode=e,e==="auto"?(me.__media===void 0&&(me.__media=window.matchMedia("(prefers-color-scheme: dark)"),me.__updateMedia=()=>{me.set("auto")},me.__media.addListener(me.__updateMedia)),e=me.__media.matches):me.__media!==void 0&&(me.__media.removeListener(me.__updateMedia),me.__media=void 0),me.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){me.set(me.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function Hd(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let Gc=!1;function Bd(e){Gc=e.isComposing===!0}function jd(e){return Gc===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function fy(e,t){return jd(e)===!0?!1:[].concat(t).includes(e.keyCode)}function Jc(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function Vd({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=Jc(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function Wd(){const{is:e}=Qe,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=Jc(e);s!==void 0&&n.add(`platform-${s}`)}}Qe.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),Qe.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function zd(e){for(const t in e)Hd(t,e[t])}const Kd={install(e){if(this.__installed!==!0){if(Jt.value===!0)Wd();else{const{$q:t}=e;t.config.brand!==void 0&&zd(t.config.brand);const n=Vd(Qe,t.config);document.body.classList.add.apply(document.body.classList,n)}Qe.is.ios===!0&&document.body.addEventListener("touchstart",Gn),window.addEventListener("keydown",Bd,!0)}}},Yc=()=>!0;function qd(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function Gd(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function Jd(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return Yc;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(qd).map(Gd)),()=>t.includes(window.location.hash)}const Yd={__history:[],add:Gn,remove:Gn,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=Qe.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Yc),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=Jd(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},No={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Mo(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const St=Zr({__qLang:{}},{getLocale:Mo,set(e=No,t){const n={...e,rtl:e.rtl===!0,getLocale:Mo};{if(n.set=St.set,St.__langConfig===void 0||St.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(St.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=St.__qLang,St.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||No))}}),Xd={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Nr=Zr({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=Nr.set,Object.assign(Nr.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Ci(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||Xd))}}),Qd="_q_",dy="_q_l_",hy="_q_pc_";function py(){}const Do={};let Xc=!1;function Zd(){Xc=!0}function Lo(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}function gy(e){return typeof e=="number"&&isFinite(e)}const Uo=[qs,Kd,me,$d,Yd,St,Nr];function Fo(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function eh(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(Qd,n.$q),Fo(n,Uo),t.components!==void 0&&Object.values(t.components).forEach(r=>{Lo(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{Lo(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&Fo(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&Uo.includes(r)===!1)),Jt.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}const th=function(e,t={}){const n={version:"2.17.6"};Xc===!1?(t.config!==void 0&&Object.assign(Do,t.config),n.config={...Do},Zd()):n.config=t.config||{},eh(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},nh={name:"Quasar",version:"2.17.6",install:th,lang:St,iconSet:Nr},rh=qr({__name:"App",setup(e){return(t,n)=>{const r=ff("router-view");return Uc(),$c(r)}}}),Qc=e=>e,my=Qc,sh=Qc;/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const rn=typeof document<"u";function Zc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ih(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Zc(e.default)}const ee=Object.assign;function vs(e,t){const n={};for(const r in t){const s=t[r];n[r]=je(s)?s.map(e):e(s)}return n}const Fn=()=>{},je=Array.isArray,el=/#/g,oh=/&/g,ah=/\//g,ch=/=/g,lh=/\?/g,tl=/\+/g,uh=/%5B/g,fh=/%5D/g,nl=/%5E/g,dh=/%60/g,rl=/%7B/g,hh=/%7C/g,sl=/%7D/g,ph=/%20/g;function Ai(e){return encodeURI(""+e).replace(hh,"|").replace(uh,"[").replace(fh,"]")}function gh(e){return Ai(e).replace(rl,"{").replace(sl,"}").replace(nl,"^")}function Gs(e){return Ai(e).replace(tl,"%2B").replace(ph,"+").replace(el,"%23").replace(oh,"%26").replace(dh,"`").replace(rl,"{").replace(sl,"}").replace(nl,"^")}function mh(e){return Gs(e).replace(ch,"%3D")}function _h(e){return Ai(e).replace(el,"%23").replace(lh,"%3F")}function yh(e){return e==null?"":_h(e).replace(ah,"%2F")}function Jn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const bh=/\/$/,vh=e=>e.replace(bh,"");function ws(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Sh(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Jn(o)}}function wh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $o(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Eh(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&yn(t.matched[r],n.matched[s])&&il(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function yn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function il(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ih(e[n],t[n]))return!1;return!0}function Ih(e,t){return je(e)?Ho(e,t):je(t)?Ho(t,e):e===t}function Ho(e,t){return je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Sh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Yn;(function(e){e.pop="pop",e.push="push"})(Yn||(Yn={}));var $n;(function(e){e.back="back",e.forward="forward",e.unknown=""})($n||($n={}));function Th(e){if(!e)if(rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),vh(e)}const Ch=/^[^#]+#/;function Ah(e,t){return e.replace(Ch,"#")+t}function Rh(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const es=()=>({left:window.scrollX,top:window.scrollY});function Ph(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Rh(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Bo(e,t){return(history.state?history.state.position-t:-1)+e}const Js=new Map;function Oh(e,t){Js.set(e,t)}function kh(e){const t=Js.get(e);return Js.delete(e),t}let xh=()=>location.protocol+"//"+location.host;function ol(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),$o(c,"")}return $o(n,e)+r+s}function Nh(e,t,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=ol(e,location),y=n.value,C=t.value;let U=0;if(p){if(n.value=g,t.value=p,o&&o===y){o=null;return}U=C?p.position-C.position:0}else r(g);s.forEach(x=>{x(n.value,y,{delta:U,type:Yn.pop,direction:U?U>0?$n.forward:$n.back:$n.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:es()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function jo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?es():null}}function Mh(e){const{history:t,location:n}=window,r={value:ol(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:xh()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=ee({},t.state,jo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ee({},s.value,t.state,{forward:c,scroll:es()});i(u.current,u,!0);const f=ee({},jo(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Dh(e){e=Th(e);const t=Mh(e),n=Nh(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ee({location:"",base:e,go:r,createHref:Ah.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Lh(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Dh(e)}function Uh(e){return typeof e=="string"||e&&typeof e=="object"}function al(e){return typeof e=="string"||typeof e=="symbol"}const cl=Symbol("");var Vo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Vo||(Vo={}));function bn(e,t){return ee(new Error,{type:e,[cl]:!0},t)}function st(e,t){return e instanceof Error&&cl in e&&(t==null||!!(e.type&t))}const Wo="[^/]+?",Fh={sensitive:!1,strict:!1,start:!0,end:!0},$h=/[.+*?^${}()[\]/\\]/g;function Hh(e,t){const n=ee({},Fh,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace($h,"\\$&"),g+=40;else if(p.type===1){const{value:y,repeatable:C,optional:U,regexp:x}=p;i.push({name:y,repeatable:C,optional:U});const I=x||Wo;if(I!==Wo){g+=10;try{new RegExp(`(${I})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${y}" (${I}): `+w.message)}}let S=C?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;f||(S=U&&l.length<2?`(?:/${S})`:"/"+S),U&&(S+="?"),s+=S,g+=20,U&&(g+=-8),C&&(g+=-20),I===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",y=i[p-1];f[y.name]=g&&y.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:C,optional:U}=g,x=y in l?l[y]:"";if(je(x)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const I=je(x)?x.join("/"):x;if(!I)if(U)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=I}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Bh(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function ll(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Bh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zo(r))return 1;if(zo(s))return-1}return s.length-r.length}function zo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jh={type:0,value:""},Vh=/[a-zA-Z0-9_]/;function Wh(e){if(!e)return[[]];if(e==="/")return[[jh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Vh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function zh(e,t,n){const r=Hh(Wh(e.path),n),s=ee(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Kh(e,t){const n=[],r=new Map;t=Jo({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,p,g){const y=!g,C=qo(f);C.aliasOf=g&&g.record;const U=Jo(t,f),x=[C];if("alias"in f){const w=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of w)x.push(qo(ee({},C,{components:g?g.record.components:C.components,path:F,aliasOf:g?g.record:C})))}let I,S;for(const w of x){const{path:F}=w;if(p&&F[0]!=="/"){const H=p.record.path,V=H[H.length-1]==="/"?"":"/";w.path=p.record.path+(F&&V+F)}if(I=zh(w,p,U),g?g.alias.push(I):(S=S||I,S!==I&&S.alias.push(I),y&&f.name&&!Go(I)&&o(f.name)),ul(I)&&c(I),C.children){const H=C.children;for(let V=0;V<H.length;V++)i(H[V],I,g&&g.children[V])}g=g||I}return S?()=>{o(S)}:Fn}function o(f){if(al(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=Jh(f,n);n.splice(p,0,f),f.record.name&&!Go(f)&&r.set(f.record.name,f)}function l(f,p){let g,y={},C,U;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw bn(1,{location:f});U=g.record.name,y=ee(Ko(p.params,g.keys.filter(S=>!S.optional).concat(g.parent?g.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&Ko(f.params,g.keys.map(S=>S.name))),C=g.stringify(y)}else if(f.path!=null)C=f.path,g=n.find(S=>S.re.test(C)),g&&(y=g.parse(C),U=g.record.name);else{if(g=p.name?r.get(p.name):n.find(S=>S.re.test(p.path)),!g)throw bn(1,{location:f,currentLocation:p});U=g.record.name,y=ee({},p.params,f.params),C=g.stringify(y)}const x=[];let I=g;for(;I;)x.unshift(I.record),I=I.parent;return{name:U,path:C,params:y,matched:x,meta:Gh(x)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Ko(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:qh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function qh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Go(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Gh(e){return e.reduce((t,n)=>ee(t,n.meta),{})}function Jo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Jh(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;ll(e,t[i])<0?r=i:n=i+1}const s=Yh(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Yh(e){let t=e;for(;t=t.parent;)if(ul(t)&&ll(e,t)===0)return t}function ul({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Xh(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(tl," "),o=i.indexOf("="),a=Jn(o<0?i:i.slice(0,o)),c=o<0?null:Jn(i.slice(o+1));if(a in t){let l=t[a];je(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Yo(e){let t="";for(let n in e){const r=e[n];if(n=mh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&Gs(i)):[r&&Gs(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Qh(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Zh=Symbol(""),Xo=Symbol(""),ts=Symbol(""),fl=Symbol(""),Ys=Symbol("");function An(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(bn(4,{from:n,to:t})):p instanceof Error?c(p):Uh(p)?c(bn(2,{from:t,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function Es(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Zc(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Tt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ih(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[t];return g&&Tt(g,n,r,o,a,s)()}))}}return i}function Qo(e){const t=Xe(ts),n=Xe(fl),r=Ue(()=>{const c=cn(e.to);return t.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(yn.bind(null,u));if(p>-1)return p;const g=Zo(c[l-2]);return l>1&&Zo(u)===g&&f[f.length-1].path!==g?f.findIndex(yn.bind(null,c[l-2])):p}),i=Ue(()=>s.value>-1&&sp(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&il(n.params,r.value.params));function a(c={}){if(rp(c)){const l=t[cn(e.replace)?"replace":"push"](cn(e.to)).catch(Fn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function ep(e){return e.length===1?e[0]:e}const tp=qr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qo,setup(e,{slots:t}){const n=En(Qo(e)),{options:r}=Xe(ts),s=Ue(()=>({[ea(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ea(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&ep(t.default(n));return e.custom?i:Ti("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),np=tp;function rp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ea=(e,t,n)=>e??t??n,ip=qr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xe(Ys),s=Ue(()=>e.route||r.value),i=Xe(Xo,0),o=Ue(()=>{let l=cn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ue(()=>s.value.matched[o.value]);yr(Xo,Ue(()=>o.value+1)),yr(Zh,a),yr(Ys,s);const c=Za();return Ln(()=>[c.value,a.value,e.name],([l,u,f],[p,g,y])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!yn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,p=f&&f.components[u];if(!p)return ta(n.default,{Component:p,route:l});const g=f.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,U=Ti(p,ee({},y,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ta(n.default,{Component:U,route:l})||U}}});function ta(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const op=ip;function ap(e){const t=Kh(e.routes,e),n=e.parseQuery||Xh,r=e.stringifyQuery||Yo,s=e.history,i=An(),o=An(),a=An(),c=Fu(yt);let l=yt;rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vs.bind(null,b=>""+b),f=vs.bind(null,yh),p=vs.bind(null,Jn);function g(b,N){let O,L;return al(b)?(O=t.getRecordMatcher(b),L=N):L=b,t.addRoute(L,O)}function y(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function C(){return t.getRoutes().map(b=>b.record)}function U(b){return!!t.getRecordMatcher(b)}function x(b,N){if(N=ee({},N||c.value),typeof b=="string"){const m=ws(n,b,N.path),_=t.resolve({path:m.path},N),E=s.createHref(m.fullPath);return ee(m,_,{params:p(_.params),hash:Jn(m.hash),redirectedFrom:void 0,href:E})}let O;if(b.path!=null)O=ee({},b,{path:ws(n,b.path,N.path).path});else{const m=ee({},b.params);for(const _ in m)m[_]==null&&delete m[_];O=ee({},b,{params:f(m)}),N.params=f(N.params)}const L=t.resolve(O,N),se=b.hash||"";L.params=u(p(L.params));const d=wh(r,ee({},b,{hash:gh(se),path:L.path})),h=s.createHref(d);return ee({fullPath:d,hash:se,query:r===Yo?Qh(b.query):b.query||{}},L,{redirectedFrom:void 0,href:h})}function I(b){return typeof b=="string"?ws(n,b,c.value.path):ee({},b)}function S(b,N){if(l!==b)return bn(8,{from:N,to:b})}function w(b){return V(b)}function F(b){return w(ee(I(b),{replace:!0}))}function H(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:O}=N;let L=typeof O=="function"?O(b):O;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=I(L):{path:L},L.params={}),ee({query:b.query,hash:b.hash,params:L.path!=null?{}:b.params},L)}}function V(b,N){const O=l=x(b),L=c.value,se=b.state,d=b.force,h=b.replace===!0,m=H(O);if(m)return V(ee(I(m),{state:typeof m=="object"?ee({},se,m.state):se,force:d,replace:h}),N||O);const _=O;_.redirectedFrom=N;let E;return!d&&Eh(r,L,O)&&(E=bn(16,{to:_,from:L}),Ve(L,L,!0,!1)),(E?Promise.resolve(E):z(_,L)).catch(v=>st(v)?st(v,2)?v:mt(v):Z(v,_,L)).then(v=>{if(v){if(st(v,2))return V(ee({replace:h},I(v.to),{state:typeof v.to=="object"?ee({},se,v.to.state):se,force:d}),N||_)}else v=M(_,L,!0,h,se);return J(_,L,v),v})}function Y(b,N){const O=S(b,N);return O?Promise.reject(O):Promise.resolve()}function D(b){const N=Zt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(b):b()}function z(b,N){let O;const[L,se,d]=cp(b,N);O=Es(L.reverse(),"beforeRouteLeave",b,N);for(const m of L)m.leaveGuards.forEach(_=>{O.push(Tt(_,b,N))});const h=Y.bind(null,b,N);return O.push(h),Ne(O).then(()=>{O=[];for(const m of i.list())O.push(Tt(m,b,N));return O.push(h),Ne(O)}).then(()=>{O=Es(se,"beforeRouteUpdate",b,N);for(const m of se)m.updateGuards.forEach(_=>{O.push(Tt(_,b,N))});return O.push(h),Ne(O)}).then(()=>{O=[];for(const m of d)if(m.beforeEnter)if(je(m.beforeEnter))for(const _ of m.beforeEnter)O.push(Tt(_,b,N));else O.push(Tt(m.beforeEnter,b,N));return O.push(h),Ne(O)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),O=Es(d,"beforeRouteEnter",b,N,D),O.push(h),Ne(O))).then(()=>{O=[];for(const m of o.list())O.push(Tt(m,b,N));return O.push(h),Ne(O)}).catch(m=>st(m,8)?m:Promise.reject(m))}function J(b,N,O){a.list().forEach(L=>D(()=>L(b,N,O)))}function M(b,N,O,L,se){const d=S(b,N);if(d)return d;const h=N===yt,m=rn?history.state:{};O&&(L||h?s.replace(b.fullPath,ee({scroll:h&&m&&m.scroll},se)):s.push(b.fullPath,se)),c.value=b,Ve(b,N,O,h),mt()}let Q;function he(){Q||(Q=s.listen((b,N,O)=>{if(!lr.listening)return;const L=x(b),se=H(L);if(se){V(ee(se,{replace:!0,force:!0}),L).catch(Fn);return}l=L;const d=c.value;rn&&Oh(Bo(d.fullPath,O.delta),es()),z(L,d).catch(h=>st(h,12)?h:st(h,2)?(V(ee(I(h.to),{force:!0}),L).then(m=>{st(m,20)&&!O.delta&&O.type===Yn.pop&&s.go(-1,!1)}).catch(Fn),Promise.reject()):(O.delta&&s.go(-O.delta,!1),Z(h,L,d))).then(h=>{h=h||M(L,d,!1),h&&(O.delta&&!st(h,8)?s.go(-O.delta,!1):O.type===Yn.pop&&st(h,20)&&s.go(-1,!1)),J(L,d,h)}).catch(Fn)}))}let Ae=An(),fe=An(),re;function Z(b,N,O){mt(b);const L=fe.list();return L.length?L.forEach(se=>se(b,N,O)):console.error(b),Promise.reject(b)}function tt(){return re&&c.value!==yt?Promise.resolve():new Promise((b,N)=>{Ae.add([b,N])})}function mt(b){return re||(re=!b,he(),Ae.list().forEach(([N,O])=>b?O(b):N()),Ae.reset()),b}function Ve(b,N,O,L){const{scrollBehavior:se}=e;if(!rn||!se)return Promise.resolve();const d=!O&&kh(Bo(b.fullPath,0))||(L||!O)&&history.state&&history.state.scroll||null;return rc().then(()=>se(b,N,d)).then(h=>h&&Ph(h)).catch(h=>Z(h,b,N))}const Se=b=>s.go(b);let Qt;const Zt=new Set,lr={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:U,getRoutes:C,resolve:x,options:e,push:w,replace:F,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fe.add,isReady:tt,install(b){const N=this;b.component("RouterLink",np),b.component("RouterView",op),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(c)}),rn&&!Qt&&c.value===yt&&(Qt=!0,w(s.location).catch(se=>{}));const O={};for(const se in yt)Object.defineProperty(O,se,{get:()=>c.value[se],enumerable:!0});b.provide(ts,N),b.provide(fl,Xa(O)),b.provide(Ys,c);const L=b.unmount;Zt.add(b),b.unmount=function(){Zt.delete(b),Zt.size<1&&(l=yt,Q&&Q(),Q=null,c.value=yt,Qt=!1,re=!1),L()}}};function Ne(b){return b.reduce((N,O)=>N.then(()=>D(O)),Promise.resolve())}return lr}function cp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>yn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>yn(l,c))||s.push(c))}return[n,r,s]}function _y(){return Xe(ts)}var na={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},lp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):lp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new up;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class up extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fp=function(e){const t=dl(e);return hl.encodeByteArray(t,!0)},pl=function(e){return fp(e).replace(/\./g,"")},gl=function(e){try{return hl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=()=>dp().__FIREBASE_DEFAULTS__,pp=()=>{if(typeof process>"u"||typeof na>"u")return;const e=na.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},gp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gl(e[1]);return t&&JSON.parse(t)},Ri=()=>{try{return hp()||pp()||gp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},mp=e=>{var t,n;return(n=(t=Ri())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ml=()=>{var e;return(e=Ri())===null||e===void 0?void 0:e.config},_l=e=>{var t;return(t=Ri())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function bp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ep(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ip(){try{return typeof indexedDB=="object"}catch{return!1}}function Sp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="FirebaseError";class Ut extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Tp,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Cp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,a,r)}}function Cp(e,t){return e.replace(Ap,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ap=/\{\$([^}]+)}/g;function Rp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Mr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ra(i)&&ra(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ra(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Pp(e,t){const n=new Op(e,t);return n.subscribe.bind(n)}class Op{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Is(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e){return e&&e._delegate?e._delegate:e}class vn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _p;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Mp(t))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Wt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Wt){return this.instances.has(t)}getOptions(t=Wt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Np(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Wt){return this.component?this.component.multipleInstances?t:Wt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Np(e){return e===Wt?void 0:e}function Mp(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new xp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const Lp={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Up=ie.INFO,Fp={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},$p=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Fp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yl{constructor(t){this.name=t,this._logLevel=Up,this._logHandler=$p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const Hp=(e,t)=>t.some(n=>e instanceof n);let sa,ia;function Bp(){return sa||(sa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jp(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,Xs=new WeakMap,vl=new WeakMap,Ss=new WeakMap,Pi=new WeakMap;function Vp(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(xt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&bl.set(n,e)}).catch(()=>{}),Pi.set(t,e),t}function Wp(e){if(Xs.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Xs.set(e,t)}let Qs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||vl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function zp(e){Qs=e(Qs)}function Kp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ts(this),t,...n);return vl.set(r,t.sort?t.sort():[t]),xt(r)}:jp().includes(e)?function(...t){return e.apply(Ts(this),t),xt(bl.get(this))}:function(...t){return xt(e.apply(Ts(this),t))}}function qp(e){return typeof e=="function"?Kp(e):(e instanceof IDBTransaction&&Wp(e),Hp(e,Bp())?new Proxy(e,Qs):e)}function xt(e){if(e instanceof IDBRequest)return Vp(e);if(Ss.has(e))return Ss.get(e);const t=qp(e);return t!==e&&(Ss.set(e,t),Pi.set(t,e)),t}const Ts=e=>Pi.get(e);function Gp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Jp=["get","getKey","getAll","getAllKeys","count"],Yp=["put","add","delete","clear"],Cs=new Map;function oa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Cs.get(t))return Cs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Yp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Cs.set(t,i),i}zp(e=>({...e,get:(t,n,r)=>oa(t,n)||e.get(t,n,r),has:(t,n)=>!!oa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qp(e){const t=e.getComponent();return t?.type==="VERSION"}const Zs="@firebase/app",aa="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new yl("@firebase/app"),Zp="@firebase/app-compat",eg="@firebase/analytics-compat",tg="@firebase/analytics",ng="@firebase/app-check-compat",rg="@firebase/app-check",sg="@firebase/auth",ig="@firebase/auth-compat",og="@firebase/database",ag="@firebase/data-connect",cg="@firebase/database-compat",lg="@firebase/functions",ug="@firebase/functions-compat",fg="@firebase/installations",dg="@firebase/installations-compat",hg="@firebase/messaging",pg="@firebase/messaging-compat",gg="@firebase/performance",mg="@firebase/performance-compat",_g="@firebase/remote-config",yg="@firebase/remote-config-compat",bg="@firebase/storage",vg="@firebase/storage-compat",wg="@firebase/firestore",Eg="@firebase/vertexai",Ig="@firebase/firestore-compat",Sg="firebase",Tg="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]",Cg={[Zs]:"fire-core",[Zp]:"fire-core-compat",[tg]:"fire-analytics",[eg]:"fire-analytics-compat",[rg]:"fire-app-check",[ng]:"fire-app-check-compat",[sg]:"fire-auth",[ig]:"fire-auth-compat",[og]:"fire-rtdb",[ag]:"fire-data-connect",[cg]:"fire-rtdb-compat",[lg]:"fire-fn",[ug]:"fire-fn-compat",[fg]:"fire-iid",[dg]:"fire-iid-compat",[hg]:"fire-fcm",[pg]:"fire-fcm-compat",[gg]:"fire-perf",[mg]:"fire-perf-compat",[_g]:"fire-rc",[yg]:"fire-rc-compat",[bg]:"fire-gcs",[vg]:"fire-gcs-compat",[wg]:"fire-fst",[Ig]:"fire-fst-compat",[Eg]:"fire-vertex","fire-js":"fire-js",[Sg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,Ag=new Map,ti=new Map;function ca(e,t){try{e.container.addComponent(t)}catch(n){ht.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xn(e){const t=e.name;if(ti.has(t))return ht.debug(`There were multiple attempts to register component ${t}.`),!1;ti.set(t,e);for(const n of Dr.values())ca(n,e);for(const n of Ag.values())ca(n,e);return!0}function wl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ct(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new rr("app","Firebase",Rg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=Tg;function El(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ei,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(n||(n=ml()),!n)throw Nt.create("no-options");const i=Dr.get(s);if(i){if(Mr(n,i.options)&&Mr(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const o=new Dp(s);for(const c of ti.values())o.addComponent(c);const a=new Pg(n,r,o);return Dr.set(s,a),a}function Og(e=ei){const t=Dr.get(e);if(!t&&e===ei&&ml())return El();if(!t)throw Nt.create("no-app",{appName:e});return t}function dn(e,t,n){var r;let s=(r=Cg[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}Xn(new vn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="firebase-heartbeat-database",xg=1,Qn="firebase-heartbeat-store";let As=null;function Il(){return As||(As=Gp(kg,xg,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Qn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Nt.create("idb-open",{originalErrorMessage:e.message})})),As}async function Ng(e){try{const n=(await Il()).transaction(Qn),r=await n.objectStore(Qn).get(Sl(e));return await n.done,r}catch(t){if(t instanceof Ut)ht.warn(t.message);else{const n=Nt.create("idb-get",{originalErrorMessage:t?.message});ht.warn(n.message)}}}async function la(e,t){try{const r=(await Il()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(t,Sl(e)),await r.done}catch(n){if(n instanceof Ut)ht.warn(n.message);else{const r=Nt.create("idb-set",{originalErrorMessage:n?.message});ht.warn(r.message)}}}function Sl(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=1024,Dg=30*24*60*60*1e3;class Lg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ua();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Dg}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ua(),{heartbeatsToSend:r,unsentEntries:s}=Ug(this._heartbeatsCache.heartbeats),i=pl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ht.warn(n),""}}}function ua(){return new Date().toISOString().substring(0,10)}function Ug(e,t=Mg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fa(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ip()?Sp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ng(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return la(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function fa(e){return pl(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(e){Xn(new vn("platform-logger",t=>new Xp(t),"PRIVATE")),Xn(new vn("heartbeat",t=>new Lg(t),"PRIVATE")),dn(Zs,aa,e),dn(Zs,aa,"esm2017"),dn("fire-js","")}$g("");function Oi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Tl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hg=Tl,Cl=new rr("auth","Firebase",Tl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new yl("@firebase/auth");function Bg(e,...t){Lr.logLevel<=ie.WARN&&Lr.warn(`Auth (${ir}): ${e}`,...t)}function wr(e,...t){Lr.logLevel<=ie.ERROR&&Lr.error(`Auth (${ir}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,...t){throw xi(e,...t)}function He(e,...t){return xi(e,...t)}function ki(e,t,n){const r=Object.assign(Object.assign({},Hg()),{[t]:n});return new rr("auth","Firebase",r).create(t,{appName:e.name})}function qt(e){return ki(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jg(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&et(e,"argument-error"),ki(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cl.create(e,...t)}function W(e,t,...n){if(!e)throw xi(t,...n)}function lt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw wr(t),new Error(t)}function pt(e,t){e||lt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Vg(){return da()==="http:"||da()==="https:"}function da(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vg()||vp()||"connection"in navigator)?navigator.onLine:!0}function zg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=yp()||wp()}get(){return Wg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new or(3e4,6e4);function Mi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function In(e,t,n,r,s={}){return Rl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=sr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},i);return bp()||(l.referrerPolicy="no-referrer"),Al.fetch()(Pl(e,e.config.apiHost,n,a),l)})}async function Rl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kg),t);try{const s=new Jg(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw mr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ki(e,u,l);et(e,u)}}catch(s){if(s instanceof Ut)throw s;et(e,"network-request-failed",{message:String(s)})}}async function Gg(e,t,n,r,s={}){const i=await In(e,t,n,r,s);return"mfaPendingCredential"in i&&et(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Pl(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Ni(e.config,s):`${e.config.apiScheme}://${s}`}class Jg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),qg.get())})}}function mr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(e,t){return In(e,"POST","/v1/accounts:delete",t)}async function Ol(e,t){return In(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Xg(e,t=!1){const n=Ft(e),r=await n.getIdToken(t),s=Di(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Hn(Rs(s.auth_time)),issuedAtTime:Hn(Rs(s.iat)),expirationTime:Hn(Rs(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Rs(e){return Number(e)*1e3}function Di(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return wr("JWT malformed, contained fewer than 3 sections"),null;try{const s=gl(n);return s?JSON.parse(s):(wr("Failed to decode base64 JWT payload"),null)}catch(s){return wr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ha(e){const t=Di(e);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ut&&Qg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Zn(e,Ol(n,{idToken:r}));W(s?.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?kl(i.providerUserInfo):[],a=tm(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!a?.length,u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ri(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function em(e){const t=Ft(e);await Ur(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function tm(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function kl(e){return e.map(t=>{var{providerId:n}=t,r=Oi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(e,t){const n=await Rl(e,{},async()=>{const r=sr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Pl(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Al.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rm(e,t){return In(e,"POST","/v2/accounts:revokeToken",Mi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ha(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){W(t.length!==0,"internal-error");const n=ha(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hn;return r&&(W(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new hn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,t){W(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ut{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Oi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ri(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Xg(this,t)}reload(){return em(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ur(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(qt(this.auth));const t=await this.getIdToken();return await Zn(this,Yg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:w,isAnonymous:F,providerData:H,stsTokenManager:V}=n;W(S&&V,t,"internal-error");const Y=hn.fromJSON(this.name,V);W(typeof S=="string",t,"internal-error"),bt(f,t.name),bt(p,t.name),W(typeof w=="boolean",t,"internal-error"),W(typeof F=="boolean",t,"internal-error"),bt(g,t.name),bt(y,t.name),bt(C,t.name),bt(U,t.name),bt(x,t.name),bt(I,t.name);const D=new ut({uid:S,auth:t,email:p,emailVerified:w,displayName:f,isAnonymous:F,photoURL:y,phoneNumber:g,tenantId:C,stsTokenManager:Y,createdAt:x,lastLoginAt:I});return H&&Array.isArray(H)&&(D.providerData=H.map(z=>Object.assign({},z))),U&&(D._redirectEventId=U),D}static async _fromIdTokenResponse(t,n,r=!1){const s=new hn;s.updateFromServerResponse(n);const i=new ut({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Ur(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new hn;a.updateFromIdToken(r);const c=new ut({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ri(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map;function ft(e){pt(e instanceof Function,"Expected a class definition");let t=pa.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pa.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xl.type="NONE";const ga=xl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t,n){return`firebase:${e}:${t}:${n}`}class pn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Er(this.userKey,s.apiKey,i),this.fullPersistenceKey=Er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new pn(ft(ga),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ft(ga);const o=Er(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=ut._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new pn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new pn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ll(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Nl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fl(t))return"Blackberry";if($l(t))return"Webos";if(Ml(t))return"Safari";if((t.includes("chrome/")||Dl(t))&&!t.includes("edge/"))return"Chrome";if(Ul(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Nl(e=Ie()){return/firefox\//i.test(e)}function Ml(e=Ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Dl(e=Ie()){return/crios\//i.test(e)}function Ll(e=Ie()){return/iemobile/i.test(e)}function Ul(e=Ie()){return/android/i.test(e)}function Fl(e=Ie()){return/blackberry/i.test(e)}function $l(e=Ie()){return/webos/i.test(e)}function Li(e=Ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function sm(e=Ie()){var t;return Li(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function im(){return Ep()&&document.documentMode===10}function Hl(e=Ie()){return Li(e)||Ul(e)||$l(e)||Fl(e)||/windows phone/i.test(e)||Ll(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(e,t=[]){let n;switch(e){case"Browser":n=ma(Ie());break;case"Worker":n=`${ma(Ie())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(e,t={}){return In(e,"GET","/v2/passwordPolicy",Mi(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=6;class lm{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _a(this),this.idTokenSubscription=new _a(this),this.beforeStateQueue=new om(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await pn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ol(this,{idToken:t}),r=await ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ur(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=zg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ct(this.app))return Promise.reject(qt(this));const n=t?Ft(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ct(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await am(this),n=new lm(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new rr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rm(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ft(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&Bg(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ns(e){return Ft(e)}class _a{constructor(t){this.auth=t,this.observer=null,this.addObserver=Pp(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fm(e){Ui=e}function dm(e){return Ui.loadJS(e)}function hm(){return Ui.gapiScript}function pm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(e,t){const n=wl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mr(i,t??{}))return s;et(s,"already-initialized")}return n.initialize({options:t})}function mm(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ft);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function _m(e,t,n){const r=ns(e);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=jl(t),{host:o,port:a}=ym(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),bm()}function jl(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ym(e){const t=jl(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ya(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ya(o)}}}function ya(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function bm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(t){return lt("not implemented")}_linkToIdToken(t,n){return lt("not implemented")}_getReauthenticationResolver(t){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t){return Gg(e,"POST","/v1/accounts:signInWithIdp",Mi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="http://localhost";class Yt extends Vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Yt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Oi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return gn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,gn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,gn(t,n)}buildRequest(){const t={requestUri:vm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=sr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Fi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ar{constructor(){super("facebook.com")}static credential(t){return Yt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return At.credential(t.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends ar{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Yt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends ar{constructor(){super("github.com")}static credential(t){return Yt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pt.credential(t.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ar{constructor(){super("twitter.com")}static credential(t,n){return Yt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await ut._fromIdTokenResponse(t,r,s),o=ba(r);return new wn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ba(r);return new wn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ba(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Ut{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Fr(t,n,r,s)}}function Wl(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fr._fromErrorAndOperation(e,i,t,r):i})}async function wm(e,t,n=!1){const r=await Zn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(e,t,n=!1){const{auth:r}=e;if(ct(r.app))return Promise.reject(qt(r));const s="reauthenticate";try{const i=await Zn(e,Wl(r,s,t,e),n);W(i.idToken,r,"internal-error");const o=Di(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(e.uid===a,r,"user-mismatch"),wn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&et(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(e,t,n=!1){if(ct(e.app))return Promise.reject(qt(e));const r="signIn",s=await Wl(e,r,t),i=await wn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function Sm(e,t,n,r){return Ft(e).onIdTokenChanged(t,n,r)}function Tm(e,t,n){return Ft(e).beforeAuthStateChanged(t,n)}function Cm(e,t,n,r){return Ft(e).onAuthStateChanged(t,n,r)}function yy(e){return Ft(e).signOut()}const $r="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($r,"1"),this.storage.removeItem($r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=1e3,Rm=10;class Kl extends zl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);im()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Rm):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Kl.type="LOCAL";const Pm=Kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends zl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ql.type="SESSION";const Gl=ql;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new rs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Om(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$i("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function xm(e){Ze().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Nm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mm(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Dm(){return Jl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="firebaseLocalStorageDb",Lm=1,Hr="firebaseLocalStorage",Xl="fbase_key";class cr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ss(e,t){return e.transaction([Hr],t?"readwrite":"readonly").objectStore(Hr)}function Um(){const e=indexedDB.deleteDatabase(Yl);return new cr(e).toPromise()}function si(){const e=indexedDB.open(Yl,Lm);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Hr,{keyPath:Xl})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Hr)?t(r):(r.close(),await Um(),t(await si()))})})}async function va(e,t,n){const r=ss(e,!0).put({[Xl]:t,value:n});return new cr(r).toPromise()}async function Fm(e,t){const n=ss(e,!1).get(t),r=await new cr(n).toPromise();return r===void 0?null:r.value}function wa(e,t){const n=ss(e,!0).delete(t);return new cr(n).toPromise()}const $m=800,Hm=3;class Ql{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await si(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Hm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rs._getInstance(Dm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Nm(),!this.activeServiceWorker)return;this.sender=new km(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Mm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await si();return await va(t,$r,"1"),await wa(t,$r),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>va(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Fm(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>wa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ss(s,!1).getAll();return new cr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ql.type="LOCAL";const Bm=Ql;new or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(e,t){return t?ft(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Vl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return gn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return gn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function jm(e){return Im(e.auth,new Hi(e),e.bypassAuthState)}function Vm(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Em(n,new Hi(e),e.bypassAuthState)}async function Wm(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),wm(n,new Hi(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return jm;case"linkViaPopup":case"linkViaRedirect":return Wm;case"reauthViaPopup":case"reauthViaRedirect":return Vm;default:et(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new or(2e3,1e4);async function by(e,t,n){if(ct(e.app))return Promise.reject(He(e,"operation-not-supported-in-this-environment"));const r=ns(e);jg(e,t,Fi);const s=Zl(r,n);return new zt(r,"signInViaPopup",t,s).executeNotNull()}class zt extends eu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=$i();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,zm.get())};t()}}zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="pendingRedirect",Ir=new Map;class qm extends eu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ir.get(this.auth._key());if(!t){try{const r=await Gm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ir.set(this.auth._key(),t)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Gm(e,t){const n=Xm(t),r=Ym(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Jm(e,t){Ir.set(e._key(),t)}function Ym(e){return ft(e._redirectPersistence)}function Xm(e){return Er(Km,e.config.apiKey,e.name)}async function Qm(e,t,n=!1){if(ct(e.app))return Promise.reject(qt(e));const r=ns(e),s=Zl(r,t),o=await new qm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=10*60*1e3;class e_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!t_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Zm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ea(t))}saveEventToCache(t){this.cachedEventUids.add(Ea(t)),this.lastProcessedEventTime=Date.now()}}function Ea(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function t_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tu(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(e,t={}){return In(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s_=/^https?/;async function i_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await n_(e);for(const n of t)try{if(o_(n))return}catch{}et(e,"unauthorized-domain")}function o_(e){const t=ni(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!s_.test(n))return!1;if(r_.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new or(3e4,6e4);function Ia(){const e=Ze().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function c_(e){return new Promise((t,n)=>{var r,s,i;function o(){Ia(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ia(),n(He(e,"network-request-failed"))},timeout:a_.get()})}if(!((s=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=pm("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(He(e,"network-request-failed"))},dm(`${hm()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Sr=null,t})}let Sr=null;function l_(e){return Sr=Sr||c_(e),Sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new or(5e3,15e3),f_="__/auth/iframe",d_="emulator/auth/iframe",h_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g_(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ni(t,d_):`https://${e.config.authDomain}/${f_}`,r={apiKey:t.apiKey,appName:e.name,v:ir},s=p_.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${sr(r).slice(1)}`}async function m_(e){const t=await l_(e),n=Ze().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:g_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(e,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},u_.get());function c(){Ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y_=500,b_=600,v_="_blank",w_="http://localhost";class Sa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function E_(e,t,n,r=y_,s=b_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},__),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=Dl(l)?v_:n),Nl(l)&&(t=t||w_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(sm(l)&&a!=="_self")return I_(t||"",a),new Sa(null);const f=window.open(t||"",a,u);W(f,e,"popup-blocked");try{f.focus()}catch{}return new Sa(f)}function I_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="__/auth/handler",T_="emulator/auth/handler",C_=encodeURIComponent("fac");async function Ta(e,t,n,r,s,i){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ir,eventId:s};if(t instanceof Fi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Rp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof ar){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${C_}=${encodeURIComponent(c)}`:"";return`${A_(e)}?${sr(a).slice(1)}${l}`}function A_({config:e}){return e.emulator?Ni(e,T_):`https://${e.authDomain}/${S_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="webStorageSupport";class R_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gl,this._completeRedirectFn=Qm,this._overrideRedirectResult=Jm}async _openPopup(t,n,r,s){var i;pt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ta(t,n,r,ni(),s);return E_(t,o,$i())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ta(t,n,r,ni(),s);return xm(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await m_(t),r=new e_(t);return n.register("authEvent",s=>(W(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ps,{type:Ps},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Ps];o!==void 0&&n(!!o),et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=i_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hl()||Ml()||Li()}}const P_=R_;var Ca="@firebase/auth",Aa="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function x_(e){Xn(new vn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bl(e)},l=new um(r,s,i,c);return mm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Xn(new vn("auth-internal",t=>{const n=ns(t.getProvider("auth").getImmediate());return(r=>new O_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Ca,Aa,k_(e)),dn(Ca,Aa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=5*60,M_=_l("authIdTokenMaxAge")||N_;let Ra=null;const D_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>M_)return;const s=n?.token;Ra!==s&&(Ra=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function L_(e=Og()){const t=wl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=gm(e,{popupRedirectResolver:P_,persistence:[Bm,Pm,Gl]}),r=_l("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=D_(i.toString());Tm(n,o,()=>o(n.currentUser)),Sm(n,a=>o(a))}}const s=mp("auth");return s&&_m(n,`http://${s}`),n}function U_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}fm({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",U_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});x_("Browser");var F_="firebase",$_="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(F_,$_,"app");const H_={apiKey:"AIzaSyCVLg9InAdtcrwRVMcJmAqL4ON8XPTS6Gg",authDomain:"bel-meadow-estates-hoa.firebaseapp.com",projectId:"bel-meadow-estates-hoa",storageBucket:"bel-meadow-estates-hoa.firebasestorage.app",messagingSenderId:"342777341611",appId:"1:342777341611:web:0d1820aa9821b1b199f9ee"},B_=El(H_),j_=L_(B_),V_=[{path:"/",component:()=>vt(()=>import("./MainLayout-CWx1Ygbz.js"),__vite__mapDeps([0,1,2,3,4])),children:[{path:"",component:()=>vt(()=>import("./IndexPage-B16sgscH.js"),__vite__mapDeps([5,3,1,2,6]))}]},{path:"/login",component:()=>vt(()=>import("./MainLayout-CWx1Ygbz.js"),__vite__mapDeps([0,1,2,3,4])),beforeEnter:(e,t,n)=>{Cm(j_,r=>{r?n("/"):n()})},children:[{path:"/login",component:()=>vt(()=>import("./LoginPage-MKYXXc7d.js"),__vite__mapDeps([7,1,4,2,6,8,9]))}]},{path:"/contact-us",component:()=>vt(()=>import("./MainLayout-CWx1Ygbz.js"),__vite__mapDeps([0,1,2,3,4])),children:[{path:"",component:()=>vt(()=>import("./ContactUs-hKwR9PXM.js"),__vite__mapDeps([10,8,11]))}]},{path:"/:catchAll(.*)*",component:()=>vt(()=>import("./ErrorNotFound-DPUX6QuO.js"),__vite__mapDeps([12,1]))}],Os=sh(function(){return ap({scrollBehavior:()=>({left:0,top:0}),routes:V_,history:Lh("/")})});async function W_(e,t){const n=e(rh);n.use(nh,t);const r=zr(typeof Os=="function"?await Os({}):Os);return{app:n,router:r}}const z_={config:{brand:{primary:"#01462B",secondary:"#bd2fd6",accent:"#26a69a",dark:"#1d1d1d","dark-page":"#121212",positive:"#2261ba",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}}},K_="/";async function q_({app:e,router:t},n){let r=!1;const s=a=>{try{return t.resolve(a).href}catch{}return Object(a)===a?null:a},i=a=>{if(r=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const c=s(a);c!==null&&(window.location.href=c,window.location.reload())},o=window.location.href.replace(window.location.origin,"");for(let a=0;r===!1&&a<n.length;a++)try{await n[a]({app:e,router:t,ssrContext:null,redirect:i,urlPath:o,publicPath:K_})}catch(c){if(c&&c.url){i(c.url);return}console.error("[Quasar] boot error:",c);return}r!==!0&&(e.use(t),e.mount("#q-app"))}W_(kd,z_).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([vt(()=>import("./axios-VvbTbo-q.js"),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");q_(e,s)})});export{Y_ as $,py as A,dy as B,yr as C,hy as D,En as E,ry as F,X as G,_y as H,Uc as I,X_ as J,xe as K,Gu as L,_u as M,Q_ as N,cn as O,$c as P,Bc as Q,zf as R,yy as S,J_ as T,qr as U,L_ as V,ff as W,ui as X,G_ as Y,sy as Z,cy as _,Ue as a,rf as a0,Yd as a1,gy as a2,qs as a3,Cm as a4,Rt as a5,Pt as a6,At as a7,by as a8,Qd as a9,ty as aa,ey as ab,Ge as ac,oy as ad,ly as b,ny as c,my as d,wi as e,uy as f,jc as g,Ti as h,fy as i,Do as j,vc as k,_n as l,Ci as m,rc as n,vi as o,ko as p,tf as q,Za as r,ay as s,Qe as t,iy as u,Z_ as v,Ln as w,Jt as x,Gn as y,Xe as z};
