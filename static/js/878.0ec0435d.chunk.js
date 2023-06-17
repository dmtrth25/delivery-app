"use strict";(self.webpackChunkshops_app=self.webpackChunkshops_app||[]).push([[878],{929:function(e,r,t){t.r(r),t.d(r,{default:function(){return Pe}});var n=t(439),a=t(791),i=t(537),u=t(820),s=t(184),o=function(e){var r=e.item,t=e.handleClick,i=e.handleTotalCount,o=(0,a.useState)(1),l=(0,n.Z)(o,2),c=l[0],f=l[1];return(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"img-wrapper",children:(0,s.jsx)("img",{src:r.img,alt:r.title})}),(0,s.jsx)("div",{children:r.title}),(0,s.jsxs)("div",{children:[r.price," \u0433\u0440\u043d."]}),(0,s.jsxs)("div",{className:"counter",children:[(0,s.jsx)(u._nT,{onClick:function(){c>0&&(f(c-1),i(Number(-r.price)))},size:22,className:0===c?"disabled":""}),(0,s.jsx)("p",{children:c}),(0,s.jsx)(u.Lfi,{onClick:function(){c<50&&f(c+1),i(Number(r.price))},size:22})]}),(0,s.jsx)("div",{className:"remove-btn",onClick:function(){return t(r.id)},children:"remove"})]})},l=function(e){var r=e.user,t=(0,a.useState)(0),u=(0,n.Z)(t,2),l=u[0],c=u[1],f=(0,a.useState)(JSON.parse(localStorage.getItem("orders")||"[]")),d=(0,n.Z)(f,2),v=d[0],m=d[1],h=(0,i.Z)().updateOrder;(0,a.useEffect)((function(){var e=0;v.forEach((function(r){e+=Number(r.price)})),c(e)}),[v]),(0,a.useEffect)((function(){0!==Object.keys(r).length&&(h({ordersList:v,user:r}).then((function(e){console.log(e)})),m([]),c(0),localStorage.clear())}),[r]);var y=function(e){var r=v.filter((function(r){return r.id!==e}));m(r);var t=0;r.forEach((function(e){t+=Number(e.price)})),c(t),localStorage.setItem("orders",JSON.stringify(r))},p=function(e){c((function(r){return r+e}))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"order",children:v.length>0&&v.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(o,{item:e,handleClick:y,handleTotalCount:p})},e.id)}))}),(0,s.jsxs)("div",{className:"total-price",children:["Total price: ",l," \u0433\u0440\u043d."]})]})},c=t(413),f=t(433),d=t(942),v=t(165),m=t(762),h=t(861),y=t(925),p=["name"],b=["_f"],x=["_f"],g=function(e){return"checkbox"===e.type},Z=function(e){return e instanceof Date},k=function(e){return null==e},_=function(e){return"object"===typeof e},V=function(e){return!k(e)&&!Array.isArray(e)&&_(e)&&!Z(e)},A=function(e){return V(e)&&e.target?g(e.target)?e.target.checked:e.target.value:e},S=function(e,r){return e.has(function(e){return e.substring(0,e.search(/\.\d+(\.|$)/))||e}(r))},w=function(e){var r=e.constructor&&e.constructor.prototype;return V(r)&&r.hasOwnProperty("isPrototypeOf")},F="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function j(e){var r,t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else{if(F&&(e instanceof Blob||e instanceof FileList)||!t&&!V(e))return e;if(r=t?[]:{},t||w(e))for(var n in e)e.hasOwnProperty(n)&&(r[n]=j(e[n]));else r=e}return r}var D=function(e){return Array.isArray(e)?e.filter(Boolean):[]},N=function(e){return void 0===e},O=function(e,r,t){if(!r||!V(e))return t;var n=D(r.split(/[,[\].]+?/)).reduce((function(e,r){return k(e)?e:e[r]}),e);return N(n)||n===e?N(e[r])?t:e[r]:n},C={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},T={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},E="max",L="min",B="maxLength",U="minLength",M="pattern",q="required",P="validate",I=(a.createContext(null),function(e,r,t){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a={defaultValues:r._defaultValues},i=function(i){Object.defineProperty(a,i,{get:function(){var a=i;return r._proxyFormState[a]!==T.all&&(r._proxyFormState[a]=!n||T.all),t&&(t[a]=!0),e[a]}})};for(var u in e)i(u);return a}),R=function(e){return V(e)&&!Object.keys(e).length},H=function(e,r,t,n){t(e);e.name;var a=(0,y.Z)(e,p);return R(a)||Object.keys(a).length>=Object.keys(r).length||Object.keys(a).find((function(e){return r[e]===(!n||T.all)}))},z=function(e){return Array.isArray(e)?e:[e]};function J(e){var r=a.useRef(e);r.current=e,a.useEffect((function(){var t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return function(){t&&t.unsubscribe()}}),[e.disabled])}var W=function(e){return"string"===typeof e},$=function(e,r,t,n,a){return W(e)?(n&&r.watch.add(e),O(t,e,a)):Array.isArray(e)?e.map((function(e){return n&&r.watch.add(e),O(t,e)})):(n&&(r.watchAll=!0),t)};var G=function(e){return/^\w*$/.test(e)},K=function(e){return D(e.replace(/["|']|\]/g,"").split(/\.|\[/))};function Q(e,r,t){for(var n=-1,a=G(r)?[r]:K(r),i=a.length,u=i-1;++n<i;){var s=a[n],o=t;if(n!==u){var l=e[s];o=V(l)||Array.isArray(l)?l:isNaN(+a[n+1])?{}:[]}e[s]=o,e=e[s]}return e}var X=function(e,r,t,n,a){return r?(0,c.Z)((0,c.Z)({},t[e]),{},{types:(0,c.Z)((0,c.Z)({},t[e]&&t[e].types?t[e].types:{}),{},(0,d.Z)({},n,a||!0))}):{}},Y=function e(r,t,n){var a,i=(0,m.Z)(n||Object.keys(r));try{for(i.s();!(a=i.n()).done;){var u=a.value,s=O(r,u);if(s){var o=s._f,l=(0,y.Z)(s,b);if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else V(l)&&e(l,t)}}}catch(c){i.e(c)}finally{i.f()}},ee=function(e){return{isOnSubmit:!e||e===T.onSubmit,isOnBlur:e===T.onBlur,isOnChange:e===T.onChange,isOnAll:e===T.all,isOnTouch:e===T.onTouched}},re=function(e,r,t){return!t&&(r.watchAll||r.watch.has(e)||(0,f.Z)(r.watch).some((function(r){return e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))})))},te=function(e,r,t){var n=D(O(e,t));return Q(n,"root",r[t]),Q(e,t,n),e},ne=function(e){return"boolean"===typeof e},ae=function(e){return"file"===e.type},ie=function(e){return"function"===typeof e},ue=function(e){if(!F)return!1;var r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},se=function(e){return W(e)},oe=function(e){return"radio"===e.type},le=function(e){return e instanceof RegExp},ce={value:!1,isValid:!1},fe={value:!0,isValid:!0},de=function(e){if(Array.isArray(e)){if(e.length>1){var r=e.filter((function(e){return e&&e.checked&&!e.disabled})).map((function(e){return e.value}));return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!N(e[0].attributes.value)?N(e[0].value)||""===e[0].value?fe:{value:e[0].value,isValid:!0}:fe:ce}return ce},ve={isValid:!1,value:null},me=function(e){return Array.isArray(e)?e.reduce((function(e,r){return r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e}),ve):ve};function he(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(se(e)||Array.isArray(e)&&e.every(se)||ne(e)&&!e)return{type:t,message:se(e)?e:"",ref:r}}var ye=function(e){return V(e)&&!le(e)?e:{value:e,message:""}},pe=function(){var e=(0,h.Z)((0,v.Z)().mark((function e(r,t,n,a,i){var u,s,o,l,f,d,m,h,y,p,b,x,Z,_,A,S,w,F,j,D,C,T,I,H,z,J,$,G,K,Q,Y,ee,re,te,ce,fe,ve,pe,be,xe,ge,Ze,ke,_e,Ve,Ae,Se,we;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=r._f,s=u.ref,o=u.refs,l=u.required,f=u.maxLength,d=u.minLength,m=u.min,h=u.max,y=u.pattern,p=u.validate,b=u.name,x=u.valueAsNumber,Z=u.mount,_=u.disabled,A=O(t,b),Z&&!_){e.next=4;break}return e.abrupt("return",{});case 4:if(S=o?o[0]:s,w=function(e){a&&S.reportValidity&&(S.setCustomValidity(ne(e)?"":e||""),S.reportValidity())},F={},j=oe(s),D=g(s),C=j||D,T=(x||ae(s))&&N(s.value)&&N(A)||ue(s)&&""===s.value||""===A||Array.isArray(A)&&!A.length,I=X.bind(null,b,n,F),H=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:U,i=e?r:t;F[b]=(0,c.Z)({type:e?n:a,message:i,ref:s},I(e?n:a,i))},!(i?!Array.isArray(A)||!A.length:l&&(!C&&(T||k(A))||ne(A)&&!A||D&&!de(o).isValid||j&&!me(o).isValid))){e.next=20;break}if(z=se(l)?{value:!!l,message:l}:ye(l),J=z.value,$=z.message,!J){e.next=20;break}if(F[b]=(0,c.Z)({type:q,message:$,ref:S},I(q,$)),n){e.next=20;break}return w($),e.abrupt("return",F);case 20:if(T||k(m)&&k(h)){e.next=29;break}if(Q=ye(h),Y=ye(m),k(A)||isNaN(A)?(re=s.valueAsDate||new Date(A),te=function(e){return new Date((new Date).toDateString()+" "+e)},ce="time"==s.type,fe="week"==s.type,W(Q.value)&&A&&(G=ce?te(A)>te(Q.value):fe?A>Q.value:re>new Date(Q.value)),W(Y.value)&&A&&(K=ce?te(A)<te(Y.value):fe?A<Y.value:re<new Date(Y.value))):(ee=s.valueAsNumber||(A?+A:A),k(Q.value)||(G=ee>Q.value),k(Y.value)||(K=ee<Y.value)),!G&&!K){e.next=29;break}if(H(!!G,Q.message,Y.message,E,L),n){e.next=29;break}return w(F[b].message),e.abrupt("return",F);case 29:if(!f&&!d||T||!(W(A)||i&&Array.isArray(A))){e.next=39;break}if(ve=ye(f),pe=ye(d),be=!k(ve.value)&&A.length>+ve.value,xe=!k(pe.value)&&A.length<+pe.value,!be&&!xe){e.next=39;break}if(H(be,ve.message,pe.message),n){e.next=39;break}return w(F[b].message),e.abrupt("return",F);case 39:if(!y||T||!W(A)){e.next=46;break}if(ge=ye(y),Ze=ge.value,ke=ge.message,!le(Ze)||A.match(Ze)){e.next=46;break}if(F[b]=(0,c.Z)({type:M,message:ke,ref:s},I(M,ke)),n){e.next=46;break}return w(ke),e.abrupt("return",F);case 46:if(!p){e.next=80;break}if(!ie(p)){e.next=59;break}return e.next=50,p(A,t);case 50:if(_e=e.sent,!(Ve=he(_e,S))){e.next=57;break}if(F[b]=(0,c.Z)((0,c.Z)({},Ve),I(P,Ve.message)),n){e.next=57;break}return w(Ve.message),e.abrupt("return",F);case 57:e.next=80;break;case 59:if(!V(p)){e.next=80;break}Ae={},e.t0=(0,v.Z)().keys(p);case 62:if((e.t1=e.t0()).done){e.next=76;break}if(Se=e.t1.value,R(Ae)||n){e.next=66;break}return e.abrupt("break",76);case 66:return e.t2=he,e.next=69,p[Se](A,t);case 69:e.t3=e.sent,e.t4=S,e.t5=Se,(we=(0,e.t2)(e.t3,e.t4,e.t5))&&(Ae=(0,c.Z)((0,c.Z)({},we),I(Se,we.message)),w(we.message),n&&(F[b]=Ae)),e.next=62;break;case 76:if(R(Ae)){e.next=80;break}if(F[b]=(0,c.Z)({ref:S},Ae),n){e.next=80;break}return e.abrupt("return",F);case 80:return w(!0),e.abrupt("return",F);case 82:case"end":return e.stop()}}),e)})));return function(r,t,n,a,i){return e.apply(this,arguments)}}();function be(e,r){var t=Array.isArray(r)?r:G(r)?[r]:K(r),n=1===t.length?e:function(e,r){for(var t=r.slice(0,-1).length,n=0;n<t;)e=N(e)?n++:e[r[n++]];return e}(e,t),a=t.length-1,i=t[a];return n&&delete n[i],0!==a&&(V(n)&&R(n)||Array.isArray(n)&&function(e){for(var r in e)if(e.hasOwnProperty(r)&&!N(e[r]))return!1;return!0}(n))&&be(e,t.slice(0,-1)),e}function xe(){var e=[];return{get observers(){return e},next:function(r){var t,n=(0,m.Z)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.next&&a.next(r)}}catch(i){n.e(i)}finally{n.f()}},subscribe:function(r){return e.push(r),{unsubscribe:function(){e=e.filter((function(e){return e!==r}))}}},unsubscribe:function(){e=[]}}}var ge=function(e){return k(e)||!_(e)};function Ze(e,r){if(ge(e)||ge(r))return e===r;if(Z(e)&&Z(r))return e.getTime()===r.getTime();var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var a=0,i=t;a<i.length;a++){var u=i[a],s=e[u];if(!n.includes(u))return!1;if("ref"!==u){var o=r[u];if(Z(s)&&Z(o)||V(s)&&V(o)||Array.isArray(s)&&Array.isArray(o)?!Ze(s,o):s!==o)return!1}}return!0}var ke=function(e){return"select-multiple"===e.type},_e=function(e){return oe(e)||g(e)},Ve=function(e){return ue(e)&&e.isConnected},Ae=function(e){for(var r in e)if(ie(e[r]))return!0;return!1};function Se(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Array.isArray(e);if(V(e)||t)for(var n in e)Array.isArray(e[n])||V(e[n])&&!Ae(e[n])?(r[n]=Array.isArray(e[n])?[]:{},Se(e[n],r[n])):k(e[n])||(r[n]=!0);return r}function we(e,r,t){var n=Array.isArray(e);if(V(e)||n)for(var a in e)Array.isArray(e[a])||V(e[a])&&!Ae(e[a])?N(r)||ge(t[a])?t[a]=Array.isArray(e[a])?Se(e[a],[]):(0,c.Z)({},Se(e[a])):we(e[a],k(r)?{}:r[a],t[a]):t[a]=!Ze(e[a],r[a]);return t}var Fe=function(e,r){return we(e,r,Se(r))},je=function(e,r){var t=r.valueAsNumber,n=r.valueAsDate,a=r.setValueAs;return N(e)?e:t?""===e?NaN:e?+e:e:n&&W(e)?new Date(e):a?a(e):e};function De(e){var r=e.ref;if(!(e.refs?e.refs.every((function(e){return e.disabled})):r.disabled))return ae(r)?r.files:oe(r)?me(e.refs).value:ke(r)?(0,f.Z)(r.selectedOptions).map((function(e){return e.value})):g(r)?de(e.refs).value:je(N(r.value)?e.ref.value:r.value,e)}var Ne=function(e,r,t,n){var a,i={},u=(0,m.Z)(e);try{for(u.s();!(a=u.n()).done;){var s=a.value,o=O(r,s);o&&Q(i,s,o._f)}}catch(l){u.e(l)}finally{u.f()}return{criteriaMode:t,names:(0,f.Z)(e),fields:i,shouldUseNativeValidation:n}},Oe=function(e){return N(e)?e:le(e)?e.source:V(e)?le(e.value)?e.value.source:e.value:e},Ce=function(e){return e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate)};function Te(e,r,t){var n=O(e,t);if(n||G(t))return{error:n,name:t};for(var a=t.split(".");a.length;){var i=a.join("."),u=O(r,i),s=O(e,i);if(u&&!Array.isArray(u)&&t!==i)return{name:t};if(s&&s.type)return{name:i,error:s};a.pop()}return{name:t}}var Ee=function(e,r,t,n,a){return!a.isOnAll&&(!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:!(t?n.isOnChange:a.isOnChange)||e)},Le=function(e,r){return!D(O(e,r)).length&&be(e,r)},Be={mode:T.onSubmit,reValidateMode:T.onChange,shouldFocusError:!0};function Ue(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=(0,c.Z)((0,c.Z)({},Be),r),a={submitCount:0,isDirty:!1,isLoading:ie(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},u=(V(n.defaultValues)||V(n.values))&&j(n.defaultValues||n.values)||{},s=n.shouldUnregister?{}:j(u),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,b={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:xe(),array:xe(),state:xe()},w=r.resetOptions&&r.resetOptions.keepDirtyValues,E=ee(n.mode),L=ee(n.reValidateMode),B=n.criteriaMode===T.all,U=function(){var e=(0,h.Z)((0,v.Z)().mark((function e(r){var t;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.isValid&&!r){e.next=14;break}if(!n.resolver){e.next=9;break}return e.t1=R,e.next=5,H();case 5:e.t2=e.sent.errors,e.t0=(0,e.t1)(e.t2),e.next=12;break;case 9:return e.next=11,G(i,!0);case 11:e.t0=e.sent;case 12:(t=e.t0)!==a.isValid&&_.state.next({isValid:t});case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),M=function(e){return b.isValidating&&_.state.next({isValidating:e})},q=function(e,r,t,n){var a=O(i,e);if(a){var l=O(s,e,N(t)?O(u,e):t);N(l)||n&&n.defaultChecked||r?Q(s,e,r?l:De(a._f)):se(e,l),o.mount&&U()}},P=function(e,r,t,n,i){var s=!1,o=!1,l={name:e};if(!t||n){b.isDirty&&(o=a.isDirty,a.isDirty=l.isDirty=K(),s=o!==l.isDirty);var c=Ze(O(u,e),r);o=O(a.dirtyFields,e),c?be(a.dirtyFields,e):Q(a.dirtyFields,e,!0),l.dirtyFields=a.dirtyFields,s=s||b.dirtyFields&&o!==!c}if(t){var f=O(a.touchedFields,e);f||(Q(a.touchedFields,e,t),l.touchedFields=a.touchedFields,s=s||b.touchedFields&&f!==t)}return s&&i&&_.state.next(l),s?l:{}},I=function(t,n,i,u){var s,o=O(a.errors,t),l=b.isValid&&ne(n)&&a.isValid!==n;if(r.delayError&&i?(s=function(){return function(e,r){Q(a.errors,e,r),_.state.next({errors:a.errors})}(t,i)},(e=function(e){clearTimeout(p),p=setTimeout(s,e)})(r.delayError)):(clearTimeout(p),e=null,i?Q(a.errors,t,i):be(a.errors,t)),(i?!Ze(o,i):o)||!R(u)||l){var f=(0,c.Z)((0,c.Z)((0,c.Z)({},u),l&&ne(n)?{isValid:n}:{}),{},{errors:a.errors,name:t});a=(0,c.Z)((0,c.Z)({},a),f),_.state.next(f)}M(!1)},H=function(){var e=(0,h.Z)((0,v.Z)().mark((function e(r){return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.resolver(s,n.context,Ne(r||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),J=function(){var e=(0,h.Z)((0,v.Z)().mark((function e(r){var t,n,i,u,s,o;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:if(t=e.sent,n=t.errors,r){i=(0,m.Z)(r);try{for(i.s();!(u=i.n()).done;)s=u.value,(o=O(n,s))?Q(a.errors,s,o):be(a.errors,s)}catch(l){i.e(l)}finally{i.f()}}else a.errors=n;return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),G=function(){var e=(0,h.Z)((0,v.Z)().mark((function e(r,t){var i,u,o,c,f,d,m,h=arguments;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=h.length>2&&void 0!==h[2]?h[2]:{valid:!0},e.t0=(0,v.Z)().keys(r);case 2:if((e.t1=e.t0()).done){e.next=23;break}if(u=e.t1.value,!(o=r[u])){e.next=21;break}if(c=o._f,f=(0,y.Z)(o,x),!c){e.next=17;break}return d=l.array.has(c.name),e.next=11,pe(o,s,B,n.shouldUseNativeValidation&&!t,d);case 11:if(!(m=e.sent)[c.name]){e.next=16;break}if(i.valid=!1,!t){e.next=16;break}return e.abrupt("break",23);case 16:!t&&(O(m,c.name)?d?te(a.errors,m,c.name):Q(a.errors,c.name,m[c.name]):be(a.errors,c.name));case 17:if(e.t2=f,!e.t2){e.next=21;break}return e.next=21,G(f,t,i);case 21:e.next=2;break;case 23:return e.abrupt("return",i.valid);case 24:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),K=function(e,r){return e&&r&&Q(s,e,r),!Ze(de(),u)},X=function(e,r,t){return $(e,l,(0,c.Z)({},o.mount?s:N(r)?u:W(e)?(0,d.Z)({},e,r):r),t,r)},se=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=O(i,e),a=r;if(n){var u=n._f;u&&(!u.disabled&&Q(s,e,je(r,u)),a=ue(u.ref)&&k(r)?"":r,ke(u.ref)?(0,f.Z)(u.ref.options).forEach((function(e){return e.selected=a.includes(e.value)})):u.refs?g(u.ref)?u.refs.length>1?u.refs.forEach((function(e){return(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((function(r){return r===e.value})):a===e.value)})):u.refs[0]&&(u.refs[0].checked=!!a):u.refs.forEach((function(e){return e.checked=e.value===a})):ae(u.ref)?u.ref.value="":(u.ref.value=a,u.ref.type||_.values.next({name:e,values:(0,c.Z)({},s)})))}(t.shouldDirty||t.shouldTouch)&&P(e,a,t.shouldTouch,t.shouldDirty,!0),t.shouldValidate&&fe(e)},oe=function e(r,t,n){for(var a in t){var u=t[a],s="".concat(r,".").concat(a),o=O(i,s);!l.array.has(r)&&ge(u)&&(!o||o._f)||Z(u)?se(s,u,n):e(s,u,n)}},le=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=O(i,e),d=l.array.has(e),v=j(r);Q(s,e,v),d?(_.array.next({name:e,values:(0,c.Z)({},s)}),(b.isDirty||b.dirtyFields)&&n.shouldDirty&&_.state.next({name:e,dirtyFields:Fe(u,s),isDirty:K(e,v)})):!f||f._f||k(v)?se(e,v,n):oe(e,v,n),re(e,l)&&_.state.next((0,c.Z)({},a)),_.values.next({name:e,values:(0,c.Z)({},s)}),!o.mount&&t()},ce=function(){var r=(0,h.Z)((0,v.Z)().mark((function r(t){var u,o,f,d,m,h,y,p,x,g,Z,k,V,S,w,F,j;return(0,v.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=t.target,o=u.name,f=!0,d=O(i,o),m=function(){return u.type?De(d._f):A(t)},!d){r.next=47;break}if(p=m(),x=t.type===C.BLUR||t.type===C.FOCUS_OUT,g=!Ce(d._f)&&!n.resolver&&!O(a.errors,o)&&!d._f.deps||Ee(x,O(a.touchedFields,o),a.isSubmitted,L,E),Z=re(o,l,x),Q(s,o,p),x?(d._f.onBlur&&d._f.onBlur(t),e&&e(0)):d._f.onChange&&d._f.onChange(t),k=P(o,p,x,!1),V=!R(k)||Z,!x&&_.values.next({name:o,type:t.type,values:(0,c.Z)({},s)}),!g){r.next=18;break}return b.isValid&&U(),r.abrupt("return",V&&_.state.next((0,c.Z)({name:o},Z?{}:k)));case 18:if(!x&&Z&&_.state.next((0,c.Z)({},a)),M(!0),!n.resolver){r.next=32;break}return r.next=23,H([o]);case 23:S=r.sent,w=S.errors,F=Te(a.errors,i,o),j=Te(w,i,F.name||o),h=j.error,o=j.name,y=R(w),r.next=46;break;case 32:return r.next=34,pe(d,s,B,n.shouldUseNativeValidation);case 34:if(r.t0=o,h=r.sent[r.t0],!(f=isNaN(p)||p===O(s,o,p))){r.next=46;break}if(!h){r.next=42;break}y=!1,r.next=46;break;case 42:if(!b.isValid){r.next=46;break}return r.next=45,G(i,!0);case 45:y=r.sent;case 46:f&&(d._f.deps&&fe(d._f.deps),I(o,y,h,k));case 47:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),fe=function(){var e=(0,h.Z)((0,v.Z)().mark((function e(r){var t,u,s,o,f,m=arguments;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=m.length>1&&void 0!==m[1]?m[1]:{},o=z(r),M(!0),!n.resolver){e.next=11;break}return e.next=6,J(N(r)?r:o);case 6:f=e.sent,u=R(f),s=r?!o.some((function(e){return O(f,e)})):u,e.next=21;break;case 11:if(!r){e.next=18;break}return e.next=14,Promise.all(o.map(function(){var e=(0,h.Z)((0,v.Z)().mark((function e(r){var t;return(0,v.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O(i,r),e.next=3,G(t&&t._f?(0,d.Z)({},r,t):t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 14:((s=e.sent.every(Boolean))||a.isValid)&&U(),e.next=21;break;case 18:return e.next=20,G(i);case 20:s=u=e.sent;case 21:return _.state.next((0,c.Z)((0,c.Z)((0,c.Z)({},!W(r)||b.isValid&&u!==a.isValid?{}:{name:r}),n.resolver||!r?{isValid:u}:{}),{},{errors:a.errors,isValidating:!1})),t.shouldFocus&&!s&&Y(i,(function(e){return e&&O(a.errors,e)}),r?o:l.mount),e.abrupt("return",s);case 24:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),de=function(e){var r=(0,c.Z)((0,c.Z)({},u),o.mount?s:{});return N(e)?r:W(e)?O(r,e):e.map((function(e){return O(r,e)}))},ve=function(e,r){return{invalid:!!O((r||a).errors,e),isDirty:!!O((r||a).dirtyFields,e),isTouched:!!O((r||a).touchedFields,e),error:O((r||a).errors,e)}},me=function(e,r,t){var n=(O(i,e,{_f:{}})._f||{}).ref;Q(a.errors,e,(0,c.Z)((0,c.Z)({},r),{},{ref:n})),_.state.next({name:e,errors:a.errors,isValid:!1}),t&&t.shouldFocus&&n&&n.focus&&n.focus()},he=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(0,m.Z)(e?z(e):l.mount);try{for(o.s();!(r=o.n()).done;){var f=r.value;l.mount.delete(f),l.array.delete(f),t.keepValue||(be(i,f),be(s,f)),!t.keepError&&be(a.errors,f),!t.keepDirty&&be(a.dirtyFields,f),!t.keepTouched&&be(a.touchedFields,f),!n.shouldUnregister&&!t.keepDefaultValue&&be(u,f)}}catch(d){o.e(d)}finally{o.f()}_.values.next({values:(0,c.Z)({},s)}),_.state.next((0,c.Z)((0,c.Z)({},a),t.keepDirty?{isDirty:K()}:{})),!t.keepIsValid&&U()},ye=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=O(i,r),d=ne(t.disabled);return Q(i,r,(0,c.Z)((0,c.Z)({},a||{}),{},{_f:(0,c.Z)((0,c.Z)({},a&&a._f?a._f:{ref:{name:r}}),{},{name:r,mount:!0},t)})),l.mount.add(r),a?d&&Q(s,r,t.disabled?void 0:O(s,r,De(a._f))):q(r,!0,t.value),(0,c.Z)((0,c.Z)((0,c.Z)({},d?{disabled:t.disabled}:{}),n.progressive?{required:!!t.required,min:Oe(t.min),max:Oe(t.max),minLength:Oe(t.minLength),maxLength:Oe(t.maxLength),pattern:Oe(t.pattern)}:{}),{},{name:r,onChange:ce,onBlur:ce,ref:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}((function(s){if(s){e(r,t),a=O(i,r);var d=N(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,v=_e(d),m=a._f.refs||[];if(v?m.find((function(e){return e===d})):d===a._f.ref)return;Q(i,r,{_f:(0,c.Z)((0,c.Z)({},a._f),v?{refs:[].concat((0,f.Z)(m.filter(Ve)),[d],(0,f.Z)(Array.isArray(O(u,r))?[{}]:[])),ref:{type:d.type,name:r}}:{ref:d})}),q(r,!1,void 0,d)}else(a=O(i,r,{}))._f&&(a._f.mount=!1),(n.shouldUnregister||t.shouldUnregister)&&(!S(l.array,r)||!o.action)&&l.unMount.add(r)}))})},Ae=function(){return n.shouldFocusError&&Y(i,(function(e){return e&&O(a.errors,e)}),l.mount)},Se=function(e,r){return function(){var t=(0,h.Z)((0,v.Z)().mark((function t(u){var o,l,f,d;return(0,v.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist()),o=j(s),_.state.next({isSubmitting:!0}),!n.resolver){t.next=13;break}return t.next=6,H();case 6:l=t.sent,f=l.errors,d=l.values,a.errors=f,o=d,t.next=15;break;case 13:return t.next=15,G(i);case 15:if(be(a.errors,"root"),!R(a.errors)){t.next=22;break}return _.state.next({errors:{}}),t.next=20,e(o,u);case 20:t.next=27;break;case 22:if(!r){t.next=25;break}return t.next=25,r((0,c.Z)({},a.errors),u);case 25:Ae(),setTimeout(Ae);case 27:_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(a.errors),submitCount:a.submitCount+1,errors:a.errors});case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},we=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=e||u,d=j(f),v=e&&!R(e)?d:u;if(n.keepDefaultValues||(u=f),!n.keepValues){if(n.keepDirtyValues||w){var h,y=(0,m.Z)(l.mount);try{for(y.s();!(h=y.n()).done;){var p=h.value;O(a.dirtyFields,p)?Q(v,p,O(s,p)):le(p,O(v,p))}}catch(S){y.e(S)}finally{y.f()}}else{if(F&&N(e)){var x,g=(0,m.Z)(l.mount);try{for(g.s();!(x=g.n()).done;){var Z=x.value,k=O(i,Z);if(k&&k._f){var V=Array.isArray(k._f.refs)?k._f.refs[0]:k._f.ref;if(ue(V)){var A=V.closest("form");if(A){A.reset();break}}}}}catch(S){g.e(S)}finally{g.f()}}i={}}s=r.shouldUnregister?n.keepDefaultValues?j(u):{}:j(v),_.array.next({values:(0,c.Z)({},v)}),_.values.next({values:(0,c.Z)({},v)})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!o.mount&&t(),o.mount=!b.isValid||!!n.keepIsValid,o.watch=!!r.shouldUnregister,_.state.next({submitCount:n.keepSubmitCount?a.submitCount:0,isDirty:n.keepDirty?a.isDirty:!(!n.keepDefaultValues||Ze(e,u)),isSubmitted:!!n.keepIsSubmitted&&a.isSubmitted,dirtyFields:n.keepDirtyValues?a.dirtyFields:n.keepDefaultValues&&e?Fe(u,e):{},touchedFields:n.keepTouched?a.touchedFields:{},errors:n.keepErrors?a.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Ue=function(e,r){return we(ie(e)?e(s):e,r)};return{control:{register:ye,unregister:he,getFieldState:ve,handleSubmit:Se,setError:me,_executeSchema:H,_getWatch:X,_getDirty:K,_updateValid:U,_removeUnmounted:function(){var e,r=(0,m.Z)(l.unMount);try{for(r.s();!(e=r.n()).done;){var t=e.value,n=O(i,t);n&&(n._f.refs?n._f.refs.every((function(e){return!Ve(e)})):!Ve(n._f.ref))&&he(t)}}catch(a){r.e(a)}finally{r.f()}l.unMount=new Set},_updateFieldArray:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,l=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(n&&t){if(o.action=!0,c&&Array.isArray(O(i,e))){var f=t(O(i,e),n.argA,n.argB);l&&Q(i,e,f)}if(c&&Array.isArray(O(a.errors,e))){var d=t(O(a.errors,e),n.argA,n.argB);l&&Q(a.errors,e,d),Le(a.errors,e)}if(b.touchedFields&&c&&Array.isArray(O(a.touchedFields,e))){var v=t(O(a.touchedFields,e),n.argA,n.argB);l&&Q(a.touchedFields,e,v)}b.dirtyFields&&(a.dirtyFields=Fe(u,s)),_.state.next({name:e,isDirty:K(e,r),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else Q(s,e,r)},_getFieldArray:function(e){return D(O(o.mount?s:u,e,r.shouldUnregister?O(u,e,[]):[]))},_reset:we,_resetDefaultValues:function(){return ie(n.defaultValues)&&n.defaultValues().then((function(e){Ue(e,n.resetOptions),_.state.next({isLoading:!1})}))},_updateFormState:function(e){a=(0,c.Z)((0,c.Z)({},a),e)},_subjects:_,_proxyFormState:b,get _fields(){return i},get _formValues(){return s},get _state(){return o},set _state(e){o=e},get _defaultValues(){return u},get _names(){return l},set _names(e){l=e},get _formState(){return a},set _formState(e){a=e},get _options(){return n},set _options(e){n=(0,c.Z)((0,c.Z)({},n),e)}},trigger:fe,register:ye,handleSubmit:Se,watch:function(e,r){return ie(e)?_.values.subscribe({next:function(t){return e(X(void 0,r),t)}}):X(e,r,!0)},setValue:le,getValues:de,reset:Ue,resetField:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};O(i,e)&&(N(r.defaultValue)?le(e,O(u,e)):(le(e,r.defaultValue),Q(u,e,r.defaultValue)),r.keepTouched||be(a.touchedFields,e),r.keepDirty||(be(a.dirtyFields,e),a.isDirty=r.defaultValue?K(e,O(u,e)):K()),r.keepError||(be(a.errors,e),b.isValid&&U()),_.state.next((0,c.Z)({},a)))},clearErrors:function(e){e&&z(e).forEach((function(e){return be(a.errors,e)})),_.state.next({errors:e?a.errors:{}})},unregister:he,setError:me,setFocus:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=O(i,e),n=t&&t._f;if(n){var a=n.refs?n.refs[0]:n.ref;a.focus&&(a.focus(),r.shouldSelect&&a.select())}},getFieldState:ve}}var Me=t(85),qe=function(e){var r=e.handleOrderButton,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=a.useRef(),t=a.useState({isDirty:!1,isValidating:!1,isLoading:ie(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ie(e.defaultValues)?void 0:e.defaultValues}),i=(0,n.Z)(t,2),u=i[0],s=i[1];r.current||(r.current=(0,c.Z)((0,c.Z)({},Ue(e,(function(){return s((function(e){return(0,c.Z)({},e)}))}))),{},{formState:u}));var o=r.current.control;return o._options=e,J({subject:o._subjects.state,next:function(e){H(e,o._proxyFormState,o._updateFormState,!0)&&s((0,c.Z)({},o._formState))}}),a.useEffect((function(){e.values&&!Ze(e.values,o._defaultValues)?o._reset(e.values,o._options.resetOptions):o._resetDefaultValues()}),[e.values,o]),a.useEffect((function(){o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next((0,c.Z)({},o._formState))),o._removeUnmounted()})),r.current.formState=I(u,o),r.current}(),i=t.register,u=t.handleSubmit,o=t.reset;return(0,s.jsxs)("div",{className:"main",children:[(0,s.jsx)("h1",{children:"Address:"}),(0,s.jsx)("div",{children:(0,s.jsxs)("form",{onSubmit:u((function(e){Me.Am.success("Thanks ".concat(e.name," for your order!)")),r(e),o()})),children:[(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"name",className:"label",children:"Name:"}),(0,s.jsx)("input",(0,c.Z)((0,c.Z)({type:"text",id:"name",required:!0},i("name")),{},{className:"input"}))]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"address",className:"label",children:"Address:"}),(0,s.jsx)("input",(0,c.Z)((0,c.Z)({type:"text",id:"address",required:!0},i("address")),{},{className:"input"}))]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"phone",className:"label",children:"Phone number:"}),(0,s.jsx)("input",(0,c.Z)((0,c.Z)({type:"text",id:"phone",required:!0},i("phone")),{},{className:"input"}))]}),(0,s.jsxs)("div",{className:"form-field",children:[(0,s.jsx)("label",{htmlFor:"city",className:"label",children:"City:"}),(0,s.jsx)("input",(0,c.Z)((0,c.Z)({type:"text",id:"city",required:!0},i("city")),{},{className:"input"}))]}),(0,s.jsx)("div",{className:"btn-wrapper",children:(0,s.jsx)("button",{type:"submit",children:"Order"})})]})})]})},Pe=function(){var e=(0,a.useState)({}),r=(0,n.Z)(e,2),t=r[0],i=r[1];return(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(qe,{handleOrderButton:function(e){i(e)}}),(0,s.jsx)(l,{user:t})]})}}}]);
//# sourceMappingURL=878.0ec0435d.chunk.js.map