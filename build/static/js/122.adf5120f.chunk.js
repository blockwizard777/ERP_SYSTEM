(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[122],{1187:function(e,t,a){"use strict";var r=a(14),c=a(0),n=a(8),i=a(43),o=a(719),s=a(292),l=a(243),d=a(716),u=a(426),b=a(806),j=a(84),p=a(639),f=a(738),O=a(58),v=a(801),h=a.n(v),m=a(828),g=a.n(m),x=a(829),y=a.n(x),k=a(852),M=a.n(k),w=a(1),C=a(783),z=Object(n.a)(o.a)({padding:8,background:"rgba(66, 103, 178, 0.2)","& svg":{color:"#4267B2"},"&:hover":{background:"#4267B2","& svg":{color:"#fff"}}}),P=Object(n.a)(o.a)({padding:8,background:"rgba(29, 161, 242, 0.2)","& svg":{color:"#1DA1F2"},"&:hover":{background:"#1DA1F2","& svg":{color:"#fff"}}}),_=Object(n.a)(o.a)({padding:8,background:"rgba(14, 118, 168, 0.12)","& svg":{color:"#0E76A8"},"&:hover":{background:"#0E76A8","& svg":{color:"#fff"}}});t.a=function(e){var t=e.avatar,a=e.name,n=e.status,o=Object(i.a)(),v=t&&C("./".concat(t)).default,m=Object(c.useState)(null),x=Object(r.a)(m,2),k=x[0],S=x[1],W=function(){S(null)};return Object(w.jsx)(s.a,{sx:{p:2,background:"dark"===o.palette.mode?o.palette.dark.main:o.palette.grey[50],border:"1px solid",borderColor:"dark"===o.palette.mode?"transparent":o.palette.grey[100],"&:hover":{border:"1px solid".concat(o.palette.primary.main)}},children:Object(w.jsxs)(l.a,{container:!0,spacing:O.c,children:[Object(w.jsx)(l.a,{item:!0,xs:12,children:Object(w.jsxs)(l.a,{container:!0,spacing:O.c,children:[Object(w.jsx)(l.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(w.jsx)(f.a,{alt:a,src:v,sx:{width:72,height:72}})}),Object(w.jsxs)(l.a,{item:!0,children:[Object(w.jsx)(d.a,{size:"small",sx:{mt:-.75,mr:-.75},onClick:function(e){S(e.currentTarget)},children:Object(w.jsx)(h.a,{fontSize:"small",color:"inherit","aria-controls":"menu-friend-card","aria-haspopup":"true",sx:{opacity:.6}})}),Object(w.jsxs)(u.a,{id:"menu-simple-card",anchorEl:k,keepMounted:!0,open:Boolean(k),onClose:W,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(w.jsx)(b.a,{onClick:W,children:"Edit"}),Object(w.jsx)(b.a,{onClick:W,children:"Delete"})]})]})]})}),Object(w.jsx)(l.a,{item:!0,xs:12,alignItems:"center",children:Object(w.jsxs)(l.a,{container:!0,spacing:O.c,children:[Object(w.jsx)(l.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(w.jsx)(j.a,{variant:"h4",children:a})}),Object(w.jsx)(l.a,{item:!0,children:"Active"===n?Object(w.jsx)(p.a,{label:"Active",size:"small",sx:{bgcolor:"dark"===o.palette.mode?o.palette.dark.dark:"success.light",color:"success.dark"}}):Object(w.jsx)(p.a,{label:"Rejected",size:"small",sx:{bgcolor:"dark"===o.palette.mode?o.palette.dark.dark:"error.light",color:"error.dark"}})})]})}),Object(w.jsx)(l.a,{item:!0,xs:12,children:Object(w.jsxs)(l.a,{container:!0,spacing:2,children:[Object(w.jsx)(l.a,{item:!0,xs:4,children:Object(w.jsx)(z,{fullWidth:!0,children:Object(w.jsx)(g.a,{fontSize:"small"})})}),Object(w.jsx)(l.a,{item:!0,xs:4,children:Object(w.jsx)(P,{fullWidth:!0,children:Object(w.jsx)(y.a,{fontSize:"small"})})}),Object(w.jsx)(l.a,{item:!0,xs:4,children:Object(w.jsx)(_,{fullWidth:!0,children:Object(w.jsx)(M.a,{fontSize:"small"})})})]})})]})})}},1868:function(e,t,a){"use strict";a.r(t);var r=a(7),c=a(5),n=a(14),i=a(2),o=a.n(i),s=a(0),l=a.n(s),d=a(43),u=a(243),b=a(84),j=a(712),p=a(714),f=a(1952),O=a(719),v=a(426),h=a(806),m=a(1187),g=a(152),x=a(58),y=a(9),k=a(304),M=a(18),w=a(947),C=a.n(w),z=a(1);t.default=function(){var e=Object(d.a)(),t=Object(y.d)(),a=l.a.useState([]),i=Object(n.a)(a,2),s=i[0],w=i[1],P=Object(y.e)((function(e){return e.user})).simpleCards,_=l.a.useState(null),S=Object(n.a)(_,2),W=S[0],I=S[1],V=function(){I(null)};l.a.useEffect((function(){w(P)}),[P]),l.a.useEffect((function(){t(Object(k.r)())}),[]);var D=l.a.useState(""),R=Object(n.a)(D,2),B=R[0],A=R[1],E=function(){var e=Object(c.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=null===a||void 0===a?void 0:a.target.value,A(r),t(r?Object(k.j)(r):Object(k.r)());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(z.jsx)(z.Fragment,{});return s&&(F=s.map((function(e,t){return Object(z.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(z.jsx)(m.a,Object(r.a)({},e))},t)}))),Object(z.jsx)(g.a,{title:Object(z.jsxs)(u.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:x.c,children:[Object(z.jsx)(u.a,{item:!0,children:Object(z.jsx)(b.a,{variant:"h3",children:"Cards"})}),Object(z.jsx)(u.a,{item:!0,children:Object(z.jsx)(j.a,{id:"input-search-card-style2",placeholder:"Search",value:B,onChange:E,startAdornment:Object(z.jsx)(p.a,{position:"start",children:Object(z.jsx)(M.mb,{stroke:1.5,size:"16px"})}),size:"small"})})]}),children:Object(z.jsxs)(u.a,{container:!0,direction:"row",spacing:x.c,children:[F,Object(z.jsx)(u.a,{item:!0,xs:12,children:Object(z.jsxs)(u.a,{container:!0,justifyContent:"space-between",spacing:x.c,children:[Object(z.jsx)(u.a,{item:!0,children:Object(z.jsx)(f.a,{count:10,color:"primary"})}),Object(z.jsxs)(u.a,{item:!0,children:[Object(z.jsx)(O.a,{variant:"text",size:"large",sx:{color:e.palette.grey[900]},color:"secondary",endIcon:Object(z.jsx)(C.a,{}),onClick:function(e){I(e.currentTarget)},children:"10 Rows"}),Object(z.jsxs)(v.a,{id:"menu-user-card-style2",anchorEl:W,keepMounted:!0,open:Boolean(W),onClose:V,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[Object(z.jsx)(h.a,{onClick:V,children:" 10 Rows"}),Object(z.jsx)(h.a,{onClick:V,children:" 20 Rows"}),Object(z.jsx)(h.a,{onClick:V,children:" 30 Rows "})]})]})]})})]})})}},801:function(e,t,a){"use strict";var r=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(48)),n=a(1),i=(0,c.default)((0,n.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHorizOutlined");t.default=i},806:function(e,t,a){"use strict";var r=a(4),c=a(10),n=a(3),i=a(0),o=a(11),s=a(110),l=a(82),d=a(8),u=a(15),b=a(65),j=a(636),p=a(88),f=a(27),O=a(401),v=a(405),h=a(240),m=a(78),g=a(83);function x(e){return Object(m.a)("MuiMenuItem",e)}var y=Object(g.a)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),k=a(1),M=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],w=Object(d.a)(j.a,{shouldForwardProp:function(e){return Object(d.b)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,c=e.ownerState;return Object(n.a)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!c.disableGutters&&{paddingLeft:16,paddingRight:16},c.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},Object(r.a)(t,"&.".concat(y.selected),Object(r.a)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),Object(r.a)(t,"&.".concat(y.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):Object(l.a)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),Object(r.a)(t,"&.".concat(y.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),Object(r.a)(t,"&.".concat(y.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),Object(r.a)(t,"& + .".concat(O.a.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),Object(r.a)(t,"& + .".concat(O.a.inset),{marginLeft:52}),Object(r.a)(t,"& .".concat(h.a.root),{marginTop:0,marginBottom:0}),Object(r.a)(t,"& .".concat(h.a.inset),{paddingLeft:36}),Object(r.a)(t,"& .".concat(v.a.root),{minWidth:36}),t),!c.dense&&Object(r.a)({},a.breakpoints.up("sm"),{minHeight:"auto"}),c.dense&&Object(n.a)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,Object(r.a)({},"& .".concat(v.a.root," svg"),{fontSize:"1.25rem"})))})),C=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiMenuItem"}),r=a.autoFocus,l=void 0!==r&&r,d=a.component,j=void 0===d?"li":d,O=a.dense,v=void 0!==O&&O,h=a.divider,m=void 0!==h&&h,g=a.disableGutters,y=void 0!==g&&g,C=a.focusVisibleClassName,z=a.role,P=void 0===z?"menuitem":z,_=a.tabIndex,S=Object(c.a)(a,M),W=i.useContext(b.a),I={dense:v||W.dense||!1,disableGutters:y},V=i.useRef(null);Object(p.a)((function(){l&&V.current&&V.current.focus()}),[l]);var D,R=Object(n.a)({},a,{dense:I.dense,divider:m,disableGutters:y}),B=function(e){var t=e.disabled,a=e.dense,r=e.divider,c=e.disableGutters,i=e.selected,o=e.classes,l={root:["root",a&&"dense",t&&"disabled",!c&&"gutters",r&&"divider",i&&"selected"]},d=Object(s.a)(l,x,o);return Object(n.a)({},o,d)}(a),A=Object(f.a)(V,t);return a.disabled||(D=void 0!==_?_:-1),Object(k.jsx)(b.a.Provider,{value:I,children:Object(k.jsx)(w,Object(n.a)({ref:A,role:P,tabIndex:D,component:j,focusVisibleClassName:Object(o.default)(B.focusVisible,C)},S,{ownerState:R,classes:B}))})}));t.a=C},828:function(e,t,a){"use strict";var r=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var o=c?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}r.default=e,a&&a.set(e,r)}(a(0));var c=r(a(48)),n=a(1);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var o=(0,c.default)((0,n.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");t.default=o},829:function(e,t,a){"use strict";var r=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var o=c?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}r.default=e,a&&a.set(e,r)}(a(0));var c=r(a(48)),n=a(1);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var o=(0,c.default)((0,n.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.default=o},852:function(e,t,a){"use strict";var r=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var o=c?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}r.default=e,a&&a.set(e,r)}(a(0));var c=r(a(48)),n=a(1);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}var o=(0,c.default)((0,n.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=o},947:function(e,t,a){"use strict";var r=a(44);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(48)),n=a(1),i=(0,c.default)((0,n.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"}),"ExpandMoreRounded");t.default=i}}]);
//# sourceMappingURL=122.adf5120f.chunk.js.map