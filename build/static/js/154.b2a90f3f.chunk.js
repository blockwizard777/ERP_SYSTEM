(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[154],{1022:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c(14),a=c(3),r=c(10),i=c(0),s=["getTrigger","target"];function l(e,t){var c=t.disableHysteresis,n=void 0!==c&&c,a=t.threshold,r=void 0===a?100:a,i=t.target,s=e.current;return i&&(e.current=void 0!==i.pageYOffset?i.pageYOffset:i.scrollTop),!(!n&&void 0!==s&&e.current<s)&&e.current>r}var o="undefined"!==typeof window?window:null;function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,c=void 0===t?l:t,j=e.target,x=void 0===j?o:j,d=Object(r.a)(e,s),b=i.useRef(),m=i.useState((function(){return c(b,d)})),h=Object(n.a)(m,2),O=h[0],u=h[1];return i.useEffect((function(){var e=function(){u(c(b,Object(a.a)({target:x},d)))};return e(),x.addEventListener("scroll",e),function(){x.removeEventListener("scroll",e)}}),[x,c,JSON.stringify(d)]),O}},2e3:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c(43),r=c(243),i=c(730),s=c(84),l=c(719),o=c(288),j=c(432),x=c(713),d=c(724),b=c(729),m=c(732),h=c(790),O=c(152),u=c(929),g=c(0),p=c.n(g),f=c(683),v=c(1022),y=c(9);var k=function(e){var t=e.children,c=e.window,n=Object(a.a)(),r=Object(f.a)(n.breakpoints.down("lg")),i=Object(y.e)((function(e){return e.menu})).drawerOpen,s=r?80:83,l=r?38:41,o=r?38:i?281:42,j=Object(v.a)({disableHysteresis:!0,threshold:180,target:c||void 0}),x="dark"===n.palette.mode?n.palette.dark.dark:n.palette.grey[200];return p.a.cloneElement(t,{style:{backgroundColor:n.palette.background.default,zIndex:1099,borderTop:j?"1px solid":"none",borderBottom:j?"1px solid":"none",borderColor:j?x:"",position:j?"fixed":"relative",top:j?s:"auto",right:j?l:"auto",left:j?o:"auto"}})},z=c(58),P=c(18),w=c(1);t.default=function(e){var t=Object.assign({},e),c=Object(a.a)();return Object(w.jsx)(r.a,{container:!0,spacing:z.c,children:Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsxs)(O.a,{title:"Top & Bottom Actions Bars",content:!1,children:[Object(w.jsx)(k,Object(n.a)(Object(n.a)({},t),{},{children:Object(w.jsx)(i.a,{children:Object(w.jsxs)(r.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:2,children:[Object(w.jsx)(r.a,{item:!0,children:Object(w.jsx)(s.a,{variant:"h5",sx:{m:0},children:"Sticky Action Bar:"})}),Object(w.jsx)(r.a,{item:!0,children:Object(w.jsxs)(r.a,{container:!0,alignItems:"center",justifyContent:"flex-end",spacing:2,children:[Object(w.jsx)(r.a,{item:!0,children:Object(w.jsx)(l.a,{variant:"contained",color:"secondary",children:"Submit"})}),Object(w.jsx)(r.a,{item:!0,children:Object(w.jsx)(l.a,{variant:"contained",children:"Clear"})})]})})]})})})),Object(w.jsx)(o.a,{}),Object(w.jsx)(j.a,{children:Object(w.jsxs)(r.a,{container:!0,spacing:3,alignItems:"center",children:[Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",children:[Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(x.a,{variant:"rounded",color:"inherit",sx:{bgcolor:c.palette.secondary.main,ml:"auto"},children:Object(w.jsx)(P.H,{color:"#fff"})})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(s.a,{variant:"h3",sx:{mb:0},children:"Personal Information"}),Object(w.jsx)(s.a,{variant:"body2",sx:{mb:2},children:"Sticky Action Bar Lorem Ipsum is simply"})]})]})}),Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsx)(o.a,{})}),Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",children:[Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:9,lg:6,children:Object(w.jsx)(s.a,{variant:"h5",component:"div",sx:{mb:3},children:"A. Personal Info:"})}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Name :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(d.a,{fullWidth:!0,placeholder:"Enter full name"}),Object(w.jsx)(b.a,{children:"Please enter your full name"})]}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Email :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(d.a,{fullWidth:!0,placeholder:"Enter email"}),Object(w.jsx)(b.a,{children:"Please enter your Email"})]}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Password :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(d.a,{fullWidth:!0,placeholder:"Enter Password"}),Object(w.jsx)(b.a,{children:"Please enter your Password"})]})]})}),Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsx)(o.a,{})}),Object(w.jsx)(r.a,{item:!0,xs:12,children:Object(w.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",children:[Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:9,lg:6,children:Object(w.jsx)(s.a,{variant:"h5",component:"div",sx:{mb:3},children:"B. Educational Info:"})}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Degree Name :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(d.a,{fullWidth:!0,placeholder:"Enter Degree name"}),Object(w.jsx)(b.a,{children:"Please enter your Degree name"})]}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Passing Year :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(d.a,{fullWidth:!0,placeholder:"Enter Passing Year"}),Object(w.jsx)(b.a,{children:"Please enter Passing Year"})]}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"College Name :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(d.a,{fullWidth:!0,placeholder:"Enter College name"}),Object(w.jsx)(b.a,{children:"Please enter your College name"})]}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"0 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Work Experience :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(d.a,{fullWidth:!0,placeholder:"Enter Work Experience"}),Object(w.jsx)(b.a,{children:"Please enter your Work Experience"})]}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"1 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Language :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(m.a,{control:Object(w.jsx)(h.a,{defaultChecked:!0}),label:"English"}),Object(w.jsx)(m.a,{control:Object(w.jsx)(h.a,{}),label:"French"}),Object(w.jsx)(m.a,{control:Object(w.jsx)(h.a,{}),label:"Dutch"})]}),Object(w.jsx)(r.a,{item:!0,xs:12,sm:3,lg:4,sx:{pt:{xs:2,sm:"1 !important"}},children:Object(w.jsx)(u.a,{horizontal:!0,sx:{textAlign:{xs:"left",sm:"right"}},children:"Hobby :"})}),Object(w.jsxs)(r.a,{item:!0,xs:12,sm:9,lg:6,children:[Object(w.jsx)(m.a,{control:Object(w.jsx)(h.a,{}),label:"Reading"}),Object(w.jsx)(m.a,{control:Object(w.jsx)(h.a,{}),label:"Dancing"}),Object(w.jsx)(m.a,{control:Object(w.jsx)(h.a,{}),label:"Swimming"})]})]})})]})}),Object(w.jsx)(o.a,{}),Object(w.jsx)(i.a,{children:Object(w.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",children:[Object(w.jsx)(r.a,{item:!0,xs:12,lg:4}),Object(w.jsx)(r.a,{item:!0,xs:12,lg:6,children:Object(w.jsxs)(r.a,{container:!0,alignItems:"center",spacing:2,children:[Object(w.jsx)(r.a,{item:!0,children:Object(w.jsx)(l.a,{variant:"contained",color:"secondary",children:"Submit"})}),Object(w.jsx)(r.a,{item:!0,children:Object(w.jsx)(l.a,{variant:"contained",children:"Clear"})})]})})]})})]})})})}},790:function(e,t,c){"use strict";var n=c(4),a=c(10),r=c(3),i=c(0),s=c(110),l=c(82),o=c(200),j=c(46),x=c(1),d=Object(j.a)(Object(x.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(j.a)(Object(x.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=Object(j.a)(Object(x.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=c(12),O=c(15),u=c(8),g=c(78),p=c(83);function f(e){return Object(g.a)("MuiCheckbox",e)}var v=Object(p.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),y=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=Object(u.a)(o.a,{shouldForwardProp:function(e){return Object(u.b)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,c.indeterminate&&t.indeterminate,"default"!==c.color&&t["color".concat(Object(h.a)(c.color))]]}})((function(e){var t,c=e.theme,a=e.ownerState;return Object(r.a)({color:c.palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:Object(l.a)("default"===a.color?c.palette.action.active:c.palette[a.color].main,c.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},Object(n.a)(t,"&.".concat(v.checked,", &.").concat(v.indeterminate),{color:c.palette[a.color].main}),Object(n.a)(t,"&.".concat(v.disabled),{color:c.palette.action.disabled}),t))})),z=Object(x.jsx)(b,{}),P=Object(x.jsx)(d,{}),w=Object(x.jsx)(m,{}),E=i.forwardRef((function(e,t){var c,n,l=Object(O.a)({props:e,name:"MuiCheckbox"}),o=l.checkedIcon,j=void 0===o?z:o,d=l.color,b=void 0===d?"primary":d,m=l.icon,u=void 0===m?P:m,g=l.indeterminate,p=void 0!==g&&g,v=l.indeterminateIcon,E=void 0===v?w:v,C=l.inputProps,I=l.size,S=void 0===I?"medium":I,A=Object(a.a)(l,y),B=p?E:u,W=p?E:j,H=Object(r.a)({},l,{color:b,indeterminate:p,size:S}),M=function(e){var t=e.classes,c=e.indeterminate,n=e.color,a={root:["root",c&&"indeterminate","color".concat(Object(h.a)(n))]},i=Object(s.a)(a,f,t);return Object(r.a)({},t,i)}(H);return Object(x.jsx)(k,Object(r.a)({type:"checkbox",inputProps:Object(r.a)({"data-indeterminate":p},C),icon:i.cloneElement(B,{fontSize:null!=(c=B.props.fontSize)?c:S}),checkedIcon:i.cloneElement(W,{fontSize:null!=(n=W.props.fontSize)?n:S}),ownerState:H,ref:t},A,{classes:M}))}));t.a=E},929:function(e,t,c){"use strict";var n=c(86),a=c(7),r=c(8),i=c(726),s=c(1),l=["children","horizontal"],o=Object(r.a)((function(e){return Object(s.jsx)(i.a,Object(a.a)({},e))}),{shouldForwardProp:function(e){return"horizontal"!==e}})((function(e){var t=e.theme,c=e.horizontal;return{color:t.palette.text.primary,fontWeight:500,marginBottom:c?0:8}})),j=function(e){var t=e.children,c=e.horizontal,r=Object(n.a)(e,l);return Object(s.jsx)(o,Object(a.a)(Object(a.a)({horizontal:c},r),{},{children:t}))};j.defaultProps={horizontal:!1},t.a=j}}]);
//# sourceMappingURL=154.b2a90f3f.chunk.js.map