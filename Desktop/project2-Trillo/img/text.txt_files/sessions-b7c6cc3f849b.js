"use strict";(()=>{var G=Object.defineProperty;var e=(W,R)=>G(W,"name",{value:R,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["sessions","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_template-parts_lib_in-2b5acf0","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_template-parts_lib_in-2b5acf1","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-3bc7580","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-3bc7581"],{65935:(W,R,T)=>{T.d(R,{AC:()=>P,rK:()=>w,uT:()=>u});function v(i,d){const S=i.createElement("template");return S.innerHTML=d,i.importNode(S.content,!0)}e(v,"parseHTML");function x(i){const d=new URLSearchParams,S=new FormData(i).entries();for(const[I,M]of[...S])d.append(I,M.toString());return d.toString()}e(x,"serialize");class o extends Error{constructor(d,S){super(d),this.response=S}}e(o,"ErrorWithResponse");function a(){let i,d;return[new Promise(function(I,M){i=I,d=M}),i,d]}e(a,"makeDeferred");let h;const j=[],f=[];function u(i){j.push(i)}e(u,"afterRemote");function w(i){f.push(i)}e(w,"beforeRemote");function P(i,d){h||(h=new Map,document.addEventListener("submit",c));const S=h.get(i)||[];h.set(i,[...S,d])}e(P,"remoteForm");function C(i,d){if(h){const S=h.get(i)||[];h.set(i,S.filter(I=>I!==d))}}e(C,"remoteUninstall");function b(i){const d=[];for(const S of h.keys())if(i.matches(S)){const I=h.get(S)||[];d.push(...I)}return d}e(b,"getMatches");function c(i){if(!(i.target instanceof HTMLFormElement)||i.defaultPrevented)return;const d=i.target,S=b(d);if(S.length===0)return;const I=l(d),[M,B,n]=a();i.preventDefault(),m(S,d,I,M).then(async t=>{if(t){for(const s of f)await s(d);E(I).then(B,n).catch(()=>{}).then(()=>{for(const s of j)s(d)})}else d.submit()},t=>{d.submit(),setTimeout(()=>{throw t})})}e(c,"handleSubmit");async function m(i,d,S,I){let M=!1;for(const B of i){const[n,t]=a(),s=e(()=>(M=!0,t(),I),"kick"),_={text:s,json:()=>(S.headers.set("Accept","application/json"),s()),html:()=>(S.headers.set("Accept","text/html"),s())};await Promise.race([n,B(d,_,S)])}return M}e(m,"processHandlers");function l(i){const d={method:i.method||"GET",url:i.action,headers:new Headers({"X-Requested-With":"XMLHttpRequest"}),body:null};if(d.method.toUpperCase()==="GET"){const S=x(i);S&&(d.url+=(~d.url.indexOf("?")?"&":"?")+S)}else d.body=new FormData(i);return d}e(l,"buildRequest");async function E(i){const d=await window.fetch(i.url,{method:i.method,body:i.body!==null?i.body:void 0,headers:i.headers,credentials:"same-origin"}),S={url:d.url,status:d.status,statusText:d.statusText,headers:d.headers,text:"",get json(){const M=this,B=JSON.parse(M.text);return delete M.json,M.json=B,M.json},get html(){const M=this;return delete M.html,M.html=v(document,M.text),M.html}},I=await d.text();if(S.text=I,d.ok)return S;throw new o("request failed",S)}e(E,"remoteSubmit")},59753:(W,R,T)=>{T.d(R,{f:()=>F,on:()=>_});function v(){if(!(this instanceof v))return new v;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}e(v,"SelectorSet");var x=window.document.documentElement,o=x.matches||x.webkitMatchesSelector||x.mozMatchesSelector||x.oMatchesSelector||x.msMatchesSelector;v.prototype.matchesSelector=function(r,p){return o.call(r,p)},v.prototype.querySelectorAll=function(r,p){return p.querySelectorAll(r)},v.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;v.prototype.indexes.push({name:"ID",selector:e(function(p){var g;if(g=p.match(a))return g[0].slice(1)},"matchIdSelector"),element:e(function(p){if(p.id)return[p.id]},"getElementId")});var h=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;v.prototype.indexes.push({name:"CLASS",selector:e(function(p){var g;if(g=p.match(h))return g[0].slice(1)},"matchClassSelector"),element:e(function(p){var g=p.className;if(g){if(typeof g=="string")return g.split(/\s/);if(typeof g=="object"&&"baseVal"in g)return g.baseVal.split(/\s/)}},"getElementClassNames")});var j=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;v.prototype.indexes.push({name:"TAG",selector:e(function(p){var g;if(g=p.match(j))return g[0].toUpperCase()},"matchTagSelector"),element:e(function(p){return[p.nodeName.toUpperCase()]},"getElementTagName")}),v.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var f;typeof window.Map=="function"?f=window.Map:f=function(){function r(){this.map={}}return e(r,"Map"),r.prototype.get=function(p){return this.map[p+" "]},r.prototype.set=function(p,g){this.map[p+" "]=g},r}();var u=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function w(r,p){r=r.slice(0).concat(r.default);var g=r.length,A,y,O,L,N=p,U,H,D=[];do if(u.exec(""),(O=u.exec(N))&&(N=O[3],O[2]||!N)){for(A=0;A<g;A++)if(H=r[A],U=H.selector(O[1])){for(y=D.length,L=!1;y--;)if(D[y].index===H&&D[y].key===U){L=!0;break}L||D.push({index:H,key:U});break}}while(O);return D}e(w,"parseSelectorIndexes");function P(r,p){var g,A,y;for(g=0,A=r.length;g<A;g++)if(y=r[g],p.isPrototypeOf(y))return y}e(P,"findByPrototype"),v.prototype.logDefaultIndexUsed=function(){},v.prototype.add=function(r,p){var g,A,y,O,L,N,U,H,D=this.activeIndexes,q=this.selectors,V=this.selectorObjects;if(typeof r=="string"){for(g={id:this.uid++,selector:r,data:p},V[g.id]=g,U=w(this.indexes,r),A=0;A<U.length;A++)H=U[A],O=H.key,y=H.index,L=P(D,y),L||(L=Object.create(y),L.map=new f,D.push(L)),y===this.indexes.default&&this.logDefaultIndexUsed(g),N=L.map.get(O),N||(N=[],L.map.set(O,N)),N.push(g);this.size++,q.push(r)}},v.prototype.remove=function(r,p){if(typeof r=="string"){var g,A,y,O,L,N,U,H,D=this.activeIndexes,q=this.selectors=[],V=this.selectorObjects,K={},$=arguments.length===1;for(g=w(this.indexes,r),y=0;y<g.length;y++)for(A=g[y],O=D.length;O--;)if(N=D[O],A.index.isPrototypeOf(N)){if(U=N.map.get(A.key),U)for(L=U.length;L--;)H=U[L],H.selector===r&&($||H.data===p)&&(U.splice(L,1),K[H.id]=!0);break}for(y in K)delete V[y],this.size--;for(y in V)q.push(V[y].selector)}};function C(r,p){return r.id-p.id}e(C,"sortById"),v.prototype.queryAll=function(r){if(!this.selectors.length)return[];var p={},g=[],A=this.querySelectorAll(this.selectors.join(", "),r),y,O,L,N,U,H,D,q;for(y=0,L=A.length;y<L;y++)for(U=A[y],H=this.matches(U),O=0,N=H.length;O<N;O++)q=H[O],p[q.id]?D=p[q.id]:(D={id:q.id,selector:q.selector,data:q.data,elements:[]},p[q.id]=D,g.push(D)),D.elements.push(U);return g.sort(C)},v.prototype.matches=function(r){if(!r)return[];var p,g,A,y,O,L,N,U,H,D,q,V=this.activeIndexes,K={},$=[];for(p=0,y=V.length;p<y;p++)if(N=V[p],U=N.element(r),U){for(g=0,O=U.length;g<O;g++)if(H=N.map.get(U[g]))for(A=0,L=H.length;A<L;A++)D=H[A],q=D.id,!K[q]&&this.matchesSelector(r,D.selector)&&(K[q]=!0,$.push(D))}return $.sort(C)};var b={},c={},m=new WeakMap,l=new WeakMap,E=new WeakMap,i=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function d(r,p,g){var A=r[p];return r[p]=function(){return g.apply(r,arguments),A.apply(r,arguments)},r}e(d,"before");function S(r,p,g){var A=[],y=p;do{if(y.nodeType!==1)break;var O=r.matches(y);if(O.length){var L={node:y,observers:O};g?A.unshift(L):A.push(L)}}while(y=y.parentElement);return A}e(S,"dist_matches");function I(){m.set(this,!0)}e(I,"trackPropagation");function M(){m.set(this,!0),l.set(this,!0)}e(M,"trackImmediate");function B(){return E.get(this)||null}e(B,"getCurrentTarget");function n(r,p){!i||Object.defineProperty(r,"currentTarget",{configurable:!0,enumerable:!0,get:p||i.get})}e(n,"defineCurrentTarget");function t(r){try{return r.eventPhase,!0}catch{return!1}}e(t,"canDispatch");function s(r){if(!!t(r)){var p=r.eventPhase===1?c:b,g=p[r.type];if(!!g){var A=S(g,r.target,r.eventPhase===1);if(!!A.length){d(r,"stopPropagation",I),d(r,"stopImmediatePropagation",M),n(r,B);for(var y=0,O=A.length;y<O&&!m.get(r);y++){var L=A[y];E.set(r,L.node);for(var N=0,U=L.observers.length;N<U&&!l.get(r);N++)L.observers[N].data.call(L.node,r)}E.delete(r),n(r)}}}}e(s,"dispatch");function _(r,p,g){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},y=!!A.capture,O=y?c:b,L=O[r];L||(L=new v,O[r]=L,document.addEventListener(r,s,y)),L.add(p,g)}e(_,"on");function k(r,p,g){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},y=!!A.capture,O=y?c:b,L=O[r];!L||(L.remove(p,g),!L.size&&(delete O[r],document.removeEventListener(r,s,y)))}e(k,"off");function F(r,p,g){return r.dispatchEvent(new CustomEvent(p,{bubbles:!0,cancelable:!0,detail:g}))}e(F,"fire")},7679:(W,R,T)=>{T.d(R,{H:()=>o,v:()=>x});var v=T(59753);function x(){const a=document.getElementById("ajax-error-message");a&&(a.hidden=!1)}e(x,"showGlobalError");function o(){const a=document.getElementById("ajax-error-message");a&&(a.hidden=!0)}e(o,"hideGlobalError"),(0,v.on)("deprecatedAjaxError","[data-remote]",function(a){const h=a.detail,{error:j,text:f}=h;a.currentTarget===a.target&&(j==="abort"||j==="canceled"||(/<html/.test(f)?(x(),a.stopImmediatePropagation()):setTimeout(function(){a.defaultPrevented||x()},0)))}),(0,v.on)("deprecatedAjaxSend","[data-remote]",function(){o()}),(0,v.on)("click",".js-ajax-error-dismiss",function(){o()})},64926:(W,R,T)=>{T.d(R,{$1:()=>x,d8:()=>a,ej:()=>v,kT:()=>h});function v(j){return x(j)[0]}e(v,"getCookie");function x(j){const f=[];for(const u of o()){const[w,P]=u.trim().split("=");j===w&&typeof P<"u"&&f.push({key:w,value:P})}return f}e(x,"getCookies");function o(){try{return document.cookie.split(";")}catch{return[]}}e(o,"readCookies");function a(j,f,u=null,w=!1,P="lax"){let C=document.domain;if(C==null)throw new Error("Unable to get document domain");C.endsWith(".github.com")&&(C="github.com");const b=location.protocol==="https:"?"; secure":"",c=u?`; expires=${u}`:"";w===!1&&(C=`.${C}`);try{document.cookie=`${j}=${f}; path=/; domain=${C}${c}${b}; samesite=${P}`}catch{}}e(a,"setCookie");function h(j,f=!1){let u=document.domain;if(u==null)throw new Error("Unable to get document domain");u.endsWith(".github.com")&&(u="github.com");const w=new Date().getTime(),P=new Date(w-1).toUTCString(),C=location.protocol==="https:"?"; secure":"",b=`; expires=${P}`;f===!1&&(u=`.${u}`);try{document.cookie=`${j}=''; path=/; domain=${u}${b}${C}`}catch{}}e(h,"deleteCookie")},56238:(W,R,T)=>{T.d(R,{Bt:()=>h,DN:()=>u,KL:()=>C,Se:()=>f,qC:()=>b,sw:()=>w});var v=T(59753),x=T(2061),o=T(7679);(0,v.on)("click",".js-remote-submit-button",async function(c){const l=c.currentTarget.form;c.preventDefault();let E;try{E=await fetch(l.action,{method:l.method,body:new FormData(l),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}E&&!E.ok&&(0,o.v)()});function a(c,m,l){return c.dispatchEvent(new CustomEvent(m,{bubbles:!0,cancelable:l}))}e(a,"fire");function h(c,m){m&&(j(c,m),(0,x.j)(m)),a(c,"submit",!0)&&c.submit()}e(h,"requestSubmit");function j(c,m){if(!(c instanceof HTMLFormElement))throw new TypeError("The specified element is not of type HTMLFormElement.");if(!(m instanceof HTMLElement))throw new TypeError("The specified element is not of type HTMLElement.");if(m.type!=="submit")throw new TypeError("The specified element is not a submit button.");if(!c||c!==m.form)throw new Error("The specified element is not owned by the form element.")}e(j,"checkButtonValidity");function f(c,m){if(typeof m=="boolean")if(c instanceof HTMLInputElement)c.checked=m;else throw new TypeError("only checkboxes can be set to boolean value");else{if(c.type==="checkbox")throw new TypeError("checkbox can't be set to string value");c.value=m}a(c,"change",!1)}e(f,"changeValue");function u(c,m){for(const l in m){const E=m[l],i=c.elements.namedItem(l);(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(i.value=E)}}e(u,"fillFormValues");function w(c){if(!(c instanceof HTMLElement))return!1;const m=c.nodeName.toLowerCase(),l=(c.getAttribute("type")||"").toLowerCase();return m==="select"||m==="textarea"||m==="input"&&l!=="submit"&&l!=="reset"||c.isContentEditable}e(w,"isFormField");function P(c){return new URLSearchParams(c)}e(P,"searchParamsFromFormData");function C(c,m){const l=new URLSearchParams(c.search),E=P(m);for(const[i,d]of E)l.append(i,d);return l.toString()}e(C,"combineGetFormSearchParams");function b(c){return P(new FormData(c)).toString()}e(b,"serialize")},45075:(W,R,T)=>{T.d(R,{ZG:()=>h,q6:()=>f,w4:()=>j});var v=T(8439);let x=!1;const o=new v.Z;function a(u){const w=u.target;if(w instanceof HTMLElement&&w.nodeType!==Node.DOCUMENT_NODE)for(const P of o.matches(w))P.data.call(null,w)}e(a,"handleFocus");function h(u,w){x||(x=!0,document.addEventListener("focus",a,!0)),o.add(u,w),document.activeElement instanceof HTMLElement&&document.activeElement.matches(u)&&w(document.activeElement)}e(h,"onFocus");function j(u,w,P){function C(b){const c=b.currentTarget;!c||(c.removeEventListener(u,P),c.removeEventListener("blur",C))}e(C,"blurHandler"),h(w,function(b){b.addEventListener(u,P),b.addEventListener("blur",C)})}e(j,"onKey");function f(u,w){function P(C){const{currentTarget:b}=C;!b||(b.removeEventListener("input",w),b.removeEventListener("blur",P))}e(P,"blurHandler"),h(u,function(C){C.addEventListener("input",w),C.addEventListener("blur",P)})}e(f,"onInput")},2061:(W,R,T)=>{T.d(R,{j:()=>v,u:()=>x});function v(o){const a=o.closest("form");if(!(a instanceof HTMLFormElement))return;let h=x(a);if(o.name){const j=o.matches("input[type=submit]")?"Submit":"",f=o.value||j;h||(h=document.createElement("input"),h.type="hidden",h.classList.add("js-submit-button-value"),a.prepend(h)),h.name=o.name,h.value=f}else h&&h.remove()}e(v,"persistSubmitButtonValue");function x(o){const a=o.querySelector("input.js-submit-button-value");return a instanceof HTMLInputElement?a:null}e(x,"findPersistedSubmitButtonValue")},72722:(W,R,T)=>{T.d(R,{k:()=>j,q:()=>a});var v=T(15205);const x=(0,v.Z)(o);function o(){return document.head?.querySelector('meta[name="runtime-environment"]')?.content||""}e(o,"githubEnvironment");const a=(0,v.Z)(h);function h(){return document.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}e(h,"isGitHubPrivateInstance");const j=(0,v.Z)(f);function f(){return x()==="enterprise"}e(f,"isEnterpriseEnvironment")},93097:(W,R,T)=>{T.d(R,{Hu:()=>m,_8:()=>u,cj:()=>f});var v=T(69567),x=T(64463);const o=3e3,a="github-mobile-auth-flash";function h(l){const E=new v.R(document.querySelector("template.js-flash-template"),{className:`flash-error ${a}`,message:l}),i=document.importNode(E,!0),d=document.querySelector("#js-flash-container");d&&(j(),d.appendChild(i))}e(h,"addFlashMessage");function j(){const l=document.querySelector("#js-flash-container");if(l)for(const E of l.children)!E.classList.contains("js-flash-template")&&E.classList.contains(a)&&l.removeChild(E)}e(j,"removeFlash");function f(){document.getElementById("github-mobile-authenticate-prompt").hidden=!0,document.getElementById("github-mobile-authenticate-error-and-retry").hidden=!1}e(f,"hidePromptAndShowErrorMessage");function u(){j(),document.getElementById("github-mobile-authenticate-prompt").hidden=!1,document.getElementById("github-mobile-authenticate-error-and-retry").hidden=!0}e(u,"resetPrompt");function w(l){let E;l?E=new URL(`password_reset/${encodeURIComponent(l)}`,window.location.origin):E=new URL("",window.location.href),E.searchParams.set("redirect","true"),window.location.assign(E)}e(w,"approvedHandler");function P(){document.getElementById("github-mobile-rejected-redirect").click()}e(P,"rejectedHandler");function C(l){l&&h(l),f()}e(C,"genericHandler");function b(l){return document.getElementById("github-mobile-authenticate-error-and-retry").getAttribute(l)}e(b,"getErrorAndRetryMessage");function c(l,E,i,d){return e(async function S(I){if(d&&d())return;let M="STATUS_UNKNOWN",B;try{const t=document.getElementById("github-mobile-authenticate-form"),s=t.querySelector(".js-data-url-csrf"),_=await self.fetch(new Request(l,{method:"POST",body:new FormData(t),mode:"same-origin",headers:{Accept:"application/json","Scoped-CSRF-Token":s.value,"X-Requested-With":"XMLHttpRequest"}}));if(_.ok){const k=await _.json();M=k.status,B=k.token}else M="STATUS_ERROR"}catch{M="STATUS_ERROR"}let n;switch(M){case"STATUS_APPROVED":return E?E():w(B);case"STATUS_EXPIRED":return n=b("timeout-flash"),i?i(n):C(n);case"STATUS_ACTIVE":case"STATUS_ERROR":case"STATUS_UNKNOWN":break;case"STATUS_REJECTED":return n=b("error-flash"),i?i(n):P();case"STATUS_NOT_FOUND":case"STATUS_UNSUPPORTED":default:return n=b("error-flash"),i?i(n):C(n)}await new Promise(t=>setTimeout(t,o)),S(I)},"poll")(0)}e(c,"pollMobileAuthRequestStatus");async function m(l,E,i,d){try{await c(l.getAttribute("data-poll-url"),E,i,d)}catch{const I=b("error-flash");return C(I)}}e(m,"initializeMobileAuthRequestStatusPoll"),(0,x.N7)(".js-poll-github-mobile-two-factor-authenticate",function(l){m(l)}),(0,x.N7)(".js-poll-github-mobile-verified-device-authenticate",function(l){m(l)}),(0,x.N7)(".js-poll-github-mobile-two-factor-password-reset-authenticate",function(l){m(l)})},5642:(W,R,T)=>{T.d(R,{T:()=>x,k:()=>o});var v=T(8433);function x(){return(0,v.Zh)()?"supported":"unsupported"}e(x,"webauthnSupportLevel");async function o(){return await window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable()?"supported":"unsupported"}e(o,"iuvpaaSupportLevel")},94315:(W,R,T)=>{var v=T(64926),x=T(64463);(0,x.N7)(".js-transform-notice",{constructor:HTMLElement,add(b){const c=(0,v.$1)("org_transform_notice");for(const m of c){const l=document.createElement("span");try{l.textContent=atob(decodeURIComponent(m.value)),(0,v.kT)(m.key),b.appendChild(l),b.hidden=!1}catch{}return}}});var o=T(45075),a=T(65935),h=T(56238);function j(){document.body.classList.add("is-sending"),document.body.classList.remove("is-sent","is-not-sent")}e(j,"smsSending");function f(){document.body.classList.add("is-sent"),document.body.classList.remove("is-sending")}e(f,"smsSuccess");function u(b){b&&(document.querySelector(".js-sms-error").textContent=b),document.body.classList.add("is-not-sent"),document.body.classList.remove("is-sending")}e(u,"smsError"),(0,a.AC)(".js-send-auth-code",async(b,c)=>{j();let m;try{m=await c.text()}catch(l){u(l.response.text)}m&&f()}),(0,x.N7)(".js-two-factor-sms-fallback-button",function(b){b.addEventListener("toggle",function(c){const m=c.currentTarget;for(const l of m.querySelectorAll(".flash"))l instanceof HTMLElement&&(l.hidden=!0);m.querySelector(".js-configure-sms-fallback").hidden=!1,m.querySelector(".js-verify-sms-fallback").hidden=!0})}),(0,a.AC)(".js-two-factor-set-sms-fallback",async(b,c)=>{let m;try{m=await c.text()}catch(l){const E=b.querySelector(".js-configure-sms-fallback"),i=b.querySelector(".js-verify-sms-fallback"),S=(E.hidden?i:E).querySelector(".flash");switch(l.response.status){case 422:case 429:S.textContent=l.response.text,S.hidden=!1}}if(m)switch(m.status){case 200:case 201:window.location.reload();break;case 202:b.querySelector(".js-configure-sms-fallback").hidden=!0,b.querySelector(".js-verify-sms-fallback").hidden=!1,b.querySelector(".js-fallback-otp").focus();break}}),(0,o.q6)(".js-verification-code-input-auto-submit",function(b){const c=b.currentTarget,m=c.pattern||"[0-9]{6}";new RegExp(`^(${m})$`).test(c.value)&&(0,h.Bt)(c.form)});var w=T(93097),P=T(5642);(0,x.N7)(".js-webauthn-support",{constructor:HTMLInputElement,add(b){(0,h.Se)(b,(0,P.T)())}}),(0,x.N7)(".js-webauthn-iuvpaa-support",{constructor:HTMLInputElement,async add(b){(0,h.Se)(b,await(0,P.k)())}});var C=T(72722);(0,o.q6)(".js-login-field",function(b){const c=b.target,m=c.closest("form");if(!m)return;const l=m.querySelector(".js-password-field"),E=m.querySelector(".js-sign-in-button");if(!l||!E)return;const i=c.value,d=["pj_nitin","up_the_irons"];e(()=>!(0,C.k)(),"emuLoginExperienceAvailable")()&&i.includes("_")&&!i.includes("@")&&!d.includes(i)&&!i.endsWith("_admin")&&!(E.getAttribute("development")&&i.endsWith("_fab"))?(l.setAttribute("disabled","true"),E.value=E.getAttribute("data-sso-label")||" "):(l.removeAttribute("disabled"),E.value=E.getAttribute("data-signin-label")||" ")})},15205:(W,R,T)=>{T.d(R,{Z:()=>x});function v(...o){return JSON.stringify(o,(a,h)=>typeof h=="object"?h:String(h))}e(v,"defaultHash");function x(o,a={}){const{hash:h=v,cache:j=new Map}=a;return function(...f){const u=h.apply(this,f);if(j.has(u))return j.get(u);let w=o.apply(this,f);return w instanceof Promise&&(w=w.catch(P=>{throw j.delete(u),P})),j.set(u,w),w}}e(x,"memoize")},69567:(W,R,T)=>{T.d(R,{sV:()=>j,GZ:()=>C,R:()=>B,AQ:()=>b,W_:()=>m,Al:()=>c,XK:()=>E});function*v(n){let t="",s=0,_=!1;for(let k=0;k<n.length;k+=1)n[k]==="{"&&n[k+1]==="{"&&n[k-1]!=="\\"&&!_?(_=!0,t&&(yield{type:"string",start:s,end:k,value:t}),t="{{",s=k,k+=2):n[k]==="}"&&n[k+1]==="}"&&n[k-1]!=="\\"&&_&&(_=!1,yield{type:"part",start:s,end:k+2,value:t.slice(2).trim()},t="",k+=2,s=k),t+=n[k]||"";t&&(yield{type:"string",start:s,end:n.length,value:t})}e(v,"parse");var x=function(n,t,s){if(!t.has(n))throw new TypeError("attempted to set private field on non-instance");return t.set(n,s),s},o=function(n,t){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return t.get(n)},a,h;class j{constructor(t,s){this.expression=s,a.set(this,void 0),h.set(this,""),x(this,a,t),o(this,a).updateParent("")}get attributeName(){return o(this,a).attr.name}get attributeNamespace(){return o(this,a).attr.namespaceURI}get value(){return o(this,h)}set value(t){x(this,h,t||""),o(this,a).updateParent(t)}get element(){return o(this,a).element}get booleanValue(){return o(this,a).booleanValue}set booleanValue(t){o(this,a).booleanValue=t}}e(j,"AttributeTemplatePart"),a=new WeakMap,h=new WeakMap;class f{constructor(t,s){this.element=t,this.attr=s,this.partList=[]}get booleanValue(){return this.element.hasAttributeNS(this.attr.namespaceURI,this.attr.name)}set booleanValue(t){if(this.partList.length!==1)throw new DOMException("Operation not supported","NotSupportedError");this.partList[0].value=t?"":null}append(t){this.partList.push(t)}updateParent(t){if(this.partList.length===1&&t===null)this.element.removeAttributeNS(this.attr.namespaceURI,this.attr.name);else{const s=this.partList.map(_=>typeof _=="string"?_:_.value).join("");this.element.setAttributeNS(this.attr.namespaceURI,this.attr.name,s)}}}e(f,"AttributeValueSetter");var u=function(n,t,s){if(!t.has(n))throw new TypeError("attempted to set private field on non-instance");return t.set(n,s),s},w=function(n,t){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return t.get(n)},P;class C{constructor(t,s){this.expression=s,P.set(this,void 0),u(this,P,[t]),t.textContent=""}get value(){return w(this,P).map(t=>t.textContent).join("")}set value(t){this.replace(t)}get previousSibling(){return w(this,P)[0].previousSibling}get nextSibling(){return w(this,P)[w(this,P).length-1].nextSibling}replace(...t){const s=t.map(_=>typeof _=="string"?new Text(_):_);s.length||s.push(new Text("")),w(this,P)[0].before(...s);for(const _ of w(this,P))_.remove();u(this,P,s)}}e(C,"NodeTemplatePart"),P=new WeakMap;function b(n){return{createCallback(t,s,_){this.processCallback(t,s,_)},processCallback(t,s,_){var k;if(!(typeof _!="object"||!_)){for(const F of s)if(F.expression in _){const r=(k=_[F.expression])!==null&&k!==void 0?k:"";n(F,r)}}}}}e(b,"createProcessor");function c(n,t){n.value=String(t)}e(c,"processPropertyIdentity");function m(n,t){return typeof t=="boolean"&&n instanceof j&&typeof n.element[n.attributeName]=="boolean"?(n.booleanValue=t,!0):!1}e(m,"processBooleanAttribute");const l=b(c),E=b((n,t)=>{m(n,t)||c(n,t)});var i=function(n,t,s){if(!t.has(n))throw new TypeError("attempted to set private field on non-instance");return t.set(n,s),s},d=function(n,t){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return t.get(n)},S,I;function*M(n){const t=n.ownerDocument.createTreeWalker(n,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1);let s;for(;s=t.nextNode();)if(s instanceof Element&&s.hasAttributes())for(let _=0;_<s.attributes.length;_+=1){const k=s.attributes.item(_);if(k&&k.value.includes("{{")){const F=new f(s,k);for(const r of v(k.value))if(r.type==="string")F.append(r.value);else{const p=new j(F,r.value);F.append(p),yield p}}}else if(s instanceof Text&&s.textContent&&s.textContent.includes("{{"))for(const _ of v(s.textContent)){_.end<s.textContent.length&&s.splitText(_.end),_.type==="part"&&(yield new C(s,_.value));break}}e(M,"collectParts");class B extends DocumentFragment{constructor(t,s,_=l){var k,F;super(),S.set(this,void 0),I.set(this,void 0),Object.getPrototypeOf(this!==B.prototype)&&Object.setPrototypeOf(this,B.prototype),this.appendChild(t.content.cloneNode(!0)),i(this,I,Array.from(M(this))),i(this,S,_),(F=(k=d(this,S)).createCallback)===null||F===void 0||F.call(k,this,d(this,I),s)}update(t){d(this,S).processCallback(this,d(this,I),t)}}e(B,"TemplateInstance"),S=new WeakMap,I=new WeakMap},8433:(W,R,T)=>{T.d(R,{JO:()=>E,U2:()=>B,Ue:()=>M,Zh:()=>I,wz:()=>d});function v(n){const t="==".slice(0,(4-n.length%4)%4),s=n.replace(/-/g,"+").replace(/_/g,"/")+t,_=atob(s),k=new ArrayBuffer(_.length),F=new Uint8Array(k);for(let r=0;r<_.length;r++)F[r]=_.charCodeAt(r);return k}e(v,"base64urlToBuffer");function x(n){const t=new Uint8Array(n);let s="";for(const F of t)s+=String.fromCharCode(F);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}e(x,"bufferToBase64url");var o="copy",a="convert";function h(n,t,s){if(t===o)return s;if(t===a)return n(s);if(t instanceof Array)return s.map(_=>h(n,t[0],_));if(t instanceof Object){const _={};for(const[k,F]of Object.entries(t)){if(F.derive){const r=F.derive(s);r!==void 0&&(s[k]=r)}if(!(k in s)){if(F.required)throw new Error(`Missing key: ${k}`);continue}if(s[k]==null){_[k]=null;continue}_[k]=h(n,F.schema,s[k])}return _}}e(h,"convert");function j(n,t){return{required:!0,schema:n,derive:t}}e(j,"derived");function f(n){return{required:!0,schema:n}}e(f,"required");function u(n){return{required:!1,schema:n}}e(u,"optional");var w={type:f(o),id:f(a),transports:u(o)},P={appid:u(o),appidExclude:u(o),credProps:u(o)},C={appid:u(o),appidExclude:u(o),credProps:u(o)},b={publicKey:f({rp:f(o),user:f({id:f(a),name:f(o),displayName:f(o)}),challenge:f(a),pubKeyCredParams:f(o),timeout:u(o),excludeCredentials:u([w]),authenticatorSelection:u(o),attestation:u(o),extensions:u(P)}),signal:u(o)},c={type:f(o),id:f(o),rawId:f(a),authenticatorAttachment:u(o),response:f({clientDataJSON:f(a),attestationObject:f(a),transports:j(o,n=>{var t;return((t=n.getTransports)==null?void 0:t.call(n))||[]})}),clientExtensionResults:j(C,n=>n.getClientExtensionResults())},m={mediation:u(o),publicKey:f({challenge:f(a),timeout:u(o),rpId:u(o),allowCredentials:u([w]),userVerification:u(o),extensions:u(P)}),signal:u(o)},l={type:f(o),id:f(o),rawId:f(a),authenticatorAttachment:u(o),response:f({clientDataJSON:f(a),authenticatorData:f(a),signature:f(a),userHandle:f(a)}),clientExtensionResults:j(C,n=>n.getClientExtensionResults())};function E(n){return h(v,b,n)}e(E,"createRequestFromJSON");function i(n){return h(x,c,n)}e(i,"createResponseToJSON");function d(n){return h(v,m,n)}e(d,"getRequestFromJSON");function S(n){return h(x,l,n)}e(S,"getResponseToJSON");function I(){return!!(navigator.credentials&&navigator.credentials.create&&navigator.credentials.get&&window.PublicKeyCredential)}e(I,"supported");async function M(n){const t=await navigator.credentials.create(n);return t.toJSON=()=>i(t),t}e(M,"create");async function B(n){const t=await navigator.credentials.get(n);return t.toJSON=()=>S(t),t}e(B,"get")}},W=>{var R=e(v=>W(W.s=v),"__webpack_exec__");W.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js"],()=>R(94315));var T=W.O()}]);})();

//# sourceMappingURL=sessions-7ce90ea0a888.js.map