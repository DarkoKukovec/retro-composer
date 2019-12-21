(this["webpackJsonpretro-composer"]=this["webpackJsonpretro-composer"]||[]).push([[0],{22:function(n,e,t){n.exports=t.p+"static/media/logo.5ee23392.svg"},26:function(n,e,t){n.exports=t(39)},39:function(n,e,t){"use strict";t.r(e);var a=t(1),o=t(2),r=t(0),c=t(20),i=t.n(c),u=t(25),s=t(5),l=t(15),f=t(10),p=t(8),d=t(21);function m(){var n=Object(a.a)(["\n  color: ",";\n  font-weight: 600;\n  text-decoration: none;\n"]);return m=function(){return n},n}function g(){var n=Object(a.a)(["\n  font-size: 12px;\n  text-align: center;\n  box-shadow: 0 0 5px #000;\n  padding: 2px 0 4px;\n"]);return g=function(){return n},n}var b=Object(o.a)(g()),v=Object(o.a)(m(),"#D9EFF9"),h=function(){return r.createElement("div",{className:b},"Made with"," ",r.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," ","by"," ",r.createElement("a",{className:v,rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/DarkoKukovec"},"@DarkoKukovec"))},x=t(22),j=t.n(x);function O(){var n=Object(a.a)(["\n  height: 32px;\n"]);return O=function(){return n},n}function E(){var n=Object(a.a)(["\n  height: 32px;\n  box-shadow: 0 0 5px #000;\n  padding: 7px 16px;\n  text-align: center;\n"]);return E=function(){return n},n}var w=Object(o.a)(E()),k=Object(o.a)(O()),y=function(){return r.createElement("header",{className:w},r.createElement("img",{className:k,src:j.a,alt:"Retro Composer"}))},N=/(\d+)(\.)?(#)?([abcdefg])([123])|(\d+)(\.)?(-)/;function S(n){return n.split(/\s+/g).map((function(n){return n.match(N)})).filter((function(n){return null!==n})).map((function(n){var e=Object(s.a)(n,9),t=(e[0],e[1]),a=e[2],o=e[3],r=e[4],c=e[5],i=e[6],u=e[7],l=e[8];return t?{duration:parseInt(t,10),extendedLength:Boolean(a),sharp:Boolean(o),tone:"".concat(r).concat(o||""),octave:parseInt(c,10)}:{duration:parseInt(i,10),extendedLength:Boolean(u),rest:Boolean(l)}}))}var T,C=t(33);function D(){var n=Object(a.a)(["\n  width: 50px;\n"]);return D=function(){return n},n}function z(){var n=Object(a.a)(["\n  flex: 1;\n"]);return z=function(){return n},n}function A(){var n=Object(a.a)(["\n  font-size: 20px;\n  padding: 8px 4px;\n  display: flex;\n  line-height: 24px;\n"]);return A=function(){return n},n}var B=Object(o.a)(A()),I=Object(o.a)(z()),L=Object(o.a)(D()),W=function(n){var e=n.notes,t=n.tempo,a=n.onTempoChange,o=n.setActiveNote,c=r.useMemo((function(){return e.length?function(n,e,t){C.Transport.bpm.value=e,T&&T.stop();var a=(new C.Synth).toMaster(),o=0,r=[];n.forEach((function(n,e){var t=C.Time("".concat(n.duration,"n"));if("tone"in n){var a="".concat(n.tone.toUpperCase()).concat(2+n.octave);r.push([o,[a,t,e]])}else r.push([o,["",t,e]]);o+=t*(n.extendedLength?1.5:1)}));var c=T=new C.Part((function(n,e){var o=Object(s.a)(e,3),r=o[0],c=o[1],i=o[2];r&&a.triggerAttackRelease(r,c,n),t(i)}),r);return c.loop=!1,c.playbackRate=1,C.Transport.start(),c}(e,t,o):null}),[e,t,o]);r.useEffect((function(){return function(){c&&c.stop()}}),[c]);return r.createElement("div",{className:B},r.createElement("button",{type:"button",onClick:function(){c&&(c.stop(),c.start())}},"Play"),r.createElement("button",{type:"button",onClick:function(){c&&c.stop()}},"Stop"),r.createElement("div",{className:I}),"Tempo:",r.createElement("input",{className:L,type:"number",value:t,onChange:function(n){var e=parseInt(n.target.value,10)||100;a(e)}}))};function R(){var n=Object(a.a)(["\n  background: ",";\n  outline: 1px solid ",";\n  color: ",";\n"]);return R=function(){return n},n}function U(){var n=Object(a.a)(["\n  flex: 1;\n  font-size: 24px;\n  text-align: center;\n"]);return U=function(){return n},n}function F(){var n=Object(a.a)(["\n  display: flex;\n  padding: 8px 4px 0;\n  line-height: 24px;\n"]);return F=function(){return n},n}function J(){var n=Object(a.a)(["\n  width: calc(100% - 32px);\n  font-size: 24px;\n  padding: 16px;\n  flex: 1;\n"]);return J=function(){return n},n}function M(){var n=Object(a.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return M=function(){return n},n}var P=Object(o.a)(M()),V=Object(o.a)(J()),_=Object(o.a)(F()),K=Object(o.a)(U()),H=Object(o.a)(R(),"#242D23","#242D23","#79a682"),Q=function(n){var e=n.song,t=n.onSave,a=n.history,o=r.useState(function(n){return n.map((function(n){return"tone"in n?"".concat(n.duration).concat(n.extendedLength?".":"").concat(n.sharp?"#":"").concat(n.tone.replace("#","")).concat(n.octave):"".concat(n.duration).concat(n.extendedLength?".":"","-")})).join(" ")}(e.notes||[])),c=Object(s.a)(o,2),i=c[0],u=c[1],l=r.useState(-1),f=Object(s.a)(l,2),d=f[0],m=f[1],g=r.useState(e.notes||[]),b=Object(s.a)(g,2),v=b[0],h=b[1],x=r.useState(e.name||""),j=Object(s.a)(x,2),O=j[0],E=j[1],w=r.useState(e.tempo||100),k=Object(s.a)(w,2),y=k[0],N=k[1],T=Object(p.e)(),C=r.useCallback((function(n){m(n)}),[m]),D=i.split(/\s+/g).map((function(n,e){return'<span class="'.concat(e===d?H:"",'">').concat(n,"</span>")})).join(" ");return r.createElement("div",{className:P},r.createElement("div",{className:_},r.createElement("button",{type:"button",onClick:function(){a.goBack()}},"Back"),r.createElement("input",{className:K,value:O,onChange:function(n){return E(n.target.value)},placeholder:"Song name"}),r.createElement("button",{type:"button",onClick:function(){var n=t(e,{name:O,tempo:y,notes:v});n!==e.id&&T.replace("/".concat(n))}},"Save")),r.createElement("div",{contentEditable:!0,className:V,onInput:function(n){u(n.target.innerText),h(S(n.target.innerText))},dangerouslySetInnerHTML:{__html:D}}),r.createElement(W,{notes:v,onTempoChange:function(n){return N(n)},tempo:y,setActiveNote:C}))};function $(){var n=Object(a.a)(["\n  font-size: 24px;\n  cursor: pointer;\n  padding: 6px;\n  text-decoration: none;\n  display: block;\n  color: ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"]);return $=function(){return n},n}function q(){var n=Object(a.a)(["\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n"]);return q=function(){return n},n}var G=Object(o.a)(q()),X=Object(o.a)($(),"#242D23","#242D23","#79a682"),Y=function(n){var e=n.songs;return r.createElement("ul",{className:G},e.map((function(n){return r.createElement("li",{key:n.name},r.createElement(f.b,{className:X,to:"/".concat(n.id)},n.name))})),r.createElement("li",null,r.createElement(f.b,{className:X,to:"/new"},"New song")))};function Z(){var n=Object(a.a)(["\n  flex: 1;\n  background: ",";\n  color: ",";\n  font-size: 20px;\n  font-family: VT323, monospace;\n"]);return Z=function(){return n},n}function nn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);return nn=function(){return n},n}var en=Object(o.a)(nn()),tn=Object(o.a)(Z(),"#79a682","#242D23"),an=JSON.parse(localStorage.getItem("saved-songs")||"null")||[{id:"sample-1",name:"Europe - The final countdown",tempo:125,notes:"4- 8- 16b2 16a2 4b2 4e2 4- 8- 16c3 16b2 8c3 8b2 4a2 4- 8- 16c3 16b2 4c3 4e2 4- 8- 16a2 16g2 8a2 8g2 8#f2 8a2 4g2 8- 16#f2 16g2 4a2 8- 16g2 16a2 8b2 8a2 8g2 8#f2 4e2 4c3 2b2 4- 16b2 16c3 16b2 16a2 1b2"},{id:"sample-2",name:"A-ha - Take on me",tempo:100,notes:"8- 16#a1 16#a1 16#a1 8#f1 8#d1 8#g1 8#g1 16#g1 16c2 16c2 16#c2 16#d2 16#c2 16#c2 16#c2 8#g1 8#f1 8#a1 8#a1 16#a1 16#g1 16#g1 16#a1 16#g1 16#a1 16#a1 16#a1 8#f1 8#d1 8#g1 8#g1 16#g1 16c2 16c2 16#c2 16#d2 16#c2 16#c2 16#c2 8#g1 8#f1 8#a1 8#a1"}].map((function(n){return Object(l.a)({},n,{notes:S(n.notes)})})),on=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}function cn(){var n=Object(a.a)(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    background: ",";\n  }\n\n  #root {\n    height: 100%;\n    font-family: Quicksand, sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    color: ",";\n  }\n\n  button {\n    appearence: none;\n    border: 1px solid ",";\n    background: transparent;\n    font-family: VT323, monospace;\n    font-size: 20px;\n    margin: 0 4px;\n    outline: none;\n    color: ",";\n    cursor: pointer;\n  \n    &:hover {\n      background: ",";\n      color: ",";\n    }\n  }\n\n  input,\n  [contenteditable] {\n    border: none;\n    background: transparent;\n    font-family: VT323, monospace;\n    font-size: 20px;\n    color: ",";\n    outline: none;\n  }\n"]);return cn=function(){return n},n}Object(o.b)(cn(),"#2B303D","#D9EFF9","#242D23","#242D23","#242D23","#79a682","#242D23"),i.a.render(r.createElement((function(){var n=r.useState(an),e=Object(s.a)(n,2),t=e[0],a=e[1],o=function(n,e){if(t.includes(n))return Object.assign(n,e),n.id;var o=Object(d.v1)(),r=[].concat(Object(u.a)(t),[Object(l.a)({name:"Undefined"},e,{id:o})]);return localStorage.setItem("saved-songs",JSON.stringify(r)),a(r),o};return r.createElement("div",{className:en},r.createElement(y,null),r.createElement("main",{className:tn},r.createElement(f.a,null,r.createElement(p.a,{path:"/",exact:!0,render:function(){return r.createElement(Y,{songs:t})}}),r.createElement(p.a,{path:"/:id",render:function(n){var e=t.find((function(e){return e.id===n.match.params.id}))||{};return r.createElement(Q,Object.assign({},n,{song:e,onSave:o}))}}))),r.createElement(h,null))}),null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");on?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):rn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):rn(e,n)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.707b084f.chunk.js.map