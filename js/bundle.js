!function e(t,n,r){function i(u,a){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(o)return o(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[u]={exports:{}};t[u][0].call(c.exports,function(e){var n=t[u][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[u].exports}for(var o="function"==typeof require&&require,u=0;u<r.length;u++)i(r[u]);return i}({1:[function(e,t,n){"use strict";var r=e("./modules/Lightsaber.js"),i=e("./modules/AudioEffect.js"),o=document.querySelector.bind(document),u=new r.Lightsaber,a=u.elem,f=new i.AudioEffect,s=null,c=null,l=!0;a.addEventListener("click",function(){u.state?(u.elemimg.src=u.pathOff,u.setState(!1),p("off")):(u.elemimg.src=u.pathOn,u.setState(!0),p("on")),l&&(s=new Audio("../audio/right.mp3"),s.muted=!0,c=new Audio("../audio/left.mp3"),c.muted=!0,s.play(),s.play(),c.muted=!1,s.muted=!1,l=!1)});var d=o("header h1");if(window.DeviceOrientationEvent){window.addEventListener("deviceorientation",function(e){var t=e.gamma;u.state&&p(t>25?"right":t<-25?"left":"stopped")})}var h="",p=function(e){if(e!==h){switch(e){case"on":u.setState(!0),f.on.play();break;case"off":u.setState(!1),f.off.play(),d.innerHTML="desligado";break;case"right":s.play(),d.innerHTML="direita";break;case"left":c.play(),d.innerHTML="esquerda";break;case"stopped":d.innerHTML="parado";break;default:u.setState(!1),f.off.play()}h=e}}},{"./modules/AudioEffect.js":2,"./modules/Lightsaber.js":3}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n.AudioEffect=function(){function e(){r(this,e);var t=document.querySelector.bind(document);this._on=t(".audio#on"),this._off=t(".audio#off")}return i(e,[{key:"player",get:function(){return this._player}},{key:"on",get:function(){return this._on}},{key:"off",get:function(){return this._off}},{key:"right",get:function(){return this._right}},{key:"left",get:function(){return this._left}}]),e}()},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n.Lightsaber=function(){function e(){r(this,e);var t=document.querySelector.bind(document);this._on=!1,this._elem=t(".lightsaber"),this._elemimg=t(".lightsaber img"),this._pathOn="./img/lightsaber-on.png",this._pathOff="./img/lightsaber.png"}return i(e,[{key:"setState",value:function(e){this._on=e}},{key:"state",get:function(){return this._on}},{key:"elem",get:function(){return this._elem}},{key:"elemimg",get:function(){return this._elemimg}},{key:"pathOn",get:function(){return this._pathOn}},{key:"pathOff",get:function(){return this._pathOff}}]),e}()},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map
