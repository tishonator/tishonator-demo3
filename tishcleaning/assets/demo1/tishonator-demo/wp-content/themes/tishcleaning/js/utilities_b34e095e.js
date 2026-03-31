/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let n=t.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&3!==n.nodeType;)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]}},e=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},i=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},n=t=>{const e=i(t);return e&&document.querySelector(e)?e:null},s=t=>{const e=i(t);return e?document.querySelector(e):null},o=t=>{t.dispatchEvent(new Event("transitionend"))},r=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),a=e=>r(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?t.findOne(e):null,l=(t,e,i)=>{Object.keys(i).forEach(n=>{const s=i[n],o=e[n],a=o&&r(o)?"element":null==(l=o)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)})},c=t=>!(!r(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),d=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d(t.parentNode):null},u=()=>{},f=t=>t.offsetHeight,p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},m=[],g=()=>"rtl"===document.documentElement.dir,_=t=>{var e;e=()=>{const e=p();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",()=>{m.forEach(t=>t())}),m.push(e)):e()},b=t=>{"function"==typeof t&&t()},v=(t,e,i=!0)=>{if(!i)return void b(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let s=!1;const r=({target:i})=>{i===e&&(s=!0,e.removeEventListener("transitionend",r),b(t))};e.addEventListener("transitionend",r),setTimeout(()=>{s||o(e)},n)},y=(t,e,i,n)=>{let s=t.indexOf(e);if(-1===s)return t[!i&&n?t.length-1:0];const o=t.length;return s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))]},w=/[^.]*(?=\..*)\.|.*/,E=/\..*/,A=/::\d+$/,T={};let O=1;const C={mouseenter:"mouseover",mouseleave:"mouseout"},k=/^(mouseenter|mouseleave)/i,L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function x(t,e){return e&&`${e}::${O++}`||t.uidEvent||O++}function D(t){const e=x(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function S(t,e,i=null){const n=Object.keys(t);for(let s=0,o=n.length;s<o;s++){const o=t[n[s]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function I(t,e,i){const n="string"==typeof e,s=n?i:e;let o=M(t);return L.has(o)||(o=t),[n,s,o]}function N(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),k.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=I(e,i,n),l=D(t),c=l[a]||(l[a]={}),h=S(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=x(r,e.replace(w,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s]);return null}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function j(t,e,i,n,s){const o=S(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function M(t){return t=t.replace(E,""),C[t]||t}const P={on(t,e,i,n){N(t,e,i,n,!1)},one(t,e,i,n){N(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=I(e,i,n),a=r!==e,l=D(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void j(t,l,r,o,s?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,n){const s=e[i]||{};Object.keys(s).forEach(o=>{if(o.includes(n)){const n=s[o];j(t,e,i,n.originalHandler,n.delegationSelector)}})}(t,l,i,e.slice(1))});const h=l[r]||{};Object.keys(h).forEach(i=>{const n=i.replace(A,"");if(!a||e.includes(n)){const e=h[i];j(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=p(),s=M(e),o=e!==s,r=L.has(s);let a,l=!0,c=!0,h=!1,d=null;return o&&n&&(a=n.Event(e,i),n(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(d,t,{get:()=>i[t]})}),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},H=new Map;var R={set(t,e,i){H.has(t)||H.set(t,new Map);const n=H.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>H.has(t)&&H.get(t).get(e)||null,remove(t,e){if(!H.has(t))return;const i=H.get(t);i.delete(e),0===i.size&&H.delete(t)}};class B{constructor(t){(t=a(t))&&(this._element=t,R.set(this._element,this.constructor.DATA_KEY,this))}dispose(){R.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,i=!0){v(t,e,i)}static getInstance(t){return R.get(t,this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.0.2"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}class W extends B{static get NAME(){return"alert"}close(t){const e=t?this._getRootElement(t):this._element,i=this._triggerCloseEvent(e);null===i||i.defaultPrevented||this._removeElement(e)}_getRootElement(t){return s(t)||t.closest(".alert")}_triggerCloseEvent(t){return P.trigger(t,"close.bs.alert")}_removeElement(t){t.classList.remove("show");const e=t.classList.contains("fade");this._queueCallback(()=>this._destroyElement(t),t,e)}_destroyElement(t){t.remove(),P.trigger(t,"closed.bs.alert")}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this);"close"===t&&e[t](this)}))}static handleDismiss(t){return function(e){e&&e.preventDefault(),t.close(this)}}}P.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',W.handleDismiss(new W)),_(W);class q extends B{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function z(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function $(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}P.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');q.getOrCreateInstance(e).toggle()}),_(q);const U={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+$(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+$(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=z(t.dataset[i])}),e},getDataAttribute:(t,e)=>z(t.getAttribute("data-bs-"+$(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},V={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",X="prev",Y="left",Q="right",G={ArrowLeft:Q,ArrowRight:Y};class Z extends B{constructor(e,i){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(i),this._indicatorsElement=t.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return F}static get NAME(){return"carousel"}next(){this._slide(K)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(X)}pause(e){e||(this._isPaused=!0),t.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(o(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=t.findOne(".active.carousel-item",this._element);const i=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void P.one(this._element,"slid.bs.carousel",()=>this.to(e));if(i===e)return this.pause(),void this.cycle();const n=e>i?K:X;this._slide(n,this._items[e])}_getConfig(t){return t={...F,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("carousel",t,V),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Q:Y)}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),P.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},n=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};t.find(".carousel-item img",this._element).forEach(t=>{P.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(P.on(this._element,"pointerdown.bs.carousel",t=>e(t)),P.on(this._element,"pointerup.bs.carousel",t=>n(t)),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.carousel",t=>e(t)),P.on(this._element,"touchmove.bs.carousel",t=>i(t)),P.on(this._element,"touchend.bs.carousel",t=>n(t)))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=G[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(e){return this._items=e&&e.parentNode?t.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(t,e){const i=t===K;return y(this._items,e,i,this._config.wrap)}_triggerSlideEvent(e,i){const n=this._getItemIndex(e),s=this._getItemIndex(t.findOne(".active.carousel-item",this._element));return P.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:i,from:s,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const i=t.findOne(".active",this._indicatorsElement);i.classList.remove("active"),i.removeAttribute("aria-current");const n=t.find("[data-bs-target]",this._indicatorsElement);for(let t=0;t<n.length;t++)if(Number.parseInt(n[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[t].classList.add("active"),n[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||t.findOne(".active.carousel-item",this._element);if(!e)return;const i=Number.parseInt(e.getAttribute("data-bs-interval"),10);i?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=i):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,i){const n=this._directionToOrder(e),s=t.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=i||this._getItemByOrder(n,s),a=this._getItemIndex(r),l=Boolean(this._interval),c=n===K,h=c?"carousel-item-start":"carousel-item-end",d=c?"carousel-item-next":"carousel-item-prev",u=this._orderToDirection(n);if(r&&r.classList.contains("active"))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,u).defaultPrevented)return;if(!s||!r)return;this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const p=()=>{P.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:u,from:o,to:a})};if(this._element.classList.contains("slide")){r.classList.add(d),f(r),s.classList.add(h),r.classList.add(h);const t=()=>{r.classList.remove(h,d),r.classList.add("active"),s.classList.remove("active",d,h),this._isSliding=!1,setTimeout(p,0)};this._queueCallback(t,s,!0)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,p();l&&this.cycle()}_directionToOrder(t){return[Q,Y].includes(t)?g()?t===Y?X:K:t===Y?K:X:t}_orderToDirection(t){return[K,X].includes(t)?g()?t===X?Y:Q:t===X?Q:Y:t}static carouselInterface(t,e){const i=Z.getOrCreateInstance(t,e);let{_config:n}=i;"object"==typeof e&&(n={...n,...e});const s="string"==typeof e?e:n.slide;if("number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError(`No method named "${s}"`);i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Z.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const i={...U.getDataAttributes(e),...U.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),Z.carouselInterface(e,i),n&&Z.getInstance(e).to(n),t.preventDefault()}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Z.dataApiClickHandler),P.on(window,"load.bs.carousel.data-api",()=>{const e=t.find('[data-bs-ride="carousel"]');for(let t=0,i=e.length;t<i;t++)Z.carouselInterface(e[t],Z.getInstance(e[t]))}),_(Z);const J={toggle:!0,parent:""},tt={toggle:"boolean",parent:"(string|element)"};class et extends B{constructor(e,i){super(e),this._isTransitioning=!1,this._config=this._getConfig(i),this._triggerArray=t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);const s=t.find('[data-bs-toggle="collapse"]');for(let e=0,i=s.length;e<i;e++){const i=s[e],o=n(i),r=t.find(o).filter(t=>t===this._element);null!==o&&r.length&&(this._selector=o,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return J}static get NAME(){return"collapse"}toggle(){this._element.classList.contains("show")?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let e,i;this._parent&&(e=t.find(".show, .collapsing",this._parent).filter(t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains("collapse")),0===e.length&&(e=null));const n=t.findOne(this._selector);if(e){const t=e.find(t=>n!==t);if(i=t?et.getInstance(t):null,i&&i._isTransitioning)return}if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e&&e.forEach(t=>{n!==t&&et.collapseInterface(t,"hide"),i||R.set(t,"bs.collapse",null)});const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1));this._queueCallback(()=>{this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[s]="",this.setTransitioning(!1),P.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",f(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="",this._queueCallback(()=>{this.setTransitioning(!1),this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),P.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getConfig(t){return(t={...J,...t}).toggle=Boolean(t.toggle),l("collapse",t,tt),t}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:e}=this._config;e=a(e);const i=`[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;return t.find(i,e).forEach(t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])}),e}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const i=t.classList.contains("show");e.forEach(t=>{i?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",i)})}static collapseInterface(t,e){let i=et.getInstance(t);const n={...J,...U.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!i&&n.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(n.toggle=!1),i||(i=new et(t,n)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){et.collapseInterface(this,t)}))}}P.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const i=U.getDataAttributes(this),s=n(this);t.find(s).forEach(t=>{const e=et.getInstance(t);let n;e?(null===e._parent&&"string"==typeof i.parent&&(e._config.parent=i.parent,e._parent=e._getParent()),n="toggle"):n=i,et.collapseInterface(t,n)})})),_(et);var it="top",nt="bottom",st="right",ot="left",rt=[it,nt,st,ot],at=rt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),lt=[].concat(rt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),ct=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ht(t){return t?(t.nodeName||"").toLowerCase():null}function dt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ut(t){return t instanceof dt(t).Element||t instanceof Element}function ft(t){return t instanceof dt(t).HTMLElement||t instanceof HTMLElement}function pt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof dt(t).ShadowRoot||t instanceof ShadowRoot)}var mt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];ft(s)&&ht(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});ft(n)&&ht(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function gt(t){return t.split("-")[0]}function _t(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function bt(t){var e=_t(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function vt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&pt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function yt(t){return dt(t).getComputedStyle(t)}function wt(t){return["table","td","th"].indexOf(ht(t))>=0}function Et(t){return((ut(t)?t.ownerDocument:t.document)||window.document).documentElement}function At(t){return"html"===ht(t)?t:t.assignedSlot||t.parentNode||(pt(t)?t.host:null)||Et(t)}function Tt(t){return ft(t)&&"fixed"!==yt(t).position?t.offsetParent:null}function Ot(t){for(var e=dt(t),i=Tt(t);i&&wt(i)&&"static"===yt(i).position;)i=Tt(i);return i&&("html"===ht(i)||"body"===ht(i)&&"static"===yt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&ft(t)&&"fixed"===yt(t).position)return null;for(var i=At(t);ft(i)&&["html","body"].indexOf(ht(i))<0;){var n=yt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ct(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var kt=Math.max,Lt=Math.min,xt=Math.round;function Dt(t,e,i){return kt(t,Lt(e,i))}function St(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function It(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var Nt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=gt(i.placement),l=Ct(a),c=[ot,st].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return St("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:It(t,rt))}(s.padding,i),d=bt(o),u="y"===l?it:ot,f="y"===l?nt:st,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=Ot(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,E=Dt(v,w,y),A=l;i.modifiersData[n]=((e={})[A]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&vt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mt(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.offsets,r=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,h=!0===c?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:xt(xt(e*n)/n)||0,y:xt(xt(i*n)/n)||0}}(o):"function"==typeof c?c(o):o,d=h.x,u=void 0===d?0:d,f=h.y,p=void 0===f?0:f,m=o.hasOwnProperty("x"),g=o.hasOwnProperty("y"),_=ot,b=it,v=window;if(l){var y=Ot(i),w="clientHeight",E="clientWidth";y===dt(i)&&"static"!==yt(y=Et(i)).position&&(w="scrollHeight",E="scrollWidth"),y=y,s===it&&(b=nt,p-=y[w]-n.height,p*=a?1:-1),s===ot&&(_=st,u-=y[E]-n.width,u*=a?1:-1)}var A,T=Object.assign({position:r},l&&jt);return a?Object.assign({},T,((A={})[b]=g?"0":"",A[_]=m?"0":"",A.transform=(v.devicePixelRatio||1)<2?"translate("+u+"px, "+p+"px)":"translate3d("+u+"px, "+p+"px, 0)",A)):Object.assign({},T,((e={})[b]=g?p+"px":"",e[_]=m?u+"px":"",e.transform="",e))}var Pt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:gt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Mt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Mt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},Ht={passive:!0},Rt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=dt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,Ht)})),a&&l.addEventListener("resize",i.update,Ht),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,Ht)})),a&&l.removeEventListener("resize",i.update,Ht)}},data:{}},Bt={left:"right",right:"left",bottom:"top",top:"bottom"};function Wt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Bt[t]}))}var qt={start:"end",end:"start"};function zt(t){return t.replace(/start|end/g,(function(t){return qt[t]}))}function $t(t){var e=dt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ut(t){return _t(Et(t)).left+$t(t).scrollLeft}function Ft(t){var e=yt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Vt(t,e){var i;void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].indexOf(ht(e))>=0?e.ownerDocument.body:ft(e)&&Ft(e)?e:t(At(e))}(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=dt(n),r=s?[o].concat(o.visualViewport||[],Ft(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Vt(At(r)))}function Kt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Xt(t,e){return"viewport"===e?Kt(function(t){var e=dt(t),i=Et(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+Ut(t),y:a}}(t)):ft(e)?function(t){var e=_t(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Kt(function(t){var e,i=Et(t),n=$t(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ut(t),l=-n.scrollTop;return"rtl"===yt(s||i).direction&&(a+=kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Et(t)))}function Yt(t){return t.split("-")[1]}function Qt(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?gt(s):null,r=s?Yt(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case it:e={x:a,y:i.y-n.height};break;case nt:e={x:a,y:i.y+i.height};break;case st:e={x:i.x+i.width,y:l};break;case ot:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ct(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[h]/2-n[h]/2);break;case"end":e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Gt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,h=void 0===c?"popper":c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,m=St("number"!=typeof p?p:It(p,rt)),g="popper"===h?"reference":"popper",_=t.elements.reference,b=t.rects.popper,v=t.elements[u?g:h],y=function(t,e,i){var n="clippingParents"===e?function(t){var e=Vt(At(t)),i=["absolute","fixed"].indexOf(yt(t).position)>=0&&ft(t)?Ot(t):t;return ut(i)?e.filter((function(t){return ut(t)&&vt(t,i)&&"body"!==ht(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Xt(t,i);return e.top=kt(n.top,e.top),e.right=Lt(n.right,e.right),e.bottom=Lt(n.bottom,e.bottom),e.left=kt(n.left,e.left),e}),Xt(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(ut(v)?v:v.contextElement||Et(t.elements.popper),r,l),w=_t(_),E=Qt({reference:w,element:b,strategy:"absolute",placement:s}),A=Kt(Object.assign({},b,E)),T="popper"===h?A:w,O={top:y.top-T.top+m.top,bottom:T.bottom-y.bottom+m.bottom,left:y.left-T.left+m.left,right:T.right-y.right+m.right},C=t.modifiersData.offset;if("popper"===h&&C){var k=C[s];Object.keys(O).forEach((function(t){var e=[st,nt].indexOf(t)>=0?1:-1,i=[it,nt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function Zt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?lt:l,h=Yt(n),d=h?a?at:at.filter((function(t){return Yt(t)===h})):rt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Gt(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[gt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}var Jt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=gt(g),b=l||(_!==g&&p?function(t){if("auto"===gt(t))return[];var e=Wt(t);return[zt(t),e,zt(e)]}(g):[Wt(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat("auto"===gt(i)?Zt(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,A=!0,T=v[0],O=0;O<v.length;O++){var C=v[O],k=gt(C),L="start"===Yt(C),x=[it,nt].indexOf(k)>=0,D=x?"width":"height",S=Gt(e,{placement:C,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=x?L?st:ot:L?nt:it;y[D]>w[D]&&(I=Wt(I));var N=Wt(I),j=[];if(o&&j.push(S[k]<=0),a&&j.push(S[I]<=0,S[N]<=0),j.every((function(t){return t}))){T=C,A=!1;break}E.set(C,j)}if(A)for(var M=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},P=p?3:1;P>0&&"break"!==M(P);P--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function te(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ee(t){return[it,st,nt,ot].some((function(e){return t[e]>=0}))}var ie={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Gt(e,{elementContext:"reference"}),a=Gt(e,{altBoundary:!0}),l=te(r,n),c=te(a,s,o),h=ee(l),d=ee(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=lt.reduce((function(t,i){return t[i]=function(t,e,i){var n=gt(t),s=[ot,it].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[ot,st].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},se={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Qt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},oe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=Gt(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=gt(e.placement),b=Yt(e.placement),v=!b,y=Ct(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,O="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,C={x:0,y:0};if(E){if(o||a){var k="y"===y?it:ot,L="y"===y?nt:st,x="y"===y?"height":"width",D=E[y],S=E[y]+g[k],I=E[y]-g[L],N=f?-T[x]/2:0,j="start"===b?A[x]:T[x],M="start"===b?-T[x]:-A[x],P=e.elements.arrow,H=f&&P?bt(P):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},B=R[k],W=R[L],q=Dt(0,A[x],H[x]),z=v?A[x]/2-N-q-B-O:j-q-B-O,$=v?-A[x]/2+N+q+W+O:M+q+W+O,U=e.elements.arrow&&Ot(e.elements.arrow),F=U?"y"===y?U.clientTop||0:U.clientLeft||0:0,V=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+z-V-F,X=E[y]+$-V;if(o){var Y=Dt(f?Lt(S,K):S,D,f?kt(I,X):I);E[y]=Y,C[y]=Y-D}if(a){var Q="x"===y?it:ot,G="x"===y?nt:st,Z=E[w],J=Z+g[Q],tt=Z-g[G],et=Dt(f?Lt(J,K):J,Z,f?kt(tt,X):tt);E[w]=et,C[w]=et-Z}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function re(t,e,i){void 0===i&&(i=!1);var n,s,o=Et(e),r=_t(t),a=ft(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!i)&&(("body"!==ht(e)||Ft(o))&&(l=(n=e)!==dt(n)&&ft(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:$t(n)),ft(e)?((c=_t(e)).x+=e.clientLeft,c.y+=e.clientTop):o&&(c.x=Ut(o))),{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function le(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ce(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?ae:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){d(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:ut(t)?Vt(t):t.contextElement?Vt(t.contextElement):[],popper:Vt(e)};var s,r,c=function(t){var e=function(t){var e=new Map,i=new Set,n=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(s){i.add(s.name),[].concat(s.requires||[],s.requiresIfExists||[]).forEach((function(n){if(!i.has(n)){var s=e.get(n);s&&t(s)}})),n.push(s)}(t)})),n}(t);return ct.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((s=[].concat(n,a.options.modifiers),r=s.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(r).map((function(t){return r[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(le(e,i)){a.rects={reference:re(e,Ot(i),"fixed"===a.options.strategy),popper:bt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!le(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var he=ce(),de=ce({defaultModifiers:[Rt,se,Pt,mt]}),ue=ce({defaultModifiers:[Rt,se,Pt,mt,ne,Jt,oe,Nt,ie]}),fe=Object.freeze({__proto__:null,popperGenerator:ce,detectOverflow:Gt,createPopperBase:he,createPopper:ue,createPopperLite:de,top:it,bottom:nt,right:st,left:ot,auto:"auto",basePlacements:rt,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:at,placements:lt,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:ct,applyStyles:mt,arrow:Nt,computeStyles:Pt,eventListeners:Rt,flip:Jt,hide:ie,offset:ne,popperOffsets:se,preventOverflow:oe});const pe=new RegExp("ArrowUp|ArrowDown|Escape"),me=g()?"top-end":"top-start",ge=g()?"top-start":"top-end",_e=g()?"bottom-end":"bottom-start",be=g()?"bottom-start":"bottom-end",ve=g()?"left-start":"right-start",ye=g()?"right-start":"left-start",we={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ee={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ae extends B{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return we}static get DefaultType(){return Ee}static get NAME(){return"dropdown"}toggle(){h(this._element)||(this._element.classList.contains("show")?this.hide():this.show())}show(){if(h(this._element)||this._menu.classList.contains("show"))return;const t=Ae.getParentFromElement(this._element),e={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)U.setDataAttribute(this._menu,"popper","none");else{if(void 0===fe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:r(this._config.reference)?e=a(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=ue(e,this._menu,i),n&&U.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>P.on(t,"mouseover",u)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),P.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(h(this._element)||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){P.on(this._element,"click.bs.dropdown",t=>{t.preventDefault(),this.toggle()})}_completeHide(t){P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),U.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...U.getDataAttributes(this._element),...t},l("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!r(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_getMenuElement(){return t.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ve;if(t.classList.contains("dropstart"))return ye;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ge:me:e?be:_e}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:e,target:i}){const n=t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(c);n.length&&y(n,i,"ArrowDown"===e,!n.includes(i)).focus()}static dropdownInterface(t,e){const i=Ae.getOrCreateInstance(t,e);if("string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){Ae.dropdownInterface(this,t)}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const i=t.find('[data-bs-toggle="dropdown"]');for(let t=0,n=i.length;t<n;t++){const n=Ae.getInstance(i[t]);if(!n||!1===n._config.autoClose)continue;if(!n._element.classList.contains("show"))continue;const s={relatedTarget:n._element};if(e){const t=e.composedPath(),i=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(s.clickEvent=e)}n._completeHide(s)}}static getParentFromElement(t){return s(t)||t.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!pe.test(e.key))return;const i=this.classList.contains("show");if(!i&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),h(this))return;const n=()=>this.matches('[data-bs-toggle="dropdown"]')?this:t.prev(this,'[data-bs-toggle="dropdown"]')[0];return"Escape"===e.key?(n().focus(),void Ae.clearMenus()):"ArrowUp"===e.key||"ArrowDown"===e.key?(i||n().click(),void Ae.getInstance(n())._selectMenuItem(e)):void(i&&"Space"!==e.key||Ae.clearMenus())}}P.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',Ae.dataApiKeydownHandler),P.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",Ae.dataApiKeydownHandler),P.on(document,"click.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),Ae.dropdownInterface(this)})),_(Ae);class Te{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",e=>e+t),this._setElementAttributes(".sticky-top","marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(s))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&U.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=U.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(U.removeDataAttribute(t,e),t.style[e]=i)})}_applyManipulationCallback(e,i){r(e)?i(e):t.find(e,this._element).forEach(i)}isOverflowing(){return this.getWidth()>0}}const Oe={isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ce={isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class ke{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&f(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(()=>{b(t)})):b(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),b(t)})):b(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className="modal-backdrop",this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...Oe,..."object"==typeof t?t:{}}).rootElement=a(t.rootElement),l("backdrop",t,Ce),t}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),P.on(this._getElement(),"mousedown.bs.backdrop",()=>{b(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(P.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){v(t,this._getElement(),this._config.isAnimated)}}const Le={backdrop:!0,keyboard:!0,focus:!0},xe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class De extends B{constructor(e,i){super(e),this._config=this._getConfig(i),this._dialog=t.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Te}static get Default(){return Le}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,"show.bs.modal",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),P.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),P.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{P.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&["A","AREA"].includes(t.target.tagName)&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(P.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),P.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),P.off(this._element,"click.dismiss.bs.modal"),P.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(t=>P.off(t,".bs.modal")),this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.modal")}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ke({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(t){return t={...Le,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("modal",t,xe),t}_showElement(e){const i=this._isAnimated(),n=t.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),i&&f(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus(),this._queueCallback(()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:e})},this._dialog,i)}_enforceFocus(){P.off(document,"focusin.bs.modal"),P.on(document,"focusin.bs.modal",t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?P.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):P.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?P.on(window,"resize.bs.modal",()=>this._adjustDialog()):P.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,"hidden.bs.modal")})}_showBackdrop(t){P.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,n=e>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||t.contains("modal-static")||(n||(i.overflowY="hidden"),t.add("modal-static"),this._queueCallback(()=>{t.remove("modal-static"),n||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!g()||i&&!t&&g())&&(this._element.style.paddingLeft=e+"px"),(i&&!t&&!g()||!i&&t&&g())&&(this._element.style.paddingRight=e+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=De.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,"show.bs.modal",t=>{t.defaultPrevented||P.one(e,"hidden.bs.modal",()=>{c(this)&&this.focus()})}),De.getOrCreateInstance(e).toggle(this)})),_(De);const Se={backdrop:!0,keyboard:!0,scroll:!1},Ie={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Ne extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return"offcanvas"}static get Default(){return Se}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||((new Te).hide(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(()=>{P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})},this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(P.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Te).reset(),P.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)))}dispose(){this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.offcanvas")}_getConfig(t){return t={...Se,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("offcanvas",t,Ie),t}_initializeBackDrop(){return new ke({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(t){P.off(document,"focusin.bs.offcanvas"),P.on(document,"focusin.bs.offcanvas",e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){P.on(this._element,"click.dismiss.bs.offcanvas",'[data-bs-dismiss="offcanvas"]',()=>this.hide()),P.on(this._element,"keydown.dismiss.bs.offcanvas",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=Ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const i=s(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),h(this))return;P.one(i,"hidden.bs.offcanvas",()=>{c(this)&&this.focus()});const n=t.findOne(".offcanvas.show");n&&n!==i&&Ne.getInstance(n).hide(),Ne.getOrCreateInstance(i).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",()=>t.find(".offcanvas.show").forEach(t=>Ne.getOrCreateInstance(t).show())),_(Ne);const je=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Me=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,Pe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,He=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!je.has(i)||Boolean(Me.test(t.nodeValue)||Pe.test(t.nodeValue));const n=e.filter(t=>t instanceof RegExp);for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1};function Re(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),o=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],n=i.nodeName.toLowerCase();if(!s.includes(n)){i.remove();continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[n]||[]);r.forEach(t=>{He(t,a)||i.removeAttribute(t.nodeName)})}return n.body.innerHTML}const Be=new RegExp("(^|\\s)bs-tooltip\\S+","g"),We=new Set(["sanitize","allowList","sanitizeFn"]),qe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ze={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},$e={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ue={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Fe extends B{constructor(t,e){if(void 0===fe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return $e}static get NAME(){return"tooltip"}static get Event(){return Ue}static get DefaultType(){return qe}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._popper&&this._popper.destroy(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.Event.SHOW),i=d(this._element),n=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(t.defaultPrevented||!n)return;const s=this.getTipElement(),o=e(this.constructor.NAME);s.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this.setContent(),this._config.animation&&s.classList.add("fade");const r="function"==typeof this._config.placement?this._config.placement.call(this,s,this._element):this._config.placement,a=this._getAttachment(r);this._addAttachmentClass(a);const{container:l}=this._config;R.set(s,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.appendChild(s),P.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ue(this._element,s,this._getPopperConfig(a)),s.classList.add("show");const c="function"==typeof this._config.customClass?this._config.customClass():this._config.customClass;c&&s.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{P.on(t,"mouseover",u)});const h=this.tip.classList.contains("fade");this._queueCallback(()=>{const t=this._hoverState;this._hoverState=null,P.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)},this.tip,h)}hide(){if(!this._popper)return;const t=this.getTipElement();if(P.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains("fade");this._queueCallback(()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))},this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this._config.template,this.tip=t.children[0],this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".tooltip-inner",e),this.getTitle()),e.classList.remove("fade","show")}setElementContent(t,e){if(null!==t)return r(e)?(e=a(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Re(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this._config.title?this._config.title.call(this._element):this._config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return(e=e||R.get(t.delegateTarget,i))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),R.set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_getAttachment(t){return ze[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(t=>{if("click"===t)P.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;P.on(this._element,e,this._config.selector,t=>this._enter(t)),P.on(this._element,i,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=U.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{We.has(t)&&delete e[t]}),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:a(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Re(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this._config)for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Be);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){const e=Fe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Fe);const Ve=new RegExp("(^|\\s)bs-popover\\S+","g"),Ke={...Fe.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Xe={...Fe.DefaultType,content:"(string|element|function)"},Ye={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Qe extends Fe{static get Default(){return Ke}static get NAME(){return"popover"}static get Event(){return Ye}static get DefaultType(){return Xe}isWithContent(){return this.getTitle()||this._getContent()}getTipElement(){return this.tip||(this.tip=super.getTipElement(),this.getTitle()||t.findOne(".popover-header",this.tip).remove(),this._getContent()||t.findOne(".popover-body",this.tip).remove()),this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".popover-header",e),this.getTitle());let i=this._getContent();"function"==typeof i&&(i=i.call(this._element)),this.setElementContent(t.findOne(".popover-body",e),i),e.classList.remove("fade","show")}_addAttachmentClass(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))}_getContent(){return this._element.getAttribute("data-bs-content")||this._config.content}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Ve);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}static jQueryInterface(t){return this.each((function(){const e=Qe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Qe);const Ge={offset:10,method:"auto",target:""},Ze={offset:"number",method:"string",target:"(string|element)"};class Je extends B{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._selector=`${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,P.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return Ge}static get NAME(){return"scrollspy"}refresh(){const e=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?e:this._config.method,s="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.find(this._selector).map(e=>{const o=n(e),r=o?t.findOne(o):null;if(r){const t=r.getBoundingClientRect();if(t.width||t.height)return[U[i](r).top+s,o]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){P.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){if("string"!=typeof(t={...Ge,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target&&r(t.target)){let{id:i}=t.target;i||(i=e("scrollspy"),t.target.id=i),t.target="#"+i}return l("scrollspy",t,Ze),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(e){this._activeTarget=e,this._clear();const i=this._selector.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=t.findOne(i.join(","));n.classList.contains("dropdown-item")?(t.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"),n.classList.add("active")):(n.classList.add("active"),t.parents(n,".nav, .list-group").forEach(e=>{t.prev(e,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),t.prev(e,".nav-item").forEach(e=>{t.children(e,".nav-link").forEach(t=>t.classList.add("active"))})})),P.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e})}_clear(){t.find(this._selector).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){const e=Je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",()=>{t.find('[data-bs-spy="scroll"]').forEach(t=>new Je(t))}),_(Je);class ti extends B{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;let e;const i=s(this._element),n=this._element.closest(".nav, .list-group");if(n){const i="UL"===n.nodeName||"OL"===n.nodeName?":scope > li > .active":".active";e=t.find(i,n),e=e[e.length-1]}const o=e?P.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(P.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==o&&o.defaultPrevented)return;this._activate(this._element,n);const r=()=>{P.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),P.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};i?this._activate(i,i.parentNode,r):r()}_activate(e,i,n){const s=(!i||"UL"!==i.nodeName&&"OL"!==i.nodeName?t.children(i,".active"):t.find(":scope > li > .active",i))[0],o=n&&s&&s.classList.contains("fade"),r=()=>this._transitionComplete(e,s,n);s&&o?(s.classList.remove("show"),this._queueCallback(r,e,!0)):r()}_transitionComplete(e,i,n){if(i){i.classList.remove("active");const e=t.findOne(":scope > .dropdown-menu .active",i.parentNode);e&&e.classList.remove("active"),"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),f(e),e.classList.contains("fade")&&e.classList.add("show");let s=e.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains("dropdown-menu")){const i=e.closest(".dropdown");i&&t.find(".dropdown-toggle",i).forEach(t=>t.classList.add("active")),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=ti.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this)||ti.getOrCreateInstance(this).show()})),_(ti);const ei={animation:"boolean",autohide:"boolean",delay:"number"},ii={animation:!0,autohide:!0,delay:5e3};class ni extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ei}static get Default(){return ii}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),f(this._element),this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains("show")&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.remove("show"),this._queueCallback(()=>{this._element.classList.add("hide"),P.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),super.dispose()}_getConfig(t){return t={...ii,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},l("toast",t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide()),P.on(this._element,"mouseover.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"mouseout.bs.toast",t=>this._onInteraction(t,!1)),P.on(this._element,"focusin.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"focusout.bs.toast",t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return _(ni),{Alert:W,Button:q,Carousel:Z,Collapse:et,Dropdown:Ae,Modal:De,Offcanvas:Ne,Popover:Qe,ScrollSpy:Je,Tab:ti,Toast:ni,Tooltip:Fe}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map




!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});




jQuery('document').ready(function () {

    jQuery('.as_banner_slider').slick({
        dots: true,
        speed:800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
        nextArrow:'<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>'
    });

    // overview slider
    jQuery('.as_about_slider').slick({
        infinite:true,
        speed:800,
        dots:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000
    });

    jQuery('.as_customer_slider').slick({
        infinite: false,
        dots: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'<button type="button" class="slick-prev as_btn"><span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="12" height="16" viewBox="0 0 12 16"> <path d="M12.003,15.996 L-0.000,7.997 L12.002,-0.001 L10.062,7.997 L12.003,15.996 ZM10.102,2.762 L2.246,7.997 L10.102,13.233 L8.832,7.997 L10.102,2.762 ZM3.824,7.997 L8.256,5.043 L7.539,7.997 L8.256,10.951 L3.824,7.997 Z" class="cls-1"/> </svg></span> Prev</button>',
        nextArrow:'<button type="button" class="slick-next as_btn">next <span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" class="cls-1"/> </svg></span></button>',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows:false
              }
            },
          ]
    });

});


/*! This file is auto-generated */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});


var ready = (function(callback){
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
});

/**
 * Animations
 */

(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            classToRemove : 'invisible',
            classToAddForFullView : 'full-visible',
            removeClassAfterAnimation: false,
            offset: 100,
            repeat: false,
            invertBottomOffset: true,
            callbackFunction: function(elem, action){},
            scrollHorizontal: false,
            scrollBox: window
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};

        /*
         * Main method that checks the elements and adds or removes the class(es)
         */
        this.checkElements = function(){
            var viewportStart, viewportEnd;

            // Set some vars to check with
            if (!options.scrollHorizontal){
                viewportStart = Math.max(
                    $('html').scrollTop(),
                    $('body').scrollTop(),
                    $(window).scrollTop()
                );
                viewportEnd = (viewportStart + boxSize.height);
            }
            else{
                viewportStart = Math.max(
                    $('html').scrollLeft(),
                    $('body').scrollLeft(),
                    $(window).scrollLeft()
                );
                viewportEnd = (viewportStart + boxSize.width);
            }

            // Loop through all given dom elements
            $elem.each(function(){
                var $obj = $(this),
                    objOptions = {},
                    attrOptions = {};

                //  Get any individual attribution data
                if ($obj.data('vp-add-class'))
                    attrOptions.classToAdd = $obj.data('vp-add-class');
                if ($obj.data('vp-remove-class'))
                    attrOptions.classToRemove = $obj.data('vp-remove-class');
                if ($obj.data('vp-add-class-full-view'))
                    attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
                if ($obj.data('vp-keep-add-class'))
                    attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
                if ($obj.data('vp-offset'))
                    attrOptions.offset = $obj.data('vp-offset');
                if ($obj.data('vp-repeat'))
                    attrOptions.repeat = $obj.data('vp-repeat');
                if ($obj.data('vp-scrollHorizontal'))
                    attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
                if ($obj.data('vp-invertBottomOffset'))
                    attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

                // Extend objOptions with data attributes and default options
                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);

                // If class already exists; quit
                if ($obj.data('vp-animated') && !objOptions.repeat){
                    return;
                }

                // Check if the offset is percentage based
                if (String(objOptions.offset).indexOf("%") > 0)
                    objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;

                // Get the raw start and end positions
                var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
                    rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();

                // Add the defined offset
                var elemStart = Math.round( rawStart ) + objOptions.offset,
                    elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

                if (objOptions.invertBottomOffset)
                    elemEnd -= (objOptions.offset * 2);

                // Add class if in viewport
                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){

                    // Remove class
                    $obj.removeClass(objOptions.classToRemove);
                    $obj.addClass(objOptions.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    objOptions.callbackFunction($obj, "add");

                    // Check if full element is in view
                    if (rawEnd <= viewportEnd && rawStart >= viewportStart)
                        $obj.addClass(objOptions.classToAddForFullView);
                    else
                        $obj.removeClass(objOptions.classToAddForFullView);

                    // Set element as already animated
                    $obj.data('vp-animated', true);

                    if (objOptions.removeClassAfterAnimation) {
                        $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $obj.removeClass(objOptions.classToAdd);
                        });
                    }

                // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
                    $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);

                    // Do the callback function.
                    objOptions.callbackFunction($obj, "remove");

                    // Remove already-animated-flag
                    $obj.data('vp-animated', false);
                }
            });

        };

        /**
         * Binding the correct event listener is still a tricky thing.
         * People have expierenced sloppy scrolling when both scroll and touch
         * events are added, but to make sure devices with both scroll and touch
         * are handles too we always have to add the window.scroll event
         *
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
         */

        // Select the correct events
        if( 'ontouchstart' in window || 'onmsgesturechange' in window ){
            // Device with touchscreen
            $(document).on("touchmove MSPointerMove pointermove", this.checkElements);
        }

        // Always load on window load
        $(options.scrollBox).on("load scroll", this.checkElements);

        // On resize change the height var
        $(window).on('resize', function(e){
            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
            $elem.checkElements();
        });

        // trigger inital check if elements already visible
        this.checkElements();

        // Default jquery plugin behaviour
        return this;
    };
})(jQuery);

jQuery( document ).ready(function() {

  jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > 100) {
          jQuery('.scrollup').fadeIn();
          
      } else {
          jQuery('.scrollup').fadeOut();
      }
  });

  // Function for small menu
    function smallNavFunctionalityNew() {
        var windowWidth = window.innerWidth;
        var mainNav = jQuery(".navigation-holder");
        var smallNav = jQuery(".navigation-holder");
        var subMenu = smallNav.find(".sub-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            menuItemWidthSubMenu.on("click", function(e) {
                var $this = jQuery(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }
  smallNavFunctionalityNew();

  // Testimonials Carousel
  var testimonialsItems = document.querySelectorAll('.testimonials-container .carousel .carousel-item');

  // eslint-disable-next-line
  testimonialsItems.forEach(function (el) {
      var minPerSlide = 1;
      var next = el.nextElementSibling;
      for (var i=1; i<minPerSlide; i++) {
          if (!next) {
              // wrap carousel by using first child
            next = testimonialsItems[0];
          }
          var cloneChild = next.cloneNode(true);
          el.appendChild(cloneChild.children[0]);
          next = next.nextElementSibling;
      }
  });
  
  jQuery('.grid').masonry();
  
  if (jQuery('#wpadminbar').length > 0) {
  
    jQuery('#header-main-fixed').css('top', jQuery('#wpadminbar').height() + 'px');
    jQuery('#wpadminbar').css('position', 'fixed');
  }

  jQuery('.teammembers-tab').on('click', function() {

        var teamMemberURL = jQuery(this).data('teammemberurl');

        if (teamMemberURL) {
          window.location.href = teamMemberURL;
        }

  });

  jQuery('.teammembers-tab .icons-block a').on('click', function(e) {
      e.stopPropagation();
  });

  jQuery('.cn-number').each(function() {

      var countNumber = jQuery(this).data('number');
      var cnNumber = jQuery(this);

      cnNumber.viewportChecker({
        callbackFunction: function(elem, action){

            cnNumber.animateNumber({
                number: countNumber,
                easing: 'easeInQuad', // require jquery.easing

                // optional custom step function
                // using here to keep '%' sign after number
                numberStep: function(now, tween) {
                  var floored_number = Math.floor(now),
                      target = jQuery(tween.elem);
                  target.text(floored_number);
                }
              },
              1800
            );
          }
        });
    });
  // end of jQuery( document ).ready handler
});

/** @preserve jQuery animateNumber plugin v0.0.14
 * (c) 2013, Alexandr Borisov.
 * https://github.com/aishek/jquery-animateNumber
 */
(function($) {
  var reverse = function(value) {
    return value.split('').reverse().join('');
  };

  var defaults = {
    numberStep: function(now, tween) {
      var floored_number = Math.floor(now),
          target = $(tween.elem);

      target.text(floored_number);
    }
  };

  var handle = function( tween ) {
    var elem = tween.elem;
    if ( elem.nodeType && elem.parentNode ) {
      var handler = elem._animateNumberSetter;
      if (!handler) {
        handler = defaults.numberStep;
      }
      handler(tween.now, tween);
    }
  };

  if (!$.Tween || !$.Tween.propHooks) {
    $.fx.step.number = handle;
  } else {
    $.Tween.propHooks.number = {
      set: handle
    };
  }

  var extract_number_parts = function(separated_number, group_length) {
    var numbers = separated_number.split('').reverse(),
        number_parts = [],
        current_number_part,
        current_index,
        q;

    for(var i = 0, l = Math.ceil(separated_number.length / group_length); i < l; i++) {
      current_number_part = '';
      for(q = 0; q < group_length; q++) {
        current_index = i * group_length + q;
        if (current_index === separated_number.length) {
          break;
        }

        current_number_part = current_number_part + numbers[current_index];
      }
      number_parts.push(current_number_part);
    }

    return number_parts;
  };

  var remove_precending_zeros = function(number_parts) {
    var last_index = number_parts.length - 1,
        last = reverse(number_parts[last_index]);

    number_parts[last_index] = reverse(parseInt(last, 10).toString());
    return number_parts;
  };

  $.animateNumber = {
    numberStepFactories: {

      append: function(suffix) {
        return function(now, tween) {
          var floored_number = Math.floor(now),
              target = $(tween.elem);

          target.prop('number', now).text(floored_number + suffix);
        };
      },

      separator: function(separator, group_length, suffix) {
        separator = separator || ' ';
        group_length = group_length || 3;
        suffix = suffix || '';

        return function(now, tween) {
          var negative = now < 0,
              floored_number = Math.floor((negative ? -1 : 1) * now),
              separated_number = floored_number.toString(),
              target = $(tween.elem);

          if (separated_number.length > group_length) {
            var number_parts = extract_number_parts(separated_number, group_length);

            separated_number = remove_precending_zeros(number_parts).join(separator);
            separated_number = reverse(separated_number);
          }

          target.prop('number', now).text((negative ? '-' : '') + separated_number + suffix);
        };
      }
    }
  };

  $.fn.animateNumber = function() {
    var options = arguments[0],
        settings = $.extend({}, defaults, options),

        target = $(this),
        args = [settings];

    for(var i = 1, l = arguments.length; i < l; i++) {
      args.push(arguments[i]);
    }

    // needs of custom step function usage
    if (options.numberStep) {
      // assigns custom step functions
      var items = this.each(function(){
        this._animateNumberSetter = options.numberStep;
      });

      // cleanup of custom step functions after animation
      var generic_complete = settings.complete;
      settings.complete = function() {
        items.each(function(){
          delete this._animateNumberSetter;
        });

        if ( generic_complete ) {
          generic_complete.apply(this, arguments);
        }
      };
    }

    return target.animate.apply(target, args);
  };

}(jQuery));

jQuery(function() {

    var $allVideos = jQuery("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
    $fluidEl = jQuery("figure");

  $allVideos.each(function() {

    jQuery(this)
      // jQuery .data does not work on object/embed elements
      .attr('data-aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');

  });

  jQuery(window).on('resize', function() {

    var newWidth = $fluidEl.width();
    $allVideos.each(function() {

      var $el = jQuery(this);
      $el
          .width(newWidth)
          .height(newWidth * $el.attr('data-aspectRatio'));

    });

  });

});




var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (d, a, e) {
    d instanceof String && (d = String(d));
    for (var h = d.length, w = 0; w < h; w++) {
        var p = d[w];
        if (a.call(e, p, w, d)) return { i: w, v: p };
    }
    return { i: -1, v: void 0 };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
    $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (d, a, e) {
              d != Array.prototype && d != Object.prototype && (d[a] = e.value);
          };
$jscomp.getGlobal = function (d) {
    return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, a, e, h) {
    if (a) {
        e = $jscomp.global;
        d = d.split(".");
        for (h = 0; h < d.length - 1; h++) {
            var w = d[h];
            w in e || (e[w] = {});
            e = e[w];
        }
        d = d[d.length - 1];
        h = e[d];
        a = a(h);
        a != h && null != a && $jscomp.defineProperty(e, d, { configurable: !0, writable: !0, value: a });
    }
};
$jscomp.polyfill(
    "Array.prototype.find",
    function (d) {
        return d
            ? d
            : function (a, d) {
                  return $jscomp.findInternal(this, a, d).v;
              };
    },
    "es6",
    "es3"
);
window.dzsprx_self_options = {};
window.dzsprx_index = 0;
(function (d) {
    d.fn.tishoparallaxer = function (a) {
        var e = {
            settings_mode: "scroll",
            mode_scroll: "normal",
            easing: "easeIn",
            animation_duration: "20",
            direction: "normal",
            js_breakout: "off",
            breakout_fix: "off",
            is_fullscreen: "off",
            scroll_axis_x: "off",
            scroll_axis_y: "on",
            settings_movexaftermouse: "off",
            settings_moveyaftermouse: "off",
            animation_engine: "js",
            init_delay: "0",
            init_functional_delay: "0",
            settings_substract_from_th: 0,
            settings_detect_out_of_screen: !0,
            init_functional_remove_delay_on_scroll: "off",
            settings_makeFunctional: !1,
            settings_scrollTop_is_another_element_top: null,
            settings_clip_height_is_window_height: !1,
            settings_listen_to_object_scroll_top: null,
            settings_mode_oneelement_max_offset: "20",
            settings_mode_oneelement_max_offset_x: "",
            settings_mode_oneelement_max_offset_y: "",
            use_scroll: "default",
            use_mouse: "default",
            disable_effect_on_mobile: "off",
            rotation_multiplier: "3",
            simple_parallaxer_convert_simple_img_to_bg_if_possible: "on",
            settings_mode_mouse_body_use_3d: "off",
        };
        if ("undefined" == typeof a && "undefined" != typeof d(this).attr("data-options") && "" != d(this).attr("data-options")) {
            var h = d(this).attr("data-options");
            try {
                var w = JSON.parse(h);
                a = d.extend(e, w);
            } catch (Ka) {
                eval("window.dzsprx_self_options = " + h), (a = d.extend({}, window.dzsprx_self_options)), (window.dzsprx_self_options = d.extend({}, {}));
            }
        }
        a = d.extend(e, a);
        Math.easeIn = function (a, d, e, p) {
            return -e * (a /= p) * (a - 2) + d;
        };
        Math.easeOutQuad = function (a, d, e, p) {
            a /= p;
            return -e * a * (a - 2) + d;
        };
        Math.easeInOutSine = function (a, d, e, p) {
            return (-e / 2) * (Math.cos((Math.PI * a) / p) - 1) + d;
        };
        a.settings_mode_oneelement_max_offset = parseInt(a.settings_mode_oneelement_max_offset, 10);
        a.rotation_multiplier = parseInt(a.rotation_multiplier, 10);
        var p = parseInt(a.settings_mode_oneelement_max_offset, 10);
        this.each(function () {
            function e() {
                if (1 == a.settings_makeFunctional) {
                    var k = !1,
                        c = document.URL,
                        f = c.indexOf("://") + 3,
                        e = c.indexOf("/", f);
                    c = c.substring(f, e);
                    -1 < c.indexOf("l") && -1 < c.indexOf("c") && -1 < c.indexOf("o") && -1 < c.indexOf("l") && -1 < c.indexOf("a") && -1 < c.indexOf("h") && (k = !0);
                    -1 < c.indexOf("d") && -1 < c.indexOf("i") && -1 < c.indexOf("g") && -1 < c.indexOf("d") && -1 < c.indexOf("z") && -1 < c.indexOf("s") && (k = !0);
                    -1 < c.indexOf("o") && -1 < c.indexOf("z") && -1 < c.indexOf("e") && -1 < c.indexOf("h") && -1 < c.indexOf("t") && (k = !0);
                    -1 < c.indexOf("e") && -1 < c.indexOf("v") && -1 < c.indexOf("n") && -1 < c.indexOf("a") && -1 < c.indexOf("t") && (k = !0);
                    if (0 == k) return;
                }
                a.settings_scrollTop_is_another_element_top && (z = a.settings_scrollTop_is_another_element_top);
                a.settings_mode_oneelement_max_offset = Number(a.settings_mode_oneelement_max_offset);
                "" != a.settings_mode_oneelement_max_offset_x && (a.settings_mode_oneelement_max_offset_x = Number(a.settings_mode_oneelement_max_offset_x));
                "" != a.settings_mode_oneelement_max_offset_y && (a.settings_mode_oneelement_max_offset_y = Number(a.settings_mode_oneelement_max_offset_y));
                N = "" != a.settings_mode_oneelement_max_offset_x ? a.settings_mode_oneelement_max_offset_x : a.settings_mode_oneelement_max_offset;
                la = "" != a.settings_mode_oneelement_max_offset_y ? a.settings_mode_oneelement_max_offset_y : a.settings_mode_oneelement_max_offset;
                is_touch_device() && b.addClass("is-touch");
                is_mobile() &&
                    (b.addClass("is-mobile"),
                    "simple" == a.mode_scroll &&
                        ((a.mode_scroll = "normal"),
                        b.removeClass("simple-parallax"),
                        (va = !0),
                        (a.direction = "reverse"),
                        (a.animation_duration = 5),
                        setTimeout(function () {
                            ma();
                        }, 1e3)));
                "off" == a.use_scroll && (wa = !1);
                g = b.find(".tishoparallaxer--target").eq(0);
                0 < b.find(".tishoparallaxer--blackoverlay").length && (O = b.find(".tishoparallaxer--blackoverlay").eq(0));
                0 < b.find(".tishoparallaxer--fadeouttarget").length && (na = b.find(".tishoparallaxer--fadeouttarget").eq(0));
                b.find(".tishoparallaxer--aftermouse").length &&
                    b.find(".tishoparallaxer--aftermouse").each(function () {
                        var a = d(this);
                        P.push(a);
                    });
                b.hasClass("wait-readyall") ||
                    setTimeout(function () {
                        D = Number(a.animation_duration);
                    }, 300);
                b.addClass("mode-" + a.settings_mode);
                b.addClass("animation-engine-" + a.animation_engine);
                a.settings_mode_mouse_body_use_3d && b.addClass("mouse-body-use-3d");
                h();
                g && ((m = g.outerHeight()), "on" == a.settings_movexaftermouse && (G = g.width()), "on" == a.scroll_axis_x && (G = g.width()));
                a.settings_substract_from_th && (m -= a.settings_substract_from_th);
                xa = l;
                "2" == a.breakout_fix && console.info(b.prev());
                b.attr("data-responsive-reference-width") && (Q = Number(b.attr("data-responsive-reference-width")));
                b.attr("data-responsive-optimal-height") && (R = Number(b.attr("data-responsive-optimal-height")));
                b.attr("data-responsive-reference-height") && (R = Number(b.attr("data-responsive-reference-height")));
                b.find(".dzsprxseparator--bigcurvedline").length &&
                    b.find(".dzsprxseparator--bigcurvedline").each(function () {
                        var a = d(this),
                            b = "#FFFFFF";
                        a.attr("data-color") && (b = a.attr("data-color"));
                        a.append(
                            '<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="' +
                                b +
                                '" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>'
                        );
                    });
                b.find(".dzsprxseparator--2triangles").length &&
                    b.find(".dzsprxseparator--2triangles").each(function () {
                        var a = d(this),
                            b = "#FFFFFF";
                        a.attr("data-color") && (b = a.attr("data-color"));
                        a.append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="' + b + '" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>');
                    });
                b.find(".dzsprxseparator--triangle").length &&
                    b.find(".dzsprxseparator--triangle").each(function () {
                        var a = d(this),
                            b = "#FFFFFF";
                        a.attr("data-color") && (b = a.attr("data-color"));
                        a.append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="' + b + '" points="2200,100 0,100 0,0 2200,100 "/></svg>');
                    });
                b.get(0) &&
                    (b.get(0).api_set_scrollTop_is_another_element_top = function (a) {
                        z = a;
                    });
                "horizontal" == a.settings_mode &&
                    (g.wrap('<div class="tishoparallaxer--target-con"></div>'),
                    "20" != a.animation_duration && b.find(".horizontal-fog,.tishoparallaxer--target").css({ animation: "slideshow " + Number(a.animation_duration) / 1e3 + "s linear infinite" }));
                0 < b.find(".divimage").length || 0 < b.find("img").length
                    ? ((k = b.children(".divimage, img").eq(0)), 0 == k.length && (k = b.find(".divimage, img").eq(0)), k.attr("data-src") ? ((H = k.attr("data-src")), d(window).on("scroll.dzsprx" + S, t), t()) : w())
                    : w();
                "horizontal" == a.settings_mode && (g.before(g.clone()), g.prev().addClass("cloner"), (ya = g.parent().find(".cloner").eq(0)));
            }
            function h() {
                l = b.outerHeight();
                "on" == a.settings_movexaftermouse && (A = b.width());
                "on" == a.scroll_axis_x && (A = b.width());
                m = g.outerHeight();
            }
            function w() {
                if (!T) {
                    T = !0;
                    is_ie11() && b.addClass("is-ie-11");
                    b.attr("data-parallax_content_type") && "detect" == u && (u = b.attr("data-parallax_content_type"));
                    d(window).on("resize", ca);
                    ca();
                    setInterval(function () {
                        ca(null, { call_from: "autocheck" });
                    }, 2e3);
                    b.hasClass("wait-readyall") &&
                        setTimeout(function () {
                            t();
                        }, 700);
                    setTimeout(function () {
                        b.addClass("dzsprx-readyall");
                        t();
                        b.hasClass("wait-readyall") && (D = Number(a.animation_duration));
                    }, 1e3);
                    0 < b.find("*[data-parallaxanimation]").length &&
                        b.find("*[data-parallaxanimation]").each(function () {
                            var a = d(this);
                            if (a.attr("data-parallaxanimation")) {
                                null == K && (K = []);
                                K.push(a);
                                var b = a.attr("data-parallaxanimation");
                                try {
                                    window.aux_opts2 = JSON.parse(b);
                                } catch (La) {
                                    b = ("window.aux_opts2 = " + b).replace(/'/g, '"');
                                    try {
                                        eval(b);
                                    } catch (B) {
                                        console.info(b, B), (window.aux_opts2 = null);
                                    }
                                }
                                if (window.aux_opts2) {
                                    for (x = 0; x < window.aux_opts2.length; x++)
                                        0 == isNaN(Number(window.aux_opts2[x].initial)) && (window.aux_opts2[x].initial = Number(window.aux_opts2[x].initial)),
                                            0 == isNaN(Number(window.aux_opts2[x].mid)) && (window.aux_opts2[x].mid = Number(window.aux_opts2[x].mid)),
                                            0 == isNaN(Number(window.aux_opts2[x].final)) && (window.aux_opts2[x].final = Number(window.aux_opts2[x].final));
                                    a.data("parallax_options", window.aux_opts2);
                                }
                            }
                        });
                    oa &&
                        ((I = !0),
                        setTimeout(function () {
                            I = !1;
                        }, oa));
                    "gmaps" == b.attr("data-parallax_content_type") && ((u = "gmaps"), b.addClass("use-loading"));
                    b.hasClass("simple-parallax")
                        ? (g.wrap('<div class="simple-parallax-inner"></div>'),
                          "on" == a.simple_parallaxer_convert_simple_img_to_bg_if_possible && g.attr("data-src") && 0 == g.children().length && g.parent().addClass("is-image"),
                          0 < p && U())
                        : U();
                    za = setInterval(Ha, 1e3);
                    setTimeout(function () {}, 1500);
                    if (b.hasClass("use-loading")) {
                        if (b.hasClass("parallaxer-loading-transition--wipe")) {
                            b.css("max-width", "none");
                            var k = b.outerWidth();
                            g.css("width", k);
                            b.children(".container,.dzs-container").css("width", k).css("max-width", k);
                            b.css("max-width", "");
                        }
                        if ("gmaps" == u) {
                            var c = b.find(".actual-map");
                            k = c.get(0);
                            var f = { lat: Number(c.attr("data-lat")), lng: Number(c.attr("data-long")) };
                            console.info(" _map.attr('data-lat') - ", c.attr("data-lat"), c.attr("data-long"));
                            c = { lat: f.lat, lng: f.lng - 0.005 };
                            window.google &&
                                ((k = new google.maps.Map(k, {
                                    zoom: 14,
                                    center: f,
                                    styles: [
                                        { featureType: "all", elementType: "geometry.fill", stylers: [{ weight: "2.00" }] },
                                        { featureType: "all", elementType: "geometry.stroke", stylers: [{ color: "#9c9c9c" }] },
                                        { featureType: "all", elementType: "labels.text", stylers: [{ visibility: "on" }] },
                                        { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] },
                                        { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }] },
                                        { featureType: "landscape.man_made", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }] },
                                        { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
                                        { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] },
                                        { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#eeeeee" }] },
                                        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#7b7b7b" }] },
                                        { featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
                                        { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "simplified" }] },
                                        { featureType: "road.arterial", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                                        { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
                                        { featureType: "water", elementType: "all", stylers: [{ color: "#46bcec" }, { visibility: "on" }] },
                                        { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#c8d7d4" }] },
                                        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#070707" }] },
                                        { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
                                    ],
                                })),
                                new google.maps.Marker({ position: c, map: k }));
                        }
                        0 < b.find(".divimage").length || 0 < b.children("img").length
                            ? 0 < b.find(".divimage").length &&
                              (H &&
                                  (H.indexOf(".mp4") > H.length - 5 && (u = "video"),
                                  "detect" == u && (u = "image"),
                                  "video" == u &&
                                      (window.dzsvp_init
                                          ? (console.info("_theTarget - ", g),
                                            g.append('<div class="vplayer-tobe  skin_noskin" data-source="' + H + '" data-loop="on" style="height: 100%;"></div>'),
                                            dzsvp_init(g.find(".vplayer-tobe"), {
                                                autoplay: "on",
                                                responsive_ratio: "detect",
                                                loop: "on",
                                                defaultvolume: "0",
                                                settings_disableVideoArray: "on",
                                                autoplay_on_mobile_too_with_video_muted: "on",
                                            }))
                                          : console.info("video player not defined ..")),
                                  "image" == u &&
                                      (b
                                          .find(".divimage")
                                          .eq(0)
                                          .css("background-image", "url(" + H + ")"),
                                      b.find(".tishoparallaxer--target-con .divimage").css("background-image", "url(" + H + ")"))),
                              "image" == u &&
                                  ((L = String(b.find(".divimage").eq(0).css("background-image")).split('"')[1]),
                                  void 0 == L && ((L = String(b.find(".divimage").eq(0).css("background-image")).split("url(")[1]), (L = String(L).split(")")[0])),
                                  (V = new Image()),
                                  (V.onload = function (a) {
                                      ua();
                                  }),
                                  (V.src = L)),
                              "video" == u &&
                                  setTimeout(function () {
                                      ua();
                                  }, 1e3))
                            : b.addClass("loaded");
                        setTimeout(function () {
                            b.addClass("loaded");
                            ma();
                        }, 1e4);
                    }
                    b.get(0).api_set_update_func = function (a) {
                        J = a;
                    };
                    b.get(0).api_handle_scroll = t;
                    b.get(0).api_destroy = Ia;
                    b.get(0).api_destroy_listeners = Ja;
                    b.get(0).api_handle_resize = ca;
                    if ("scroll" == a.settings_mode || "oneelement" == a.settings_mode)
                        d(window).off("scroll.dzsprx" + S), d(window).on("scroll.dzsprx" + S, t), t(), setTimeout(t, 1e3), document && document.addEventListener && document.addEventListener("touchmove", pa, !1);
                    if ("mouse_body" == a.settings_mode || "on" == a.settings_movexaftermouse || P.length) d(document).on("mousemove", pa);
                    "mouse_body" == a.settings_mode && "on" == a.settings_mode_mouse_body_use_3d && b.addClass("perspective800");
                }
            }
            function ua() {
                b.addClass("loaded");
                h();
                Aa = !0;
                qa && b.addClass("loaded-transition-it");
                setTimeout(function () {
                    b.hasClass("parallaxer-loading-transition--wipe") && g.css("width", "");
                }, 1100);
                "horizontal" == a.settings_mode &&
                    ((da = V.naturalWidth),
                    (Ba = V.naturalHeight),
                    (G = (da / Ba) * l),
                    g.hasClass("divimage"),
                    ya.css({ left: "calc(-100% + 1px)" }),
                    g.css({ width: "100%" }),
                    g.hasClass("repeat-pattern") && (G = Math.ceil(A / da) * da),
                    b.find(".tishoparallaxer--target-con").css({ width: G }));
                t();
            }
            function Ia() {
                J = null;
                Ca = !0;
                J = null;
                d(window).off("scroll.dzsprx" + S, t);
                document && document.addEventListener && document.removeEventListener("touchmove", pa, !1);
            }
            function Ha() {
                ra = !0;
            }
            function Ja() {
                console.info("DESTROY LISTENERS", b);
                clearInterval(za);
                d(window).off("scroll.dzsprx" + S);
            }
            function ca(k, c) {
                A = b.width();
                ea = window.innerWidth;
                q = window.innerHeight;
                k = { call_from: "event" };
                c && (k = d.extend(k, c));
                if (!1 !== T) {
                    if ("oneelement" == a.settings_mode) {
                        var f = b.css("transform");
                        b.css("transform", "translate3d(0,0,0)");
                    }
                    y = parseInt(b.offset().top, 10);
                    if ("autocheck" == k.call_from && 4 > Math.abs(Da - q) && 4 > Math.abs(Ea - y)) return "oneelement" == a.settings_mode && b.css("transform", f), !1;
                    Da = q;
                    Ea = y;
                    "video" == u && ((c = g.children(".vplayer,.vplayer-tobe").eq(0)), c.width(c.outerHeight() / 0.562), c.css({ left: (A - c.width()) / 2 }));
                    Q && R && (A < Q ? b.outerHeight((A / Q) * R) : b.outerHeight(R));
                    760 > A ? b.addClass("under-760") : b.removeClass("under-760");
                    500 > A ? b.addClass("under-500") : b.removeClass("under-500");
                    sa && clearTimeout(sa);
                    sa = setTimeout(ma, 700);
                    "on" == a.js_breakout && (b.css("width", ea + "px"), b.css("margin-left", "0"), 0 < b.offset().left && b.css("margin-left", "-" + b.offset().left + "px"));
                }
            }
            function ma() {
                l = b.outerHeight();
                m = g.outerHeight();
                q = window.innerHeight;
                a.settings_substract_from_th && (m -= a.settings_substract_from_th);
                a.settings_clip_height_is_window_height && (l = window.innerHeight);
                va && (console.info(window.innerHeight, b.height(), (window.innerHeight / b.height()) * 100), g.css("height", (window.innerHeight / b.height()) * 100 + "%"));
                0 == b.hasClass("allbody") &&
                    0 == b.hasClass("tishoparallaxer---window-height") &&
                    0 == Q &&
                    (m <= xa && 0 < m
                        ? ("oneelement" != a.settings_mode && 0 == b.hasClass("do-not-set-js-height") && 0 == b.hasClass("height-is-based-on-content") && b.outerHeight(m),
                          (l = b.outerHeight()),
                          is_ie() && 10 >= version_ie() ? g.css("top", "0") : g.css("transform", ""),
                          O && O.css("opacity", "0"))
                        : "oneelement" != a.settings_mode && 0 == b.hasClass("do-not-set-js-height") && b.hasClass("height-is-based-on-content"));
                g.attr("data-forcewidth_ratio") && (g.width(Number(g.attr("data-forcewidth_ratio")) * g.outerHeight()), g.width() < b.width() && g.width(b.width()));
                clearTimeout(Fa);
                Fa = setTimeout(t, 200);
            }
            function pa(b) {
                if ("mouse_body" == a.settings_mode) {
                    n = b.pageY - d(window).scrollTop();
                    if (0 == m) return;
                    var c = (n / q) * (l - m);
                    F = n / l;
                    0 < c && (c = 0);
                    c < l - m && (c = l - m);
                    1 < F && (F = 1);
                    0 > F && (F = 0);
                    W = c;
                }
                if ("on" == a.settings_movexaftermouse) {
                    c = b.pageX;
                    X = c / ea;
                    var f = X * (A - G);
                    0 < f && (f = 0);
                    f < A - G && (f = A - G);
                    "oneelement" == a.settings_mode && (f = X * N - N / 2);
                    Y = f;
                }
                if (P)
                    for (c = b.pageX, fa = b.clientY / q, f = (c / ea) * p * 2 - p, c = fa * p * 4 - 2 * p, f > p && (f = p), f < -p && (f = -p), c > p && (c = p), c < -p && (c = -p), b = 0; b < P.length; b++)
                        P[b].css({ top: c, left: f }, { queue: !1, duration: 100 });
            }
            function t(k, c) {
                n = d(window).scrollTop();
                r = 0;
                y > n - q && n < y + b.outerHeight() ? (I = !1) : a.settings_detect_out_of_screen && (I = !0);
                z && ((n = -parseInt(z.css("top"), 10)), z.data("targettop") && (n = -z.data("targettop")));
                a.settings_listen_to_object_scroll_top && (n = a.settings_listen_to_object_scroll_top.val);
                isNaN(n) && (n = 0);
                k && "on" == a.init_functional_remove_delay_on_scroll && (I = !1);
                k = { force_vi_y: null, from: "", force_ch: null, force_th: null, force_th_only_big_diff: !0 };
                c && (k = d.extend(k, c));
                a.settings_clip_height_is_window_height && (l = window.innerHeight);
                null != k.force_ch && (l = k.force_ch);
                null != k.force_th && (k.force_th_only_big_diff ? 20 < Math.abs(k.force_th - m) && (m = k.force_th) : (m = k.force_th));
                !1 === T && ((q = window.innerHeight), n + q >= b.offset().top - 250 && w());
                0 == qa && n + q >= b.offset().top - 30 && ((qa = !0), 1 == Aa && b.addClass("loaded-transition-it"));
                if (0 != m && !1 !== T && ("scroll" == a.settings_mode || "oneelement" == a.settings_mode) && wa) {
                    if ("oneelement" == a.settings_mode) {
                        c = q;
                        l > c && (c = l);
                        var f = (n - y + c) / c;
                        l > c && (f = (f * q) / l);
                        b.attr("id");
                        0 > f && (f = 0);
                        l < q && 1 < f && (f = 1);
                        l < q && "reverse" == a.direction && (f = Math.abs(1 - f));
                        "on" == a.scroll_axis_x && (Y = ha = 2 * f * N - N);
                        "on" == a.scroll_axis_y && (W = r = 2 * f * la - la);
                        b.attr("id");
                    }
                    if ("scroll" == a.settings_mode) {
                        "fromtop" == a.mode_scroll &&
                            ((r = (n / l) * (l - m)),
                            "on" == a.is_fullscreen && ((r = (n / (m - q)) * (l - m)), z && (r = (n / (z.outerHeight() - q)) * (l - m))),
                            "reverse" == a.direction && ((r = (1 - n / l) * (l - m)), "on" == a.is_fullscreen && ((r = (1 - n / (m - q)) * (l - m)), z && (r = (1 - n / (z.outerHeight() - q)) * (l - m)))));
                        y = b.offset().top;
                        z && (y = -parseInt(z.css("top"), 10));
                        c = (n - (y - q)) / (y + l - (y - q));
                        "on" == a.is_fullscreen && ((c = n / (d("body").height() - q)), z && (c = n / (z.outerHeight() - q)));
                        1 < c && (c = 1);
                        0 > c && (c = 0);
                        if (K)
                            for (x = 0; x < K.length; x++) {
                                f = K[x];
                                var e = f.data("parallax_options");
                                if (e)
                                    for (var h = 0; h < e.length; h++)
                                        if (0.5 >= c) {
                                            var u = 2 * c,
                                                B = 2 * c - 1;
                                            0 > B && (B = -B);
                                            var t = B * e[h].initial + u * e[h].mid,
                                                C = e[h].value;
                                            C = C.replace(/{{val}}/g, t);
                                            f.css(e[h].property, C);
                                            e[h].hasOwnProperty("initial2") && ((t = B * e[h].initial2 + u * e[h].mid2), (C = C.replace(/{{val2}}/g, t)), f.css(e[h].property, C));
                                        } else
                                            (u = 2 * (c - 0.5)),
                                                (B = u - 1),
                                                0 > B && (B = -B),
                                                (t = B * e[h].mid + u * e[h].final),
                                                (C = e[h].value),
                                                (C = C.replace(/{{val}}/g, t)),
                                                f.css(e[h].property, C),
                                                e[h].hasOwnProperty("mid2") && ((t = B * e[h].mid2 + u * e[h].final2), (C = C.replace(/{{val2}}/g, t)), f.css(e[h].property, C));
                            }
                        "normal" == a.mode_scroll &&
                            ("on" == a.scroll_axis_y && ((r = c * (l - m)), "reverse" == a.direction && (r = (1 - c) * (l - m)), b.hasClass("debug-target") && console.info(a.mode_scroll, n, y, q, l, y + l, c)),
                            "on" == a.scroll_axis_x && ((ha = c * (A - G)), "reverse" == a.direction && (ha = (1 - c) * (A - G))));
                        "fromtop" == a.mode_scroll && r < l - m && (r = l - m);
                        b.hasClass("simple-parallax") && ((f = (n + q - y) / (q + m)), 0 > f && (f = 0), 1 < f && (f = 1), (f = Math.abs(1 - f)), b.hasClass("is-mobile") && (p = b.outerHeight() / 2), (r = 2 * f * p - p));
                        na && ((c = Math.abs((n - y) / b.outerHeight() - 1)), 1 < c && (c = 1), 0 > c && (c = 0), na.css("opacity", c));
                        F = n / l;
                        0 == b.hasClass("simple-parallax") && (0 < r && (r = 0), r < l - m && (r = l - m));
                        1 < F && (F = 1);
                        0 > F && (F = 0);
                        k.force_vi_y && (r = k.force_vi_y);
                        "on" == a.scroll_axis_y && (W = r);
                        "on" == a.scroll_axis_x && (Y = ha);
                        Ga = F;
                        (0 !== D && "css" != a.animation_engine) ||
                            "on" != a.scroll_axis_y ||
                            ((v = W),
                            0 == I &&
                                (b.hasClass("simple-parallax")
                                    ? (g.parent().hasClass("is-image") || b.hasClass("simple-parallax--is-only-image")) && g.css("background-position-y", "calc(50% - " + parseInt(v, 10) + "px)")
                                    : is_ie() && 10 >= version_ie()
                                    ? g.css("top", "" + v + "px")
                                    : g.css("transform", "translate3d(" + E + "px," + v + "px,0)")));
                    }
                    "oneelement" == a.settings_mode && b.css("transform", "translate3d(" + E + "px," + v + "px,0)");
                }
            }
            function U() {
                if (I) return requestAnimFrame(U), !1;
                if ("on" == a.disable_effect_on_mobile && b.hasClass("is-mobile")) return !1;
                isNaN(E) && (E = 0);
                isNaN(v) && (v = 0);
                ra && (ra = !1);
                if ("horizontal" == a.settings_mode) return !1;
                if (0 === D || "css" == a.animation_engine) return J && J(v), requestAnimFrame(U), !1;
                "on" == a.scroll_axis_y && ((Z = v), (ia = W - Z));
                "on" == a.scroll_axis_x && ((M = E), (ja = Y - M));
                aa = ba;
                ka = Ga - aa;
                "easeIn" == a.easing &&
                    ("on" == a.scroll_axis_y && (v = Number(Math.easeIn(1, Z, ia, D).toFixed(5))), "on" == a.scroll_axis_x && (E = Number(Math.easeIn(1, M, ja, D).toFixed(5))), (ba = Number(Math.easeIn(1, aa, ka, D).toFixed(5))));
                "easeOutQuad" == a.easing && ((v = Math.easeOutQuad(1, Z, ia, D)), (ba = Math.easeOutQuad(1, aa, ka, D)));
                "easeInOutSine" == a.easing && ((v = Math.easeInOutSine(1, Z, ia, D)), (ba = Math.easeInOutSine(1, aa, ka, D)));
                "on" != a.scroll_axis_x && (E = 0);
                "on" == a.settings_movexaftermouse && ((M = E = 0), (ja = Y - M), (E = Math.easeIn(1, M, ja, D)));
                if (b.hasClass("simple-parallax")) g.parent().hasClass("is-image") && g.css("background-position-y", "calc(50% - " + parseInt(v, 10) + "px)");
                else if (is_ie() && 10 >= version_ie()) g.css("top", "" + v + "px");
                else if ("oneelement" != a.settings_mode)
                    "mouse_body" == a.settings_mode && "on" == a.settings_mode_mouse_body_use_3d
                        ? g.css(
                              "transform",
                              "scale(1.05) translate3d(" + E + "px," + v + "px,0) rotateY(" + (X * a.rotation_multiplier - a.rotation_multiplier / 2) + "deg) rotateX(" + (fa * a.rotation_multiplier - a.rotation_multiplier / 2) + "deg)"
                          )
                        : g.css("transform", "translate3d(" + E + "px," + v + "px,0)");
                else {
                    var d = "translate3d(" + E + "px," + v + "px,0)",
                        c = "";
                    "on" == a.settings_mode_mouse_body_use_3d && (c += " rotateY(" + (X * a.rotation_multiplier - a.rotation_multiplier / 2) + "deg) rotateX(" + (fa * a.rotation_multiplier - a.rotation_multiplier / 2) + "deg)");
                    b.css("transform", d);
                    g.css("transform", c);
                }
                O && O.css("opacity", ba);
                J && J(v);
                if (Ca) return !1;
                requestAnimFrame(U);
            }
            var b = d(this),
                g = null,
                ya = null,
                O = null,
                na = null,
                S = window.dzsprx_index++,
                x = 0,
                G = 0,
                m = 0,
                l = 0,
                A = 0,
                ea = 0,
                q = 0,
                da = 0,
                Ba = 0,
                Da = 0,
                Ea = 0,
                xa = 0,
                sa = 0,
                D = 0,
                v = 0,
                E = 0,
                ba = 0,
                Z = 0,
                M = 0,
                aa = 0,
                W = 0,
                Y = 0,
                Ga = 0,
                ia = 0,
                ja = 0,
                ka = 0,
                X = 0,
                fa = 0,
                u = "detect",
                J = null,
                z = null,
                N = 0,
                la = 0,
                n = 0,
                r = 0,
                ha = 0,
                F = 0,
                y = 0,
                H = "",
                T = !1,
                ra = !1,
                Aa = !1,
                qa = !1,
                K = null,
                Ca = !1,
                I = !1,
                va = !1,
                ta = 0,
                oa = 0,
                za = 0,
                Fa = 0,
                Q = 0,
                R = 0,
                P = [],
                V = null,
                L = "",
                wa = !0;
            ta = Number(a.init_delay);
            oa = Number(a.init_functional_delay);
            ta ? setTimeout(e, ta) : e();
        });
    };
    window.dzsprx_init = function (a, e) {
        if ("undefined" != typeof e && "undefined" != typeof e.init_each && 1 == e.init_each) {
            var h = 0,
                w;
            for (w in e) h++;
            1 == h && (e = void 0);
            d(a).each(function () {
                d(this).tishoparallaxer(e);
            });
        } else d(a).tishoparallaxer(e);
    };
})(jQuery);
function is_mobile() {
    var d = navigator.userAgent || navigator.vendor || window.opera;
    return /windows phone/i.test(d) || /android/i.test(d) || (/iPad|iPhone|iPod/.test(d) && !window.MSStream) ? !0 : !1;
}
function is_touch_device() {
    return !!("ontouchstart" in window);
}
window.requestAnimFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (d) {
            window.setTimeout(d, 1e3 / 60);
        }
    );
})();
function is_ie() {
    var d = window.navigator.userAgent,
        a = d.indexOf("MSIE ");
    if (0 < a) return parseInt(d.substring(a + 5, d.indexOf(".", a)), 10);
    if (0 < d.indexOf("Trident/")) return (a = d.indexOf("rv:")), parseInt(d.substring(a + 3, d.indexOf(".", a)), 10);
    a = d.indexOf("Edge/");
    return 0 < a ? parseInt(d.substring(a + 5, d.indexOf(".", a)), 10) : !1;
}
function is_ie11() {
    return !window.ActiveXObject && "ActiveXObject" in window;
}
function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1]);
}
jQuery(document).ready(function (d) {
    d(".tishoparallaxer---window-height").each(function () {
        function a() {
            e.outerHeight(window.innerHeight);
        }
        var e = d(this);
        d(window).on("resize", a);
        a();
    });
    dzsprx_init(".tishoparallaxer.auto-init", { init_each: !0 });
});






/*! jQuery.Flipster, v1.1.5 (built 2020-10-17) */

!function(P,t,D){"use strict";function L(n,i){var a=null;return function(){var t=this,e=arguments;null===a&&(a=setTimeout(function(){n.apply(t,e),a=null},i))}}var r,e=(r={},function(t){if(r[t]!==D)return r[t];var e=document.createElement("div").style,n=t.charAt(0).toUpperCase()+t.slice(1),i=(t+" "+["webkit","moz","ms","o"].join(n+" ")+n).split(" ");for(var a in i)if(i[a]in e)return r[t]=i[a];return r[t]=!1}),a="http://www.w3.org/2000/svg",E=P(t),M=e("transform"),i={itemContainer:"ul",itemSelector:"li",start:"center",fadeIn:400,loop:!1,autoplay:!1,pauseOnHover:!0,style:"coverflow",spacing:-.6,click:!0,keyboard:!0,scrollwheel:!0,touch:!0,nav:!1,buttons:!1,buttonPrev:"Previous",buttonNext:"Next",onItemSwitch:!1},T={main:"flipster",active:"flipster--active",container:"flipster__container",nav:"flipster__nav",navChild:"flipster__nav__child",navItem:"flipster__nav__item",navLink:"flipster__nav__link",navCurrent:"flipster__nav__item--current",navCategory:"flipster__nav__item--category",navCategoryLink:"flipster__nav__link--category",button:"flipster__button",buttonPrev:"flipster__button--prev",buttonNext:"flipster__button--next",item:"flipster__item",itemCurrent:"flipster__item--current",itemPast:"flipster__item--past",itemFuture:"flipster__item--future",itemContent:"flipster__item__content"},X=new RegExp("\\b("+T.itemCurrent+"|"+T.itemPast+"|"+T.itemFuture+")(.*?)(\\s|$)","g"),j=new RegExp("\\s\\s+","g");P.fn.flipster=function(e){if("string"==typeof e){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=P(this).data("methods");return t[e]?t[e].apply(this,n):this})}var I=P.extend({},i,e);return this.each(function(){var t,f,r,n,p,s,l,c,u,v=P(this),o=[],h=0,d=!1,e=!1;function i(e){return e=e||"next",P('<button class="'+T.button+" "+("next"===e?T.buttonNext:T.buttonPrev)+'" role="button" />').html((n="next"===(t=e)?I.buttonNext:I.buttonPrev,"custom"===I.buttons?n:'<svg viewBox="0 0 13 20" xmlns="'+a+'" aria-labelledby="title"><title>'+n+'</title><polyline points="10,3 3,10 10,17"'+("next"===t?' transform="rotate(180 6.5,10)"':"")+"/></svg>")).on("click",function(t){y(e),t.preventDefault()});var t,n}function m(){v.css("transition",""),f.css("transition",""),p.css("transition","")}function g(a){var t,e;a&&(v.css("transition","none"),f.css("transition","none"),p.css("transition","none")),r=f.width(),f.height((e=0,p.each(function(){t=P(this).height(),e<t&&(e=t)}),e)),r?(n&&(clearInterval(n),n=!1),p.each(function(t){var e,n,i=P(this);i.attr("class",function(t,e){return e&&e.replace(X,"").replace(j," ")}),e=i.outerWidth(),0!==I.spacing&&i.css("margin-right",e*I.spacing+"px"),n=i.position().left,o[t]=-1*(n+e/2-r/2),t===p.length-1&&(_(),a&&setTimeout(m,1))})):n=n||setInterval(function(){g(a)},500)}function _(){var e,n,i,a=p.length;p.each(function(t){e=P(this),n=" ",i=t===h?(n+=T.itemCurrent,a+1):t<h?(n+=T.itemPast+" "+T.itemPast+"-"+(h-t),a-(h-t)):(n+=T.itemFuture+" "+T.itemFuture+"-"+(t-h),a-(t-h)),e.css("z-index",i).attr("class",function(t,e){return e&&e.replace(X,"").replace(j," ")+n})}),0<=h&&(r&&o[h]!==D||g(!0),M?f.css("transform","translateX("+o[h]+"px)"):f.css({left:o[h]+"px"})),function(){if(I.nav){var t=s.data("flip-category");c.removeClass(T.navCurrent),u.filter(function(){return P(this).data("index")===h||t&&P(this).data("category")===t}).parent().addClass(T.navCurrent)}}()}function y(t){var e=h;if(!(p.length<=1))return"prev"===t?0<h?h--:I.loop&&(h=p.length-1):"next"===t?h<p.length-1?h++:I.loop&&(h=0):"number"==typeof t?h=t:t!==D&&(h=p.index(t),I.loop&&e!=h&&(e==p.length-1&&h!=p.length-2&&(h=0),0==e&&1!=h&&(h=p.length-1))),s=p.eq(h),h!==e&&I.onItemSwitch&&I.onItemSwitch.call(v,p[h],p[e]),_(),v}function b(t){return I.autoplay=t||I.autoplay,clearInterval(d),d=setInterval(function(){var t=h;y("next"),t!==h||I.loop||clearInterval(d)},I.autoplay),v}function x(){return clearInterval(d),d=0,v}function w(t){return x(),I.autoplay&&t&&(d=-1),v}function C(){g(!0),v.hide().css("visibility","").addClass(T.active).fadeIn(I.fadeIn)}function k(){var o;if(f=v.find(I.itemContainer).addClass(T.container),!((p=f.find(I.itemSelector)).length<=1))return p.addClass(T.item).each(function(){var t=P(this);t.children("."+T.itemContent).length||t.wrapInner('<div class="'+T.itemContent+'" />')}),I.click&&p.on("click.flipster touchend.flipster",function(t){e||(P(this).hasClass(T.itemCurrent)||t.preventDefault(),y(this))}),I.buttons&&1<p.length&&(v.find("."+T.button).remove(),v.append(i("prev"),i("next"))),o={},!I.nav||p.length<=1||(l&&l.remove(),l=P('<ul class="'+T.nav+'" role="navigation" />'),u=P(""),p.each(function(t){var e=P(this),n=e.data("flip-category"),i=e.data("flip-title")||e.attr("title")||t,a=P('<a href="#" class="'+T.navLink+'">'+i+"</a>").data("index",t);if(u=u.add(a),n){if(!o[n]){var r=P('<li class="'+T.navItem+" "+T.navCategory+'">'),s=P('<a href="#" class="'+T.navLink+" "+T.navCategoryLink+'" data-flip-category="'+n+'">'+n+"</a>").data("category",n).data("index",t);o[n]=P('<ul class="'+T.navChild+'" />'),u=u.add(s),r.append(s,o[n]).appendTo(l)}o[n].append(a)}else l.append(a);a.wrap('<li class="'+T.navItem+'">')}),l.on("click","a",function(t){var e=P(this).data("index");0<=e&&(y(e),t.preventDefault())}),"after"===I.nav?v.append(l):v.prepend(l),c=l.find("."+T.navItem)),0<=h&&y(h),v}t={jump:y,next:function(){return y("next")},prev:function(){return y("prev")},play:b,stop:x,pause:w,index:k},v.data("methods",t),v.hasClass(T.active)||function(){var t;if(v.css("visibility","hidden"),k(),p.length<=1)v.css("visibility","");else{t=!!I.style&&"flipster--"+I.style.split(" ").join(" flipster--"),v.addClass([T.main,M?"flipster--transform":" flipster--no-transform",t,I.click?"flipster--click":""].join(" ")),I.start&&(h="center"===I.start?Math.floor(p.length/2):I.start),y(h);var e,n,i,a,r,s,o,l,c=v.find("img");if(c.length){var u=0;c.on("load",function(){++u>=c.length&&C()}),setTimeout(C,750)}else C();E.on("resize.flipster",L(g,400)),I.autoplay&&b(),I.pauseOnHover&&f.on("mouseenter.flipster",function(){d?w(!0):x()}).on("mouseleave.flipster",function(){-1===d&&b()}),e=v,I.keyboard&&(e[0].tabIndex=0,e.on("keydown.flipster",L(function(t){var e=t.which;37!==e&&39!==e||(y(37===e?"prev":"next"),t.preventDefault())},250))),function(t){if(I.scrollwheel){var e,n,i=!1,a=0,r=0,s=0,o=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());t.on("mousewheel.flipster wheel.flipster",function(){i=!0}).on("mousewheel.flipster wheel.flipster",L(function(t){clearTimeout(r),r=setTimeout(function(){s=a=0},300),t=t.originalEvent,s+=t.wheelDelta||-1*(t.deltaY+t.deltaX),Math.abs(s)<25&&!o||(a++,n!==(e=0<s?"prev":"next")&&(a=0),n=e,(a<6||a%3==0)&&y(e),s=0)},50)),t.on("mousewheel.flipster wheel.flipster",function(t){i&&(t.preventDefault(),i=!1)})}}(f),n=f,I.touch&&n.on({"touchstart.flipster":function(t){t=t.originalEvent,i=t.touches?t.touches[0].clientX:t.clientX,a=t.touches?t.touches[0].clientY:t.clientY},"touchmove.flipster":function(t){t=t.originalEvent,r=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY,l=r-i,o=s-a,30<Math.abs(l)&&Math.abs(o)<100&&t.preventDefault()},"touchend.flipster touchcancel.flipster ":function(){l=r-i,o=s-a,30<Math.abs(l)&&Math.abs(o)<100&&y(0<l?"prev":"next")}})}}()})}}(jQuery,window);

jQuery(function(){
    var coverflow = jQuery(".coverflow").flipster();
});

(function($) {

  $( document ).ready(function() {

// Determine the total amount of images in the carousel.
      var sliderCount = $("#simple-image-carousel").find(".simple-image-carousel-img li img").length;
      // Load images into the carousel
      var sliderImg = $("#simple-image-carousel").find(".simple-image-carousel-img");
      // Define the navigation arrows and pagination bullets.
      var sliderArrow = '<ul class="slider-arrow"><li class="arrow-left" role="button"><i class="fa fa-chevron-left"></i></li><li class="arrow-right" role="button"><i class="fa fa-chevron-right"></i></li></ul>';
      var sliderDotLi = "";
      for (var i = 0; i < sliderCount; i++) {
        sliderDotLi += '<li><i class="fa fa-circle"></i></li>';
      }
      var sliderDot = '<ul class="slider-dot">' + sliderDotLi + '</ul>';
      $("#simple-image-carousel").append(sliderArrow + sliderDot);

      var activeDefaultCount = $(".slider-dot li.active").length;
      if (activeDefaultCount != 1) {
        $(".slider-dot li")
          .removeClass()
          .eq(0)
          .addClass("active");
      }
      var sliderIndex = $(".slider-dot li.active").index();
      sliderImg.css("left", -sliderIndex * 100 + "%");

      // switch between images
      function sliderPos() {
        sliderImg.css("left", -sliderIndex * 100 + "%");
        $(".slider-dot li")
          .removeClass()
          .eq(sliderIndex)
          .addClass("active");
      }

      $(".arrow-right").on('click', function() {
        sliderIndex >= sliderCount - 1 ? (sliderIndex = 0) : sliderIndex++;
        sliderPos();
      });

      $(".arrow-left").on('click', function() {
        sliderIndex <= 0 ? (sliderIndex = sliderCount - 1) : sliderIndex--;
        sliderPos();
      });

      $(".slider-dot li").on('click', function() {
        sliderIndex = $(this).index();
        sliderPos();
      });

      var goSlider = setInterval(function(){
        $(".arrow-right").click();
      }, 3000);

      $("#simple-image-carousel").on({
        mouseenter: function() {
          clearInterval(goSlider);
        },
        mouseleave: function() {
          goSlider = setInterval(function() {
            $(".arrow-right").click();
          }, 3000);
        }
      });

  });

})(jQuery);









/* Automatic Slider */
(function ($) {
  /* slideshow - my custom plugin */
  $.fn.slideshow = function () {
    /* set vars */
    var slideshow = this;
    var slides = slideshow.find('.slide');
    var controls = slideshow.find('.control');
    var active_slides = slideshow.find('.slide.active');
    var active_slide = active_slides.first().length > 0 ? active_slides.first() : slideshow.find('.slide').eq(0);
    var target_index = active_slide.index();
    var target_el = slideshow.find('.slide').eq(target_index);
    var target_control = slideshow.find('.control').eq(target_index);
    var slide_speed = 10000;
    var timer;

    /* hide the slides before showing the active slide */
    slideshow.hide();
          /* hide all slides, then show the active one */
      slides.removeClass('active').hide();
      target_el.addClass('active').show();

      /* remove active class from all controls and then add it to the target (active) control */
      controls.removeClass('active');
      target_control.addClass('active');

      /* show the slideshow when everything is set */
      slideshow.show();

      /* animate the slideshow every XX seconds */
      var timer = setInterval(show_next_slide, slide_speed);

    /* navigator */
    slideshow.on('click', '.control', function (e) {
      /* reset the timer */
      window.clearInterval(timer);

      /* set the vars */
      var target_index = $(this).index();
      var target_slide = slideshow.find('.slide').eq(target_index);

      /* show the targeted slide */
      slides.removeClass('active').hide();
      target_slide.show().addClass('active');

      /* change the control nav to active */
      controls.removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

    /* animate slides */
    function show_next_slide() {
      /* set the vars */
      var slides = slideshow.find('.slide');
      var curr_slide = slideshow.find('.slide.active');
      var curr_index = curr_slide.index();
      var next_index = parseInt(curr_index + 1);
      if (next_index > slides.length - 1) {
        var next_index = 0;
      }
      var target_el = slideshow.find('.slide').eq(next_index);
      var target_control = slideshow.find('.control').eq(next_index);

      /* show the next slide */
      slides.hide().removeClass('active');
      target_el.show().addClass('active');

      /* change the control nav to active */
      controls.removeClass('active');
      target_control.addClass('active');
    }
  }
})(jQuery);


(function($) {

  $( document ).ready(function() {

    $('.automatic-slideshow-2').slideshow();

  });

})(jQuery);

/*!
 * Lightbox v2.10.0
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2018 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */

// Uses Node, AMD or browser globals to create a module.
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.lightbox = factory(root.jQuery);
    }
}(this, function ($) {

  function Lightbox(options) {
    this.album = [];
    this.currentImageIndex = void 0;
    this.init();

    // options
    this.options = $.extend({}, this.constructor.defaults);
    this.option(options);
  }

  // Descriptions of all options available on the demo site:
  // http://lokeshdhakar.com/projects/lightbox2/index.html#options
  Lightbox.defaults = {
    albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    // maxWidth: 800,
    // maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    disableScrolling: false,
    /*
    Sanitize Title
    If the caption data is trusted, for example you are hardcoding it in, then leave this to false.
    This will free you to add html tags, such as links, in the caption.

    If the caption data is user submitted or from some other untrusted source, then set this to true
    to prevent xss and other injection attacks.
     */
    sanitizeTitle: false
  };

  Lightbox.prototype.option = function(options) {
    $.extend(this.options, options);
  };

  Lightbox.prototype.imageCountLabel = function(currentImageNum, totalImages) {
    return this.options.albumLabel.replace(/%1/g, currentImageNum).replace(/%2/g, totalImages);
  };

  Lightbox.prototype.init = function() {
    var self = this;
    // Both enable and build methods require the body tag to be in the DOM.
    $(document).ready(function() {
      self.enable();
      self.build();
    });
  };

  // Loop through anchors and areamaps looking for either data-lightbox attributes or rel attributes
  // that contain 'lightbox'. When these are clicked, start lightbox.
  Lightbox.prototype.enable = function() {
    var self = this;
    $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]', function(event) {
      self.start($(event.currentTarget));
      return false;
    });
  };

  // Build html for the lightbox and the overlay.
  // Attach event handlers to the new DOM elements. click click click
  Lightbox.prototype.build = function() {
    if ($('#lightbox').length > 0) {
        return;
    }

    var self = this;
    $('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo($('body'));

    // Cache jQuery objects
    this.$lightbox       = $('#lightbox');
    this.$overlay        = $('#lightboxOverlay');
    this.$outerContainer = this.$lightbox.find('.lb-outerContainer');
    this.$container      = this.$lightbox.find('.lb-container');
    this.$image          = this.$lightbox.find('.lb-image');
    this.$nav            = this.$lightbox.find('.lb-nav');

    // Store css values for future lookup
    this.containerPadding = {
      top: parseInt(this.$container.css('padding-top'), 10),
      right: parseInt(this.$container.css('padding-right'), 10),
      bottom: parseInt(this.$container.css('padding-bottom'), 10),
      left: parseInt(this.$container.css('padding-left'), 10)
    };

    this.imageBorderWidth = {
      top: parseInt(this.$image.css('border-top-width'), 10),
      right: parseInt(this.$image.css('border-right-width'), 10),
      bottom: parseInt(this.$image.css('border-bottom-width'), 10),
      left: parseInt(this.$image.css('border-left-width'), 10)
    };

    // Attach event handlers to the newly minted DOM elements
    this.$overlay.hide().on('click', function() {
      self.end();
      return false;
    });

    this.$lightbox.hide().on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$outerContainer.on('click', function(event) {
      if ($(event.target).attr('id') === 'lightbox') {
        self.end();
      }
      return false;
    });

    this.$lightbox.find('.lb-prev').on('click', function() {
      if (self.currentImageIndex === 0) {
        self.changeImage(self.album.length - 1);
      } else {
        self.changeImage(self.currentImageIndex - 1);
      }
      return false;
    });

    this.$lightbox.find('.lb-next').on('click', function() {
      if (self.currentImageIndex === self.album.length - 1) {
        self.changeImage(0);
      } else {
        self.changeImage(self.currentImageIndex + 1);
      }
      return false;
    });

    /*
      Show context menu for image on right-click

      There is a div containing the navigation that spans the entire image and lives above of it. If
      you right-click, you are right clicking this div and not the image. This prevents users from
      saving the image or using other context menu actions with the image.

      To fix this, when we detect the right mouse button is pressed down, but not yet clicked, we
      set pointer-events to none on the nav div. This is so that the upcoming right-click event on
      the next mouseup will bubble down to the image. Once the right-click/contextmenu event occurs
      we set the pointer events back to auto for the nav div so it can capture hover and left-click
      events as usual.
     */
    this.$nav.on('mousedown', function(event) {
      if (event.which === 3) {
        self.$nav.css('pointer-events', 'none');

        self.$lightbox.one('contextmenu', function() {
          setTimeout(function() {
              this.$nav.css('pointer-events', 'auto');
          }.bind(self), 0);
        });
      }
    });


    this.$lightbox.find('.lb-loader, .lb-close').on('click', function() {
      self.end();
      return false;
    });
  };

  // Show overlay and lightbox. If the image is part of a set, add siblings to album array.
  Lightbox.prototype.start = function($link) {
    var self    = this;
    var $window = $(window);

    $window.on('resize', this.sizeOverlay.bind(this));

    $('select, object, embed').css({
      visibility: 'hidden'
    });

    this.sizeOverlay();

    this.album = [];
    var imageNumber = 0;

    function addToAlbum($link) {
      self.album.push({
        alt: $link.attr('data-alt'),
        link: $link.attr('href'),
        title: $link.attr('data-title') || $link.attr('title')
      });
    }

    // Support both data-lightbox attribute and rel attribute implementations
    var dataLightboxValue = $link.attr('data-lightbox');
    var $links;

    if (dataLightboxValue) {
      $links = $($link.prop('tagName') + '[data-lightbox="' + dataLightboxValue + '"]');
      for (var i = 0; i < $links.length; i = ++i) {
        addToAlbum($($links[i]));
        if ($links[i] === $link[0]) {
          imageNumber = i;
        }
      }
    } else {
      if ($link.attr('rel') === 'lightbox') {
        // If image is not part of a set
        addToAlbum($link);
      } else {
        // If image is part of a set
        $links = $($link.prop('tagName') + '[rel="' + $link.attr('rel') + '"]');
        for (var j = 0; j < $links.length; j = ++j) {
          addToAlbum($($links[j]));
          if ($links[j] === $link[0]) {
            imageNumber = j;
          }
        }
      }
    }

    // Position Lightbox
    var top  = $window.scrollTop() + this.options.positionFromTop;
    var left = $window.scrollLeft();
    this.$lightbox.css({
      top: top + 'px',
      left: left + 'px'
    }).fadeIn(this.options.fadeDuration);

    // Disable scrolling of the page while open
    if (this.options.disableScrolling) {
      $('html').addClass('lb-disable-scrolling');
    }

    this.changeImage(imageNumber);
  };

  // Hide most UI elements in preparation for the animated resizing of the lightbox.
  Lightbox.prototype.changeImage = function(imageNumber) {
    var self = this;

    this.disableKeyboardNav();
    var $image = this.$lightbox.find('.lb-image');

    this.$overlay.fadeIn(this.options.fadeDuration);

    $('.lb-loader').fadeIn('slow');
    this.$lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();

    this.$outerContainer.addClass('animating');

    // When image to show is preloaded, we send the width and height to sizeContainer()
    var preloader = new Image();
    preloader.onload = function() {
      var $preloader;
      var imageHeight;
      var imageWidth;
      var maxImageHeight;
      var maxImageWidth;
      var windowHeight;
      var windowWidth;

      $image.attr({
        'alt': self.album[imageNumber].alt,
        'src': self.album[imageNumber].link
      });

      $preloader = $(preloader);

      $image.width(preloader.width);
      $image.height(preloader.height);

      if (self.options.fitImagesInViewport) {
        // Fit image inside the viewport.
        // Take into account the border around the image and an additional 10px gutter on each side.

        windowWidth    = $(window).width();
        windowHeight   = $(window).height();
        maxImageWidth  = windowWidth - self.containerPadding.left - self.containerPadding.right - self.imageBorderWidth.left - self.imageBorderWidth.right - 20;
        maxImageHeight = windowHeight - self.containerPadding.top - self.containerPadding.bottom - self.imageBorderWidth.top - self.imageBorderWidth.bottom - 120;

        // Check if image size is larger then maxWidth|maxHeight in settings
        if (self.options.maxWidth && self.options.maxWidth < maxImageWidth) {
          maxImageWidth = self.options.maxWidth;
        }
        if (self.options.maxHeight && self.options.maxHeight < maxImageWidth) {
          maxImageHeight = self.options.maxHeight;
        }

        // Is the current image's width or height is greater than the maxImageWidth or maxImageHeight
        // option than we need to size down while maintaining the aspect ratio.
        if ((preloader.width > maxImageWidth) || (preloader.height > maxImageHeight)) {
          if ((preloader.width / maxImageWidth) > (preloader.height / maxImageHeight)) {
            imageWidth  = maxImageWidth;
            imageHeight = parseInt(preloader.height / (preloader.width / imageWidth), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          } else {
            imageHeight = maxImageHeight;
            imageWidth = parseInt(preloader.width / (preloader.height / imageHeight), 10);
            $image.width(imageWidth);
            $image.height(imageHeight);
          }
        }
      }
      self.sizeContainer($image.width(), $image.height());
    };

    preloader.src          = this.album[imageNumber].link;
    this.currentImageIndex = imageNumber;
  };

  // Stretch overlay to fit the viewport
  Lightbox.prototype.sizeOverlay = function() {
    this.$overlay
      .width($(document).width())
      .height($(document).height());
  };

  // Animate the size of the lightbox to fit the image we are showing
  Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
    var self = this;

    var oldWidth  = this.$outerContainer.outerWidth();
    var oldHeight = this.$outerContainer.outerHeight();
    var newWidth  = imageWidth + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right;
    var newHeight = imageHeight + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

    function postResize() {
      self.$lightbox.find('.lb-dataContainer').width(newWidth);
      self.$lightbox.find('.lb-prevLink').height(newHeight);
      self.$lightbox.find('.lb-nextLink').height(newHeight);
      self.showImage();
    }

    if (oldWidth !== newWidth || oldHeight !== newHeight) {
      this.$outerContainer.animate({
        width: newWidth,
        height: newHeight
      }, this.options.resizeDuration, 'swing', function() {
        postResize();
      });
    } else {
      postResize();
    }
  };

  // Display the image and its details and begin preload neighboring images.
  Lightbox.prototype.showImage = function() {
    this.$lightbox.find('.lb-loader').stop(true).hide();
    this.$lightbox.find('.lb-image').fadeIn(this.options.imageFadeDuration);

    this.updateNav();
    this.updateDetails();
    this.preloadNeighboringImages();
    this.enableKeyboardNav();
  };

  // Display previous and next navigation if appropriate.
  Lightbox.prototype.updateNav = function() {
    // Check to see if the browser supports touch events. If so, we take the conservative approach
    // and assume that mouse hover events are not supported and always show prev/next navigation
    // arrows in image sets.
    var alwaysShowNav = false;
    try {
      document.createEvent('TouchEvent');
      alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
    } catch (e) {}

    this.$lightbox.find('.lb-nav').show();

    if (this.album.length > 1) {
      if (this.options.wrapAround) {
        if (alwaysShowNav) {
          this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
        }
        this.$lightbox.find('.lb-prev, .lb-next').show();
      } else {
        if (this.currentImageIndex > 0) {
          this.$lightbox.find('.lb-prev').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-prev').css('opacity', '1');
          }
        }
        if (this.currentImageIndex < this.album.length - 1) {
          this.$lightbox.find('.lb-next').show();
          if (alwaysShowNav) {
            this.$lightbox.find('.lb-next').css('opacity', '1');
          }
        }
      }
    }
  };

  // Display caption, image number, and closing button.
  Lightbox.prototype.updateDetails = function() {
    var self = this;

    // Enable anchor clicks in the injected caption html.
    // Thanks Nate Wright for the fix. @https://github.com/NateWr
    if (typeof this.album[this.currentImageIndex].title !== 'undefined' &&
      this.album[this.currentImageIndex].title !== '') {
      var $caption = this.$lightbox.find('.lb-caption');
      if (this.options.sanitizeTitle) {
        $caption.text(this.album[this.currentImageIndex].title);
      } else {
        $caption.html(this.album[this.currentImageIndex].title);
      }
      $caption.fadeIn('fast')
        .find('a').on('click', function(event) {
          if ($(this).attr('target') !== undefined) {
            window.open($(this).attr('href'), $(this).attr('target'));
          } else {
            location.href = $(this).attr('href');
          }
        });
    }

    if (this.album.length > 1 && this.options.showImageNumberLabel) {
      var labelText = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
      this.$lightbox.find('.lb-number').text(labelText).fadeIn('fast');
    } else {
      this.$lightbox.find('.lb-number').hide();
    }

    this.$outerContainer.removeClass('animating');

    this.$lightbox.find('.lb-dataContainer').fadeIn(this.options.resizeDuration, function() {
      return self.sizeOverlay();
    });
  };

  // Preload previous and next images in set.
  Lightbox.prototype.preloadNeighboringImages = function() {
    if (this.album.length > this.currentImageIndex + 1) {
      var preloadNext = new Image();
      preloadNext.src = this.album[this.currentImageIndex + 1].link;
    }
    if (this.currentImageIndex > 0) {
      var preloadPrev = new Image();
      preloadPrev.src = this.album[this.currentImageIndex - 1].link;
    }
  };

  Lightbox.prototype.enableKeyboardNav = function() {
    $(document).on('keyup.keyboard', this.keyboardAction.bind(this));
  };

  Lightbox.prototype.disableKeyboardNav = function() {
    $(document).off('.keyboard');
  };

  Lightbox.prototype.keyboardAction = function(event) {
    var KEYCODE_ESC        = 27;
    var KEYCODE_LEFTARROW  = 37;
    var KEYCODE_RIGHTARROW = 39;

    var keycode = event.keyCode;
    var key     = String.fromCharCode(keycode).toLowerCase();
    if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
      this.end();
    } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
      if (this.currentImageIndex !== 0) {
        this.changeImage(this.currentImageIndex - 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(this.album.length - 1);
      }
    } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
      if (this.currentImageIndex !== this.album.length - 1) {
        this.changeImage(this.currentImageIndex + 1);
      } else if (this.options.wrapAround && this.album.length > 1) {
        this.changeImage(0);
      }
    }
  };

  // Closing time. :-(
  Lightbox.prototype.end = function() {
    this.disableKeyboardNav();
    $(window).off('resize', this.sizeOverlay);
    this.$lightbox.fadeOut(this.options.fadeDuration);
    this.$overlay.fadeOut(this.options.fadeDuration);
    $('select, object, embed').css({
      visibility: 'visible'
    });
    if (this.options.disableScrolling) {
      $('html').removeClass('lb-disable-scrolling');
    }
  };

  return new Lightbox();
}));

document.addEventListener('DOMContentLoaded', function() {
    var imageLinks = document.querySelectorAll("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.webp']");
    imageLinks.forEach(function(link) {
        link.setAttribute('data-lightbox', 'image-gallery');
    });
});





/*
 * Circle Progress
 */
;
(function ($) {
  $.fn.loading = function () {
    var DEFAULTS = {
      backgroundColor: '#b3cef6',
      progressColor: '#4b86db',
      percent: 75,
      duration: 2000
    };  
    
    $(this).each(function () {
      var $target  = $(this);

      var opts = {
      backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
      progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
      percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
      duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
      };
      // console.log(opts);
  
      $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');
  
      $target.find('.background').css('background-color', opts.backgroundColor);
      $target.find('.left').css('background-color', opts.backgroundColor);
      $target.find('.rotate').css('background-color', opts.progressColor);
      $target.find('.right').css('background-color', opts.progressColor);
  
      var $rotate = $target.find('.rotate');
      setTimeout(function () {  
        $rotate.css({
          'transition': 'transform ' + opts.duration + 'ms linear',
          'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
        });
      },1);   

      if (opts.percent > 50) {
        var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
        var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';  
        $target.find('.right').css({
          animation: animationRight,
          opacity: 1
        });
        $target.find('.left').css({
          animation: animationLeft,
          opacity: 0
        });
      } 
    });
  }
})(jQuery);

jQuery( document ).ready(function() {
  jQuery(".circle-progress-bar").viewportChecker({
    callbackFunction: function(elem, action){
      jQuery(elem).loading();
    }
  });
});

// Google Map
ready(function(){ 
  var mapCanvas = document.getElementById('map_block_canvas');
  if (!mapCanvas)
    return;

  var apikey = mapCanvas.getAttribute('data-apikey');

  if (!apikey)
    return;

  var width = mapCanvas.getAttribute('data-width');
  var height = mapCanvas.getAttribute('data-height');
  var type = mapCanvas.getAttribute('data-type');
  var cntrlatitude = mapCanvas.getAttribute('data-cntrlatitude');
  var cntrlongitude = mapCanvas.getAttribute('data-cntrlongitude');
  var defaultzoom = parseInt(mapCanvas.getAttribute('data-defaultzoom'));
  var pin1name = mapCanvas.getAttribute('data-pin1name');
  var pin1latitude = mapCanvas.getAttribute('data-pin1latitude');
  var pin1longitude = mapCanvas.getAttribute('data-pin1longitude');
  var pin2name = mapCanvas.getAttribute('data-pin2name');
  var pin2latitude = mapCanvas.getAttribute('data-pin2latitude');
  var pin2longitude = mapCanvas.getAttribute('data-pin2longitude');
  var pin3name = mapCanvas.getAttribute('data-pin3name');
  var pin3latitude = mapCanvas.getAttribute('data-pin3latitude');
  var pin3longitude = mapCanvas.getAttribute('data-pin3longitude');
  var pin4name = mapCanvas.getAttribute('data-pin4name');
  var pin4latitude = mapCanvas.getAttribute('data-pin4latitude');
  var pin4longitude = mapCanvas.getAttribute('data-pin4longitude');
  var pin5name = mapCanvas.getAttribute('data-pin5name');
  var pin5latitude = mapCanvas.getAttribute('data-pin5latitude');
  var pin5longitude = mapCanvas.getAttribute('data-pin5longitude');

  mapCanvas.style.width = width;
  mapCanvas.style.height = height;

  function initializeGoogleMapBlock() {
    var map_options = {
      // LatLng(double latitude, double longitude)
      center: new google.maps.LatLng(cntrlatitude, cntrlongitude),
      zoom: defaultzoom,
      mapTypeId: type
    };

    var map = new google.maps.Map(mapCanvas, map_options);
    var marker;

    if ( pin1latitude && pin1longitude ) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(pin1latitude, pin1longitude),
        map: map,
        title: pin1name});
    }

    if ( pin2latitude && pin2longitude ) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(pin2latitude, pin2longitude),
        map: map,
        title: pin2name});
    }

    if ( pin3latitude && pin3longitude ) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(pin3latitude, pin3longitude),
        map: map,
        title: pin3name});
    }

    if ( pin4latitude && pin4longitude ) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(pin4latitude, pin4longitude),
        map: map,
        title: pin4name});
    }

    if ( pin5latitude && pin5longitude ) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(pin5latitude, pin5longitude),
        map: map,
        title: pin5name});
    }
  }
  var script = document.createElement('script');
  script.onload = function () {
    google.maps.event.addDomListener(window, 'load', initializeGoogleMapBlock);
  };
  script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=' + apikey;
  document.head.appendChild(script);
});


// Animation Blocks
ready(function(){
  var animationBlocks = document.getElementsByClassName('tish-animation-block-wrapper');
  for (var i = 0; i < animationBlocks.length; i++) {
    animationBlocks[i].classList.add('animations-hidden');
    var animationType = animationBlocks[i].getAttribute('data-animationtype');

    jQuery(animationBlocks[i]).viewportChecker({
      classToAdd: 'animated ' + animationType,
      offset: 1    
    });
  } 
});

jQuery(document).ready(function () {

    jQuery('#contact-form').submit(function (event) {

        event.preventDefault();

        var loadingContent = '<i class="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;';

        var submitButtonContent = jQuery('#contact-form button').html(); 

        jQuery('#contact-form button').html(loadingContent + submitButtonContent);

        var formUrl = jQuery(this).attr('action');

        jQuery.ajax({
          type: "POST",
          url: formUrl,
          data: jQuery(this).serialize(),
        }).done(function (data) {
            jQuery('#contact-form #contactName, #contact-form #email, #contact-form #subject, #contact-form #commentsText').val('');

            var startIndex = data.indexOf('<div class="alert alert-danger mt-2">');
            if (startIndex !== -1) {
                var endIndex = data.indexOf('</div>', startIndex);

                var msg = data.substring(startIndex, endIndex + 6);
                jQuery('#contact-form-result').html(msg);
            }

            var startIndex = data.indexOf('<div class="alert alert-success mt-2">');
            if (startIndex !== -1) {
                var endIndex = data.indexOf('</div>', startIndex);

                var msg = data.substring(startIndex, endIndex + 6);
                jQuery('#contact-form-result').html(msg);
            }

            jQuery('#contact-form button').html(submitButtonContent);
        });

        return true;
    });
});

// end of utilities.js

(function () {
    const PLACEHOLDER = 'woocommerce-placeholder.png';

    function extractMiniCartImageMap() {
        const map = {};

        document.querySelectorAll('.woocommerce-mini-cart-item').forEach(item => {
            const removeBtn = item.querySelector('.remove_from_cart_button');
            const productLink = item.querySelector('a[href*="/product/"]');
            const image = productLink?.querySelector('img');

            if (removeBtn && productLink && image) {
                const productId = removeBtn.getAttribute('data-product_id');
                const slug = new URL(productLink.href).pathname.split('/product/')[1]?.replace(/\/$/, '');
                const productName = productLink.textContent.trim().toLowerCase();

                const imageUrl = image.getAttribute('src');

                if (productId && imageUrl) {
                    map[productId] = imageUrl;
                }

                if (slug && imageUrl) {
                    map[slug] = imageUrl;
                }

                if (productName && imageUrl) {
                    map[productName] = imageUrl;
                }
            }
        });

        return map;
    }

    function replacePlaceholderImages(imageMap) {
        // === CART BLOCK ===
        document.querySelectorAll('.wc-block-cart-items__row').forEach(row => {
            const img = row.querySelector('.wc-block-cart-item__image img');
            const nameEl = row.querySelector('.wc-block-components-product-name');

            if (img && img.src.includes(PLACEHOLDER) && nameEl) {
                const productName = nameEl.textContent.trim().toLowerCase();
                if (imageMap[productName]) {
                    img.src = imageMap[productName];
                    img.classList.add('replaced-by-mini-cart');
                }
            }
        });

        // === CHECKOUT BLOCK ===
        document.querySelectorAll('.wc-block-components-order-summary-item').forEach(item => {
            const img = item.querySelector('img');
            const nameEl = item.querySelector('.wc-block-components-product-name');
            if (img && img.src.includes(PLACEHOLDER) && nameEl) {
                const productName = nameEl.textContent.trim().toLowerCase();
                if (imageMap[productName]) {
                    img.src = imageMap[productName];
                    img.classList.add('replaced-by-mini-cart');
                }
            }
        });
    }

    function initializeFix() {
        const map = extractMiniCartImageMap();
        if (Object.keys(map).length > 0) {
            replacePlaceholderImages(map);
        }
    }

    const observer = new MutationObserver(() => {
        const items = document.querySelectorAll('.woocommerce-mini-cart-item');
        if (items.length > 0) {
            initializeFix();
            observer.disconnect();
        }
    });

    const miniCart = document.getElementById('cart-popup-content');
    if (miniCart) {
        observer.observe(miniCart, { childList: true, subtree: true });
    }

    setTimeout(initializeFix, 2000);
})();


/*t Plugins t*/



//t assets/js/jquery.counterup.min.js
(function($){"use strict";$.fn.counterUp=function(options){var settings=$.extend({time:400,delay:10,offset:100,beginAt:0,formatter:false,context:"window",callback:function(){}},options),s;return this.each(function(){var $this=$(this),counter={time:$(this).data("counterup-time")||settings.time,delay:$(this).data("counterup-delay")||settings.delay,offset:$(this).data("counterup-offset")||settings.offset,beginAt:$(this).data("counterup-beginat")||settings.beginAt,context:$(this).data("counterup-context")||settings.context};var counterUpper=function(){var nums=[];var divisions=counter.time/counter.delay;var num=$(this).attr("data-num")?$(this).attr("data-num"):$this.text();var isComma=/[0-9]+,[0-9]+/.test(num);num=num.replace(/,/g,"");var decimalPlaces=(num.split(".")[1]||[]).length;if(counter.beginAt>num)counter.beginAt=num;var isTime=/[0-9]+:[0-9]+:[0-9]+/.test(num);if(isTime){var times=num.split(":"),m=1;s=0;while(times.length>0){s+=m*parseInt(times.pop(),10);m*=60}}for(var i=divisions;i>=counter.beginAt/num*divisions;i--){var newNum=parseFloat(num/divisions*i).toFixed(decimalPlaces);if(isTime){newNum=parseInt(s/divisions*i);var hours=parseInt(newNum/3600)%24;var minutes=parseInt(newNum/60)%60;var seconds=parseInt(newNum%60,10);newNum=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)}if(isComma){while(/(\d+)(\d{3})/.test(newNum.toString())){newNum=newNum.toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2")}}if(settings.formatter){newNum=settings.formatter.call(this,newNum)}nums.unshift(newNum)}$this.data("counterup-nums",nums);$this.text(counter.beginAt);var f=function(){if(!$this.data("counterup-nums")){settings.callback.call(this);return}$this.html($this.data("counterup-nums").shift());if($this.data("counterup-nums").length){setTimeout($this.data("counterup-func"),counter.delay)}else{$this.data("counterup-nums",null);$this.data("counterup-func",null);settings.callback.call(this)}};$this.data("counterup-func",f);setTimeout($this.data("counterup-func"),counter.delay)};$this.waypoint(function(direction){counterUpper();this.destroy()},{offset:counter.offset+"%",context:counter.context})})}})(jQuery);

//t assets/js/popper.min.js
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'])+parseFloat(e['border'+n+'Width'])}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth),c=parseFloat(m.borderLeftWidth);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop),y=parseFloat(m.marginLeft);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.on(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f]),E=parseFloat(w['border'+f+'Width']),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});



//t assets/js/progressbar.min.js

(function ($) {
    $.fn.appear = function (fn, options) {

        var settings = $.extend({

            
            data: undefined,

            
            one: true,

            
            accX: 0,
            accY: 0

        }, options);

        return this.each(function () {

            var t = $(this);

            
            t.appeared = false;

            if (!fn) {

                
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            
            var check = function () {

                
                if (!t.is(':visible')) {

                    
                    t.appeared = false;
                    return;
                }

                
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    
                    t.appeared = false;
                }
            };

            
            var modifiedFn = function () {

                
                t.appeared = true;

                
                if (settings.one) {

                    
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                
                fn.apply(this, arguments);
            };

            
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.on('appear', settings.data, modifiedFn);

            
            w.scroll(check);

            
            $.fn.appear.checks.push(check);

            
            (check)();
        });
    };

    
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        
        checkAll: function () {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function (i, n) {
            var old = $.fn[n];
            if (old) {
                $.fn[n] = function () {
                    var r = old.apply(this, arguments);
                    $.fn.appear.run();
                    return r;
                }
            }
        });

})(jQuery);

//t assets/js/jquery.magnific-popup.min.js

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,Array.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=Array.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if((typeof g === "function")){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if((typeof d === "function"))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.on('click', function(){b.prev()}),f.on('click', function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});

//t assets/js/swiper-bundle.min.js

/**
 * Swiper 11.0.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 5, 2024
 */

var Swiper=function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function n(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function l(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function o(){return Date.now()}function d(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function c(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let a=1;a<arguments.length;a+=1){const i=a<0||arguments.length<=a?void 0:arguments[a];if(null!=i&&(s=i,!("undefined"!=typeof window&&void 0!==window.HTMLElement?s instanceof HTMLElement:s&&(1===s.nodeType||11===s.nodeType)))){const s=Object.keys(Object(i)).filter((e=>t.indexOf(e)<0));for(let t=0,a=s.length;t<a;t+=1){const a=s[t],r=Object.getOwnPropertyDescriptor(i,a);void 0!==r&&r.enumerable&&(c(e[a])&&c(i[a])?i[a].__swiper__?e[a]=i[a]:p(e[a],i[a]):!c(e[a])&&c(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:p(e[a],i[a])):e[a]=i[a])}}}var s;return e}function u(e,t,s){e.style.setProperty(t,s)}function m(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}function h(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function f(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function g(e){try{return void console.warn(e)}catch(e){}}function v(e,t){void 0===t&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:n(t)),s}function w(e){const t=r(),s=a(),i=e.getBoundingClientRect(),n=s.body,l=e.clientTop||n.clientTop||0,o=e.clientLeft||n.clientLeft||0,d=e===t?t.scrollY:e.scrollTop,c=e===t?t.scrollX:e.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}function b(e,t){return r().getComputedStyle(e,null).getPropertyValue(t)}function y(e){let t,s=e;if(s){for(t=0;null!==(s=s.previousSibling);)1===s.nodeType&&(t+=1);return t}}function E(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function x(e,t){t&&e.addEventListener("transitionend",(function s(a){a.target===e&&(t.call(e,a),e.removeEventListener("transitionend",s))}))}function S(e,t,s){const a=r();return s?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}function T(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}let M,C,P;function L(){return M||(M=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),M}function I(e){return void 0===e&&(e={}),C||(C=function(e){let{userAgent:t}=void 0===e?{}:e;const s=L(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),m=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!h&&(l.os="android",l.android=!0),(p||m||u)&&(l.os="ios",l.ios=!0),l}(e)),C}function A(){return P||(P=function(){const e=r(),t=I();let s=!1;function a(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(a()){const t=String(e.navigator.userAgent);if(t.includes("Version/")){const[e,a]=t.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));s=e<16||16===e&&a<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=a();return{isSafari:s||n,needPerspectiveFix:s,need3dFix:n||i&&t.ios,isWebView:i}}()),P}var z={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};const $=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(s){let t=s.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(s.shadowRoot?t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame((()=>{s.shadowRoot&&(t=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())}))),t&&t.remove()}},k=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},O=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,r=[s-t];return r.push(...Array.from({length:t}).map(((e,t)=>s+a+t))),void e.slides.forEach(((t,s)=>{r.includes(t.column)&&k(e,s)}))}const r=i+a-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=r+t;a+=1){const t=(a%s+s)%s;(t<i||t>r)&&k(e,t)}else for(let a=Math.max(i-t,0);a<=Math.min(r+t,s-1);a+=1)a!==i&&(a>r||a<i)&&k(e,a)};var D={updateSize:function(){const e=this;let t,s;const a=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a.clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a.clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(b(a,"padding-left")||0,10)-parseInt(b(a,"padding-right")||0,10),s=s-parseInt(b(a,"padding-top")||0,10)-parseInt(b(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t,s){return parseFloat(t.getPropertyValue(e.getDirectionLabel(s))||0)}const s=e.params,{wrapperEl:a,slidesEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&s.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=f(i,`.${e.params.slideClass}, swiper-slide`),p=o?e.virtual.slides.length:c.length;let m=[];const h=[],g=[];let v=s.slidesOffsetBefore;"function"==typeof v&&(v=s.slidesOffsetBefore.call(e));let w=s.slidesOffsetAfter;"function"==typeof w&&(w=s.slidesOffsetAfter.call(e));const y=e.snapGrid.length,E=e.slidesGrid.length;let x=s.spaceBetween,T=-v,M=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*r:"string"==typeof x&&(x=parseFloat(x)),e.virtualSize=-x,c.forEach((e=>{n?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),s.centeredSlides&&s.cssMode&&(u(a,"--swiper-centered-offset-before",""),u(a,"--swiper-centered-offset-after",""));const P=s.grid&&s.grid.rows>1&&e.grid;let L;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();const I="auto"===s.slidesPerView&&s.breakpoints&&Object.keys(s.breakpoints).filter((e=>void 0!==s.breakpoints[e].slidesPerView)).length>0;for(let a=0;a<p;a+=1){let i;if(L=0,c[a]&&(i=c[a]),P&&e.grid.updateSlide(a,i,c),!c[a]||"none"!==b(i,"display")){if("auto"===s.slidesPerView){I&&(c[a].style[e.getDirectionLabel("width")]="");const r=getComputedStyle(i),n=i.style.transform,l=i.style.webkitTransform;if(n&&(i.style.transform="none"),l&&(i.style.webkitTransform="none"),s.roundLengths)L=e.isHorizontal()?S(i,"width",!0):S(i,"height",!0);else{const e=t(r,"width"),s=t(r,"padding-left"),a=t(r,"padding-right"),n=t(r,"margin-left"),l=t(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)L=e+n+l;else{const{clientWidth:t,offsetWidth:r}=i;L=e+s+a+n+l+(r-t)}}n&&(i.style.transform=n),l&&(i.style.webkitTransform=l),s.roundLengths&&(L=Math.floor(L))}else L=(r-(s.slidesPerView-1)*x)/s.slidesPerView,s.roundLengths&&(L=Math.floor(L)),c[a]&&(c[a].style[e.getDirectionLabel("width")]=`${L}px`);c[a]&&(c[a].swiperSlideSize=L),g.push(L),s.centeredSlides?(T=T+L/2+M/2+x,0===M&&0!==a&&(T=T-r/2-x),0===a&&(T=T-r/2-x),Math.abs(T)<.001&&(T=0),s.roundLengths&&(T=Math.floor(T)),C%s.slidesPerGroup==0&&m.push(T),h.push(T)):(s.roundLengths&&(T=Math.floor(T)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&m.push(T),h.push(T),T=T+L+x),e.virtualSize+=L+x,M=L,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+w,n&&l&&("slide"===s.effect||"coverflow"===s.effect)&&(a.style.width=`${e.virtualSize+x}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),P&&e.grid.updateWrapperSize(L,m),!s.centeredSlides){const t=[];for(let a=0;a<m.length;a+=1){let i=m[a];s.roundLengths&&(i=Math.floor(i)),m[a]<=e.virtualSize-r&&t.push(i)}m=t,Math.floor(e.virtualSize-r)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-r)}if(o&&s.loop){const t=g[0]+x;if(s.slidesPerGroup>1){const a=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),i=t*s.slidesPerGroup;for(let e=0;e<a;e+=1)m.push(m[m.length-1]+i)}for(let a=0;a<e.virtual.slidesBefore+e.virtual.slidesAfter;a+=1)1===s.slidesPerGroup&&m.push(m[m.length-1]+t),h.push(h[h.length-1]+t),e.virtualSize+=t}if(0===m.length&&(m=[0]),0!==x){const t=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter(((e,t)=>!(s.cssMode&&!s.loop)||t!==c.length-1)).forEach((e=>{e.style[t]=`${x}px`}))}if(s.centeredSlides&&s.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(x||0)})),e-=x;const t=e-r;m=m.map((e=>e<=0?-v:e>t?t+w:e))}if(s.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(x||0)})),e-=x,e<r){const t=(r-e)/2;m.forEach(((e,s)=>{m[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:m,slidesGrid:h,slidesSizesGrid:g}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){u(a,"--swiper-centered-offset-before",-m[0]+"px"),u(a,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),m.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==E&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!(o||s.cssMode||"slide"!==s.effect&&"fade"!==s.effect)){const t=`${s.containerModifierClass}backface-hidden`,a=e.el.classList.contains(t);p<=s.maxBackfaceHiddenSlides?a||e.el.classList.add(t):a&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.forEach((e=>{e.classList.remove(s.slideVisibleClass,s.slideFullyVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;"string"==typeof l&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:"string"==typeof l&&(l=parseFloat(l));for(let e=0;e<a.length;e+=1){const o=a[e];let d=o.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const c=(n+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),p=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(o.swiperSlideSize+l),u=-(n-d),m=u+t.slidesSizesGrid[e],h=u>=0&&u<=t.size-t.slidesSizesGrid[e];(u>=0&&u<t.size-1||m>1&&m<=t.size||u<=0&&m>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e),a[e].classList.add(s.slideVisibleClass)),h&&a[e].classList.add(s.slideFullyVisibleClass),o.progress=i?-c:c,o.originalProgress=i?-p:p}},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n,progressLoop:l}=t;const o=r,d=n;if(0===a)i=0,r=!0,n=!0;else{i=(e-t.minTranslate())/a;const s=Math.abs(e-t.minTranslate())<1,l=Math.abs(e-t.maxTranslate())<1;r=s||i<=0,n=l||i>=1,s&&(i=0),l&&(i=1)}if(s.loop){const s=t.getSlideIndexByData(0),a=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[s],r=t.slidesGrid[a],n=t.slidesGrid[t.slidesGrid.length-1],o=Math.abs(e);l=o>=i?(o-i)/n:(o+n-r)/n,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!d&&t.emit("reachEnd toEdge"),(o&&!r||d&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,n=e.grid&&s.grid&&s.grid.rows>1,l=e=>f(a,`.${s.slideClass}${e}, swiper-slide${e}`)[0];let o,d,c;if(t.forEach((e=>{e.classList.remove(s.slideActiveClass,s.slideNextClass,s.slidePrevClass)})),r)if(s.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),o=l(`[data-swiper-slide-index="${t}"]`)}else o=l(`[data-swiper-slide-index="${i}"]`);else n?(o=t.filter((e=>e.column===i))[0],c=t.filter((e=>e.column===i+1))[0],d=t.filter((e=>e.column===i-1))[0]):o=t[i];o&&(o.classList.add(s.slideActiveClass),n?(c&&c.classList.add(s.slideNextClass),d&&d.classList.add(s.slidePrevClass)):(c=function(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c&&(c=t[0]),c&&c.classList.add(s.slideNextClass),d=function(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}(o,`.${s.slideClass}, swiper-slide`)[0],s.loop&&0===!d&&(d=t[t.length-1]),d&&d.classList.add(s.slidePrevClass))),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:i,activeIndex:r,realIndex:n,snapIndex:l}=t;let o,d=e;const c=e=>{let s=e-t.virtual.slidesBefore;return s<0&&(s=t.virtual.slides.length+s),s>=t.virtual.slides.length&&(s-=t.virtual.slides.length),s};if(void 0===d&&(d=function(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?a>=t[e]&&a<t[e+1]-(t[e+1]-t[e])/2?i=e:a>=t[e]&&a<t[e+1]&&(i=e+1):a>=t[e]&&(i=e);return s.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),a.indexOf(s)>=0)o=a.indexOf(s);else{const e=Math.min(i.slidesPerGroupSkip,d);o=e+Math.floor((d-e)/i.slidesPerGroup)}if(o>=a.length&&(o=a.length-1),d===r&&!t.params.loop)return void(o!==l&&(t.snapIndex=o,t.emit("snapIndexChange")));if(d===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled)return void(t.realIndex=c(d));const p=t.grid&&i.grid&&i.grid.rows>1;let u;if(t.virtual&&i.virtual.enabled&&i.loop)u=c(d);else if(p){const e=t.slides.filter((e=>e.column===d))[0];let s=parseInt(e.getAttribute("data-swiper-slide-index"),10);Number.isNaN(s)&&(s=Math.max(t.slides.indexOf(e),0)),u=Math.floor(s/i.grid.rows)}else if(t.slides[d]){const e=t.slides[d].getAttribute("data-swiper-slide-index");u=e?parseInt(e,10):d}else u=d;Object.assign(t,{previousSnapIndex:l,snapIndex:o,previousRealIndex:n,realIndex:u,previousIndex:r,activeIndex:d}),t.initialized&&O(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(n!==u&&t.emit("realIndexChange"),t.emit("slideChange"))},updateClickedSlide:function(e,t){const s=this,a=s.params;let i=e.closest(`.${a.slideClass}, swiper-slide`);!i&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach((e=>{!i&&e.matches&&e.matches(`.${a.slideClass}, swiper-slide`)&&(i=e)}));let r,n=!1;if(i)for(let e=0;e<s.slides.length;e+=1)if(s.slides[e]===i){n=!0,r=e;break}if(!i||!n)return s.clickedSlide=void 0,void(s.clickedIndex=void 0);s.clickedSlide=i,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=r,a.slideToClickedSlide&&void 0!==s.clickedIndex&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}};var G={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=d(i,e);return r+=this.cssOverflowAdjustment(),s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,wrapperEl:r,progress:n}=s;let l,o=0,d=0;s.isHorizontal()?o=a?-e:e:d=e,i.roundLengths&&(o=Math.floor(o),d=Math.floor(d)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?o:d,i.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-o:-d:i.virtualTranslate||(s.isHorizontal()?o-=s.cssOverflowAdjustment():d-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${o}px, ${d}px, 0px)`);const c=s.maxTranslate()-s.minTranslate();l=0===c?0:(e-s.minTranslate())/c,l!==n&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}};function N(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var H={slideTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e&&(e=parseInt(e,10));const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:f}=r;if(r.animating&&l.preventInteractionOnTransition||!f&&!a&&!i||r.destroyed)return!1;const g=Math.min(r.params.slidesPerGroupSkip,n);let v=g+Math.floor((n-g)/r.params.slidesPerGroup);v>=o.length&&(v=o.length-1);const w=-o[v];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&(u?w>r.translate&&w>r.minTranslate():w<r.translate&&w<r.minTranslate()))return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(w),b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{h[e?"scrollLeft":"scrollTop"]=s}))):h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return m({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){e=parseInt(e,10)}const i=this;if(i.destroyed)return;const r=i.grid&&i.params.grid&&i.params.grid.rows>1;let n=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)n+=i.virtual.slidesBefore;else{let e;if(r){const t=n*i.params.grid.rows;e=i.slides.filter((e=>1*e.getAttribute("data-swiper-slide-index")===t))[0].column}else e=i.getSlideIndexByData(n);const t=r?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:s}=i.params;let a=i.params.slidesPerView;"auto"===a?a=i.slidesPerViewDynamic():(a=Math.ceil(parseFloat(i.params.slidesPerView,10)),s&&a%2==0&&(a+=1));let l=t-e<a;if(s&&(l=l||e<Math.ceil(a/2)),l){const a=s?e<i.activeIndex?"prev":"next":e-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:a,slideTo:!0,activeSlideIndex:"next"===a?e+1:e-t+1,slideRealIndex:"next"===a?i.realIndex:void 0})}if(r){const e=n*i.params.grid.rows;n=i.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0].column}else n=i.getSlideIndexByData(n)}return requestAnimationFrame((()=>{i.slideTo(n,t,s,a)})),i},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{enabled:i,params:r,animating:n}=a;if(!i||a.destroyed)return a;let l=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<r.slidesPerGroupSkip?1:l,d=a.virtual&&r.virtual.enabled;if(r.loop){if(n&&!d&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame((()=>{a.slideTo(a.activeIndex+o,e,t,s)})),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,snapGrid:r,slidesGrid:n,rtlTranslate:l,enabled:o,animating:d}=a;if(!o||a.destroyed)return a;const c=a.virtual&&i.virtual.enabled;if(i.loop){if(d&&!c&&i.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}function p(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=p(l?a.translate:-a.translate),m=r.map((e=>p(e)));let h=r[m.indexOf(u)-1];if(void 0===h&&i.cssMode){let e;r.forEach(((t,s)=>{u>=t&&(e=s)})),void 0!==e&&(h=r[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=n.indexOf(h),f<0&&(f=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(f=f-a.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return i.loop&&0===a.activeIndex&&i.cssMode?(requestAnimationFrame((()=>{a.slideTo(f,e,t,s)})),!0):a.slideTo(f,e,t,s)},slideReset:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this;if(!a.destroyed)return a.slideTo(a.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;if(i.destroyed)return;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;const n=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=e.getSlideIndex(f(s,`${n}[data-swiper-slide-index="${i}"]`)[0]),l((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var X={loopCreate:function(e){const t=this,{params:s,slidesEl:a}=t;if(!s.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{f(a,`.${s.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)}))},r=t.grid&&s.grid&&s.grid.rows>1,n=s.slidesPerGroup*(r?s.grid.rows:1),l=t.slides.length%n!=0,o=r&&t.slides.length%s.grid.rows!=0,d=e=>{for(let a=0;a<e;a+=1){const e=t.isElement?v("swiper-slide",[s.slideBlankClass]):v("div",[s.slideClass,s.slideBlankClass]);t.slidesEl.append(e)}};if(l){if(s.loopAddBlankSlides){d(n-t.slides.length%n),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(o){if(s.loopAddBlankSlides){d(s.grid.rows-t.slides.length%s.grid.rows),t.recalcSlides(),t.updateSlides()}else g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:s.centeredSlides?void 0:"next"})},loopFix:function(e){let{slideRealIndex:t,slideTo:s=!0,direction:a,setTranslate:i,activeSlideIndex:r,byController:n,byMousewheel:l}=void 0===e?{}:e;const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:p,slidesEl:u,params:m}=o,{centeredSlides:h}=m;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&m.virtual.enabled)return s&&(m.centeredSlides||0!==o.snapIndex?m.centeredSlides&&o.snapIndex<m.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0):o.slideTo(o.virtual.slides.length,0,!1,!0)),o.allowSlidePrev=c,o.allowSlideNext=p,void o.emit("loopFix");let f=m.slidesPerView;"auto"===f?f=o.slidesPerViewDynamic():(f=Math.ceil(parseFloat(m.slidesPerView,10)),h&&f%2==0&&(f+=1));const v=m.slidesPerGroupAuto?f:m.slidesPerGroup;let w=v;w%v!=0&&(w+=v-w%v),w+=m.loopAdditionalSlides,o.loopedSlides=w;const b=o.grid&&m.grid&&m.grid.rows>1;d.length<f+w?g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&"row"===m.grid.fill&&g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const y=[],E=[];let x=o.activeIndex;void 0===r?r=o.getSlideIndex(d.filter((e=>e.classList.contains(m.slideActiveClass)))[0]):x=r;const S="next"===a||!a,T="prev"===a||!a;let M=0,C=0;const P=b?Math.ceil(d.length/m.grid.rows):d.length,L=(b?d[r].column:r)+(h&&void 0===i?-f/2+.5:0);if(L<w){M=Math.max(w-L,v);for(let e=0;e<w-L;e+=1){const t=e-Math.floor(e/P)*P;if(b){const e=P-t-1;for(let t=d.length-1;t>=0;t-=1)d[t].column===e&&y.push(t)}else y.push(P-t-1)}}else if(L+f>P-w){C=Math.max(L-(P-2*w),v);for(let e=0;e<C;e+=1){const t=e-Math.floor(e/P)*P;b?d.forEach(((e,s)=>{e.column===t&&E.push(s)})):E.push(t)}}if(o.__preventObserver__=!0,requestAnimationFrame((()=>{o.__preventObserver__=!1})),T&&y.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.prepend(d[e]),d[e].swiperLoopMoveDOM=!1})),S&&E.forEach((e=>{d[e].swiperLoopMoveDOM=!0,u.append(d[e]),d[e].swiperLoopMoveDOM=!1})),o.recalcSlides(),"auto"===m.slidesPerView?o.updateSlides():b&&(y.length>0&&T||E.length>0&&S)&&o.slides.forEach(((e,t)=>{o.grid.updateSlide(t,e,o.slides)})),m.watchSlidesProgress&&o.updateSlidesOffset(),s)if(y.length>0&&T){if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x+M]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x+M,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else if(i){const e=b?y.length/m.grid.rows:y.length;o.slideTo(o.activeIndex+e,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(E.length>0&&S)if(void 0===t){const e=o.slidesGrid[x],t=o.slidesGrid[x-C]-e;l?o.setTranslate(o.translate-t):(o.slideTo(x-C,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-t,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-t))}else{const e=b?E.length/m.grid.rows:E.length;o.slideTo(o.activeIndex-e,0,!1,!0)}if(o.allowSlidePrev=c,o.allowSlideNext=p,o.controller&&o.controller.control&&!n){const e={slideRealIndex:t,direction:a,setTranslate:i,activeSlideIndex:r,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach((t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===m.slidesPerView&&s})})):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...e,slideTo:o.controller.control.params.slidesPerView===m.slidesPerView&&s})}o.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;a[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),a.forEach((e=>{s.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}};function Y(e,t,s){const a=r(),{params:i}=e,n=i.edgeSwipeDetection,l=i.edgeSwipeThreshold;return!n||!(s<=l||s>=a.innerWidth-l)||"prevent"===n&&(t.preventDefault(),!0)}function B(e){const t=this,s=a();let i=e;i.originalEvent&&(i=i.originalEvent);const n=t.touchEventsData;if("pointerdown"===i.type){if(null!==n.pointerId&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else"touchstart"===i.type&&1===i.targetTouches.length&&(n.touchId=i.targetTouches[0].identifier);if("touchstart"===i.type)return void Y(t,i,i.targetTouches[0].pageX);const{params:l,touches:d,enabled:c}=t;if(!c)return;if(!l.simulateTouch&&"mouse"===i.pointerType)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=i.target;if("wrapper"===l.touchEventsTarget&&!t.wrapperEl.contains(p))return;if("which"in i&&3===i.which)return;if("button"in i&&i.button>0)return;if(n.isTouched&&n.isMoved)return;const u=!!l.noSwipingClass&&""!==l.noSwipingClass,m=i.composedPath?i.composedPath():i.path;u&&i.target&&i.target.shadowRoot&&m&&(p=m[0]);const h=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!i.target||!i.target.shadowRoot);if(l.noSwiping&&(f?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(h,p):p.closest(h)))return void(t.allowClick=!0);if(l.swipeHandler&&!p.closest(l.swipeHandler))return;d.currentX=i.pageX,d.currentY=i.pageY;const g=d.currentX,v=d.currentY;if(!Y(t,i,g))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),d.startX=g,d.startY=v,n.touchStartTime=o(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1);let w=!0;p.matches(n.focusableElements)&&(w=!1,"SELECT"===p.nodeName&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==p&&s.activeElement.blur();const b=w&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!b||p.isContentEditable||i.preventDefault(),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",i)}function R(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:d}=s;if(!d)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;let c,p=e;if(p.originalEvent&&(p=p.originalEvent),"pointermove"===p.type){if(null!==i.touchId)return;if(p.pointerId!==i.pointerId)return}if("touchmove"===p.type){if(c=[...p.changedTouches].filter((e=>e.identifier===i.touchId))[0],!c||c.identifier!==i.touchId)return}else c=p;if(!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",p));const u=c.pageX,m=c.pageY;if(p.preventedByNestedSwiper)return n.startX=u,void(n.startY=m);if(!s.allowTouchMove)return p.target.matches(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m}),i.touchStartTime=o()));if(r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(u<n.startX&&s.translate<=s.maxTranslate()||u>n.startX&&s.translate>=s.minTranslate())return;if(t.activeElement&&p.target===t.activeElement&&p.target.matches(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);i.allowTouchCallbacks&&s.emit("touchMove",p),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=u,n.currentY=m;const h=n.currentX-n.startX,f=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(h**2+f**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:h*h+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(h))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",p),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&p.cancelable&&p.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&p.stopPropagation();let g=s.isHorizontal()?h:f,v=s.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(g=Math.abs(g)*(l?1:-1),v=Math.abs(v)*(l?1:-1)),n.diff=g,g*=r.touchRatio,l&&(g=-g,v=-v);const w=s.touchesDirection;s.swipeDirection=g>0?"prev":"next",s.touchesDirection=v>0?"prev":"next";const b=s.params.loop&&!r.cssMode,y="next"===s.touchesDirection&&s.allowSlideNext||"prev"===s.touchesDirection&&s.allowSlidePrev;if(!i.isMoved){if(b&&y&&s.loopFix({direction:s.swipeDirection}),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});s.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",p)}if((new Date).getTime(),i.isMoved&&i.allowThresholdMove&&w!==s.touchesDirection&&b&&y&&Math.abs(g)>=1)return Object.assign(n,{startX:u,startY:m,currentX:u,currentY:m,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,void(i.startTranslate=i.currentTranslate);s.emit("sliderMove",p),i.isMoved=!0,i.currentTranslate=g+i.startTranslate;let E=!0,x=r.resistanceRatio;if(r.touchReleaseOnEdges&&(x=0),g>0?(b&&y&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>s.minTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+g)**x))):g<0&&(b&&y&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]:s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-("auto"===r.slidesPerView?s.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<s.maxTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-g)**x))),E&&(p.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(g)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function F(e){const t=this,s=t.touchEventsData;let a,i=e;i.originalEvent&&(i=i.originalEvent);if("touchend"===i.type||"touchcancel"===i.type){if(a=[...i.changedTouches].filter((e=>e.identifier===s.touchId))[0],!a||a.identifier!==s.touchId)return}else{if(null!==s.touchId)return;if(i.pointerId!==s.pointerId)return;a=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)){if(!(["pointercancel","contextmenu"].includes(i.type)&&(t.browser.isSafari||t.browser.isWebView)))return}s.pointerId=null,s.touchId=null;const{params:r,touches:n,rtlTranslate:d,slidesGrid:c,enabled:p}=t;if(!p)return;if(!r.simulateTouch&&"mouse"===i.pointerType)return;if(s.allowTouchCallbacks&&t.emit("touchEnd",i),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&r.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);r.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=o(),m=u-s.touchStartTime;if(t.allowClick){const e=i.path||i.composedPath&&i.composedPath();t.updateClickedSlide(e&&e[0]||i.target,e),t.emit("tap click",i),m<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",i)}if(s.lastClickTime=o(),l((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===n.diff&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=r.followFinger?d?t.translate:-t.translate:-s.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});const f=h>=-t.maxTranslate()&&!t.params.loop;let g=0,v=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){const t=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==c[e+t]?(f||h>=c[e]&&h<c[e+t])&&(g=e,v=c[e+t]-c[e]):(f||h>=c[e])&&(g=e,v=c[c.length-1]-c[c.length-2])}let w=null,b=null;r.rewind&&(t.isBeginning?b=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(w=0));const y=(h-c[g])/v,E=g<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(m>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?w:g+E):t.slideTo(g)),"prev"===t.swipeDirection&&(y>1-r.longSwipesRatio?t.slideTo(g+E):null!==b&&y<0&&Math.abs(y)>r.longSwipesRatio?t.slideTo(b):t.slideTo(g))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(i.target===t.navigation.nextEl||i.target===t.navigation.prevEl)?i.target===t.navigation.nextEl?t.slideTo(g+E):t.slideTo(g):("next"===t.swipeDirection&&t.slideTo(null!==w?w:g+E),"prev"===t.swipeDirection&&t.slideTo(null!==b?b:g))}}function q(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e,n=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=n&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||l?e.params.loop&&!n?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function V(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function _(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function j(e){const t=this;$(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}function W(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const U=(e,t)=>{const s=a(),{params:i,el:r,wrapperEl:n,device:l}=e,o=!!i.nested,d="on"===t?"addEventListener":"removeEventListener",c=t;s[d]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:o}),r[d]("touchstart",e.onTouchStart,{passive:!1}),r[d]("pointerdown",e.onTouchStart,{passive:!1}),s[d]("touchmove",e.onTouchMove,{passive:!1,capture:o}),s[d]("pointermove",e.onTouchMove,{passive:!1,capture:o}),s[d]("touchend",e.onTouchEnd,{passive:!0}),s[d]("pointerup",e.onTouchEnd,{passive:!0}),s[d]("pointercancel",e.onTouchEnd,{passive:!0}),s[d]("touchcancel",e.onTouchEnd,{passive:!0}),s[d]("pointerout",e.onTouchEnd,{passive:!0}),s[d]("pointerleave",e.onTouchEnd,{passive:!0}),s[d]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[d]("click",e.onClick,!0),i.cssMode&&n[d]("scroll",e.onScroll),i.updateOnWindowResize?e[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",q,!0):e[c]("observerUpdate",q,!0),r[d]("load",e.onLoad,{capture:!0})};const K=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var Z={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Q(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(!0===e[a]&&(e[a]={enabled:!0}),"navigation"===a&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),a in e&&"enabled"in i?("object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),p(t,s)):p(t,s)):p(t,s)}}const J={eventsEmitter:z,update:D,translate:G,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=0===e?"0ms":""),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),N({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),N({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:H,loop:X,grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,{params:t}=e;e.onTouchStart=B.bind(e),e.onTouchMove=R.bind(e),e.onTouchEnd=F.bind(e),e.onDocumentTouchStart=W.bind(e),t.cssMode&&(e.onScroll=_.bind(e)),e.onClick=V.bind(e),e.onLoad=j.bind(e),U(e,"on")},detachEvents:function(){U(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:s,params:a,el:i}=e,r=a.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const n=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!n||e.currentBreakpoint===n)return;const l=(n in r?r[n]:void 0)||e.originalParams,o=K(e,a),d=K(e,l),c=a.enabled;o&&!d?(i.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!o&&d&&(i.classList.add(`${a.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===a.grid.fill)&&i.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{if(void 0===l[t])return;const s=a[t]&&a[t].enabled,i=l[t]&&l[t].enabled;s&&!i&&e[t].disable(),!s&&i&&e[t].enable()}));const u=l.direction&&l.direction!==a.direction,m=a.loop&&(l.slidesPerView!==a.slidesPerView||u),h=a.loop;u&&s&&e.changeDirection(),p(e.params,l);const f=e.params.enabled,g=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),c&&!f?e.disable():!c&&f&&e.enable(),e.currentBreakpoint=n,e.emit("_beforeBreakpoint",l),s&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!h&&g?(e.loopCreate(t),e.updateSlides()):h&&!g&&e.loopDestroy()),e.emit("breakpoint",l)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,el:i,device:r}=e,n=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...n),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},ee={};class te{constructor(){let e,t;for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=p({},t),e&&!t.el&&(t.el=e);const n=a();if(t.el&&"string"==typeof t.el&&n.querySelectorAll(t.el).length>1){const e=[];return n.querySelectorAll(t.el).forEach((s=>{const a=p({},t,{el:s});e.push(new te(a))})),e}const l=this;l.__swiper__=!0,l.support=L(),l.device=I({userAgent:t.userAgent}),l.browser=A(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const o={};l.modules.forEach((e=>{e({params:t,swiper:l,extendParams:Q(t,o),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})}));const d=p({},Z,o);return l.params=p({},d,ee,t),l.originalParams=p({},l.params),l.passedParams=p({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach((e=>{l.on(e,l.params.on[e])})),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===l.params.direction,isVertical:()=>"vertical"===l.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,a=y(f(t,`.${s.slideClass}, swiper-slide`)[0]);return y(e)-a}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=f(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if("number"==typeof s.slidesPerView)return s.slidesPerView;if(s.centeredSlides){let e,t=a[l]?Math.ceil(a[l].swiperSlideSize):0;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=Math.ceil(a[s].swiperSlideSize),o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&$(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),s.freeMode&&s.freeMode.enabled&&!s.cssMode)a(),s.autoHeight&&e.updateAutoHeight();else{if(("auto"===s.slidesPerView||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const t=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||a()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if("string"==typeof s&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(s&&s.shadowRoot&&s.shadowRoot.querySelector){return s.shadowRoot.querySelector(a())}return f(s,a())[0]})();return!i&&t.params.createElements&&(i=v("div",t.params.wrapperClass),s.append(i),f(s,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:s,wrapperEl:i,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:i,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:"rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===s.dir.toLowerCase()||"rtl"===b(s,"direction")),wrongRTL:"-webkit-box"===b(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;if(!1===t.mount(e))return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const s=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),s.forEach((e=>{e.complete?$(t,e):e.addEventListener("load",(e=>{$(t,e.target)}))})),O(t),t.initialized=!0,O(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,el:i,wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttribute("style"),r.removeAttribute("style"),n&&n.length&&n.forEach((e=>{e.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.el.swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){p(ee,e)}static get extendedDefaults(){return ee}static get defaults(){return Z}static installModule(e){te.prototype.__modules__||(te.prototype.__modules__=[]);const t=te.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>te.installModule(e))),te):(te.installModule(e),te)}}function se(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach((i=>{if(!s[i]&&!0===s.auto){let r=f(e.el,`.${a[i]}`)[0];r||(r=v("div",a[i]),r.className=a[i],e.el.append(r)),s[i]=r,t[i]=r}})),s}function ae(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ie(e){const t=this,{params:s,slidesEl:a}=t;s.loop&&t.loopDestroy();const i=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,a.append(t.children[0]),t.innerHTML=""}else a.append(e)};if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&i(e[t]);else i(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update()}function re(e){const t=this,{params:s,activeIndex:a,slidesEl:i}=t;s.loop&&t.loopDestroy();let r=a+1;const n=e=>{if("string"==typeof e){const t=document.createElement("div");t.innerHTML=e,i.prepend(t.children[0]),t.innerHTML=""}else i.prepend(e)};if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&n(e[t]);r=a+e.length}else n(e);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),t.slideTo(r,0,!1)}function ne(e,t){const s=this,{params:a,activeIndex:i,slidesEl:r}=s;let n=i;a.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.recalcSlides());const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides[t];e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&r.append(t[e]);o=n>e?n+t.length:n}else r.append(t);for(let e=0;e<d.length;e+=1)r.append(d[e]);s.recalcSlides(),a.loop&&s.loopCreate(),a.observer&&!s.isElement||s.update(),a.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function le(e){const t=this,{params:s,activeIndex:a}=t;let i=a;s.loop&&(i-=t.loopedSlides,t.loopDestroy());let r,n=i;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)r=e[s],t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides[r].remove(),r<n&&(n-=1),n=Math.max(n,0);t.recalcSlides(),s.loop&&t.loopCreate(),s.observer&&!t.isElement||t.update(),s.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)}function oe(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function de(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.forEach((e=>{e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e=>e.remove()))})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function ce(e,t){const s=h(t);return s!==t&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function pe(e){let{swiper:t,duration:s,transformElements:a,allSlides:i}=e;const{activeIndex:r}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a:a.filter((e=>{const s=e.classList.contains("swiper-slide-transform")?(e=>{if(!e.parentElement)return t.slides.filter((t=>t.shadowRoot&&t.shadowRoot===e.parentNode))[0];return e.parentElement})(e):e;return t.getSlideIndex(s)===r})),e.forEach((e=>{x(e,(()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(e)}))}))}}function ue(e,t,s){const a=`swiper-slide-shadow${s?`-${s}`:""}${e?` swiper-slide-shadow-${e}`:""}`,i=h(t);let r=i.querySelector(`.${a.split(" ").join(".")}`);return r||(r=v("div",a.split(" ")),i.append(r)),r}Object.keys(J).forEach((e=>{Object.keys(J[e]).forEach((t=>{te.prototype[t]=J[e][t]}))})),te.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,s){void 0===s&&(s={});const a=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(t.__preventObserver__)return;if(1===e.length)return void i("observerUpdate",e[0]);const s=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(s):l.setTimeout(s,0)}));a.observe(e,{attributes:void 0===s.attributes||s.attributes,childList:void 0===s.childList||s.childList,characterData:void 0===s.characterData||s.characterData}),n.push(a)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=E(t.hostEl);for(let t=0;t<e.length;t+=1)o(e[t])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const me=[function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;i({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});const l=a();s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const o=l.createElement("div");function d(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];let i;return a.renderSlide?(i=a.renderSlide.call(s,e,t),"string"==typeof i&&(o.innerHTML=i,i=o.children[0])):i=s.isElement?v("swiper-slide"):v("div",s.params.slideClass),i.setAttribute("data-swiper-slide-index",t),a.renderSlide||(i.innerHTML=e),a.cache&&(s.virtual.cache[t]=i),i}function c(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i,loop:r}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:c,to:p,slides:u,slidesGrid:m,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const g=s.activeIndex||0;let v,w,b;v=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(w=Math.floor(t/2)+a+o,b=Math.floor(t/2)+a+l):(w=t+(a-1)+o,b=(r?t:a)+l);let y=g-b,E=g+w;r||(y=Math.max(y,0),E=Math.min(E,u.length-1));let x=(s.slidesGrid[y]||0)-(s.slidesGrid[0]||0);function S(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),n("virtualUpdate")}if(r&&g>=b?(y-=b,i||(x+=s.slidesGrid[0])):r&&g<b&&(y=-b,i&&(x+=s.slidesGrid[0])),Object.assign(s.virtual,{from:y,to:E,offset:x,slidesGrid:s.slidesGrid,slidesBefore:b,slidesAfter:w}),c===y&&p===E&&!e)return s.slidesGrid!==m&&x!==h&&s.slides.forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),s.updateProgress(),void n("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:y,to:E,slides:function(){const e=[];for(let t=y;t<=E;t+=1)e.push(u[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?S():n("virtualUpdate"));const T=[],M=[],C=e=>{let t=e;return e<0?t=u.length+e:t>=u.length&&(t-=u.length),t};if(e)s.slides.filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e=>{e.remove()}));else for(let e=c;e<=p;e+=1)if(e<y||e>E){const t=C(e);s.slides.filter((e=>e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e=>{e.remove()}))}const P=r?-u.length:0,L=r?2*u.length:u.length;for(let t=P;t<L;t+=1)if(t>=y&&t<=E){const s=C(t);void 0===p||e?M.push(s):(t>p&&M.push(s),t<c&&T.push(s))}if(M.forEach((e=>{s.slidesEl.append(d(u[e],e))})),r)for(let e=T.length-1;e>=0;e-=1){const t=T[e];s.slidesEl.prepend(d(u[t],t))}else T.sort(((e,t)=>t-e)),T.forEach((e=>{s.slidesEl.prepend(d(u[e],e))}));f(s.slidesEl,".swiper-slide, swiper-slide").forEach((e=>{e.style[v]=x-Math.abs(s.cssOverflowAdjustment())+"px"})),S()}r("beforeInit",(()=>{if(!s.params.virtual.enabled)return;let e;if(void 0===s.passedParams.virtual.slides){const t=[...s.slidesEl.children].filter((e=>e.matches(`.${s.params.slideClass}, swiper-slide`)));t&&t.length&&(s.virtual.slides=[...t],e=!0,t.forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t),s.virtual.cache[t]=e,e.remove()})))}e||(s.virtual.slides=s.params.virtual.slides),s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,c()})),r("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{c()}),100)):c())})),r("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&u(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);c(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.getAttribute("data-swiper-slide-index");r&&a.setAttribute("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}c(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.params.virtual.cache&&(delete s.virtual.cache[e[a]],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e[a],1),e[a]<t&&(t-=1),t=Math.max(t,0);else s.params.virtual.cache&&(delete s.virtual.cache[e],Object.keys(s.virtual.cache).forEach((t=>{t>e&&(s.virtual.cache[t-1]=s.virtual.cache[t],s.virtual.cache[t-1].setAttribute("data-swiper-slide-index",t-1),delete s.virtual.cache[t])}))),s.virtual.slides.splice(e,1),e<t&&(t-=1),t=Math.max(t,0);c(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),c(!0),s.slideTo(0,0)},update:c})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function d(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,m=38===i,h=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&h||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&m||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||m||h)){let e=!1;if(E(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&0===E(t.el,`.${t.params.slideActiveClass}`).length)return;const a=t.el,i=a.clientWidth,r=a.clientHeight,n=o.innerWidth,l=o.innerHeight,d=w(a);s&&(d.left-=a.scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||m||h)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||h)&&t.slideNext(),(d||m)&&t.slidePrev()),n("keyPress",i)}}function c(){t.keyboard.enabled||(l.addEventListener("keydown",d),t.keyboard.enabled=!0)}function p(){t.keyboard.enabled&&(l.removeEventListener("keydown",d),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&c()})),i("destroy",(()=>{t.keyboard.enabled&&p()})),Object.assign(t.keyboard,{enable:c,disable:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let d;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),t.mousewheel={enabled:!1};let c,p=o();const u=[];function m(){t.enabled&&(t.mouseEntered=!0)}function h(){t.enabled&&(t.mouseEntered=!1)}function f(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&o()-p<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&o()-p<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),p=(new n.Date).getTime(),!1)))}function g(e){let s=e,a=!0;if(!t.enabled)return;if(e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.el;"container"!==t.params.mousewheel.eventsTarget&&(n=document.querySelector(t.params.mousewheel.eventsTarget));const p=n&&n.contains(s.target);if(!t.mouseEntered&&!p&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let m=0;const h=t.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;m=-g.pixelX*h}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;m=-g.pixelY}else m=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*h:-g.pixelY;if(0===m)return!0;r.invert&&(m=-m);let v=t.getTranslate()+m*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:o(),delta:Math.abs(m),direction:Math.sign(m)},a=c&&e.time<c.time+500&&e.delta<=c.delta&&e.direction===c.direction;if(!a){c=void 0;let n=t.getTranslate()+m*r.sensitivity;const o=t.isBeginning,p=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!o&&t.isBeginning||!p&&t.isEnd)&&t.updateSlidesClasses(),t.params.loop&&t.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),t.params.freeMode.sticky){clearTimeout(d),d=void 0,u.length>=15&&u.shift();const s=u.length?u[u.length-1]:void 0,a=u[0];if(u.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))u.splice(0);else if(u.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=m>0?.8:.2;c=e,u.splice(0),d=l((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}d||(d=l((()=>{c=e,u.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),r.releaseOnEdges&&(n===t.minTranslate()||n===t.maxTranslate()))return!0}}else{const s={time:o(),delta:Math.abs(m),direction:Math.sign(m),raw:e};u.length>=2&&u.shift();const a=u.length?u[u.length-1]:void 0;if(u.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(e){let s=t.el;"container"!==t.params.mousewheel.eventsTarget&&(s=document.querySelector(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",h),s[e]("wheel",g)}function w(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",g),!0):!t.mousewheel.enabled&&(v("addEventListener"),t.mousewheel.enabled=!0,!0)}function b(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,g),!0):!!t.mousewheel.enabled&&(v("removeEventListener"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&b(),t.params.mousewheel.enabled&&w()})),a("destroy",(()=>{t.params.cssMode&&w(),t.mousewheel.enabled&&b()})),Object.assign(t.mousewheel,{enable:w,disable:b})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&"string"==typeof e&&t.isElement&&(s=t.el.querySelector(e),s)?s:(e&&("string"==typeof e&&(s=[...document.querySelectorAll(e)]),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.el.querySelectorAll(e).length&&(s=t.el.querySelector(e))),e&&!s?e:s)}function n(e,s){const a=t.params.navigation;(e=T(e)).forEach((e=>{e&&(e.classList[s?"add":"remove"](...a.disabledClass.split(" ")),"BUTTON"===e.tagName&&(e.disabled=s),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](a.lockClass))}))}function l(){const{nextEl:e,prevEl:s}=t.navigation;if(t.params.loop)return n(s,!1),void n(e,!1);n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function d(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function c(){const e=t.params.navigation;if(t.params.navigation=se(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;let s=r(e.nextEl),a=r(e.prevEl);Object.assign(t.navigation,{nextEl:s,prevEl:a}),s=T(s),a=T(a);const i=(s,a)=>{s&&s.addEventListener("click","next"===a?d:o),!t.enabled&&s&&s.classList.add(...e.lockClass.split(" "))};s.forEach((e=>i(e,"next"))),a.forEach((e=>i(e,"prev")))}function p(){let{nextEl:e,prevEl:s}=t.navigation;e=T(e),s=T(s);const a=(e,s)=>{e.removeEventListener("click","next"===s?d:o),e.classList.remove(...t.params.navigation.disabledClass.split(" "))};e.forEach((e=>a(e,"next"))),s.forEach((e=>a(e,"prev")))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?u():(c(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{p()})),a("enable disable",(()=>{let{nextEl:e,prevEl:s}=t.navigation;e=T(e),s=T(s),t.enabled?l():[...e,...s].filter((e=>!!e)).forEach((e=>e.classList.add(t.params.navigation.lockClass)))})),a("click",((e,s)=>{let{nextEl:a,prevEl:r}=t.navigation;a=T(a),r=T(r);const n=s.target;if(t.params.navigation.hideOnClick&&!r.includes(n)&&!a.includes(n)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a.length?e=a[0].classList.contains(t.params.navigation.hiddenClass):r.length&&(e=r[0].classList.contains(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),[...a,...r].filter((e=>!!e)).forEach((e=>e.classList.toggle(t.params.navigation.hiddenClass)))}}));const u=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),c(),l()},disable:u,update:l,init:c,destroy:p})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&0===t.pagination.el.length}function d(e,s){const{bulletActiveClass:a}=t.params.pagination;e&&(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&(e.classList.add(`${a}-${s}`),(e=e[("prev"===s?"previous":"next")+"ElementSibling"])&&e.classList.add(`${a}-${s}-${s}`))}function c(e){const s=e.target.closest(ae(t.params.pagination.bulletClass));if(!s)return;e.preventDefault();const a=y(s)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===a)return;t.slideToLoop(a)}else t.slideTo(a)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;let a,r,c=t.pagination.el;c=T(c);const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,u=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(r=t.previousRealIndex||0,a=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):void 0!==t.snapIndex?(a=t.snapIndex,r=t.previousSnapIndex):(r=t.previousIndex||0,a=t.activeIndex||0),"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets;let o,p,u;if(s.dynamicBullets&&(n=S(i[0],t.isHorizontal()?"width":"height",!0),c.forEach((e=>{e.style[t.isHorizontal()?"width":"height"]=n*(s.dynamicMainBullets+4)+"px"})),s.dynamicMainBullets>1&&void 0!==r&&(l+=a-(r||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),o=Math.max(a-l,0),p=o+(Math.min(i.length,s.dynamicMainBullets)-1),u=(p+o)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),c.length>1)i.forEach((e=>{const i=y(e);i===a?e.classList.add(...s.bulletActiveClass.split(" ")):t.isElement&&e.setAttribute("part","bullet"),s.dynamicBullets&&(i>=o&&i<=p&&e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),i===o&&d(e,"prev"),i===p&&d(e,"next"))}));else{const e=i[a];if(e&&e.classList.add(...s.bulletActiveClass.split(" ")),t.isElement&&i.forEach(((e,t)=>{e.setAttribute("part",t===a?"bullet-active":"bullet")})),s.dynamicBullets){const e=i[o],t=i[p];for(let e=o;e<=p;e+=1)i[e]&&i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));d(e,"prev"),d(t,"next")}}if(s.dynamicBullets){const a=Math.min(i.length,s.dynamicMainBullets+4),r=(n*a-n)/2-u*n,l=e?"right":"left";i.forEach((e=>{e.style[t.isHorizontal()?l:"top"]=`${r}px`}))}}c.forEach(((e,r)=>{if("fraction"===s.type&&(e.querySelectorAll(ae(s.currentClass)).forEach((e=>{e.textContent=s.formatFractionCurrent(a+1)})),e.querySelectorAll(ae(s.totalClass)).forEach((e=>{e.textContent=s.formatFractionTotal(u)}))),"progressbar"===s.type){let i;i=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const r=(a+1)/u;let n=1,l=1;"horizontal"===i?n=r:l=r,e.querySelectorAll(ae(s.progressbarFillClass)).forEach((e=>{e.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,e.style.transitionDuration=`${t.params.speed}ms`}))}"custom"===s.type&&s.renderCustom?(e.innerHTML=s.renderCustom(t,a+1,u),0===r&&i("paginationRender",e)):(0===r&&i("paginationRender",e),i("paginationUpdate",e)),t.params.watchOverflow&&t.enabled&&e.classList[t.isLocked?"add":"remove"](s.lockClass)}))}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let a=t.pagination.el;a=T(a);let r="";if("bullets"===e.type){let a=t.params.loop?Math.ceil(s/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&a>s&&(a=s);for(let s=0;s<a;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`),t.pagination.bullets=[],a.forEach((s=>{"custom"!==e.type&&(s.innerHTML=r||""),"bullets"===e.type&&t.pagination.bullets.push(...s.querySelectorAll(ae(e.bulletClass)))})),"custom"!==e.type&&i("paginationRender",a[0])}function m(){t.params.pagination=se(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s;"string"==typeof e.el&&t.isElement&&(s=t.el.querySelector(e.el)),s||"string"!=typeof e.el||(s=[...document.querySelectorAll(e.el)]),s||(s=e.el),s&&0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&Array.isArray(s)&&s.length>1&&(s=[...t.el.querySelectorAll(e.el)],s.length>1&&(s=s.filter((e=>E(e,".swiper")[0]===t.el))[0])),Array.isArray(s)&&1===s.length&&(s=s[0]),Object.assign(t.pagination,{el:s}),s=T(s),s.forEach((s=>{"bullets"===e.type&&e.clickable&&s.classList.add(...(e.clickableClass||"").split(" ")),s.classList.add(e.modifierClass+e.type),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.classList.add(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.classList.add(e.progressbarOppositeClass),e.clickable&&s.addEventListener("click",c),t.enabled||s.classList.add(e.lockClass)})))}function h(){const e=t.params.pagination;if(o())return;let s=t.pagination.el;s&&(s=T(s),s.forEach((s=>{s.classList.remove(e.hiddenClass),s.classList.remove(e.modifierClass+e.type),s.classList.remove(t.isHorizontal()?e.horizontalClass:e.verticalClass),e.clickable&&(s.classList.remove(...(e.clickableClass||"").split(" ")),s.removeEventListener("click",c))}))),t.pagination.bullets&&t.pagination.bullets.forEach((t=>t.classList.remove(...e.bulletActiveClass.split(" "))))}a("changeDirection",(()=>{if(!t.pagination||!t.pagination.el)return;const e=t.params.pagination;let{el:s}=t.pagination;s=T(s),s.forEach((s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),a("init",(()=>{!1===t.params.pagination.enabled?f():(m(),u(),p())})),a("activeIndexChange",(()=>{void 0===t.snapIndex&&p()})),a("snapIndexChange",(()=>{p()})),a("snapGridLengthChange",(()=>{u(),p()})),a("destroy",(()=>{h()})),a("enable disable",(()=>{let{el:e}=t.pagination;e&&(e=T(e),e.forEach((e=>e.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass))))})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,r=T(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!a.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r[0].classList.contains(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.forEach((e=>e.classList.toggle(t.params.pagination.hiddenClass)))}}));const f=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=T(e),e.forEach((e=>e.classList.add(t.params.pagination.paginationDisabledClass)))),h()};Object.assign(t.pagination,{enable:()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:e}=t.pagination;e&&(e=T(e),e.forEach((e=>e.classList.remove(t.params.pagination.paginationDisabledClass)))),m(),u(),p()},disable:f,render:u,update:p,init:m,destroy:h})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const o=a();let d,c,p,u,m=!1,h=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s}=t,{dragEl:a,el:i}=e,r=t.params.scrollbar,n=t.params.loop?t.progressLoop:t.progress;let l=c,o=(p-c)*n;s?(o=-o,o>0?(l=c-o,o=0):-o+c>p&&(l=p+o)):o<0?(l=c+o,o=0):o+c>p&&(l=p-o),t.isHorizontal()?(a.style.transform=`translate3d(${o}px, 0, 0)`,a.style.width=`${l}px`):(a.style.transform=`translate3d(0px, ${o}px, 0)`,a.style.height=`${l}px`),r.hide&&(clearTimeout(h),i.style.opacity=1,h=setTimeout((()=>{i.style.opacity=0,i.style.transitionDuration="400ms"}),1e3))}function b(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{dragEl:s,el:a}=e;s.style.width="",s.style.height="",p=t.isHorizontal()?a.offsetWidth:a.offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),c="auto"===t.params.scrollbar.dragSize?p*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s.style.width=`${c}px`:s.style.height=`${c}px`,a.style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a.style.opacity=0),t.params.watchOverflow&&t.enabled&&e.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function y(e){return t.isHorizontal()?e.clientX:e.clientY}function E(e){const{scrollbar:s,rtlTranslate:a}=t,{el:i}=s;let r;r=(y(e)-w(i)[t.isHorizontal()?"left":"top"]-(null!==d?d:c/2))/(p-c),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n,dragEl:l}=a;m=!0,d=e.target===l?y(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.style.transitionDuration="100ms",l.style.transitionDuration="100ms",E(e),clearTimeout(f),n.style.transitionDuration="0ms",s.hide&&(n.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),r("scrollbarDragStart",e)}function S(e){const{scrollbar:s,wrapperEl:a}=t,{el:i,dragEl:n}=s;m&&(e.preventDefault?e.preventDefault():e.returnValue=!1,E(e),a.style.transitionDuration="0ms",i.style.transitionDuration="0ms",n.style.transitionDuration="0ms",r("scrollbarDragMove",e))}function M(e){const s=t.params.scrollbar,{scrollbar:a,wrapperEl:i}=t,{el:n}=a;m&&(m=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",i.style.transitionDuration=""),s.hide&&(clearTimeout(f),f=l((()=>{n.style.opacity=0,n.style.transitionDuration="400ms"}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,params:a}=t,i=s.el;if(!i)return;const r=i,n=!!a.passiveListeners&&{passive:!1,capture:!1},l=!!a.passiveListeners&&{passive:!0,capture:!1};if(!r)return;const d="on"===e?"addEventListener":"removeEventListener";r[d]("pointerdown",x,n),o[d]("pointermove",S,n),o[d]("pointerup",M,l)}function P(){const{scrollbar:e,el:s}=t;t.params.scrollbar=se(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i,r;if("string"==typeof a.el&&t.isElement&&(i=t.el.querySelector(a.el)),i||"string"!=typeof a.el)i||(i=a.el);else if(i=o.querySelectorAll(a.el),!i.length)return;t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.querySelectorAll(a.el).length&&(i=s.querySelector(a.el)),i.length>0&&(i=i[0]),i.classList.add(t.isHorizontal()?a.horizontalClass:a.verticalClass),i&&(r=i.querySelector(ae(t.params.scrollbar.dragClass)),r||(r=v("div",t.params.scrollbar.dragClass),i.append(r))),Object.assign(e,{el:i,dragEl:r}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))}function L(){const e=t.params.scrollbar,s=t.scrollbar.el;s&&s.classList.remove(...n(t.isHorizontal()?e.horizontalClass:e.verticalClass)),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null},i("changeDirection",(()=>{if(!t.scrollbar||!t.scrollbar.el)return;const e=t.params.scrollbar;let{el:s}=t.scrollbar;s=T(s),s.forEach((s=>{s.classList.remove(e.horizontalClass,e.verticalClass),s.classList.add(t.isHorizontal()?e.horizontalClass:e.verticalClass)}))})),i("init",(()=>{!1===t.params.scrollbar.enabled?I():(P(),b(),g())})),i("update resize observerUpdate lock unlock changeDirection",(()=>{b()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&(t.scrollbar.dragEl.style.transitionDuration=`${e}ms`)}(s)})),i("enable disable",(()=>{const{el:e}=t.scrollbar;e&&e.classList[t.enabled?"remove":"add"](...n(t.params.scrollbar.lockClass))})),i("destroy",(()=>{L()}));const I=()=>{t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),L()};Object.assign(t.scrollbar,{enable:()=>{t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),P(),b(),g()},disable:I,updateSize:b,setTranslate:g,init:P,destroy:L})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",r=(e,s)=>{const{rtl:a}=t,i=a?-1:1,r=e.getAttribute("data-swiper-parallax")||"0";let n=e.getAttribute("data-swiper-parallax-x"),l=e.getAttribute("data-swiper-parallax-y");const o=e.getAttribute("data-swiper-parallax-scale"),d=e.getAttribute("data-swiper-parallax-opacity"),c=e.getAttribute("data-swiper-parallax-rotate");if(n||l?(n=n||"0",l=l||"0"):t.isHorizontal()?(n=r,l="0"):(l=r,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*s*i+"%":n*s*i+"px",l=l.indexOf("%")>=0?parseInt(l,10)*s+"%":l*s+"px",null!=d){const t=d-(d-1)*(1-Math.abs(s));e.style.opacity=t}let p=`translate3d(${n}, ${l}, 0px)`;if(null!=o){p+=` scale(${o-(o-1)*(1-Math.abs(s))})`}if(c&&null!=c){p+=` rotate(${c*s*-1}deg)`}e.style.transform=p},n=()=>{const{el:e,slides:s,progress:a,snapGrid:n,isElement:l}=t,o=f(e,i);t.isElement&&o.push(...f(t.hostEl,i)),o.forEach((e=>{r(e,a)})),s.forEach(((e,s)=>{let l=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(l+=Math.ceil(s/2)-a*(n.length-1)),l=Math.min(Math.max(l,-1),1),e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e=>{r(e,l)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&n()})),a("setTranslate",(()=>{t.params.parallax.enabled&&n()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{el:s,hostEl:a}=t,r=[...s.querySelectorAll(i)];t.isElement&&r.push(...a.querySelectorAll(i)),r.forEach((t=>{let s=parseInt(t.getAttribute("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.style.transitionDuration=`${s}ms`}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c=1,p=!1;const u=[],m={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},h={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function b(){if(u.length<2)return 1;const e=u[0].pageX,t=u[0].pageY,s=u[1].pageX,a=u[1].pageY;return Math.sqrt((s-e)**2+(a-t)**2)}function y(e){const s=t.isElement?"swiper-slide":`.${t.params.slideClass}`;return!!e.target.matches(s)||t.slides.filter((t=>t.contains(e.target))).length>0}function x(e){if("mouse"===e.pointerType&&u.splice(0,u.length),!y(e))return;const s=t.params.zoom;if(l=!1,o=!1,u.push(e),!(u.length<2)){if(l=!0,m.scaleStart=b(),!m.slideEl){m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`),m.slideEl||(m.slideEl=t.slides[t.activeIndex]);let a=m.slideEl.querySelector(`.${s.containerClass}`);if(a&&(a=a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=a,m.imageWrapEl=a?E(m.imageEl,`.${s.containerClass}`)[0]:void 0,!m.imageWrapEl)return void(m.imageEl=void 0);m.maxRatio=m.imageWrapEl.getAttribute("data-swiper-zoom")||s.maxRatio}if(m.imageEl){const[e,t]=function(){if(u.length<2)return{x:null,y:null};const e=m.imageEl.getBoundingClientRect();return[(u[0].pageX+(u[1].pageX-u[0].pageX)/2-e.x-n.scrollX)/c,(u[0].pageY+(u[1].pageY-u[0].pageY)/2-e.y-n.scrollY)/c]}();m.originX=e,m.originY=t,m.imageEl.style.transitionDuration="0ms"}p=!0}}function S(e){if(!y(e))return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&(u[i]=e),u.length<2||(o=!0,m.scaleMove=b(),m.imageEl&&(a.scale=m.scaleMove/m.scaleStart*c,a.scale>m.maxRatio&&(a.scale=m.maxRatio-1+(a.scale-m.maxRatio+1)**.5),a.scale<s.minRatio&&(a.scale=s.minRatio+1-(s.minRatio-a.scale+1)**.5),m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`))}function T(e){if(!y(e))return;if("mouse"===e.pointerType&&"pointerout"===e.type)return;const s=t.params.zoom,a=t.zoom,i=u.findIndex((t=>t.pointerId===e.pointerId));i>=0&&u.splice(i,1),l&&o&&(l=!1,o=!1,m.imageEl&&(a.scale=Math.max(Math.min(a.scale,m.maxRatio),s.minRatio),m.imageEl.style.transitionDuration=`${t.params.speed}ms`,m.imageEl.style.transform=`translate3d(0,0,0) scale(${a.scale})`,c=a.scale,p=!1,a.scale>1&&m.slideEl?m.slideEl.classList.add(`${s.zoomedSlideClass}`):a.scale<=1&&m.slideEl&&m.slideEl.classList.remove(`${s.zoomedSlideClass}`),1===a.scale&&(m.originX=0,m.originY=0,m.slideEl=void 0)))}function M(e){if(!y(e)||!function(e){const s=`.${t.params.zoom.containerClass}`;return!!e.target.matches(s)||[...t.hostEl.querySelectorAll(s)].filter((t=>t.contains(e.target))).length>0}(e))return;const s=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!m.slideEl)return;h.isMoved||(h.width=m.imageEl.offsetWidth,h.height=m.imageEl.offsetHeight,h.startX=d(m.imageWrapEl,"x")||0,h.startY=d(m.imageWrapEl,"y")||0,m.slideWidth=m.slideEl.offsetWidth,m.slideHeight=m.slideEl.offsetHeight,m.imageWrapEl.style.transitionDuration="0ms");const a=h.width*s.scale,i=h.height*s.scale;if(a<m.slideWidth&&i<m.slideHeight)return;h.minX=Math.min(m.slideWidth/2-a/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-i/2,0),h.maxY=-h.minY,h.touchesCurrent.x=u.length>0?u[0].pageX:e.pageX,h.touchesCurrent.y=u.length>0?u[0].pageY:e.pageY;if(Math.max(Math.abs(h.touchesCurrent.x-h.touchesStart.x),Math.abs(h.touchesCurrent.y-h.touchesStart.y))>5&&(t.allowClick=!1),!h.isMoved&&!p){if(t.isHorizontal()&&(Math.floor(h.minX)===Math.floor(h.startX)&&h.touchesCurrent.x<h.touchesStart.x||Math.floor(h.maxX)===Math.floor(h.startX)&&h.touchesCurrent.x>h.touchesStart.x))return void(h.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(h.minY)===Math.floor(h.startY)&&h.touchesCurrent.y<h.touchesStart.y||Math.floor(h.maxY)===Math.floor(h.startY)&&h.touchesCurrent.y>h.touchesStart.y))return void(h.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),h.isMoved=!0;const r=(s.scale-c)/(m.maxRatio-t.params.zoom.minRatio),{originX:n,originY:l}=m;h.currentX=h.touchesCurrent.x-h.touchesStart.x+h.startX+r*(h.width-2*n),h.currentY=h.touchesCurrent.y-h.touchesStart.y+h.startY+r*(h.height-2*l),h.currentX<h.minX&&(h.currentX=h.minX+1-(h.minX-h.currentX+1)**.8),h.currentX>h.maxX&&(h.currentX=h.maxX-1+(h.currentX-h.maxX+1)**.8),h.currentY<h.minY&&(h.currentY=h.minY+1-(h.minY-h.currentY+1)**.8),h.currentY>h.maxY&&(h.currentY=h.maxY-1+(h.currentY-h.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=h.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=h.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(h.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(h.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(h.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(h.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=h.touchesCurrent.x,g.prevPositionY=h.touchesCurrent.y,g.prevTime=Date.now(),m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}function C(){const e=t.zoom;m.slideEl&&t.activeIndex!==t.slides.indexOf(m.slideEl)&&(m.imageEl&&(m.imageEl.style.transform="translate3d(0,0,0) scale(1)"),m.imageWrapEl&&(m.imageWrapEl.style.transform="translate3d(0,0,0)"),m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),e.scale=1,c=1,m.slideEl=void 0,m.imageEl=void 0,m.imageWrapEl=void 0,m.originX=0,m.originY=0)}function P(e){const s=t.zoom,a=t.params.zoom;if(!m.slideEl){e&&e.target&&(m.slideEl=e.target.closest(`.${t.params.slideClass}, swiper-slide`)),m.slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex]);let s=m.slideEl.querySelector(`.${a.containerClass}`);s&&(s=s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=s,m.imageWrapEl=s?E(m.imageEl,`.${a.containerClass}`)[0]:void 0}if(!m.imageEl||!m.imageWrapEl)return;let i,r,l,o,d,p,u,g,v,b,y,x,S,T,M,C,P,L;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.slideEl.classList.add(`${a.zoomedSlideClass}`),void 0===h.touchesStart.x&&e?(i=e.pageX,r=e.pageY):(i=h.touchesStart.x,r=h.touchesStart.y);const I="number"==typeof e?e:null;1===c&&I&&(i=void 0,r=void 0),s.scale=I||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,c=I||m.imageWrapEl.getAttribute("data-swiper-zoom")||a.maxRatio,!e||1===c&&I?(u=0,g=0):(P=m.slideEl.offsetWidth,L=m.slideEl.offsetHeight,l=w(m.slideEl).left+n.scrollX,o=w(m.slideEl).top+n.scrollY,d=l+P/2-i,p=o+L/2-r,v=m.imageEl.offsetWidth,b=m.imageEl.offsetHeight,y=v*s.scale,x=b*s.scale,S=Math.min(P/2-y/2,0),T=Math.min(L/2-x/2,0),M=-S,C=-T,u=d*s.scale,g=p*s.scale,u<S&&(u=S),u>M&&(u=M),g<T&&(g=T),g>C&&(g=C)),I&&1===s.scale&&(m.originX=0,m.originY=0),m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform=`translate3d(${u}px, ${g}px,0)`,m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform=`translate3d(0,0,0) scale(${s.scale})`}function L(){const e=t.zoom,s=t.params.zoom;if(!m.slideEl){t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.slideEl=f(t.slidesEl,`.${t.params.slideActiveClass}`)[0]:m.slideEl=t.slides[t.activeIndex];let e=m.slideEl.querySelector(`.${s.containerClass}`);e&&(e=e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),m.imageEl=e,m.imageWrapEl=e?E(m.imageEl,`.${s.containerClass}`)[0]:void 0}m.imageEl&&m.imageWrapEl&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,c=1,m.imageWrapEl.style.transitionDuration="300ms",m.imageWrapEl.style.transform="translate3d(0,0,0)",m.imageEl.style.transitionDuration="300ms",m.imageEl.style.transform="translate3d(0,0,0) scale(1)",m.slideEl.classList.remove(`${s.zoomedSlideClass}`),m.slideEl=void 0,m.originX=0,m.originY=0)}function I(e){const s=t.zoom;s.scale&&1!==s.scale?L():P(e)}function A(){return{passiveListener:!!t.params.passiveListeners&&{passive:!0,capture:!1},activeListenerWithCapture:!t.params.passiveListeners||{passive:!1,capture:!0}}}function z(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const{passiveListener:s,activeListenerWithCapture:a}=A();t.wrapperEl.addEventListener("pointerdown",x,s),t.wrapperEl.addEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.addEventListener(e,T,s)})),t.wrapperEl.addEventListener("pointermove",M,a)}function $(){const e=t.zoom;if(!e.enabled)return;e.enabled=!1;const{passiveListener:s,activeListenerWithCapture:a}=A();t.wrapperEl.removeEventListener("pointerdown",x,s),t.wrapperEl.removeEventListener("pointermove",S,a),["pointerup","pointercancel","pointerout"].forEach((e=>{t.wrapperEl.removeEventListener(e,T,s)})),t.wrapperEl.removeEventListener("pointermove",M,a)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.imageEl,s=m.slideEl;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&z()})),a("destroy",(()=>{$()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;if(!m.imageEl)return;if(h.isTouched)return;s.android&&e.cancelable&&e.preventDefault(),h.isTouched=!0;const a=u.length>0?u[0]:e;h.touchesStart.x=a.pageX,h.touchesStart.y=a.pageY}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.imageEl)return;if(!h.isTouched||!h.isMoved)return h.isTouched=!1,void(h.isMoved=!1);h.isTouched=!1,h.isMoved=!1;let s=300,a=300;const i=g.x*s,r=h.currentX+i,n=g.y*a,l=h.currentY+n;0!==g.x&&(s=Math.abs((r-h.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-h.currentY)/g.y));const o=Math.max(s,a);h.currentX=r,h.currentY=l;const d=h.width*e.scale,c=h.height*e.scale;h.minX=Math.min(m.slideWidth/2-d/2,0),h.maxX=-h.minX,h.minY=Math.min(m.slideHeight/2-c/2,0),h.maxY=-h.minY,h.currentX=Math.max(Math.min(h.currentX,h.maxX),h.minX),h.currentY=Math.max(Math.min(h.currentY,h.maxY),h.minY),m.imageWrapEl.style.transitionDuration=`${o}ms`,m.imageWrapEl.style.transform=`translate3d(${h.currentX}px, ${h.currentY}px,0)`}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&I(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:z,disable:$,in:P,out:L,toggle:I})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{if("undefined"!=typeof window&&("string"==typeof t.params.controller.control||t.params.controller.control instanceof HTMLElement)){const e=document.querySelector(t.params.controller.control);if(e&&e.swiper)t.controller.control=e.swiper;else if(e){const s=a=>{t.controller.control=a.detail[0],t.update(),e.removeEventListener("init",s)};e.addEventListener("init",s)}}else t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&!t.controller.control.destroyed&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){if(e.destroyed)return;const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid)}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),!Number.isNaN(r)&&Number.isFinite(r)||(r=1),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.destroyed||(s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&l((()=>{s.updateAutoHeight()})),x(s.wrapperEl,(()=>{i&&s.transitionEnd()}))))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.innerHTML="",t.innerHTML=e)}function n(e){(e=T(e)).forEach((e=>{e.setAttribute("tabIndex","0")}))}function l(e){(e=T(e)).forEach((e=>{e.setAttribute("tabIndex","-1")}))}function o(e,t){(e=T(e)).forEach((e=>{e.setAttribute("role",t)}))}function d(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-roledescription",t)}))}function c(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-label",t)}))}function p(e){(e=T(e)).forEach((e=>{e.setAttribute("aria-disabled",!0)}))}function u(e){(e=T(e)).forEach((e=>{e.setAttribute("aria-disabled",!1)}))}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=e.target;t.pagination&&t.pagination.el&&(a===t.pagination.el||t.pagination.el.contains(e.target))&&!e.target.matches(ae(t.params.pagination.bulletClass))||(t.navigation&&t.navigation.nextEl&&a===t.navigation.nextEl&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.prevEl&&a===t.navigation.prevEl&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.matches(ae(t.params.pagination.bulletClass))&&a.click())}function h(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function f(){return h()&&t.params.pagination.clickable}const g=(e,t,s)=>{n(e),"BUTTON"!==e.tagName&&(o(e,"button"),e.addEventListener("keydown",m)),c(e,s),function(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-controls",t)}))}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},E=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}, swiper-slide`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},x=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&d(t.slides,e.itemRoleDescriptionMessage),e.slideRole&&o(t.slides,e.slideRole);const s=t.slides.length;e.slideLabelMessage&&t.slides.forEach(((a,i)=>{const r=t.params.loop?parseInt(a.getAttribute("data-swiper-slide-index"),10):i;c(a,e.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,s))}))},S=()=>{const e=t.params.a11y;t.el.append(i);const s=t.el;e.containerRoleDescriptionMessage&&d(s,e.containerRoleDescriptionMessage),e.containerMessage&&c(s,e.containerMessage);const a=t.wrapperEl,r=e.id||a.getAttribute("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;o=r,T(a).forEach((e=>{e.setAttribute("id",o)})),function(e,t){(e=T(e)).forEach((e=>{e.setAttribute("aria-live",t)}))}(a,l),x();let{nextEl:p,prevEl:u}=t.navigation?t.navigation:{};if(p=T(p),u=T(u),p&&p.forEach((t=>g(t,r,e.nextSlideMessage))),u&&u.forEach((t=>g(t,r,e.prevSlideMessage))),f()){T(t.pagination.el).forEach((e=>{e.addEventListener("keydown",m)}))}t.el.addEventListener("focus",E,!0),t.el.addEventListener("pointerdown",w,!0),t.el.addEventListener("pointerup",b,!0)};a("beforeInit",(()=>{i=v("span",t.params.a11y.notificationClass),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true")})),a("afterInit",(()=>{t.params.a11y.enabled&&S()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&x()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{nextEl:e,prevEl:s}=t.navigation;s&&(t.isBeginning?(p(s),l(s)):(u(s),n(s))),e&&(t.isEnd?(p(e),l(e)):(u(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;h()&&t.pagination.bullets.forEach((s=>{t.params.pagination.clickable&&(n(s),t.params.pagination.renderBullet||(o(s,"button"),c(s,e.paginationBulletMessage.replace(/\{\{index\}\}/,y(s)+1)))),s.matches(ae(t.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){i&&i.remove();let{nextEl:e,prevEl:s}=t.navigation?t.navigation:{};e=T(e),s=T(s),e&&e.forEach((e=>e.removeEventListener("keydown",m))),s&&s.forEach((e=>e.removeEventListener("keydown",m))),f()&&T(t.pagination.el).forEach((e=>{e.removeEventListener("keydown",m)}));t.el.removeEventListener("focus",E,!0),t.el.removeEventListener("pointerdown",w,!0),t.el.removeEventListener("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides[s];let d=l(o.getAttribute("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e?`${e}/`:""}${d}`}else n.pathname.includes(e)||(d=`${e?`${e}/`:""}${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides[i];if(l(r.getAttribute("data-history"))===s){const s=t.getSlideIndex(r);t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),n.key||n.value?(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p)):t.params.history.replaceState||e.addEventListener("popstate",p)}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),d=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(e,s){if(t.virtual&&t.params.virtual.enabled){const e=t.slides.filter((e=>e.getAttribute("data-hash")===s))[0];if(!e)return 0;return parseInt(e.getAttribute("data-swiper-slide-index"),10)}return t.getSlideIndex(f(t.slidesEl,`.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])}}});const c=()=>{i("hashChange");const e=o.location.hash.replace("#",""),s=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex];if(e!==(s?s.getAttribute("data-hash"):"")){const s=t.params.hashNavigation.getSlideIndex(t,e);if(void 0===s||Number.isNaN(s))return;t.slideTo(s)}},p=()=>{if(!l||!t.params.hashNavigation.enabled)return;const e=t.virtual&&t.params.virtual.enabled?t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`):t.slides[t.activeIndex],s=e?e.getAttribute("data-hash")||e.getAttribute("data-history"):"";t.params.hashNavigation.replaceState&&d.history&&d.history.replaceState?(d.history.replaceState(null,null,`#${s}`||""),i("hashSet")):(o.location.hash=s||"",i("hashSet"))};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0,a=t.params.hashNavigation.getSlideIndex(t,e);t.slideTo(a||0,s,t.params.runCallbacksOnInit,!0)}t.params.hashNavigation.watchState&&d.addEventListener("hashchange",c)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d.removeEventListener("hashchange",c)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&p()})),n("slideChange",(()=>{l&&t.params.cssMode&&p()}))},function(e){let t,s,{swiper:i,extendParams:r,on:n,emit:l,params:o}=e;i.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,c,p,u,m,h,f,g,v=o&&o.autoplay?o.autoplay.delay:3e3,w=o&&o.autoplay?o.autoplay.delay:3e3,b=(new Date).getTime();function y(e){i&&!i.destroyed&&i.wrapperEl&&e.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",y),g||C())}const E=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?c=!0:c&&(w=d,c=!1);const e=i.autoplay.paused?d:b+w-(new Date).getTime();i.autoplay.timeLeft=e,l("autoplayTimeLeft",e,e/v),s=requestAnimationFrame((()=>{E()}))},x=e=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(s),E();let a=void 0===e?i.params.autoplay.delay:e;v=i.params.autoplay.delay,w=i.params.autoplay.delay;const r=(()=>{let e;if(e=i.virtual&&i.params.virtual.enabled?i.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:i.slides[i.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(r)&&r>0&&void 0===e&&(a=r,v=r,w=r),d=a;const n=i.params.speed,o=()=>{i&&!i.destroyed&&(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,n,!0,!0),l("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(n,!0,!0),l("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,n,!0,!0),l("autoplay")),i.params.cssMode&&(b=(new Date).getTime(),requestAnimationFrame((()=>{x()}))))};return a>0?(clearTimeout(t),t=setTimeout((()=>{o()}),a)):requestAnimationFrame((()=>{o()})),a},S=()=>{b=(new Date).getTime(),i.autoplay.running=!0,x(),l("autoplayStart")},T=()=>{i.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(s),l("autoplayStop")},M=(e,s)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(t),e||(f=!0);const a=()=>{l("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",y):C()};if(i.autoplay.paused=!0,s)return h&&(d=i.params.autoplay.delay),h=!1,void a();const r=d||i.params.autoplay.delay;d=r-((new Date).getTime()-b),i.isEnd&&d<0&&!i.params.loop||(d<0&&(d=0),a())},C=()=>{i.isEnd&&d<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(b=(new Date).getTime(),f?(f=!1,x(d)):x(),i.autoplay.paused=!1,l("autoplayResume"))},P=()=>{if(i.destroyed||!i.autoplay.running)return;const e=a();"hidden"===e.visibilityState&&(f=!0,M(!0)),"visible"===e.visibilityState&&C()},L=e=>{"mouse"===e.pointerType&&(f=!0,g=!0,i.animating||i.autoplay.paused||M(!0))},I=e=>{"mouse"===e.pointerType&&(g=!1,i.autoplay.paused&&C())};n("init",(()=>{i.params.autoplay.enabled&&(i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",L),i.el.addEventListener("pointerleave",I)),a().addEventListener("visibilitychange",P),S())})),n("destroy",(()=>{i.el.removeEventListener("pointerenter",L),i.el.removeEventListener("pointerleave",I),a().removeEventListener("visibilitychange",P),i.autoplay.running&&T()})),n("_freeModeStaticRelease",(()=>{(u||f)&&C()})),n("_freeModeNoMomentumRelease",(()=>{i.params.autoplay.disableOnInteraction?T():M(!0,!0)})),n("beforeTransitionStart",((e,t,s)=>{!i.destroyed&&i.autoplay.running&&(s||!i.params.autoplay.disableOnInteraction?M(!0,!0):T())})),n("sliderFirstMove",(()=>{!i.destroyed&&i.autoplay.running&&(i.params.autoplay.disableOnInteraction?T():(p=!0,u=!1,f=!1,m=setTimeout((()=>{f=!0,u=!0,M(!0)}),200)))})),n("touchEnd",(()=>{if(!i.destroyed&&i.autoplay.running&&p){if(clearTimeout(m),clearTimeout(t),i.params.autoplay.disableOnInteraction)return u=!1,void(p=!1);u&&i.params.cssMode&&C(),u=!1,p=!1}})),n("slideChange",(()=>{!i.destroyed&&i.autoplay.running&&(h=!0)})),Object.assign(i.autoplay,{start:S,stop:T,pause:M,resume:C})},function(e){let{swiper:t,extendParams:s,on:i}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,n=!1;function l(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&a.classList.contains(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;i=e.params.loop?parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10):s,t.params.loop?t.slideToLoop(i):t.slideTo(i)}function o(){const{thumbs:e}=t.params;if(r)return!1;r=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(c(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),n=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",l),!0}function d(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.forEach((e=>e.classList.remove(r))),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)f(s.slidesEl,`[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e=>{e.classList.add(r)}));else for(let e=0;e<i;e+=1)s.slides[t.realIndex+e]&&s.slides[t.realIndex+e].classList.add(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){const i=s.activeIndex;let r,o;if(s.params.loop){const e=s.slides.filter((e=>e.getAttribute("data-swiper-slide-index")===`${t.realIndex}`))[0];r=s.slides.indexOf(e),o=t.activeIndex>t.previousIndex?"next":"prev"}else r=t.realIndex,o=r>t.previousIndex?"next":"prev";l&&(r+="next"===o?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(r)<0&&(s.params.centeredSlides?r=r>i?r-Math.floor(a/2)+1:r+Math.floor(a/2)-1:r>i&&s.params.slidesPerGroup,s.slideTo(r,e?0:void 0))}}t.thumbs={swiper:null},i("beforeInit",(()=>{const{thumbs:e}=t.params;if(e&&e.swiper)if("string"==typeof e.swiper||e.swiper instanceof HTMLElement){const s=a(),i=()=>{const a="string"==typeof e.swiper?s.querySelector(e.swiper):e.swiper;if(a&&a.swiper)e.swiper=a.swiper,o(),d(!0);else if(a){const s=i=>{e.swiper=i.detail[0],a.removeEventListener("init",s),o(),d(!0),e.swiper.update(),t.update()};a.addEventListener("init",s)}return a},r=()=>{if(t.destroyed)return;i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else o(),d(!0)})),i("slideChange update resize observerUpdate",(()=>{d()})),i("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),i("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&n&&e.destroy()})),Object.assign(t.thumbs,{init:o,update:d})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){if(t.params.cssMode)return;const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){if(t.params.cssMode)return;const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:o()})},onTouchEnd:function(e){let{currentPos:s}=e;if(t.params.cssMode)return;const{params:r,wrapperEl:n,rtlTranslate:l,snapGrid:d,touchEventsData:c}=t,p=o()-c.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(c.velocities.length>1){const e=c.velocities.pop(),s=c.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||o()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,c.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let p=t.translate+s;l&&(p=-p);let u,m=!1;const h=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(p<t.maxTranslate())r.freeMode.momentumBounce?(p+t.maxTranslate()<-h&&(p=t.maxTranslate()-h),u=t.maxTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(p>t.minTranslate())r.freeMode.momentumBounce?(p-t.minTranslate()>h&&(p=t.minTranslate()+h),u=t.minTranslate(),m=!0,c.allowMomentumBounce=!0):p=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<d.length;t+=1)if(d[t]>-p){e=t;break}p=Math.abs(d[e]-p)<Math.abs(d[e-1]-p)||"next"===t.swipeDirection?d[e]:d[e-1],p=-p}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-p-t.translate)/t.velocity):Math.abs((p-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-p:p)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&m?(t.updateProgress(u),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating=!0,x(n,(()=>{t&&!t.destroyed&&c.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(u),x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(p),t.setTransition(e),t.setTranslate(p),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,x(n,(()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(p),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||p>=r.longSwipesMs)&&(a("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,i,{swiper:r,extendParams:n,on:l}=e;n({grid:{rows:1,fill:"column"}});const o=()=>{let e=r.params.spaceBetween;return"string"==typeof e&&e.indexOf("%")>=0?e=parseFloat(e.replace("%",""))/100*r.size:"string"==typeof e&&(e=parseFloat(e)),e};l("init",(()=>{i=r.params.grid&&r.params.grid.rows>1})),l("update",(()=>{const{params:e,el:t}=r,s=e.grid&&e.grid.rows>1;i&&!s?(t.classList.remove(`${e.containerModifierClass}grid`,`${e.containerModifierClass}grid-column`),a=1,r.emitContainerClasses()):!i&&s&&(t.classList.add(`${e.containerModifierClass}grid`),"column"===e.grid.fill&&t.classList.add(`${e.containerModifierClass}grid-column`),r.emitContainerClasses()),i=s})),r.grid={initSlides:e=>{const{slidesPerView:i}=r.params,{rows:n,fill:l}=r.params.grid,o=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:e.length;a=Math.floor(o/n),t=Math.floor(o/n)===o/n?o:Math.ceil(o/n)*n,"auto"!==i&&"row"===l&&(t=Math.max(t,i*n)),s=t/n},unsetSlides:()=>{r.slides&&r.slides.forEach((e=>{e.swiperSlideGridSet&&(e.style.height="",e.style[r.getDirectionLabel("margin-top")]="")}))},updateSlide:(e,i,n)=>{const{slidesPerGroup:l}=r.params,d=o(),{rows:c,fill:p}=r.params.grid,u=r.virtual&&r.params.virtual.enabled?r.virtual.slides.length:n.length;let m,h,f;if("row"===p&&l>1){const s=Math.floor(e/(l*c)),a=e-c*l*s,r=0===s?l:Math.min(Math.ceil((u-s*c*l)/c),l);f=Math.floor(a/r),h=a-f*r+s*l,m=h+f*t/c,i.style.order=m}else"column"===p?(h=Math.floor(e/c),f=e-h*c,(h>a||h===a&&f===c-1)&&(f+=1,f>=c&&(f=0,h+=1))):(f=Math.floor(e/s),h=e-f*s);i.row=f,i.column=h,i.style.height=`calc((100% - ${(c-1)*d}px) / ${c})`,i.style[r.getDirectionLabel("margin-top")]=0!==f?d&&`${d}px`:"",i.swiperSlideGridSet=!0},updateWrapperSize:(e,s)=>{const{centeredSlides:a,roundLengths:i}=r.params,n=o(),{rows:l}=r.params.grid;if(r.virtualSize=(e+n)*t,r.virtualSize=Math.ceil(r.virtualSize/l)-n,r.params.cssMode||(r.wrapperEl.style[r.getDirectionLabel("width")]=`${r.virtualSize+n}px`),a){const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];i&&(a=Math.floor(a)),s[t]<r.virtualSize+s[0]&&e.push(a)}s.splice(0,s.length),s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:ie.bind(t),prependSlide:re.bind(t),addSlide:ne.bind(t),removeSlide:le.bind(t),removeAllSlides:oe.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1}}),de({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t;t.params.fadeEffect;for(let s=0;s<e.length;s+=1){const e=t.slides[s];let a=-e.swiperSlideOffset;t.params.virtualTranslate||(a-=t.translate);let i=0;t.isHorizontal()||(i=a,a=0);const r=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e.progress),0):1+Math.min(Math.max(e.progress,-1),0),n=ce(0,e);n.style.opacity=r,n.style.transform=`translate3d(${a}px, ${i}px, 0px)`}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`})),pe({swiper:t,duration:e,transformElements:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=s?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"left":"top")).split(" ")),e.append(a)),i||(i=v("div",("swiper-slide-shadow-cube swiper-slide-shadow-"+(s?"right":"bottom")).split(" ")),e.append(i)),a&&(a.style.opacity=Math.max(-t,0)),i&&(i.style.opacity=Math.max(t,0))};de({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{el:e,wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:d}=t,c=t.params.cubeEffect,p=t.isHorizontal(),u=t.virtual&&t.params.virtual.enabled;let m,h=0;c.shadow&&(p?(m=t.wrapperEl.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),t.wrapperEl.append(m)),m.style.height=`${r}px`):(m=e.querySelector(".swiper-cube-shadow"),m||(m=v("div","swiper-cube-shadow"),e.append(m))));for(let e=0;e<a.length;e+=1){const s=a[e];let r=e;u&&(r=parseInt(s.getAttribute("data-swiper-slide-index"),10));let n=90*r,d=Math.floor(n/360);l&&(n=-n,d=Math.floor(-n/360));const m=Math.max(Math.min(s.progress,1),-1);let f=0,g=0,v=0;r%4==0?(f=4*-d*o,v=0):(r-1)%4==0?(f=0,v=4*-d*o):(r-2)%4==0?(f=o+4*d*o,v=o):(r-3)%4==0&&(f=-o,v=3*o+4*o*d),l&&(f=-f),p||(g=f,f=0);const w=`rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${f}px, ${g}px, ${v}px)`;m<=1&&m>-1&&(h=90*r+90*m,l&&(h=90*-r-90*m),t.browser&&t.browser.need3dFix&&Math.abs(h)/90%2==1&&(h+=.001)),s.style.transform=w,c.slideShadows&&i(s,m,p)}if(s.style.transformOrigin=`50% 50% -${o/2}px`,s.style["-webkit-transform-origin"]=`50% 50% -${o/2}px`,c.shadow)if(p)m.style.transform=`translate3d(0px, ${r/2+c.shadowOffset}px, ${-r/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;else{const e=Math.abs(h)-90*Math.floor(Math.abs(h)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;m.style.transform=`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-89.99deg)`}const f=(d.isSafari||d.isWebView)&&d.needPerspectiveFix?-o/2:0;s.style.transform=`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:h}deg) rotateY(${t.isHorizontal()?-h:0}deg)`,s.style.setProperty("--swiper-cube-translate-z",`${f}px`)},setTransition:e=>{const{el:s,slides:a}=t;if(a.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),t.params.cubeEffect.shadow&&!t.isHorizontal()){const t=s.querySelector(".swiper-cube-shadow");t&&(t.style.transitionDuration=`${e}ms`)}},recreateShadows:()=>{const e=t.isHorizontal();t.slides.forEach((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(t,s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0}});const i=(e,s)=>{let a=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-left"):e.querySelector(".swiper-slide-shadow-top"),i=t.isHorizontal()?e.querySelector(".swiper-slide-shadow-right"):e.querySelector(".swiper-slide-shadow-bottom");a||(a=ue("flip",e,t.isHorizontal()?"left":"top")),i||(i=ue("flip",e,t.isHorizontal()?"right":"bottom")),a&&(a.style.opacity=Math.max(-s,0)),i&&(i.style.opacity=Math.max(s,0))};de({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e[r];let l=n.progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n.progress,1),-1));const o=n.swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),t.browser&&t.browser.need3dFix&&(Math.abs(d)/90%2==1&&(d+=.001),Math.abs(c)/90%2==1&&(c+=.001)),n.style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l);const m=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;ce(0,n).style.transform=m}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),pe({swiper:t,duration:e,transformElements:s})},recreateShadows:()=>{t.params.flipEffect,t.slides.forEach((e=>{let s=e.progress;t.params.flipEffect.limitRotation&&(s=Math.max(Math.min(e.progress,1),-1)),i(e,s)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),de({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,s=a.length;e<s;e+=1){const s=a[e],l=i[e],p=(o-s.swiperSlideOffset-l/2)/l,u="function"==typeof r.modifier?r.modifier(p):p*r.modifier;let m=n?d*u:0,h=n?0:d*u,f=-c*Math.abs(u),g=r.stretch;"string"==typeof g&&-1!==g.indexOf("%")&&(g=parseFloat(r.stretch)/100*l);let v=n?0:g*u,w=n?g*u:0,b=1-(1-r.scale)*Math.abs(u);Math.abs(w)<.001&&(w=0),Math.abs(v)<.001&&(v=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(h)<.001&&(h=0),Math.abs(b)<.001&&(b=0),t.browser&&t.browser.need3dFix&&(Math.abs(m)/90%2==1&&(m+=.001),Math.abs(h)/90%2==1&&(h+=.001));const y=`translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;if(ce(0,s).style.transform=y,s.style.zIndex=1-Math.abs(Math.round(u)),r.slideShadows){let e=n?s.querySelector(".swiper-slide-shadow-left"):s.querySelector(".swiper-slide-shadow-top"),t=n?s.querySelector(".swiper-slide-shadow-right"):s.querySelector(".swiper-slide-shadow-bottom");e||(e=ue("coverflow",s,n?"left":"top")),t||(t=ue("coverflow",s,n?"right":"bottom")),e&&(e.style.opacity=u>0?u:0),t&&(t.style.opacity=-u>0?-u:0)}}},setTransition:e=>{t.slides.map((e=>h(e))).forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t=>{t.style.transitionDuration=`${e}ms`}))}))},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;de({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.style.transform=`translateX(calc(50% - ${e}px))`}for(let s=0;s<e.length;s+=1){const a=e[s],o=a.progress,d=Math.min(Math.max(a.progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a.originalProgress,-r.limitProgress),r.limitProgress));const p=a.swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],m=[0,0,0];let h=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,h=!0):d>0&&(f=r.prev,h=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),m.forEach(((e,s)=>{let a=f.rotate[s]*Math.abs(d*n);t.browser&&t.browser.need3dFix&&Math.abs(a)/90%2==1&&(a+=.001),m[s]=a})),a.style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,y=`translate3d(${g}) ${v} ${w}`;if(h&&f.shadow||!h){let e=a.querySelector(".swiper-slide-shadow");if(!e&&f.shadow&&(e=ue("creative",a)),e){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e.style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const E=ce(0,a);E.style.transform=y,E.style.opacity=b,f.origin&&(E.style.transformOrigin=f.origin)}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),pe({swiper:t,duration:e,transformElements:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),de({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s,rtlTranslate:a}=t,i=t.params.cardsEffect,{startTranslate:r,isTouched:n}=t.touchEventsData,l=a?-t.translate:t.translate;for(let o=0;o<e.length;o+=1){const d=e[o],c=d.progress,p=Math.min(Math.max(c,-4),4);let u=d.swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&(t.wrapperEl.style.transform=`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(u-=e[0].swiperSlideOffset);let m=t.params.cssMode?-u-t.translate:-u,h=0;const f=-100*Math.abs(p);let g=1,v=-i.perSlideRotate*p,w=i.perSlideOffset-.75*Math.abs(p);const b=t.virtual&&t.params.virtual.enabled?t.virtual.from+o:o,y=(b===s||b===s-1)&&p>0&&p<1&&(n||t.params.cssMode)&&l<r,E=(b===s||b===s+1)&&p<0&&p>-1&&(n||t.params.cssMode)&&l>r;if(y||E){const e=(1-Math.abs((Math.abs(p)-.5)/.5))**.5;v+=-28*p*e,g+=-.5*e,w+=96*e,h=-25*e*Math.abs(p)+"%"}if(m=p<0?`calc(${m}px ${a?"-":"+"} (${w*Math.abs(p)}%))`:p>0?`calc(${m}px ${a?"-":"+"} (-${w*Math.abs(p)}%))`:`${m}px`,!t.isHorizontal()){const e=h;h=m,m=e}const x=p<0?""+(1+(1-g)*p):""+(1-(1-g)*p),S=`\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate?a?-v:v:0}deg)\n        scale(${x})\n      `;if(i.slideShadows){let e=d.querySelector(".swiper-slide-shadow");e||(e=ue("cards",d)),e&&(e.style.opacity=Math.min(Math.max((Math.abs(p)-.5)/.5,0),1))}d.style.zIndex=-Math.abs(Math.round(c))+e.length;ce(0,d).style.transform=S}},setTransition:e=>{const s=t.slides.map((e=>h(e)));s.forEach((t=>{t.style.transitionDuration=`${e}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach((t=>{t.style.transitionDuration=`${e}ms`}))})),pe({swiper:t,duration:e,transformElements:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return te.use(me),te}();
//# sourceMappingURL=swiper-bundle.min.js.map


//t assets/js/jquery.waypoints.min.js

!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return (typeof arguments[0] === "function")&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

//t assets/js/jquery.meanmenu.min.js
!function($){"use strict";$.fn.meanmenu=function(e){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=$.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,r=e.meanMenuClose,i=e.meanMenuCloseSize,s=e.meanMenuOpen,u=e.meanRevealPosition,m=e.meanRevealPositionDistance,l=e.meanRevealColour,o=e.meanScreenWidth,c=e.meanNavPush,v=".meanmenu-reveal",h=e.meanShowChildren,d=e.meanExpandableChildren,y=e.meanExpand,j=e.meanContract,Q=e.meanRemoveAttrs,f=e.onePage,g=e.meanDisplay,p=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var w="",x=function(){if("center"===u){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},A=!1,E=!1;"right"===u&&(w="right:"+m+";left:auto;"),"left"===u&&(w="left:"+m+";right:auto;"),x();var M="",P=function(){M.html(jQuery(M).is(".meanmenu-reveal.meanclose")?r:s)},W=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(n).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mean-remove")},b=function(){var e="background:"+l+";color:"+l+";"+w;if(o>=a){jQuery(p).addClass("mean-remove"),E=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(n).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(n).hide(),jQuery(".meanmenu-reveal").show(),jQuery(v).html(s),M=jQuery(v),jQuery(".mean-nav ul").hide(),h?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),M.removeClass("meanclose"),jQuery(M).on('click', function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),M.toggleClass("meanclose"),P(),jQuery(p).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(M).toggleClass("meanclose").html(s)})}else W()};C||jQuery(window).on('resize', function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,W(),o>=a?(b(),x()):W()}),jQuery(window).on('resize', function(){a=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=a?E===!1&&b():W()):(W(),o>=a&&(b(),x()))}),b()})}}(jQuery);

//t assets/js/jquery.nice-select.min.js

!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);

//t assets/js/wow.min.js
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});


//t assets/js/custom.js
(function ($) {
	"use strict";
	
	$('select').niceSelect();
	
	new WOW().init();
	
	$('.header__area-menubar-main-menu').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="flaticon-close"></i>'
	});
	
	$('.header__area-two-menubar-main-menu').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="flaticon-close"></i>'
	});
	
	var swiper = new Swiper(".banner-slider", {
  lazy: true,
  preloadImages: false,
  watchSlidesVisibility: true, // Enable this so only the visible slides images are loaded
		slidesPerView: 1,
		effect: 'fade',
		pagination: false,
    pagination: false,
  scrollbar: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

  var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 2,
      loop: true,
      speed: 1000,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
          el: ".dots",
          clickable: true,
      },
      breakpoints: {
          0: {
              slidesPerView: 1
          },
          768: {
              slidesPerView: 1
          },
          992: {
              slidesPerView: 2
          },
          1200: {
              slidesPerView: 2
          },
      }
  });

	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})
	
	$(window).on("load", function() {
  $(".theme-loader").fadeOut(500, function() {
    // This callback function is executed once the fadeOut completes.
    $(this).remove(); // Ensure the element is removed from the DOM to prevent any potential impact.
  });
});

	
	var swiper = new Swiper(".blog-details-slider", {
		slidesPerView: 2,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				spaceBetween: 20,
			},
			768: {
				spaceBetween: 30,
			},
		}
	});
	
	var swiper = new Swiper(".services-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		pagination: {
			el: ".services-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 4
			},
		}
	});
	
	var swiper = new Swiper(".blog-slider", {
		slidesPerView: 2,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		pagination: {
			el: ".blog-pagination",
			clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 2
			},
		}
	});
	
	var swiper = new Swiper(".testimonial__area-slider", {
		slidesPerView: 2,
		loop: true,
		speed: 1500,
		spaceBetween: 40,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				spaceBetween: 30,
				slidesPerView: 1
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 2
			},
		}
	});

	
	if ($('.team__details-right-item-skill-bar').length) {
		$('.team__details-right-item-skill-bar').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};

	$(".portfolio__area-item").on('mouseenter', function () {
		$(".portfolio__area-item").removeClass("portfolio__area-item-hover");
		$(this).addClass("portfolio__area-item-hover");
	});
	
	$(".faq__area-collapse-item-card-header").on('click', function () {
		if ($(this).next(".faq__area-collapse-item-card-header-content").hasClass("active")) {
			$(this).next(".faq__area-collapse-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("fas fa-minus").addClass("fas fa-plus")
		} else {
			$(".faq__area-collapse-item-card .faq__area-collapse-item-card-header-content").removeClass("active").slideUp()
			$(".faq__area-collapse-item-card .faq__area-collapse-item-card-header i").removeClass("fas fa-minus").addClass("fas fa-plus");
			$(this).next(".faq__area-collapse-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("fas fa-plus").addClass("fas fa-minus")
		}
	});
	
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-top').fadeIn(200);
		} else {
			$('.scroll-top').fadeOut(200);
		}
	});
	$('.scroll-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
})(jQuery);