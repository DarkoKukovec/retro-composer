(this["webpackJsonpretro-composer"]=this["webpackJsonpretro-composer"]||[]).push([[0],{23:function(e,n,t){e.exports=t.p+"static/media/logo.5ee23392.svg"},26:function(e,n,t){e.exports=t(39)},39:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t(2),r=t(0),c=t(21),i=t.n(c),s=t(13),l=t(4),u=t(8),f=t(11),p=t(9),d=t(22);function m(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: 600;\n  text-decoration: none;\n"]);return m=function(){return e},e}function g(){var e=Object(a.a)(["\n  font-size: 12px;\n  text-align: center;\n  box-shadow: 0 0 5px #000;\n  padding: 2px 0 4px;\n"]);return g=function(){return e},e}var b=Object(o.a)(g()),v=Object(o.a)(m(),"#D9EFF9"),h=function(){return r.createElement("div",{className:b},"Made with"," ",r.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," ","by"," ",r.createElement("a",{className:v,rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/DarkoKukovec"},"@DarkoKukovec"))},x=t(23),O=t.n(x);function j(){var e=Object(a.a)(["\n  height: 32px;\n"]);return j=function(){return e},e}function E(){var e=Object(a.a)(["\n  height: 32px;\n  box-shadow: 0 0 5px #000;\n  padding: 7px 16px;\n  text-align: center;\n"]);return E=function(){return e},e}var k=Object(o.a)(E()),y=Object(o.a)(j()),w=function(){return r.createElement("header",{className:k},r.createElement("img",{className:y,src:O.a,alt:"Retro Composer"}))},S=/(\d+)(\.)?(#)?([abcdefg])([123])|(\d+)(\.)?(-)/;function N(e){return e.split(/\s+/g).map((function(e){return e.match(S)})).filter((function(e){return null!==e})).map((function(e){var n=Object(l.a)(e,9),t=(n[0],n[1]),a=n[2],o=n[3],r=n[4],c=n[5],i=n[6],s=n[7],u=n[8];return t?{duration:parseInt(t,10),extendedLength:Boolean(a),sharp:Boolean(o),tone:r,octave:parseInt(c,10)}:{duration:parseInt(i,10),extendedLength:Boolean(s),rest:Boolean(u)}}))}function T(e){return e.map((function(e){return"tone"in e?"".concat(e.duration).concat(e.extendedLength?".":"").concat(e.sharp?"#":"").concat(e.tone).concat(e.octave):"".concat(e.duration).concat(e.extendedLength?".":"","-")})).join(" ")}function C(){var e=Object(a.a)(["\n  width: 100%;\n  height: 200px;\n  background: ",";\n  z-index: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 8px;\n  padding: 8px 0;\n\n  button {\n    background: linear-gradient(#f0f2e8, #787b7c);\n    color: #000;\n    border-radius: 8px;\n    font-size: 28px;\n    font-family: Quicksand, sans-serif;\n\n    &:hover {\n      background: linear-gradient(#c0c2c8, #787b7c);\n      color: #000;\n    }\n\n    &:active {\n      background: linear-gradient(#787b7c, #f0f2e8);\n      color: #000;\n    }\n  }\n"]);return C=function(){return e},e}var P,V=[32,16,8,4,2,1],D={1:"c",2:"d",3:"e",4:"f",5:"g",6:"a",7:"b"},L=Object(o.a)(C(),"#2B303D");!function(e){e[e.Zero=0]="Zero",e[e.One=1]="One",e[e.Two=2]="Two",e[e.Three=3]="Three",e[e.Four=4]="Four",e[e.Five=5]="Five",e[e.Six=6]="Six",e[e.Seven=7]="Seven",e[e.Eight=8]="Eight",e[e.Nine=9]="Nine",e[e.Star=10]="Star",e[e.Hash=11]="Hash",e[e.Left=12]="Left",e[e.Right=13]="Right",e[e.C=14]="C"}(P||(P={}));var I,z=function(e){var n=e.keyVal,t=e.children,a=e.onPress,o=r.useState(),c=Object(l.a)(o,2),i=c[0],s=c[1],u=function(){clearTimeout(i),s(null)},f=function(){a(n,!0),s(null)};return r.createElement("button",{type:"button",onMouseDown:function(){s(setTimeout(f,400))},onMouseUp:function(){i&&(clearTimeout(i),s(null),a(n,!1))},onMouseOut:u,onBlur:u,onMouseLeave:u},t)},A={"*":P.Star,"#":P.Hash},B=[],F=null,M=function(e){var n=e.notes,t=e.activeIndex,a=e.setActiveNote,o=e.onNotesChange;B.length&&(F&&(clearTimeout(F),F=null),F=setTimeout((function(){c(B.shift(),!1)}),100));var c=function e(r,c){var i;if(r===P.Star&&c)return B=(null===(i=prompt())||void 0===i?void 0:i.split(" ").map((function(e){return A[e]||parseInt(e,10)})))||[],console.log(B),void e(B.shift(),!1);var l=n[t];if(r===P.Left)t>-1&&a(t-1);else if(r===P.Right)t<n.length&&a(t+1);else if(r===P.C){if(t===n.length)o(T(n.slice(0,-1))),a(t-1);else if(-1!==t){var f=n.slice();f.splice(t,1),o(T(f))}}else if(r===P.Eight){if(l){var p=n.slice(),d=V.indexOf(l.duration);p.splice(t,1,Object(u.a)({},l,{duration:V[Math.max(0,d-1)]})),o(T(p))}}else if(r===P.Nine){if(l){var m=n.slice(),g=V.indexOf(l.duration);m.splice(t,1,Object(u.a)({},l,{duration:V[Math.min(V.length-1,g+1)]})),o(T(m))}}else if(r===P.Hash){if(l&&"sharp"in l&&"b"!==l.tone&&"e"!==l.tone){var b=n.slice();b.splice(t,1,Object(u.a)({},l,{sharp:!l.sharp})),o(T(b))}}else if(r===P.Star){if(l&&"sharp"in l){var v=n.slice();v.splice(t,1,Object(u.a)({},l,{octave:(l.octave+3)%3+1})),o(T(v))}}else{var h={duration:8};if(r===P.Zero?Object.assign(h,{rest:!0}):(console.log(r,D[r]),Object.assign(h,{extendedLength:c,octave:l&&"octave"in l?l.octave:2,tone:D[r]})),-1===t)o(T([h].concat(Object(s.a)(n)))),a(0);else if(l){var x=n.slice();x.splice(t+1,0,h),o(T(x)),a(t+1)}else o(T([].concat(Object(s.a)(n),[h])))}console.log(r,c)};return r.createElement("div",{className:L},r.createElement(z,{keyVal:P.Left,onPress:c},"<-"),r.createElement(z,{keyVal:P.C,onPress:c},"C"),r.createElement(z,{keyVal:P.Right,onPress:c},"->"),r.createElement(z,{keyVal:P.One,onPress:c},"1"),r.createElement(z,{keyVal:P.Two,onPress:c},"2"),r.createElement(z,{keyVal:P.Three,onPress:c},"3"),r.createElement(z,{keyVal:P.Four,onPress:c},"4"),r.createElement(z,{keyVal:P.Five,onPress:c},"5"),r.createElement(z,{keyVal:P.Six,onPress:c},"6"),r.createElement(z,{keyVal:P.Seven,onPress:c},"7"),r.createElement(z,{keyVal:P.Eight,onPress:c},"8"),r.createElement(z,{keyVal:P.Nine,onPress:c},"9"),r.createElement(z,{keyVal:P.Star,onPress:c},"*"),r.createElement(z,{keyVal:P.Zero,onPress:c},"0"),r.createElement(z,{keyVal:P.Hash,onPress:c},"#"))},R=t(33);function W(){var e=Object(a.a)(["\n  width: 50px;\n"]);return W=function(){return e},e}function H(){var e=Object(a.a)(["\n  flex: 1;\n"]);return H=function(){return e},e}function U(){var e=Object(a.a)(["\n  font-size: 20px;\n  padding: 8px 4px;\n  display: flex;\n  line-height: 24px;\n"]);return U=function(){return e},e}var J=Object(o.a)(U()),Z=Object(o.a)(H()),_=Object(o.a)(W()),K=function(e){var n=e.notes,t=e.tempo,a=e.onTempoChange,o=e.setActiveNote,c=r.useMemo((function(){return n.length?function(e,n,t){R.Transport.bpm.value=n,I&&I.stop();var a=(new R.Synth).toMaster(),o=0,r=[];e.forEach((function(e,n){var t=R.Time("".concat(e.duration,"n"));if("tone"in e){var a="".concat(e.tone.toUpperCase()).concat(e.sharp?"#":"").concat(2+e.octave);r.push([o,[a,t,n]])}else r.push([o,["",t,n]]);o+=t*(e.extendedLength?1.5:1)}));var c=I=new R.Part((function(e,n){var o=Object(l.a)(n,3),r=o[0],c=o[1],i=o[2];r&&a.triggerAttackRelease(r,c,e),t(i)}),r);return c.loop=!1,c.playbackRate=1,R.Transport.start(),c}(n,t,o):null}),[n,t,o]);r.useEffect((function(){return function(){c&&c.stop()}}),[c]);return r.createElement("div",{className:J},r.createElement("button",{type:"button",onClick:function(){c&&(c.stop(),c.start())}},"Play"),r.createElement("button",{type:"button",onClick:function(){c&&c.stop()}},"Stop"),r.createElement("div",{className:Z}),"Tempo:",r.createElement("input",{className:_,type:"number",value:t,onChange:function(e){var n=parseInt(e.target.value,10)||100;a(n)}}))};function Q(){var e=Object(a.a)(["\n  background: ",";\n  outline: 1px solid ",";\n  color: ",";\n  display: inline-block;\n  height: 1em;\n\n  &:empty {\n    margin-bottom: -4px;\n  }\n"]);return Q=function(){return e},e}function $(){var e=Object(a.a)(["\n  flex: 1;\n  font-size: 24px;\n  text-align: center;\n"]);return $=function(){return e},e}function q(){var e=Object(a.a)(["\n  display: flex;\n  padding: 8px 4px 0;\n  line-height: 24px;\n"]);return q=function(){return e},e}function G(){var e=Object(a.a)(["\n  width: calc(100% - 32px);\n  font-size: 24px;\n  padding: 16px;\n  flex: 1;\n"]);return G=function(){return e},e}function X(){var e=Object(a.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return X=function(){return e},e}var Y=Object(o.a)(X()),ee=Object(o.a)(G()),ne=Object(o.a)(q()),te=Object(o.a)($()),ae=Object(o.a)(Q(),"#242D23","#242D23","#79a682"),oe=function(e){var n=e.song,t=e.onSave,a=e.history,o=r.useState(T(n.notes||[])),c=Object(l.a)(o,2),i=c[0],s=c[1],u=r.useState(-1),f=Object(l.a)(u,2),d=f[0],m=f[1],g=r.useState(n.notes||[]),b=Object(l.a)(g,2),v=b[0],h=b[1],x=r.useState(n.name||""),O=Object(l.a)(x,2),j=O[0],E=O[1],k=r.useState(n.tempo||100),y=Object(l.a)(k,2),w=y[0],S=y[1],C=function(e){s(e),h(N(e))},P=Object(p.e)(),V=r.useCallback((function(e){m(e)}),[m]),D=i.split(/\s+/g).map((function(e,n){return'<span class="'.concat(n===d?ae:"",'">').concat(e,"</span>")})).join(" ");return D='<span class="'.concat(-1===d?ae:"",'"></span>').concat(D,'<span class="').concat(d===v.length?ae:"",'"></span>'),r.createElement("div",{className:Y},r.createElement("div",{className:ne},r.createElement("button",{type:"button",onClick:function(){a.goBack()}},"Back"),r.createElement("input",{className:te,value:j,onChange:function(e){return E(e.target.value)},placeholder:"Song name"}),r.createElement("button",{type:"button",onClick:function(){var e=t(n,{name:j,tempo:w,notes:v});e!==n.id&&P.replace("/".concat(e))}},"Save")),r.createElement("div",{contentEditable:!0,className:ee,onInput:function(e){return C(e.target.innerText)},dangerouslySetInnerHTML:{__html:D}}),r.createElement(K,{notes:v,onTempoChange:function(e){return S(e)},tempo:w,setActiveNote:V}),r.createElement(M,{activeIndex:d,setActiveNote:V,notes:v,onNotesChange:C}))};function re(){var e=Object(a.a)(["\n  font-size: 24px;\n  cursor: pointer;\n  padding: 6px;\n  text-decoration: none;\n  display: block;\n  color: ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(a.a)(["\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n"]);return ce=function(){return e},e}var ie=Object(o.a)(ce()),se=Object(o.a)(re(),"#242D23","#242D23","#79a682"),le=function(e){var n=e.songs;return r.createElement("ul",{className:ie},n.map((function(e){return r.createElement("li",{key:e.name},r.createElement(f.b,{className:se,to:"/".concat(e.id)},e.name))})),r.createElement("li",null,r.createElement(f.b,{className:se,to:"/new"},"New song")))};function ue(){var e=Object(a.a)(["\n  flex: 1;\n  background: ",";\n  color: ",";\n  font-size: 20px;\n  font-family: VT323, monospace;\n"]);return ue=function(){return e},e}function fe(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);return fe=function(){return e},e}var pe=Object(o.a)(fe()),de=Object(o.a)(ue(),"#79a682","#242D23"),me=JSON.parse(localStorage.getItem("saved-songs")||"null"),ge=me?me.map((function(e){return Object(u.a)({},e,{notes:e.notes.map((function(e){return"tone"in e?Object(u.a)({},e,{tone:e.tone[0]}):e}))})})):[{id:"sample-1",name:"Europe - The final countdown",tempo:125,notes:"4- 8- 16b2 16a2 4b2 4e2 4- 8- 16c3 16b2 8c3 8b2 4a2 4- 8- 16c3 16b2 4c3 4e2 4- 8- 16a2 16g2 8a2 8g2 8#f2 8a2 4g2 8- 16#f2 16g2 4a2 8- 16g2 16a2 8b2 8a2 8g2 8#f2 4e2 4c3 2b2 4- 16b2 16c3 16b2 16a2 1b2"},{id:"sample-2",name:"A-ha - Take on me",tempo:100,notes:"8- 16#a1 16#a1 16#a1 8#f1 8#d1 8#g1 8#g1 16#g1 16c2 16c2 16#c2 16#d2 16#c2 16#c2 16#c2 8#g1 8#f1 8#a1 8#a1 16#a1 16#g1 16#g1 16#a1 16#g1 16#a1 16#a1 16#a1 8#f1 8#d1 8#g1 8#g1 16#g1 16c2 16c2 16#c2 16#d2 16#c2 16#c2 16#c2 8#g1 8#f1 8#a1 8#a1"}].map((function(e){return Object(u.a)({},e,{notes:N(e.notes)})})),be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function he(){var e=Object(a.a)(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    background: ",";\n  }\n\n  #root {\n    height: 100%;\n    font-family: Quicksand, sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    color: ",";\n  }\n\n  button {\n    appearence: none;\n    border: 1px solid ",";\n    background: transparent;\n    font-family: VT323, monospace;\n    font-size: 20px;\n    margin: 0 4px;\n    outline: none;\n    color: ",";\n    cursor: pointer;\n  \n    &:hover {\n      background: ",";\n      color: ",";\n    }\n  }\n\n  input,\n  [contenteditable] {\n    border: none;\n    background: transparent;\n    font-family: VT323, monospace;\n    font-size: 20px;\n    color: ",";\n    outline: none;\n  }\n"]);return he=function(){return e},e}Object(o.b)(he(),"#2B303D","#D9EFF9","#242D23","#242D23","#242D23","#79a682","#242D23"),i.a.render(r.createElement((function(){var e=r.useState(ge),n=Object(l.a)(e,2),t=n[0],a=n[1],o=function(e,n){if(t.includes(e))return Object.assign(e,n),e.id;var o=Object(d.v1)(),r=[].concat(Object(s.a)(t),[Object(u.a)({name:"Undefined"},n,{id:o})]);return localStorage.setItem("saved-songs",JSON.stringify(r)),a(r),o};return r.createElement("div",{className:pe},r.createElement(w,null),r.createElement("main",{className:de},r.createElement(f.a,null,r.createElement(p.a,{path:"/",exact:!0,render:function(){return r.createElement(le,{songs:t})}}),r.createElement(p.a,{path:"/:id",render:function(e){var n=t.find((function(n){return n.id===e.match.params.id}))||{};return r.createElement(oe,Object.assign({},e,{song:n,onSave:o}))}}))),r.createElement(h,null))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");be?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(n,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.439e767f.chunk.js.map