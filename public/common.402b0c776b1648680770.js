(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/cWz":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return c});var r=n("mrSG");function i(t,e){return null!==e.closest(t)}function o(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function u(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var a=/^[a-z][a-z0-9+\-.]*:/;function c(t,e,n){return r.b(this,void 0,void 0,function(){var i;return r.e(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||a.test(t)?[3,2]:(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(t,n)];case 2:return[2,!1]}})})}},"6jz6":function(t,e,n){"use strict";var r=n("CcnG"),i=n("oBZk"),o=n("ZZ/e"),u=n("LmEr");n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return l});var a=r.nb({encapsulation:0,styles:[[""]],data:{}});function c(t){return r.Jb(0,[(t()(),r.pb(0,0,null,null,9,"ion-footer",[["class","mt-5 ion-text-center"]],null,null,null,i.O,i.m)),r.ob(1,49152,null,0,o.y,[r.h,r.k],null,null),(t()(),r.pb(2,0,null,0,7,"ion-toolbar",[["color","facebook"]],null,null,null,i.db,i.B)),r.ob(3,49152,null,0,o.Ab,[r.h,r.k],{color:[0,"color"]},null),(t()(),r.pb(4,0,null,0,5,"ion-text",[["color","light"]],null,null,null,i.ab,i.y)),r.ob(5,49152,null,0,o.vb,[r.h,r.k],{color:[0,"color"]},null),(t()(),r.pb(6,0,null,0,3,"small",[],null,null,null,null,null)),(t()(),r.Hb(-1,null,["2019 Copyrights \xa9 "])),(t()(),r.pb(8,0,null,null,1,"span",[["class","bg-az"]],null,null,null,null,null)),(t()(),r.Hb(-1,null,["S.I.U. S.A.S."]))],function(t,e){t(e,3,0,"facebook"),t(e,5,0,"light")},null)}function s(t){return r.Jb(0,[(t()(),r.pb(0,0,null,null,1,"app-footer",[],null,null,null,c,a)),r.ob(1,114688,null,0,u.a,[],null,null)],function(t,e){t(e,1,0)},null)}var l=r.lb("app-footer",u.a,s,{},{},[])},"7gGu":function(t,e,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function u(t,e,n,r,o){if(t||i(e)){var u=e.querySelector("input.aux-input");u||((u=e.ownerDocument.createElement("input")).type="hidden",u.classList.add("aux-input"),e.appendChild(u)),u.disabled=o,u.name=n,u.value=r||""}}function a(t,e,n){return Math.max(t,Math.min(e,n))}function c(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}}function s(t){return t.timeStamp||Date.now()}function l(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function d(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function f(t,e){var n=t._original||t;return{_original:t,emit:h(n.emit.bind(n),e)}}function h(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return f}),n.d(e,"e",function(){return h}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return s}),n.d(e,"j",function(){return l}),n.d(e,"k",function(){return u})},L7NH:function(t,e,n){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function u(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return r})},LmEr:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t.prototype.ngOnInit=function(){},t}()},Lvws:function(t,e,n){"use strict";n.r(e),n.d(e,"GESTURE_CONTROLLER",function(){return s}),n.d(e,"createGesture",function(){return h});var r,i=n("9t42"),o=(n("9yTv"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new u(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(c)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(c)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),u=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),c="backdrop-no-scroll",s=new o;function l(t,e,n,i){var o,u,a=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(n){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",u="__zone_symbol__removeEventListener"):(o="addEventListener",u="removeEventListener"),t[o](e,n,a),function(){t[u](e,n,a)}}var d=2e3;function f(t){return t instanceof Document?t:t.ownerDocument}function h(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,o=e.onStart,u=e.onEnd,a=e.notCaptured,c=e.onMove,h=e.threshold,m={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=function(t,e,n,r,i){var o,u,a,c,s,h,v,p=0;function b(r){p=Date.now()+d,e(r)&&(!u&&n&&(u=l(t,"touchmove",n,i)),a||(a=l(t,"touchend",y,i)),c||(c=l(t,"touchcancel",y,i)))}function m(r){p>Date.now()||e(r)&&(!h&&n&&(h=l(f(t),"mousemove",n,i)),v||(v=l(f(t),"mouseup",g,i)))}function y(t){w(),r&&r(t)}function g(t){S(),r&&r(t)}function w(){u&&u(),a&&a(),c&&c(),u=a=c=void 0}function S(){h&&h(),v&&v(),h=v=void 0}function E(){w(),S()}function L(e){e?(o&&o(),s&&s(),o=s=void 0,E()):(o||(o=l(t,"touchstart",b,i)),s||(s=l(t,"mousedown",m,i)))}return{setDisabled:L,stop:E,destroy:function(){L(!0),r=n=e=void 0}}}(e.el,function(t){var e=b(t);return!(E||!L)&&(p(t,m),m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp=e,m.velocityX=m.velocityY=m.deltaX=m.deltaY=0,m.event=t,(!n||!1!==n(m))&&(w.release(),!!w.start()&&(E=!0,0===h?X():(g.start(m.startX,m.startY),!0))))},function(t){S?!C&&L&&(C=!0,v(m,t),Object(i.n)(T)):(v(m,t),g.detect(m.currentX,m.currentY)&&(g.isGesture()&&X()||(D(),y.stop(),a&&a(m))))},Y,{capture:!1}),g=function(t,n,r){var i=e.maxAngle*(Math.PI/180),o="x"===e.direction,u=Math.cos(i),a=n*n,c=0,s=0,l=!1,d=0;return{start:function(t,e){c=t,s=e,d=0,l=!0},detect:function(t,e){if(!l)return!1;var n=t-c,r=e-s,i=n*n+r*r;if(i<a)return!1;var f=Math.sqrt(i),h=(o?n:r)/f;return d=h>u?1:h<-u?-1:0,l=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,e.threshold),w=s.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,E=!1,L=!0,C=!1;function T(){S&&(C=!1,c&&c(m))}function X(){return!(w&&!w.capture()||(S=!0,L=!1,m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp,r?r(m).then(k):k(),0))}function k(){o&&o(m),L=!0}function D(){S=!1,E=!1,C=!1,L=!0,w.release()}function Y(t){var e=S,n=L;D(),n&&(v(m,t),e?u&&u(m):a&&a(m))}return{setDisabled:function(t){t&&S&&Y(void 0),y.setDisabled(t)},destroy:function(){w.destroy(),y.destroy()}}}function v(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;p(e,t);var o=t.currentX,u=t.currentY,a=(t.timeStamp=b(e))-i;if(a>0&&a<100){var c=(u-r)/a;t.velocityX=(o-n)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=u-t.startY,t.event=e}}function p(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function b(t){return t.timeStamp||Date.now()}},Sgww:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("mrSG");function i(t,e,n,i,o){return r.b(this,void 0,void 0,function(){var u;return r.e(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return u.classList.add(t)}),o&&Object.assign(u,o),e.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})}function o(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},T2HV:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var u=n[r];u.parentNode?u.parentNode.removeChild(u):e.removeChild(u);for(var a=o(u),c=0;c<a.length;c++)i(a[c])}});for(var r=o(e),u=0;u<r.length;u++)i(r[u]);var c=document.createElement("div");c.appendChild(e);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var n=t.attributes[e],r=n.name;if(u.includes(r.toLowerCase())){var a=n.value;null!=a&&a.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var c=o(t);for(e=0;e<c.length;e++)i(c[e])}},o=function(t){return null!=t.children?t.children:t.childNodes},u=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},rZhp:function(t,e,n){"use strict";n.d(e,"a",function(){return y}),n.d(e,"b",function(){return b}),n.d(e,"c",function(){return g}),n.d(e,"d",function(){return c});var r=n("mrSG"),i=n("9t42"),o=n("mPux"),u=function(){return n.e(101).then(n.bind(null,"gSw+"))},a=function(){return n.e(102).then(n.bind(null,"CMah"))};function c(t){return new Promise(function(e,o){Object(i.n)(function(){!function(t){var e=t.enteringEl,n=t.leavingEl;(function(e,n,r){void 0!==e&&(e.style.zIndex="back"===t.direction?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(e,n),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),g(e,!1),n&&g(n,!1)}(t),function(t){return r.b(this,void 0,void 0,function(){var e;return r.e(this,function(i){switch(i.label){case 0:return[4,l(t)];case 1:return[2,(e=i.sent())?function(t,e){return r.b(this,void 0,void 0,function(){var i;return r.e(this,function(r){switch(r.label){case 0:return[4,d(e,!0)];case 1:return r.sent(),[4,n.e(2).then(n.bind(null,"FH5X")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),v(e.enteringEl,e.leavingEl),[4,h(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&p(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}(e,t):function(t){return r.b(this,void 0,void 0,function(){var e,n;return r.e(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,d(t,!1)];case 1:return r.sent(),v(e,n),p(e,n),[2,{hasCompleted:!0}]}})})}(t)]}})})}(t).then(function(n){n.animation&&n.animation.destroy(),s(t),e(n)},function(e){s(t),o(e)})})})}function s(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function l(t){return r.b(this,void 0,void 0,function(){var e;return r.e(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,u()]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})}function d(t,e){return r.b(this,void 0,void 0,function(){var n;return r.e(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[y(t.enteringEl),y(t.leavingEl)]:[m(t.enteringEl),m(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,f(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function f(t,e){return r.b(this,void 0,void 0,function(){return r.e(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function h(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r}function v(t,e){b(e,o.c),b(t,o.a)}function p(t,e){b(t,o.b),b(e,o.d)}function b(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function m(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function y(t){return r.b(this,void 0,void 0,function(){var e;return r.e(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(y))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function g(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}}}]);