(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[119],{1088:function(e,t,a){"use strict";var n=a(292),i=a(432),c=a(243),r=a(1115),s=a(1);t.a=function(){return Object(s.jsx)(n.a,{children:Object(s.jsx)(i.a,{children:Object(s.jsxs)(c.a,{container:!0,direction:"column",children:[Object(s.jsx)(c.a,{item:!0,children:Object(s.jsxs)(c.a,{container:!0,justifyContent:"space-between",children:[Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",width:44,height:44})}),Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",width:34,height:34})})]})}),Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",sx:{my:2},height:40})}),Object(s.jsx)(c.a,{item:!0,children:Object(s.jsx)(r.a,{variant:"rectangular",height:30})})]})})})}},1089:function(e,t,a){"use strict";var n=a(292),i=a(715),c=a(721),r=a(723),s=a(1115),j=a(686),h=a(1);t.a=function(){return Object(h.jsx)(n.a,{sx:{p:2},children:Object(h.jsx)(i.a,{sx:{py:0},children:Object(h.jsxs)(c.a,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[Object(h.jsx)(r.a,{children:Object(h.jsx)(s.a,{variant:"rectangular",width:44,height:44})}),Object(h.jsx)(j.a,{sx:{py:0},primary:Object(h.jsx)(s.a,{variant:"rectangular",height:20}),secondary:Object(h.jsx)(s.a,{variant:"text"})})]})})})}},1115:function(e,t,a){"use strict";var n=a(93),i=a(10),c=a(3),r=a(0),s=a(11),j=a(72),h=a(110);a(4);function l(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function b(e){return parseFloat(e)}var o=a(82),x=a(8),d=a(15),O=a(78),g=a(83);function m(e){return Object(O.a)("MuiSkeleton",e)}Object(g.a)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var u,p,f,v,w,y,C,k,M=a(1),L=["animation","className","component","height","style","variant","width"],I=Object(j.c)(w||(w=u||(u=Object(n.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),V=Object(j.c)(y||(y=p||(p=Object(n.a)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),S=Object(x.a)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})((function(e){var t=e.theme,a=e.ownerState,n=l(t.shape.borderRadius)||"px",i=b(t.shape.borderRadius);return Object(c.a)({display:"block",backgroundColor:Object(o.a)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(n,"/").concat(Math.round(i/.6*10)/10).concat(n),"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&Object(j.b)(C||(C=f||(f=Object(n.a)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),I)}),(function(e){var t=e.ownerState,a=e.theme;return"wave"===t.animation&&Object(j.b)(k||(k=v||(v=Object(n.a)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),V,a.palette.action.hover)})),z=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiSkeleton"}),n=a.animation,r=void 0===n?"pulse":n,j=a.className,l=a.component,b=void 0===l?"span":l,o=a.height,x=a.style,O=a.variant,g=void 0===O?"text":O,u=a.width,p=Object(i.a)(a,L),f=Object(c.a)({},a,{animation:r,component:b,variant:g,hasChildren:Boolean(p.children)}),v=function(e){var t=e.classes,a=e.variant,n=e.animation,i=e.hasChildren,c=e.width,r=e.height,s={root:["root",a,n,i&&"withChildren",i&&!c&&"fitContent",i&&!r&&"heightAuto"]};return Object(h.a)(s,m,t)}(f);return Object(M.jsx)(S,Object(c.a)({as:b,ref:t,className:Object(s.default)(v.root,j),ownerState:f},p,{style:Object(c.a)({width:u,height:o},x)}))}));t.a=z},1162:function(e,t,a){"use strict";var n=a(292),i=a(432),c=a(243),r=a(1115),s=a(58),j=a(1);t.a=function(){return Object(j.jsxs)(n.a,{children:[Object(j.jsx)(i.a,{children:Object(j.jsxs)(c.a,{container:!0,spacing:s.c,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:s.c,children:[Object(j.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20,width:20})})]})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsx)(r.a,{variant:"rectangular",height:150})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,spacing:1,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,spacing:1,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,spacing:1,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,spacing:1,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,spacing:1,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",spacing:s.c,justifyContent:"space-between",children:[Object(j.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})}),Object(j.jsx)(c.a,{item:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(j.jsx)(c.a,{item:!0,xs:6,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})})]})})]})}),Object(j.jsx)(i.a,{sx:{p:1.25,display:"flex",pt:0,justifyContent:"center"},children:Object(j.jsx)(r.a,{variant:"rectangular",height:25,width:75})})]})}},1165:function(e,t,a){"use strict";var n=a(292),i=a(432),c=a(243),r=a(1115),s=a(58),j=a(1);t.a=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)(c.a,{container:!0,spacing:s.c,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:s.c,children:[Object(j.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(j.jsxs)(c.a,{container:!0,spacing:1,children:[Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsx)(r.a,{variant:"text"})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsx)(r.a,{variant:"rectangular",height:20})})]})}),Object(j.jsx)(c.a,{item:!0,children:Object(j.jsx)(r.a,{variant:"rectangular",height:50,width:80})})]})}),Object(j.jsx)(c.a,{item:!0,xs:12,children:Object(j.jsx)(r.a,{variant:"rectangular",height:530})})]})})})}},1900:function(e,t,a){"use strict";a.r(t);var n=a(243),i=a(87),c=a(152),r=a(740),s=a(1088),j=a(1089),h=a(1165),l=a(1162),b=a(58),o=a(1);t.default=function(){return Object(o.jsx)(c.a,{title:"Skeleton",secondary:Object(o.jsx)(r.a,{link:"https://next.material-ui.com/components/skeleton/"}),children:Object(o.jsxs)(n.a,{container:!0,spacing:b.c,children:[Object(o.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(i.a,{title:"Example  1",children:Object(o.jsx)(s.a,{})})}),Object(o.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(i.a,{title:"Example 2",children:Object(o.jsxs)(n.a,{container:!0,spacing:b.c,children:[Object(o.jsx)(n.a,{item:!0,xs:12,children:Object(o.jsx)(j.a,{})}),Object(o.jsx)(n.a,{item:!0,xs:12,children:Object(o.jsx)(j.a,{})})]})})}),Object(o.jsx)(n.a,{item:!0,xs:12,sm:12,md:8,children:Object(o.jsx)(i.a,{title:"Example 3",children:Object(o.jsx)(h.a,{})})}),Object(o.jsx)(n.a,{item:!0,xs:12,sm:12,md:4,children:Object(o.jsx)(i.a,{title:"Example 4",children:Object(o.jsx)(l.a,{})})})]})})}},738:function(e,t,a){"use strict";var n=a(7),i=a(86),c=a(43),r=a(713),s=a(1),j=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,h=e.size,l=e.sx,b=Object(i.a)(e,j),o=Object(c.a)(),x=t&&!a&&{color:o.palette.background.paper,bgcolor:"".concat(t,".main")},d=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:o.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},O={};switch(h){case"badge":O={width:o.spacing(3.5),height:o.spacing(3.5)};break;case"xs":O={width:o.spacing(4.25),height:o.spacing(4.25)};break;case"sm":O={width:o.spacing(5),height:o.spacing(5)};break;case"lg":O={width:o.spacing(9),height:o.spacing(9)};break;case"xl":O={width:o.spacing(10.25),height:o.spacing(10.25)};break;case"md":O={width:o.spacing(7.5),height:o.spacing(7.5)};break;default:O={}}return Object(s.jsx)(r.a,Object(n.a)({sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},x),d),O),l)},b))}},740:function(e,t,a){"use strict";var n=a(43),i=a(697),c=a(636),r=a(711),s=a(738),j=a(1);t.a=function(e){var t=e.title,a=e.link,h=e.icon,l=Object(n.a)();return Object(j.jsx)(i.a,{title:t||"Reference",placement:"left",children:Object(j.jsxs)(c.a,{disableRipple:!0,children:[!h&&Object(j.jsx)(s.a,{component:r.a,href:a,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(j.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(j.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:l.palette.primary[800]}),Object(j.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:l.palette.primary.main}),Object(j.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:l.palette.primary[800]}),Object(j.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:l.palette.primary.main})]}),Object(j.jsx)("defs",{children:Object(j.jsx)("clipPath",{id:"clip0",children:Object(j.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),h&&Object(j.jsx)(s.a,{component:r.a,href:a,target:"_blank",size:"badge",color:"primary",outline:!0,children:h})]})})}}}]);
//# sourceMappingURL=119.a864a549.chunk.js.map