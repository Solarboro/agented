"use strict";(self.webpackChunkagented=self.webpackChunkagented||[]).push([[527],{5527:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var o=n(9439),a=n(7257),r=n(2791),i=n(3144),l=n(5671),c=n(4098),s=n(3760),d=new((0,i.Z)((function e(){var t=this;(0,l.Z)(this,e),this.data=[],this.retrieveAll=function(){s.Z.get("/yun/provider").then((function(e){return t.data=e.data})).catch(console.log)},(0,c.ky)(this)}))),u=n(7309),f=n(4942),m=n(1694),p=n.n(m),v=n(1413),h=n(2925),x=n(1605),g=n(7462),b=n(8568);var y=function(e){var t=e.prefixCls,n=e.className,o=e.style,a=e.children,i=e.containerRef;return r.createElement(r.Fragment,null,r.createElement("div",{className:p()("".concat(t,"-content"),n),style:(0,v.Z)({},o),"aria-modal":"true",role:"dialog",ref:i},a))},Z=r.createContext(null),w=n(1354),C=n(632);function k(e){return"string"===typeof e&&String(Number(e))===e?((0,C.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var S={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function E(e,t){var n,a,i,l,c=e.prefixCls,s=e.open,d=e.placement,u=e.inline,m=e.push,h=e.forceRender,x=e.autoFocus,C=e.keyboard,E=e.rootClassName,N=e.rootStyle,I=e.zIndex,D=e.className,j=e.style,O=e.motion,P=e.width,R=e.height,z=e.children,L=e.contentWrapperStyle,X=e.mask,Y=e.maskClosable,B=e.maskMotion,M=e.maskClassName,W=e.maskStyle,_=e.afterOpenChange,H=e.onClose,A=r.useRef(),T=r.useRef(),F=r.useRef();r.useImperativeHandle(t,(function(){return A.current}));r.useEffect((function(){var e;s&&x&&(null===(e=A.current)||void 0===e||e.focus({preventScroll:!0}))}),[s]);var U=r.useState(!1),G=(0,o.Z)(U,2),V=G[0],K=G[1],q=r.useContext(Z),J=null!==(n=null!==(a=null===(i=!1===m?{distance:0}:!0===m?{}:m||{})||void 0===i?void 0:i.distance)&&void 0!==a?a:null===q||void 0===q?void 0:q.pushDistance)&&void 0!==n?n:180,Q=r.useMemo((function(){return{pushDistance:J,push:function(){K(!0)},pull:function(){K(!1)}}}),[J]);r.useEffect((function(){var e,t;s?null===q||void 0===q||null===(e=q.push)||void 0===e||e.call(q):null===q||void 0===q||null===(t=q.pull)||void 0===t||t.call(q)}),[s]),r.useEffect((function(){return function(){var e;null===q||void 0===q||null===(e=q.pull)||void 0===e||e.call(q)}}),[]);var $=X&&r.createElement(b.ZP,(0,g.Z)({key:"mask"},B,{visible:s}),(function(e,t){var n=e.className,o=e.style;return r.createElement("div",{className:p()("".concat(c,"-mask"),n,M),style:(0,v.Z)((0,v.Z)({},o),W),onClick:Y&&s?H:void 0,ref:t})})),ee="function"===typeof O?O(d):O,te={};if(V&&J)switch(d){case"top":te.transform="translateY(".concat(J,"px)");break;case"bottom":te.transform="translateY(".concat(-J,"px)");break;case"left":te.transform="translateX(".concat(J,"px)");break;default:te.transform="translateX(".concat(-J,"px)")}"left"===d||"right"===d?te.width=k(P):te.height=k(R);var ne=r.createElement(b.ZP,(0,g.Z)({key:"panel"},ee,{visible:s,forceRender:h,onVisibleChanged:function(e){null===_||void 0===_||_(e)},removeOnLeave:!1,leavedClassName:"".concat(c,"-content-wrapper-hidden")}),(function(e,t){var n=e.className,o=e.style;return r.createElement("div",{className:p()("".concat(c,"-content-wrapper"),n),style:(0,v.Z)((0,v.Z)((0,v.Z)({},te),o),L)},r.createElement(y,{containerRef:t,prefixCls:c,className:D,style:j},z))})),oe=(0,v.Z)({},N);return I&&(oe.zIndex=I),r.createElement(Z.Provider,{value:Q},r.createElement("div",{className:p()(c,"".concat(c,"-").concat(d),E,(l={},(0,f.Z)(l,"".concat(c,"-open"),s),(0,f.Z)(l,"".concat(c,"-inline"),u),l)),style:oe,tabIndex:-1,ref:A,onKeyDown:function(e){var t=e.keyCode,n=e.shiftKey;switch(t){case w.Z.TAB:var o;if(t===w.Z.TAB)if(n||document.activeElement!==F.current){if(n&&document.activeElement===T.current){var a;null===(a=F.current)||void 0===a||a.focus({preventScroll:!0})}}else null===(o=T.current)||void 0===o||o.focus({preventScroll:!0});break;case w.Z.ESC:H&&C&&(e.stopPropagation(),H(e))}}},$,r.createElement("div",{tabIndex:0,ref:T,style:S,"aria-hidden":"true","data-sentinel":"start"}),ne,r.createElement("div",{tabIndex:0,ref:F,style:S,"aria-hidden":"true","data-sentinel":"end"})))}var N=r.forwardRef(E);var I=function(e){var t=e.open,n=void 0!==t&&t,a=e.prefixCls,i=void 0===a?"rc-drawer":a,l=e.placement,c=void 0===l?"right":l,s=e.autoFocus,d=void 0===s||s,u=e.keyboard,f=void 0===u||u,m=e.width,p=void 0===m?378:m,g=e.mask,b=void 0===g||g,y=e.maskClosable,Z=void 0===y||y,w=e.getContainer,C=e.forceRender,k=e.afterOpenChange,S=e.destroyOnClose,E=r.useState(!1),I=(0,o.Z)(E,2),D=I[0],j=I[1];var O=r.useState(!1),P=(0,o.Z)(O,2),R=P[0],z=P[1];(0,x.Z)((function(){z(!0)}),[]);var L=!!R&&n,X=r.useRef(),Y=r.useRef();(0,x.Z)((function(){L&&(Y.current=document.activeElement)}),[L]);if(!C&&!D&&!L&&S)return null;var B=(0,v.Z)((0,v.Z)({},e),{},{open:L,prefixCls:i,placement:c,autoFocus:d,keyboard:f,width:p,mask:b,maskClosable:Z,inline:!1===w,afterOpenChange:function(e){var t,n;(j(e),null===k||void 0===k||k(e),e||!Y.current||(null===(t=X.current)||void 0===t?void 0:t.contains(Y.current)))||(null===(n=Y.current)||void 0===n||n.focus())},ref:X});return r.createElement(h.Z,{open:L||C||D,autoDestroy:!1,getContainer:w,autoLock:b&&(L||D)},r.createElement(N,B))},D=n(1929),j=n(1940),O=n(9464),P=n(732),R=function(e){var t=e.prefixCls,n=e.title,o=e.footer,a=e.extra,i=e.closable,l=void 0===i||i,c=e.closeIcon,s=void 0===c?r.createElement(P.Z,null):c,d=e.onClose,u=e.headerStyle,m=e.drawerStyle,v=e.bodyStyle,h=e.footerStyle,x=e.children,g=l&&r.createElement("button",{type:"button",onClick:d,"aria-label":"Close",className:"".concat(t,"-close")},s),b=r.useMemo((function(){return n||l?r.createElement("div",{style:u,className:p()("".concat(t,"-header"),(0,f.Z)({},"".concat(t,"-header-close-only"),l&&!n&&!a))},r.createElement("div",{className:"".concat(t,"-header-title")},g,n&&r.createElement("div",{className:"".concat(t,"-title")},n)),a&&r.createElement("div",{className:"".concat(t,"-extra")},a)):null}),[l,g,a,u,t,n]),y=r.useMemo((function(){if(!o)return null;var e="".concat(t,"-footer");return r.createElement("div",{className:e,style:h},o)}),[o,h,t]);return r.createElement("div",{className:"".concat(t,"-wrapper-body"),style:m},b,r.createElement("div",{className:"".concat(t,"-body"),style:v},x),y)},z=n(5564),L=n(9922),X=function(e){var t,n=e.componentCls,o=e.motionDurationSlow,a={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(o)}}};return(0,f.Z)({},n,(t={},(0,f.Z)(t,"".concat(n,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(o)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),(0,f.Z)(t,"".concat(n,"-panel-motion"),{"&-left":[a,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[a,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[a,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[a,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),t))},Y=function(e){var t,n,o=e.componentCls,a=e.zIndexPopup,r=e.colorBgMask,i=e.colorBgElevated,l=e.motionDurationSlow,c=e.motionDurationMid,s=e.padding,d=e.paddingLG,u=e.fontSizeLG,m=e.lineHeightLG,p=e.lineWidth,v=e.lineType,h=e.colorSplit,x=e.marginSM,g=e.colorIcon,b=e.colorIconHover,y=e.colorText,Z=e.fontWeightStrong,w=e.footerPaddingBlock,C=e.footerPaddingInline,k="".concat(o,"-content-wrapper");return(0,f.Z)({},o,(n={position:"fixed",inset:0,zIndex:a,pointerEvents:"none","&-pure":(t={position:"relative",background:i},(0,f.Z)(t,"&".concat(o,"-left"),{boxShadow:e.boxShadowDrawerLeft}),(0,f.Z)(t,"&".concat(o,"-right"),{boxShadow:e.boxShadowDrawerRight}),(0,f.Z)(t,"&".concat(o,"-top"),{boxShadow:e.boxShadowDrawerUp}),(0,f.Z)(t,"&".concat(o,"-bottom"),{boxShadow:e.boxShadowDrawerDown}),t),"&-inline":{position:"absolute"}},(0,f.Z)(n,"".concat(o,"-mask"),{position:"absolute",inset:0,zIndex:a,background:r,pointerEvents:"auto"}),(0,f.Z)(n,k,{position:"absolute",zIndex:a,transition:"all ".concat(l),"&-hidden":{display:"none"}}),(0,f.Z)(n,"&-left > ".concat(k),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowDrawerLeft}),(0,f.Z)(n,"&-right > ".concat(k),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:e.boxShadowDrawerRight}),(0,f.Z)(n,"&-top > ".concat(k),{top:0,insetInline:0,boxShadow:e.boxShadowDrawerUp}),(0,f.Z)(n,"&-bottom > ".concat(k),{bottom:0,insetInline:0,boxShadow:e.boxShadowDrawerDown}),(0,f.Z)(n,"".concat(o,"-content"),{width:"100%",height:"100%",overflow:"auto",background:i,pointerEvents:"auto"}),(0,f.Z)(n,"".concat(o,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),(0,f.Z)(n,"".concat(o,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(s,"px ").concat(d,"px"),fontSize:u,lineHeight:m,borderBottom:"".concat(p,"px ").concat(v," ").concat(h),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),(0,f.Z)(n,"".concat(o,"-extra"),{flex:"none"}),(0,f.Z)(n,"".concat(o,"-close"),{display:"inline-block",marginInlineEnd:x,color:g,fontWeight:Z,fontSize:u,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(c),textRendering:"auto","&:focus, &:hover":{color:b,textDecoration:"none"}}),(0,f.Z)(n,"".concat(o,"-title"),{flex:1,margin:0,color:y,fontWeight:e.fontWeightStrong,fontSize:u,lineHeight:m}),(0,f.Z)(n,"".concat(o,"-body"),{flex:1,minWidth:0,minHeight:0,padding:d,overflow:"auto"}),(0,f.Z)(n,"".concat(o,"-footer"),{flexShrink:0,padding:"".concat(w,"px ").concat(C,"px"),borderTop:"".concat(p,"px ").concat(v," ").concat(h)}),(0,f.Z)(n,"&-rtl",{direction:"rtl"}),n))},B=(0,z.Z)("Drawer",(function(e){var t=(0,L.TS)(e,{});return[Y(t),X(t)]}),(function(e){return{zIndexPopup:e.zIndexPopupBase,footerPaddingBlock:e.paddingXS,footerPaddingInline:e.padding}})),M=n(11),W=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},_={distance:180};function H(e){var t=e.rootClassName,n=e.width,a=e.height,i=e.size,l=void 0===i?"default":i,c=e.mask,s=void 0===c||c,d=e.push,u=void 0===d?_:d,m=e.open,v=e.afterOpenChange,h=e.onClose,x=e.prefixCls,g=e.getContainer,b=e.visible,y=e.afterVisibleChange,Z=W(e,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","visible","afterVisibleChange"]),w=r.useContext(D.E_),C=w.getPopupContainer,k=w.getPrefixCls,S=w.direction,E=k("drawer",x),N=B(E),P=(0,o.Z)(N,2),z=P[0],L=P[1],X=void 0===g&&C?function(){return C(document.body)}:g,Y=p()((0,f.Z)({"no-mask":!s},"".concat(E,"-rtl"),"rtl"===S),t,L);var H=r.useMemo((function(){return null!==n&&void 0!==n?n:"large"===l?736:378}),[n,l]),A=r.useMemo((function(){return null!==a&&void 0!==a?a:"large"===l?736:378}),[a,l]),T={motionName:(0,O.mL)(E,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500};return z(r.createElement(M.BR,null,r.createElement(j.Ux,{status:!0,override:!0},r.createElement(I,Object.assign({prefixCls:E,onClose:h,maskMotion:T,motion:function(e){return{motionName:(0,O.mL)(E,"panel-motion-".concat(e)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}}},Z,{open:null!==m&&void 0!==m?m:b,mask:s,push:u,width:H,height:A,rootClassName:Y,getContainer:X,afterOpenChange:null!==v&&void 0!==v?v:y}),r.createElement(R,Object.assign({prefixCls:E},Z,{onClose:h}))))))}H._InternalPanelDoNotUseOrYouWillBeFired=function(e){var t=e.prefixCls,n=e.style,a=e.className,i=e.placement,l=void 0===i?"right":i,c=W(e,["prefixCls","style","className","placement"]),s=(0,r.useContext(D.E_).getPrefixCls)("drawer",t),d=B(s),u=(0,o.Z)(d,2),f=u[0],m=u[1];return f(r.createElement("div",{className:p()(s,"".concat(s,"-pure"),"".concat(s,"-").concat(l),m,a),style:n},r.createElement(R,Object.assign({prefixCls:s},c))))};var A=H,T=n(6473),F=n(3099),U=n(2339),G=n(184),V=(0,a.Pi)((function(){(0,r.useEffect)((function(){d.retrieveAll()}),[]);var e=(0,r.useState)(!1),t=(0,o.Z)(e,2),n=t[0],a=t[1];return(0,G.jsxs)("div",{children:[d.data.map((function(e){return(0,G.jsx)("div",{children:e.label},e.id)})),(0,G.jsx)(u.ZP,{onClick:function(){return d.data[0].label="9001"},children:"Change store value"}),(0,G.jsx)(u.ZP,{onClick:function(){return a(!0)},children:"Open"}),(0,G.jsx)(A,{placement:"bottom",closable:!1,onClose:function(){return a(!1)},open:n,getContainer:!1,children:"content"}),(0,G.jsx)(T.Z,{bordered:!1,title:"\u5ba2\u5355\u5904\u7406",extra:(0,G.jsx)(G.Fragment,{children:"data >"}),children:(0,G.jsx)(F.Z,{children:(0,G.jsx)(U.Z,{color:"warning",children:"\u4eca\u65e5 338"})})}),(0,G.jsx)(T.Z,{title:"\u6b21\u54c1\u5e93",children:(0,G.jsx)(F.Z,{children:(0,G.jsx)(U.Z,{color:"error",children:"\u5b58\u91cf 338"})})}),(0,G.jsx)(T.Z,{title:"\u5de5\u5382\u4fe1\u606f",children:(0,G.jsx)(F.Z,{children:(0,G.jsx)(U.Z,{color:"green",children:"\u8fd4\u5382 338"})})})]})}))}}]);
//# sourceMappingURL=527.91875c8b.chunk.js.map