(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[196],{1998:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(14),i=n(2),r=n.n(i),s=n(0),o=n(243),j=n(712),l=n(714),d=n(719),b=n(84),x=n(111),h=n(1340),O=n(1343),m=n(4),p=n(8),u=n(43),f=n(697),g=n(738),v=n(58),y=n(823),k=n.n(y),w=n(1096),C=n.n(w),S=n(1),z=n(814),W=Object(p.a)("div")((function(e){var t=e.theme;return{padding:"15px 0",borderBottom:"dark"===t.palette.mode?"none":"1px solid",borderTop:"dark"===t.palette.mode?"none":"1px solid",borderColor:"".concat(t.palette.grey[100],"!important")}})),I=function(e){var t=e.avatar,n=e.name,c=e.role,a=e.onActive,i=Object(u.a)(),r=t&&z("./".concat(t)).default;return Object(S.jsx)(W,{children:Object(S.jsxs)(o.a,{container:!0,alignItems:"center",spacing:v.c,children:[Object(S.jsx)(o.a,{item:!0,xs:12,sm:6,onClick:function(){return a&&a()},style:{cursor:"pointer"},children:Object(S.jsxs)(o.a,{container:!0,alignItems:"center",spacing:v.c,sx:{flexWrap:"nowrap"},children:[Object(S.jsx)(o.a,{item:!0,children:Object(S.jsx)(g.a,{alt:n,src:r,sx:{width:48,height:48}})}),Object(S.jsx)(o.a,{item:!0,sm:!0,zeroMinWidth:!0,children:Object(S.jsxs)(o.a,{container:!0,spacing:0,children:[Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(b.a,{variant:"h4",component:"div",children:n})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(b.a,{variant:"caption",children:c})})]})})]})}),Object(S.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(S.jsxs)(o.a,{container:!0,spacing:1,sx:Object(m.a)({justifyContent:"flex-end"},i.breakpoints.down("md"),{justifyContent:"flex-start"}),children:[Object(S.jsx)(o.a,{item:!0,children:Object(S.jsx)(f.a,{placement:"top",title:"Message",children:Object(S.jsx)(d.a,{variant:"outlined",sx:{minWidth:32,height:32,p:0},children:Object(S.jsx)(k.a,{fontSize:"small"})})})}),Object(S.jsx)(o.a,{item:!0,children:Object(S.jsx)(f.a,{placement:"top",title:"Call",children:Object(S.jsx)(d.a,{variant:"outlined",color:"secondary",sx:{minWidth:32,height:32,p:0},children:Object(S.jsx)(C.a,{fontSize:"small"})})})})]})})]})})},A=n(152),M=n(297),_=n(9),E=n(319),U=n(18),J=n(1344),T=n.n(J);t.default=function(){var e=Object(_.d)(),t=Object(s.useState)({}),n=Object(a.a)(t,2),i=n[0],m=n[1],p=Object(s.useState)({}),u=Object(a.a)(p,2),f=u[0],g=u[1],y=Object(_.e)((function(e){return e.contact})).contacts;Object(s.useEffect)((function(){if(g(y.reduce((function(e,t){var n=t.name[0].toUpperCase();return Object.prototype.hasOwnProperty.call(e,n)?e[n].push(t):e[n]=[t],e}),{})),!Object(x.isEmpty)(i)){var e=y.findIndex((function(e){return e.id===i.id}));e>-1&&m(y[e])}}),[y,i]),Object(s.useEffect)((function(){e(Object(E.b)())}),[]);var k=function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(E.c)(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=Object(s.useState)(!1),C=Object(a.a)(w,2),z=C[0],W=C[1],J=Object(s.useState)(!1),B=Object(a.a)(J,2),F=B[0],L=B[1];return Object(S.jsx)(A.a,{title:"Contact List",children:Object(S.jsxs)(o.a,{container:!0,spacing:v.c,children:[Object(S.jsx)(o.a,{item:!0,xs:!0,zeroMinWidth:!0,sx:{display:z||F?{xs:"none",md:"block"}:"block"},children:Object(S.jsxs)(o.a,{container:!0,alignItems:"center",spacing:v.c,children:[Object(S.jsx)(o.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(S.jsx)(j.a,{id:"input-search-card-style1",placeholder:"Search Contact",fullWidth:!0,startAdornment:Object(S.jsx)(l.a,{position:"start",children:Object(S.jsx)(U.mb,{stroke:1.5,size:"16px"})})})}),Object(S.jsx)(o.a,{item:!0,children:Object(S.jsx)(d.a,{variant:"contained",size:"large",startIcon:Object(S.jsx)(T.a,{}),sx:{px:2.75,py:1.5},onClick:function(){m({name:"",company:"",role:"",work_email:"",personal_email:"",work_phone:"",personal_phone:"",location:"USA",image:M.default,status:"I am online",lastMessage:"2h ago",birthdayText:""}),W(!1),L(!0)},children:"Add"})}),Object.keys(f).map((function(e,t){return Object(S.jsxs)(s.Fragment,{children:[Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(b.a,{variant:"h4",color:"primary",sx:{fontSize:"1rem"},children:e.toUpperCase()})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(o.a,{container:!0,direction:"row",spacing:0,children:f[e].map((function(e,t){return Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(I,{avatar:e.avatar,name:e.name,role:e.role,email:e.work_email,contact:e.phone,location:e.location,onActive:function(){m(e),W(!0),L(!1)}})},t)}))})})]},t)}))]})}),z&&Object(S.jsx)(o.a,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:Object(S.jsx)(h.a,{user:i,onEditClick:function(){W(!1),L(!0)},onClose:function(){W(!1),L(!1)}})}),F&&Object(S.jsx)(o.a,{item:!0,sx:{width:342,margin:{xs:"0 auto",md:"initial"}},children:Object(S.jsx)(O.a,{user:i,onSave:function(e){e.id&&W(!0),L(!1),k(e)},onCancel:function(e){e.id&&W(!0),L(!1)}})})]})})}}}]);
//# sourceMappingURL=196.add17383.chunk.js.map