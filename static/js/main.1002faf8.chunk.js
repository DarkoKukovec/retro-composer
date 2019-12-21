(this["webpackJsonpretro-composer"]=this["webpackJsonpretro-composer"]||[]).push([[0],{22:function(n,e,t){n.exports=t.p+"static/media/logo.0a217aa9.svg"},26:function(n,e,t){n.exports=t(39)},39:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(2),o=t(0),c=t(20),i=t.n(c),u=t(25),l=t(6),s=t(15),f=t(10),p=t(8),m=t(21);function d(){var n=Object(a.a)(["\n  color: ",";\n  font-weight: 600;\n  text-decoration: none;\n"]);return d=function(){return n},n}function b(){var n=Object(a.a)(["\n  font-size: 12px;\n  text-align: center;\n  box-shadow: 0 0 5px #000;\n  padding: 2px 0 4px;\n"]);return b=function(){return n},n}var g=Object(r.a)(b()),v=Object(r.a)(d(),"#D9EFF9"),h=function(){return o.createElement("div",{className:g},"Made with"," ",o.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," ","by"," ",o.createElement("a",{className:v,rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/DarkoKukovec"},"@DarkoKukovec"))},x=t(22),O=t.n(x);function j(){var n=Object(a.a)(["\n  height: 50px;\n"]);return j=function(){return n},n}function E(){var n=Object(a.a)(["\n  height: 50px;\n  box-shadow: 0 0 5px #000;\n  padding: 7px 16px;\n"]);return E=function(){return n},n}var k=Object(r.a)(E()),y=Object(r.a)(j()),w=function(){return o.createElement("header",{className:k},o.createElement("img",{className:y,src:O.a,alt:"Retro Composer"}))},N=/(\d+)(\.)?(#)?([abcdefg])([123])|(\d+)(\.)?(-)/;function S(n){return n.split(/\s+/g).map((function(n){return n.match(N)})).filter((function(n){return null!==n})).map((function(n){var e=Object(l.a)(n,9),t=(e[0],e[1]),a=e[2],r=e[3],o=e[4],c=e[5],i=e[6],u=e[7],s=e[8];return t?{duration:parseInt(t,10),extendedLength:Boolean(a),sharp:Boolean(r),tone:"".concat(o).concat(r||""),octave:parseInt(c,10)}:{duration:parseInt(i,10),extendedLength:Boolean(u),rest:Boolean(s)}}))}var D,B=t(33);function C(){var n=Object(a.a)(["\n  font-size: 20px;\n  padding: 4px;\n"]);return C=function(){return n},n}var T=Object(r.a)(C()),z=function(n){var e=n.notes,t=n.tempo,a=o.useMemo((function(){return e.length?function(n,e){B.Transport.bpm.value=e,D&&D.stop();var t=(new B.Synth).toMaster(),a=0,r=[];n.forEach((function(n){var e=B.Time("".concat(n.duration,"n"))*(n.extendedLength?1.5:1);if("tone"in n){var t="".concat(n.tone.toUpperCase()).concat(2+n.octave);r.push([a,[t,e]])}a+=e}));var o=D=new B.Part((function(n,e){var a=Object(l.a)(e,2),r=a[0],o=a[1];t.triggerAttackRelease(r,o,n)}),r);return o.loop=!1,o.playbackRate=1,B.Transport.start(),o}(e,t):null}),[e,t]);o.useEffect((function(){return function(){a&&a.stop()}}),[a]);return o.createElement("div",{className:T},o.createElement("button",{type:"button",onClick:function(){a&&(a.stop(),a.start())}},"Play"),o.createElement("button",{type:"button",onClick:function(){a&&a.stop()}},"Stop"))};function I(){var n=Object(a.a)(["\n  flex: 1;\n"]);return I=function(){return n},n}function L(){var n=Object(a.a)(["\n  display: flex;\n  padding: 8px 4px 0;\n"]);return L=function(){return n},n}function F(){var n=Object(a.a)(["\n  width: calc(100% - 32px);\n  font-size: 24px;\n  padding: 16px;\n  flex: 1;\n"]);return F=function(){return n},n}function J(){var n=Object(a.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return J=function(){return n},n}var V=Object(r.a)(J()),M=Object(r.a)(F()),R=Object(r.a)(L()),A=Object(r.a)(I()),K=function(n){var e=n.song,t=n.onSave,a=n.history,r=o.useState(e.notes||[]),c=Object(l.a)(r,2),i=c[0],u=c[1],s=o.useState(e.name||""),f=Object(l.a)(s,2),m=f[0],d=f[1],b=o.useState(e.tempo||100),g=Object(l.a)(b,2),v=g[0],h=g[1],x=Object(p.e)(),O=(e.notes||[]).map((function(n){return"tone"in n?"".concat(n.duration).concat(n.extendedLength?".":"").concat(n.sharp?"#":"").concat(n.tone.replace("#","")).concat(n.octave):"".concat(n.duration).concat(n.extendedLength?".":"","-")})).join(" ");return o.createElement("div",{className:V},o.createElement("div",{className:R},o.createElement("button",{type:"button",onClick:function(){a.goBack()}},"Back"),o.createElement("input",{className:A,value:m,onChange:function(n){return d(n.target.value)},placeholder:"Song name"}),"Tempo: ",o.createElement("input",{type:"number",value:v,onChange:function(n){return h(parseInt(n.target.value,10)||100)}}),o.createElement("button",{type:"button",onClick:function(){var n=t(e,{name:m,tempo:v,notes:i});n!==e.id&&x.replace("/".concat(n))}},"Save")),o.createElement("textarea",{className:M,defaultValue:O,onChange:function(n){return u(S(n.target.value))}}),o.createElement(z,{notes:i,tempo:v}))};function P(){var n=Object(a.a)(["\n  font-size: 24px;\n  cursor: pointer;\n  padding: 6px;\n  text-decoration: none;\n  display: block;\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"]);return P=function(){return n},n}function U(){var n=Object(a.a)(["\n  margin: 0;\n  padding: 4px;\n  list-style: none;\n"]);return U=function(){return n},n}var W=Object(r.a)(U()),Q=Object(r.a)(P(),"#242D23","#79a682"),$=function(n){var e=n.songs;return o.createElement("ul",{className:W},e.map((function(n){return o.createElement("li",{key:n.name},o.createElement(f.b,{className:Q,to:"/".concat(n.id)},n.name))})),o.createElement("li",null,o.createElement(f.b,{className:Q,to:"/new"},"New song")))};function _(){var n=Object(a.a)(["\n  flex: 1;\n  background: ",";\n  color: ",";\n  font-size: 20px;\n  font-family: VT323, monospace;\n"]);return _=function(){return n},n}function q(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);return q=function(){return n},n}var G=Object(r.a)(q()),H=Object(r.a)(_(),"#79a682","#242D23"),X=JSON.parse(localStorage.getItem("saved-songs")||"null")||[{id:"sample-1",name:"Europe - The final countdown",tempo:125,notes:"4- 8- 16b2 16a2 4b2 4e2 4- 8- 16c3 16b2 8c3 8b2 4a2 4- 8- 16c3 16b2 4c3 4e2 4- 8- 16a2 16g2 8a2 8g2 8#f2 8a2 4g2 8- 16#f2 16g2 4a2 8- 16g2 16a2 8b2 8a2 8g2 8#f2 4e2 4c3 2b2 4- 16b2 16c3 16b2 16a2 1b2"},{id:"sample-2",name:"A-ha - Take on me",tempo:100,notes:"8- 16#a1 16#a1 16#a1 8#f1 8#d1 8#g1 8#g1 16#g1 16c2 16c2 16#c2 16#d2 16#c2 16#c2 16#c2 8#g1 8#f1 8#a1 8#a1 16#a1 16#g1 16#g1 16#a1 16#g1 16#a1 16#a1 16#a1 8#f1 8#d1 8#g1 8#g1 16#g1 16c2 16c2 16#c2 16#d2 16#c2 16#c2 16#c2 8#g1 8#f1 8#a1 8#a1"}].map((function(n){return Object(s.a)({},n,{notes:S(n.notes)})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(){var n=Object(a.a)(["\n  html, body {\n    margin: 0;\n    height: 100%;\n    background: ",";\n  }\n\n  #root {\n    height: 100%;\n    font-family: Quicksand, sans-serif;\n    font-size: 12px;\n    font-weight: 400;\n    color: ",";\n  }\n\n  button {\n    appearence: none;\n    border: 1px solid ",";\n    background: transparent;\n    font-family: VT323, monospace;\n    font-size: 20px;\n    margin: 0 4px;\n    outline: none;\n    color: ",";\n    cursor: pointer;\n  \n    &:hover {\n      background: ",";\n      color: ",";\n    }\n  }\n\n  input,\n  textarea {\n    border: none;\n    background: transparent;\n    font-family: VT323, monospace;\n    font-size: 20px;\n    color: ",";\n  }\n"]);return Y=function(){return n},n}Object(r.b)(Y(),"#2B303D","#D9EFF9","#242D23","#242D23","#242D23","#79a682","#242D23"),i.a.render(o.createElement((function(){var n=o.useState(X),e=Object(l.a)(n,2),t=e[0],a=e[1],r=function(n,e){if(t.includes(n))return Object.assign(n,e),n.id;var r=Object(m.v1)(),o=[].concat(Object(u.a)(t),[Object(s.a)({name:"Undefined"},e,{id:r})]);return localStorage.setItem("saved-songs",JSON.stringify(o)),a(o),r};return o.createElement("div",{className:G},o.createElement(w,null),o.createElement("main",{className:H},o.createElement(f.a,null,o.createElement(p.a,{path:"/",exact:!0,render:function(){return o.createElement($,{songs:t})}}),o.createElement(p.a,{path:"/:id",render:function(n){var e=t.find((function(e){return e.id===n.match.params.id}))||{};return o.createElement(K,Object.assign({},n,{song:e,onSave:r}))}}))),o.createElement(h,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1002faf8.chunk.js.map