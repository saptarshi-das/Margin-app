const Ym=()=>{};var gu={};/**
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
 */const lh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Zm=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],c=r[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,c=a?r[s+1]:0,u=s+2<r.length,h=u?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let I=(c&15)<<2|h>>6,S=h&63;u||(S=64,a||(I=64)),n.push(t[f],t[p],t[I],t[S])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(lh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Zm(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new ep;const I=i<<2|c>>4;if(n.push(I),h!==64){const S=c<<4&240|h>>2;if(n.push(S),p!==64){const D=h<<6&192|p;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tp=function(r){const e=lh(r);return hh.encodeByteArray(e,!0)},si=function(r){return tp(r).replace(/\./g,"")},dh=function(r){try{return hh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const np=()=>fh().__FIREBASE_DEFAULTS__,rp=()=>{if(typeof process>"u"||typeof gu>"u")return;const r=gu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},sp=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&dh(r[1]);return e&&JSON.parse(e)},Ci=()=>{try{return Ym()||np()||rp()||sp()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},mh=r=>Ci()?.emulatorHosts?.[r],ip=r=>{const e=mh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},ph=()=>Ci()?.config,gh=r=>Ci()?.[`_${r}`];/**
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
 */class op{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function nr(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _h(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function ap(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[si(JSON.stringify(t)),si(JSON.stringify(a)),""].join(".")}const xr={};function cp(){const r={prod:[],emulator:[]};for(const e of Object.keys(xr))xr[e]?r.emulator.push(e):r.prod.push(e);return r}function up(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let _u=!1;function yh(r,e){if(typeof window>"u"||typeof document>"u"||!nr(window.location.host)||xr[r]===e||xr[r]||_u)return;xr[r]=e;function t(I){return`__firebase__banner__${I}`}const n="__firebase__banner",i=cp().prod.length>0;function a(){const I=document.getElementById(n);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function u(I,S){I.setAttribute("width","24"),I.setAttribute("id",S),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function h(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{_u=!0,a()},I}function f(I,S){I.setAttribute("id",S),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function p(){const I=up(n),S=t("text"),D=document.getElementById(S)||document.createElement("span"),N=t("learnmore"),V=document.getElementById(N)||document.createElement("a"),$=t("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const U=I.element;c(U),f(V,N);const ee=h();u(B,$),U.append(B,D,V,ee),document.body.appendChild(U)}i?(D.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Ih(){const r=Ci()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mp(){const r=pe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Th(){return!Ih()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eh(){return!Ih()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function wh(){try{return typeof indexedDB=="object"}catch{return!1}}function pp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const gp="FirebaseError";class lt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=gp,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?_p(i,n):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new lt(s,c,n)}}function _p(r,e){return r.replace(yp,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const yp=/\{\$([^}]+)}/g;function Ip(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function an(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(yu(i)&&yu(a)){if(!an(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function yu(r){return r!==null&&typeof r=="object"}/**
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
 */function os(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Tp(r,e){const t=new Ep(r,e);return t.subscribe.bind(t)}class Ep{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");wp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=wo),s.error===void 0&&(s.error=wo),s.complete===void 0&&(s.complete=wo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function wo(){}/**
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
 */function Oe(r){return r&&r._delegate?r._delegate:r}class cn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class vp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new op;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rp(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&a.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ap(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ap(r){return r===Kt?void 0:r}function Rp(r){return r.instantiationMode==="EAGER"}/**
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
 */class bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const Sp={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Pp=H.INFO,Cp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Vp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Cp[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=Pp,this._logHandler=Vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Dp=(r,e)=>e.some(t=>r instanceof t);let Iu,Tu;function kp(){return Iu||(Iu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Np(){return Tu||(Tu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vh=new WeakMap,Mo=new WeakMap,Ah=new WeakMap,vo=new WeakMap,ga=new WeakMap;function xp(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(Pt(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&vh.set(t,r)}).catch(()=>{}),ga.set(e,r),e}function Op(r){if(Mo.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Mo.set(r,e)}let Lo={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Mo.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ah.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Mp(r){Lo=r(Lo)}function Lp(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Ao(this),e,...t);return Ah.set(n,e.sort?e.sort():[e]),Pt(n)}:Np().includes(r)?function(...e){return r.apply(Ao(this),e),Pt(vh.get(this))}:function(...e){return Pt(r.apply(Ao(this),e))}}function Fp(r){return typeof r=="function"?Lp(r):(r instanceof IDBTransaction&&Op(r),Dp(r,kp())?new Proxy(r,Lo):r)}function Pt(r){if(r instanceof IDBRequest)return xp(r);if(vo.has(r))return vo.get(r);const e=Fp(r);return e!==r&&(vo.set(r,e),ga.set(e,r)),e}const Ao=r=>ga.get(r);function Up(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),c=Pt(a);return n&&a.addEventListener("upgradeneeded",u=>{n(Pt(a.result),u.oldVersion,u.newVersion,Pt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Bp=["get","getKey","getAll","getAllKeys","count"],jp=["put","add","delete","clear"],Ro=new Map;function Eu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ro.get(e))return Ro.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=jp.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Bp.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return Ro.set(e,i),i}Mp(r=>({...r,get:(e,t,n)=>Eu(e,t)||r.get(e,t,n),has:(e,t)=>!!Eu(e,t)||r.has(e,t)}));/**
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
 */class qp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zp(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function zp(r){return r.getComponent()?.type==="VERSION"}const Fo="@firebase/app",wu="0.14.6";/**
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
 */const ot=new pa("@firebase/app"),$p="@firebase/app-compat",Gp="@firebase/analytics-compat",Kp="@firebase/analytics",Hp="@firebase/app-check-compat",Wp="@firebase/app-check",Qp="@firebase/auth",Jp="@firebase/auth-compat",Xp="@firebase/database",Yp="@firebase/data-connect",Zp="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",ng="@firebase/installations",rg="@firebase/installations-compat",sg="@firebase/messaging",ig="@firebase/messaging-compat",og="@firebase/performance",ag="@firebase/performance-compat",cg="@firebase/remote-config",ug="@firebase/remote-config-compat",lg="@firebase/storage",hg="@firebase/storage-compat",dg="@firebase/firestore",fg="@firebase/ai",mg="@firebase/firestore-compat",pg="firebase",gg="12.6.0";/**
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
 */const Uo="[DEFAULT]",_g={[Fo]:"fire-core",[$p]:"fire-core-compat",[Kp]:"fire-analytics",[Gp]:"fire-analytics-compat",[Wp]:"fire-app-check",[Hp]:"fire-app-check-compat",[Qp]:"fire-auth",[Jp]:"fire-auth-compat",[Xp]:"fire-rtdb",[Yp]:"fire-data-connect",[Zp]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[ng]:"fire-iid",[rg]:"fire-iid-compat",[sg]:"fire-fcm",[ig]:"fire-fcm-compat",[og]:"fire-perf",[ag]:"fire-perf-compat",[cg]:"fire-rc",[ug]:"fire-rc-compat",[lg]:"fire-gcs",[hg]:"fire-gcs-compat",[dg]:"fire-fst",[mg]:"fire-fst-compat",[fg]:"fire-vertex","fire-js":"fire-js",[pg]:"fire-js-all"};/**
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
 */const ii=new Map,yg=new Map,Bo=new Map;function vu(r,e){try{r.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Bn(r){const e=r.name;if(Bo.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,r);for(const t of ii.values())vu(t,r);for(const t of yg.values())vu(t,r);return!0}function _a(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function qe(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new is("app","Firebase",Ig);/**
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
 */class Tg{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const rr=gg;function Eg(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Uo,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(t||(t=ph()),!t)throw Ct.create("no-options");const i=ii.get(s);if(i){if(an(t,i.options)&&an(n,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const a=new bp(s);for(const u of Bo.values())a.addComponent(u);const c=new Tg(t,n,a);return ii.set(s,c),c}function Rh(r=Uo){const e=ii.get(r);if(!e&&r===Uo&&ph())return Eg();if(!e)throw Ct.create("no-app",{appName:r});return e}function Vt(r,e,t){let n=_g[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(a.join(" "));return}Bn(new cn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const wg="firebase-heartbeat-database",vg=1,$r="firebase-heartbeat-store";let bo=null;function bh(){return bo||(bo=Up(wg,vg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($r)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ct.create("idb-open",{originalErrorMessage:r.message})})),bo}async function Ag(r){try{const t=(await bh()).transaction($r),n=await t.objectStore($r).get(Sh(r));return await t.done,n}catch(e){if(e instanceof lt)ot.warn(e.message);else{const t=Ct.create("idb-get",{originalErrorMessage:e?.message});ot.warn(t.message)}}}async function Au(r,e){try{const n=(await bh()).transaction($r,"readwrite");await n.objectStore($r).put(e,Sh(r)),await n.done}catch(t){if(t instanceof lt)ot.warn(t.message);else{const n=Ct.create("idb-set",{originalErrorMessage:t?.message});ot.warn(n.message)}}}function Sh(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Rg=1024,bg=30;class Sg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Ru();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>bg){const s=Vg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ot.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ru(),{heartbeatsToSend:t,unsentEntries:n}=Pg(this._heartbeatsCache.heartbeats),s=si(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ot.warn(e),""}}}function Ru(){return new Date().toISOString().substring(0,10)}function Pg(r,e=Rg){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),bu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),bu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wh()?pp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ag(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Au(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Au(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function bu(r){return si(JSON.stringify({version:2,heartbeats:r})).length}function Vg(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
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
 */function Dg(r){Bn(new cn("platform-logger",e=>new qp(e),"PRIVATE")),Bn(new cn("heartbeat",e=>new Sg(e),"PRIVATE")),Vt(Fo,wu,r),Vt(Fo,wu,"esm2020"),Vt("fire-js","")}Dg("");function Ph(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kg=Ph,Ch=new is("auth","Firebase",Ph());/**
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
 */const oi=new pa("@firebase/auth");function Ng(r,...e){oi.logLevel<=H.WARN&&oi.warn(`Auth (${rr}): ${r}`,...e)}function qs(r,...e){oi.logLevel<=H.ERROR&&oi.error(`Auth (${rr}): ${r}`,...e)}/**
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
 */function Ze(r,...e){throw Ia(r,...e)}function $e(r,...e){return Ia(r,...e)}function ya(r,e,t){const n={...kg(),[e]:t};return new is("auth","Firebase",n).create(e,{appName:r.name})}function tn(r){return ya(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xg(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ze(r,"argument-error"),ya(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ia(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Ch.create(r,...e)}function j(r,e,...t){if(!r)throw Ia(e,...t)}function tt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw qs(e),new Error(e)}function at(r,e){r||tt(e)}/**
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
 */function jo(){return typeof self<"u"&&self.location?.href||""}function Og(){return Su()==="http:"||Su()==="https:"}function Su(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Mg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Og()||dp()||"connection"in navigator)?navigator.onLine:!0}function Lg(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class as{constructor(e,t){this.shortDelay=e,this.longDelay=t,at(t>e,"Short delay should be less than long delay!"),this.isMobile=lp()||fp()}get(){return Mg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ta(r,e){at(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Vh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ug=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Bg=new as(3e4,6e4);function Ea(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function sr(r,e,t,n,s={}){return Dh(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const c=os({key:r.config.apiKey,...a}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const h={method:e,headers:u,...i};return hp()||(h.referrerPolicy="no-referrer"),r.emulatorConfig&&nr(r.emulatorConfig.host)&&(h.credentials="include"),Vh.fetch()(await kh(r,r.config.apiHost,t,c),h)})}async function Dh(r,e,t){r._canInitEmulator=!1;const n={...Fg,...e};try{const s=new qg(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw xs(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(r,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw xs(r,"email-already-in-use",a);if(u==="USER_DISABLED")throw xs(r,"user-disabled",a);const f=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ya(r,f,h);Ze(r,f)}}catch(s){if(s instanceof lt)throw s;Ze(r,"network-request-failed",{message:String(s)})}}async function jg(r,e,t,n,s={}){const i=await sr(r,e,t,n,s);return"mfaPendingCredential"in i&&Ze(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function kh(r,e,t,n){const s=`${e}${t}?${n}`,i=r,a=i.config.emulator?Ta(r.config,s):`${r.config.apiScheme}://${s}`;return Ug.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class qg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n($e(this.auth,"network-request-failed")),Bg.get())})}}function xs(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=$e(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function zg(r,e){return sr(r,"POST","/v1/accounts:delete",e)}async function ai(r,e){return sr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Or(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $g(r,e=!1){const t=Oe(r),n=await t.getIdToken(e),s=wa(n);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:n,authTime:Or(So(s.auth_time)),issuedAtTime:Or(So(s.iat)),expirationTime:Or(So(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function So(r){return Number(r)*1e3}function wa(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const s=dh(t);return s?JSON.parse(s):(qs("Failed to decode base64 JWT payload"),null)}catch(s){return qs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Pu(r){const e=wa(r);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof lt&&Gg(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Gg({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Kg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ci(r){const e=r.auth,t=await r.getIdToken(),n=await Gr(r,ai(e,{idToken:t}));j(n?.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=s.providerUserInfo?.length?Nh(s.providerUserInfo):[],a=Wg(r.providerData,i),c=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!a?.length,h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(r,f)}async function Hg(r){const e=Oe(r);await ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wg(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Nh(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Qg(r,e){const t=await Dh(r,{},async()=>{const n=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=await kh(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:n};return r.emulatorConfig&&nr(r.emulatorConfig.host)&&(u.credentials="include"),Vh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jg(r,e){return sr(r,"POST","/v2/accounts:revokeToken",Ea(r,e))}/**
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
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=Pu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Qg(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new On;return n&&(j(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(j(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function yt(r,e){j(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ze{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Kg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $g(this,e)}reload(){return Hg(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ci(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await Gr(this,zg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:I,isAnonymous:S,providerData:D,stsTokenManager:N}=t;j(p&&N,e,"internal-error");const V=On.fromJSON(this.name,N);j(typeof p=="string",e,"internal-error"),yt(n,e.name),yt(s,e.name),j(typeof I=="boolean",e,"internal-error"),j(typeof S=="boolean",e,"internal-error"),yt(i,e.name),yt(a,e.name),yt(c,e.name),yt(u,e.name),yt(h,e.name),yt(f,e.name);const $=new ze({uid:p,auth:e,email:s,emailVerified:I,displayName:n,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:h,lastLoginAt:f});return D&&Array.isArray(D)&&($.providerData=D.map(B=>({...B}))),u&&($._redirectEventId=u),$}static async _fromIdTokenResponse(e,t,n=!1){const s=new On;s.updateFromServerResponse(t);const i=new ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await ci(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Nh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new On;c.updateFromIdToken(n);const u=new ze({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,h),u}}/**
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
 */const Cu=new Map;function nt(r){at(r instanceof Function,"Expected a class definition");let e=Cu.get(r);return e?(at(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Cu.set(r,e),e)}/**
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
 */class xh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xh.type="NONE";const Vu=xh;/**
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
 */function zs(r,e,t){return`firebase:${r}:${e}:${t}`}class Mn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=zs(this.userKey,s.apiKey,i),this.fullPersistenceKey=zs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ai(this.auth,{idToken:e}).catch(()=>{});return t?ze._fromGetAccountInfoResponse(this.auth,t,e):null}return ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Mn(nt(Vu),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||nt(Vu);const a=zs(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const I=await ai(e,{idToken:f}).catch(()=>{});if(!I)break;p=await ze._fromGetAccountInfoResponse(e,I,f)}else p=ze._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Mn(i,e,n):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Mn(i,e,n))}}/**
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
 */function Du(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Oh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bh(e))return"Blackberry";if(jh(e))return"Webos";if(Mh(e))return"Safari";if((e.includes("chrome/")||Lh(e))&&!e.includes("edge/"))return"Chrome";if(Uh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if(n?.length===2)return n[1]}return"Other"}function Oh(r=pe()){return/firefox\//i.test(r)}function Mh(r=pe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lh(r=pe()){return/crios\//i.test(r)}function Fh(r=pe()){return/iemobile/i.test(r)}function Uh(r=pe()){return/android/i.test(r)}function Bh(r=pe()){return/blackberry/i.test(r)}function jh(r=pe()){return/webos/i.test(r)}function va(r=pe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Xg(r=pe()){return va(r)&&!!window.navigator?.standalone}function Yg(){return mp()&&document.documentMode===10}function qh(r=pe()){return va(r)||Uh(r)||jh(r)||Bh(r)||/windows phone/i.test(r)||Fh(r)}/**
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
 */function zh(r,e=[]){let t;switch(r){case"Browser":t=Du(pe());break;case"Worker":t=`${Du(pe())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rr}/${n}`}/**
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
 */class Zg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function e_(r,e={}){return sr(r,"GET","/v2/passwordPolicy",Ea(r,e))}/**
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
 */const t_=6;class n_{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??t_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class r_{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ku(this),this.idTokenSubscription=new ku(this),this.beforeStateQueue=new Zg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ch,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ai(this,{idToken:e}),n=await ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(qe(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=n?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(n=c.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ci(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(tn(this));const t=e?Oe(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await e_(this),t=new n_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Jg(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ng(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Vi(r){return Oe(r)}class ku{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tp(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function s_(r){Aa=r}function i_(r){return Aa.loadJS(r)}function o_(){return Aa.gapiScript}function a_(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function c_(r,e){const t=_a(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(an(i,e??{}))return s;Ze(s,"already-initialized")}return t.initialize({options:e})}function u_(r,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(nt);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e?.popupRedirectResolver)}function l_(r,e,t){const n=Vi(r);j(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=$h(e),{host:a,port:c}=h_(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){j(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),j(an(h,n.config.emulator)&&an(f,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=h,n.emulatorConfig=f,n.settings.appVerificationDisabledForTesting=!0,nr(a)?(_h(`${i}//${a}${u}`),yh("Auth",!0)):d_()}function $h(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function h_(r){const e=$h(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Nu(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:Nu(a)}}}function Nu(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function d_(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Gh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,t){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}/**
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
 */async function Ln(r,e){return jg(r,"POST","/v1/accounts:signInWithIdp",Ea(r,e))}/**
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
 */const f_="http://localhost";class un extends Gh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const a=new un(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ln(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ln(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ln(e,t)}buildRequest(){const e={requestUri:f_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=os(t)}return e}}/**
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
 */class Ra{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cs extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends cs{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class vt extends cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vt.credential(t,n)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
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
 */class At extends cs{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.GITHUB_SIGN_IN_METHOD="github.com";At.PROVIDER_ID="github.com";/**
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
 */class Rt extends cs{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Rt.credential(t,n)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await ze._fromIdTokenResponse(e,n,s),a=xu(n);return new jn({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=xu(n);return new jn({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function xu(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ui extends lt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ui.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ui(e,t,n,s)}}function Kh(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ui._fromErrorAndOperation(r,i,e,n):i})}async function m_(r,e,t=!1){const n=await Gr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return jn._forOperation(r,"link",n)}/**
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
 */async function p_(r,e,t=!1){const{auth:n}=r;if(qe(n.app))return Promise.reject(tn(n));const s="reauthenticate";try{const i=await Gr(r,Kh(n,s,e,r),t);j(i.idToken,n,"internal-error");const a=wa(i.idToken);j(a,n,"internal-error");const{sub:c}=a;return j(r.uid===c,n,"user-mismatch"),jn._forOperation(r,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ze(n,"user-mismatch"),i}}/**
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
 */async function g_(r,e,t=!1){if(qe(r.app))return Promise.reject(tn(r));const n="signIn",s=await Kh(r,n,e),i=await jn._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function __(r,e,t,n){return Oe(r).onIdTokenChanged(e,t,n)}function y_(r,e,t){return Oe(r).beforeAuthStateChanged(e,t)}function lw(r,e,t,n){return Oe(r).onAuthStateChanged(e,t,n)}function hw(r){return Oe(r).signOut()}const li="__sak";/**
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
 */class Hh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const I_=1e3,T_=10;class Wh extends Hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);Yg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,T_):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},I_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wh.type="LOCAL";const E_=Wh;/**
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
 */class Qh extends Hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qh.type="SESSION";const Jh=Qh;/**
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
 */function w_(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Di(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await w_(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
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
 */function ba(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class v_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=ba("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(p){const I=p;if(I.data.eventId===h)switch(I.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(I.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Je(){return window}function A_(r){Je().location.href=r}/**
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
 */function Xh(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function R_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b_(){return navigator?.serviceWorker?.controller||null}function S_(){return Xh()?self:null}/**
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
 */const Yh="firebaseLocalStorageDb",P_=1,hi="firebaseLocalStorage",Zh="fbase_key";class us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ki(r,e){return r.transaction([hi],e?"readwrite":"readonly").objectStore(hi)}function C_(){const r=indexedDB.deleteDatabase(Yh);return new us(r).toPromise()}function zo(){const r=indexedDB.open(Yh,P_);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(hi,{keyPath:Zh})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(hi)?e(n):(n.close(),await C_(),e(await zo()))})})}async function Ou(r,e,t){const n=ki(r,!0).put({[Zh]:e,value:t});return new us(n).toPromise()}async function V_(r,e){const t=ki(r,!1).get(e),n=await new us(t).toPromise();return n===void 0?null:n.value}function Mu(r,e){const t=ki(r,!0).delete(e);return new us(t).toPromise()}const D_=800,k_=3;class ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>k_)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(S_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new v_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zo();return await Ou(e,li,"1"),await Mu(e,li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ou(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>V_(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ki(s,!1).getAll();return new us(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ed.type="LOCAL";const N_=ed;new as(3e4,6e4);/**
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
 */function td(r,e){return e?nt(e):(j(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Sa extends Gh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x_(r){return g_(r.auth,new Sa(r),r.bypassAuthState)}function O_(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),p_(t,new Sa(r),r.bypassAuthState)}async function M_(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),m_(t,new Sa(r),r.bypassAuthState)}/**
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
 */class nd{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x_;case"linkViaPopup":case"linkViaRedirect":return M_;case"reauthViaPopup":case"reauthViaRedirect":return O_;default:Ze(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const L_=new as(2e3,1e4);async function dw(r,e,t){if(qe(r.app))return Promise.reject($e(r,"operation-not-supported-in-this-environment"));const n=Vi(r);xg(r,e,Ra);const s=td(n,t);return new Zt(n,"signInViaPopup",e,s).executeNotNull()}class Zt extends nd{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,L_.get())};e()}}Zt.currentPopupAction=null;/**
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
 */const F_="pendingRedirect",$s=new Map;class U_ extends nd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$s.get(this.auth._key());if(!e){try{const n=await B_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$s.set(this.auth._key(),e)}return this.bypassAuthState||$s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B_(r,e){const t=z_(e),n=q_(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function j_(r,e){$s.set(r._key(),e)}function q_(r){return nt(r._redirectPersistence)}function z_(r){return zs(F_,r.config.apiKey,r.name)}async function $_(r,e,t=!1){if(qe(r.app))return Promise.reject(tn(r));const n=Vi(r),s=td(n,e),a=await new U_(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const G_=600*1e3;class K_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!rd(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError($e(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lu(e))}saveEventToCache(e){this.cachedEventUids.add(Lu(e)),this.lastProcessedEventTime=Date.now()}}function Lu(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function rd({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function H_(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rd(r);default:return!1}}/**
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
 */async function W_(r,e={}){return sr(r,"GET","/v1/projects",e)}/**
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
 */const Q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J_=/^https?/;async function X_(r){if(r.config.emulator)return;const{authorizedDomains:e}=await W_(r);for(const t of e)try{if(Y_(t))return}catch{}Ze(r,"unauthorized-domain")}function Y_(r){const e=jo(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!J_.test(t))return!1;if(Q_.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Z_=new as(3e4,6e4);function Fu(){const r=Je().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function ey(r){return new Promise((e,t)=>{function n(){Fu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fu(),t($e(r,"network-request-failed"))},timeout:Z_.get()})}if(Je().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Je().gapi?.load)n();else{const s=a_("iframefcb");return Je()[s]=()=>{gapi.load?n():t($e(r,"network-request-failed"))},i_(`${o_()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw Gs=null,e})}let Gs=null;function ty(r){return Gs=Gs||ey(r),Gs}/**
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
 */const ny=new as(5e3,15e3),ry="__/auth/iframe",sy="emulator/auth/iframe",iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ay(r){const e=r.config;j(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ta(e,sy):`https://${r.config.authDomain}/${ry}`,n={apiKey:e.apiKey,appName:r.name,v:rr},s=oy.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${os(n).slice(1)}`}async function cy(r){const e=await ty(r),t=Je().gapi;return j(t,r,"internal-error"),e.open({where:document.body,url:ay(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iy,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=$e(r,"network-request-failed"),c=Je().setTimeout(()=>{i(a)},ny.get());function u(){Je().clearTimeout(c),s(n)}n.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const uy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ly=500,hy=600,dy="_blank",fy="http://localhost";class Uu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function my(r,e,t,n=ly,s=hy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const u={...uy,width:n.toString(),height:s.toString(),top:i,left:a},h=pe().toLowerCase();t&&(c=Lh(h)?dy:t),Oh(h)&&(e=e||fy,u.scrollbars="yes");const f=Object.entries(u).reduce((I,[S,D])=>`${I}${S}=${D},`,"");if(Xg(h)&&c!=="_self")return py(e||"",c),new Uu(null);const p=window.open(e||"",c,f);j(p,r,"popup-blocked");try{p.focus()}catch{}return new Uu(p)}function py(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const gy="__/auth/handler",_y="emulator/auth/handler",yy=encodeURIComponent("fac");async function Bu(r,e,t,n,s,i){j(r.config.authDomain,r,"auth-domain-config-required"),j(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:rr,eventId:s};if(e instanceof Ra){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",Ip(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof cs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await r._getAppCheckToken(),h=u?`#${yy}=${encodeURIComponent(u)}`:"";return`${Iy(r)}?${os(c).slice(1)}${h}`}function Iy({config:r}){return r.emulator?Ta(r,_y):`https://${r.authDomain}/${gy}`}/**
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
 */const Po="webStorageSupport";class Ty{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jh,this._completeRedirectFn=$_,this._overrideRedirectResult=j_}async _openPopup(e,t,n,s){at(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Bu(e,t,n,jo(),s);return my(e,i,ba())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Bu(e,t,n,jo(),s);return A_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(at(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cy(e),n=new K_(e);return t.register("authEvent",s=>(j(s?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Po,{type:Po},s=>{const i=s?.[0]?.[Po];i!==void 0&&t(!!i),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=X_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qh()||Mh()||va()}}const Ey=Ty;var ju="@firebase/auth",qu="1.12.0";/**
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
 */class wy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vy(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ay(r){Bn(new cn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:a,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zh(r)},h=new r_(n,s,i,u);return u_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Bn(new cn("auth-internal",e=>{const t=Vi(e.getProvider("auth").getImmediate());return(n=>new wy(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(ju,qu,vy(r)),Vt(ju,qu,"esm2020")}/**
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
 */const Ry=300,by=gh("authIdTokenMaxAge")||Ry;let zu=null;const Sy=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>by)return;const s=t?.token;zu!==s&&(zu=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function fw(r=Rh()){const e=_a(r,"auth");if(e.isInitialized())return e.getImmediate();const t=c_(r,{popupRedirectResolver:Ey,persistence:[N_,E_,Jh]}),n=gh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const a=Sy(i.toString());y_(t,a,()=>a(t.currentUser)),__(t,c=>a(c))}}const s=mh("auth");return s&&l_(t,`http://${s}`),t}function Py(){return document.getElementsByTagName("head")?.[0]??document}s_({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=$e("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Py().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ay("Browser");var Cy="firebase",Vy="12.7.0";/**
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
 */Vt(Cy,Vy,"app");var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dt,sd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function y(){}y.prototype=g.prototype,T.F=g.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(w,E,R){for(var _=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)_[Ce-2]=arguments[Ce];return g.prototype[E].apply(w,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,y){y||(y=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;E<16;++E)w[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=T.g[0],y=T.g[1],E=T.g[2];let R=T.g[3],_;_=g+(R^y&(E^R))+w[0]+3614090360&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+w[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+w[2]+606105819&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+w[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(R^y&(E^R))+w[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+w[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+w[6]+2821735955&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+w[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(R^y&(E^R))+w[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+w[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+w[10]+4294925233&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+w[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(R^y&(E^R))+w[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(E^g&(y^E))+w[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=E+(y^R&(g^y))+w[14]+2792965006&4294967295,E=R+(_<<17&4294967295|_>>>15),_=y+(g^E&(R^g))+w[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^R&(y^E))+w[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+w[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+w[11]+643717713&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+w[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^R&(y^E))+w[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+w[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+w[15]+3634488961&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+w[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^R&(y^E))+w[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+w[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+w[3]+4107603335&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+w[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^R&(y^E))+w[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^E&(g^y))+w[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(R^g))+w[7]+1735328473&4294967295,E=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(E^R))+w[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^R)+w[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+w[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+w[11]+1839030562&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+w[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^R)+w[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+w[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+w[7]+4139469664&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+w[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^R)+w[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+w[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+w[3]+3572445317&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+w[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^R)+w[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^E)+w[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=E+(R^g^y)+w[15]+530742520&4294967295,E=R+(_<<16&4294967295|_>>>16),_=y+(E^R^g)+w[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~R))+w[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+w[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+w[14]+2878612391&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+w[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~R))+w[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+w[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+w[10]+4293915773&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+w[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~R))+w[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+w[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+w[6]+2734768916&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+w[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~R))+w[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~E))+w[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=E+(g^(R|~y))+w[2]+718787259&4294967295,E=R+(_<<15&4294967295|_>>>17),_=y+(R^(E|~g))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.v=function(T,g){g===void 0&&(g=T.length);const y=g-this.blockSize,w=this.C;let E=this.h,R=0;for(;R<g;){if(E==0)for(;R<=y;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<g;)if(w[E++]=T.charCodeAt(R++),E==this.blockSize){s(this,w),E=0;break}}else for(;R<g;)if(w[E++]=T[R++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)T[g++]=this.g[y]>>>w&255;return T};function i(T,g){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=g(T)}function a(T,g){this.h=g;const y=[];let w=!0;for(let E=T.length-1;E>=0;E--){const R=T[E]|0;w&&R==g||(y[E]=R,w=!1)}this.g=y}var c={};function u(T){return-128<=T&&T<128?i(T,function(g){return new a([g|0],g<0?-1:0)}):new a([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return V(h(-T));const g=[];let y=1;for(let w=0;T>=y;w++)g[w]=T/y|0,y*=4294967296;return new a(g,0)}function f(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return V(f(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(g,8));let w=p;for(let R=0;R<T.length;R+=8){var E=Math.min(8,T.length-R);const _=parseInt(T.substring(R,R+E),g);E<8?(E=h(Math.pow(g,E)),w=w.j(E).add(h(_))):(w=w.j(y),w=w.add(h(_)))}return w}var p=u(0),I=u(1),S=u(16777216);r=a.prototype,r.m=function(){if(N(this))return-V(this).m();let T=0,g=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);T+=(w>=0?w:4294967296+w)*g,g*=4294967296}return T},r.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+V(this).toString(T);const g=h(Math.pow(T,6));var y=this;let w="";for(;;){const E=ee(y,g).g;y=$(y,E.j(g));let R=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=E,D(y))return R+w;for(;R.length<6;)R="0"+R;w=R+w}},r.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=$(this,T),N(T)?-1:D(T)?0:1};function V(T){const g=T.g.length,y=[];for(let w=0;w<g;w++)y[w]=~T.g[w];return new a(y,~T.h).add(I)}r.abs=function(){return N(this)?V(this):this},r.add=function(T){const g=Math.max(this.g.length,T.g.length),y=[];let w=0;for(let E=0;E<=g;E++){let R=w+(this.i(E)&65535)+(T.i(E)&65535),_=(R>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);w=_>>>16,R&=65535,_&=65535,y[E]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(T,g){return T.add(V(g))}r.j=function(T){if(D(this)||D(T))return p;if(N(this))return N(T)?V(this).j(V(T)):V(V(this).j(T));if(N(T))return V(this.j(V(T)));if(this.l(S)<0&&T.l(S)<0)return h(this.m()*T.m());const g=this.g.length+T.g.length,y=[];for(var w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<T.g.length;E++){const R=this.i(w)>>>16,_=this.i(w)&65535,Ce=T.i(E)>>>16,Ut=T.i(E)&65535;y[2*w+2*E]+=_*Ut,B(y,2*w+2*E),y[2*w+2*E+1]+=R*Ut,B(y,2*w+2*E+1),y[2*w+2*E+1]+=_*Ce,B(y,2*w+2*E+1),y[2*w+2*E+2]+=R*Ce,B(y,2*w+2*E+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function B(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function U(T,g){this.g=T,this.h=g}function ee(T,g){if(D(g))throw Error("division by zero");if(D(T))return new U(p,p);if(N(T))return g=ee(V(T),g),new U(V(g.g),V(g.h));if(N(g))return g=ee(T,V(g)),new U(V(g.g),g.h);if(T.g.length>30){if(N(T)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var y=I,w=g;w.l(T)<=0;)y=X(y),w=X(w);var E=Q(y,1),R=Q(w,1);for(w=Q(w,2),y=Q(y,2);!D(w);){var _=R.add(w);_.l(T)<=0&&(E=E.add(y),R=_),w=Q(w,1),y=Q(y,1)}return g=$(T,E.j(g)),new U(E,g)}for(E=p;T.l(g)>=0;){for(y=Math.max(1,Math.floor(T.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),R=h(y),_=R.j(g);N(_)||_.l(T)>0;)y-=w,R=h(y),_=R.j(g);D(R)&&(R=I),E=E.add(R),T=$(T,_)}return new U(E,T)}r.B=function(T){return ee(this,T).h},r.and=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)&T.i(w);return new a(y,this.h&T.h)},r.or=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)|T.i(w);return new a(y,this.h|T.h)},r.xor=function(T){const g=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<g;w++)y[w]=this.i(w)^T.i(w);return new a(y,this.h^T.h)};function X(T){const g=T.g.length+1,y=[];for(let w=0;w<g;w++)y[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(y,T.h)}function Q(T,g){const y=g>>5;g%=32;const w=T.g.length-y,E=[];for(let R=0;R<w;R++)E[R]=g>0?T.i(R+y)>>>g|T.i(R+y+1)<<32-g:T.i(R+y);return new a(E,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,sd=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Dt=a}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});var Os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var id,Cr,od,Ks,$o,ad,cd,ud;(function(){var r,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Os=="object"&&Os];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(o,l){if(l)e:{var d=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var d=[],m;for(m in l)Object.prototype.hasOwnProperty.call(l,m)&&d.push([m,l[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,d){return o.call.apply(o.bind,arguments)}function h(o,l,d){return h=u,h.apply(null,arguments)}function f(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,A,b){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[A].apply(m,k)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const l=o.length;if(l>0){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function D(o,l){for(let m=1;m<arguments.length;m++){const A=arguments[m];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const b=A.length||0;o.length=d+b;for(let k=0;k<b;k++)o[d+k]=A[k]}else o.push(A)}}class N{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function V(o){a.setTimeout(()=>{throw o},0)}function $(){var o=T;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class B{constructor(){this.h=this.g=null}add(l,d){const m=U.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var U=new N(()=>new ee,o=>o.reset());class ee{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let X,Q=!1,T=new B,g=()=>{const o=Promise.resolve(void 0);X=()=>{o.then(y)}};function y(){for(var o;o=$();){try{o.h.call(o.g)}catch(d){V(d)}var l=U;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}Q=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var R=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function Ce(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}p(Ce,E),Ce.prototype.init=function(o,l){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ce.Z.h.call(this)},Ce.prototype.h=function(){Ce.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ut="closure_listenable_"+(Math.random()*1e6|0),Tm=0;function Em(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++Tm,this.da=this.fa=!1}function Is(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ts(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function wm(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function pc(o){const l={};for(const d in o)l[d]=o[d];return l}const gc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _c(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let b=0;b<gc.length;b++)d=gc[b],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function Es(o){this.src=o,this.g={},this.h=0}Es.prototype.add=function(o,l,d,m,A){const b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);const k=Yi(o,l,m,A);return k>-1?(l=o[k],d||(l.fa=!1)):(l=new Em(l,this.src,b,!!m,A),l.fa=d,o.push(l)),l};function Xi(o,l){const d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),b;(b=A>=0)&&Array.prototype.splice.call(m,A,1),b&&(Is(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Yi(o,l,d,m){for(let A=0;A<o.length;++A){const b=o[A];if(!b.da&&b.listener==l&&b.capture==!!d&&b.ha==m)return A}return-1}var Zi="closure_lm_"+(Math.random()*1e6|0),eo={};function yc(o,l,d,m,A){if(Array.isArray(l)){for(let b=0;b<l.length;b++)yc(o,l[b],d,m,A);return null}return d=Ec(d),o&&o[Ut]?o.J(l,d,c(m)?!!m.capture:!1,A):vm(o,l,d,!1,m,A)}function vm(o,l,d,m,A,b){if(!l)throw Error("Invalid event type");const k=c(A)?!!A.capture:!!A;let G=no(o);if(G||(o[Zi]=G=new Es(o)),d=G.add(l,d,m,k,b),d.proxy)return d;if(m=Am(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)R||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(Tc(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Am(){function o(d){return l.call(o.src,o.listener,d)}const l=Rm;return o}function Ic(o,l,d,m,A){if(Array.isArray(l))for(var b=0;b<l.length;b++)Ic(o,l[b],d,m,A);else m=c(m)?!!m.capture:!!m,d=Ec(d),o&&o[Ut]?(o=o.i,b=String(l).toString(),b in o.g&&(l=o.g[b],d=Yi(l,d,m,A),d>-1&&(Is(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[b],o.h--)))):o&&(o=no(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Yi(l,d,m,A)),(d=o>-1?l[o]:null)&&to(d))}function to(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Ut])Xi(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Tc(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=no(l))?(Xi(d,o),d.h==0&&(d.src=null,l[Zi]=null)):Is(o)}}}function Tc(o){return o in eo?eo[o]:eo[o]="on"+o}function Rm(o,l){if(o.da)o=!0;else{l=new Ce(l,this);const d=o.listener,m=o.ha||o.src;o.fa&&to(o),o=d.call(m,l)}return o}function no(o){return o=o[Zi],o instanceof Es?o:null}var ro="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ec(o){return typeof o=="function"?o:(o[ro]||(o[ro]=function(l){return o.handleEvent(l)}),o[ro])}function Ee(){w.call(this),this.i=new Es(this),this.M=this,this.G=null}p(Ee,w),Ee.prototype[Ut]=!0,Ee.prototype.removeEventListener=function(o,l,d,m){Ic(this,o,l,d,m)};function Re(o,l){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var A=l;l=new E(m,o),_c(l,A)}A=!0;let b,k;if(d)for(k=d.length-1;k>=0;k--)b=l.g=d[k],A=ws(b,m,!0,l)&&A;if(b=l.g=o,A=ws(b,m,!0,l)&&A,A=ws(b,m,!1,l)&&A,d)for(k=0;k<d.length;k++)b=l.g=d[k],A=ws(b,m,!1,l)&&A}Ee.prototype.N=function(){if(Ee.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let m=0;m<d.length;m++)Is(d[m]);delete o.g[l],o.h--}}this.G=null},Ee.prototype.J=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Ee.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function ws(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let b=0;b<l.length;++b){const k=l[b];if(k&&!k.da&&k.capture==d){const G=k.listener,fe=k.ha||k.src;k.fa&&Xi(o.i,k),A=G.call(fe,m)!==!1&&A}}return A&&!m.defaultPrevented}function bm(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function wc(o){o.g=bm(()=>{o.g=null,o.i&&(o.i=!1,wc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Sm extends w{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:wc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cr(o){w.call(this),this.h=o,this.g={}}p(cr,w);var vc=[];function Ac(o){Ts(o.g,function(l,d){this.g.hasOwnProperty(d)&&to(l)},o),o.g={}}cr.prototype.N=function(){cr.Z.N.call(this),Ac(this)},cr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var so=a.JSON.stringify,Pm=a.JSON.parse,Cm=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Rc(){}function bc(){}var ur={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function io(){E.call(this,"d")}p(io,E);function oo(){E.call(this,"c")}p(oo,E);var Bt={},Sc=null;function vs(){return Sc=Sc||new Ee}Bt.Ia="serverreachability";function Pc(o){E.call(this,Bt.Ia,o)}p(Pc,E);function lr(o){const l=vs();Re(l,new Pc(l))}Bt.STAT_EVENT="statevent";function Cc(o,l){E.call(this,Bt.STAT_EVENT,o),this.stat=l}p(Cc,E);function be(o){const l=vs();Re(l,new Cc(l,o))}Bt.Ja="timingevent";function Vc(o,l){E.call(this,Bt.Ja,o),this.size=l}p(Vc,E);function hr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function dr(){this.g=!0}dr.prototype.ua=function(){this.g=!1};function Vm(o,l,d,m,A,b){o.info(function(){if(o.g)if(b){var k="",G=b.split("&");for(let re=0;re<G.length;re++){var fe=G[re].split("=");if(fe.length>1){const _e=fe[0];fe=fe[1];const Ke=_e.split("_");k=Ke.length>=2&&Ke[1]=="type"?k+(_e+"="+fe+"&"):k+(_e+"=redacted&")}}}else k=null;else k=b;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+k})}function Dm(o,l,d,m,A,b,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+b+" "+k})}function En(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Nm(o,d)+(m?" "+m:"")})}function km(o,l){o.info(function(){return"TIMEOUT: "+l})}dr.prototype.info=function(){};function Nm(o,l){if(!o.g)return l;if(!l)return null;try{const b=JSON.parse(l);if(b){for(o=0;o<b.length;o++)if(Array.isArray(b[o])){var d=b[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var A=m[0];if(A!="noop"&&A!="stop"&&A!="close")for(let k=1;k<m.length;k++)m[k]=""}}}}return so(b)}catch{return l}}var As={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Dc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kc;function ao(){}p(ao,Rc),ao.prototype.g=function(){return new XMLHttpRequest},kc=new ao;function fr(o){return encodeURIComponent(String(o))}function xm(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function dt(o,l,d,m){this.j=o,this.i=l,this.l=d,this.S=m||1,this.V=new cr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nc}function Nc(){this.i=null,this.g="",this.h=!1}var xc={},co={};function uo(o,l,d){o.M=1,o.A=bs(Ge(l)),o.u=d,o.R=!0,Oc(o,null)}function Oc(o,l){o.F=Date.now(),Rs(o),o.B=Ge(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Wc(d.i,"t",m),o.C=0,d=o.j.L,o.h=new Nc,o.g=du(o.j,d?l:null,!o.u),o.P>0&&(o.O=new Sm(h(o.Y,o,o.g),o.P)),l=o.V,d=o.g,m=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(vc[0]=A.toString()),A=vc);for(let b=0;b<A.length;b++){const k=yc(d,A[b],m||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.J?pc(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),lr(),Vm(o.i,o.v,o.B,o.l,o.S,o.u)}dt.prototype.ba=function(o){o=o.target;const l=this.O;l&&pt(o)==3?l.j():this.Y(o)},dt.prototype.Y=function(o){try{if(o==this.g)e:{const G=pt(this.g),fe=this.g.ya(),re=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||tu(this.g)))){this.K||G!=4||fe==7||(fe==8||re<=0?lr(3):lr(2)),lo(this);var l=this.g.ca();this.X=l;var d=Om(this);if(this.o=l==200,Dm(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){t:{if(this.g){var m,A=this.g;if((m=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var b=m;break t}}b=null}if(o=b)En(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ho(this,o);else{this.o=!1,this.m=3,be(12),jt(this),mr(this);break e}}if(this.R){o=!0;let _e;for(;!this.K&&this.C<d.length;)if(_e=Mm(this,d),_e==co){G==4&&(this.m=4,be(14),o=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==xc){this.m=4,be(15),En(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else En(this.i,this.l,_e,null),ho(this,_e);if(Mc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||d.length!=0||this.h.h||(this.m=1,be(16),o=!1),this.o=this.o&&o,!o)En(this.i,this.l,d,"[Invalid Chunked Response]"),jt(this),mr(this);else if(d.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),To(k),k.P=!0,be(11))}}else En(this.i,this.l,d,null),ho(this,d);G==4&&jt(this),this.o&&!this.K&&(G==4?cu(this.j,this):(this.o=!1,Rs(this)))}else Jm(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,be(12)):(this.m=0,be(13)),jt(this),mr(this)}}}catch{}finally{}};function Om(o){if(!Mc(o))return o.g.la();const l=tu(o.g);if(l==="")return"";let d="";const m=l.length,A=pt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return jt(o),mr(o),"";o.h.i=new a.TextDecoder}for(let b=0;b<m;b++)o.h.h=!0,d+=o.h.i.decode(l[b],{stream:!(A&&b==m-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function Mc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Mm(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?co:(d=Number(l.substring(d,m)),isNaN(d)?xc:(m+=1,m+d>l.length?co:(l=l.slice(m,m+d),o.C=m+d,l)))}dt.prototype.cancel=function(){this.K=!0,jt(this)};function Rs(o){o.T=Date.now()+o.H,Lc(o,o.H)}function Lc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=hr(h(o.aa,o),l)}function lo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}dt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(km(this.i,this.B),this.M!=2&&(lr(),be(17)),jt(this),this.m=2,mr(this)):Lc(this,this.T-o)};function mr(o){o.j.I==0||o.K||cu(o.j,o)}function jt(o){lo(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Ac(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function ho(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||fo(d.h,o))){if(!o.L&&fo(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Ds(d),Cs(d);else break e;Io(d),be(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=hr(h(d.Va,d),6e3));Bc(d.h)<=1&&d.ta&&(d.ta=void 0)}else zt(d,11)}else if((o.L||d.g==o)&&Ds(d),!_(l))for(A=d.Ba.g.parse(l),l=0;l<A.length;l++){let re=A[l];const _e=re[0];if(!(_e<=d.K))if(d.K=_e,re=re[1],d.I==2)if(re[0]=="c"){d.M=re[1],d.ba=re[2];const Ke=re[3];Ke!=null&&(d.ka=Ke,d.j.info("VER="+d.ka));const $t=re[4];$t!=null&&(d.za=$t,d.j.info("SVER="+d.za));const gt=re[5];gt!=null&&typeof gt=="number"&&gt>0&&(m=1.5*gt,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const _t=o.g;if(_t){const Ns=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var b=m.h;b.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(mo(b,b.h),b.h=null))}if(m.G){const Eo=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;Eo&&(m.wa=Eo,se(m.J,m.G,Eo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var k=o;if(m.na=hu(m,m.L?m.ba:null,m.W),k.L){jc(m.h,k);var G=k,fe=m.O;fe&&(G.H=fe),G.D&&(lo(G),Rs(G)),m.g=k}else ou(m);d.i.length>0&&Vs(d)}else re[0]!="stop"&&re[0]!="close"||zt(d,7);else d.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?zt(d,7):yo(d):re[0]!="noop"&&d.l&&d.l.qa(re),d.A=0)}}lr(4)}catch{}}var Lm=class{constructor(o,l){this.g=o,this.map=l}};function Fc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Uc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Bc(o){return o.h?1:o.g?o.g.size:0}function fo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function mo(o,l){o.g?o.g.add(l):o.h=l}function jc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Fc.prototype.cancel=function(){if(this.i=qc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function qc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return S(o.i)}var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fm(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let A,b=null;m>=0?(A=o[d].substring(0,m),b=o[d].substring(m+1)):A=o[d],l(A,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ft(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof ft?(this.l=o.l,pr(this,o.j),this.o=o.o,this.g=o.g,gr(this,o.u),this.h=o.h,po(this,Qc(o.i)),this.m=o.m):o&&(l=String(o).match(zc))?(this.l=!1,pr(this,l[1]||"",!0),this.o=_r(l[2]||""),this.g=_r(l[3]||"",!0),gr(this,l[4]),this.h=_r(l[5]||"",!0),po(this,l[6]||"",!0),this.m=_r(l[7]||"")):(this.l=!1,this.i=new Ir(null,this.l))}ft.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(yr(l,$c,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(yr(l,$c,!0),"@"),o.push(fr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(yr(d,d.charAt(0)=="/"?jm:Bm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",yr(d,zm)),o.join("")},ft.prototype.resolve=function(o){const l=Ge(this);let d=!!o.j;d?pr(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var m=o.h;if(d)gr(l,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var A=l.h.lastIndexOf("/");A!=-1&&(m=l.h.slice(0,A+1)+m)}if(A=m,A==".."||A==".")m="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){m=A.lastIndexOf("/",0)==0,A=A.split("/");const b=[];for(let k=0;k<A.length;){const G=A[k++];G=="."?m&&k==A.length&&b.push(""):G==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),m&&k==A.length&&b.push("")):(b.push(G),m=!0)}m=b.join("/")}else m=A}return d?l.h=m:d=o.i.toString()!=="",d?po(l,Qc(o.i)):d=!!o.m,d&&(l.m=o.m),l};function Ge(o){return new ft(o)}function pr(o,l,d){o.j=d?_r(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function gr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function po(o,l,d){l instanceof Ir?(o.i=l,$m(o.i,o.l)):(d||(l=yr(l,qm)),o.i=new Ir(l,o.l))}function se(o,l,d){o.i.set(l,d)}function bs(o){return se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function _r(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function yr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Um),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Um(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $c=/[#\/\?@]/g,Bm=/[#\?:]/g,jm=/[#\?]/g,qm=/[#\?@]/g,zm=/#/g;function Ir(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function qt(o){o.g||(o.g=new Map,o.h=0,o.i&&Fm(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}r=Ir.prototype,r.add=function(o,l){qt(this),this.i=null,o=wn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Gc(o,l){qt(o),l=wn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Kc(o,l){return qt(o),l=wn(o,l),o.g.has(l)}r.forEach=function(o,l){qt(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)};function Hc(o,l){qt(o);let d=[];if(typeof l=="string")Kc(o,l)&&(d=d.concat(o.g.get(wn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}r.set=function(o,l){return qt(this),this.i=null,o=wn(this,o),Kc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=Hc(this,o),o.length>0?String(o[0]):l):l};function Wc(o,l,d){Gc(o,l),d.length>0&&(o.i=null,o.g.set(wn(o,l),S(d)),o.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let m=0;m<l.length;m++){var d=l[m];const A=fr(d);d=Hc(this,d);for(let b=0;b<d.length;b++){let k=A;d[b]!==""&&(k+="="+fr(d[b])),o.push(k)}}return this.i=o.join("&")};function Qc(o){const l=new Ir;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function wn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function $m(o,l){l&&!o.j&&(qt(o),o.i=null,o.g.forEach(function(d,m){const A=m.toLowerCase();m!=A&&(Gc(this,m),Wc(this,A,d))},o)),o.j=l}function Gm(o,l){const d=new dr;if(a.Image){const m=new Image;m.onload=f(mt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=f(mt,d,"TestLoadImage: error",!1,l,m),m.onabort=f(mt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=f(mt,d,"TestLoadImage: timeout",!1,l,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Km(o,l){const d=new dr,m=new AbortController,A=setTimeout(()=>{m.abort(),mt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(b=>{clearTimeout(A),b.ok?mt(d,"TestPingServer: ok",!0,l):mt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),mt(d,"TestPingServer: error",!1,l)})}function mt(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Hm(){this.g=new Cm}function go(o){this.i=o.Sb||null,this.h=o.ab||!1}p(go,Rc),go.prototype.g=function(){return new Ss(this.i,this.h)};function Ss(o,l){Ee.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ss,Ee),r=Ss.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Er(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Tr(this)),this.readyState=0},r.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}r.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Tr(this):Er(this),this.readyState==3&&Jc(this)}},r.Oa=function(o){this.g&&(this.response=this.responseText=o,Tr(this))},r.Na=function(o){this.g&&(this.response=o,Tr(this))},r.ga=function(){this.g&&Tr(this)};function Tr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Er(o)}r.setRequestHeader=function(o,l){this.A.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Xc(o){let l="";return Ts(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function _o(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Xc(d),typeof o=="string"?d!=null&&fr(d):se(o,l,d))}function ce(o){Ee.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ce,Ee);var Wm=/^https?$/i,Qm=["POST","PUT"];r=ce.prototype,r.Fa=function(o){this.H=o},r.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kc.g(),this.g.onreadystatechange=I(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(b){Yc(this,b);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())d.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Qm,l,void 0)>=0)||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,k]of d)this.g.setRequestHeader(b,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(b){Yc(this,b)}};function Yc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Zc(o),Ps(o)}function Zc(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Re(this,"complete"),Re(this,"abort"),Ps(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ps(this,!0)),ce.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?eu(this):this.Xa())},r.Xa=function(){eu(this)};function eu(o){if(o.h&&typeof i<"u"){if(o.v&&pt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Re(o,"readystatechange"),pt(o)==4){o.h=!1;try{const b=o.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=b===0){let k=String(o.D).match(zc)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),m=!Wm.test(k?k.toLowerCase():"")}d=m}if(d)Re(o,"complete"),Re(o,"success");else{o.o=6;try{var A=pt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Zc(o)}}finally{Ps(o)}}}}function Ps(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||Re(o,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function pt(o){return o.g?o.g.readyState:0}r.ca=function(){try{return pt(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Pm(l)}};function tu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Jm(o){const l={};o=(o.g&&pt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(_(o[m]))continue;var d=xm(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=l[A]||[];l[A]=b,b.push(d)}wm(l,function(m){return m.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function nu(o){this.za=0,this.i=[],this.j=new dr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wr("baseRetryDelayMs",5e3,o),this.Za=wr("retryDelaySeedMs",1e4,o),this.Ta=wr("forwardChannelMaxRetries",2,o),this.va=wr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Fc(o&&o.concurrentRequestLimit),this.Ba=new Hm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=nu.prototype,r.ka=8,r.I=1,r.connect=function(o,l,d,m){be(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=hu(this,null,this.W),Vs(this)};function yo(o){if(ru(o),o.I==3){var l=o.V++,d=Ge(o.J);if(se(d,"SID",o.M),se(d,"RID",l),se(d,"TYPE","terminate"),vr(o,d),l=new dt(o,o.j,l),l.M=2,l.A=bs(Ge(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=du(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Rs(l)}lu(o)}function Cs(o){o.g&&(To(o),o.g.cancel(),o.g=null)}function ru(o){Cs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Ds(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Vs(o){if(!Uc(o.h)&&!o.m){o.m=!0;var l=o.Ea;X||g(),Q||(X(),Q=!0),T.add(l,o),o.D=0}}function Xm(o,l){return Bc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=hr(h(o.Ea,o,l),uu(o,o.D)),o.D++,!0)}r.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new dt(this,this.j,o);let b=this.o;if(this.U&&(b?(b=pc(b),_c(b,this.U)):b=this.U),this.u!==null||this.R||(A.J=b,b=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=iu(this,A,l),d=Ge(this.J),se(d,"RID",o),se(d,"CVER",22),this.G&&se(d,"X-HTTP-Session-Id",this.G),vr(this,d),b&&(this.R?l="headers="+fr(Xc(b))+"&"+l:this.u&&_o(d,this.u,b)),mo(this.h,A),this.Ra&&se(d,"TYPE","init"),this.S?(se(d,"$req",l),se(d,"SID","null"),A.U=!0,uo(A,d,null)):uo(A,d,l),this.I=2}}else this.I==3&&(o?su(this,o):this.i.length==0||Uc(this.h)||su(this))};function su(o,l){var d;l?d=l.l:d=o.V++;const m=Ge(o.J);se(m,"SID",o.M),se(m,"RID",d),se(m,"AID",o.K),vr(o,m),o.u&&o.o&&_o(m,o.u,o.o),d=new dt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=iu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),mo(o.h,d),uo(d,m,l)}function vr(o,l){o.H&&Ts(o.H,function(d,m){se(l,m,d)}),o.l&&Ts({},function(d,m){se(l,m,d)})}function iu(o,l,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let G=-1;for(;;){const fe=["count="+d];G==-1?d>0?(G=A[0].g,fe.push("ofs="+G)):G=0:fe.push("ofs="+G);let re=!0;for(let _e=0;_e<d;_e++){var b=A[_e].g;const Ke=A[_e].map;if(b-=G,b<0)G=Math.max(0,A[_e].g-100),re=!1;else try{b="req"+b+"_"||"";try{var k=Ke instanceof Map?Ke:Object.entries(Ke);for(const[$t,gt]of k){let _t=gt;c(gt)&&(_t=so(gt)),fe.push(b+$t+"="+encodeURIComponent(_t))}}catch($t){throw fe.push(b+"type="+encodeURIComponent("_badmap")),$t}}catch{m&&m(Ke)}}if(re){k=fe.join("&");break e}}k=void 0}return o=o.i.splice(0,d),l.G=o,k}function ou(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;X||g(),Q||(X(),Q=!0),T.add(l,o),o.A=0}}function Io(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=hr(h(o.Da,o),uu(o,o.A)),o.A++,!0)}r.Da=function(){if(this.v=null,au(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=hr(h(this.Wa,this),o)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,be(10),Cs(this),au(this))};function To(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function au(o){o.g=new dt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Ge(o.na);se(l,"RID","rpc"),se(l,"SID",o.M),se(l,"AID",o.K),se(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&se(l,"TO",o.ia),se(l,"TYPE","xmlhttp"),vr(o,l),o.u&&o.o&&_o(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=bs(Ge(l)),d.u=null,d.R=!0,Oc(d,o)}r.Va=function(){this.C!=null&&(this.C=null,Cs(this),Io(this),be(19))};function Ds(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function cu(o,l){var d=null;if(o.g==l){Ds(o),To(o),o.g=null;var m=2}else if(fo(o.h,l))d=l.G,jc(o.h,l),m=1;else return;if(o.I!=0){if(l.o)if(m==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;m=vs(),Re(m,new Vc(m,d)),Vs(o)}else ou(o);else if(A=l.m,A==3||A==0&&l.X>0||!(m==1&&Xm(o,l)||m==2&&Io(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),A){case 1:zt(o,5);break;case 4:zt(o,10);break;case 3:zt(o,6);break;default:zt(o,2)}}}function uu(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function zt(o,l){if(o.j.info("Error code "+l),l==2){var d=h(o.bb,o),m=o.Ua;const A=!m;m=new ft(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||pr(m,"https"),bs(m),A?Gm(m.toString(),d):Km(m.toString(),d)}else be(2);o.I=0,o.l&&o.l.pa(l),lu(o),ru(o)}r.bb=function(o){o?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function lu(o){if(o.I=0,o.ja=[],o.l){const l=qc(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ja,l),D(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function hu(o,l,d){var m=d instanceof ft?Ge(d):new ft(d);if(m.g!="")l&&(m.g=l+"."+m.g),gr(m,m.u);else{var A=a.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const b=new ft(null);m&&pr(b,m),l&&(b.g=l),A&&gr(b,A),d&&(b.h=d),m=b}return d=o.G,l=o.wa,d&&l&&se(m,d,l),se(m,"VER",o.ka),vr(o,m),m}function du(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ce(new go({ab:d})):new ce(o.ma),l.Fa(o.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fu(){}r=fu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function ks(){}ks.prototype.g=function(o,l){return new De(o,l)};function De(o,l){Ee.call(this),this.g=new nu(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!_(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new vn(this)}p(De,Ee),De.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){yo(this.g)},De.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=so(o),o=d);l.i.push(new Lm(l.Ya++,o)),l.I==3&&Vs(l)},De.prototype.N=function(){this.g.l=null,delete this.j,yo(this.g),delete this.g,De.Z.N.call(this)};function mu(o){io.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}p(mu,io);function pu(){oo.call(this),this.status=1}p(pu,oo);function vn(o){this.g=o}p(vn,fu),vn.prototype.ra=function(){Re(this.g,"a")},vn.prototype.qa=function(o){Re(this.g,new mu(o))},vn.prototype.pa=function(o){Re(this.g,new pu)},vn.prototype.oa=function(){Re(this.g,"b")},ks.prototype.createWebChannel=ks.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,ud=function(){return new ks},cd=function(){return vs()},ad=Bt,$o={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Ks=As,Dc.COMPLETE="complete",od=Dc,bc.EventType=ur,ur.OPEN="a",ur.CLOSE="b",ur.ERROR="c",ur.MESSAGE="d",Ee.prototype.listen=Ee.prototype.J,Cr=bc,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,id=ce}).apply(typeof Os<"u"?Os:typeof self<"u"?self:typeof window<"u"?window:{});const Gu="@firebase/firestore",Ku="4.9.3";/**
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
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let ir="12.7.0";/**
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
 */const ln=new pa("@firebase/firestore");function Vn(){return ln.logLevel}function C(r,...e){if(ln.logLevel<=H.DEBUG){const t=e.map(Pa);ln.debug(`Firestore (${ir}): ${r}`,...t)}}function Se(r,...e){if(ln.logLevel<=H.ERROR){const t=e.map(Pa);ln.error(`Firestore (${ir}): ${r}`,...t)}}function hn(r,...e){if(ln.logLevel<=H.WARN){const t=e.map(Pa);ln.warn(`Firestore (${ir}): ${r}`,...t)}}function Pa(r){if(typeof r=="string")return r;try{/**
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
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
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
 */function M(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ld(r,n,t)}function ld(r,e,t){let n=`FIRESTORE (${ir}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Se(n),new Error(n)}function L(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||ld(e,s,n)}function z(r,e){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class st{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class hd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ie.UNAUTHENTICATED)))}shutdown(){}}class ky{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ny{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){L(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new st;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new st,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new st)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new hd(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class xy{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Oy{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new xy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ie.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class My{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){L(this.o===void 0,3512);const n=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Hu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(L(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ly(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ca{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Ly(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function q(r,e){return r<e?-1:r>e?1:0}function Go(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Co(s)===Co(i)?q(s,i):Co(s)?1:-1}return q(r.length,e.length)}const Fy=55296,Uy=57343;function Co(r){const e=r.charCodeAt(0);return e>=Fy&&e<=Uy}function qn(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function dd(r){return r+"\0"}/**
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
 */const Wu="__name__";class He{constructor(e,t,n){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&M(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=He.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const n=He.isNumericId(e),s=He.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?He.extractNumericId(e).compare(He.extractNumericId(t)):Go(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dt.fromString(e.substring(4,e.length-2))}}class te extends He{construct(e,t,n){return new te(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new te(t)}static emptyPath(){return new te([])}}const By=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends He{construct(e,t,n){return new ae(e,t,n)}static isValidIdentifier(e){return By.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wu}static keyField(){return new ae([Wu])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(n+=c,s++):(i(),s++)}if(i(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(te.fromString(e))}static fromName(e){return new x(te.fromString(e).popFirst(5))}static empty(){return new x(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new te(e.slice()))}}/**
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
 */function jy(r,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function qy(r,e,t,n){if(e===!0&&n===!0)throw new O(P.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Qu(r){if(!x.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function fd(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Va(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function it(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Va(r);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function he(r,e){const t={typeString:r};return e&&(t.value=e),t}function ls(r,e){if(!fd(r))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ju=-62135596800,Xu=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(e){return Y.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Xu);return new Y(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ju)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xu}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ls(e,Y._jsonSchema))return new Y(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ju;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:he("string",Y._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new Y(0,0))}static max(){return new F(new Y(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Kr=-1;class di{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function Ko(r){return r.fields.find((e=>e.kind===2))}function Ht(r){return r.fields.filter((e=>e.kind!==2))}di.UNKNOWN_ID=-1;class Hs{constructor(e,t){this.fieldPath=e,this.kind=t}}class Hr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Hr(0,Me.min())}}function zy(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=F.fromTimestamp(n===1e9?new Y(t+1,0):new Y(t,n));return new Me(s,x.empty(),e)}function md(r){return new Me(r.readTime,r.key,Kr)}class Me{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Me(F.min(),x.empty(),Kr)}static max(){return new Me(F.max(),x.empty(),Kr)}}function Da(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(r.documentKey,e.documentKey),t!==0?t:q(r.largestBatchId,e.largestBatchId))}/**
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
 */const pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function yn(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==pd)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):v.reject(t)}static resolve(e){return new v(((t,n)=>{t(e)}))}static reject(e){return new v(((t,n)=>{n(e)}))}static waitFor(e){return new v(((t,n)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>n(u)))})),a=!0,i===s&&t()}))}static or(e){let t=v.resolve(!1);for(const n of e)t=t.next((s=>s?v.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new v(((n,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((f=>{a[h]=f,++c,c===i&&n(a)}),(f=>s(f)))}}))}static doWhile(e,t){return new v(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
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
 */const ke="SimpleDb";class Ni{static open(e,t,n,s){try{return new Ni(t,e.transaction(s,n))}catch(i){throw new Mr(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new st,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Mr(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=ka(n.target.error);this.S.reject(new Mr(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(C(ke,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Gy(t)}}class kt{static delete(e){return C(ke,"Removing database:",e),Qt(fh().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!wh())return!1;if(kt.F())return!0;const e=pe(),t=kt.M(e),n=0<t&&t<10,s=_d(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,kt.M(pe())===12.2&&Se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(C(ke,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;t(a)},s.onblocked=()=>{n(new Mr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new O(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new O(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Mr(e,a))},s.onupgradeneeded=i=>{C(ke,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.N.k(a,s.transaction,i.oldVersion,this.version).next((()=>{C(ke,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.L(e);const c=Ni.open(this.db,e,i?"readonly":"readwrite",n),u=s(c).next((h=>(c.C(),h))).catch((h=>(c.abort(h),v.reject(h)))).toPromise();return u.catch((()=>{})),await c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&a<3;if(C(ke,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function _d(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class $y{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Qt(this.U.delete())}}class Mr extends O{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Lt(r){return r.name==="IndexedDbTransactionError"}class Gy{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(C(ke,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(C(ke,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Qt(n)}add(e){return C(ke,"ADD",this.store.name,e,e),Qt(this.store.add(e))}get(e){return Qt(this.store.get(e)).next((t=>(t===void 0&&(t=null),C(ke,"GET",this.store.name,e,t),t)))}delete(e){return C(ke,"DELETE",this.store.name,e),Qt(this.store.delete(e))}count(){return C(ke,"COUNT",this.store.name),Qt(this.store.count())}J(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new v(((a,c)=>{i.onerror=u=>{c(u.target.error)},i.onsuccess=u=>{a(u.target.result)}}))}{const i=this.cursor(n),a=[];return this.H(i,((c,u)=>{a.push(u)})).next((()=>a))}}Y(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new v(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}Z(e,t){C(ke,"DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const s=this.cursor(n);return this.H(s,((i,a,c)=>c.delete()))}ee(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.H(s,t)}te(e){const t=this.cursor({});return new v(((n,s)=>{t.onerror=i=>{const a=ka(i.target.error);s(a)},t.onsuccess=i=>{const a=i.target.result;a?e(a.primaryKey,a.value).next((c=>{c?a.continue():n()})):n()}}))}H(e,t){const n=[];return new v(((s,i)=>{e.onerror=a=>{i(a.target.error)},e.onsuccess=a=>{const c=a.target.result;if(!c)return void s();const u=new $y(c),h=t(c.primaryKey,c.value,u);if(h instanceof v){const f=h.catch((p=>(u.done(),v.reject(p))));n.push(f)}u.isDone?s():u.G===null?c.continue():c.continue(u.G)}})).next((()=>v.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Qt(r){return new v(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=ka(n.target.error);t(s)}}))}let Yu=!1;function ka(r){const e=kt.M(pe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Yu||(Yu=!0,setTimeout((()=>{throw n}),0)),n}}return r}const Lr="IndexBackfiller";class Ky{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){C(Lr,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();C(Lr,`Documents written: ${t}`)}catch(t){Lt(t)?C(Lr,"Ignoring IndexedDB error during index backfill: ",t):await yn(t)}await this.re(6e4)}))}}class Hy{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const n=new Set;let s=t,i=!0;return v.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((a=>{if(a!==null&&!n.has(a))return C(Lr,`Processing collection: ${a}`),this.oe(e,a,s).next((c=>{s-=c,n.add(a)}));i=!1})))).next((()=>t-s))}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next((()=>this._e(s,i))).next((c=>(C(Lr,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>a.size))}))))}_e(e,t){let n=e;return t.changes.forEach(((s,i)=>{const a=md(i);Da(a,n)>0&&(n=a)})),new Me(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Fe.ce=-1;/**
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
 */const nn=-1;function xi(r){return r==null}function Wr(r){return r===0&&1/r==-1/0}function Wy(r){return typeof r=="number"&&Number.isInteger(r)&&!Wr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const fi="";function Ae(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Zu(e)),e=Qy(r.get(t),e);return Zu(e)}function Qy(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case fi:t+="";break;default:t+=i}}return t}function Zu(r){return r+fi+""}function We(r){const e=r.length;if(L(e>=2,64408,{path:r}),e===2)return L(r.charAt(0)===fi&&r.charAt(1)==="",56145,{path:r}),te.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const a=r.indexOf(fi,i);switch((a<0||a>t)&&M(50515,{path:r}),r.charAt(a+1)){case"":const c=r.substring(i,a);let u;s.length===0?u=c:(s+=c,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:M(61167,{path:r})}i=a+2}return new te(n)}/**
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
 */const Wt="remoteDocuments",hs="owner",An="owner",Qr="mutationQueues",Jy="userId",je="mutations",el="batchId",en="userMutationsIndex",tl=["userId","batchId"];/**
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
 */function Ws(r,e){return[r,Ae(e)]}function yd(r,e,t){return[r,Ae(e),t]}const Xy={},zn="documentMutations",mi="remoteDocumentsV14",Yy=["prefixPath","collectionGroup","readTime","documentId"],Qs="documentKeyIndex",Zy=["prefixPath","collectionGroup","documentId"],Id="collectionGroupIndex",eI=["collectionGroup","readTime","prefixPath","documentId"],Jr="remoteDocumentGlobal",Ho="remoteDocumentGlobalKey",$n="targets",Td="queryTargetsIndex",tI=["canonicalId","targetId"],Gn="targetDocuments",nI=["targetId","path"],Na="documentTargetsIndex",rI=["path","targetId"],pi="targetGlobalKey",rn="targetGlobal",Xr="collectionParents",sI=["collectionId","parent"],Kn="clientMetadata",iI="clientId",Oi="bundles",oI="bundleId",Mi="namedQueries",aI="name",xa="indexConfiguration",cI="indexId",Wo="collectionGroupIndex",uI="collectionGroup",Fr="indexState",lI=["indexId","uid"],Ed="sequenceNumberIndex",hI=["uid","sequenceNumber"],Ur="indexEntries",dI=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],wd="documentKeyIndex",fI=["indexId","uid","orderedDocumentKey"],Li="documentOverlays",mI=["userId","collectionPath","documentId"],Qo="collectionPathOverlayIndex",pI=["userId","collectionPath","largestBatchId"],vd="collectionGroupOverlayIndex",gI=["userId","collectionGroup","largestBatchId"],Oa="globals",_I="name",Ad=[Qr,je,zn,Wt,$n,hs,rn,Gn,Kn,Jr,Xr,Oi,Mi],yI=[...Ad,Li],Rd=[Qr,je,zn,mi,$n,hs,rn,Gn,Kn,Jr,Xr,Oi,Mi,Li],bd=Rd,Ma=[...bd,xa,Fr,Ur],II=Ma,Sd=[...Ma,Oa],TI=Sd;/**
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
 */class Jo extends gd{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function ge(r,e){const t=z(r);return kt.O(t.le,e)}/**
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
 */function nl(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function In(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Pd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ms(this.root,e,this.comparator,!0)}}class Ms{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Te.RED,this.left=s??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Te(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Z{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rl(this.data.getIterator())}getIteratorFrom(e){return new rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Z)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Z(this.comparator);return t.data=e,t}}class rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Rn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(ae.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new Z(ae.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qn(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
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
 */class Cd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cd("Invalid base64 string: "+i):i}})(e);return new de(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const EI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ct(r){if(L(!!r,39018),typeof r=="string"){let e=0;const t=EI.exec(r);if(L(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ie(r.seconds),nanos:ie(r.nanos)}}function ie(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ut(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
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
 */const Vd="server_timestamp",Dd="__type__",kd="__previous_value__",Nd="__local_write_time__";function La(r){return(r?.mapValue?.fields||{})[Dd]?.stringValue===Vd}function Fi(r){const e=r.mapValue.fields[kd];return La(e)?Fi(e):e}function Yr(r){const e=ct(r.mapValue.fields[Nd].timestampValue);return new Y(e.seconds,e.nanos)}/**
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
 */class wI{constructor(e,t,n,s,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const gi="(default)";class dn{constructor(e,t){this.projectId=e,this.database=t||gi}static empty(){return new dn("","")}get isDefaultDatabase(){return this.database===gi}isEqual(e){return e instanceof dn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fa="__type__",xd="__max__",St={mapValue:{fields:{__type__:{stringValue:xd}}}},Ua="__vector__",Hn="value",Js={nullValue:"NULL_VALUE"};function Nt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?La(r)?4:Od(r)?9007199254740991:Ui(r)?10:11:M(28295,{value:r})}function et(r,e){if(r===e)return!0;const t=Nt(r);if(t!==Nt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Yr(r).isEqual(Yr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ct(s.timestampValue),c=ct(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return ut(s.bytesValue).isEqual(ut(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return ie(s.geoPointValue.latitude)===ie(i.geoPointValue.latitude)&&ie(s.geoPointValue.longitude)===ie(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ie(s.integerValue)===ie(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ie(s.doubleValue),c=ie(i.doubleValue);return a===c?Wr(a)===Wr(c):isNaN(a)&&isNaN(c)}return!1})(r,e);case 9:return qn(r.arrayValue.values||[],e.arrayValue.values||[],et);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(nl(a)!==nl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!et(a[u],c[u])))return!1;return!0})(r,e);default:return M(52216,{left:r})}}function Zr(r,e){return(r.values||[]).find((t=>et(t,e)))!==void 0}function xt(r,e){if(r===e)return 0;const t=Nt(r),n=Nt(e);if(t!==n)return q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ie(i.integerValue||i.doubleValue),u=ie(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(r,e);case 3:return sl(r.timestampValue,e.timestampValue);case 4:return sl(Yr(r),Yr(e));case 5:return Go(r.stringValue,e.stringValue);case 6:return(function(i,a){const c=ut(i),u=ut(a);return c.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=q(c[h],u[h]);if(f!==0)return f}return q(c.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=q(ie(i.latitude),ie(a.latitude));return c!==0?c:q(ie(i.longitude),ie(a.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return il(r.arrayValue,e.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},h=c[Hn]?.arrayValue,f=u[Hn]?.arrayValue,p=q(h?.values?.length||0,f?.values?.length||0);return p!==0?p:il(h,f)})(r.mapValue,e.mapValue);case 11:return(function(i,a){if(i===St.mapValue&&a===St.mapValue)return 0;if(i===St.mapValue)return 1;if(a===St.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const I=Go(u[p],f[p]);if(I!==0)return I;const S=xt(c[u[p]],h[f[p]]);if(S!==0)return S}return q(u.length,f.length)})(r.mapValue,e.mapValue);default:throw M(23264,{he:t})}}function sl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return q(r,e);const t=ct(r),n=ct(e),s=q(t.seconds,n.seconds);return s!==0?s:q(t.nanos,n.nanos)}function il(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=xt(t[s],n[s]);if(i)return i}return q(t.length,n.length)}function Wn(r){return Xo(r)}function Xo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=ct(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return ut(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return x.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Xo(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Xo(t.fields[a])}`;return s+"}"})(r.mapValue):M(61005,{value:r})}function Xs(r){switch(Nt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fi(r);return e?16+Xs(e):16;case 5:return 2*r.stringValue.length;case 6:return ut(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Xs(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return In(n.fields,((i,a)=>{s+=i.length+Xs(a)})),s})(r.mapValue);default:throw M(13486,{value:r})}}function Ba(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Yo(r){return!!r&&"integerValue"in r}function es(r){return!!r&&"arrayValue"in r}function ol(r){return!!r&&"nullValue"in r}function al(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ys(r){return!!r&&"mapValue"in r}function Ui(r){return(r?.mapValue?.fields||{})[Fa]?.stringValue===Ua}function Br(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return In(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Br(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Br(r.arrayValue.values[t]);return e}return{...r}}function Od(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===xd}const Md={mapValue:{fields:{[Fa]:{stringValue:Ua},[Hn]:{arrayValue:{}}}}};function vI(r){return"nullValue"in r?Js:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Ba(dn.empty(),x.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Ui(r)?Md:{mapValue:{}}:M(35942,{value:r})}function AI(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Ba(dn.empty(),x.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Md:"mapValue"in r?Ui(r)?{mapValue:{}}:St:M(61959,{value:r})}function cl(r,e){const t=xt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function ul(r,e){const t=xt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Ve{constructor(e){this.value=e}static empty(){return new Ve({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ys(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Br(t)}setAll(e){let t=ae.emptyPath(),n={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=c.popLast()}a?n[c.lastSegment()]=Br(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Ys(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Ys(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){In(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new Ve(Br(this.value))}}function Ld(r){const e=[];return In(r.fields,((t,n)=>{const s=new ae([t]);if(Ys(n)){const i=Ld(n.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ue(e)}/**
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
 */class ue{constructor(e,t,n,s,i,a,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ue(e,0,F.min(),F.min(),F.min(),Ve.empty(),0)}static newFoundDocument(e,t,n,s){return new ue(e,1,t,F.min(),n,s,0)}static newNoDocument(e,t){return new ue(e,2,t,F.min(),F.min(),Ve.empty(),0)}static newUnknownDocument(e,t){return new ue(e,3,t,F.min(),F.min(),Ve.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ve.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qn{constructor(e,t){this.position=e,this.inclusive=t}}function ll(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],a=r.position[s];if(i.field.isKeyField()?n=x.comparator(x.fromName(a.referenceValue),t.key):n=xt(a,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function hl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!et(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class _i{constructor(e,t="asc"){this.field=e,this.dir=t}}function RI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Fd{}class W extends Fd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new bI(e,t,n):t==="array-contains"?new CI(e,n):t==="in"?new $d(e,n):t==="not-in"?new VI(e,n):t==="array-contains-any"?new DI(e,n):new W(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new SI(e,n):new PI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xt(t,this.value)):t!==null&&Nt(this.value)===Nt(t)&&this.matchesComparison(xt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Fd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ne(e,t)}matches(e){return Jn(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Jn(r){return r.op==="and"}function Zo(r){return r.op==="or"}function ja(r){return Ud(r)&&Jn(r)}function Ud(r){for(const e of r.filters)if(e instanceof ne)return!1;return!0}function ea(r){if(r instanceof W)return r.field.canonicalString()+r.op.toString()+Wn(r.value);if(ja(r))return r.filters.map((e=>ea(e))).join(",");{const e=r.filters.map((t=>ea(t))).join(",");return`${r.op}(${e})`}}function Bd(r,e){return r instanceof W?(function(n,s){return s instanceof W&&n.op===s.op&&n.field.isEqual(s.field)&&et(n.value,s.value)})(r,e):r instanceof ne?(function(n,s){return s instanceof ne&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,c)=>i&&Bd(a,s.filters[c])),!0):!1})(r,e):void M(19439)}function jd(r,e){const t=r.filters.concat(e);return ne.create(t,r.op)}function qd(r){return r instanceof W?(function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`})(r):r instanceof ne?(function(t){return t.op.toString()+" {"+t.getFilters().map(qd).join(" ,")+"}"})(r):"Filter"}class bI extends W{constructor(e,t,n){super(e,t,n),this.key=x.fromName(n.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class SI extends W{constructor(e,t){super(e,"in",t),this.keys=zd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class PI extends W{constructor(e,t){super(e,"not-in",t),this.keys=zd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zd(r,e){return(e.arrayValue?.values||[]).map((t=>x.fromName(t.referenceValue)))}class CI extends W{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return es(t)&&Zr(t.arrayValue,this.value)}}class $d extends W{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zr(this.value.arrayValue,t)}}class VI extends W{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zr(this.value.arrayValue,t)}}class DI extends W{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!es(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Zr(this.value.arrayValue,n)))}}/**
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
 */class kI{constructor(e,t=null,n=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function ta(r,e=null,t=[],n=[],s=null,i=null,a=null){return new kI(r,e,t,n,s,i,a)}function fn(r){const e=z(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ea(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Wn(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Wn(n))).join(",")),e.Te=t}return e.Te}function ds(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!RI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Bd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!hl(r.startAt,e.startAt)&&hl(r.endAt,e.endAt)}function yi(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ii(r,e){return r.filters.filter((t=>t instanceof W&&t.field.isEqual(e)))}function dl(r,e,t){let n=Js,s=!0;for(const i of Ii(r,e)){let a=Js,c=!0;switch(i.op){case"<":case"<=":a=vI(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,c=!1;break;case"!=":case"not-in":a=Js}cl({value:n,inclusive:s},{value:a,inclusive:c})<0&&(n=a,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];cl({value:n,inclusive:s},{value:a,inclusive:t.inclusive})<0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}function fl(r,e,t){let n=St,s=!0;for(const i of Ii(r,e)){let a=St,c=!0;switch(i.op){case">=":case">":a=AI(i.value),c=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,c=!1;break;case"!=":case"not-in":a=St}ul({value:n,inclusive:s},{value:a,inclusive:c})>0&&(n=a,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const a=t.position[i];ul({value:n,inclusive:s},{value:a,inclusive:t.inclusive})>0&&(n=a,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Bi{constructor(e,t=null,n=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function NI(r,e,t,n,s,i,a,c){return new Bi(r,e,t,n,s,i,a,c)}function fs(r){return new Bi(r)}function ml(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function xI(r){return r.collectionGroup!==null}function jr(r){const e=z(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Z(ae.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new _i(i,n))})),t.has(ae.keyField().canonicalString())||e.Ie.push(new _i(ae.keyField(),n))}return e.Ie}function Be(r){const e=z(r);return e.Ee||(e.Ee=OI(e,jr(r))),e.Ee}function OI(r,e){if(r.limitType==="F")return ta(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new _i(s.field,i)}));const t=r.endAt?new Qn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Qn(r.startAt.position,r.startAt.inclusive):null;return ta(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function na(r,e,t){return new Bi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function ji(r,e){return ds(Be(r),Be(e))&&r.limitType===e.limitType}function Gd(r){return`${fn(Be(r))}|lt:${r.limitType}`}function Dn(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>qd(s))).join(", ")}]`),xi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>Wn(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>Wn(s))).join(",")),`Target(${n})`})(Be(r))}; limitType=${r.limitType})`}function ms(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):x.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of jr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(a,c,u){const h=ll(a,c,u);return a.inclusive?h<=0:h<0})(n.startAt,jr(n),s)||n.endAt&&!(function(a,c,u){const h=ll(a,c,u);return a.inclusive?h>=0:h>0})(n.endAt,jr(n),s))})(r,e)}function MI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Kd(r){return(e,t)=>{let n=!1;for(const s of jr(r)){const i=LI(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function LI(r,e,t){const n=r.field.isKeyField()?x.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?xt(u,h):M(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
 */class ht{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return Pd(this.inner)}size(){return this.innerSize}}/**
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
 */const FI=new oe(x.comparator);function Ne(){return FI}const Hd=new oe(x.comparator);function Vr(...r){let e=Hd;for(const t of r)e=e.insert(t.key,t);return e}function Wd(r){let e=Hd;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Qe(){return qr()}function Qd(){return qr()}function qr(){return new ht((r=>r.toString()),((r,e)=>r.isEqual(e)))}const UI=new oe(x.comparator),BI=new Z(x.comparator);function K(...r){let e=BI;for(const t of r)e=e.add(t);return e}const jI=new Z(q);function qI(){return jI}/**
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
 */function qa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wr(e)?"-0":e}}function Jd(r){return{integerValue:""+r}}function zI(r,e){return Wy(e)?Jd(e):qa(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class qi{constructor(){this._=void 0}}function $I(r,e,t){return r instanceof ts?(function(s,i){const a={fields:{[Dd]:{stringValue:Vd},[Nd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&La(i)&&(i=Fi(i)),i&&(a.fields[kd]=i),{mapValue:a}})(t,e):r instanceof Xn?Yd(r,e):r instanceof Yn?Zd(r,e):(function(s,i){const a=Xd(s,i),c=pl(a)+pl(s.Ae);return Yo(a)&&Yo(s.Ae)?Jd(c):qa(s.serializer,c)})(r,e)}function GI(r,e,t){return r instanceof Xn?Yd(r,e):r instanceof Yn?Zd(r,e):t}function Xd(r,e){return r instanceof ns?(function(n){return Yo(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class ts extends qi{}class Xn extends qi{constructor(e){super(),this.elements=e}}function Yd(r,e){const t=ef(e);for(const n of r.elements)t.some((s=>et(s,n)))||t.push(n);return{arrayValue:{values:t}}}class Yn extends qi{constructor(e){super(),this.elements=e}}function Zd(r,e){let t=ef(e);for(const n of r.elements)t=t.filter((s=>!et(s,n)));return{arrayValue:{values:t}}}class ns extends qi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function pl(r){return ie(r.integerValue||r.doubleValue)}function ef(r){return es(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class KI{constructor(e,t){this.field=e,this.transform=t}}function HI(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof Xn&&s instanceof Xn||n instanceof Yn&&s instanceof Yn?qn(n.elements,s.elements,et):n instanceof ns&&s instanceof ns?et(n.Ae,s.Ae):n instanceof ts&&s instanceof ts})(r.transform,e.transform)}class WI{constructor(e,t){this.version=e,this.transformResults=t}}class xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class zi{}function tf(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new za(r.key,xe.none()):new or(r.key,r.data,xe.none());{const t=r.data,n=Ve.empty();let s=new Z(ae.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new Ft(r.key,n,new Ue(s.toArray()),xe.none())}}function QI(r,e,t){r instanceof or?(function(s,i,a){const c=s.value.clone(),u=_l(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(r,e,t):r instanceof Ft?(function(s,i,a){if(!Zs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=_l(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(nf(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function zr(r,e,t,n){return r instanceof or?(function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=i.value.clone(),f=yl(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(r,e,t,n):r instanceof Ft?(function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=yl(i.fieldTransforms,u,a),f=a.data;return f.setAll(nf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(r,e,t,n):(function(i,a,c){return Zs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(r,e,t)}function JI(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Xd(n.transform,s||null);i!=null&&(t===null&&(t=Ve.empty()),t.set(n.field,i))}return t||null}function gl(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&qn(n,s,((i,a)=>HI(i,a)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class or extends zi{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ft extends zi{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nf(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function _l(r,e,t){const n=new Map;L(r.length===t.length,32656,{Re:t.length,Ve:r.length});for(let s=0;s<t.length;s++){const i=r[s],a=i.transform,c=e.data.field(i.field);n.set(i.field,GI(a,c,t[s]))}return n}function yl(r,e,t){const n=new Map;for(const s of r){const i=s.transform,a=t.data.field(s.field);n.set(s.field,$I(i,a,e))}return n}class za extends zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rf extends zi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $a{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QI(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=zr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=zr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Qd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=tf(a,c);u!==null&&n.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&qn(this.mutations,e.mutations,((t,n)=>gl(t,n)))&&qn(this.baseMutations,e.baseMutations,((t,n)=>gl(t,n)))}}class Ga{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){L(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return UI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Ga(e,t,n,s)}}/**
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
 */class Ka{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class XI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var le,J;function YI(r){switch(r){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function sf(r){if(r===void 0)return Se("GRPC error has no .code"),P.UNKNOWN;switch(r){case le.OK:return P.OK;case le.CANCELLED:return P.CANCELLED;case le.UNKNOWN:return P.UNKNOWN;case le.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case le.INTERNAL:return P.INTERNAL;case le.UNAVAILABLE:return P.UNAVAILABLE;case le.UNAUTHENTICATED:return P.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case le.NOT_FOUND:return P.NOT_FOUND;case le.ALREADY_EXISTS:return P.ALREADY_EXISTS;case le.PERMISSION_DENIED:return P.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case le.ABORTED:return P.ABORTED;case le.OUT_OF_RANGE:return P.OUT_OF_RANGE;case le.UNIMPLEMENTED:return P.UNIMPLEMENTED;case le.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:r})}}(J=le||(le={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ZI(){return new TextEncoder}/**
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
 */const eT=new Dt([4294967295,4294967295],0);function Il(r){const e=ZI().encode(r),t=new sd;return t.update(e),new Uint8Array(t.digest())}function Tl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dt([t,n],0),new Dt([s,i],0)]}class Ha{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Dr(`Invalid padding: ${t}`);if(n<0)throw new Dr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Dr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Dr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Dt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Dt.fromNumber(n)));return s.compare(eT)===1&&(s=new Dt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Il(e),[n,s]=Tl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);if(!this.we(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ha(i,s,t);return n.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Il(e),[n,s]=Tl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(n,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $i{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ps.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new $i(F.min(),s,new oe(q),Ne(),K())}}class ps{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ps(n,t,K(),K(),K())}}/**
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
 */class ei{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class of{constructor(e,t){this.targetId=e,this.Ce=t}}class af{constructor(e,t,n=de.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class El{constructor(){this.ve=0,this.Fe=wl(),this.Me=de.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),n=K();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:i})}})),new ps(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=wl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,L(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tT{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ne(),this.Je=Ls(),this.He=Ls(),this.Ye=new oe(q)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:M(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(yi(i))if(n===0){const a=new x(i.path);this.et(t,a,ue.newNoDocument(a,F.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=ut(n).toUint8Array()}catch(u){if(u instanceof Cd)return hn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ha(a,s,i)}catch(u){return hn(u instanceof Dr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&yi(c.target)){const u=new x(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,ue.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let n=K();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new $i(e,t,this.Ye,this.je,n);return this.je=Ne(),this.Je=Ls(),this.He=Ls(),this.Ye=new oe(q),s}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new El,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Z(q),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Z(q),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||C("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new El),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ls(){return new oe(x.comparator)}function wl(){return new oe(x.comparator)}const nT={asc:"ASCENDING",desc:"DESCENDING"},rT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sT={and:"AND",or:"OR"};class iT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ra(r,e){return r.useProto3Json||xi(e)?e:{value:e}}function Zn(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function oT(r,e){return Zn(r,e.toTimestamp())}function Pe(r){return L(!!r,49232),F.fromTimestamp((function(t){const n=ct(t);return new Y(n.seconds,n.nanos)})(r))}function Wa(r,e){return sa(r,e).canonicalString()}function sa(r,e){const t=(function(s){return new te(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function uf(r){const e=te.fromString(r);return L(yf(e),10190,{key:e.toString()}),e}function Ti(r,e){return Wa(r.databaseId,e.path)}function sn(r,e){const t=uf(e);if(t.get(1)!==r.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new x(df(t))}function lf(r,e){return Wa(r.databaseId,e)}function hf(r){const e=uf(r);return e.length===4?te.emptyPath():df(e)}function ia(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function df(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function vl(r,e,t){return{name:Ti(r,e),fields:t.value.mapValue.fields}}function aT(r,e,t){const n=sn(r,e.name),s=Pe(e.updateTime),i=e.createTime?Pe(e.createTime):F.min(),a=new Ve({mapValue:{fields:e.fields}}),c=ue.newFoundDocument(n,s,i,a);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function cT(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(L(f===void 0||typeof f=="string",58123),de.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),de.fromUint8Array(f||new Uint8Array))})(r,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?P.UNKNOWN:sf(h.code);return new O(f,h.message||"")})(a);t=new af(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=sn(r,n.document.name),i=Pe(n.document.updateTime),a=n.document.createTime?Pe(n.document.createTime):F.min(),c=new Ve({mapValue:{fields:n.document.fields}}),u=ue.newFoundDocument(s,i,a,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ei(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=sn(r,n.document),i=n.readTime?Pe(n.readTime):F.min(),a=ue.newNoDocument(s,i),c=n.removedTargetIds||[];t=new ei([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=sn(r,n.document),i=n.removedTargetIds||[];t=new ei([],i,s,null)}else{if(!("filter"in e))return M(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new XI(s,i),c=n.targetId;t=new of(c,a)}}return t}function Ei(r,e){let t;if(e instanceof or)t={update:vl(r,e.key,e.value)};else if(e instanceof za)t={delete:Ti(r,e.key)};else if(e instanceof Ft)t={update:vl(r,e.key,e.data),updateMask:mT(e.fieldMask)};else{if(!(e instanceof rf))return M(16599,{Vt:e.type});t={verify:Ti(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,a){const c=a.transform;if(c instanceof ts)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ns)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw M(20930,{transform:a.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:oT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M(27497)})(r,e.precondition)),t}function oa(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?xe.updateTime(Pe(i.updateTime)):i.exists!==void 0?xe.exists(i.exists):xe.none()})(e.currentDocument):xe.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(a,c){let u=null;if("setToServerValue"in c)L(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new ts;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new Xn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new Yn(f)}else"increment"in c?u=new ns(a,c.increment):M(16584,{proto:c});const h=ae.fromServerFormat(c.fieldPath);return new KI(h,u)})(r,s))):[];if(e.update){e.update.name;const s=sn(r,e.update.name),i=new Ve({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=(function(u){const h=u.fieldPaths||[];return new Ue(h.map((f=>ae.fromServerFormat(f))))})(e.updateMask);return new Ft(s,i,a,t,n)}return new or(s,i,t,n)}if(e.delete){const s=sn(r,e.delete);return new za(s,t)}if(e.verify){const s=sn(r,e.verify);return new rf(s,t)}return M(1463,{proto:e})}function uT(r,e){return r&&r.length>0?(L(e!==void 0,14353),r.map((t=>(function(s,i){let a=s.updateTime?Pe(s.updateTime):Pe(i);return a.isEqual(F.min())&&(a=Pe(i)),new WI(a,s.transformResults||[])})(t,e)))):[]}function ff(r,e){return{documents:[lf(r,e.path)]}}function mf(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=lf(r,s);const i=(function(h){if(h.length!==0)return _f(ne.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(I){return{field:kn(I.field),direction:hT(I.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ra(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function pf(r){let e=hf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){L(n===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(p){const I=gf(p);return I instanceof ne&&ja(I)?I.getFilters():[I]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((I=>(function(D){return new _i(Nn(D.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(I)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let I;return I=typeof p=="object"?p.value:p,xi(I)?null:I})(t.limit));let u=null;t.startAt&&(u=(function(p){const I=!!p.before,S=p.values||[];return new Qn(S,I)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const I=!p.before,S=p.values||[];return new Qn(S,I)})(t.endAt)),NI(e,s,a,i,c,"F",u,h)}function lT(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gf(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Nn(t.unaryFilter.field);return W.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Nn(t.unaryFilter.field);return W.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nn(t.unaryFilter.field);return W.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(t.unaryFilter.field);return W.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(t){return W.create(Nn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ne.create(t.compositeFilter.filters.map((n=>gf(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(t.compositeFilter.op))})(r):M(30097,{filter:r})}function hT(r){return nT[r]}function dT(r){return rT[r]}function fT(r){return sT[r]}function kn(r){return{fieldPath:r.canonicalString()}}function Nn(r){return ae.fromServerFormat(r.fieldPath)}function _f(r){return r instanceof W?(function(t){if(t.op==="=="){if(al(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NAN"}};if(ol(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(al(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NAN"}};if(ol(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(t.field),op:dT(t.op),value:t.value}}})(r):r instanceof ne?(function(t){const n=t.getFilters().map((s=>_f(s)));return n.length===1?n[0]:{compositeFilter:{op:fT(t.op),filters:n}}})(r):M(54877,{filter:r})}function mT(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class rt{constructor(e,t,n,s,i=F.min(),a=F.min(),c=de.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new rt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class If{constructor(e){this.yt=e}}function pT(r,e){let t;if(e.document)t=aT(r.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=x.fromSegments(e.noDocument.path),s=pn(e.noDocument.readTime);t=ue.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M(56709);{const n=x.fromSegments(e.unknownDocument.path),s=pn(e.unknownDocument.version);t=ue.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new Y(s[0],s[1]);return F.fromTimestamp(i)})(e.readTime)),t}function Al(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:wi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,a){return{name:Ti(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Zn(i,a.version.toTimestamp()),createTime:Zn(i,a.createTime.toTimestamp())}})(r.yt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:mn(e.version)};else{if(!e.isUnknownDocument())return M(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:mn(e.version)}}return n}function wi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function mn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function pn(r){const e=new Y(r.seconds,r.nanoseconds);return F.fromTimestamp(e)}function Jt(r,e){const t=(e.baseMutations||[]).map((i=>oa(r.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const a=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];a.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>oa(r.yt,i))),s=Y.fromMillis(e.localWriteTimeMs);return new $a(e.batchId,s,t,n)}function kr(r){const e=pn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?pn(r.lastLimboFreeSnapshotVersion):F.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Be(fs(hf(i.documents[0])))})(r.query):(function(i){return Be(pf(i))})(r.query),new rt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,de.fromBase64String(r.resumeToken))}function Tf(r,e){const t=mn(e.snapshotVersion),n=mn(e.lastLimboFreeSnapshotVersion);let s;s=yi(e.target)?ff(r.yt,e.target):mf(r.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:fn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Ef(r){const e=pf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?na(e,e.limit,"L"):e}function Vo(r,e){return new Ka(e.largestBatchId,oa(r.yt,e.overlayMutation))}function Rl(r,e){const t=e.path.lastSegment();return[r,Ae(e.path.popLast()),t]}function bl(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:mn(n.readTime),documentKey:Ae(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class gT{getBundleMetadata(e,t){return Sl(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:pn(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Sl(e).put((function(s){return{bundleId:s.id,createTime:mn(Pe(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Pl(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:Ef(i.bundledQuery),readTime:pn(i.readTime)}})(n)}))}saveNamedQuery(e,t){return Pl(e).put((function(s){return{name:s.name,readTime:mn(Pe(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Sl(r){return ge(r,Oi)}function Pl(r){return ge(r,Mi)}/**
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
 */class Gi{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const n=t.uid||"";return new Gi(e,n)}getOverlay(e,t){return Ar(e).get(Rl(this.userId,t)).next((n=>n?Vo(this.serializer,n):null))}getOverlays(e,t){const n=Qe();return v.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,a)=>{const c=new Ka(t,a);s.push(this.St(e,c))})),v.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((a=>s.add(Ae(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const c=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Ar(e).Z(Qo,c))})),v.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Qe(),i=Ae(t),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ar(e).J(Qo,a).next((c=>{for(const u of c){const h=Vo(this.serializer,u);s.set(h.getKey(),h)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=Qe();let a;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ar(e).ee({index:vd,range:c},((u,h,f)=>{const p=Vo(this.serializer,h);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):f.done()})).next((()=>i))}St(e,t){return Ar(e).put((function(s,i,a){const[c,u,h]=Rl(i,a.mutation.key);return{userId:i,collectionPath:u,documentId:h,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ei(s.yt,a.mutation)}})(this.serializer,this.userId,t))}}function Ar(r){return ge(r,Li)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _T{bt(e){return ge(e,Oa)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const n=t?.value;return n?de.fromUint8Array(n):de.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Xt{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(ie(e.integerValue));else if("doubleValue"in e){const n=ie(e.doubleValue);isNaN(n)?this.Ft(t,13):(this.Ft(t,15),Wr(n)?t.Mt(0):t.Mt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ft(t,20),typeof n=="string"&&(n=ct(n)),t.xt(`${n.seconds||""}`),t.Mt(n.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(ut(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ft(t,45),t.Mt(n.latitude||0),t.Mt(n.longitude||0)}else"mapValue"in e?Od(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Ui(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):M(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const n=e.fields||{};this.Ft(t,55);for(const s of Object.keys(n))this.Ot(s,t),this.Ct(n[s],t)}kt(e,t){const n=e.fields||{};this.Ft(t,53);const s=Hn,i=n[s].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(ie(i)),this.Ot(s,t),this.Ct(n[s],t)}Qt(e,t){const n=e.values||[];this.Ft(t,50);for(const s of n)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),x.fromName(e).path.forEach((n=>{this.Ft(t,60),this.Ut(n,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Xt.Kt=new Xt;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=255;function yT(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function Cl(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=yT(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(e/8)}class IT{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Gt(n.value),n=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Ht()}Yt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Gt(n);else if(n<2048)this.Gt(960|n>>>6),this.Gt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|n>>>12),this.Gt(128|63&n>>>6),this.Gt(128|63&n);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Xt(e){const t=this.en(e),n=Cl(t);this.tn(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),n=Cl(t);this.tn(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(bn),this.sn(255)}_n(){this.an(bn),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===bn?(this.sn(bn),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===bn?(this.an(bn),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class TT{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class ET{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Rr{constructor(){this.cn=new IT,this.ln=new TT(this.cn),this.hn=new ET(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
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
 */class Yt{constructor(e,t,n,s){this.Tn=e,this.In=t,this.En=n,this.dn=s}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new Yt(this.Tn,this.In,this.En,n)}Rn(e,t,n){return{indexId:this.Tn,uid:e,arrayValue:ti(this.En),directionalValue:ti(this.dn),orderedDocumentKey:ti(t),documentKey:n.path.toArray()}}Vn(e,t,n){const s=this.Rn(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function It(r,e){let t=r.Tn-e.Tn;return t!==0?t:(t=Vl(r.En,e.En),t!==0?t:(t=Vl(r.dn,e.dn),t!==0?t:x.comparator(r.In,e.In)))}function Vl(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function ti(r){return Eh()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function Dl(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class kl{constructor(e){this.mn=new Z(((t,n)=>ae.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const n=t;n.isInequality()?this.mn=this.mn.add(n):this.gn.push(n)}}get pn(){return this.mn.size>1}yn(e){if(L(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=Ko(e);if(t!==void 0&&!this.wn(t))return!1;const n=Ht(e);let s=new Set,i=0,a=0;for(;i<n.length&&this.wn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.mn.size>0){const c=this.mn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const u=n[i];if(!this.Sn(c,u)||!this.bn(this.fn[a++],u))return!1}++i}for(;i<n.length;++i){const c=n[i];if(a>=this.fn.length||!this.bn(this.fn[a++],c))return!1}return!0}Dn(){if(this.pn)return null;let e=new Z(ae.comparator);const t=[];for(const n of this.gn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Hs(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Hs(n.field,0))}for(const n of this.fn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Hs(n.field,n.dir==="asc"?0:1)));return new di(di.UNKNOWN_ID,this.collectionId,t,Hr.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function wf(r){if(L(r instanceof W||r instanceof ne,20012),r instanceof W){if(r instanceof $d){const t=r.value.arrayValue?.values?.map((n=>W.create(r.field,"==",n)))||[];return ne.create(t,"or")}return r}const e=r.filters.map((t=>wf(t)));return ne.create(e,r.op)}function wT(r){if(r.getFilters().length===0)return[];const e=ua(wf(r));return L(vf(e),7391),aa(e)||ca(e)?[e]:e.getFilters()}function aa(r){return r instanceof W}function ca(r){return r instanceof ne&&ja(r)}function vf(r){return aa(r)||ca(r)||(function(t){if(t instanceof ne&&Zo(t)){for(const n of t.getFilters())if(!aa(n)&&!ca(n))return!1;return!0}return!1})(r)}function ua(r){if(L(r instanceof W||r instanceof ne,34018),r instanceof W)return r;if(r.filters.length===1)return ua(r.filters[0]);const e=r.filters.map((n=>ua(n)));let t=ne.create(e,r.op);return t=vi(t),vf(t)?t:(L(t instanceof ne,64498),L(Jn(t),40251),L(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Qa(n,s))))}function Qa(r,e){let t;return L(r instanceof W||r instanceof ne,38388),L(e instanceof W||e instanceof ne,25473),t=r instanceof W?e instanceof W?(function(s,i){return ne.create([s,i],"and")})(r,e):Nl(r,e):e instanceof W?Nl(e,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),Jn(s)&&Jn(i))return jd(s,i.getFilters());const a=Zo(s)?s:i,c=Zo(s)?i:s,u=a.filters.map((h=>Qa(h,c)));return ne.create(u,"or")})(r,e),vi(t)}function Nl(r,e){if(Jn(e))return jd(e,r.getFilters());{const t=e.filters.map((n=>Qa(r,n)));return ne.create(t,"or")}}function vi(r){if(L(r instanceof W||r instanceof ne,11850),r instanceof W)return r;const e=r.getFilters();if(e.length===1)return vi(e[0]);if(Ud(r))return r;const t=e.map((s=>vi(s))),n=[];return t.forEach((s=>{s instanceof W?n.push(s):s instanceof ne&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:ne.create(n,r.op)}/**
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
 */class vT{constructor(){this.Cn=new Ja}addToCollectionParentIndex(e,t){return this.Cn.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(Me.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(Me.min())}updateCollectionGroup(e,t,n){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class Ja{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Z(te.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Z(te.comparator)).toArray()}}/**
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
 */const xl="IndexedDbIndexManager",Fs=new Uint8Array(0);class AT{constructor(e,t){this.databaseId=t,this.vn=new Ja,this.Fn=new ht((n=>fn(n)),((n,s)=>ds(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const i={collectionId:n,parent:Ae(s)};return Ol(e).put(i)}return v.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[dd(t),""],!1,!0);return Ol(e).J(s).next((i=>{for(const a of i){if(a.collectionId!==t)break;n.push(We(a.parent))}return n}))}addFieldIndex(e,t){const n=br(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const a=Pn(e);return i.next((c=>{a.put(bl(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=br(e),s=Pn(e),i=Sn(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=br(e),n=Sn(e),s=Pn(e);return t.Z().next((()=>n.Z())).next((()=>s.Z()))}createTargetIndexes(e,t){return v.forEach(this.Mn(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new kl(n).Dn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=Sn(e);let s=!0;const i=new Map;return v.forEach(this.Mn(t),(a=>this.xn(e,a).next((c=>{s&&(s=!!c),i.set(a,c)})))).next((()=>{if(s){let a=K();const c=[];return v.forEach(i,((u,h)=>{C(xl,`Using index ${(function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map((ee=>`${ee.fieldPath}:${ee.kind}`)).join(",")}`})(u)} to execute ${fn(t)}`);const f=(function(U,ee){const X=Ko(ee);if(X===void 0)return null;for(const Q of Ii(U,X.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null})(h,u),p=(function(U,ee){const X=new Map;for(const Q of Ht(ee))for(const T of Ii(U,Q.fieldPath))switch(T.op){case"==":case"in":X.set(Q.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return X.set(Q.fieldPath.canonicalString(),T.value),Array.from(X.values())}return null})(h,u),I=(function(U,ee){const X=[];let Q=!0;for(const T of Ht(ee)){const g=T.kind===0?dl(U,T.fieldPath,U.startAt):fl(U,T.fieldPath,U.startAt);X.push(g.value),Q&&(Q=g.inclusive)}return new Qn(X,Q)})(h,u),S=(function(U,ee){const X=[];let Q=!0;for(const T of Ht(ee)){const g=T.kind===0?fl(U,T.fieldPath,U.endAt):dl(U,T.fieldPath,U.endAt);X.push(g.value),Q&&(Q=g.inclusive)}return new Qn(X,Q)})(h,u),D=this.On(u,h,I),N=this.On(u,h,S),V=this.Nn(u,h,p),$=this.Bn(u.indexId,f,D,I.inclusive,N,S.inclusive,V);return v.forEach($,(B=>n.Y(B,t.limit).next((U=>{U.forEach((ee=>{const X=x.fromSegments(ee.documentKey);a.has(X)||(a=a.add(X),c.push(X))}))}))))})).next((()=>c))}return v.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=wT(ne.create(e.filters,"and")).map((n=>ta(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,n,s,i,a,c){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),h=u/(t!=null?t.length:1),f=[];for(let p=0;p<u;++p){const I=t?this.Ln(t[p/h]):Fs,S=this.kn(e,I,n[p%h],s),D=this.qn(e,I,i[p%h],a),N=c.map((V=>this.kn(e,I,V,!0)));f.push(...this.createRange(S,D,N))}return f}kn(e,t,n,s){const i=new Yt(e,x.empty(),t,n);return s?i:i.An()}qn(e,t,n,s){const i=new Yt(e,x.empty(),t,n);return s?i.An():i}xn(e,t){const n=new kl(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let a=null;for(const c of i)n.yn(c)&&(!a||c.fields.length>a.fields.length)&&(a=c);return a}))}getIndexType(e,t){let n=2;const s=this.Mn(t);return v.forEach(s,(i=>this.xn(e,i).next((a=>{a?n!==0&&a.fields.length<(function(u){let h=new Z(ae.comparator),f=!1;for(const p of u.filters)for(const I of p.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:h=h.add(I.field));for(const p of u.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(t)&&s.length>1&&n===2?1:n))}Qn(e,t){const n=new Rr;for(const s of Ht(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const a=n.Pn(s.kind);Xt.Kt.Dt(i,a)}return n.un()}Ln(e){const t=new Rr;return Xt.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const n=new Rr;return Xt.Kt.Dt(Ba(this.databaseId,t),n.Pn((function(i){const a=Ht(i);return a.length===0?0:a[a.length-1].kind})(e))),n.un()}Nn(e,t,n){if(n===null)return[];let s=[];s.push(new Rr);let i=0;for(const a of Ht(e)){const c=n[i++];for(const u of s)if(this.Un(t,a.fieldPath)&&es(c))s=this.Kn(s,a,c);else{const h=u.Pn(a.kind);Xt.Kt.Dt(c,h)}}return this.Wn(s)}On(e,t,n){return this.Nn(e,t,n.position)}Wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].un();return t}Kn(e,t,n){const s=[...e],i=[];for(const a of n.arrayValue.values||[])for(const c of s){const u=new Rr;u.seed(c.un()),Xt.Kt.Dt(a,u.Pn(t.kind)),i.push(u)}return i}Un(e,t){return!!e.filters.find((n=>n instanceof W&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=br(e),s=Pn(e);return(t?n.J(Wo,IDBKeyRange.bound(t,t)):n.J()).next((i=>{const a=[];return v.forEach(i,(c=>s.get([c.indexId,this.uid]).next((u=>{a.push((function(f,p){const I=p?new Hr(p.sequenceNumber,new Me(pn(p.readTime),new x(We(p.documentKey)),p.largestBatchId)):Hr.empty(),S=f.fields.map((([D,N])=>new Hs(ae.fromServerFormat(D),N)));return new di(f.indexId,f.collectionGroup,S,I)})(c,u))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=br(e),i=Pn(e);return this.Gn(e).next((a=>s.J(Wo,IDBKeyRange.bound(t,t)).next((c=>v.forEach(c,(u=>i.put(bl(u.indexId,this.uid,a,n))))))))}updateIndexEntries(e,t){const n=new Map;return v.forEach(t,((s,i)=>{const a=n.get(s.collectionGroup);return(a?v.resolve(a):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(n.set(s.collectionGroup,c),v.forEach(c,(u=>this.zn(e,s,u).next((h=>{const f=this.jn(i,u);return h.isEqual(f)?v.resolve():this.Jn(e,i,u,h,f)})))))))}))}Hn(e,t,n,s){return Sn(e).put(s.Rn(this.uid,this.$n(n,t.key),t.key))}Yn(e,t,n,s){return Sn(e).delete(s.Vn(this.uid,this.$n(n,t.key),t.key))}zn(e,t,n){const s=Sn(e);let i=new Z(It);return s.ee({index:wd,range:IDBKeyRange.only([n.indexId,this.uid,ti(this.$n(n,t))])},((a,c)=>{i=i.add(new Yt(n.indexId,t,Dl(c.arrayValue),Dl(c.directionalValue)))})).next((()=>i))}jn(e,t){let n=new Z(It);const s=this.Qn(t,e);if(s==null)return n;const i=Ko(t);if(i!=null){const a=e.data.field(i.fieldPath);if(es(a))for(const c of a.arrayValue.values||[])n=n.add(new Yt(t.indexId,e.key,this.Ln(c),s))}else n=n.add(new Yt(t.indexId,e.key,Fs,s));return n}Jn(e,t,n,s,i){C(xl,"Updating index entries for document '%s'",t.key);const a=[];return(function(u,h,f,p,I){const S=u.getIterator(),D=h.getIterator();let N=Rn(S),V=Rn(D);for(;N||V;){let $=!1,B=!1;if(N&&V){const U=f(N,V);U<0?B=!0:U>0&&($=!0)}else N!=null?B=!0:$=!0;$?(p(V),V=Rn(D)):B?(I(N),N=Rn(S)):(N=Rn(S),V=Rn(D))}})(s,i,It,(c=>{a.push(this.Hn(e,t,n,c))}),(c=>{a.push(this.Yn(e,t,n,c))})),v.waitFor(a)}Gn(e){let t=1;return Pn(e).ee({index:Ed,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((a,c)=>It(a,c))).filter(((a,c,u)=>!c||It(a,u[c-1])!==0));const s=[];s.push(e);for(const a of n){const c=It(a,e),u=It(a,t);if(c===0)s[0]=e.An();else if(c>0&&u<0)s.push(a),s.push(a.An());else if(u>0)break}s.push(t);const i=[];for(let a=0;a<s.length;a+=2){if(this.Zn(s[a],s[a+1]))return[];const c=s[a].Vn(this.uid,Fs,x.empty()),u=s[a+1].Vn(this.uid,Fs,x.empty());i.push(IDBKeyRange.bound(c,u))}return i}Zn(e,t){return It(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ml)}getMinOffset(e,t){return v.mapArray(this.Mn(t),(n=>this.xn(e,n).next((s=>s||M(44426))))).next(Ml)}}function Ol(r){return ge(r,Xr)}function Sn(r){return ge(r,Ur)}function br(r){return ge(r,xa)}function Pn(r){return ge(r,Fr)}function Ml(r){L(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Da(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Me(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ll={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Af=41943040;class ve{static withCacheSize(e){return new ve(e,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Rf(r,e,t){const n=r.store(je),s=r.store(zn),i=[],a=IDBKeyRange.only(t.batchId);let c=0;const u=n.ee({range:a},((f,p,I)=>(c++,I.delete())));i.push(u.next((()=>{L(c===1,47070,{batchId:t.batchId})})));const h=[];for(const f of t.mutations){const p=yd(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return v.waitFor(i).next((()=>h))}function Ai(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw M(14731);e=r.noDocument}return JSON.stringify(e).length}/**
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(Af,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);class Ki{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Xn={}}static wt(e,t,n,s){L(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new Ki(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Tt(e).ee({index:en,range:n},((s,i,a)=>{t=!1,a.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=xn(e),a=Tt(e);return a.add({}).next((c=>{L(typeof c=="number",49019);const u=new $a(c,t,n,s),h=(function(S,D,N){const V=N.baseMutations.map((B=>Ei(S.yt,B))),$=N.mutations.map((B=>Ei(S.yt,B)));return{userId:D,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:V,mutations:$}})(this.serializer,this.userId,u),f=[];let p=new Z(((I,S)=>q(I.canonicalString(),S.canonicalString())));for(const I of s){const S=yd(this.userId,I.key.path,c);p=p.add(I.key.path.popLast()),f.push(a.put(h)),f.push(i.put(S,Xy))}return p.forEach((I=>{f.push(this.indexManager.addToCollectionParentIndex(e,I))})),e.addOnCommittedListener((()=>{this.Xn[c]=u.keys()})),v.waitFor(f).next((()=>u))}))}lookupMutationBatch(e,t){return Tt(e).get(t).next((n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Jt(this.serializer,n)):null))}er(e,t){return this.Xn[t]?v.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Xn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Tt(e).ee({index:en,range:s},((a,c,u)=>{c.userId===this.userId&&(L(c.batchId>=n,47524,{tr:n}),i=Jt(this.serializer,c)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=nn;return Tt(e).ee({index:en,range:t,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,nn],[this.userId,Number.POSITIVE_INFINITY]);return Tt(e).J(en,t).next((n=>n.map((s=>Jt(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ws(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return xn(e).ee({range:s},((a,c,u)=>{const[h,f,p]=a,I=We(f);if(h===this.userId&&t.path.isEqual(I))return Tt(e).get(p).next((S=>{if(!S)throw M(61480,{nr:a,batchId:p});L(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:p}),i.push(Jt(this.serializer,S))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Z(q);const s=[];return t.forEach((i=>{const a=Ws(this.userId,i.path),c=IDBKeyRange.lowerBound(a),u=xn(e).ee({range:c},((h,f,p)=>{const[I,S,D]=h,N=We(S);I===this.userId&&i.path.isEqual(N)?n=n.add(D):p.done()}));s.push(u)})),v.waitFor(s).next((()=>this.rr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Ws(this.userId,n),a=IDBKeyRange.lowerBound(i);let c=new Z(q);return xn(e).ee({range:a},((u,h,f)=>{const[p,I,S]=u,D=We(I);p===this.userId&&n.isPrefixOf(D)?D.length===s&&(c=c.add(S)):f.done()})).next((()=>this.rr(e,c)))}rr(e,t){const n=[],s=[];return t.forEach((i=>{s.push(Tt(e).get(i).next((a=>{if(a===null)throw M(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Jt(this.serializer,a))})))})),v.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return Rf(e.le,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),v.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return v.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return xn(e).ee({range:n},((i,a,c)=>{if(i[0]===this.userId){const u=We(i[1]);s.push(u)}else c.done()})).next((()=>{L(s.length===0,56720,{sr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return bf(e,this.userId,t)}_r(e){return Sf(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:nn,lastStreamToken:""}))}}function bf(r,e,t){const n=Ws(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return xn(r).ee({range:i,X:!0},((c,u,h)=>{const[f,p,I]=c;f===e&&p===s&&(a=!0),h.done()})).next((()=>a))}function Tt(r){return ge(r,je)}function xn(r){return ge(r,zn)}function Sf(r){return ge(r,Qr)}/**
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
 */class gn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new gn(0)}static cr(){return new gn(-1)}}/**
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
 */class RT{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const n=new gn(t.highestTargetId);return t.highestTargetId=n.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>F.fromTimestamp(new Y(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.lr(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.hr(e,s))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((n=>(n.targetCount+=1,this.Tr(t,n),this.hr(e,n))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Cn(e).delete(t.targetId))).next((()=>this.lr(e))).next((n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.hr(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Cn(e).ee(((a,c)=>{const u=kr(c);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>v.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Cn(e).ee(((n,s)=>{const i=kr(s);t(i)}))}lr(e){return Fl(e).get(pi).next((t=>(L(t!==null,2888),t)))}hr(e,t){return Fl(e).put(pi,t)}Pr(e,t){return Cn(e).put(Tf(this.serializer,t))}Tr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const n=fn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Cn(e).ee({range:s,index:Td},((a,c,u)=>{const h=kr(c);ds(t,h.target)&&(i=h,u.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=bt(e);return t.forEach((a=>{const c=Ae(a.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,a))})),v.waitFor(s)}removeMatchingKeys(e,t,n){const s=bt(e);return v.forEach(t,(i=>{const a=Ae(i.path);return v.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=bt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=bt(e);let i=K();return s.ee({range:n,X:!0},((a,c,u)=>{const h=We(a[1]),f=new x(h);i=i.add(f)})).next((()=>i))}containsKey(e,t){const n=Ae(t.path),s=IDBKeyRange.bound([n],[dd(n)],!1,!0);let i=0;return bt(e).ee({index:Na,X:!0,range:s},(([a,c],u,h)=>{a!==0&&(i++,h.done())})).next((()=>i>0))}At(e,t){return Cn(e).get(t).next((n=>n?kr(n):null))}}function Cn(r){return ge(r,$n)}function Fl(r){return ge(r,rn)}function bt(r){return ge(r,Gn)}/**
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
 */const Ul="LruGarbageCollector",bT=1048576;function Bl([r,e],[t,n]){const s=q(r,t);return s===0?q(e,n):s}class ST{constructor(e){this.Ir=e,this.buffer=new Z(Bl),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Bl(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Pf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){C(Ul,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Lt(t)?C(Ul,"Ignoring IndexedDB error during garbage collection: ",t):await yn(t)}await this.Vr(3e5)}))}}class PT{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return v.resolve(Fe.ce);const n=new ST(t);return this.mr.forEachTarget(e,(s=>n.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>n.Ar(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Ll)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ll):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(n=p,c=Date.now(),this.removeTargets(e,n,t)))).next((p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((p=>(h=Date.now(),Vn()<=H.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Cf(r,e){return new PT(r,e)}/**
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
 */class CT{constructor(e,t){this.db=e,this.garbageCollector=Cf(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((n,s)=>t(s)))}addReference(e,t,n){return Us(e,n)}removeReference(e,t,n){return Us(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Us(e,t)}br(e,t){return(function(s,i){let a=!1;return Sf(s).te((c=>bf(s,c,i).next((u=>(u&&(a=!0),v.resolve(!u)))))).next((()=>a))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Sr(e,((a,c)=>{if(c<=t){const u=this.br(e,a).next((h=>{if(!h)return i++,n.getEntry(e,a).next((()=>(n.removeEntry(a,F.min()),bt(e).delete((function(p){return[0,Ae(p.path)]})(a)))))}));s.push(u)}})).next((()=>v.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Us(e,t)}Sr(e,t){const n=bt(e);let s,i=Fe.ce;return n.ee({index:Na},(([a,c],{path:u,sequenceNumber:h})=>{a===0?(i!==Fe.ce&&t(new x(We(s)),i),i=h,s=u):i=Fe.ce})).next((()=>{i!==Fe.ce&&t(new x(We(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Us(r,e){return bt(r).put((function(n,s){return{targetId:0,path:Ae(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}/**
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
 */class Vf{constructor(){this.changes=new ht((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?v.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class VT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Gt(e).put(n)}removeEntry(e,t,n){return Gt(e).delete((function(i,a){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],wi(a),c[c.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Dr(e,n))))}getEntry(e,t){let n=ue.newInvalidDocument(t);return Gt(e).ee({index:Qs,range:IDBKeyRange.only(Sr(t))},((s,i)=>{n=this.Cr(t,i)})).next((()=>n))}vr(e,t){let n={size:0,document:ue.newInvalidDocument(t)};return Gt(e).ee({index:Qs,range:IDBKeyRange.only(Sr(t))},((s,i)=>{n={document:this.Cr(t,i),size:Ai(i)}})).next((()=>n))}getEntries(e,t){let n=Ne();return this.Fr(e,t,((s,i)=>{const a=this.Cr(s,i);n=n.insert(s,a)})).next((()=>n))}Mr(e,t){let n=Ne(),s=new oe(x.comparator);return this.Fr(e,t,((i,a)=>{const c=this.Cr(i,a);n=n.insert(i,c),s=s.insert(i,Ai(a))})).next((()=>({documents:n,Or:s})))}Fr(e,t,n){if(t.isEmpty())return v.resolve();let s=new Z(zl);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(Sr(s.first()),Sr(s.last())),a=s.getIterator();let c=a.getNext();return Gt(e).ee({index:Qs,range:i},((u,h,f)=>{const p=x.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&zl(c,p)<0;)n(c,null),c=a.getNext();c&&c.isEqual(p)&&(n(c,h),c=a.hasNext()?a.getNext():null),c?f.j(Sr(c)):f.done()})).next((()=>{for(;c;)n(c,null),c=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const a=t.path,c=[a.popLast().toArray(),a.lastSegment(),wi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gt(e).J(IDBKeyRange.bound(c,u,!0)).next((h=>{i?.incrementDocumentReadCount(h.length);let f=Ne();for(const p of h){const I=this.Cr(x.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);I.isFoundDocument()&&(ms(t,I)||s.has(I.key))&&(f=f.insert(I.key,I))}return f}))}getAllFromCollectionGroup(e,t,n,s){let i=Ne();const a=ql(t,n),c=ql(t,Me.max());return Gt(e).ee({index:Id,range:IDBKeyRange.bound(a,c,!0)},((u,h,f)=>{const p=this.Cr(x.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(e){return new DT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return jl(e).get(Ho).next((t=>(L(!!t,20021),t)))}Dr(e,t){return jl(e).put(Ho,t)}Cr(e,t){if(t){const n=pT(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(F.min())))return n}return ue.newInvalidDocument(e)}}function Df(r){return new VT(r)}class DT extends Vf{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new ht((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new Z(((i,a)=>q(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const c=this.Br.get(i);if(t.push(this.Nr.removeEntry(e,i,c.readTime)),a.isValidDocument()){const u=Al(this.Nr.serializer,a);s=s.add(i.path.popLast());const h=Ai(u);n+=h-c.size,t.push(this.Nr.addEntry(e,i,u))}else if(n-=c.size,this.trackRemovals){const u=Al(this.Nr.serializer,a.convertToNoDocument(F.min()));t.push(this.Nr.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Nr.updateMetadata(e,n)),v.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((n=>(this.Br.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:n,Or:s})=>(s.forEach(((i,a)=>{this.Br.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function jl(r){return ge(r,Jr)}function Gt(r){return ge(r,mi)}function Sr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ql(r,e){const t=e.documentKey.path.toArray();return[r,wi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function zl(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=q(t[i],n[i]),s)return s;return s=q(t.length,n.length),s||(s=q(t[t.length-2],n[n.length-2]),s||q(t[t.length-1],n[n.length-1]))}/**
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
 */class kT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&zr(n.mutation,s,Ue.empty(),Y.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,K()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=K()){const s=Qe();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let a=Vr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const n=Qe();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,K())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,n,s){let i=Ne();const a=qr(),c=(function(){return qr()})();return t.forEach(((u,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ft)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),zr(f.mutation,h,f.mutation.getFieldMask(),Y.now())):a.set(h.key,Ue.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>c.set(h,new kT(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const n=qr();let s=new oe(((a,c)=>a-c)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=n.get(u)||Ue.empty();f=c.applyToLocalView(h,f),n.set(u,f);const p=(s.get(c.batchId)||K()).add(u);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=Qd();f.forEach((I=>{if(!i.has(I)){const S=tf(t.get(I),n.get(I));S!==null&&p.set(I,S),i=i.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return v.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return(function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):v.resolve(Qe());let c=Kr,u=i;return a.next((h=>v.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?v.resolve():this.remoteDocumentCache.getEntry(e,f).next((I=>{u=u.insert(f,I)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,K()))).next((f=>({batchId:c,changes:Wd(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((n=>{let s=Vr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let a=Vr();return this.indexManager.getCollectionParents(e,i).next((c=>v.forEach(c,(u=>{const h=(function(p,I){return new Bi(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next((f=>{f.forEach(((p,I)=>{a=a.insert(p,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((a=>{i.forEach(((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ue.newInvalidDocument(f)))}));let c=Vr();return a.forEach(((u,h)=>{const f=i.get(u);f!==void 0&&zr(f.mutation,h,Ue.empty(),Y.now()),ms(t,h)&&(c=c.insert(u,h))})),c}))}}/**
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
 */class NT{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return v.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Pe(s.createTime)}})(t)),v.resolve()}getNamedQuery(e,t){return v.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:Ef(s.bundledQuery),readTime:Pe(s.readTime)}})(t)),v.resolve()}}/**
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
 */class xT{constructor(){this.overlays=new oe(x.comparator),this.qr=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Qe();return v.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.St(e,t,i)})),v.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.qr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(n)),v.resolve()}getOverlaysForCollection(e,t,n){const s=Qe(),i=t.length+1,a=new x(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return v.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new oe(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=Qe(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Qe(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return v.resolve(c)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(n.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Ka(t,n));let i=this.qr.get(t);i===void 0&&(i=K(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class OT{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return v.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,v.resolve()}}/**
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
 */class Xa{constructor(){this.Qr=new Z(ye.$r),this.Ur=new Z(ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new ye(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Gr(new ye(e,t))}zr(e,t){e.forEach((n=>this.removeReference(n,t)))}jr(e){const t=new x(new te([])),n=new ye(t,e),s=new ye(t,e+1),i=[];return this.Ur.forEachInRange([n,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new x(new te([])),n=new ye(t,e),s=new ye(t,e+1);let i=K();return this.Ur.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ye(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ye{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return x.comparator(e.key,t.key)||q(e.Yr,t.Yr)}static Kr(e,t){return q(e.Yr,t.Yr)||x.comparator(e.key,t.key)}}/**
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
 */class MT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Z(ye.$r)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $a(i,t,n,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return v.resolve(a)}lookupMutationBatch(e,t){return v.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.ei(n),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?nn:this.tr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ye(t,0),s=new ye(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Z(q);return t.forEach((s=>{const i=new ye(s,0),a=new ye(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{n=n.add(c.Yr)}))})),v.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;x.isDocumentKey(i)||(i=i.child(""));const a=new ye(new x(i),0);let c=new Z(q);return this.Zr.forEachWhile((u=>{const h=u.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)}),a),v.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((n=>{const s=this.Xr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){L(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return v.forEach(t.mutations,(s=>{const i=new ye(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=n}))}ir(e){}containsKey(e,t){const n=new ye(t,0),s=this.Zr.firstAfterOrEqual(n);return v.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class LT{constructor(e){this.ri=e,this.docs=(function(){return new oe(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return v.resolve(n?n.document.mutableCopy():ue.newInvalidDocument(t))}getEntries(e,t){let n=Ne();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ue.newInvalidDocument(s))})),v.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ne();const a=t.path,c=new x(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Da(md(f),n)<=0||(s.has(f.key)||ms(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(e,t,n,s){M(9500)}ii(e,t){return v.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new FT(this)}getSize(e){return v.resolve(this.size)}}class FT extends Vf{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(n)})),v.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class UT{constructor(e){this.persistence=e,this.si=new ht((t=>fn(t)),ds),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.oi=0,this._i=new Xa,this.targetCount=0,this.ai=gn.ur()}forEachTarget(e,t){return this.si.forEach(((n,s)=>t(s))),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),v.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new gn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.Pr(t),v.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),v.waitFor(i).next((()=>s))}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return v.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),v.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),v.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),v.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return v.resolve(n)}containsKey(e,t){return v.resolve(this._i.containsKey(t))}}/**
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
 */class Ya{constructor(e,t){this.ui={},this.overlays={},this.ci=new Fe(0),this.li=!1,this.li=!0,this.hi=new OT,this.referenceDelegate=e(this),this.Pi=new UT(this),this.indexManager=new vT,this.remoteDocumentCache=(function(s){return new LT(s)})((n=>this.referenceDelegate.Ti(n))),this.serializer=new If(t),this.Ii=new NT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new MT(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){C("MemoryPersistence","Starting transaction:",e);const s=new BT(this.ci.next());return this.referenceDelegate.Ei(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return v.or(Object.values(this.ui).map((n=>()=>n.containsKey(e,t))))}}class BT extends gd{constructor(e){super(),this.currentSequenceNumber=e}}class Hi{constructor(e){this.persistence=e,this.Ri=new Xa,this.Vi=null}static mi(e){return new Hi(e)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),v.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),v.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.fi,(n=>{const s=x.fromPath(n);return this.gi(e,s).next((i=>{i||t.removeEntry(s,F.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return v.or([()=>v.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Ri{constructor(e,t){this.persistence=e,this.pi=new ht((n=>Ae(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Cf(this,t)}static mi(e,t){return new Ri(e,t)}Ei(){}di(e){return v.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}wr(e){let t=0;return this.pr(e,(n=>{t++})).next((()=>t))}pr(e,t){return v.forEach(this.pi,((n,s)=>this.br(e,n,s).next((i=>i?v.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((c=>{c||(n++,i.removeEntry(a,F.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),v.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),v.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),v.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),v.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Xs(e.data.value)),t}br(e,t,n){return v.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return v.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class jT{constructor(e){this.serializer=e}k(e,t,n,s){const i=new Ni("createOrUpgrade",t);n<1&&s>=1&&((function(u){u.createObjectStore(hs)})(e),(function(u){u.createObjectStore(Qr,{keyPath:Jy}),u.createObjectStore(je,{keyPath:el,autoIncrement:!0}).createIndex(en,tl,{unique:!0}),u.createObjectStore(zn)})(e),$l(e),(function(u){u.createObjectStore(Wt)})(e));let a=v.resolve();return n<3&&s>=3&&(n!==0&&((function(u){u.deleteObjectStore(Gn),u.deleteObjectStore($n),u.deleteObjectStore(rn)})(e),$l(e)),a=a.next((()=>(function(u){const h=u.store(rn),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return h.put(pi,f)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(u,h){return h.store(je).J().next((p=>{u.deleteObjectStore(je),u.createObjectStore(je,{keyPath:el,autoIncrement:!0}).createIndex(en,tl,{unique:!0});const I=h.store(je),S=p.map((D=>I.put(D)));return v.waitFor(S)}))})(e,i)))),a=a.next((()=>{(function(u){u.createObjectStore(Kn,{keyPath:iI})})(e)}))),n<5&&s>=5&&(a=a.next((()=>this.yi(i)))),n<6&&s>=6&&(a=a.next((()=>((function(u){u.createObjectStore(Jr)})(e),this.wi(i))))),n<7&&s>=7&&(a=a.next((()=>this.Si(i)))),n<8&&s>=8&&(a=a.next((()=>this.bi(e,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(a=a.next((()=>this.Di(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(u){u.createObjectStore(Oi,{keyPath:oI})})(e),(function(u){u.createObjectStore(Mi,{keyPath:aI})})(e)}))),n<12&&s>=12&&(a=a.next((()=>{(function(u){const h=u.createObjectStore(Li,{keyPath:mI});h.createIndex(Qo,pI,{unique:!1}),h.createIndex(vd,gI,{unique:!1})})(e)}))),n<13&&s>=13&&(a=a.next((()=>(function(u){const h=u.createObjectStore(mi,{keyPath:Yy});h.createIndex(Qs,Zy),h.createIndex(Id,eI)})(e))).next((()=>this.Ci(e,i))).next((()=>e.deleteObjectStore(Wt)))),n<14&&s>=14&&(a=a.next((()=>this.Fi(e,i)))),n<15&&s>=15&&(a=a.next((()=>(function(u){u.createObjectStore(xa,{keyPath:cI,autoIncrement:!0}).createIndex(Wo,uI,{unique:!1}),u.createObjectStore(Fr,{keyPath:lI}).createIndex(Ed,hI,{unique:!1}),u.createObjectStore(Ur,{keyPath:dI}).createIndex(wd,fI,{unique:!1})})(e)))),n<16&&s>=16&&(a=a.next((()=>{t.objectStore(Fr).clear()})).next((()=>{t.objectStore(Ur).clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(u){u.createObjectStore(Oa,{keyPath:_I})})(e)}))),n<18&&s>=18&&Eh()&&(a=a.next((()=>{t.objectStore(Fr).clear()})).next((()=>{t.objectStore(Ur).clear()}))),a}wi(e){let t=0;return e.store(Wt).ee(((n,s)=>{t+=Ai(s)})).next((()=>{const n={byteSize:t};return e.store(Jr).put(Ho,n)}))}yi(e){const t=e.store(Qr),n=e.store(je);return t.J().next((s=>v.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,nn],[i.userId,i.lastAcknowledgedBatchId]);return n.J(en,a).next((c=>v.forEach(c,(u=>{L(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=Jt(this.serializer,u);return Rf(e,i.userId,h).next((()=>{}))}))))}))))}Si(e){const t=e.store(Gn),n=e.store(Wt);return e.store(rn).get(pi).next((s=>{const i=[];return n.ee(((a,c)=>{const u=new te(a),h=(function(p){return[0,Ae(p)]})(u);i.push(t.get(h).next((f=>f?v.resolve():(p=>t.put({targetId:0,path:Ae(p),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>v.waitFor(i)))}))}bi(e,t){e.createObjectStore(Xr,{keyPath:sI});const n=t.store(Xr),s=new Ja,i=a=>{if(s.add(a)){const c=a.lastSegment(),u=a.popLast();return n.put({collectionId:c,parent:Ae(u)})}};return t.store(Wt).ee({X:!0},((a,c)=>{const u=new te(a);return i(u.popLast())})).next((()=>t.store(zn).ee({X:!0},(([a,c,u],h)=>{const f=We(c);return i(f.popLast())}))))}Di(e){const t=e.store($n);return t.ee(((n,s)=>{const i=kr(s),a=Tf(this.serializer,i);return t.put(a)}))}Ci(e,t){const n=t.store(Wt),s=[];return n.ee(((i,a)=>{const c=t.store(mi),u=(function(p){return p.document?new x(te.fromString(p.document.name).popFirst(5)):p.noDocument?x.fromSegments(p.noDocument.path):p.unknownDocument?x.fromSegments(p.unknownDocument.path):M(36783)})(a).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(c.put(h))})).next((()=>v.waitFor(s)))}Fi(e,t){const n=t.store(je),s=Df(this.serializer),i=new Ya(Hi.mi,this.serializer.yt);return n.J().next((a=>{const c=new Map;return a.forEach((u=>{let h=c.get(u.userId)??K();Jt(this.serializer,u).keys().forEach((f=>h=h.add(f))),c.set(u.userId,h)})),v.forEach(c,((u,h)=>{const f=new Ie(h),p=Gi.wt(this.serializer,f),I=i.getIndexManager(f),S=Ki.wt(f,this.serializer,I,i.referenceDelegate);return new kf(s,S,p,I).recalculateAndSaveOverlaysForDocumentKeys(new Jo(t,Fe.ce),u).next()}))}))}}function $l(r){r.createObjectStore(Gn,{keyPath:nI}).createIndex(Na,rI,{unique:!0}),r.createObjectStore($n,{keyPath:"targetId"}).createIndex(Td,tI,{unique:!0}),r.createObjectStore(rn)}const Et="IndexedDbPersistence",Do=18e5,ko=5e3,No="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",qT="main";class Za{constructor(e,t,n,s,i,a,c,u,h,f,p=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Mi=i,this.window=a,this.document=c,this.xi=h,this.Oi=f,this.Ni=p,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=I=>Promise.resolve(),!Za.v())throw new O(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new CT(this,s),this.$i=t+qT,this.serializer=new If(u),this.Ui=new kt(this.$i,this.Ni,new jT(this.serializer)),this.hi=new _T,this.Pi=new RT(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Df(this.serializer),this.Ii=new gT,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,f===!1&&Se(Et,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,No);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new Fe(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((async()=>{this.started&&await this.Wi()})))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Bs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(Lt(e))return C(Et,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C(Et,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return Pr(e).get(An).next((t=>v.resolve(this.es(t))))}ts(e){return Bs(e).delete(this.clientId)}async ns(){if(this.isPrimary&&!this.rs(this.qi,Do)){this.qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=ge(t,Kn);return n.J().next((s=>{const i=this.ss(s,Do),a=s.filter((c=>i.indexOf(c)===-1));return v.forEach(a,(c=>n.delete(c.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?v.resolve(!0):Pr(e).get(An).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,ko)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,No);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bs(e).J().next((n=>this.ss(n,ko).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||a&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&C(Et,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),await this.Ui.runTransaction("shutdown","readwrite",[hs,Kn],(e=>{const t=new Jo(e,Fe.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()}ss(e,t){return e.filter((n=>this.rs(n.updateTimeMs,t)&&!this.us(n.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>Bs(e).J().next((t=>this.ss(t,Do).map((n=>n.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return Ki.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new AT(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Gi.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,n){C(Et,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?TI:u===17?Sd:u===16?II:u===15?Ma:u===14?bd:u===13?Rd:u===12?yI:u===11?Ad:void M(60245)})(this.Ni);let a;return this.Ui.runTransaction(e,s,i,(c=>(a=new Jo(c,this.ci?this.ci.next():Fe.ce),t==="readwrite-primary"?this.Hi(a).next((u=>!!u||this.Yi(a))).next((u=>{if(!u)throw Se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new O(P.FAILED_PRECONDITION,pd);return n(a)})).next((u=>this.Xi(a).next((()=>u)))):this.Is(a).next((()=>n(a)))))).then((c=>(a.raiseOnCommittedEvent(),c)))}Is(e){return Pr(e).get(An).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,ko)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(P.FAILED_PRECONDITION,No)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Pr(e).put(An,t)}static v(){return kt.v()}Zi(e){const t=Pr(e);return t.get(An).next((n=>this.es(n)?(C(Et,"Releasing primary lease."),t.delete(An)):v.resolve()))}rs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Se(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){typeof this.window?.addEventListener=="function"&&(this.Bi=()=>{this.cs();const e=/(?:Version|Mobile)\/1[456]/;Th()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){try{const t=this.Ki?.getItem(this._s(e))!==null;return C(Et,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return Se(Et,"Failed to get zombied client id.",t),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){Se("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch{}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Pr(r){return ge(r,hs)}function Bs(r){return ge(r,Kn)}function zT(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class ec{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=s}static As(e,t){let n=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ec(e,t.fromCache,n,s)}}/**
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
 */class $T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Nf{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Th()?8:_d(pe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new $T;return this.Ss(e,t,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>i.result))}bs(e,t,n,s){return n.documentReadCount<this.fs?(Vn()<=H.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),v.resolve()):(Vn()<=H.DEBUG&&C("QueryEngine","Query:",Dn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.gs*s?(Vn()<=H.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):v.resolve())}ys(e,t){if(ml(t))return v.resolve(null);let n=Be(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=na(t,null,"F"),n=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const a=K(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,n).next((u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,na(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ws(e,t,n,s){return ml(t)||s.isEqual(F.min())?v.resolve(null):this.ps.getDocuments(e,n).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,n,s)?v.resolve(null):(Vn()<=H.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Dn(t)),this.vs(e,a,t,zy(s,Kr)).next((c=>c)))}))}Ds(e,t){let n=new Z(Kd(e));return t.forEach(((s,i)=>{ms(e,i)&&(n=n.add(i))})),n}Cs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,n){return Vn()<=H.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.ps.getDocumentsMatchingQuery(e,t,Me.min(),n)}vs(e,t,n,s){return this.ps.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const tc="LocalStore",GT=3e8;class KT{constructor(e,t,n,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new oe(q),this.xs=new ht((i=>fn(i)),ds),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kf(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function xf(r,e,t,n){return new KT(r,e,t,n)}async function Of(r,e){const t=z(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],c=[];let u=K();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(n,u).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function HT(r,e){const t=z(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,f){const p=h.batch,I=p.keys();let S=v.resolve();return I.forEach((D=>{S=S.next((()=>f.getEntry(u,D))).next((N=>{const V=h.docVersions.get(D);L(V!==null,48541),N.version.compareTo(V)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(u,p)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let u=K();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function Mf(r){const e=z(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function WT(r,e){const t=z(r),n=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const I=s.get(p);if(!I)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(i,f.addedDocuments,p))));let S=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(de.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,n)),s=s.insert(p,S),(function(N,V,$){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=GT?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(I,S,f)&&c.push(t.Pi.updateTargetData(i,S))}));let u=Ne(),h=K();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(QT(i,a,e.documentUpdates).next((f=>{u=f.ks,h=f.qs}))),!n.isEqual(F.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next((p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n)));c.push(f)}return v.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.Ms=s,i)))}function QT(r,e,t){let n=K(),s=K();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let a=Ne();return t.forEach(((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(F.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):C(tc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function JT(r,e){const t=z(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=nn),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function XT(r,e){const t=z(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.Pi.getTargetData(n,e).next((i=>i?(s=i,v.resolve(s)):t.Pi.allocateTargetId(n).next((a=>(s=new rt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Ms.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n}))}async function la(r,e,t){const n=z(r),s=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Lt(a))throw a;C(tc,`Failed to update sequence numbers for target ${e}: ${a}`)}n.Ms=n.Ms.remove(e),n.xs.delete(s.target)}function Gl(r,e,t){const n=z(r);let s=F.min(),i=K();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,f){const p=z(u),I=p.xs.get(f);return I!==void 0?v.resolve(p.Ms.get(I)):p.Pi.getTargetData(h,f)})(n,a,Be(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>n.Fs.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?i:K()))).next((c=>(YT(n,MI(e),c),{documents:c,Qs:i})))))}function YT(r,e,t){let n=r.Os.get(e)||F.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Os.set(e,n)}class Kl{constructor(){this.activeTargetIds=qI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lf{constructor(){this.Mo=new Kl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Kl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZT{Oo(e){}shutdown(){}}/**
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
 */const Hl="ConnectivityMonitor";class Wl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){C(Hl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){C(Hl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let js=null;function ha(){return js===null?js=(function(){return 268435456+Math.round(2147483648*Math.random())})():js++,"0x"+js.toString(16)}/**
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
 */const xo="RestConnection",eE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${s}`,this.Wo=this.databaseId.database===gi?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Go(e,t,n,s,i){const a=ha(),c=this.zo(e,t.toUriEncodedString());C(xo,`Sending RPC '${e}' ${a}:`,c,n);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),f=nr(h);return this.Jo(e,c,u,n,f).then((p=>(C(xo,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw hn(xo,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",n),p}))}Ho(e,t,n,s,i,a){return this.Go(e,t,n,s,i)}jo(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ir})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const n=eE[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
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
 */class nE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const we="WebChannelConnection";class rE extends tE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,s,i){const a=ha();return new Promise(((c,u)=>{const h=new id;h.setWithCredentials(!0),h.listenOnce(od.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ks.NO_ERROR:const p=h.getResponseJson();C(we,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Ks.TIMEOUT:C(we,`RPC '${e}' ${a} timed out`),u(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ks.HTTP_ERROR:const I=h.getStatus();if(C(we,`RPC '${e}' ${a} failed with status:`,I,"response text:",h.getResponseText()),I>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S?.error;if(D&&D.status&&D.message){const N=(function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN})(D.status);u(new O(N,D.message))}else u(new O(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new O(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{C(we,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);C(we,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,n,15)}))}T_(e,t,n){const s=ha(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ud(),c=cd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const f=i.join("");C(we,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=a.createWebChannel(f,u);this.I_(p);let I=!1,S=!1;const D=new nE({Yo:V=>{S?C(we,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(I||(C(we,`Opening RPC '${e}' stream ${s} transport.`),p.open(),I=!0),C(we,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),N=(V,$,B)=>{V.listen($,(U=>{try{B(U)}catch(ee){setTimeout((()=>{throw ee}),0)}}))};return N(p,Cr.EventType.OPEN,(()=>{S||(C(we,`RPC '${e}' stream ${s} transport opened.`),D.o_())})),N(p,Cr.EventType.CLOSE,(()=>{S||(S=!0,C(we,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(p))})),N(p,Cr.EventType.ERROR,(V=>{S||(S=!0,hn(we,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),D.a_(new O(P.UNAVAILABLE,"The operation could not be completed")))})),N(p,Cr.EventType.MESSAGE,(V=>{if(!S){const $=V.data[0];L(!!$,16349);const B=$,U=B?.error||B[0]?.error;if(U){C(we,`RPC '${e}' stream ${s} received error:`,U);const ee=U.status;let X=(function(g){const y=le[g];if(y!==void 0)return sf(y)})(ee),Q=U.message;X===void 0&&(X=P.INTERNAL,Q="Unknown error status: "+ee+" with message "+U.message),S=!0,D.a_(new O(X,Q)),p.close()}else C(we,`RPC '${e}' stream ${s} received:`,$),D.u_($)}})),N(c,ad.STAT_EVENT,(V=>{V.stat===$o.PROXY?C(we,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===$o.NOPROXY&&C(we,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
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
 *//**
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
 */function sE(){return typeof window<"u"?window:null}function ni(){return typeof document<"u"?document:null}/**
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
 */function Wi(r){return new iT(r,!0)}/**
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
 */class Ff{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ql="PersistentStream";class Uf{constructor(e,t,n,s,i,a,c,u){this.Mi=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ff(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Se(t.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===t&&this.G_(n,s)}),(n=>{e((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{n((()=>this.listener.Xo()))})),this.stream.t_((()=>{n((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return C(Ql,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(C(Ql,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class iE extends Uf{constructor(e,t,n,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=cT(this.serializer,e),n=(function(i){if(!("targetChange"in i))return F.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Pe(a.readTime):F.min()})(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=ia(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=yi(u)?{documents:ff(i,u)}:{query:mf(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=cf(i,a.resumeToken);const h=ra(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=Zn(i,a.snapshotVersion.toTimestamp());const h=ra(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const n=lT(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=ia(this.serializer),t.removeTarget=e,this.q_(t)}}class oE extends Uf{constructor(e,t,n,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return L(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,L(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){L(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=uT(e.writeResults,e.commitTime),n=Pe(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=ia(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>Ei(this.serializer,n)))};this.q_(t)}}/**
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
 */class aE{}class cE extends aE{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,sa(t,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}Ho(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,sa(t,n),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class uE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Se(t),this.aa=!1):C("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const _n="RemoteStore";class lE{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{n.enqueueAndForget((async()=>{Tn(this)&&(C(_n,"Restarting streams for network reachability change."),await(async function(u){const h=z(u);h.Ea.add(4),await gs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Qi(h)})(this))}))})),this.Ra=new uE(n,s)}}async function Qi(r){if(Tn(r))for(const e of r.da)await e(!0)}async function gs(r){for(const e of r.da)await e(!1)}function Bf(r,e){const t=z(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ic(t)?sc(t):ar(t).O_()&&rc(t,e))}function nc(r,e){const t=z(r),n=ar(t);t.Ia.delete(e),n.O_()&&jf(t,e),t.Ia.size===0&&(n.O_()?n.L_():Tn(t)&&t.Ra.set("Unknown"))}function rc(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ar(r).Y_(e)}function jf(r,e){r.Va.Ue(e),ar(r).Z_(e)}function sc(r){r.Va=new tT({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),ar(r).start(),r.Ra.ua()}function ic(r){return Tn(r)&&!ar(r).x_()&&r.Ia.size>0}function Tn(r){return z(r).Ea.size===0}function qf(r){r.Va=void 0}async function hE(r){r.Ra.set("Online")}async function dE(r){r.Ia.forEach(((e,t)=>{rc(r,e)}))}async function fE(r,e){qf(r),ic(r)?(r.Ra.ha(e),sc(r)):r.Ra.set("Unknown")}async function mE(r,e,t){if(r.Ra.set("Online"),e instanceof af&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(r,e)}catch(n){C(_n,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bi(r,n)}else if(e instanceof ei?r.Va.Ze(e):e instanceof of?r.Va.st(e):r.Va.tt(e),!t.isEqual(F.min()))try{const n=await Mf(r.localStore);t.compareTo(n)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(de.EMPTY_BYTE_STRING,f.snapshotVersion)),jf(i,u);const p=new rt(f.target,u,h,f.sequenceNumber);rc(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(r,t)}catch(n){C(_n,"Failed to raise snapshot:",n),await bi(r,n)}}async function bi(r,e,t){if(!Lt(e))throw e;r.Ea.add(1),await gs(r),r.Ra.set("Offline"),t||(t=()=>Mf(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{C(_n,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await Qi(r)}))}function zf(r,e){return e().catch((t=>bi(r,t,e)))}async function _s(r){const e=z(r),t=Ot(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:nn;for(;pE(e);)try{const s=await JT(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,gE(e,s)}catch(s){await bi(e,s)}$f(e)&&Gf(e)}function pE(r){return Tn(r)&&r.Ta.length<10}function gE(r,e){r.Ta.push(e);const t=Ot(r);t.O_()&&t.X_&&t.ea(e.mutations)}function $f(r){return Tn(r)&&!Ot(r).x_()&&r.Ta.length>0}function Gf(r){Ot(r).start()}async function _E(r){Ot(r).ra()}async function yE(r){const e=Ot(r);for(const t of r.Ta)e.ea(t.mutations)}async function IE(r,e,t){const n=r.Ta.shift(),s=Ga.from(n,e,t);await zf(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await _s(r)}async function TE(r,e){e&&Ot(r).X_&&await(async function(n,s){if((function(a){return YI(a)&&a!==P.ABORTED})(s.code)){const i=n.Ta.shift();Ot(n).B_(),await zf(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await _s(n)}})(r,e),$f(r)&&Gf(r)}async function Jl(r,e){const t=z(r);t.asyncQueue.verifyOperationInProgress(),C(_n,"RemoteStore received new credentials");const n=Tn(t);t.Ea.add(3),await gs(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qi(t)}async function EE(r,e){const t=z(r);e?(t.Ea.delete(2),await Qi(t)):e||(t.Ea.add(2),await gs(t),t.Ra.set("Unknown"))}function ar(r){return r.ma||(r.ma=(function(t,n,s){const i=z(t);return i.sa(),new iE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:hE.bind(null,r),t_:dE.bind(null,r),r_:fE.bind(null,r),H_:mE.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),ic(r)?sc(r):r.Ra.set("Unknown")):(await r.ma.stop(),qf(r))}))),r.ma}function Ot(r){return r.fa||(r.fa=(function(t,n,s){const i=z(t);return i.sa(),new oE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:_E.bind(null,r),r_:TE.bind(null,r),ta:yE.bind(null,r),na:IE.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await _s(r)):(await r.fa.stop(),r.Ta.length>0&&(C(_n,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class oc{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const a=Date.now()+n,c=new oc(e,t,a,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ac(r,e){if(Se("AsyncQueue",`${e}: ${r}`),Lt(r))return new O(P.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Fn{static emptySet(e){return new Fn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||x.comparator(t.key,n.key):(t,n)=>x.comparator(t.key,n.key),this.keyedMap=Vr(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Fn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Xl{constructor(){this.ga=new oe(x.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):M(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class er{constructor(e,t,n,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new er(e,t,Fn.emptySet(t),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ji(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class wE{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class vE{constructor(){this.queries=Yl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=z(t),i=s.queries;s.queries=Yl(),i.forEach(((a,c)=>{for(const u of c.Sa)u.onError(n)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function Yl(){return new ht((r=>Gd(r)),ji)}async function Kf(r,e){const t=z(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new wE,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ac(a,`Initialization of query '${Dn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&cc(t)}async function Hf(r,e){const t=z(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function AE(r,e){const t=z(r);let n=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(n=!0);a.wa=s}}n&&cc(t)}function RE(r,e,t){const n=z(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function cc(r){r.Ca.forEach((e=>{e.next()}))}var da,Zl;(Zl=da||(da={})).Ma="default",Zl.Cache="cache";class Wf{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new er(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==da.Cache}}/**
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
 */class Qf{constructor(e){this.key=e}}class Jf{constructor(e){this.key=e}}class bE{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=K(),this.mutatedKeys=K(),this.eu=Kd(e),this.tu=new Fn(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Xl,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const I=s.get(f),S=ms(this.query,p)?p:null,D=!!I&&this.mutatedKeys.has(I.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;I&&S?I.data.isEqual(S.data)?D!==N&&(n.track({type:3,doc:S}),V=!0):this.su(I,S)||(n.track({type:2,doc:S}),V=!0,(u&&this.eu(S,u)>0||h&&this.eu(S,h)<0)&&(c=!0)):!I&&S?(n.track({type:0,doc:S}),V=!0):I&&!S&&(n.track({type:1,doc:I}),V=!0,(u||h)&&(c=!0)),V&&(S?(a=a.add(S),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{tu:a,iu:n,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(S,D){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:V})}};return N(S)-N(D)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(n),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new er(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Xl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=K(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))}));const t=[];return e.forEach((n=>{this.Xa.has(n)||t.push(new Jf(n))})),this.Xa.forEach((n=>{e.has(n)||t.push(new Qf(n))})),t}cu(e){this.Ya=e.Qs,this.Xa=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return er.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const uc="SyncEngine";class SE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class PE{constructor(e){this.key=e,this.hu=!1}}class CE{constructor(e,t,n,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ht((c=>Gd(c)),ji),this.Iu=new Map,this.Eu=new Set,this.du=new oe(x.comparator),this.Au=new Map,this.Ru=new Xa,this.Vu={},this.mu=new Map,this.fu=gn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VE(r,e,t=!0){const n=nm(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Xf(n,e,t,!0),s}async function DE(r,e){const t=nm(r);await Xf(t,e,!0,!1)}async function Xf(r,e,t,n){const s=await XT(r.localStore,Be(e)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await kE(r,e,i,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&Bf(r.remoteStore,s),c}async function kE(r,e,t,n,s){r.pu=(p,I,S)=>(async function(N,V,$,B){let U=V.view.ru($);U.Cs&&(U=await Gl(N.localStore,V.query,!1).then((({documents:T})=>V.view.ru(T,U))));const ee=B&&B.targetChanges.get(V.targetId),X=B&&B.targetMismatches.get(V.targetId)!=null,Q=V.view.applyChanges(U,N.isPrimaryClient,ee,X);return th(N,V.targetId,Q.au),Q.snapshot})(r,p,I,S);const i=await Gl(r.localStore,e,!0),a=new bE(e,i.Qs),c=a.ru(i.documents),u=ps.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=a.applyChanges(c,r.isPrimaryClient,u);th(r,t,h.au);const f=new SE(e,t,a);return r.Tu.set(e,f),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),h.snapshot}async function NE(r,e,t){const n=z(r),s=n.Tu.get(e),i=n.Iu.get(s.targetId);if(i.length>1)return n.Iu.set(s.targetId,i.filter((a=>!ji(a,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await la(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&nc(n.remoteStore,s.targetId),fa(n,s.targetId)})).catch(yn)):(fa(n,s.targetId),await la(n.localStore,s.targetId,!0))}async function xE(r,e){const t=z(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),nc(t.remoteStore,n.targetId))}async function OE(r,e,t){const n=rm(r);try{const s=await(function(a,c){const u=z(a),h=Y.now(),f=c.reduce(((S,D)=>S.add(D.key)),K());let p,I;return u.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let D=Ne(),N=K();return u.Ns.getEntries(S,f).next((V=>{D=V,D.forEach((($,B)=>{B.isValidDocument()||(N=N.add($))}))})).next((()=>u.localDocuments.getOverlayedDocuments(S,D))).next((V=>{p=V;const $=[];for(const B of c){const U=JI(B,p.get(B.key).overlayedDocument);U!=null&&$.push(new Ft(B.key,U,Ld(U.value.mapValue),xe.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,$,c)})).next((V=>{I=V;const $=V.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(S,V.batchId,$)}))})).then((()=>({batchId:I.batchId,changes:Wd(p)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new oe(q)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h})(n,s.batchId,t),await ys(n,s.changes),await _s(n.remoteStore)}catch(s){const i=ac(s,"Failed to persist write");t.reject(i)}}async function Yf(r,e){const t=z(r);try{const n=await WT(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?L(a.hu,14607):s.removedDocuments.size>0&&(L(a.hu,42227),a.hu=!1))})),await ys(t,n,e)}catch(n){await yn(n)}}function eh(r,e,t){const n=z(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=z(a);u.onlineState=c;let h=!1;u.queries.forEach(((f,p)=>{for(const I of p.Sa)I.va(c)&&(h=!0)})),h&&cc(u)})(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ME(r,e,t){const n=z(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let a=new oe(x.comparator);a=a.insert(i,ue.newNoDocument(i,F.min()));const c=K().add(i),u=new $i(F.min(),new Map,new oe(q),a,c);await Yf(n,u),n.du=n.du.remove(i),n.Au.delete(e),lc(n)}else await la(n.localStore,e,!1).then((()=>fa(n,e,t))).catch(yn)}async function LE(r,e){const t=z(r),n=e.batch.batchId;try{const s=await HT(t.localStore,e);em(t,n,null),Zf(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ys(t,s)}catch(s){await yn(s)}}async function FE(r,e,t){const n=z(r);try{const s=await(function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next((p=>(L(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>u.localDocuments.getDocuments(h,f)))}))})(n.localStore,e);em(n,e,t),Zf(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ys(n,s)}catch(s){await yn(s)}}function Zf(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function em(r,e,t){const n=z(r);let s=n.Vu[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vu[n.currentUser.toKey()]=s}}function fa(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((n=>{r.Ru.containsKey(n)||tm(r,n)}))}function tm(r,e){r.Eu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(nc(r.remoteStore,t),r.du=r.du.remove(e),r.Au.delete(t),lc(r))}function th(r,e,t){for(const n of t)n instanceof Qf?(r.Ru.addReference(n.key,e),UE(r,n)):n instanceof Jf?(C(uc,"Document no longer in limbo: "+n.key),r.Ru.removeReference(n.key,e),r.Ru.containsKey(n.key)||tm(r,n.key)):M(19791,{wu:n})}function UE(r,e){const t=e.key,n=t.path.canonicalString();r.du.get(t)||r.Eu.has(n)||(C(uc,"New document in limbo: "+t),r.Eu.add(n),lc(r))}function lc(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new x(te.fromString(e)),n=r.fu.next();r.Au.set(n,new PE(t)),r.du=r.du.insert(t,n),Bf(r.remoteStore,new rt(Be(fs(t.path)),n,"TargetPurposeLimboResolution",Fe.ce))}}async function ys(r,e,t){const n=z(r),s=[],i=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((c,u)=>{a.push(n.pu(u,e,t).then((h=>{if((h||t)&&n.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;n.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=ec.As(u.targetId,h);i.push(f)}})))})),await Promise.all(a),n.Pu.H_(s),await(async function(u,h){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>v.forEach(h,(I=>v.forEach(I.Es,(S=>f.persistence.referenceDelegate.addReference(p,I.targetId,S))).next((()=>v.forEach(I.ds,(S=>f.persistence.referenceDelegate.removeReference(p,I.targetId,S)))))))))}catch(p){if(!Lt(p))throw p;C(tc,"Failed to update sequence numbers: "+p)}for(const p of h){const I=p.targetId;if(!p.fromCache){const S=f.Ms.get(I),D=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(D);f.Ms=f.Ms.insert(I,N)}}})(n.localStore,i))}async function BE(r,e){const t=z(r);if(!t.currentUser.isEqual(e)){C(uc,"User change. New user:",e.toKey());const n=await Of(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new O(P.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ys(t,n.Ls)}}function jE(r,e){const t=z(r),n=t.Au.get(e);if(n&&n.hu)return K().add(n.key);{let s=K();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function nm(r){const e=z(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ME.bind(null,e),e.Pu.H_=AE.bind(null,e.eventManager),e.Pu.yu=RE.bind(null,e.eventManager),e}function rm(r){const e=z(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FE.bind(null,e),e}class rs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return xf(this.persistence,new Nf,e.initialUser,this.serializer)}Cu(e){return new Ya(Hi.mi,this.serializer)}Du(e){return new Lf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rs.provider={build:()=>new rs};class qE extends rs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){L(this.persistence.referenceDelegate instanceof Ri,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Pf(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new Ya((n=>Ri.mi(n,t)),this.serializer)}}class zE extends rs{constructor(e,t,n){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await rm(this.xu.syncEngine),await _s(this.xu.remoteStore),await this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return xf(this.persistence,new Nf,e.initialUser,this.serializer)}Fu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Pf(n,e.asyncQueue,t)}Mu(e,t){const n=new Hy(t,this.persistence);return new Ky(e.asyncQueue,n)}Cu(e){const t=zT(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new Za(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,sE(),ni(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new Lf}}class Si{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>eh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=BE.bind(null,this.syncEngine),await EE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vE})()}createDatastore(e){const t=Wi(e.databaseInfo.databaseId),n=(function(i){return new rE(i)})(e.databaseInfo);return(function(i,a,c,u){return new cE(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,a,c){return new lE(n,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>eh(this.syncEngine,t,0)),(function(){return Wl.v()?new Wl:new ZT})())}createSyncEngine(e,t){return(function(s,i,a,c,u,h,f){const p=new CE(s,i,a,c,u,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=z(t);C(_n,"RemoteStore shutting down."),n.Ea.add(5),await gs(n),n.Aa.shutdown(),n.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Si.provider={build:()=>new Si};/**
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
 */class sm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Se("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Mt="FirestoreClient";class $E{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ie.UNAUTHENTICATED,this.clientId=Ca.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{C(Mt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(C(Mt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ac(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Oo(r,e){r.asyncQueue.verifyOperationInProgress(),C(Mt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Of(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function nh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await GE(r);C(Mt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Jl(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Jl(e.remoteStore,s))),r._onlineComponents=e}async function GE(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C(Mt,"Using user provided OfflineComponentProvider");try{await Oo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await Oo(r,new rs)}}else C(Mt,"Using default OfflineComponentProvider"),await Oo(r,new qE(void 0));return r._offlineComponents}async function im(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C(Mt,"Using user provided OnlineComponentProvider"),await nh(r,r._uninitializedComponentsProvider._online)):(C(Mt,"Using default OnlineComponentProvider"),await nh(r,new Si))),r._onlineComponents}function KE(r){return im(r).then((e=>e.syncEngine))}async function ma(r){const e=await im(r),t=e.eventManager;return t.onListen=VE.bind(null,e.syncEngine),t.onUnlisten=NE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=DE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xE.bind(null,e.syncEngine),t}function HE(r,e,t={}){const n=new st;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,h){const f=new sm({next:I=>{f.Nu(),a.enqueueAndForget((()=>Hf(i,p)));const S=I.docs.has(c);!S&&I.fromCache?h.reject(new O(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&u&&u.source==="server"?h.reject(new O(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(I)},error:I=>h.reject(I)}),p=new Wf(fs(c.path),f,{includeMetadataChanges:!0,qa:!0});return Kf(i,p)})(await ma(r),r.asyncQueue,e,t,n))),n.promise}/**
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
 */function om(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const rh=new Map;/**
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
 */const am="firestore.googleapis.com",sh=!0;class ih{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=am,this.ssl=sh}else this.host=e.host,this.ssl=e.ssl??sh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Af;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bT)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=om(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ih({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ih(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Dy;switch(n.type){case"firstParty":return new Oy(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=rh.get(t);n&&(C("ComponentProvider","Removing Datastore"),rh.delete(t),n.terminate())})(this),Promise.resolve()}}function WE(r,e,t,n={}){r=it(r,hc);const s=nr(e),i=r._getSettings(),a={...i,emulatorOptions:r._getEmulatorOptions()},c=`${e}:${t}`;s&&(_h(`https://${c}`),yh("Firestore",!0)),i.host!==am&&i.host!==c&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:n};if(!an(u,a)&&(r._setSettings(u),n.mockUserToken)){let h,f;if(typeof n.mockUserToken=="string")h=n.mockUserToken,f=Ie.MOCK_USER;else{h=ap(n.mockUserToken,r._app?.options.projectId);const p=n.mockUserToken.sub||n.mockUserToken.user_id;if(!p)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ie(p)}r._authCredentials=new ky(new hd(h,f))}}/**
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
 */class Ji{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class me{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ls(t,me._jsonSchema))return new me(e,n||null,new x(te.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:he("string",me._jsonSchemaVersion),referencePath:he("string")};class ss extends Ji{constructor(e,t,n){super(e,t,fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new x(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function pw(r,e,...t){if(r=Oe(r),arguments.length===1&&(e=Ca.newId()),jy("doc","path",e),r instanceof hc){const n=te.fromString(e,...t);return Qu(n),new me(r,null,new x(n))}{if(!(r instanceof me||r instanceof ss))throw new O(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(te.fromString(e,...t));return Qu(n),new me(r.firestore,r instanceof ss?r.converter:null,new x(n))}}/**
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
 */const oh="AsyncQueue";class ah{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ff(this,"async_queue_retry"),this._c=()=>{const n=ni();n&&C(oh,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=ni();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ni();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new st;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Lt(e))throw e;C(oh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Se("INTERNAL UNHANDLED ERROR: ",ch(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=oc.createAndSchedule(this,e,t,n,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:ch(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ch(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
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
 */function uh(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class tr extends hc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ah,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ah(e),this._firestoreClient=void 0,await e}}}function gw(r,e){const t=typeof r=="object"?r:Rh(),n=typeof r=="string"?r:gi,s=_a(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=ip("firestore");i&&WE(s,...i)}return s}function dc(r){if(r._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||cm(r),r._firestoreClient}function cm(r){const e=r._freezeSettings(),t=(function(s,i,a,c){return new wI(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,om(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new $E(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(r._componentsProvider))}function _w(r,e){hn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return QE(r,Si.provider,{build:n=>new zE(n,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}function QE(r,e,t){if((r=it(r,tr))._firestoreClient||r._terminated)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new O(P.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},cm(r)}/**
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
 */class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(de.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ls(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:he("string",Le._jsonSchemaVersion),bytes:he("string")};/**
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
 */class fc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class um{constructor(e){this._methodName=e}}/**
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
 */class Xe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(e){if(ls(e,Xe._jsonSchema))return new Xe(e.latitude,e.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:he("string",Xe._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ye{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ye._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ls(e,Ye._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ye(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ye._jsonSchemaVersion="firestore/vectorValue/1.0",Ye._jsonSchema={type:he("string",Ye._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const JE=/^__.*__$/;class XE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ft(e,this.data,this.fieldMask,t,this.fieldTransforms):new or(e,this.data,t,this.fieldTransforms)}}function lm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:r})}}class mc{constructor(e,t,n,s,i,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new mc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){const t=this.path?.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Pi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(lm(this.Ac)&&JE.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class YE{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Wi(e)}Cc(e,t,n,s=!1){return new mc({Ac:e,methodName:t,Dc:n,path:ae.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ZE(r){const e=r._freezeSettings(),t=Wi(r._databaseId);return new YE(r._databaseId,!!e.ignoreUndefinedProperties,t)}function ew(r,e,t,n,s,i={}){const a=r.Cc(i.merge||i.mergeFields?2:0,e,t,s);mm("Data must be an object, but it was:",a,n);const c=dm(n,a);let u,h;if(i.merge)u=new Ue(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const I=tw(e,p,t);if(!a.contains(I))throw new O(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);rw(f,I)||f.push(I)}u=new Ue(f),h=a.fieldTransforms.filter((p=>u.covers(p.field)))}else u=null,h=a.fieldTransforms;return new XE(new Ve(c),u,h)}function hm(r,e){if(fm(r=Oe(r)))return mm("Unsupported field value:",e,r),dm(r,e);if(r instanceof um)return(function(n,s){if(!lm(s.Ac))throw s.Sc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const c of n){let u=hm(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return zI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Y.fromDate(n);return{timestampValue:Zn(s.serializer,i)}}if(n instanceof Y){const i=new Y(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Zn(s.serializer,i)}}if(n instanceof Xe)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Le)return{bytesValue:cf(s.serializer,n._byteString)};if(n instanceof me){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wa(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ye)return(function(a,c){return{mapValue:{fields:{[Fa]:{stringValue:Ua},[Hn]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return qa(c.serializer,h)}))}}}}}})(n,s);throw s.Sc(`Unsupported field value: ${Va(n)}`)})(r,e)}function dm(r,e){const t={};return Pd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(r,((n,s)=>{const i=hm(s,e.mc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function fm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Y||r instanceof Xe||r instanceof Le||r instanceof me||r instanceof um||r instanceof Ye)}function mm(r,e,t){if(!fm(t)||!fd(t)){const n=Va(t);throw n==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+n)}}function tw(r,e,t){if((e=Oe(e))instanceof fc)return e._internalPath;if(typeof e=="string")return pm(r,e);throw Pi("Field path arguments must be of type string or ",r,!1,void 0,t)}const nw=new RegExp("[~\\*/\\[\\]]");function pm(r,e,t){if(e.search(nw)>=0)throw Pi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new fc(...e.split("."))._internalPath}catch{throw Pi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Pi(r,e,t,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${n}`),a&&(u+=` in document ${s}`),u+=")"),new O(P.INVALID_ARGUMENT,c+r+u)}function rw(r,e){return r.some((t=>t.isEqual(e)))}/**
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
 */class gm{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_m("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sw extends gm{data(){return super.data()}}function _m(r,e){return typeof e=="string"?pm(r,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
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
 */function iw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ow{convertValue(e,t="none"){switch(Nt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return In(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){const t=e.fields?.[Hn].arrayValue?.values?.map((n=>ie(n.doubleValue)));return new Ye(t)}convertGeoPoint(e){return new Xe(ie(e.latitude),ie(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Fi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Yr(e));default:return null}}convertTimestamp(e){const t=ct(e);return new Y(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=te.fromString(e);L(yf(n),9688,{name:e});const s=new dn(n.get(1),n.get(3)),i=new x(n.popFirst(5));return s.isEqual(t)||Se(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function aw(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class Nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class on extends gm{constructor(e,t,n,s,i,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(_m("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=on._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}on._jsonSchemaVersion="firestore/documentSnapshot/1.0",on._jsonSchema={type:he("string",on._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class ri extends on{data(e={}){return super.data(e)}}class Un{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Nr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ri(this._firestore,this._userDataWriter,n.key,n,new Nr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Nr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Nr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:cw(c.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Un._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ca.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cw(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
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
 */function yw(r){r=it(r,me);const e=it(r.firestore,tr);return HE(dc(e),r._key).then((t=>Im(e,r,t)))}Un._jsonSchemaVersion="firestore/querySnapshot/1.0",Un._jsonSchema={type:he("string",Un._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class ym extends ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function Iw(r,e,t){r=it(r,me);const n=it(r.firestore,tr),s=aw(r.converter,e);return uw(n,[ew(ZE(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,xe.none())])}function Tw(r,...e){r=Oe(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||uh(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(uh(e[n])){const u=e[n];e[n]=u.next?.bind(u),e[n+1]=u.error?.bind(u),e[n+2]=u.complete?.bind(u)}let i,a,c;if(r instanceof me)a=it(r.firestore,tr),c=fs(r._key.path),i={next:u=>{e[n]&&e[n](Im(a,r,u))},error:e[n+1],complete:e[n+2]};else{const u=it(r,Ji);a=it(u.firestore,tr),c=u._query;const h=new ym(a);i={next:f=>{e[n]&&e[n](new Un(a,h,u,f))},error:e[n+1],complete:e[n+2]},iw(r._query)}return(function(h,f,p,I){const S=new sm(I),D=new Wf(f,S,p);return h.asyncQueue.enqueueAndForget((async()=>Kf(await ma(h),D))),()=>{S.Nu(),h.asyncQueue.enqueueAndForget((async()=>Hf(await ma(h),D)))}})(dc(a),c,s,i)}function uw(r,e){return(function(n,s){const i=new st;return n.asyncQueue.enqueueAndForget((async()=>OE(await KE(n),s,i))),i.promise})(dc(r),e)}function Im(r,e,t){const n=t.docs.get(e._key),s=new ym(r);return new on(r,s,e._key,n,new Nr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ir=s})(rr),Bn(new cn("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),c=new tr(new Ny(n.getProvider("auth-internal")),new My(a,n.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dn(h.options.projectId,f)})(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Vt(Gu,Ku,e),Vt(Gu,Ku,"esm2020")})();export{vt as G,Y as T,gw as a,dw as b,yw as c,pw as d,_w as e,Tw as f,fw as g,Iw as h,Eg as i,lw as o,hw as s};
