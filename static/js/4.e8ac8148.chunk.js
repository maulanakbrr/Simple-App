(this["webpackJsonpfe-infracom-test"]=this["webpackJsonpfe-infracom-test"]||[]).push([[4],{102:function(e,a,t){"use strict";t.r(a);var r=t(64),i=t(0),l=t.n(i),s=t(58),o=t(1),n=t(2),c=t(4),d=t.n(c),m=(t(36),t(13)),b=t.n(m),u={type:b.a.string,tooltip:b.a.bool,as:b.a.elementType},f=l.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,i=e.className,s=e.type,c=void 0===s?"valid":s,m=e.tooltip,b=void 0!==m&&m,u=Object(n.a)(e,["as","className","type","tooltip"]);return l.a.createElement(r,Object(o.a)({},u,{ref:a,className:d()(i,c+"-"+(b?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=u;var v=f,p=l.a.createContext({controlId:void 0}),j=t(5),O=l.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,m=e.type,b=void 0===m?"checkbox":m,u=e.isValid,f=void 0!==u&&u,v=e.isInvalid,O=void 0!==v&&v,y=e.isStatic,x=e.as,h=void 0===x?"input":x,N=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(i.useContext)(p),w=P.controlId,I=P.custom?[s,"custom-control-input"]:[r,"form-check-input"],C=I[0],E=I[1];return r=Object(j.a)(C,E),l.a.createElement(h,Object(o.a)({},N,{ref:a,type:b,id:t||w,className:d()(c,r,f&&"is-valid",O&&"is-invalid",y&&"position-static")}))}));O.displayName="FormCheckInput";var y=O,x=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,s=e.className,c=e.htmlFor,m=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(i.useContext)(p),u=b.controlId,f=b.custom?[r,"custom-control-label"]:[t,"form-check-label"],v=f[0],O=f[1];return t=Object(j.a)(v,O),l.a.createElement("label",Object(o.a)({},m,{ref:a,htmlFor:c||u,className:d()(s,t)}))}));x.displayName="FormCheckLabel";var h=x,N=l.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,c=e.inline,m=void 0!==c&&c,b=e.disabled,u=void 0!==b&&b,f=e.isValid,O=void 0!==f&&f,x=e.isInvalid,N=void 0!==x&&x,P=e.feedbackTooltip,w=void 0!==P&&P,I=e.feedback,C=e.className,E=e.style,F=e.title,g=void 0===F?"":F,k=e.type,S=void 0===k?"checkbox":k,R=e.label,V=e.children,L=e.custom,A=e.as,T=void 0===A?"input":A,z=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),G="switch"===S||L,M=G?[s,"custom-control"]:[r,"form-check"],J=M[0],B=M[1];r=Object(j.a)(J,B);var D=Object(i.useContext)(p).controlId,U=Object(i.useMemo)((function(){return{controlId:t||D,custom:G}}),[D,G,t]),$=G||null!=R&&!1!==R&&!V,q=l.a.createElement(y,Object(o.a)({},z,{type:"switch"===S?"checkbox":S,ref:a,isValid:O,isInvalid:N,isStatic:!$,disabled:u,as:T}));return l.a.createElement(p.Provider,{value:U},l.a.createElement("div",{style:E,className:d()(C,r,G&&"custom-"+S,m&&r+"-inline")},V||l.a.createElement(l.a.Fragment,null,q,$&&l.a.createElement(h,{title:g},R),(O||N)&&l.a.createElement(v,{type:O?"valid":"invalid",tooltip:w},I))))}));N.displayName="FormCheck",N.Input=y,N.Label=h;var P=N,w=l.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,m=e.isValid,b=e.isInvalid,u=e.lang,f=e.as,v=void 0===f?"input":f,O=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=Object(i.useContext)(p),x=y.controlId,h=y.custom?[s,"custom-file-input"]:[r,"form-control-file"],N=h[0],P=h[1];return r=Object(j.a)(N,P),l.a.createElement(v,Object(o.a)({},O,{ref:a,id:t||x,type:"file",lang:u,className:d()(c,r,m&&"is-valid",b&&"is-invalid")}))}));w.displayName="FormFileInput";var I=w,C=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,s=e.className,c=e.htmlFor,m=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(i.useContext)(p),u=b.controlId,f=b.custom?[r,"custom-file-label"]:[t,"form-file-label"],v=f[0],O=f[1];return t=Object(j.a)(v,O),l.a.createElement("label",Object(o.a)({},m,{ref:a,htmlFor:c||u,className:d()(s,t),"data-browse":m["data-browse"]}))}));C.displayName="FormFileLabel";var E=C,F=l.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,c=e.disabled,m=void 0!==c&&c,b=e.isValid,u=void 0!==b&&b,f=e.isInvalid,O=void 0!==f&&f,y=e.feedbackTooltip,x=void 0!==y&&y,h=e.feedback,N=e.className,P=e.style,w=e.label,C=e.children,F=e.custom,g=e.lang,k=e["data-browse"],S=e.as,R=void 0===S?"div":S,V=e.inputAs,L=void 0===V?"input":V,A=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=F?[s,"custom"]:[r,"form-file"],z=T[0],G=T[1];r=Object(j.a)(z,G);var M=Object(i.useContext)(p).controlId,J=Object(i.useMemo)((function(){return{controlId:t||M,custom:F}}),[M,F,t]),B=null!=w&&!1!==w&&!C,D=l.a.createElement(I,Object(o.a)({},A,{ref:a,isValid:u,isInvalid:O,disabled:m,as:L,lang:g}));return l.a.createElement(p.Provider,{value:J},l.a.createElement(R,{style:P,className:d()(N,r,F&&"custom-file")},C||l.a.createElement(l.a.Fragment,null,F?l.a.createElement(l.a.Fragment,null,D,B&&l.a.createElement(E,{"data-browse":k},w)):l.a.createElement(l.a.Fragment,null,B&&l.a.createElement(E,null,w),D),(u||O)&&l.a.createElement(v,{type:u?"valid":"invalid",tooltip:x},h))))}));F.displayName="FormFile",F.Input=I,F.Label=E;var g=F,k=(t(37),l.a.forwardRef((function(e,a){var t,r,s=e.bsPrefix,c=e.bsCustomPrefix,m=e.type,b=e.size,u=e.htmlSize,f=e.id,v=e.className,O=e.isValid,y=void 0!==O&&O,x=e.isInvalid,h=void 0!==x&&x,N=e.plaintext,P=e.readOnly,w=e.custom,I=e.as,C=void 0===I?"input":I,E=Object(n.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(i.useContext)(p).controlId,g=w?[c,"custom"]:[s,"form-control"],k=g[0],S=g[1];if(s=Object(j.a)(k,S),N)(r={})[s+"-plaintext"]=!0,t=r;else if("file"===m){var R;(R={})[s+"-file"]=!0,t=R}else if("range"===m){var V;(V={})[s+"-range"]=!0,t=V}else if("select"===C&&w){var L;(L={})[s+"-select"]=!0,L[s+"-select-"+b]=b,t=L}else{var A;(A={})[s]=!0,A[s+"-"+b]=b,t=A}return l.a.createElement(C,Object(o.a)({},E,{type:m,size:u,ref:a,readOnly:P,id:f||F,className:d()(v,t,y&&"is-valid",h&&"is-invalid")}))})));k.displayName="FormControl";var S=Object.assign(k,{Feedback:v}),R=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.children,c=e.controlId,m=e.as,b=void 0===m?"div":m,u=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(j.a)(t,"form-group");var f=Object(i.useMemo)((function(){return{controlId:c}}),[c]);return l.a.createElement(p.Provider,{value:f},l.a.createElement(b,Object(o.a)({},u,{ref:a,className:d()(r,t)}),s))}));R.displayName="FormGroup";var V=R,L=t(56),A=l.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,s=e.bsPrefix,c=e.column,m=e.srOnly,b=e.className,u=e.htmlFor,f=Object(n.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),v=Object(i.useContext)(p).controlId;s=Object(j.a)(s,"form-label");var O="col-form-label";"string"===typeof c&&(O=O+" "+O+"-"+c);var y=d()(b,s,m&&"sr-only",c&&O);return u=u||v,c?l.a.createElement(L.a,Object(o.a)({as:"label",className:y,htmlFor:u},f)):l.a.createElement(r,Object(o.a)({ref:a,className:y,htmlFor:u},f))}));A.displayName="FormLabel",A.defaultProps={column:!1,srOnly:!1};var T=A,z=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,s=void 0===i?"small":i,c=e.muted,m=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(j.a)(t,"form-text"),l.a.createElement(s,Object(o.a)({},m,{ref:a,className:d()(r,t,c&&"text-muted")}))}));z.displayName="FormText";var G=z,M=l.a.forwardRef((function(e,a){return l.a.createElement(P,Object(o.a)({},e,{ref:a,type:"switch"}))}));M.displayName="Switch",M.Input=P.Input,M.Label=P.Label;var J=M,B=t(28),D=Object(B.a)("form-row"),U=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,i=e.className,s=e.validated,c=e.as,m=void 0===c?"form":c,b=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(j.a)(t,"form"),l.a.createElement(m,Object(o.a)({},b,{ref:a,className:d()(i,s&&"was-validated",r&&t+"-inline")}))}));U.displayName="Form",U.defaultProps={inline:!1},U.Row=D,U.Group=V,U.Control=S,U.Check=P,U.File=g,U.Switch=J,U.Label=T,U.Text=G;var $=U,q=t(97),H=(t(99),t(3));a.default=function(){var e=Object(i.useState)(""),a=Object(r.a)(e,2),t=a[0],l=a[1],o=Object(i.useState)(""),n=Object(r.a)(o,2),c=n[0],d=n[1];return Object(H.jsxs)(s.a,{className:"form-container",children:[Object(H.jsx)("h2",{className:"mb-4 login-title",children:"Sign in to Simple App"}),Object(H.jsx)("div",{className:"form-box p-4",children:Object(H.jsxs)($,{onSubmit:function(e){e.preventDefault(),console.log(t,c)},children:[Object(H.jsxs)($.Group,{controlId:"email",children:[Object(H.jsx)($.Label,{children:"Email Address"}),Object(H.jsx)($.Control,{type:"email",placeholder:"Enter your email",name:"email",value:t,onChange:function(e){return l(e.target.value)}})]}),Object(H.jsxs)($.Group,{controlId:"password",children:[Object(H.jsx)($.Label,{children:"Password"}),Object(H.jsx)($.Control,{type:"password",placeholder:"Enter your password",name:"password",value:c,onChange:function(e){return d(e.target.value)}})]}),Object(H.jsx)(q.a,{variant:"primary",type:"submit",className:"btn-block mt-4",children:"Log in"})]})})]})}},64:function(e,a,t){"use strict";function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function i(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,l=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(t.push(s.value),!a||t.length!==a);r=!0);}catch(n){i=!0,l=n}finally{try{r||null==o.return||o.return()}finally{if(i)throw l}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return i}))},97:function(e,a,t){"use strict";var r=t(1),i=t(2),l=t(4),s=t.n(l),o=t(0),n=t.n(o),c=t(5),d=t(25),m=n.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,o=e.size,m=e.active,b=e.className,u=e.block,f=e.type,v=e.as,p=Object(i.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),j=Object(c.a)(t,"btn"),O=s()(b,j,m&&"active",l&&j+"-"+l,u&&j+"-block",o&&j+"-"+o);if(p.href)return n.a.createElement(d.a,Object(r.a)({},p,{as:v,ref:a,className:s()(O,p.disabled&&"disabled")}));a&&(p.ref=a),f?p.type=f:v||(p.type="button");var y=v||"button";return n.a.createElement(y,Object(r.a)({},p,{className:O}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=m},99:function(e,a,t){}}]);
//# sourceMappingURL=4.e8ac8148.chunk.js.map