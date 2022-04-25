const bu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};bu();function hi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const wu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Eu=hi(wu);function xa(t){return!!t||t===""}function pi(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=we(r)?Tu(r):pi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(we(t))return t;if(me(t))return t}}const Iu=/;(?![^(]*\))/g,Cu=/:(.+)/;function Tu(t){const e={};return t.split(Iu).forEach(n=>{if(n){const r=n.split(Cu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ar(t){let e="";if(we(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=ar(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Su(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Nr(t[r],e[r]);return n}function Nr(t,e){if(t===e)return!0;let n=io(t),r=io(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=B(t),r=B(e),n||r)return n&&r?Su(t,e):!1;if(n=me(t),r=me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Nr(t[o],e[o]))return!1}}return String(t)===String(e)}const He=t=>we(t)?t:t==null?"":B(t)||me(t)&&(t.toString===$a||!V(t.toString))?JSON.stringify(t,Ma,2):String(t),Ma=(t,e)=>e&&e.__v_isRef?Ma(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Da(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!B(e)&&!Ba(e)?String(e):e,re={},hn=[],qe=()=>{},Au=()=>!1,Ru=/^on[^a-z]/,Yr=t=>Ru.test(t),mi=t=>t.startsWith("onUpdate:"),Te=Object.assign,gi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ou=Object.prototype.hasOwnProperty,K=(t,e)=>Ou.call(t,e),B=Array.isArray,pn=t=>Qr(t)==="[object Map]",Da=t=>Qr(t)==="[object Set]",io=t=>t instanceof Date,V=t=>typeof t=="function",we=t=>typeof t=="string",_i=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",Ua=t=>me(t)&&V(t.then)&&V(t.catch),$a=Object.prototype.toString,Qr=t=>$a.call(t),ku=t=>Qr(t).slice(8,-1),Ba=t=>Qr(t)==="[object Object]",vi=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Er=hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pu=/-(\w)/g,rt=Zr(t=>t.replace(Pu,(e,n)=>n?n.toUpperCase():"")),Nu=/\B([A-Z])/g,Sn=Zr(t=>t.replace(Nu,"-$1").toLowerCase()),es=Zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Is=Zr(t=>t?`on${es(t)}`:""),Xn=(t,e)=>!Object.is(t,e),Ir=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let oo;const Lu=()=>oo||(oo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Qe;class xu{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Qe&&(this.parent=Qe,this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){Qe=this}off(){Qe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Mu(t,e=Qe){e&&e.active&&e.effects.push(t)}const yi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Fa=t=>(t.w&Lt)>0,Ha=t=>(t.n&Lt)>0,Du=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Lt},Uu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Fa(s)&&!Ha(s)?s.delete(t):e[n++]=s,s.w&=~Lt,s.n&=~Lt}e.length=n}},Vs=new WeakMap;let Bn=0,Lt=1;const zs=30;let We;const Wt=Symbol(""),Ws=Symbol("");class bi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mu(this,r)}run(){if(!this.active)return this.fn();let e=We,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=We,We=this,kt=!0,Lt=1<<++Bn,Bn<=zs?Du(this):ao(this),this.fn()}finally{Bn<=zs&&Uu(this),Lt=1<<--Bn,We=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(ao(this),this.onStop&&this.onStop(),this.active=!1)}}function ao(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const ja=[];function An(){ja.push(kt),kt=!1}function Rn(){const t=ja.pop();kt=t===void 0?!0:t}function $e(t,e,n){if(kt&&We){let r=Vs.get(t);r||Vs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=yi()),Va(s)}}function Va(t,e){let n=!1;Bn<=zs?Ha(t)||(t.n|=Lt,n=!Fa(t)):n=!t.has(We),n&&(t.add(We),We.deps.push(t))}function ft(t,e,n,r,s,i){const o=Vs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?vi(n)&&a.push(o.get("length")):(a.push(o.get(Wt)),pn(t)&&a.push(o.get(Ws)));break;case"delete":B(t)||(a.push(o.get(Wt)),pn(t)&&a.push(o.get(Ws)));break;case"set":pn(t)&&a.push(o.get(Wt));break}if(a.length===1)a[0]&&qs(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);qs(yi(c))}}function qs(t,e){for(const n of B(t)?t:[...t])(n!==We||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const $u=hi("__proto__,__v_isRef,__isVue"),za=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(_i)),Bu=wi(),Fu=wi(!1,!0),Hu=wi(!0),co=ju();function ju(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=X(this);for(let i=0,o=this.length;i<o;i++)$e(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){An();const r=X(this)[e].apply(this,n);return Rn(),r}}),t}function wi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?sf:Ga:e?Ja:Ka).get(r))return r;const o=B(r);if(!t&&o&&K(co,s))return Reflect.get(co,s,i);const a=Reflect.get(r,s,i);return(_i(s)?za.has(s):$u(s))||(t||$e(r,"get",s),e)?a:Ce(a)?!o||!vi(s)?a.value:a:me(a)?t?Xa(a):On(a):a}}const Vu=Wa(),zu=Wa(!0);function Wa(t=!1){return function(n,r,s,i){let o=n[r];if(Yn(o)&&Ce(o)&&!Ce(s))return!1;if(!t&&!Yn(s)&&(Ya(s)||(s=X(s),o=X(o)),!B(n)&&Ce(o)&&!Ce(s)))return o.value=s,!0;const a=B(n)&&vi(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===X(i)&&(a?Xn(s,o)&&ft(n,"set",r,s):ft(n,"add",r,s)),c}}function Wu(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ft(t,"delete",e,void 0),r}function qu(t,e){const n=Reflect.has(t,e);return(!_i(e)||!za.has(e))&&$e(t,"has",e),n}function Ku(t){return $e(t,"iterate",B(t)?"length":Wt),Reflect.ownKeys(t)}const qa={get:Bu,set:Vu,deleteProperty:Wu,has:qu,ownKeys:Ku},Ju={get:Hu,set(t,e){return!0},deleteProperty(t,e){return!0}},Gu=Te({},qa,{get:Fu,set:zu}),Ei=t=>t,ts=t=>Reflect.getPrototypeOf(t);function mr(t,e,n=!1,r=!1){t=t.__v_raw;const s=X(t),i=X(e);e!==i&&!n&&$e(s,"get",e),!n&&$e(s,"get",i);const{has:o}=ts(s),a=r?Ei:n?Ti:Qn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function gr(t,e=!1){const n=this.__v_raw,r=X(n),s=X(t);return t!==s&&!e&&$e(r,"has",t),!e&&$e(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function _r(t,e=!1){return t=t.__v_raw,!e&&$e(X(t),"iterate",Wt),Reflect.get(t,"size",t)}function lo(t){t=X(t);const e=X(this);return ts(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function uo(t,e){e=X(e);const n=X(this),{has:r,get:s}=ts(n);let i=r.call(n,t);i||(t=X(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Xn(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function fo(t){const e=X(this),{has:n,get:r}=ts(e);let s=n.call(e,t);s||(t=X(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ft(e,"delete",t,void 0),i}function ho(){const t=X(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function vr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=X(o),c=e?Ei:t?Ti:Qn;return!t&&$e(a,"iterate",Wt),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function yr(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=pn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Ei:e?Ti:Qn;return!e&&$e(i,"iterate",c?Ws:Wt),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:a?[l(d[0]),l(d[1])]:l(d),done:h}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:this}}function Xu(){const t={get(i){return mr(this,i)},get size(){return _r(this)},has:gr,add:lo,set:uo,delete:fo,clear:ho,forEach:vr(!1,!1)},e={get(i){return mr(this,i,!1,!0)},get size(){return _r(this)},has:gr,add:lo,set:uo,delete:fo,clear:ho,forEach:vr(!1,!0)},n={get(i){return mr(this,i,!0)},get size(){return _r(this,!0)},has(i){return gr.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:vr(!0,!1)},r={get(i){return mr(this,i,!0,!0)},get size(){return _r(this,!0)},has(i){return gr.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yr(i,!1,!1),n[i]=yr(i,!0,!1),e[i]=yr(i,!1,!0),r[i]=yr(i,!0,!0)}),[t,n,e,r]}const[Yu,Qu,Zu,ef]=Xu();function Ii(t,e){const n=e?t?ef:Zu:t?Qu:Yu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const tf={get:Ii(!1,!1)},nf={get:Ii(!1,!0)},rf={get:Ii(!0,!1)},Ka=new WeakMap,Ja=new WeakMap,Ga=new WeakMap,sf=new WeakMap;function of(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function af(t){return t.__v_skip||!Object.isExtensible(t)?0:of(ku(t))}function On(t){return Yn(t)?t:Ci(t,!1,qa,tf,Ka)}function cf(t){return Ci(t,!1,Gu,nf,Ja)}function Xa(t){return Ci(t,!0,Ju,rf,Ga)}function Ci(t,e,n,r,s){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=af(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function mn(t){return Yn(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function Ya(t){return!!(t&&t.__v_isShallow)}function Qa(t){return mn(t)||Yn(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Za(t){return Lr(t,"__v_skip",!0),t}const Qn=t=>me(t)?On(t):t,Ti=t=>me(t)?Xa(t):t;function ec(t){kt&&We&&(t=X(t),Va(t.dep||(t.dep=yi())))}function tc(t,e){t=X(t),t.dep&&qs(t.dep)}function Ce(t){return!!(t&&t.__v_isRef===!0)}function lf(t){return nc(t,!1)}function uf(t){return nc(t,!0)}function nc(t,e){return Ce(t)?t:new ff(t,e)}class ff{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Qn(e)}get value(){return ec(this),this._value}set value(e){e=this.__v_isShallow?e:X(e),Xn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Qn(e),tc(this))}}function ye(t){return Ce(t)?t.value:t}const df={get:(t,e,n)=>ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ce(s)&&!Ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rc(t){return mn(t)?t:new Proxy(t,df)}class hf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new bi(e,()=>{this._dirty||(this._dirty=!0,tc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=X(this);return ec(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function pf(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=qe):(r=t.get,s=t.set),new hf(r,s,i||!s,n)}function Pt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ns(i,e,n)}return s}function je(t,e,n,r){if(V(t)){const i=Pt(t,e,n,r);return i&&Ua(i)&&i.catch(o=>{ns(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(je(t[i],e,n,r));return s}function ns(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pt(c,null,10,[t,o,a]);return}}mf(t,n,s,r)}function mf(t,e,n,r=!0){console.error(t)}let Mr=!1,Ks=!1;const Ue=[];let ct=0;const zn=[];let Fn=null,ln=0;const Wn=[];let Et=null,un=0;const sc=Promise.resolve();let Si=null,Js=null;function ic(t){const e=Si||sc;return t?e.then(this?t.bind(this):t):e}function gf(t){let e=ct+1,n=Ue.length;for(;e<n;){const r=e+n>>>1;Zn(Ue[r])<t?e=r+1:n=r}return e}function oc(t){(!Ue.length||!Ue.includes(t,Mr&&t.allowRecurse?ct+1:ct))&&t!==Js&&(t.id==null?Ue.push(t):Ue.splice(gf(t.id),0,t),ac())}function ac(){!Mr&&!Ks&&(Ks=!0,Si=sc.then(uc))}function _f(t){const e=Ue.indexOf(t);e>ct&&Ue.splice(e,1)}function cc(t,e,n,r){B(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),ac()}function vf(t){cc(t,Fn,zn,ln)}function yf(t){cc(t,Et,Wn,un)}function Ai(t,e=null){if(zn.length){for(Js=e,Fn=[...new Set(zn)],zn.length=0,ln=0;ln<Fn.length;ln++)Fn[ln]();Fn=null,ln=0,Js=null,Ai(t,e)}}function lc(t){if(Wn.length){const e=[...new Set(Wn)];if(Wn.length=0,Et){Et.push(...e);return}for(Et=e,Et.sort((n,r)=>Zn(n)-Zn(r)),un=0;un<Et.length;un++)Et[un]();Et=null,un=0}}const Zn=t=>t.id==null?1/0:t.id;function uc(t){Ks=!1,Mr=!0,Ai(t),Ue.sort((n,r)=>Zn(n)-Zn(r));const e=qe;try{for(ct=0;ct<Ue.length;ct++){const n=Ue[ct];n&&n.active!==!1&&Pt(n,null,14)}}finally{ct=0,Ue.length=0,lc(),Mr=!1,Si=null,(Ue.length||zn.length||Wn.length)&&uc(t)}}function bf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[l]||re;h?s=n.map(g=>g.trim()):d&&(s=n.map(xr))}let a,c=r[a=Is(e)]||r[a=Is(rt(e))];!c&&i&&(c=r[a=Is(Sn(e))]),c&&je(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(u,t,6,s)}}function fc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=u=>{const l=fc(u,e,!0);l&&(a=!0,Te(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Te(o,i),r.set(t,o),o)}function rs(t,e){return!t||!Yr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Sn(e))||K(t,e))}let Ae=null,ss=null;function Dr(t){const e=Ae;return Ae=t,ss=t&&t.type.__scopeId||null,e}function wf(t){ss=t}function Ef(){ss=null}function Se(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Co(-1);const i=Dr(e),o=t(...s);return Dr(i),r._d&&Co(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Cs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:d,data:h,setupState:g,ctx:w,inheritAttrs:O}=t;let T,A;const N=Dr(t);try{if(n.shapeFlag&4){const H=s||r;T=Ze(l.call(H,H,d,i,g,h,w)),A=c}else{const H=e;T=Ze(H.length>1?H(i,{attrs:c,slots:a,emit:u}):H(i,null)),A=e.props?c:If(c)}}catch(H){qn.length=0,ns(H,t,1),T=J(Ve)}let j=T;if(A&&O!==!1){const H=Object.keys(A),{shapeFlag:se}=j;H.length&&se&7&&(o&&H.some(mi)&&(A=Cf(A,o)),j=Gt(j,A))}return n.dirs&&(j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),T=j,Dr(N),T}const If=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yr(n))&&((e||(e={}))[n]=t[n]);return e},Cf=(t,e)=>{const n={};for(const r in t)(!mi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Tf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?po(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const h=l[d];if(o[h]!==r[h]&&!rs(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?po(r,o,u):!0:!!o;return!1}function po(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!rs(n,i))return!0}return!1}function Sf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Af=t=>t.__isSuspense;function Rf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):yf(t)}function Cr(t,e){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=be||Ae;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r.proxy):e}}const mo={};function Tr(t,e,n){return dc(t,e,n)}function dc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=re){const a=be;let c,u=!1,l=!1;if(Ce(t)?(c=()=>t.value,u=Ya(t)):mn(t)?(c=()=>t,r=!0):B(t)?(l=!0,u=t.some(mn),c=()=>t.map(A=>{if(Ce(A))return A.value;if(mn(A))return zt(A);if(V(A))return Pt(A,a,2)})):V(t)?e?c=()=>Pt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),je(t,a,3,[h])}:c=qe,e&&r){const A=c;c=()=>zt(A())}let d,h=A=>{d=T.onStop=()=>{Pt(A,a,4)}};if(tr)return h=qe,e?n&&je(e,a,3,[c(),l?[]:void 0,h]):c(),qe;let g=l?[]:mo;const w=()=>{if(!!T.active)if(e){const A=T.run();(r||u||(l?A.some((N,j)=>Xn(N,g[j])):Xn(A,g)))&&(d&&d(),je(e,a,3,[A,g===mo?void 0:g,h]),g=A)}else T.run()};w.allowRecurse=!!e;let O;s==="sync"?O=w:s==="post"?O=()=>Ne(w,a&&a.suspense):O=()=>{!a||a.isMounted?vf(w):w()};const T=new bi(c,O);return e?n?w():g=T.run():s==="post"?Ne(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&gi(a.scope.effects,T)}}function Of(t,e,n){const r=this.proxy,s=we(t)?t.includes(".")?hc(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=be;yn(this);const a=dc(s,i.bind(r),n);return o?yn(o):Kt(),a}function hc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function zt(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ce(t))zt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)zt(t[n],e);else if(Da(t)||pn(t))t.forEach(n=>{zt(n,e)});else if(Ba(t))for(const n in t)zt(t[n],e);return t}function kf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yc(()=>{t.isMounted=!0}),bc(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],Pf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=hd(),r=kf();let s;return()=>{const i=e.default&&gc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const O of i)if(O.type!==Ve){o=O;break}}const a=X(t),{mode:c}=a;if(r.isLeaving)return Ts(o);const u=go(o);if(!u)return Ts(o);const l=Gs(u,a,r,n);Xs(u,l);const d=n.subTree,h=d&&go(d);let g=!1;const{getTransitionKey:w}=u.type;if(w){const O=w();s===void 0?s=O:O!==s&&(s=O,g=!0)}if(h&&h.type!==Ve&&(!Ht(u,h)||g)){const O=Gs(h,a,r,n);if(Xs(h,O),c==="out-in")return r.isLeaving=!0,O.afterLeave=()=>{r.isLeaving=!1,n.update()},Ts(o);c==="in-out"&&u.type!==Ve&&(O.delayLeave=(T,A,N)=>{const j=mc(r,h);j[String(h.key)]=h,T._leaveCb=()=>{A(),T._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=N})}return o}}},pc=Pf;function mc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Gs(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:O,onAppear:T,onAfterAppear:A,onAppearCancelled:N}=e,j=String(t.key),H=mc(n,t),se=(W,de)=>{W&&je(W,r,9,de)},fe={mode:i,persisted:o,beforeEnter(W){let de=a;if(!n.isMounted)if(s)de=O||a;else return;W._leaveCb&&W._leaveCb(!0);const Y=H[j];Y&&Ht(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),se(de,[W])},enter(W){let de=c,Y=u,_e=l;if(!n.isMounted)if(s)de=T||c,Y=A||u,_e=N||l;else return;let ve=!1;const L=W._enterCb=he=>{ve||(ve=!0,he?se(_e,[W]):se(Y,[W]),fe.delayedLeave&&fe.delayedLeave(),W._enterCb=void 0)};de?(de(W,L),de.length<=1&&L()):L()},leave(W,de){const Y=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return de();se(d,[W]);let _e=!1;const ve=W._leaveCb=L=>{_e||(_e=!0,de(),L?se(w,[W]):se(g,[W]),W._leaveCb=void 0,H[Y]===t&&delete H[Y])};H[Y]=t,h?(h(W,ve),h.length<=1&&ve()):ve()},clone(W){return Gs(W,e,n,r)}};return fe}function Ts(t){if(is(t))return t=Gt(t),t.children=null,t}function go(t){return is(t)?t.children?t.children[0]:void 0:t}function Xs(t,e){t.shapeFlag&6&&t.component?Xs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function gc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ke?(o.patchFlag&128&&s++,r=r.concat(gc(o.children,e,a))):(e||o.type!==Ve)&&r.push(a!=null?Gt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function _c(t){return V(t)?{setup:t,name:t.name}:t}const Ur=t=>!!t.type.__asyncLoader,is=t=>t.type.__isKeepAlive;function Nf(t,e){vc(t,"a",e)}function Lf(t,e){vc(t,"da",e)}function vc(t,e,n=be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(os(e,r,n),n){let s=n.parent;for(;s&&s.parent;)is(s.parent.vnode)&&xf(r,e,n,s),s=s.parent}}function xf(t,e,n,r){const s=os(e,t,r,!0);wc(()=>{gi(r[e],s)},n)}function os(t,e,n=be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;An(),yn(n);const a=je(e,n,t,o);return Kt(),Rn(),a});return r?s.unshift(i):s.push(i),i}}const ht=t=>(e,n=be)=>(!tr||t==="sp")&&os(t,e,n),Mf=ht("bm"),yc=ht("m"),Df=ht("bu"),Uf=ht("u"),bc=ht("bum"),wc=ht("um"),$f=ht("sp"),Bf=ht("rtg"),Ff=ht("rtc");function Hf(t,e=be){os("ec",t,e)}let Ys=!0;function jf(t){const e=Ic(t),n=t.proxy,r=t.ctx;Ys=!1,e.beforeCreate&&_o(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:h,beforeUpdate:g,updated:w,activated:O,deactivated:T,beforeDestroy:A,beforeUnmount:N,destroyed:j,unmounted:H,render:se,renderTracked:fe,renderTriggered:W,errorCaptured:de,serverPrefetch:Y,expose:_e,inheritAttrs:ve,components:L,directives:he,filters:Pe}=e;if(u&&Vf(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const Z=o[ie];V(Z)&&(r[ie]=Z.bind(n))}if(s){const ie=s.call(n,n);me(ie)&&(t.data=On(ie))}if(Ys=!0,i)for(const ie in i){const Z=i[ie],xe=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):qe,en=!V(Z)&&V(Z.set)?Z.set.bind(n):qe,ot=et({get:xe,set:en});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Je=>ot.value=Je})}if(a)for(const ie in a)Ec(a[ie],r,n,ie);if(c){const ie=V(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(Z=>{Cr(Z,ie[Z])})}l&&_o(l,t,"c");function pe(ie,Z){B(Z)?Z.forEach(xe=>ie(xe.bind(n))):Z&&ie(Z.bind(n))}if(pe(Mf,d),pe(yc,h),pe(Df,g),pe(Uf,w),pe(Nf,O),pe(Lf,T),pe(Hf,de),pe(Ff,fe),pe(Bf,W),pe(bc,N),pe(wc,H),pe($f,Y),B(_e))if(_e.length){const ie=t.exposed||(t.exposed={});_e.forEach(Z=>{Object.defineProperty(ie,Z,{get:()=>n[Z],set:xe=>n[Z]=xe})})}else t.exposed||(t.exposed={});se&&t.render===qe&&(t.render=se),ve!=null&&(t.inheritAttrs=ve),L&&(t.components=L),he&&(t.directives=he)}function Vf(t,e,n=qe,r=!1){B(t)&&(t=Qs(t));for(const s in t){const i=t[s];let o;me(i)?"default"in i?o=Nt(i.from||s,i.default,!0):o=Nt(i.from||s):o=Nt(i),Ce(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function _o(t,e,n){je(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ec(t,e,n,r){const s=r.includes(".")?hc(n,r):()=>n[r];if(we(t)){const i=e[t];V(i)&&Tr(s,i)}else if(V(t))Tr(s,t.bind(n));else if(me(t))if(B(t))t.forEach(i=>Ec(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Tr(s,i,t)}}function Ic(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>$r(c,u,o,!0)),$r(c,e,o)),i.set(e,c),c}function $r(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$r(t,i,n,!0),s&&s.forEach(o=>$r(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zf={data:vo,props:Bt,emits:Bt,methods:Bt,computed:Bt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Bt,directives:Bt,watch:qf,provide:vo,inject:Wf};function vo(t,e){return e?t?function(){return Te(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Wf(t,e){return Bt(Qs(t),Qs(e))}function Qs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Bt(t,e){return t?Te(Te(Object.create(null),t),e):e}function qf(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const r in e)n[r]=Oe(t[r],e[r]);return n}function Kf(t,e,n,r=!1){const s={},i={};Lr(i,as,1),t.propsDefaults=Object.create(null),Cc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:cf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Jf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let h=l[d];if(rs(t.emitsOptions,h))continue;const g=e[h];if(c)if(K(i,h))g!==i[h]&&(i[h]=g,u=!0);else{const w=rt(h);s[w]=Zs(c,a,w,g,t,!1)}else g!==i[h]&&(i[h]=g,u=!0)}}}else{Cc(t,e,s,i)&&(u=!0);let l;for(const d in a)(!e||!K(e,d)&&((l=Sn(d))===d||!K(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=Zs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!K(e,d)&&!0)&&(delete i[d],u=!0)}u&&ft(t,"set","$attrs")}function Cc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Er(c))continue;const u=e[c];let l;s&&K(s,l=rt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:rs(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=X(n),u=a||re;for(let l=0;l<i.length;l++){const d=i[l];n[d]=Zs(s,c,d,u[d],t,!K(u,d))}}return o}function Zs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(yn(s),r=u[n]=c.call(null,e),Kt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Sn(n))&&(r=!0))}return r}function Tc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const l=d=>{c=!0;const[h,g]=Tc(d,e,!0);Te(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,hn),hn;if(B(i))for(let l=0;l<i.length;l++){const d=rt(i[l]);yo(d)&&(o[d]=re)}else if(i)for(const l in i){const d=rt(l);if(yo(d)){const h=i[l],g=o[d]=B(h)||V(h)?{type:h}:h;if(g){const w=Eo(Boolean,g.type),O=Eo(String,g.type);g[0]=w>-1,g[1]=O<0||w<O,(w>-1||K(g,"default"))&&a.push(d)}}}const u=[o,a];return r.set(t,u),u}function yo(t){return t[0]!=="$"}function bo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function wo(t,e){return bo(t)===bo(e)}function Eo(t,e){return B(e)?e.findIndex(n=>wo(n,t)):V(e)&&wo(e,t)?0:-1}const Sc=t=>t[0]==="_"||t==="$stable",Ri=t=>B(t)?t.map(Ze):[Ze(t)],Gf=(t,e,n)=>{const r=Se((...s)=>Ri(e(...s)),n);return r._c=!1,r},Ac=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sc(s))continue;const i=t[s];if(V(i))e[s]=Gf(s,i,r);else if(i!=null){const o=Ri(i);e[s]=()=>o}}},Rc=(t,e)=>{const n=Ri(e);t.slots.default=()=>n},Xf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Lr(e,"_",n)):Ac(e,t.slots={})}else t.slots={},e&&Rc(t,e);Lr(t.slots,as,1)},Yf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Te(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ac(e,s)),o=e}else e&&(Rc(t,e),o={default:1});if(i)for(const a in s)!Sc(a)&&!(a in o)&&delete s[a]};function Oc(t,e){const n=Ae;if(n===null)return t;const r=cs(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=re]=e[i];V(o)&&(o={mounted:o,updated:o}),o.deep&&zt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Dt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(An(),je(c,n,8,[t.el,a,t,e]),Rn())}}function kc(){return{app:null,config:{isNativeTag:Au,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qf=0;function Zf(t,e){return function(r,s=null){V(r)||(r=Object.assign({},r)),s!=null&&!me(s)&&(s=null);const i=kc(),o=new Set;let a=!1;const c=i.app={_uid:Qf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bd,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(c,...l)):V(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,d){if(!a){const h=J(r,s);return h.appContext=i,l&&e?e(h,u):t(h,u,d),a=!0,c._container=u,u.__vue_app__=c,cs(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function ei(t,e,n,r,s=!1){if(B(t)){t.forEach((h,g)=>ei(h,e&&(B(e)?e[g]:e),n,r,s));return}if(Ur(r)&&!s)return;const i=r.shapeFlag&4?cs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===re?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(we(u)?(l[u]=null,K(d,u)&&(d[u]=null)):Ce(u)&&(u.value=null)),V(c))Pt(c,a,12,[o,l]);else{const h=we(c),g=Ce(c);if(h||g){const w=()=>{if(t.f){const O=h?l[c]:c.value;s?B(O)&&gi(O,i):B(O)?O.includes(i)||O.push(i):h?(l[c]=[i],K(d,c)&&(d[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else h?(l[c]=o,K(d,c)&&(d[c]=o)):Ce(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(w.id=-1,Ne(w,n)):w()}}}const Ne=Rf;function ed(t){return td(t)}function td(t,e){const n=Lu();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:h,setScopeId:g=qe,cloneNode:w,insertStaticContent:O}=t,T=(f,p,m,y=null,v=null,I=null,R=!1,E=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ht(f,p)&&(y=x(f),Be(f,v,I,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:k}=p;switch(b){case ki:A(f,p,m,y);break;case Ve:N(f,p,m,y);break;case Ss:f==null&&j(p,m,y,R);break;case ke:he(f,p,m,y,v,I,R,E,C);break;default:k&1?fe(f,p,m,y,v,I,R,E,C):k&6?Pe(f,p,m,y,v,I,R,E,C):(k&64||k&128)&&b.process(f,p,m,y,v,I,R,E,C,oe)}M!=null&&v&&ei(M,f&&f.ref,I,p||f,!p)},A=(f,p,m,y)=>{if(f==null)r(p.el=a(p.children),m,y);else{const v=p.el=f.el;p.children!==f.children&&u(v,p.children)}},N=(f,p,m,y)=>{f==null?r(p.el=c(p.children||""),m,y):p.el=f.el},j=(f,p,m,y)=>{[f.el,f.anchor]=O(f.children,p,m,y,f.el,f.anchor)},H=({el:f,anchor:p},m,y)=>{let v;for(;f&&f!==p;)v=h(f),r(f,m,y),f=v;r(p,m,y)},se=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),s(f),f=m;s(p)},fe=(f,p,m,y,v,I,R,E,C)=>{R=R||p.type==="svg",f==null?W(p,m,y,v,I,R,E,C):_e(f,p,v,I,R,E,C)},W=(f,p,m,y,v,I,R,E)=>{let C,b;const{type:M,props:k,shapeFlag:D,transition:F,patchFlag:G,dirs:ue}=f;if(f.el&&w!==void 0&&G===-1)C=f.el=w(f.el);else{if(C=f.el=o(f.type,I,k&&k.is,k),D&8?l(C,f.children):D&16&&Y(f.children,C,null,y,v,I&&M!=="foreignObject",R,E),ue&&Dt(f,null,y,"created"),k){for(const ce in k)ce!=="value"&&!Er(ce)&&i(C,ce,null,k[ce],I,f.children,y,v,S);"value"in k&&i(C,"value",null,k.value),(b=k.onVnodeBeforeMount)&&Xe(b,y,f)}de(C,f,f.scopeId,R,y)}ue&&Dt(f,null,y,"beforeMount");const te=(!v||v&&!v.pendingBranch)&&F&&!F.persisted;te&&F.beforeEnter(C),r(C,p,m),((b=k&&k.onVnodeMounted)||te||ue)&&Ne(()=>{b&&Xe(b,y,f),te&&F.enter(C),ue&&Dt(f,null,y,"mounted")},v)},de=(f,p,m,y,v)=>{if(m&&g(f,m),y)for(let I=0;I<y.length;I++)g(f,y[I]);if(v){let I=v.subTree;if(p===I){const R=v.vnode;de(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},Y=(f,p,m,y,v,I,R,E,C=0)=>{for(let b=C;b<f.length;b++){const M=f[b]=E?Ct(f[b]):Ze(f[b]);T(null,M,p,m,y,v,I,R,E)}},_e=(f,p,m,y,v,I,R)=>{const E=p.el=f.el;let{patchFlag:C,dynamicChildren:b,dirs:M}=p;C|=f.patchFlag&16;const k=f.props||re,D=p.props||re;let F;m&&Ut(m,!1),(F=D.onVnodeBeforeUpdate)&&Xe(F,m,p,f),M&&Dt(p,f,m,"beforeUpdate"),m&&Ut(m,!0);const G=v&&p.type!=="foreignObject";if(b?ve(f.dynamicChildren,b,E,m,y,G,I):R||xe(f,p,E,null,m,y,G,I,!1),C>0){if(C&16)L(E,p,k,D,m,y,v);else if(C&2&&k.class!==D.class&&i(E,"class",null,D.class,v),C&4&&i(E,"style",k.style,D.style,v),C&8){const ue=p.dynamicProps;for(let te=0;te<ue.length;te++){const ce=ue[te],ze=k[ce],tn=D[ce];(tn!==ze||ce==="value")&&i(E,ce,ze,tn,v,f.children,m,y,S)}}C&1&&f.children!==p.children&&l(E,p.children)}else!R&&b==null&&L(E,p,k,D,m,y,v);((F=D.onVnodeUpdated)||M)&&Ne(()=>{F&&Xe(F,m,p,f),M&&Dt(p,f,m,"updated")},y)},ve=(f,p,m,y,v,I,R)=>{for(let E=0;E<p.length;E++){const C=f[E],b=p[E],M=C.el&&(C.type===ke||!Ht(C,b)||C.shapeFlag&70)?d(C.el):m;T(C,b,M,null,y,v,I,R,!0)}},L=(f,p,m,y,v,I,R)=>{if(m!==y){for(const E in y){if(Er(E))continue;const C=y[E],b=m[E];C!==b&&E!=="value"&&i(f,E,b,C,R,p.children,v,I,S)}if(m!==re)for(const E in m)!Er(E)&&!(E in y)&&i(f,E,m[E],null,R,p.children,v,I,S);"value"in y&&i(f,"value",m.value,y.value)}},he=(f,p,m,y,v,I,R,E,C)=>{const b=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:k,dynamicChildren:D,slotScopeIds:F}=p;F&&(E=E?E.concat(F):F),f==null?(r(b,m,y),r(M,m,y),Y(p.children,m,M,v,I,R,E,C)):k>0&&k&64&&D&&f.dynamicChildren?(ve(f.dynamicChildren,D,m,v,I,R,E),(p.key!=null||v&&p===v.subTree)&&Pc(f,p,!0)):xe(f,p,m,M,v,I,R,E,C)},Pe=(f,p,m,y,v,I,R,E,C)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?v.ctx.activate(p,m,y,R,C):it(p,m,y,v,I,R,C):pe(f,p,C)},it=(f,p,m,y,v,I,R)=>{const E=f.component=dd(f,y,v);if(is(f)&&(E.ctx.renderer=oe),pd(E),E.asyncDep){if(v&&v.registerDep(E,ie),!f.el){const C=E.subTree=J(Ve);N(null,C,p,m)}return}ie(E,f,p,m,v,I,R)},pe=(f,p,m)=>{const y=p.component=f.component;if(Tf(f,p,m))if(y.asyncDep&&!y.asyncResolved){Z(y,p,m);return}else y.next=p,_f(y.update),y.update();else p.component=f.component,p.el=f.el,y.vnode=p},ie=(f,p,m,y,v,I,R)=>{const E=()=>{if(f.isMounted){let{next:M,bu:k,u:D,parent:F,vnode:G}=f,ue=M,te;Ut(f,!1),M?(M.el=G.el,Z(f,M,R)):M=G,k&&Ir(k),(te=M.props&&M.props.onVnodeBeforeUpdate)&&Xe(te,F,M,G),Ut(f,!0);const ce=Cs(f),ze=f.subTree;f.subTree=ce,T(ze,ce,d(ze.el),x(ze),f,v,I),M.el=ce.el,ue===null&&Sf(f,ce.el),D&&Ne(D,v),(te=M.props&&M.props.onVnodeUpdated)&&Ne(()=>Xe(te,F,M,G),v)}else{let M;const{el:k,props:D}=p,{bm:F,m:G,parent:ue}=f,te=Ur(p);if(Ut(f,!1),F&&Ir(F),!te&&(M=D&&D.onVnodeBeforeMount)&&Xe(M,ue,p),Ut(f,!0),k&&z){const ce=()=>{f.subTree=Cs(f),z(k,f.subTree,f,v,null)};te?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ce()):ce()}else{const ce=f.subTree=Cs(f);T(null,ce,m,y,f,v,I),p.el=ce.el}if(G&&Ne(G,v),!te&&(M=D&&D.onVnodeMounted)){const ce=p;Ne(()=>Xe(M,ue,ce),v)}p.shapeFlag&256&&f.a&&Ne(f.a,v),f.isMounted=!0,p=m=y=null}},C=f.effect=new bi(E,()=>oc(f.update),f.scope),b=f.update=C.run.bind(C);b.id=f.uid,Ut(f,!0),b()},Z=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Jf(f,p.props,y,m),Yf(f,p.children,m),An(),Ai(void 0,f.update),Rn()},xe=(f,p,m,y,v,I,R,E,C=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,k=p.children,{patchFlag:D,shapeFlag:F}=p;if(D>0){if(D&128){ot(b,k,m,y,v,I,R,E,C);return}else if(D&256){en(b,k,m,y,v,I,R,E,C);return}}F&8?(M&16&&S(b,v,I),k!==b&&l(m,k)):M&16?F&16?ot(b,k,m,y,v,I,R,E,C):S(b,v,I,!0):(M&8&&l(m,""),F&16&&Y(k,m,y,v,I,R,E,C))},en=(f,p,m,y,v,I,R,E,C)=>{f=f||hn,p=p||hn;const b=f.length,M=p.length,k=Math.min(b,M);let D;for(D=0;D<k;D++){const F=p[D]=C?Ct(p[D]):Ze(p[D]);T(f[D],F,m,null,v,I,R,E,C)}b>M?S(f,v,I,!0,!1,k):Y(p,m,y,v,I,R,E,C,k)},ot=(f,p,m,y,v,I,R,E,C)=>{let b=0;const M=p.length;let k=f.length-1,D=M-1;for(;b<=k&&b<=D;){const F=f[b],G=p[b]=C?Ct(p[b]):Ze(p[b]);if(Ht(F,G))T(F,G,m,null,v,I,R,E,C);else break;b++}for(;b<=k&&b<=D;){const F=f[k],G=p[D]=C?Ct(p[D]):Ze(p[D]);if(Ht(F,G))T(F,G,m,null,v,I,R,E,C);else break;k--,D--}if(b>k){if(b<=D){const F=D+1,G=F<M?p[F].el:y;for(;b<=D;)T(null,p[b]=C?Ct(p[b]):Ze(p[b]),m,G,v,I,R,E,C),b++}}else if(b>D)for(;b<=k;)Be(f[b],v,I,!0),b++;else{const F=b,G=b,ue=new Map;for(b=G;b<=D;b++){const Me=p[b]=C?Ct(p[b]):Ze(p[b]);Me.key!=null&&ue.set(Me.key,b)}let te,ce=0;const ze=D-G+1;let tn=!1,no=0;const Mn=new Array(ze);for(b=0;b<ze;b++)Mn[b]=0;for(b=F;b<=k;b++){const Me=f[b];if(ce>=ze){Be(Me,v,I,!0);continue}let Ge;if(Me.key!=null)Ge=ue.get(Me.key);else for(te=G;te<=D;te++)if(Mn[te-G]===0&&Ht(Me,p[te])){Ge=te;break}Ge===void 0?Be(Me,v,I,!0):(Mn[Ge-G]=b+1,Ge>=no?no=Ge:tn=!0,T(Me,p[Ge],m,null,v,I,R,E,C),ce++)}const ro=tn?nd(Mn):hn;for(te=ro.length-1,b=ze-1;b>=0;b--){const Me=G+b,Ge=p[Me],so=Me+1<M?p[Me+1].el:y;Mn[b]===0?T(null,Ge,m,so,v,I,R,E,C):tn&&(te<0||b!==ro[te]?Je(Ge,m,so,2):te--)}}},Je=(f,p,m,y,v=null)=>{const{el:I,type:R,transition:E,children:C,shapeFlag:b}=f;if(b&6){Je(f.component.subTree,p,m,y);return}if(b&128){f.suspense.move(p,m,y);return}if(b&64){R.move(f,p,m,oe);return}if(R===ke){r(I,p,m);for(let k=0;k<C.length;k++)Je(C[k],p,m,y);r(f.anchor,p,m);return}if(R===Ss){H(f,p,m);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(I),r(I,p,m),Ne(()=>E.enter(I),v);else{const{leave:k,delayLeave:D,afterLeave:F}=E,G=()=>r(I,p,m),ue=()=>{k(I,()=>{G(),F&&F()})};D?D(I,G,ue):ue()}else r(I,p,m)},Be=(f,p,m,y=!1,v=!1)=>{const{type:I,props:R,ref:E,children:C,dynamicChildren:b,shapeFlag:M,patchFlag:k,dirs:D}=f;if(E!=null&&ei(E,null,m,f,!0),M&256){p.ctx.deactivate(f);return}const F=M&1&&D,G=!Ur(f);let ue;if(G&&(ue=R&&R.onVnodeBeforeUnmount)&&Xe(ue,p,f),M&6)P(f.component,m,y);else{if(M&128){f.suspense.unmount(m,y);return}F&&Dt(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,m,v,oe,y):b&&(I!==ke||k>0&&k&64)?S(b,p,m,!1,!0):(I===ke&&k&384||!v&&M&16)&&S(C,p,m),y&&Es(f)}(G&&(ue=R&&R.onVnodeUnmounted)||F)&&Ne(()=>{ue&&Xe(ue,p,f),F&&Dt(f,null,p,"unmounted")},m)},Es=f=>{const{type:p,el:m,anchor:y,transition:v}=f;if(p===ke){_(m,y);return}if(p===Ss){se(f);return}const I=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:E}=v,C=()=>R(m,I);E?E(f.el,I,C):C()}else I()},_=(f,p)=>{let m;for(;f!==p;)m=h(f),s(f),f=m;s(p)},P=(f,p,m)=>{const{bum:y,scope:v,update:I,subTree:R,um:E}=f;y&&Ir(y),v.stop(),I&&(I.active=!1,Be(R,f,p,m)),E&&Ne(E,p),Ne(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(f,p,m,y=!1,v=!1,I=0)=>{for(let R=I;R<f.length;R++)Be(f[R],p,m,y,v)},x=f=>f.shapeFlag&6?x(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ee=(f,p,m)=>{f==null?p._vnode&&Be(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),lc(),p._vnode=f},oe={p:T,um:Be,m:Je,r:Es,mt:it,mc:Y,pc:xe,pbc:ve,n:x,o:t};let q,z;return e&&([q,z]=e(oe)),{render:ee,hydrate:q,createApp:Zf(ee,q)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Pc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ct(s[i]),a.el=o.el),n||Pc(o,a))}}function nd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const rd=t=>t.__isTeleport,Nc="components",sd="directives";function Oi(t,e){return xc(Nc,t,!0,e)||t}const id=Symbol();function Lc(t){return xc(sd,t)}function xc(t,e,n=!0,r=!1){const s=Ae||be;if(s){const i=s.type;if(t===Nc){const a=vd(i);if(a&&(a===e||a===rt(e)||a===es(rt(e))))return i}const o=Io(s[t]||i[t],e)||Io(s.appContext[t],e);return!o&&r?i:o}}function Io(t,e){return t&&(t[e]||t[rt(e)]||t[es(rt(e))])}const ke=Symbol(void 0),ki=Symbol(void 0),Ve=Symbol(void 0),Ss=Symbol(void 0),qn=[];let qt=null;function Q(t=!1){qn.push(qt=t?null:[])}function od(){qn.pop(),qt=qn[qn.length-1]||null}let Br=1;function Co(t){Br+=t}function Mc(t){return t.dynamicChildren=Br>0?qt||hn:null,od(),Br>0&&qt&&qt.push(t),t}function le(t,e,n,r,s,i){return Mc(U(t,e,n,r,s,i,!0))}function er(t,e,n,r,s){return Mc(J(t,e,n,r,s,!0))}function Fr(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}const as="__vInternal",Dc=({key:t})=>t!=null?t:null,Sr=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||Ce(t)||V(t)?{i:Ae,r:t,k:e,f:!!n}:t:null;function U(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dc(e),ref:e&&Sr(e),scopeId:ss,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=we(n)?8:16),Br>0&&!o&&qt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&qt.push(c),c}const J=ad;function ad(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===id)&&(t=Ve),Fr(t)){const a=Gt(t,e,!0);return n&&Ni(a,n),a}if(yd(t)&&(t=t.__vccOpts),e){e=cd(e);let{class:a,style:c}=e;a&&!we(a)&&(e.class=ar(a)),me(c)&&(Qa(c)&&!B(c)&&(c=Te({},c)),e.style=pi(c))}const o=we(t)?1:Af(t)?128:rd(t)?64:me(t)?4:V(t)?2:0;return U(t,e,n,r,s,o,i,!0)}function cd(t){return t?Qa(t)||as in t?Te({},t):t:null}function Gt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?kn(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dc(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Sr(e)):[s,Sr(e)]:Sr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor}}function Pi(t=" ",e=0){return J(ki,null,t,e)}function xt(t="",e=!1){return e?(Q(),er(Ve,null,t)):J(Ve,null,t)}function Ze(t){return t==null||typeof t=="boolean"?J(Ve):B(t)?J(ke,null,t.slice()):typeof t=="object"?Ct(t):J(ki,null,String(t))}function Ct(t){return t.el===null||t.memo?t:Gt(t)}function Ni(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ni(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(as in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[Pi(e)]):n=8);t.children=e,t.shapeFlag|=n}function kn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ar([e.class,r.class]));else if(s==="style")e.style=pi([e.style,r.style]);else if(Yr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xe(t,e,n,r=null){je(t,e,7,[n,r])}function Uc(t,e,n,r){let s;const i=n&&n[r];if(B(t)||we(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(me(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function $c(t,e,n={},r,s){if(Ae.isCE||Ae.parent&&Ur(Ae.parent)&&Ae.parent.isCE)return J("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Q();const o=i&&Bc(i(n)),a=er(ke,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Bc(t){return t.some(e=>Fr(e)?!(e.type===Ve||e.type===ke&&!Bc(e.children)):!0)?t:null}const ti=t=>t?Fc(t)?cs(t)||t.proxy:ti(t.parent):null,Hr=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ti(t.parent),$root:t=>ti(t.root),$emit:t=>t.emit,$options:t=>Ic(t),$forceUpdate:t=>()=>oc(t.update),$nextTick:t=>ic.bind(t.proxy),$watch:t=>Of.bind(t)}),ld={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==re&&K(r,e))return o[e]=1,r[e];if(s!==re&&K(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&K(u,e))return o[e]=3,i[e];if(n!==re&&K(n,e))return o[e]=4,n[e];Ys&&(o[e]=0)}}const l=Hr[e];let d,h;if(l)return e==="$attrs"&&$e(t,"get",e),l(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==re&&K(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,K(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==re&&K(s,e)?(s[e]=n,!0):r!==re&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&K(t,o)||e!==re&&K(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(Hr,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},ud=kc();let fd=0;function dd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ud,i={uid:fd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tc(r,s),emitsOptions:fc(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bf.bind(null,i),t.ce&&t.ce(i),i}let be=null;const hd=()=>be||Ae,yn=t=>{be=t,t.scope.on()},Kt=()=>{be&&be.scope.off(),be=null};function Fc(t){return t.vnode.shapeFlag&4}let tr=!1;function pd(t,e=!1){tr=e;const{props:n,children:r}=t.vnode,s=Fc(t);Kf(t,n,s,e),Xf(t,r);const i=s?md(t,e):void 0;return tr=!1,i}function md(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Za(new Proxy(t.ctx,ld));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?_d(t):null;yn(t),An();const i=Pt(r,t,0,[t.props,s]);if(Rn(),Kt(),Ua(i)){if(i.then(Kt,Kt),e)return i.then(o=>{To(t,o,e)}).catch(o=>{ns(o,t,0)});t.asyncDep=i}else To(t,i,e)}else Hc(t,e)}function To(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=rc(e)),Hc(t,n)}let So;function Hc(t,e,n){const r=t.type;if(!t.render){if(!e&&So&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Te(Te({isCustomElement:i,delimiters:a},o),c);r.render=So(s,u)}}t.render=r.render||qe}yn(t),An(),jf(t),Rn(),Kt()}function gd(t){return new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}})}function _d(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=gd(t))},slots:t.slots,emit:t.emit,expose:e}}function cs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rc(Za(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hr)return Hr[n](t)}}))}function vd(t){return V(t)&&t.displayName||t.name}function yd(t){return V(t)&&"__vccOpts"in t}const et=(t,e)=>pf(t,e,tr);function Li(t,e,n){const r=arguments.length;return r===2?me(e)&&!B(e)?Fr(e)?J(t,null,[e]):J(t,e):J(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fr(n)&&(n=[n]),J(t,e,n))}const bd="3.2.33",wd="http://www.w3.org/2000/svg",jt=typeof document!="undefined"?document:null,Ao=jt&&jt.createElement("template"),Ed={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?jt.createElementNS(wd,t):jt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ao.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ao.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Id(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cd(t,e,n){const r=t.style,s=we(n);if(n&&!s){for(const i in n)ni(r,i,n[i]);if(e&&!we(e))for(const i in e)n[i]==null&&ni(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ro=/\s*!important$/;function ni(t,e,n){if(B(n))n.forEach(r=>ni(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Td(t,e);Ro.test(n)?t.setProperty(Sn(r),n.replace(Ro,""),"important"):t[r]=n}}const Oo=["Webkit","Moz","ms"],As={};function Td(t,e){const n=As[e];if(n)return n;let r=rt(e);if(r!=="filter"&&r in t)return As[e]=r;r=es(r);for(let s=0;s<Oo.length;s++){const i=Oo[s]+r;if(i in t)return As[e]=i}return e}const ko="http://www.w3.org/1999/xlink";function Sd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ko,e.slice(6,e.length)):t.setAttributeNS(ko,e,n);else{const i=Eu(e);n==null||i&&!xa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ad(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=xa(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[jc,Rd]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ri=0;const Od=Promise.resolve(),kd=()=>{ri=0},Pd=()=>ri||(Od.then(kd),ri=jc());function Vt(t,e,n,r){t.addEventListener(e,n,r)}function Nd(t,e,n,r){t.removeEventListener(e,n,r)}function Ld(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=xd(e);if(r){const u=i[e]=Md(r,s);Vt(t,a,u,c)}else o&&(Nd(t,a,o,c),i[e]=void 0)}}const Po=/(?:Once|Passive|Capture)$/;function xd(t){let e;if(Po.test(t)){e={};let n;for(;n=t.match(Po);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Sn(t.slice(2)),e]}function Md(t,e){const n=r=>{const s=r.timeStamp||jc();(Rd||s>=n.attached-1)&&je(Dd(r,n.value),e,5,[r])};return n.value=t,n.attached=Pd(),n}function Dd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const No=/^on[a-z]/,Ud=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Id(t,r,s):e==="style"?Cd(t,n,r):Yr(e)?mi(e)||Ld(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$d(t,e,r,s))?Ad(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sd(t,e,r,s))};function $d(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&No.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||No.test(e)&&we(n)?!1:e in t}const _t="transition",Dn="animation",xi=(t,{slots:e})=>Li(pc,Bd(t),e);xi.displayName="Transition";const Vc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xi.props=Te({},pc.props,Vc);const $t=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lo=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function Bd(t){const e={};for(const L in t)L in Vc||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,w=Fd(s),O=w&&w[0],T=w&&w[1],{onBeforeEnter:A,onEnter:N,onEnterCancelled:j,onLeave:H,onLeaveCancelled:se,onBeforeAppear:fe=A,onAppear:W=N,onAppearCancelled:de=j}=e,Y=(L,he,Pe)=>{nn(L,he?l:a),nn(L,he?u:o),Pe&&Pe()},_e=(L,he)=>{nn(L,g),nn(L,h),he&&he()},ve=L=>(he,Pe)=>{const it=L?W:N,pe=()=>Y(he,L,Pe);$t(it,[he,pe]),xo(()=>{nn(he,L?c:i),vt(he,L?l:a),Lo(it)||Mo(he,r,O,pe)})};return Te(e,{onBeforeEnter(L){$t(A,[L]),vt(L,i),vt(L,o)},onBeforeAppear(L){$t(fe,[L]),vt(L,c),vt(L,u)},onEnter:ve(!1),onAppear:ve(!0),onLeave(L,he){const Pe=()=>_e(L,he);vt(L,d),Vd(),vt(L,h),xo(()=>{nn(L,d),vt(L,g),Lo(H)||Mo(L,r,T,Pe)}),$t(H,[L,Pe])},onEnterCancelled(L){Y(L,!1),$t(j,[L])},onAppearCancelled(L){Y(L,!0),$t(de,[L])},onLeaveCancelled(L){_e(L),$t(se,[L])}})}function Fd(t){if(t==null)return null;if(me(t))return[Rs(t.enter),Rs(t.leave)];{const e=Rs(t);return[e,e]}}function Rs(t){return xr(t)}function vt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function nn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function xo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Hd=0;function Mo(t,e,n,r){const s=t._endId=++Hd,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=jd(t,e);if(!o)return r();const u=o+"end";let l=0;const d=()=>{t.removeEventListener(u,h),i()},h=g=>{g.target===t&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),t.addEventListener(u,h)}function jd(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(_t+"Delay"),i=r(_t+"Duration"),o=Do(s,i),a=r(Dn+"Delay"),c=r(Dn+"Duration"),u=Do(a,c);let l=null,d=0,h=0;e===_t?o>0&&(l=_t,d=o,h=i.length):e===Dn?u>0&&(l=Dn,d=u,h=c.length):(d=Math.max(o,u),l=d>0?o>u?_t:Dn:null,h=l?l===_t?i.length:c.length:0);const g=l===_t&&/\b(transform|all)(,|$)/.test(n[_t+"Property"]);return{type:l,timeout:d,propCount:h,hasTransform:g}}function Do(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Uo(n)+Uo(t[r])))}function Uo(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Vd(){return document.body.offsetHeight}const jr=t=>{const e=t.props["onUpdate:modelValue"];return B(e)?n=>Ir(e,n):e};function zd(t){t.target.composing=!0}function $o(t){const e=t.target;e.composing&&(e.composing=!1,Wd(e,"input"))}function Wd(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const gb={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=jr(s);const i=r||s.props&&s.props.type==="number";Vt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=xr(a)),t._assign(a)}),n&&Vt(t,"change",()=>{t.value=t.value.trim()}),e||(Vt(t,"compositionstart",zd),Vt(t,"compositionend",$o),Vt(t,"change",$o))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=jr(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&xr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},_b={created(t,{value:e},n){t.checked=Nr(e,n.props.value),t._assign=jr(n),Vt(t,"change",()=>{t._assign(qd(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=jr(r),e!==n&&(t.checked=Nr(e,r.props.value))}};function qd(t){return"_value"in t?t._value:t.value}const Kd=["ctrl","shift","alt","meta"],Jd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kd.some(n=>t[`${n}Key`]&&!e.includes(n))},vb=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Jd[e[s]];if(i&&i(n,e))return}return t(n,...r)},yb={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Un(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Un(t,!0),r.enter(t)):r.leave(t,()=>{Un(t,!1)}):Un(t,e))},beforeUnmount(t,{value:e}){Un(t,e)}};function Un(t,e){t.style.display=e?t._vod:"none"}const Gd=Te({patchProp:Ud},Ed);let Bo;function Xd(){return Bo||(Bo=ed(Gd))}const Yd=(...t)=>{const e=Xd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Qd(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qd(t){return we(t)?document.querySelector(t):t}var Zd="/logo/main.svg";/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zc=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Pn=t=>zc?Symbol(t):"_vr_"+t,eh=Pn("rvlm"),Fo=Pn("rvd"),Mi=Pn("r"),Wc=Pn("rl"),si=Pn("rvl"),fn=typeof window!="undefined";function th(t){return t.__esModule||zc&&t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Os(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Kn=()=>{},nh=/\/$/,rh=t=>t.replace(nh,"");function ks(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ah(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function sh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ho(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ih(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bn(e.matched[r],n.matched[s])&&qc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!oh(t[n],e[n]))return!1;return!0}function oh(t,e){return Array.isArray(t)?jo(t,e):Array.isArray(e)?jo(e,t):t===e}function jo(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ah(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var nr;(function(t){t.pop="pop",t.push="push"})(nr||(nr={}));var Jn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jn||(Jn={}));function ch(t){if(!t)if(fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rh(t)}const lh=/^[^#]+#/;function uh(t,e){return t.replace(lh,"#")+e}function fh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ls=()=>({left:window.pageXOffset,top:window.pageYOffset});function dh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=fh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vo(t,e){return(history.state?history.state.position-e:-1)+t}const ii=new Map;function hh(t,e){ii.set(t,e)}function ph(t){const e=ii.get(t);return ii.delete(t),e}let mh=()=>location.protocol+"//"+location.host;function Kc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ho(c,"")}return Ho(n,t)+r+s}function gh(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=Kc(t,location),w=n.value,O=e.value;let T=0;if(h){if(n.value=g,e.value=h,o&&o===w){o=null;return}T=O?h.position-O.position:0}else r(g);s.forEach(A=>{A(n.value,w,{delta:T,type:nr.pop,direction:T?T>0?Jn.forward:Jn.back:Jn.unknown})})};function c(){o=n.value}function u(h){s.push(h);const g=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(g),g}function l(){const{history:h}=window;!h.state||h.replaceState(ne({},h.state,{scroll:ls()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function zo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ls():null}}function _h(t){const{history:e,location:n}=window,r={value:Kc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:mh()+t+c;try{e[l?"replaceState":"pushState"](u,"",h),s.value=u}catch(g){console.error(g),n[l?"replace":"assign"](h)}}function o(c,u){const l=ne({},e.state,zo(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ne({},s.value,e.state,{forward:c,scroll:ls()});i(l.current,l,!0);const d=ne({},zo(r.value,c,null),{position:l.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function vh(t){t=ch(t);const e=_h(t),n=gh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:uh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yh(t){return typeof t=="string"||t&&typeof t=="object"}function Jc(t){return typeof t=="string"||typeof t=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gc=Pn("nf");var Wo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wo||(Wo={}));function wn(t,e){return ne(new Error,{type:t,[Gc]:!0},e)}function bt(t,e){return t instanceof Error&&Gc in t&&(e==null||!!(t.type&e))}const qo="[^/]+?",bh={sensitive:!1,strict:!1,start:!0,end:!0},wh=/[.+*?^${}()[\]/\\]/g;function Eh(t,e){const n=ne({},bh,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const h=u[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(wh,"\\$&"),g+=40;else if(h.type===1){const{value:w,repeatable:O,optional:T,regexp:A}=h;i.push({name:w,repeatable:O,optional:T});const N=A||qo;if(N!==qo){g+=10;try{new RegExp(`(${N})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${w}" (${N}): `+H.message)}}let j=O?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;d||(j=T&&u.length<2?`(?:/${j})`:"/"+j),T&&(j+="?"),s+=j,g+=20,T&&(g+=-8),O&&(g+=-20),N===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),d={};if(!l)return null;for(let h=1;h<l.length;h++){const g=l[h]||"",w=i[h-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(u){let l="",d=!1;for(const h of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const g of h)if(g.type===0)l+=g.value;else if(g.type===1){const{value:w,repeatable:O,optional:T}=g,A=w in u?u[w]:"";if(Array.isArray(A)&&!O)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const N=Array.isArray(A)?A.join("/"):A;if(!N)if(T)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);l+=N}}return l}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ih(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ch(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ih(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Th={type:0,value:""},Sh=/[a-zA-Z0-9_]/;function Ah(t){if(!t)return[[]];if(t==="/")return[[Th]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function d(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Sh.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function Rh(t,e,n){const r=Eh(Ah(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Oh(t,e){const n=[],r=new Map;e=Jo({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,d,h){const g=!h,w=Ph(l);w.aliasOf=h&&h.record;const O=Jo(e,l),T=[w];if("alias"in l){const j=typeof l.alias=="string"?[l.alias]:l.alias;for(const H of j)T.push(ne({},w,{components:h?h.record.components:w.components,path:H,aliasOf:h?h.record:w}))}let A,N;for(const j of T){const{path:H}=j;if(d&&H[0]!=="/"){const se=d.record.path,fe=se[se.length-1]==="/"?"":"/";j.path=d.record.path+(H&&fe+H)}if(A=Rh(j,d,O),h?h.alias.push(A):(N=N||A,N!==A&&N.alias.push(A),g&&l.name&&!Ko(A)&&o(l.name)),"children"in w){const se=w.children;for(let fe=0;fe<se.length;fe++)i(se[fe],A,h&&h.children[fe])}h=h||A,c(A)}return N?()=>{o(N)}:Kn}function o(l){if(Jc(l)){const d=r.get(l);d&&(r.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let d=0;for(;d<n.length&&Ch(l,n[d])>=0&&(l.record.path!==n[d].record.path||!Xc(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!Ko(l)&&r.set(l.record.name,l)}function u(l,d){let h,g={},w,O;if("name"in l&&l.name){if(h=r.get(l.name),!h)throw wn(1,{location:l});O=h.record.name,g=ne(kh(d.params,h.keys.filter(N=>!N.optional).map(N=>N.name)),l.params),w=h.stringify(g)}else if("path"in l)w=l.path,h=n.find(N=>N.re.test(w)),h&&(g=h.parse(w),O=h.record.name);else{if(h=d.name?r.get(d.name):n.find(N=>N.re.test(d.path)),!h)throw wn(1,{location:l,currentLocation:d});O=h.record.name,g=ne({},d.params,l.params),w=h.stringify(g)}const T=[];let A=h;for(;A;)T.unshift(A.record),A=A.parent;return{name:O,path:w,params:g,matched:T,meta:Lh(T)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function kh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ph(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Nh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Nh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ko(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lh(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Jo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Xc(t,e){return e.children.some(n=>n===t||Xc(t,n))}const Yc=/#/g,xh=/&/g,Mh=/\//g,Dh=/=/g,Uh=/\?/g,Qc=/\+/g,$h=/%5B/g,Bh=/%5D/g,Zc=/%5E/g,Fh=/%60/g,el=/%7B/g,Hh=/%7C/g,tl=/%7D/g,jh=/%20/g;function Di(t){return encodeURI(""+t).replace(Hh,"|").replace($h,"[").replace(Bh,"]")}function Vh(t){return Di(t).replace(el,"{").replace(tl,"}").replace(Zc,"^")}function oi(t){return Di(t).replace(Qc,"%2B").replace(jh,"+").replace(Yc,"%23").replace(xh,"%26").replace(Fh,"`").replace(el,"{").replace(tl,"}").replace(Zc,"^")}function zh(t){return oi(t).replace(Dh,"%3D")}function Wh(t){return Di(t).replace(Yc,"%23").replace(Uh,"%3F")}function qh(t){return t==null?"":Wh(t).replace(Mh,"%2F")}function Vr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Kh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qc," "),o=i.indexOf("="),a=Vr(o<0?i:i.slice(0,o)),c=o<0?null:Vr(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Go(t){let e="";for(let n in t){const r=t[n];if(n=zh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&oi(i)):[r&&oi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Jh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function $n(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Tt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(wn(4,{from:n,to:e})):d instanceof Error?a(d):yh(d)?a(wn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(d=>a(d))})}function Ps(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Gh(a)){const u=(a.__vccOpts||a)[e];u&&s.push(Tt(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=th(u)?u.default:u;i.components[o]=l;const h=(l.__vccOpts||l)[e];return h&&Tt(h,n,r,i,o)()}))}}return s}function Gh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xo(t){const e=Nt(Mi),n=Nt(Wc),r=et(()=>e.resolve(ye(t.to))),s=et(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const h=d.findIndex(bn.bind(null,l));if(h>-1)return h;const g=Yo(c[u-2]);return u>1&&Yo(l)===g&&d[d.length-1].path!==g?d.findIndex(bn.bind(null,c[u-2])):h}),i=et(()=>s.value>-1&&Qh(n.params,r.value.params)),o=et(()=>s.value>-1&&s.value===n.matched.length-1&&qc(n.params,r.value.params));function a(c={}){return Yh(c)?e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(Kn):Promise.resolve()}return{route:r,href:et(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Xh=_c({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xo,setup(t,{slots:e}){const n=On(Xo(t)),{options:r}=Nt(Mi),s=et(()=>({[Qo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Li("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),It=Xh;function Yh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Yo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qo=(t,e,n)=>t!=null?t:e!=null?e:n,Zh=_c({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Nt(si),s=et(()=>t.route||r.value),i=Nt(Fo,0),o=et(()=>s.value.matched[i]);Cr(Fo,i+1),Cr(eh,o),Cr(si,s);const a=lf();return Tr(()=>[a.value,o.value,t.name],([c,u,l],[d,h,g])=>{u&&(u.instances[l]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!bn(u,h)||!d)&&(u.enterCallbacks[l]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=s.value,u=o.value,l=u&&u.components[t.name],d=t.name;if(!l)return Zo(n.default,{Component:l,route:c});const h=u.props[t.name],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,O=Li(l,ne({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(u.instances[d]=null)},ref:a}));return Zo(n.default,{Component:O,route:c})||O}}});function Zo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nl=Zh;function ep(t){const e=Oh(t.routes,t),n=t.parseQuery||Kh,r=t.stringifyQuery||Go,s=t.history,i=$n(),o=$n(),a=$n(),c=uf(yt);let u=yt;fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Os.bind(null,_=>""+_),d=Os.bind(null,qh),h=Os.bind(null,Vr);function g(_,P){let S,x;return Jc(_)?(S=e.getRecordMatcher(_),x=P):x=_,e.addRoute(x,S)}function w(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function O(){return e.getRoutes().map(_=>_.record)}function T(_){return!!e.getRecordMatcher(_)}function A(_,P){if(P=ne({},P||c.value),typeof _=="string"){const z=ks(n,_,P.path),f=e.resolve({path:z.path},P),p=s.createHref(z.fullPath);return ne(z,f,{params:h(f.params),hash:Vr(z.hash),redirectedFrom:void 0,href:p})}let S;if("path"in _)S=ne({},_,{path:ks(n,_.path,P.path).path});else{const z=ne({},_.params);for(const f in z)z[f]==null&&delete z[f];S=ne({},_,{params:d(_.params)}),P.params=d(P.params)}const x=e.resolve(S,P),ee=_.hash||"";x.params=l(h(x.params));const oe=sh(r,ne({},_,{hash:Vh(ee),path:x.path})),q=s.createHref(oe);return ne({fullPath:oe,hash:ee,query:r===Go?Jh(_.query):_.query||{}},x,{redirectedFrom:void 0,href:q})}function N(_){return typeof _=="string"?ks(n,_,c.value.path):ne({},_)}function j(_,P){if(u!==_)return wn(8,{from:P,to:_})}function H(_){return W(_)}function se(_){return H(ne(N(_),{replace:!0}))}function fe(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let x=typeof S=="function"?S(_):S;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=N(x):{path:x},x.params={}),ne({query:_.query,hash:_.hash,params:_.params},x)}}function W(_,P){const S=u=A(_),x=c.value,ee=_.state,oe=_.force,q=_.replace===!0,z=fe(S);if(z)return W(ne(N(z),{state:ee,force:oe,replace:q}),P||S);const f=S;f.redirectedFrom=P;let p;return!oe&&ih(r,x,S)&&(p=wn(16,{to:f,from:x}),en(x,x,!0,!1)),(p?Promise.resolve(p):Y(f,x)).catch(m=>bt(m)?bt(m,2)?m:xe(m):ie(m,f,x)).then(m=>{if(m){if(bt(m,2))return W(ne(N(m.to),{state:ee,force:oe,replace:q}),P||f)}else m=ve(f,x,!0,q,ee);return _e(f,x,m),m})}function de(_,P){const S=j(_,P);return S?Promise.reject(S):Promise.resolve()}function Y(_,P){let S;const[x,ee,oe]=tp(_,P);S=Ps(x.reverse(),"beforeRouteLeave",_,P);for(const z of x)z.leaveGuards.forEach(f=>{S.push(Tt(f,_,P))});const q=de.bind(null,_,P);return S.push(q),rn(S).then(()=>{S=[];for(const z of i.list())S.push(Tt(z,_,P));return S.push(q),rn(S)}).then(()=>{S=Ps(ee,"beforeRouteUpdate",_,P);for(const z of ee)z.updateGuards.forEach(f=>{S.push(Tt(f,_,P))});return S.push(q),rn(S)}).then(()=>{S=[];for(const z of _.matched)if(z.beforeEnter&&!P.matched.includes(z))if(Array.isArray(z.beforeEnter))for(const f of z.beforeEnter)S.push(Tt(f,_,P));else S.push(Tt(z.beforeEnter,_,P));return S.push(q),rn(S)}).then(()=>(_.matched.forEach(z=>z.enterCallbacks={}),S=Ps(oe,"beforeRouteEnter",_,P),S.push(q),rn(S))).then(()=>{S=[];for(const z of o.list())S.push(Tt(z,_,P));return S.push(q),rn(S)}).catch(z=>bt(z,8)?z:Promise.reject(z))}function _e(_,P,S){for(const x of a.list())x(_,P,S)}function ve(_,P,S,x,ee){const oe=j(_,P);if(oe)return oe;const q=P===yt,z=fn?history.state:{};S&&(x||q?s.replace(_.fullPath,ne({scroll:q&&z&&z.scroll},ee)):s.push(_.fullPath,ee)),c.value=_,en(_,P,S,q),xe()}let L;function he(){L=s.listen((_,P,S)=>{const x=A(_),ee=fe(x);if(ee){W(ne(ee,{replace:!0}),x).catch(Kn);return}u=x;const oe=c.value;fn&&hh(Vo(oe.fullPath,S.delta),ls()),Y(x,oe).catch(q=>bt(q,12)?q:bt(q,2)?(W(q.to,x).then(z=>{bt(z,20)&&!S.delta&&S.type===nr.pop&&s.go(-1,!1)}).catch(Kn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),ie(q,x,oe))).then(q=>{q=q||ve(x,oe,!1),q&&(S.delta?s.go(-S.delta,!1):S.type===nr.pop&&bt(q,20)&&s.go(-1,!1)),_e(x,oe,q)}).catch(Kn)})}let Pe=$n(),it=$n(),pe;function ie(_,P,S){xe(_);const x=it.list();return x.length?x.forEach(ee=>ee(_,P,S)):console.error(_),Promise.reject(_)}function Z(){return pe&&c.value!==yt?Promise.resolve():new Promise((_,P)=>{Pe.add([_,P])})}function xe(_){return pe||(pe=!_,he(),Pe.list().forEach(([P,S])=>_?S(_):P()),Pe.reset()),_}function en(_,P,S,x){const{scrollBehavior:ee}=t;if(!fn||!ee)return Promise.resolve();const oe=!S&&ph(Vo(_.fullPath,0))||(x||!S)&&history.state&&history.state.scroll||null;return ic().then(()=>ee(_,P,oe)).then(q=>q&&dh(q)).catch(q=>ie(q,_,P))}const ot=_=>s.go(_);let Je;const Be=new Set;return{currentRoute:c,addRoute:g,removeRoute:w,hasRoute:T,getRoutes:O,resolve:A,options:t,push:H,replace:se,go:ot,back:()=>ot(-1),forward:()=>ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:it.add,isReady:Z,install(_){const P=this;_.component("RouterLink",It),_.component("RouterView",nl),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),fn&&!Je&&c.value===yt&&(Je=!0,H(s.location).catch(ee=>{}));const S={};for(const ee in yt)S[ee]=et(()=>c.value[ee]);_.provide(Mi,P),_.provide(Wc,On(S)),_.provide(si,c);const x=_.unmount;Be.add(_),_.unmount=function(){Be.delete(_),Be.size<1&&(u=yt,L&&L(),c.value=yt,Je=!1,pe=!1),x()}}}}function rn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>bn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>bn(u,c))||s.push(c))}return[n,r,s]}var pt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const np={name:"grid-x"},rp={class:"grid-x"};function sp(t,e,n,r,s,i){return Q(),le("div",rp,[$c(t.$slots,"default")])}var ip=pt(np,[["render",sp]]);const op={name:"cell"},ap={class:"cell"};function cp(t,e,n,r,s,i){return Q(),le("div",ap,[$c(t.$slots,"default")])}var Ns=pt(op,[["render",cp]]);const lp={name:"CogOutlineIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},up=["aria-hidden","aria-label"],fp=["fill","width","height"],dp={d:"M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"},hp={key:0};function pp(t,e,n,r,s,i){return Q(),le("span",kn({"aria-hidden":!n.title,"aria-label":n.title,class:"material-design-icon cog-outline-icon",role:"img"},t.$attrs,{onClick:e[0]||(e[0]=o=>t.$emit("click",o))}),[(Q(),le("svg",{fill:n.fillColor,class:"material-design-icon__svg",width:n.size,height:n.size,viewBox:"0 0 24 24"},[U("path",dp,[n.title?(Q(),le("title",hp,He(n.title),1)):xt("",!0)])],8,fp))],16,up)}var mp=pt(lp,[["render",pp]]);const gp={name:"HomeOutlineIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},_p=["aria-hidden","aria-label"],vp=["fill","width","height"],yp={d:"M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"},bp={key:0};function wp(t,e,n,r,s,i){return Q(),le("span",kn({"aria-hidden":!n.title,"aria-label":n.title,class:"material-design-icon home-outline-icon",role:"img"},t.$attrs,{onClick:e[0]||(e[0]=o=>t.$emit("click",o))}),[(Q(),le("svg",{fill:n.fillColor,class:"material-design-icon__svg",width:n.size,height:n.size,viewBox:"0 0 24 24"},[U("path",yp,[n.title?(Q(),le("title",bp,He(n.title),1)):xt("",!0)])],8,vp))],16,_p)}var Ep=pt(gp,[["render",wp]]);const Ip={name:"LightningBoltOutlineIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Cp=["aria-hidden","aria-label"],Tp=["fill","width","height"],Sp={d:"M11 9.47V11H14.76L13 14.53V13H9.24L11 9.47M13 1L6 15H11V23L18 9H13V1Z"},Ap={key:0};function Rp(t,e,n,r,s,i){return Q(),le("span",kn({"aria-hidden":!n.title,"aria-label":n.title,class:"material-design-icon lightning-bolt-outline-icon",role:"img"},t.$attrs,{onClick:e[0]||(e[0]=o=>t.$emit("click",o))}),[(Q(),le("svg",{fill:n.fillColor,class:"material-design-icon__svg",width:n.size,height:n.size,viewBox:"0 0 24 24"},[U("path",Sp,[n.title?(Q(),le("title",Ap,He(n.title),1)):xt("",!0)])],8,Tp))],16,Cp)}var Op=pt(Ip,[["render",Rp]]);const kp={name:"BookOpenPageVariantOutlineIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Pp=["aria-hidden","aria-label"],Np=["fill","width","height"],Lp={d:"M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z"},xp={key:0};function Mp(t,e,n,r,s,i){return Q(),le("span",kn({"aria-hidden":!n.title,"aria-label":n.title,class:"material-design-icon book-open-page-variant-outline-icon",role:"img"},t.$attrs,{onClick:e[0]||(e[0]=o=>t.$emit("click",o))}),[(Q(),le("svg",{fill:n.fillColor,class:"material-design-icon__svg",width:n.size,height:n.size,viewBox:"0 0 24 24"},[U("path",Lp,[n.title?(Q(),le("title",xp,He(n.title),1)):xt("",!0)])],8,Np))],16,Pp)}var Dp=pt(kp,[["render",Mp]]);/**
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
 *//**
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
 */const rl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Up=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(h=64)),r.push(n[l],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Up(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$p=function(t){const e=rl(t);return sl.encodeByteArray(e,!0)},il=function(t){return $p(t).replace(/\./g,"")},Bp=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Fp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function jp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zp(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wp(){return typeof indexedDB=="object"}function qp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Kp="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kp,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,a,r)}}function Jp(t,e){return t.replace(Gp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gp=/\{\$([^}]+)}/g;function Xp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ea(i)&&ea(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ea(t){return t!==null&&typeof t=="object"}/**
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
 */function lr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function jn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yp(t,e){const n=new Qp(t,e);return n.subscribe.bind(n)}class Qp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}/**
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
 */function mt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Vn(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class ta{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new ol(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new al(this._db.createObjectStore(e,n))}close(){this._db.close()}}class ol{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new al(this._transaction.objectStore(e))}}class al{constructor(e){this._store=e}index(e){return new na(this._store.index(e))}createIndex(e,n,r){return new na(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Vn(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Vn(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Vn(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Vn(e,"Error clearing IndexedDB object store")}}class na{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Vn(n,"Error reading from IndexedDB")}}function em(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new ta(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new ta(i.result),o.oldVersion,o.newVersion,new ol(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class En{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class tm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rm(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nm(t){return t===Ft?void 0:t}function rm(t){return t.instantiationMode==="EAGER"}/**
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
 */class sm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const im={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},om=ae.INFO,am={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},cm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=am[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=om,this._logHandler=cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}/**
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
 */class lm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(um(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function um(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ai="@firebase/app",ra="0.7.21";/**
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
 */const Ui=new cl("@firebase/app"),fm="@firebase/app-compat",dm="@firebase/analytics-compat",hm="@firebase/analytics",pm="@firebase/app-check-compat",mm="@firebase/app-check",gm="@firebase/auth",_m="@firebase/auth-compat",vm="@firebase/database",ym="@firebase/database-compat",bm="@firebase/functions",wm="@firebase/functions-compat",Em="@firebase/installations",Im="@firebase/installations-compat",Cm="@firebase/messaging",Tm="@firebase/messaging-compat",Sm="@firebase/performance",Am="@firebase/performance-compat",Rm="@firebase/remote-config",Om="@firebase/remote-config-compat",km="@firebase/storage",Pm="@firebase/storage-compat",Nm="@firebase/firestore",Lm="@firebase/firestore-compat",xm="firebase",Mm="9.6.11";/**
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
 */const ll="[DEFAULT]",Dm={[ai]:"fire-core",[fm]:"fire-core-compat",[hm]:"fire-analytics",[dm]:"fire-analytics-compat",[mm]:"fire-app-check",[pm]:"fire-app-check-compat",[gm]:"fire-auth",[_m]:"fire-auth-compat",[vm]:"fire-rtdb",[ym]:"fire-rtdb-compat",[bm]:"fire-fn",[wm]:"fire-fn-compat",[Em]:"fire-iid",[Im]:"fire-iid-compat",[Cm]:"fire-fcm",[Tm]:"fire-fcm-compat",[Sm]:"fire-perf",[Am]:"fire-perf-compat",[Rm]:"fire-rc",[Om]:"fire-rc-compat",[km]:"fire-gcs",[Pm]:"fire-gcs-compat",[Nm]:"fire-fst",[Lm]:"fire-fst-compat","fire-js":"fire-js",[xm]:"fire-js-all"};/**
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
 */const Wr=new Map,ci=new Map;function Um(t,e){try{t.container.addComponent(e)}catch(n){Ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rr(t){const e=t.name;if(ci.has(e))return Ui.debug(`There were multiple attempts to register component ${e}.`),!1;ci.set(e,t);for(const n of Wr.values())Um(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $m={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Xt=new cr("app","Firebase",$m);/**
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
 */class Bm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const us=Mm;function Fm(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Xt.create("bad-app-name",{appName:String(r)});const s=Wr.get(r);if(s){if(zr(t,s.options)&&zr(n,s.config))return s;throw Xt.create("duplicate-app",{appName:r})}const i=new sm(r);for(const a of ci.values())i.addComponent(a);const o=new Bm(t,n,i);return Wr.set(r,o),o}function Hm(t=ll){const e=Wr.get(t);if(!e)throw Xt.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=Dm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ui.warn(a.join(" "));return}rr(new En(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jm="firebase-heartbeat-database",Vm=1,sr="firebase-heartbeat-store";let xs=null;function fl(){return xs||(xs=em(jm,Vm,(t,e)=>{switch(e){case 0:t.createObjectStore(sr)}}).catch(t=>{throw Xt.create("storage-open",{originalErrorMessage:t.message})})),xs}async function zm(t){try{return(await fl()).transaction(sr).objectStore(sr).get(dl(t))}catch(e){throw Xt.create("storage-get",{originalErrorMessage:e.message})}}async function sa(t,e){try{const r=(await fl()).transaction(sr,"readwrite");return await r.objectStore(sr).put(e,dl(t)),r.complete}catch(n){throw Xt.create("storage-set",{originalErrorMessage:n.message})}}function dl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wm=1024,qm=30*24*60*60*1e3;class Km{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ia();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=qm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ia(),{heartbeatsToSend:n,unsentEntries:r}=Jm(this._heartbeatsCache.heartbeats),s=il(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ia(){return new Date().toISOString().substring(0,10)}function Jm(t,e=Wm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wp()?qp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oa(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Xm(t){rr(new En("platform-logger",e=>new lm(e),"PRIVATE")),rr(new En("heartbeat",e=>new Km(e),"PRIVATE")),gn(ai,ra,t),gn(ai,ra,"esm2017"),gn("fire-js","")}Xm("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function $i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ym=hl,pl=new cr("auth","Firebase",hl());/**
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
 */const aa=new cl("@firebase/auth");function Ar(t,...e){aa.logLevel<=ae.ERROR&&aa.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function Ke(t,...e){throw Bi(t,...e)}function tt(t,...e){return Bi(t,...e)}function Qm(t,e,n){const r=Object.assign(Object.assign({},Ym()),{[e]:n});return new cr("auth","Firebase",r).create(e,{appName:t.name})}function Bi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pl.create(t,...e)}function $(t,e,...n){if(!t)throw Bi(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ar(e),new Error(e)}function dt(t,e){t||lt(e)}/**
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
 */const ca=new Map;function ut(t){dt(t instanceof Function,"Expected a class definition");let e=ca.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ca.set(t,e),e)}/**
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
 */function Zm(t,e){const n=ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,e!=null?e:{}))return s;Ke(s,"already-initialized")}return n.initialize({options:e})}function eg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function li(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tg(){return la()==="http:"||la()==="https:"}function la(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ng(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tg()||jp()||"connection"in navigator)?navigator.onLine:!0}function rg(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ur{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hp()||Vp()}get(){return ng()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fi(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ml{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const ig=new ur(3e4,6e4);function Ln(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zt(t,e,n,r,s={}){return gl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=lr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ml.fetch()(_l(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function gl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sg),e);try{const s=new og(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ms(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ms(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qm(t,l,u);Ke(t,l)}}catch(s){if(s instanceof Nn)throw s;Ke(t,"network-request-failed")}}async function fr(t,e,n,r,s={}){const i=await Zt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _l(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Fi(t.config,s):`${t.config.apiScheme}://${s}`}class og{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),ig.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ms(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function ag(t,e){return Zt(t,"POST","/v1/accounts:delete",e)}async function cg(t,e){return Zt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lg(t,e=!1){const n=mt(t),r=await n.getIdToken(e),s=Hi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gn(Ds(s.auth_time)),issuedAtTime:Gn(Ds(s.iat)),expirationTime:Gn(Ds(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ds(t){return Number(t)*1e3}function Hi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ar("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bp(n);return s?JSON.parse(s):(Ar("Failed to decode base64 JWT payload"),null)}catch(s){return Ar("Caught error parsing JWT payload as JSON",s),null}}function ug(t){const e=Hi(t);return $(e,"internal-error"),$(typeof e.exp!="undefined","internal-error"),$(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&fg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gn(this.lastLoginAt),this.creationTime=Gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await In(t,cg(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mg(i.providerUserInfo):[],a=pg(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function hg(t){const e=mt(t);await qr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mg(t){return t.map(e=>{var{providerId:n}=e,r=$i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gg(t,e){const n=await gl(t,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_l(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ml.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken!="undefined","internal-error"),$(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ir;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
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
 */function wt(t,e){$(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lg(this,e)}reload(){return hg(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await In(this,ag(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:j,emailVerified:H,isAnonymous:se,providerData:fe,stsTokenManager:W}=n;$(j&&W,e,"internal-error");const de=ir.fromJSON(this.name,W);$(typeof j=="string",e,"internal-error"),wt(d,e.name),wt(h,e.name),$(typeof H=="boolean",e,"internal-error"),$(typeof se=="boolean",e,"internal-error"),wt(g,e.name),wt(w,e.name),wt(O,e.name),wt(T,e.name),wt(A,e.name),wt(N,e.name);const Y=new Jt({uid:j,auth:e,email:h,emailVerified:H,displayName:d,isAnonymous:se,photoURL:w,phoneNumber:g,tenantId:O,stsTokenManager:de,createdAt:A,lastLoginAt:N});return fe&&Array.isArray(fe)&&(Y.providerData=fe.map(_e=>Object.assign({},_e))),T&&(Y._redirectEventId=T),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ir;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qr(i),i}}/**
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
 */class yl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yl.type="NONE";const ua=yl;/**
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
 */function Rr(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(ut(ua),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||ut(ua);const o=Rr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=Jt._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new _n(i,e,r))}}/**
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
 */function fa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(El(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cl(e))return"Blackberry";if(Tl(e))return"Webos";if(ji(e))return"Safari";if((e.includes("chrome/")||wl(e))&&!e.includes("edge/"))return"Chrome";if(Il(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bl(t=Re()){return/firefox\//i.test(t)}function ji(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wl(t=Re()){return/crios\//i.test(t)}function El(t=Re()){return/iemobile/i.test(t)}function Il(t=Re()){return/android/i.test(t)}function Cl(t=Re()){return/blackberry/i.test(t)}function Tl(t=Re()){return/webos/i.test(t)}function fs(t=Re()){return/iphone|ipad|ipod/i.test(t)}function _g(t=Re()){var e;return fs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vg(){return zp()&&document.documentMode===10}function Sl(t=Re()){return fs(t)||Il(t)||Tl(t)||Cl(t)||/windows phone/i.test(t)||El(t)}function yg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Al(t,e=[]){let n;switch(t){case"Browser":n=fa(Re());break;case"Worker":n=`${fa(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class bg{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new da(this),this.idTokenSubscription=new da(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?($(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?mt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Al(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ds(t){return mt(t)}class da{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yp(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Vi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function wg(t,e){return Zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Eg(t,e){return fr(t,"POST","/v1/accounts:signInWithPassword",Ln(t,e))}async function Ig(t,e){return Zt(t,"POST","/v1/accounts:sendOobCode",Ln(t,e))}async function Cg(t,e){return Ig(t,e)}/**
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
 */async function Tg(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}async function Sg(t,e){return fr(t,"POST","/v1/accounts:signInWithEmailLink",Ln(t,e))}/**
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
 */class or extends Vi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new or(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new or(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Eg(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tg(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return wg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Sg(e,{idToken:n,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vn(t,e){return fr(t,"POST","/v1/accounts:signInWithIdp",Ln(t,e))}/**
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
 */const Ag="http://localhost";class Yt extends Vi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$i(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:Ag,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lr(n)}return e}}/**
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
 */function Rg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Og(t){const e=Hn(jn(t)).link,n=e?Hn(jn(e)).deep_link_id:null,r=Hn(jn(t)).deep_link_id;return(r?Hn(jn(r)).link:null)||r||n||e||t}class zi{constructor(e){var n,r,s,i,o,a;const c=Hn(jn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Rg((s=c.mode)!==null&&s!==void 0?s:null);$(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Og(e);try{return new zi(n)}catch{return null}}}/**
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
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,n){return or._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zi.parseLink(n);return $(r,"argument-error"),or._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dr extends Rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class St extends dr{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
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
 */class At extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class Rt extends dr{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Ot extends dr{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */async function kg(t,e){return fr(t,"POST","/v1/accounts:signUp",Ln(t,e))}/**
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
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=ha(r);return new Qt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ha(r);return new Qt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ha(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Kr extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Kr(e,n,r,s)}}function Ol(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Kr._fromErrorAndOperation(t,i,e,r):i})}async function Pg(t,e,n=!1){const r=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",r)}/**
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
 */async function Ng(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await In(t,Ol(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Hi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Qt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
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
 */async function kl(t,e,n=!1){const r="signIn",s=await Ol(t,r,e),i=await Qt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Lg(t,e){return kl(ds(t),e)}/**
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
 */function xg(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function bb(t,e,n){const r=mt(t),s={requestType:"PASSWORD_RESET",email:e};n&&xg(r,s,n),await Cg(r,s)}async function wb(t,e,n){const r=ds(t),s=await kg(r,{returnSecureToken:!0,email:e,password:n}),i=await Qt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Eb(t,e,n){return Lg(mt(t),xn.credential(e,n))}/**
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
 */async function Mg(t,e){return Zt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ib(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=mt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await In(r,Mg(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Dg(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function Ug(t){return mt(t).signOut()}const Jr="__sak";/**
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
 */class Pl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function $g(){const t=Re();return ji(t)||fs(t)}const Bg=1e3,Fg=10;class Nl extends Pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$g()&&yg(),this.fallbackToPolling=Sl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nl.type="LOCAL";const Hg=Nl;/**
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
 */class Ll extends Pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ll.type="SESSION";const xl=Ll;/**
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
 */function jg(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await jg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hs.receivers=[];/**
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
 */function Wi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Vg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Wi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function zg(t){nt().location.href=t}/**
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
 */function Ml(){return typeof nt().WorkerGlobalScope!="undefined"&&typeof nt().importScripts=="function"}async function Wg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kg(){return Ml()?self:null}/**
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
 */const Dl="firebaseLocalStorageDb",Jg=1,Gr="firebaseLocalStorage",Ul="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ps(t,e){return t.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function Gg(){const t=indexedDB.deleteDatabase(Dl);return new hr(t).toPromise()}function ui(){const t=indexedDB.open(Dl,Jg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gr,{keyPath:Ul})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gr)?e(r):(r.close(),await Gg(),e(await ui()))})})}async function pa(t,e,n){const r=ps(t,!0).put({[Ul]:e,value:n});return new hr(r).toPromise()}async function Xg(t,e){const n=ps(t,!1).get(e),r=await new hr(n).toPromise();return r===void 0?null:r.value}function ma(t,e){const n=ps(t,!0).delete(e);return new hr(n).toPromise()}const Yg=800,Qg=3;class $l{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ml()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hs._getInstance(Kg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wg(),!this.activeServiceWorker)return;this.sender=new Vg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ui();return await pa(e,Jr,"1"),await ma(e,Jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ma(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ps(s,!1).getAll();return new hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$l.type="LOCAL";const Zg=$l;/**
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
 */function e_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function t_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",e_().appendChild(r)})}function n_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ur(3e4,6e4);/**
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
 */function r_(t,e){return e?ut(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qi extends Vi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function s_(t){return kl(t.auth,new qi(t),t.bypassAuthState)}function i_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Ng(n,new qi(t),t.bypassAuthState)}async function o_(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Pg(n,new qi(t),t.bypassAuthState)}/**
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
 */class Bl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return s_;case"linkViaPopup":case"linkViaRedirect":return o_;case"reauthViaPopup":case"reauthViaRedirect":return i_;default:Ke(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const a_=new ur(2e3,1e4);class dn extends Bl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Wi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,a_.get())};e()}}dn.currentPopupAction=null;/**
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
 */const c_="pendingRedirect",Us=new Map;class l_ extends Bl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Us.get(this.auth._key());if(!e){try{const r=await u_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Us.set(this.auth._key(),e)}return this.bypassAuthState||Us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u_(t,e){const n=d_(e),r=f_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function f_(t){return ut(t._redirectPersistence)}function d_(t){return Rr(c_,t.config.apiKey,t.name)}async function h_(t,e,n=!1){const r=ds(t),s=r_(r,e),o=await new l_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const p_=10*60*1e3;class m_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p_&&this.cachedEventUids.clear(),this.cachedEventUids.has(ga(e))}saveEventToCache(e){this.cachedEventUids.add(ga(e)),this.lastProcessedEventTime=Date.now()}}function ga(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fl(t);default:return!1}}/**
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
 */async function __(t,e={}){return Zt(t,"GET","/v1/projects",e)}/**
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
 */const v_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y_=/^https?/;async function b_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await __(t);for(const n of e)try{if(w_(n))return}catch{}Ke(t,"unauthorized-domain")}function w_(t){const e=li(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!y_.test(n))return!1;if(v_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const E_=new ur(3e4,6e4);function _a(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I_(t){return new Promise((e,n)=>{var r,s,i;function o(){_a(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_a(),n(tt(t,"network-request-failed"))},timeout:E_.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=n_("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},t_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Or=null,e})}let Or=null;function C_(t){return Or=Or||I_(t),Or}/**
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
 */const T_=new ur(5e3,15e3),S_="__/auth/iframe",A_="emulator/auth/iframe",R_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k_(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fi(e,A_):`https://${t.config.authDomain}/${S_}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=O_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lr(r).slice(1)}`}async function P_(t){const e=await C_(t),n=nt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:k_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},T_.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const N_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L_=500,x_=600,M_="_blank",D_="http://localhost";class va{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U_(t,e,n,r=L_,s=x_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},N_),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Re().toLowerCase();n&&(a=wl(u)?M_:n),bl(u)&&(e=e||D_,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[g,w])=>`${h}${g}=${w},`,"");if(_g(u)&&a!=="_self")return $_(e||"",a),new va(null);const d=window.open(e||"",a,l);$(d,t,"popup-blocked");try{d.focus()}catch{}return new va(d)}function $_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const B_="__/auth/handler",F_="emulator/auth/handler";function ya(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof Rl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof dr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${H_(t)}?${lr(a).slice(1)}`}function H_({config:t}){return t.emulator?Fi(t,F_):`https://${t.authDomain}/${B_}`}/**
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
 */const $s="webStorageSupport";class j_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xl,this._completeRedirectFn=h_}async _openPopup(e,n,r,s){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ya(e,n,r,li(),s);return U_(e,o,Wi())}async _openRedirect(e,n,r,s){return await this._originValidation(e),zg(ya(e,n,r,li(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P_(e),r=new m_(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($s,{type:$s},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$s];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sl()||ji()||fs()}}const V_=j_;var ba="@firebase/auth",wa="0.19.12";/**
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
 */class z_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function W_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function q_(t){rr(new En("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Al(t)},l=new bg(a,c,u);return eg(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rr(new En("auth-internal",e=>{const n=ds(e.getProvider("auth").getImmediate());return(r=>new z_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(ba,wa,W_(t)),gn(ba,wa,"esm2017")}/**
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
 */function ms(t=Hm()){const e=ul(t,"auth");return e.isInitialized()?e.getImmediate():Zm(t,{popupRedirectResolver:V_,persistence:[Zg,Hg,xl]})}q_("Browser");const K_={id:"global-sidebar"},J_={id:"top-bar"},G_=U("div",{id:"logo-wrap"},[U("img",{src:Zd,alt:"SetUpon"})],-1),X_={class:"tb-buttons"},Y_={class:"mini-nav hover-fx dark"},Q_={class:"large-state"},Z_=U("span",{class:"large-state"},"Login",-1),ev={class:"large-state",id:"user-centre"},tv=["src"],nv={key:0,id:"user-centre-pop"},rv=U("i",null,"User id:",-1),sv=Pi("View profile"),iv={id:"main-nav",class:"hover-fx dark"},ov=U("span",{class:"large-state"},"Home",-1),av=U("span",{class:"large-state"},"Trending",-1),cv=U("span",{class:"large-state"},"Browse Items",-1),lv={data(){return{userCentreOpen:!1}},methods:{onClickAway(t){console.log(t)},toggleUserCentre(t){this.userCentreOpen?this.userCentreOpen=!1:this.userCentreOpen=!0},logout(){Ug(ms()).then(()=>{alert("Successfully logged out"),this.$router.push("/")}).catch(t=>{alert(t.message),this.$router.push("/")})}},mounted(){}},uv=Object.assign(lv,{setup(t){const e=On({uid:null,displayName:null,photoURL:null,at:null,lastLoggedIn:null,created:null});return Dg(ms(),n=>{console.log("User at this state:",n),n!=null?(console.log("Setting currentUser!"),e.uid=n.uid,e.displayName=n.displayName,e.photoURL=n.photoURL,e.at=n.stsTokenManager.accessToken,e.lastLoggedIn=n.metadata.lastSignInTime,e.created=n.metadata.creationTime):(e.uid=null,e.displayName=null,e.photoURL=null,e.at=null,e.lastLoggedIn=null,e.created=null)}),(n,r)=>{const s=Oi("Container"),i=Lc("click-away");return Q(),er(s,{class:"full"},{default:Se(()=>[J(ip,null,{default:Se(()=>[J(Ns,{class:"large-3",id:"sidebar-cell"}),J(Ns,{class:"large-auto"},{default:Se(()=>[J(xi,{name:"slide",mode:"out-in"},{default:Se(()=>[J(ye(nl),{id:"router-view",currentUser:ye(e)},null,8,["currentUser"])]),_:1})]),_:1}),J(Ns,{class:"large-3",id:"sidebar-cell",style:{position:"fixed"}},{default:Se(()=>[U("header",K_,[U("div",J_,[J(ye(It),{to:"/"},{default:Se(()=>[G_]),_:1}),U("div",X_,[U("nav",Y_,[J(ye(It),{to:"/settings"},{default:Se(()=>[U("span",Q_,[J(mp)])]),_:1}),ye(e).uid==null?(Q(),er(ye(It),{key:0,to:"/login"},{default:Se(()=>[Z_]),_:1})):(Q(),le(ke,{key:1},[U("a",{href:"#",onClick:r[0]||(r[0]=(...o)=>n.toggleUserCentre&&n.toggleUserCentre(...o))},[U("div",ev,[U("img",{src:ye(e).photoURL,alt:"that's you lol"},null,8,tv),U("b",null,He(ye(e).displayName),1)])]),n.userCentreOpen?Oc((Q(),le("div",nv,[U("small",null,[rv,Pi(" "+He(ye(e).uid),1)]),J(ye(It),{to:"/"+this.currentUser.displayName},{default:Se(()=>[sv]),_:1},8,["to"]),U("a",{href:"#",onClick:r[1]||(r[1]=(...o)=>n.logout&&n.logout(...o))},"Logout")])),[[i,n.toggleUserCentre]]):xt("",!0)],64))])])]),U("ul",iv,[U("li",null,[J(ye(It),{to:"/"},{default:Se(()=>[J(Ep,{size:29}),ov]),_:1})]),U("li",null,[J(ye(It),{to:"/trending",disabled:""},{default:Se(()=>[J(Op,{size:29}),av]),_:1})]),U("li",null,[J(ye(It),{to:"/items"},{default:Se(()=>[J(Dp,{size:29}),cv]),_:1})])])])]),_:1})]),_:1})]),_:1})}}}),fv="modulepreload",Ea={},dv="/",at=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${dv}${r}`,r in Ea)return;Ea[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":fv,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const hv={name:"work-thumb",props:{key:String,title:{type:String,default:"Untitled Post"},imgSrc:{type:String,default:"/assets/img/thumbs/nihdc4.png"},desc:{type:String,default:"Hey bruv, there is no description"},slug:{type:String,required:!0},size:{type:Number,default:6},user:{type:String,default:"Anonymous"}},computed:{columns(){return"large-"+this.size},alt(){return this.alt==null?this.desc:this.alt}}},pv={class:"work-thumb-wrapper"},mv={class:"work-thumb-wrapper-cont"},gv={class:"details"},_v={class:"primary-details"},vv={class:"cat-wrapper"},yv={class:"categories"},bv={class:"secondary-details"},wv={class:"user"},Ev={class:"thumb-bg"},Iv=["src","alt"];function Cv(t,e,n,r,s,i){const o=Oi("RouterLink");return Q(),le("div",{class:ar(["cell","medium-6",i.columns,"work-thumb"])},[J(o,{to:`/${n.slug}`},{default:Se(()=>[U("div",pv,[U("div",mv,[U("div",gv,[U("div",_v,[U("h2",null,He(n.title),1),U("p",null,He(n.desc),1),U("div",vv,[U("div",yv,[(Q(!0),le(ke,null,Uc(t.cat,a=>(Q(),le("span",{key:a},He(a),1))),128)),U("span",null,He(t.cat),1)])])]),U("div",bv,[U("div",wv,[U("span",null,He(n.user),1)])])])]),U("div",Ev,[U("img",{src:n.imgSrc,alt:i.alt},null,8,Iv)])])]),_:1},8,["to"])],2)}var Tv=pt(hv,[["render",Cv],["__scopeId","data-v-052c5bf4"]]);const Sv={name:"PlusIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Av=["aria-hidden","aria-label"],Rv=["fill","width","height"],Ov={d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"},kv={key:0};function Pv(t,e,n,r,s,i){return Q(),le("span",kn({"aria-hidden":!n.title,"aria-label":n.title,class:"material-design-icon plus-icon",role:"img"},t.$attrs,{onClick:e[0]||(e[0]=o=>t.$emit("click",o))}),[(Q(),le("svg",{fill:n.fillColor,class:"material-design-icon__svg",width:n.size,height:n.size,viewBox:"0 0 24 24"},[U("path",Ov,[n.title?(Q(),le("title",kv,He(n.title),1)):xt("",!0)])],8,Rv))],16,Av)}var Nv=pt(Sv,[["render",Pv]]);const gs=t=>(wf("data-v-40323d99"),t=t(),Ef(),t),Lv={key:0,class:"create-menu-expand"},xv=gs(()=>U("div",{class:"action-button"},"Setup",-1)),Mv=gs(()=>U("div",{class:"action-button"},"Item",-1)),Dv=gs(()=>U("h1",null,"Explore",-1)),Uv=gs(()=>U("section",null,[U("h4",null,"\u{1F62D} That's all folks!"),U("p",null,"Looks like you have been mindlessly scrolling too long, maybe it's time for you to start working at your desk again.")],-1)),$v={data(){return{post:{title:"Post Title",_id:"test_id",img:"https://source.unsplash.com/random/?gaming-setup",category:["cats","pets"],columns:8},openedCreateMenu:!1,published:null}},beforeCreate(){document.body.className=""},created(){this.$http.get("https://omvs9m8wk9.execute-api.us-east-1.amazonaws.com/posts").then(t=>{this.published=t.data,console.log(t)}).catch(t=>{console.log("Unable to get published posts from setUpon api: error...\u{1F62D} "+t)})},methods:{openCreate(){this.openedCreateMenu?this.openedCreateMenu=!1:this.openedCreateMenu=!0}}},Bv=Object.assign($v,{setup(t){return(e,n)=>{const r=Oi("RouterLink"),s=Lc("click-away");return Q(),le("main",null,[e.openedCreateMenu?Oc((Q(),le("div",Lv,[J(r,{to:"/create/setup"},{default:Se(()=>[xv]),_:1}),J(r,{to:"/"},{default:Se(()=>[Mv]),_:1})])),[[s,e.openCreate]]):xt("",!0),U("div",{class:ar(["action-button",{opened:e.openedCreateMenu}]),onClick:n[0]||(n[0]=(...i)=>e.openCreate&&e.openCreate(...i))},[J(Nv,{size:"45"})],2),Dv,e.published!=null?(Q(!0),le(ke,{key:1},Uc(e.published.Items.slice().reverse(),i=>(Q(),er(Tv,{key:i.title,title:i.title,slug:i.user+"/"+i.date,"img-src":i.images[0].url,desc:i.description,size:e.post.columns,user:i.user},null,8,["title","slug","img-src","desc","size","user"]))),128)):xt("",!0),Uv])}}});var Fv=pt(Bv,[["__scopeId","data-v-40323d99"]]);const Hl=ep({history:vh("/"),routes:[{path:"/",name:"home",component:Fv},{path:"/trending",name:"trending",component:()=>at(()=>import("./Trending.14fdf4c6.js"),["assets/Trending.14fdf4c6.js","assets/Items.1287e252.css"])},{path:"/settings",name:"settings",component:()=>at(()=>import("./Settings.9d146c3a.js"),["assets/Settings.9d146c3a.js","assets/Settings.14836b95.css"])},{path:"/items",name:"Setup Items",component:()=>at(()=>import("./Items.841395d7.js"),["assets/Items.841395d7.js","assets/Items.1287e252.css"])},{path:"/create/setup",name:"create_post",component:()=>at(()=>import("./Post.a17e0969.js"),["assets/Post.a17e0969.js","assets/Post.d55230f5.css","assets/container.48eafde8.js"]),meta:{authRequired:!0}},{path:"/:user",name:"profile",component:()=>at(()=>import("./Profile.a8a1d12b.js"),["assets/Profile.a8a1d12b.js","assets/Profile.0d1df4c1.css"]),props:!0},{path:"/:user/:date",name:"posts",component:()=>at(()=>import("./Post.a17e0969.js"),["assets/Post.a17e0969.js","assets/Post.d55230f5.css","assets/container.48eafde8.js"]),props:!0},{path:"/items/:item",name:"item",component:()=>at(()=>import("./Item.b8ee2516.js"),["assets/Item.b8ee2516.js","assets/Item.c8ccf159.css","assets/container.48eafde8.js"]),props:!0},{path:"/login",name:"Authentication",component:()=>at(()=>import("./Auth.4fc3d356.js"),[])},{path:"/recover",name:"recover password",component:()=>at(()=>import("./Recover.98786189.js"),[])}]});Hl.beforeEach((t,e,n)=>{t.matched.some(r=>r.meta.authRequired)?ms().currentUser?n():(alert("You must be logged in to see this page"),n({path:"/"})):n()});var Ki={exports:{}},jl=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},Hv=jl,Mt=Object.prototype.toString;function Ji(t){return Array.isArray(t)}function fi(t){return typeof t=="undefined"}function jv(t){return t!==null&&!fi(t)&&t.constructor!==null&&!fi(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Vl(t){return Mt.call(t)==="[object ArrayBuffer]"}function Vv(t){return Mt.call(t)==="[object FormData]"}function zv(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Vl(t.buffer),e}function Wv(t){return typeof t=="string"}function qv(t){return typeof t=="number"}function zl(t){return t!==null&&typeof t=="object"}function kr(t){if(Mt.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Kv(t){return Mt.call(t)==="[object Date]"}function Jv(t){return Mt.call(t)==="[object File]"}function Gv(t){return Mt.call(t)==="[object Blob]"}function Wl(t){return Mt.call(t)==="[object Function]"}function Xv(t){return zl(t)&&Wl(t.pipe)}function Yv(t){return Mt.call(t)==="[object URLSearchParams]"}function Qv(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Zv(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Gi(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),Ji(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function di(){var t={};function e(s,i){kr(t[i])&&kr(s)?t[i]=di(t[i],s):kr(s)?t[i]=di({},s):Ji(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)Gi(arguments[n],e);return t}function ey(t,e,n){return Gi(e,function(s,i){n&&typeof s=="function"?t[i]=Hv(s,n):t[i]=s}),t}function ty(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var Le={isArray:Ji,isArrayBuffer:Vl,isBuffer:jv,isFormData:Vv,isArrayBufferView:zv,isString:Wv,isNumber:qv,isObject:zl,isPlainObject:kr,isUndefined:fi,isDate:Kv,isFile:Jv,isBlob:Gv,isFunction:Wl,isStream:Xv,isURLSearchParams:Yv,isStandardBrowserEnv:Zv,forEach:Gi,merge:di,extend:ey,trim:Qv,stripBOM:ty},sn=Le;function Ia(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ql=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(sn.isURLSearchParams(n))s=n.toString();else{var i=[];sn.forEach(n,function(c,u){c===null||typeof c=="undefined"||(sn.isArray(c)?u=u+"[]":c=[c],sn.forEach(c,function(d){sn.isDate(d)?d=d.toISOString():sn.isObject(d)&&(d=JSON.stringify(d)),i.push(Ia(u)+"="+Ia(d))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},ny=Le;function _s(){this.handlers=[]}_s.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};_s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};_s.prototype.forEach=function(e){ny.forEach(this.handlers,function(r){r!==null&&e(r)})};var ry=_s,sy=Le,iy=function(e,n){sy.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Kl=function(e,n,r,s,i){return e.config=n,r&&(e.code=r),e.request=s,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Jl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oy=Kl,Gl=function(e,n,r,s,i){var o=new Error(e);return oy(o,n,r,s,i)},ay=Gl,cy=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(ay("Request failed with status code "+r.status,r.config,null,r.request,r))},br=Le,ly=br.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),br.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),br.isString(i)&&c.push("path="+i),br.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),uy=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},fy=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},dy=uy,hy=fy,py=function(e,n){return e&&!dy(n)?hy(e,n):n},Bs=Le,my=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],gy=function(e){var n={},r,s,i;return e&&Bs.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=Bs.trim(a.substr(0,i)).toLowerCase(),s=Bs.trim(a.substr(i+1)),r){if(n[r]&&my.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},Ca=Le,_y=Ca.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=Ca.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Xi(t){this.message=t}Xi.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Xi.prototype.__CANCEL__=!0;var vs=Xi,wr=Le,vy=cy,yy=ly,by=ql,wy=py,Ey=gy,Iy=_y,Fs=Gl,Cy=Jl,Ty=vs,Ta=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function u(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}wr.isFormData(i)&&delete o["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(d+":"+h)}var g=wy(e.baseURL,e.url);l.open(e.method.toUpperCase(),by(g,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function w(){if(!!l){var T="getAllResponseHeaders"in l?Ey(l.getAllResponseHeaders()):null,A=!a||a==="text"||a==="json"?l.responseText:l.response,N={data:A,status:l.status,statusText:l.statusText,headers:T,config:e,request:l};vy(function(H){r(H),u()},function(H){s(H),u()},N),l=null}}if("onloadend"in l?l.onloadend=w:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(w)},l.onabort=function(){!l||(s(Fs("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){s(Fs("Network Error",e,null,l)),l=null},l.ontimeout=function(){var A=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",N=e.transitional||Cy;e.timeoutErrorMessage&&(A=e.timeoutErrorMessage),s(Fs(A,e,N.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",l)),l=null},wr.isStandardBrowserEnv()){var O=(e.withCredentials||Iy(g))&&e.xsrfCookieName?yy.read(e.xsrfCookieName):void 0;O&&(o[e.xsrfHeaderName]=O)}"setRequestHeader"in l&&wr.forEach(o,function(A,N){typeof i=="undefined"&&N.toLowerCase()==="content-type"?delete o[N]:l.setRequestHeader(N,A)}),wr.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&a!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(T){!l||(s(!T||T&&T.type?new Ty("canceled"):T),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null),l.send(i)})},Ee=Le,Sa=iy,Sy=Kl,Ay=Jl,Ry={"Content-Type":"application/x-www-form-urlencoded"};function Aa(t,e){!Ee.isUndefined(t)&&Ee.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Oy(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Ta),t}function ky(t,e,n){if(Ee.isString(t))try{return(e||JSON.parse)(t),Ee.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var ys={transitional:Ay,adapter:Oy(),transformRequest:[function(e,n){return Sa(n,"Accept"),Sa(n,"Content-Type"),Ee.isFormData(e)||Ee.isArrayBuffer(e)||Ee.isBuffer(e)||Ee.isStream(e)||Ee.isFile(e)||Ee.isBlob(e)?e:Ee.isArrayBufferView(e)?e.buffer:Ee.isURLSearchParams(e)?(Aa(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Ee.isObject(e)||n&&n["Content-Type"]==="application/json"?(Aa(n,"application/json"),ky(e)):e}],transformResponse:[function(e){var n=this.transitional||ys.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&Ee.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?Sy(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ee.forEach(["delete","get","head"],function(e){ys.headers[e]={}});Ee.forEach(["post","put","patch"],function(e){ys.headers[e]=Ee.merge(Ry)});var Yi=ys,Py=Le,Ny=Yi,Ly=function(e,n,r){var s=this||Ny;return Py.forEach(r,function(o){e=o.call(s,e,n)}),e},Xl=function(e){return!!(e&&e.__CANCEL__)},Ra=Le,Hs=Ly,xy=Xl,My=Yi,Dy=vs;function js(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Dy("canceled")}var Uy=function(e){js(e),e.headers=e.headers||{},e.data=Hs.call(e,e.data,e.headers,e.transformRequest),e.headers=Ra.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ra.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||My.adapter;return n(e).then(function(s){return js(e),s.data=Hs.call(e,s.data,s.headers,e.transformResponse),s},function(s){return xy(s)||(js(e),s&&s.response&&(s.response.data=Hs.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},De=Le,Yl=function(e,n){n=n||{};var r={};function s(l,d){return De.isPlainObject(l)&&De.isPlainObject(d)?De.merge(l,d):De.isPlainObject(d)?De.merge({},d):De.isArray(d)?d.slice():d}function i(l){if(De.isUndefined(n[l])){if(!De.isUndefined(e[l]))return s(void 0,e[l])}else return s(e[l],n[l])}function o(l){if(!De.isUndefined(n[l]))return s(void 0,n[l])}function a(l){if(De.isUndefined(n[l])){if(!De.isUndefined(e[l]))return s(void 0,e[l])}else return s(void 0,n[l])}function c(l){if(l in n)return s(e[l],n[l]);if(l in e)return s(void 0,e[l])}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return De.forEach(Object.keys(e).concat(Object.keys(n)),function(d){var h=u[d]||i,g=h(d);De.isUndefined(g)&&h!==c||(r[d]=g)}),r},Ql={version:"0.26.1"},$y=Ql.version,Qi={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Qi[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Oa={};Qi.transitional=function(e,n,r){function s(i,o){return"[Axios v"+$y+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new Error(s(o," has been removed"+(n?" in "+n:"")));return n&&!Oa[o]&&(Oa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function By(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new TypeError("option "+i+" must be "+c);continue}if(n!==!0)throw Error("Unknown option "+i)}}var Fy={assertOptions:By,validators:Qi},Zl=Le,Hy=ql,ka=ry,Pa=Uy,bs=Yl,eu=Fy,on=eu.validators;function pr(t){this.defaults=t,this.interceptors={request:new ka,response:new ka}}pr.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=bs(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&eu.assertOptions(r,{silentJSONParsing:on.transitional(on.boolean),forcedJSONParsing:on.transitional(on.boolean),clarifyTimeoutError:on.transitional(on.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(i=i&&g.synchronous,s.unshift(g.fulfilled,g.rejected))});var o=[];this.interceptors.response.forEach(function(g){o.push(g.fulfilled,g.rejected)});var a;if(!i){var c=[Pa,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var u=n;s.length;){var l=s.shift(),d=s.shift();try{u=l(u)}catch(h){d(h);break}}try{a=Pa(u)}catch(h){return Promise.reject(h)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};pr.prototype.getUri=function(e){return e=bs(this.defaults,e),Hy(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Zl.forEach(["delete","get","head","options"],function(e){pr.prototype[e]=function(n,r){return this.request(bs(r||{},{method:e,url:n,data:(r||{}).data}))}});Zl.forEach(["post","put","patch"],function(e){pr.prototype[e]=function(n,r,s){return this.request(bs(s||{},{method:e,url:n,data:r}))}});var jy=pr,Vy=vs;function Cn(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new Vy(s),e(n.reason))})}Cn.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Cn.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Cn.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};Cn.source=function(){var e,n=new Cn(function(s){e=s});return{token:n,cancel:e}};var zy=Cn,Wy=function(e){return function(r){return e.apply(null,r)}},qy=Le,Ky=function(e){return qy.isObject(e)&&e.isAxiosError===!0},Na=Le,Jy=jl,Pr=jy,Gy=Yl,Xy=Yi;function tu(t){var e=new Pr(t),n=Jy(Pr.prototype.request,e);return Na.extend(n,Pr.prototype,e),Na.extend(n,e),n.create=function(s){return tu(Gy(t,s))},n}var st=tu(Xy);st.Axios=Pr;st.Cancel=vs;st.CancelToken=zy;st.isCancel=Xl;st.VERSION=Ql.version;st.all=function(e){return Promise.all(e)};st.spread=Wy;st.isAxiosError=Ky;Ki.exports=st;Ki.exports.default=st;var Yy=Ki.exports,Qy=Symbol("cache-parser");function an(t){return(typeof t=="string"||typeof t=="number")&&(t=Number(t))>=0&&t<1/0}function Ye(t){return t===!0||typeof t=="number"||typeof t=="string"&&t!=="false"}var cn=Number;function Zy(t){var e=Object.defineProperty({},Qy,{enumerable:!1,value:1});if(!t||typeof t!="string")return e;var n=function(u){var l={},d=u.toLowerCase().replace(/\s+/g,"").split(",");for(var h in d){var g,w=d[h].split("=",2);l[w[0]]=(g=w[1])==null||g}return l}(t),r=n["max-age"],s=n["max-stale"],i=n["min-fresh"],o=n["s-maxage"],a=n["stale-if-error"],c=n["stale-while-revalidate"];return Ye(n.immutable)&&(e.immutable=!0),an(r)&&(e.maxAge=cn(r)),an(s)&&(e.maxStale=cn(s)),an(i)&&(e.minFresh=cn(i)),Ye(n["must-revalidate"])&&(e.mustRevalidate=!0),Ye(n["must-understand"])&&(e.mustUnderstand=!0),Ye(n["no-cache"])&&(e.noCache=!0),Ye(n["no-store"])&&(e.noStore=!0),Ye(n["no-transform"])&&(e.noTransform=!0),Ye(n["only-if-cached"])&&(e.onlyIfCached=!0),Ye(n.private)&&(e.private=!0),Ye(n["proxy-revalidate"])&&(e.proxyRevalidate=!0),Ye(n.public)&&(e.public=!0),an(o)&&(e.sMaxAge=cn(o)),an(a)&&(e.staleIfError=cn(a)),an(c)&&(e.staleWhileRevalidate=cn(c)),e}var eb=Symbol();function tb(){var t,e,n=new Promise(function(r,s){t=r,e=s});return n.resolve=t,n.reject=e,n[eb]=1,n}function nu(t){var e=typeof t;if(t&&e=="object"&&!(t instanceof Date||t instanceof RegExp)){var n=Array.isArray(t)?[]:{};for(var r in t)n[r]=nu(t[r]);return""+t.constructor+JSON.stringify(n,Object.keys(t).sort())}return""+e+String(t)}function nb(t){t=nu(t);for(var e=5381,n=0;n<t.length;)e=33*e^t.charCodeAt(n++);return e}var Tn={d:(t,e)=>{for(var n in e)Tn.o(e,n)&&!Tn.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},ge={};Tn.d(ge,{h4:()=>Ie,UN:()=>mu,uu:()=>pu,Kd:()=>to,ZF:()=>ab,nv:()=>Zi,p:()=>au,E7:()=>su,NQ:()=>ru,xK:()=>gu,G6:()=>cu,LN:()=>fu,Bw:()=>eo,Ad:()=>iu,$k:()=>hu,v8:()=>ob,Jk:()=>lu,tI:()=>uu,iS:()=>ou});const rb=(t=>{var e={};return Tn.d(e,t),e})({parse:()=>Zy}),Ie=Object.freeze({IfModifiedSince:"if-modified-since",LastModified:"last-modified",IfNoneMatch:"if-none-match",CacheControl:"cache-control",ETag:"etag",Expires:"expires",Age:"age",XAxiosCacheEtag:"x-axios-cache-etag",XAxiosCacheLastModified:"x-axios-cache-last-modified",XAxiosCacheStaleIfError:"x-axios-cache-stale-if-error"}),ru=t=>{if(!t)return"not enough headers";const e=t[Ie.CacheControl];if(e){const{noCache:r,noStore:s,mustRevalidate:i,maxAge:o,immutable:a}=(0,rb.parse)(String(e));if(r||s)return"dont cache";if(a)return 31536e6;if(i)return 0;if(o){const c=t[Ie.Age];return c?1e3*(o-Number(c)):1e3*o}}const n=t[Ie.Expires];if(n){const r=Date.parse(String(n))-Date.now();return r>=0?r:"dont cache"}return"not enough headers"},sb=(t=>{var e={};return Tn.d(e,t),e})({deferred:()=>tb});function su(t){return t?e=>t(e)||e===304:e=>e>=200&&e<300||e===304}function iu(t="get",e=[]){t=t.toLowerCase();for(const n of e)if(n.toLowerCase()===t)return!0;return!1}function ou(t,e){var n;e.headers||(e.headers={});const{etag:r,modifiedSince:s}=e.cache;if(r){const i=r===!0?(n=t.data)===null||n===void 0?void 0:n.headers[Ie.ETag]:r;i&&(e.headers[Ie.IfNoneMatch]=i)}s&&(e.headers[Ie.IfModifiedSince]=s===!0?t.data.headers[Ie.LastModified]||new Date(t.createdAt).toUTCString():s.toUTCString())}function au(t,e){return t.status===304&&e?(t.cached=!0,t.data=e.data,t.status=e.status,t.statusText=e.statusText,t.headers=Object.assign(Object.assign({},e.headers),t.headers),e):{data:t.data,status:t.status,statusText:t.statusText,headers:t.headers}}function cu(t){const e=async n=>{var r;if(n.cache===!1||(n.cache=Object.assign(Object.assign({},t.defaults.cache),n.cache),!iu(n.method,n.cache.methods)))return n;const s=n.id=t.generateKey(n);let i,o=await t.storage.get(s);e:if(o.state==="empty"||o.state==="stale"){if(t.waiting[s]&&(o=await t.storage.get(s),o.state!=="empty"))break e;return t.waiting[s]=(0,sb.deferred)(),(r=t.waiting[s])===null||r===void 0||r.catch(()=>{}),await t.storage.set(s,{state:"loading",previous:o.state,data:o.data,createdAt:o.createdAt}),o.state==="stale"&&ou(o,n),n.validateStatus=su(n.validateStatus),n}if(o.state==="loading"){const a=t.waiting[s];if(!a)return await t.storage.remove(s),n;try{i=await a}catch{return n}}else i=o.data;return n.adapter=()=>Promise.resolve({config:n,data:i.data,headers:i.headers,status:i.status,statusText:i.statusText,cached:!0,id:s}),n};return{onFulfilled:e,apply:()=>t.interceptors.request.use(e)}}async function lu(t,e){var n;if(typeof e=="function")return e(t);const{statusCheck:r,responseMatch:s,containsHeaders:i}=e;if(r&&!await r(t.status)||s&&!await s(t))return!1;if(i)for(const o in i){const a=i[o];if(a&&!await a((n=t.headers[o.toLowerCase()])!==null&&n!==void 0?n:t.headers[o]))return!1}return!0}async function uu(t,e,n){for(const r in n){const s=n[r];if(s==="delete"){await t.remove(r);continue}const i=await t.get(r);if(i.state==="loading")continue;const o=await s(i,e);o!=="delete"?o!=="ignore"&&await t.set(r,o):await t.remove(r)}}function fu(t){const e=async s=>{var i;await t.storage.remove(s),(i=t.waiting[s])===null||i===void 0||i.reject(null),delete t.waiting[s]},n=async s=>{var i,o,a;const c=s.id=(i=(a=s.config).id)!==null&&i!==void 0?i:a.id=t.generateKey(s.config);if((o=s.cached)!==null&&o!==void 0||(s.cached=!1),s.cached)return s;if(!s.config.cache)return Object.assign(Object.assign({},s),{cached:!1});const u=s.config.cache,l=await t.storage.get(c);if(l.state==="stale"||l.state==="empty"||l.state==="cached")return s;if(!l.data&&!await lu(s,u.cachePredicate))return await e(c),s;for(const O in Ie)O.startsWith("XAxiosCache")&&delete s.headers[O];u.etag&&u.etag!==!0&&(s.headers[Ie.XAxiosCacheEtag]=u.etag),u.modifiedSince&&(s.headers[Ie.XAxiosCacheLastModified]=u.modifiedSince===!0?"use-cache-timestamp":u.modifiedSince.toUTCString());let d=u.ttl||-1;if(u!=null&&u.interpretHeader){const O=t.headerInterpreter(s.headers);if(O==="dont cache")return await e(c),s;d=O==="not enough headers"?d:O}const h=au(s,l.data);typeof d=="function"&&(d=await d(s)),u.staleIfError&&(s.headers[Ie.XAxiosCacheStaleIfError]=String(d)),u!=null&&u.update&&await uu(t.storage,s,u.update);const g={state:"cached",ttl:d,createdAt:Date.now(),data:h},w=t.waiting[c];return w&&(w.resolve(g.data),delete t.waiting[c]),await t.storage.set(c,g),s},r=async s=>{var i;const o=s.config;if(!o||o.cache===!1||!o.id)throw s;const a=await t.storage.get(o.id),c=o.cache;if(a.state!=="loading"||a.previous!=="stale")throw await e(o.id),s;if(c!=null&&c.staleIfError){const u=typeof c.staleIfError=="function"?await c.staleIfError(s.response,a,s):c.staleIfError;if(u===!0||typeof u=="number"&&a.createdAt+u>Date.now())return(i=t.waiting[o.id])===null||i===void 0||i.resolve(a.data),delete t.waiting[o.id],await t.storage.set(o.id,{state:"stale",createdAt:Date.now(),data:a.data}),{cached:!0,config:o,id:o.id,data:a.data.data,headers:a.data.headers,status:a.data.status,statusText:a.data.statusText}}throw s};return{onFulfilled:n,onRejected:r,apply:()=>t.interceptors.response.use(n,r)}}const du=Symbol(),hu=t=>!!t&&!!t[du];function Zi(t){const e=t.data.headers;return Ie.ETag in e||Ie.LastModified in e||Ie.XAxiosCacheEtag in e||Ie.XAxiosCacheStaleIfError in e||Ie.XAxiosCacheLastModified in e}function eo(t){return t.createdAt+t.ttl<=Date.now()}function to({set:t,find:e,remove:n}){return{[du]:1,set:t,remove:n,get:async r=>{const s=await e(r);if(!s)return{state:"empty"};if(s.state!=="cached"||!eo(s))return s;if(Zi(s)){const i={state:"stale",createdAt:s.createdAt,data:s.data};return await t(r,i),i}return await n(r),{state:"empty"}}}}function pu(t=!1){const e=to({set:(n,r)=>{e.data[n]=r},remove:n=>{delete e.data[n]},find:n=>{const r=e.data[n];return t&&r!==void 0?typeof structuredClone=="function"?structuredClone(r):JSON.parse(JSON.stringify(r)):r}});return e.data=Object.create(null),e}const ib=(t=>{var e={};return Tn.d(e,t),e})({hash:()=>nb}),La=/^\/|\/$/g;function mu(t){return e=>{if(e.id)return e.id;const n=t(e);return typeof n=="string"||typeof n=="number"?`${n}`:`${(0,ib.hash)(n)}`}}const gu=mu(({baseURL:t="",url:e="",method:n="get",params:r,data:s})=>(t&&(t=t.replace(La,"")),e&&(e=e.replace(La,"")),n&&(n=n.toLowerCase()),{url:t+(t&&e?"/":"")+e,params:r,method:n,data:s}));function ob(t,e={}){var n,r,s,i,o;const a=t;if(a.storage=e.storage||pu(),!hu(a.storage))throw new Error("Use buildStorage() function");return a.waiting=e.waiting||{},a.generateKey=e.generateKey||gu,a.headerInterpreter=e.headerInterpreter||ru,a.requestInterceptor=e.requestInterceptor||cu(a),a.responseInterceptor=e.responseInterceptor||fu(a),a.debug=e.debug,a.defaults.cache={update:e.update||{},ttl:(n=e.ttl)!==null&&n!==void 0?n:3e5,methods:e.methods||["get"],cachePredicate:e.cachePredicate||{statusCheck:c=>c>=200&&c<400},etag:(r=e.etag)===null||r===void 0||r,modifiedSince:(s=e.modifiedSince)!==null&&s!==void 0?s:e.etag===!1,interpretHeader:(i=e.interpretHeader)===null||i===void 0||i,staleIfError:(o=e.staleIfError)===null||o===void 0||o},a.requestInterceptor.apply(),a.responseInterceptor.apply(),a}function ab(t,e=""){return to({find:n=>{const r=t.getItem(e+n);return r?JSON.parse(r):void 0},remove:n=>{t.removeItem(e+n)},set:(n,r)=>{const s=()=>t.setItem(e+n,JSON.stringify(r));try{return s()}catch{const o=Object.entries(t).filter(([a])=>a.startsWith(e)&&t.getItem(a)).map(([a,c])=>[a,JSON.parse(c)]);for(const[a,c]of o)c.state==="cached"&&eo(c)&&!Zi(c)&&t.removeItem(a);try{return s()}catch{const c=o.sort(([,u],[,l])=>(u.createdAt||0)-(l.createdAt||0));for(const[u]of c){t.removeItem(u);try{return s()}catch{}}}t.removeItem(e+n)}}})}ge.h4;ge.UN;ge.uu;ge.Kd;ge.ZF;ge.nv;ge.p;ge.E7;ge.NQ;ge.xK;ge.G6;ge.LN;ge.Bw;ge.Ad;ge.$k;var cb=ge.v8;ge.Jk;ge.tI;ge.iS;const _u=function(){return document.ontouchstart!==null?"click":"touchstart"},Xr="__vue_click_away__",vu=function(t,e,n){yu(t);let r=n.context,s=e.value,i=!1;setTimeout(function(){i=!0},0),t[Xr]=function(o){if((!t||!t.contains(o.target))&&s&&i&&typeof s=="function")return s.call(r,o)},document.addEventListener(_u(),t[Xr],!1)},yu=function(t){document.removeEventListener(_u(),t[Xr],!1),delete t[Xr]},lb=function(t,e,n){e.value!==e.oldValue&&vu(t,e,n)},ub={install:function(t){t.directive("click-away",fb)}},fb={mounted:vu,updated:lb,unmounted:yu};var db="firebase",hb="9.6.11";/**
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
 */gn(db,hb,"app");const pb={apiKey:"AIzaSyCYpZUlS0ubDr30pt33KU_qsiTDJBFj4Ts",authDomain:"setupon-96ebb.firebaseapp.com",projectId:"setupon-96ebb",storageBucket:"setupon-96ebb.appspot.com",messagingSenderId:"580646498621",appId:"1:580646498621:web:892c45979524793d981554"};Fm(pb);const ws=Yd(uv);ms();ws.use(Hl);ws.use(ub);ws.mount("#app");const mb=cb(Yy);ws.config.globalProperties.$http=mb;export{gb as A,vb as B,Ns as C,bb as D,ke as F,ip as G,xi as T,Tv as W,pt as _,U as a,J as b,le as c,Pi as d,Ef as e,Oi as f,Lc as g,Oc as h,xt as i,er as j,Uc as k,_b as l,kn as m,ar as n,Q as o,wf as p,Ce as q,$c as r,pi as s,He as t,Eb as u,yb as v,Se as w,ms as x,wb as y,Ib as z};
