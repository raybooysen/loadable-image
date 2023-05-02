/*! For license information please see 352.230e5bff.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[352],{"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./node_modules/@storybook/react/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/react/dist/chunk-JWY6Y6NU.mjs"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/react/dist/chunk-R4NKYYJA.mjs"),__webpack_require__("./node_modules/@storybook/global/dist/index.mjs")),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("@storybook/preview-api"),{window:globalWindow}=(__webpack_require__("@storybook/client-logger"),_storybook_global__WEBPACK_IMPORTED_MODULE_2__.global);globalWindow&&(globalWindow.STORYBOOK_ENV="react");var api=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.start)(_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.b,{render:_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s});api.forceReRender,api.clientApi.raw;_chunk_JWY6Y6NU_mjs__WEBPACK_IMPORTED_MODULE_0__.s},"./node_modules/loadable-image/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>u});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const observerMap=new Map,RootIds=new WeakMap;let unsupportedValue,rootId=0;function optionsToId(options){return Object.keys(options).sort().filter((key=>void 0!==options[key])).map((key=>`${key}_${"root"===key?function getRootId(root){return root?(RootIds.has(root)||(rootId+=1,RootIds.set(root,rootId.toString())),RootIds.get(root)):"0"}(options.root):options[key]}`)).toString()}function observe(element,callback,options={},fallbackInView=unsupportedValue){if(void 0===window.IntersectionObserver&&void 0!==fallbackInView){const bounds=element.getBoundingClientRect();return callback(fallbackInView,{isIntersecting:fallbackInView,target:element,intersectionRatio:"number"==typeof options.threshold?options.threshold:0,time:0,boundingClientRect:bounds,intersectionRect:bounds,rootBounds:bounds}),()=>{}}const{id,observer,elements}=function createObserver(options){let id=optionsToId(options),instance=observerMap.get(id);if(!instance){const elements=new Map;let thresholds;const observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{var _elements$get;const inView=entry.isIntersecting&&thresholds.some((threshold=>entry.intersectionRatio>=threshold));options.trackVisibility&&void 0===entry.isVisible&&(entry.isVisible=inView),null==(_elements$get=elements.get(entry.target))||_elements$get.forEach((callback=>{callback(inView,entry)}))}))}),options);thresholds=observer.thresholds||(Array.isArray(options.threshold)?options.threshold:[options.threshold||0]),instance={id,observer,elements},observerMap.set(id,instance)}return instance}(options);let callbacks=elements.get(element)||[];return elements.has(element)||elements.set(element,callbacks),callbacks.push(callback),observer.observe(element),function unobserve(){callbacks.splice(callbacks.indexOf(callback),1),0===callbacks.length&&(elements.delete(element),observer.unobserve(element)),0===elements.size&&(observer.disconnect(),observerMap.delete(id))}}const _excluded=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function isPlainChildren(props){return"function"!=typeof props.children}class InView extends react.Component{constructor(props){super(props),this.node=null,this._unobserveCb=null,this.handleNode=node=>{this.node&&(this.unobserve(),node||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=node||null,this.observeNode()},this.handleChange=(inView,entry)=>{inView&&this.props.triggerOnce&&this.unobserve(),isPlainChildren(this.props)||this.setState({inView,entry}),this.props.onChange&&this.props.onChange(inView,entry)},this.state={inView:!!props.initialInView,entry:void 0}}componentDidUpdate(prevProps){prevProps.rootMargin===this.props.rootMargin&&prevProps.root===this.props.root&&prevProps.threshold===this.props.threshold&&prevProps.skip===this.props.skip&&prevProps.trackVisibility===this.props.trackVisibility&&prevProps.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold,root,rootMargin,trackVisibility,delay,fallbackInView}=this.props;this._unobserveCb=observe(this.node,this.handleChange,{threshold,root,rootMargin,trackVisibility,delay},fallbackInView)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!isPlainChildren(this.props)){const{inView,entry}=this.state;return this.props.children({inView,entry,ref:this.handleNode})}const _this$props=this.props,{children,as}=_this$props,props=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_this$props,_excluded);return react.createElement(as||"div",_extends({ref:this.handleNode},props),children)}}var index_esm=__webpack_require__("./node_modules/transitions-kit/dist/index.esm.js");const l=(0,react.forwardRef)((({children:e,style:t},o)=>(0,jsx_runtime.jsx)("div",Object.assign({style:Object.assign({width:"100%",height:"100%",display:"flex",overflow:"hidden",backgroundRepeat:"no-repeat",boxSizing:"border-box",backgroundSize:"cover",position:"relative"},t),ref:o},{children:e})))),O={top:0,left:0,width:"100%",height:"100%",position:"absolute",boxSizing:"border-box"},d=(0,jsx_runtime.jsx)("div",{style:Object.assign(Object.assign({},O),{backgroundColor:"#eee"})});var g,r;(r=g||(g={}))[r.LOADING=0]="LOADING",r[r.LOADED=1]="LOADED",r[r.FAILED=2]="FAILED";const b=({src:o,alt:c,error:l,srcSet:d,onLoad:b,loader:u,onError:p,crossOrigin:f,referrerPolicy:y,objectFit:m="cover"})=>{const{status:j}=(({src:r,srcSet:e,crossOrigin:t,referrerPolicy:o,onLoad:s,onError:c})=>{const[a,l]=(0,react.useState)(g.LOADING);return(0,react.useEffect)((()=>{if(a===g.LOADING){const n=new Image;n.onload=r=>{l(g.LOADED),null==s||s(r)},n.onerror=r=>{l(g.FAILED),null==c||c(r)},n.src=r,e&&(n.srcset=e),t&&(n.crossOrigin=t),o&&(n.referrerPolicy=o)}}),[a,r,e]),{status:a}})({src:o,srcSet:d,crossOrigin:f,referrerPolicy:y,onLoad:b,onError:p});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_esm.pT,Object.assign({appear:!1,in:j===g.LOADING,timeout:1e3,unmountOnExit:!0},{children:(0,react.cloneElement)(u,{style:O})})),(0,jsx_runtime.jsx)(index_esm.pT,Object.assign({in:j===g.LOADED,timeout:1e3},{children:(0,jsx_runtime.jsx)("img",{src:o,srcSet:d,"data-testid":"loaded-image",style:Object.assign({objectFit:m},O),alt:c})})),(0,jsx_runtime.jsx)(index_esm.pT,Object.assign({in:j===g.FAILED,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},{children:(0,react.cloneElement)(l,{style:O})}))]})},u=e=>{var{style:t={},loader:o=d,error:n=d,rootMargin:i="600px 0px"}=e,a=function(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(r);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]])}return t}(e,["style","loader","error","rootMargin"]);return(0,jsx_runtime.jsx)(InView,Object.assign({rootMargin:i,triggerOnce:!0},{children:({ref:e,inView:i})=>(0,jsx_runtime.jsx)(l,Object.assign({ref:e,style:t},{children:i?(0,jsx_runtime.jsx)(b,Object.assign({},a,{error:n,loader:o})):(0,react.cloneElement)(o,{style:O})}))}))}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/transitions-kit/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pT:()=>h});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");var inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js");const config_disabled=!1,TransitionGroupContext=react.createContext(null);var Transition=function(_React$Component){function Transition(props,context){var _this;_this=_React$Component.call(this,props,context)||this;var initialStatus,appear=context&&!context.isMounting?props.enter:props.appear;return _this.appearStatus=null,props.in?appear?(initialStatus="exited",_this.appearStatus="entering"):initialStatus="entered":initialStatus=props.unmountOnExit||props.mountOnEnter?"unmounted":"exited",_this.state={status:initialStatus},_this.nextCallback=null,_this}(0,inheritsLoose.Z)(Transition,_React$Component),Transition.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){return _ref.in&&"unmounted"===prevState.status?{status:"exited"}:null};var _proto=Transition.prototype;return _proto.componentDidMount=function componentDidMount(){this.updateStatus(!0,this.appearStatus)},_proto.componentDidUpdate=function componentDidUpdate(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;this.props.in?"entering"!==status&&"entered"!==status&&(nextStatus="entering"):"entering"!==status&&"entered"!==status||(nextStatus="exiting")}this.updateStatus(!1,nextStatus)},_proto.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback()},_proto.getTimeouts=function getTimeouts(){var exit,enter,appear,timeout=this.props.timeout;return exit=enter=appear=timeout,null!=timeout&&"number"!=typeof timeout&&(exit=timeout.exit,enter=timeout.enter,appear=void 0!==timeout.appear?timeout.appear:enter),{exit,enter,appear}},_proto.updateStatus=function updateStatus(mounting,nextStatus){if(void 0===mounting&&(mounting=!1),null!==nextStatus)if(this.cancelNextCallback(),"entering"===nextStatus){if(this.props.unmountOnExit||this.props.mountOnEnter){var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this);node&&function forceReflow(node){node.scrollTop}(node)}this.performEnter(mounting)}else this.performExit();else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},_proto.performEnter=function performEnter(mounting){var _this2=this,enter=this.props.enter,appearing=this.context?this.context.isMounting:mounting,_ref2=this.props.nodeRef?[appearing]:[react_dom.findDOMNode(this),appearing],maybeNode=_ref2[0],maybeAppearing=_ref2[1],timeouts=this.getTimeouts(),enterTimeout=appearing?timeouts.appear:timeouts.enter;!mounting&&!enter||config_disabled?this.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode)})):(this.props.onEnter(maybeNode,maybeAppearing),this.safeSetState({status:"entering"},(function(){_this2.props.onEntering(maybeNode,maybeAppearing),_this2.onTransitionEnd(enterTimeout,(function(){_this2.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode,maybeAppearing)}))}))})))},_proto.performExit=function performExit(){var _this3=this,exit=this.props.exit,timeouts=this.getTimeouts(),maybeNode=this.props.nodeRef?void 0:react_dom.findDOMNode(this);exit&&!config_disabled?(this.props.onExit(maybeNode),this.safeSetState({status:"exiting"},(function(){_this3.props.onExiting(maybeNode),_this3.onTransitionEnd(timeouts.exit,(function(){_this3.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))}))}))):this.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))},_proto.cancelNextCallback=function cancelNextCallback(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},_proto.safeSetState=function safeSetState(nextState,callback){callback=this.setNextCallback(callback),this.setState(nextState,callback)},_proto.setNextCallback=function setNextCallback(callback){var _this4=this,active=!0;return this.nextCallback=function(event){active&&(active=!1,_this4.nextCallback=null,callback(event))},this.nextCallback.cancel=function(){active=!1},this.nextCallback},_proto.onTransitionEnd=function onTransitionEnd(timeout,handler){this.setNextCallback(handler);var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this),doesNotHaveTimeoutOrListener=null==timeout&&!this.props.addEndListener;if(node&&!doesNotHaveTimeoutOrListener){if(this.props.addEndListener){var _ref3=this.props.nodeRef?[this.nextCallback]:[node,this.nextCallback],maybeNode=_ref3[0],maybeNextCallback=_ref3[1];this.props.addEndListener(maybeNode,maybeNextCallback)}null!=timeout&&setTimeout(this.nextCallback,timeout)}else setTimeout(this.nextCallback,0)},_proto.render=function render(){var status=this.state.status;if("unmounted"===status)return null;var _this$props=this.props,children=_this$props.children,childProps=(_this$props.in,_this$props.mountOnEnter,_this$props.unmountOnExit,_this$props.appear,_this$props.enter,_this$props.exit,_this$props.timeout,_this$props.addEndListener,_this$props.onEnter,_this$props.onEntering,_this$props.onEntered,_this$props.onExit,_this$props.onExiting,_this$props.onExited,_this$props.nodeRef,function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_this$props,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return react.createElement(TransitionGroupContext.Provider,{value:null},"function"==typeof children?children(status,childProps):react.cloneElement(react.Children.only(children),childProps))},Transition}(react.Component);function noop(){}Transition.contextType=TransitionGroupContext,Transition.propTypes={},Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},Transition.UNMOUNTED="unmounted",Transition.EXITED="exited",Transition.ENTERING="entering",Transition.ENTERED="entered",Transition.EXITING="exiting";const esm_Transition=Transition;function l(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}const d={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},c={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function u(t,e){var n,i;const{timeout:r,easing:o,style:s={}}=t;return{duration:null!==(n=s.transitionDuration)&&void 0!==n?n:"number"==typeof r||"string"==typeof r?r:r[e.mode]||0,easing:null!==(i=s.transitionTimingFunction)&&void 0!==i?i:"object"==typeof o?o[e.mode]:o,delay:s.transitionDelay}}const g=(t=["all"],e={})=>{const{duration:n=c.standard,easing:i=d.easeInOut,delay:r=0}=e,o=t=>`${Math.round(t)}ms`;return(Array.isArray(t)?t:[t]).map((t=>`${t} ${"string"==typeof n?n:o(n)} ${i} ${"string"==typeof r?r:o(r)}`)).join(",")},y=t=>{if(!t)return 0;const e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))},p=(...t)=>(0,react.useMemo)((()=>t.every((t=>null==t))?null:e=>{t.forEach((t=>{((t,e)=>{"function"==typeof t?t(e):t&&(t.current=e)})(t,e)}))}),t),E=(t,e=166)=>{let n;function i(...i){clearTimeout(n),n=setTimeout((()=>{t.apply(this,i)}),e)}return i.clear=()=>{clearTimeout(n)},i};function m(t){const e=function(t){return t&&t.ownerDocument||document}(t);return e.defaultView||window}const f=t=>t.scrollTop,x={entering:{opacity:1},entered:{opacity:1}},h=(0,react.forwardRef)(((e,n)=>{const o={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:s,appear:d=!0,children:y,easing:E,in:m,onEnter:h,onEntered:b,onEntering:O,onExit:j,onExited:v,onExiting:w,style:$,timeout:S=o}=e,T=l(e,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),L=(0,react.useRef)(null),z=p(y.ref,n),k=p(L,z),R=t=>e=>{const n=L.current;t&&n&&(void 0===e?t(n):t(n,e))},D=R(O),I=R(b),H=R(w),P=R(v),A=R(((t,e)=>{f(t);const n=u({style:$,timeout:S,easing:E},{mode:"enter"});t.style.webkitTransition=g("opacity",n),t.style.transition=g("opacity",n),null==h||h(t,e)})),M=R((t=>{const e=u({style:$,timeout:S,easing:E},{mode:"exit"});t.style.webkitTransition=g("opacity",e),t.style.transition=g("opacity",e),null==j||j(t)}));return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:L,onExit:M,onEnter:A,addEndListener:t=>{L.current&&(null==s||s(L.current,t))},onEntering:D,onEntered:I,onExiting:H,onExited:P,timeout:S},T,{children:t=>(0,react.cloneElement)(y,{ref:k,style:Object.assign(Object.assign(Object.assign({opacity:0,visibility:"exited"!==t||m?void 0:"hidden"},x[t]),$),y.props.style)})}))})),b=t=>({entering:{opacity:1,filter:"blur(0)"},entered:{opacity:1,filter:"blur(0)"},exiting:{opacity:0,filter:`blur(${t}px)`},exited:{opacity:0,filter:`blur(${t}px)`}}),j=((0,react.forwardRef)(((e,n)=>{const o={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:s,appear:d=!0,children:y,easing:E,in:m,radius:x=25,onEnter:h,onEntered:O,onEntering:j,onExit:v,onExited:w,onExiting:$,style:S,timeout:T=o}=e,L=l(e,["addEndListener","appear","children","easing","in","radius","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),z=(0,react.useRef)(null),k=p(y.ref,n),R=p(z,k),D=t=>e=>{const n=z.current;t&&n&&(void 0===e?t(n):t(n,e))},I=D(j),H=D(O),P=D($),A=D(w),M=D(((t,e)=>{f(t);const n=u({style:S,timeout:T,easing:E},{mode:"enter"});t.style.webkitTransition=g(["opacity","filter"],n),t.style.transition=g(["opacity","filter"],n),null==h||h(t,e)})),X=D((t=>{const e=u({style:S,timeout:T,easing:E},{mode:"exit"});t.style.webkitTransition=g(["opacity","filter"],e),t.style.transition=g(["opacity","filter"],e),null==v||v(t)}));return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:z,onExit:X,onEnter:M,addEndListener:t=>{z.current&&(null==s||s(z.current,t))},onEntering:I,onEntered:H,onExiting:P,onExited:A,timeout:T},L,{children:t=>(0,react.cloneElement)(y,{ref:R,style:Object.assign(Object.assign(Object.assign({opacity:0,visibility:"exited"!==t||m?void 0:"hidden"},b(x)[t]),S),y.props.style)})}))})),(0,react.forwardRef)((({children:e,ownerState:n,style:i={}},r)=>(0,jsx_runtime.jsx)("div",Object.assign({ref:r,style:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},i),{height:0,overflow:"hidden",transition:g("height")}),"horizontal"===n.orientation&&{height:"auto",width:0,transition:g("width")}),"entered"===n.state&&Object.assign({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"})),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})},{children:e}))))),v=(0,react.forwardRef)((({children:e,ownerState:n,style:i},r)=>(0,jsx_runtime.jsx)("div",Object.assign({ref:r,style:Object.assign({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})},{children:e})))),w=({children:e,ownerState:n})=>(0,jsx_runtime.jsx)("div",Object.assign({style:Object.assign({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})},{children:e}));(0,react.forwardRef)(((e,n)=>{const{addEndListener:r,children:s,className:d,collapsedSize:g="0px",easing:E,in:m,onEnter:x,onEntered:h,onEntering:b,onExit:O,onExited:$,onExiting:S,orientation:T="vertical",style:L,timeout:z=c.standard}=e,k=l(e,["addEndListener","children","className","collapsedSize","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout"]),R=Object.assign(Object.assign({},e),{orientation:T,collapsedSize:g}),D=(0,react.useRef)(),I=(0,react.useRef)(null),H=p(I,n),P=(0,react.useRef)(null),A=(0,react.useRef)(),M="number"==typeof g?`${g}px`:g,X="horizontal"===T,Y=X?"width":"height";(0,react.useEffect)((()=>()=>{clearTimeout(D.current)}),[]);const C=t=>e=>{const n=I.current;t&&n&&(void 0===e?t(n):t(n,e))},F=()=>P.current?P.current[X?"scrollWidth":"scrollHeight"]:0,N=C(((t,e)=>{t.style[Y]=M,null==x||x(t,e)})),V=C(((t,e)=>{const n=F(),{duration:i,easing:r}=u({style:L,timeout:z,easing:E},{mode:"enter"});if("auto"===z){const e=y(n);t.style.transitionDuration=`${e}ms`,A.current=e}else t.style.transitionDuration="string"==typeof i?i:`${i}ms`;t.style[Y]=`${n}px`,t.style.transitionTimingFunction=`${r}`,null==b||b(t,e)})),W=C(((t,e)=>{t.style[Y]="auto",null==h||h(t,e)})),B=C((t=>{t.style[Y]=`${F()}px`,P.current&&f(P.current),null==O||O(t)})),_=C((t=>{const e=F(),{duration:n,easing:i}=u({style:L,timeout:z,easing:E},{mode:"exit"});if("auto"===z){const n=y(e);t.style.transitionDuration=`${n}ms`,A.current=n}else t.style.transitionDuration="string"==typeof n?n:`${n}ms`;t.style[Y]=M,t.style.transitionTimingFunction=null!=i?i:"",null==S||S(t)})),q=C($);return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,nodeRef:I,onEnter:N,onEntered:W,onEntering:V,onExit:B,onExited:q,onExiting:_,addEndListener:t=>{"auto"===z&&(D.current=setTimeout(t,Number(A.current)||0)),I.current&&(null==r||r(I.current,t))},timeout:"auto"===z?void 0:z},k,{children:e=>(0,jsx_runtime.jsx)(j,Object.assign({ref:H,ownerState:Object.assign(Object.assign({},R),{state:e}),style:Object.assign({[X?"minWidth":"minHeight"]:M},L)},{children:(0,jsx_runtime.jsx)(v,Object.assign({ownerState:Object.assign(Object.assign({},R),{state:e}),ref:P},{children:(0,jsx_runtime.jsx)(w,Object.assign({ownerState:Object.assign(Object.assign({},R),{state:e})},{children:s}))}))}))}))}));function S(t,e,n){var i;const r=function(t,e,n){const i=e.getBoundingClientRect(),r=null==n?void 0:n.getBoundingClientRect(),o=m(e),s=o.getComputedStyle(e),a=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform");let l=0,d=0;if(a&&"none"!==a&&"string"==typeof a){const t=a.split("(")[1].split(")")[0].split(",");l=parseInt(t[4],10),d=parseInt(t[5],10)}return"left"===t?r?`translateX(${r.right+l-i.left}px)`:`translateX(${o.innerWidth+l-i.left}px)`:"right"===t?r?`translateX(-${i.right-r.left-l}px)`:`translateX(-${i.left+i.width-l}px)`:"up"===t?r?`translateY(${r.bottom+d-i.top}px)`:`translateY(${o.innerHeight+d-i.top}px)`:r?`translateY(-${i.top-r.top+i.height-d}px)`:`translateY(-${i.top+i.height-d}px)`}(t,e,"function"==typeof(i=n)?i():i);r&&(e.style.webkitTransform=r,e.style.transform=r)}(0,react.forwardRef)(((e,n)=>{const y={enter:d.easeOut,exit:d.sharp},x={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:h,appear:b=!0,children:O,container:j,direction:v="down",easing:w=y,in:$,onEnter:T,onEntered:L,onEntering:z,onExit:k,onExited:R,onExiting:D,style:I,timeout:H=x}=e,P=l(e,["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),A=(0,react.useRef)(void 0),M=p(O.ref,A),X=p(M,n),Y=t=>e=>{const n=A.current;t&&n&&(void 0===e?t(n):t(n,e))},C=Y(((t,e)=>{S(v,t,j),f(t),null==T||T(t,e)})),F=Y(((t,e)=>{const n=u({timeout:H,style:I,easing:w},{mode:"enter"});t.style.webkitTransition=g("-webkit-transform",n),t.style.transition=g("transform",n),t.style.webkitTransform="none",t.style.transform="none",null==z||z(t,e)})),N=Y((t=>{const e=u({timeout:H,style:I,easing:w},{mode:"exit"});t.style.webkitTransition=g("-webkit-transform",e),t.style.transition=g("transform",e),S(v,t,j),null==k||k(t)})),V=Y((t=>{t.style.webkitTransition="",t.style.transition="",null==R||R(t)})),W=(0,react.useCallback)((()=>{A.current&&S(v,A.current,j)}),[v,j]);return(0,react.useEffect)((()=>{if($||"down"===v||"right"===v)return;const t=E((()=>{A.current&&S(v,A.current,j)})),e=m(A.current);return e.addEventListener("resize",t),()=>{t.clear(),e.removeEventListener("resize",t)}}),[v,$,j]),(0,react.useEffect)((()=>{$||W()}),[$,W]),(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:$,appear:b,nodeRef:A,timeout:H,onEnter:C,onEntered:L,onEntering:F,onExit:N,onExited:V,onExiting:D,addEndListener:t=>{A.current&&(null==h||h(A.current,t))}},P,{children:t=>(0,react.cloneElement)(O,{ref:X,style:Object.assign(Object.assign({visibility:"exited"!==t||$?void 0:"hidden"},I),O.props.style)})}))}));const L={entering:{transform:"none"},entered:{transform:"none"}},k=((0,react.forwardRef)(((e,n)=>{const o={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:s,appear:d=!0,children:y,easing:E,in:m,onEnter:x,onEntered:h,onEntering:b,onExit:O,onExited:j,onExiting:v,style:w,timeout:$=o}=e,S=l(e,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),T=(0,react.useRef)(null),z=p(y.ref,n),k=p(T,z),R=t=>e=>{const n=T.current;t&&n&&(void 0===e?t(n):t(n,e))},D=R(h),I=R(b),H=R(j),P=R(v),A=R(((t,e)=>{f(t);const n=u({style:w,timeout:$,easing:E},{mode:"enter"});t.style.webkitTransition=g("transform",n),t.style.transition=g("transform",n),null==x||x(t,e)})),M=R((t=>{const e=u({style:w,timeout:$,easing:E},{mode:"exit"});t.style.webkitTransition=g("transform",e),t.style.transition=g("transform",e),null==O||O(t)}));return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:T,onEnter:A,onEntered:D,onEntering:I,onExit:M,onExited:H,onExiting:P,addEndListener:t=>{T.current&&(null==s||s(T.current,t))},timeout:$},S,{children:t=>(0,react.cloneElement)(y,{ref:k,style:Object.assign(Object.assign(Object.assign({transform:"scale(0)",visibility:"exited"!==t||m?void 0:"hidden"},L[t]),w),y.props.style)})}))})),t=>`scale(${t}, ${Math.pow(t,2)})`),R={entering:{opacity:1,transform:k(1)},entered:{opacity:1,transform:"none"}},D="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent);(0,react.forwardRef)(((e,n)=>{const{addEndListener:s,appear:d=!0,children:c,easing:E,in:m,onEnter:x,onEntered:h,onEntering:b,onExit:O,onExited:j,onExiting:v,style:w,timeout:$="auto"}=e,S=l(e,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),T=(0,react.useRef)(),L=(0,react.useRef)(),z=(0,react.useRef)(null),I=p(c.ref,n),H=p(z,I),P=t=>e=>{const n=z.current;t&&n&&(void 0===e?t(n):t(n,e))},A=P(h),M=P(b),X=P(j),Y=P(v),C=P(((t,e)=>{f(t);const{duration:n,delay:i,easing:r}=u({style:w,timeout:$,easing:E},{mode:"enter"});let o;"auto"===$?(o=y(t.clientHeight),L.current=o):o=n,t.style.transition=[g("opacity",{duration:o,delay:i}),g("transform",{duration:D||"string"==typeof o?o:.666*o,delay:i,easing:r})].join(","),null==x||x(t,e)})),F=P((t=>{const{duration:e,delay:n,easing:i}=u({style:w,timeout:$,easing:E},{mode:"exit"});let r;"auto"===$?(r=y(t.clientHeight),L.current=r):r=e,t.style.transition=[g("opacity",{duration:r,delay:n}),g("transform",{duration:D||"string"==typeof r?r:.666*r,delay:D||"string"==typeof r?n:n||.333*r,easing:i})].join(","),t.style.opacity="0",t.style.transform=k(.75),null==O||O(t)}));return(0,react.useEffect)((()=>()=>{clearTimeout(T.current)}),[]),(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:z,onEnter:C,onEntered:A,onEntering:M,onExit:F,onExited:X,onExiting:Y,addEndListener:t=>{"auto"===$&&(T.current=setTimeout(t,L.current||0)),z.current&&(null==s||s(z.current,t))},timeout:"auto"===$?void 0:$},S,{children:t=>(0,react.cloneElement)(c,{ref:H,style:Object.assign(Object.assign(Object.assign({opacity:0,transform:k(.75),visibility:"exited"!==t||m?void 0:"hidden"},R[t]),w),c.props.style)})}))}))}}]);