const ve=function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(i){if(i.ep)return;i.ep=!0;const t=n(i);fetch(i.href,t)}};ve();var U,s,te,C,z,D={},oe=[],ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function w(e,_){for(var n in _)e[n]=_[n];return e}function re(e){var _=e.parentNode;_&&_.removeChild(e)}function ge(e,_,n){var r,i,t,c={};for(t in _)t=="key"?r=_[t]:t=="ref"?i=_[t]:c[t]=_[t];if(arguments.length>2&&(c.children=arguments.length>3?U.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(t in e.defaultProps)c[t]===void 0&&(c[t]=e.defaultProps[t]);return P(e,c,r,i,null)}function P(e,_,n,r,i){var t={type:e,props:_,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++te:i};return i==null&&s.vnode!=null&&s.vnode(t),t}function x(e){return e.children}function N(e,_){this.props=e,this.context=_}function E(e,_){if(_==null)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var n;_<e.__k.length;_++)if((n=e.__k[_])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?E(e):null}function ie(e){var _,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((n=e.__k[_])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ie(e)}}function B(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!F.__r++||z!==s.debounceRendering)&&((z=s.debounceRendering)||setTimeout)(F)}function F(){for(var e;F.__r=C.length;)e=C.sort(function(_,n){return _.__v.__b-n.__v.__b}),C=[],e.some(function(_){var n,r,i,t,c,u;_.__d&&(c=(t=(n=_).__v).__e,(u=n.__P)&&(r=[],(i=w({},t)).__v=t.__v+1,R(u,t,i,n.__n,u.ownerSVGElement!==void 0,t.__h!=null?[c]:null,r,c==null?E(t):c,t.__h),de(r,t),t.__e!=c&&ie(t)))})}function le(e,_,n,r,i,t,c,u,p,h){var o,v,a,l,f,$,y,g=r&&r.__k||oe,k=g.length;for(n.__k=[],o=0;o<_.length;o++)if((l=n.__k[o]=(l=_[o])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?P(null,l,null,null,l):Array.isArray(l)?P(x,{children:l},null,null,null):l.__b>0?P(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(a=g[o])===null||a&&l.key==a.key&&l.type===a.type)g[o]=void 0;else for(v=0;v<k;v++){if((a=g[v])&&l.key==a.key&&l.type===a.type){g[v]=void 0;break}a=null}R(e,l,a=a||D,i,t,c,u,p,h),f=l.__e,(v=l.ref)&&a.ref!=v&&(y||(y=[]),a.ref&&y.push(a.ref,null,l),y.push(v,l.__c||f,l)),f!=null?($==null&&($=f),typeof l.type=="function"&&l.__k===a.__k?l.__d=p=ce(l,p,e):p=se(e,l,a,g,f,p),typeof n.type=="function"&&(n.__d=p)):p&&a.__e==p&&p.parentNode!=e&&(p=E(a))}for(n.__e=$,o=k;o--;)g[o]!=null&&(typeof n.type=="function"&&g[o].__e!=null&&g[o].__e==n.__d&&(n.__d=E(r,o+1)),fe(g[o],g[o]));if(y)for(o=0;o<y.length;o++)ae(y[o],y[++o],y[++o])}function ce(e,_,n){for(var r,i=e.__k,t=0;i&&t<i.length;t++)(r=i[t])&&(r.__=e,_=typeof r.type=="function"?ce(r,_,n):se(n,r,r,i,r.__e,_));return _}function se(e,_,n,r,i,t){var c,u,p;if(_.__d!==void 0)c=_.__d,_.__d=void 0;else if(n==null||i!=t||i.parentNode==null)e:if(t==null||t.parentNode!==e)e.appendChild(i),c=null;else{for(u=t,p=0;(u=u.nextSibling)&&p<r.length;p+=2)if(u==i)break e;e.insertBefore(i,t),c=t}return c!==void 0?c:i.nextSibling}function me(e,_,n,r,i){var t;for(t in n)t==="children"||t==="key"||t in _||M(e,t,null,n[t],r);for(t in _)i&&typeof _[t]!="function"||t==="children"||t==="key"||t==="value"||t==="checked"||n[t]===_[t]||M(e,t,_[t],n[t],r)}function G(e,_,n){_[0]==="-"?e.setProperty(_,n):e[_]=n==null?"":typeof n!="number"||ye.test(_)?n:n+"px"}function M(e,_,n,r,i){var t;e:if(_==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)n&&_ in n||G(e.style,_,"");if(n)for(_ in n)r&&n[_]===r[_]||G(e.style,_,n[_])}else if(_[0]==="o"&&_[1]==="n")t=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+t]=n,n?r||e.addEventListener(_,t?J:K,t):e.removeEventListener(_,t?J:K,t);else if(_!=="dangerouslySetInnerHTML"){if(i)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,n):e.removeAttribute(_))}}function K(e){this.l[e.type+!1](s.event?s.event(e):e)}function J(e){this.l[e.type+!0](s.event?s.event(e):e)}function R(e,_,n,r,i,t,c,u,p){var h,o,v,a,l,f,$,y,g,k,H,j,S,b=_.type;if(_.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=_.__e=n.__e,_.__h=null,t=[u]),(h=s.__b)&&h(_);try{e:if(typeof b=="function"){if(y=_.props,g=(h=b.contextType)&&r[h.__c],k=h?g?g.props.value:h.__:r,n.__c?$=(o=_.__c=n.__c).__=o.__E:("prototype"in b&&b.prototype.render?_.__c=o=new b(y,k):(_.__c=o=new N(y,k),o.constructor=b,o.render=ke),g&&g.sub(o),o.props=y,o.state||(o.state={}),o.context=k,o.__n=r,v=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=w({},o.__s)),w(o.__s,b.getDerivedStateFromProps(y,o.__s))),a=o.props,l=o.state,v)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&y!==a&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(y,k),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(y,o.__s,k)===!1||_.__v===n.__v){o.props=y,o.state=o.__s,_.__v!==n.__v&&(o.__d=!1),o.__v=_,_.__e=n.__e,_.__k=n.__k,_.__k.forEach(function(A){A&&(A.__=_)}),o.__h.length&&c.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(y,o.__s,k),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(a,l,f)})}if(o.context=k,o.props=y,o.__v=_,o.__P=e,H=s.__r,j=0,"prototype"in b&&b.prototype.render)o.state=o.__s,o.__d=!1,H&&H(_),h=o.render(o.props,o.state,o.context);else do o.__d=!1,H&&H(_),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++j<25);o.state=o.__s,o.getChildContext!=null&&(r=w(w({},r),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(f=o.getSnapshotBeforeUpdate(a,l)),S=h!=null&&h.type===x&&h.key==null?h.props.children:h,le(e,Array.isArray(S)?S:[S],_,n,r,i,t,c,u,p),o.base=_.__e,_.__h=null,o.__h.length&&c.push(o),$&&(o.__E=o.__=null),o.__e=!1}else t==null&&_.__v===n.__v?(_.__k=n.__k,_.__e=n.__e):_.__e=be(n.__e,_,n,r,i,t,c,p);(h=s.diffed)&&h(_)}catch(A){_.__v=null,(p||t!=null)&&(_.__e=u,_.__h=!!p,t[t.indexOf(u)]=null),s.__e(A,_,n)}}function de(e,_){s.__c&&s.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){s.__e(r,n.__v)}})}function be(e,_,n,r,i,t,c,u){var p,h,o,v=n.props,a=_.props,l=_.type,f=0;if(l==="svg"&&(i=!0),t!=null){for(;f<t.length;f++)if((p=t[f])&&"setAttribute"in p==!!l&&(l?p.localName===l:p.nodeType===3)){e=p,t[f]=null;break}}if(e==null){if(l===null)return document.createTextNode(a);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,a.is&&a),t=null,u=!1}if(l===null)v===a||u&&e.data===a||(e.data=a);else{if(t=t&&U.call(e.childNodes),h=(v=n.props||D).dangerouslySetInnerHTML,o=a.dangerouslySetInnerHTML,!u){if(t!=null)for(v={},f=0;f<e.attributes.length;f++)v[e.attributes[f].name]=e.attributes[f].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(me(e,a,v,i,u),o)_.__k=[];else if(f=_.props.children,le(e,Array.isArray(f)?f:[f],_,n,r,i&&l!=="foreignObject",t,c,t?t[0]:n.__k&&E(n,0),u),t!=null)for(f=t.length;f--;)t[f]!=null&&re(t[f]);u||("value"in a&&(f=a.value)!==void 0&&(f!==e.value||l==="progress"&&!f||l==="option"&&f!==v.value)&&M(e,"value",f,v.value,!1),"checked"in a&&(f=a.checked)!==void 0&&f!==e.checked&&M(e,"checked",f,v.checked,!1))}return e}function ae(e,_,n){try{typeof e=="function"?e(_):e.current=_}catch(r){s.__e(r,n)}}function fe(e,_,n){var r,i;if(s.unmount&&s.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ae(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){s.__e(t,_)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&fe(r[i],_,typeof e.type!="function");n||e.__e==null||re(e.__e),e.__e=e.__d=void 0}function ke(e,_,n){return this.constructor(e,n)}function we(e,_,n){var r,i,t;s.__&&s.__(e,_),i=(r=typeof n=="function")?null:n&&n.__k||_.__k,t=[],R(_,e=(!r&&n||_).__k=ge(x,null,[e]),i||D,D,_.ownerSVGElement!==void 0,!r&&n?[n]:i?null:_.firstChild?U.call(_.childNodes):null,t,!r&&n?n:i?i.__e:_.firstChild,r),de(t,e)}U=oe.slice,s={__e:function(e,_,n,r){for(var i,t,c;_=_.__;)if((i=_.__c)&&!i.__)try{if((t=i.constructor)&&t.getDerivedStateFromError!=null&&(i.setState(t.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),c=i.__d),c)return i.__E=i}catch(u){e=u}throw e}},te=0,N.prototype.setState=function(e,_){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},n),this.props)),e&&w(n,e),e!=null&&this.__v&&(_&&this.__h.push(_),B(this))},N.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),B(this))},N.prototype.render=x,C=[],F.__r=0;var V,m,q,Q,O=0,ue=[],L=[],X=s.__b,Y=s.__r,Z=s.diffed,ee=s.__c,_e=s.unmount;function pe(e,_){s.__h&&s.__h(m,e,O||_),O=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:L}),n.__[e]}function I(e){return O=1,xe(he,e)}function xe(e,_,n){var r=pe(V++,2);return r.t=e,r.__c||(r.__=[n?n(_):he(void 0,_),function(i){var t=r.t(r.__[0],i);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=m),r.__}function $e(e,_){var n=pe(V++,3);!s.__s&&He(n.__H,_)&&(n.__=e,n.u=_,m.__H.__h.push(n))}function Ee(){for(var e;e=ue.shift();)if(e.__P)try{e.__H.__h.forEach(T),e.__H.__h.forEach(W),e.__H.__h=[]}catch(_){e.__H.__h=[],s.__e(_,e.__v)}}s.__b=function(e){m=null,X&&X(e)},s.__r=function(e){Y&&Y(e),V=0;var _=(m=e.__c).__H;_&&(q===m?(_.__h=[],m.__h=[],_.__.forEach(function(n){n.__V=L,n.u=void 0})):(_.__h.forEach(T),_.__h.forEach(W),_.__h=[])),q=m},s.diffed=function(e){Z&&Z(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(ue.push(_)!==1&&Q===s.requestAnimationFrame||((Q=s.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(t),ne&&cancelAnimationFrame(r),setTimeout(n)},t=setTimeout(i,100);ne&&(r=requestAnimationFrame(i))})(Ee)),_.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.__V!==L&&(n.__=n.__V),n.u=void 0,n.__V=L})),q=m=null},s.__c=function(e,_){_.some(function(n){try{n.__h.forEach(T),n.__h=n.__h.filter(function(r){return!r.__||W(r)})}catch(r){_.some(function(i){i.__h&&(i.__h=[])}),_=[],s.__e(r,n.__v)}}),ee&&ee(e,_)},s.unmount=function(e){_e&&_e(e);var _,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{T(r)}catch(i){_=i}}),_&&s.__e(_,n.__v))};var ne=typeof requestAnimationFrame=="function";function T(e){var _=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=_}function W(e){var _=m;e.__c=e.__(),m=_}function He(e,_){return!e||e.length!==_.length||_.some(function(n,r){return n!==e[r]})}function he(e,_){return typeof _=="function"?_(e):_}const Ce=e=>{const[_,n]=I(!1),[r,i]=I(),[t,c]=I();return $e(()=>{n(!0),fetch(e).then(async u=>i(await u.json())).catch(c).finally(()=>n(!1))},[]),{requesting:_,result:r,error:t}};var Se=0;function d(e,_,n,r,i){var t,c,u={};for(c in _)c=="ref"?t=_[c]:u[c]=_[c];var p={type:e,props:u,key:n,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Se,__source:i,__self:r};if(typeof e=="function"&&(t=e.defaultProps))for(c in t)u[c]===void 0&&(u[c]=t[c]);return s.vnode&&s.vnode(p),p}const Ae=({result:e})=>d(x,{children:[d("div",{class:"flex-1 font-bold ",children:[d("div",{children:"Ciudad"}),d("div",{children:"Codigo postal"}),d("div",{children:"Compa\xF1ia internet"}),d("div",{children:"Moneda"})]}),d("div",{class:"flex-none",children:[d("div",{children:[e==null?void 0:e.city," (",e==null?void 0:e.region,"/",e==null?void 0:e.country_name,")"]}),d("div",{children:e==null?void 0:e.postal}),d("div",{children:e==null?void 0:e.org}),d("div",{children:e==null?void 0:e.currency})]}),d("iframe",{class:"w-full mt-3 rounded-md",height:"200px",scrolling:"no",src:`https://maps.google.com/maps?q=${e==null?void 0:e.latitude},${e==null?void 0:e.longitude}&hl=es&z=14&output=embed`})]}),Pe=()=>d("div",{class:"flex-1 space-y-6 py-1 animate-pulse",children:[d("div",{class:"space-y-2",children:[d("div",{class:"grid grid-cols-3 gap-4",children:[d("div",{class:"h-2 bg-white rounded col-span-2"}),d("div",{class:"h-2 bg-white rounded col-span-1"})]}),d("div",{class:"grid grid-cols-3 gap-4",children:[d("div",{class:"h-2 bg-white rounded col-span-2"}),d("div",{class:"h-2 bg-white rounded col-span-1"})]}),d("div",{class:"grid grid-cols-3 gap-4",children:[d("div",{class:"h-2 bg-white rounded col-span-2"}),d("div",{class:"h-2 bg-white rounded col-span-1"})]}),d("div",{class:"grid grid-cols-3 gap-4",children:[d("div",{class:"h-2 bg-white rounded col-span-2"}),d("div",{class:"h-2 bg-white rounded col-span-1"})]}),d("div",{class:"grid grid-cols-3 gap-4",children:[d("div",{class:"h-2 bg-white rounded col-span-2"}),d("div",{class:"h-2 bg-white rounded col-span-1"})]})]}),d("div",{style:{height:"200px"},class:"w-full animate-pulse block h-200  mt-3 rounded-md bg-white"})]}),Ne=()=>{const{requesting:e,result:_}=Ce("https://ipapi.co/json/");return d(x,{children:[d("div",{class:"flex flex-wrap border text-white border-blue-300 shadow rounded-md p-4 bg-gradient-to-r from-cyan-500 to-blue-500",children:e?Pe:d(Ae,{result:_})}),d("div",{})]})},Le=()=>d(x,{children:d(Ne,{})});we(d(Le,{}),document.getElementById("app"));
