"use strict";(self.webpackChunkagented=self.webpackChunkagented||[]).push([[818],{446:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(7462),c=n(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"},l=n(4291),i=function(e,t){return c.createElement(l.Z,(0,o.Z)({},e,{ref:t,icon:a}))};var r=c.forwardRef(i)},7174:function(e,t,n){n.d(t,{K:function(){return E},Z:function(){return N}});var o=n(4942),c=n(9439),a=n(1694),l=n.n(a),i=n(5501),r=n(2791),s=n(1113),d=n(635),m=n(1929),p=n(4107),b=function(e){return e.children};function u(e){return void 0!==e&&null!==e}var f=function(e){var t,n=e.itemPrefixCls,c=e.component,a=e.span,i=e.className,s=e.style,d=e.labelStyle,m=e.contentStyle,p=e.bordered,b=e.label,f=e.content,g=e.colon,y=c;return p?r.createElement(y,{className:l()((t={},(0,o.Z)(t,"".concat(n,"-item-label"),u(b)),(0,o.Z)(t,"".concat(n,"-item-content"),u(f)),t),i),style:s,colSpan:a},u(b)&&r.createElement("span",{style:d},b),u(f)&&r.createElement("span",{style:m},f)):r.createElement(y,{className:l()("".concat(n,"-item"),i),style:s,colSpan:a},r.createElement("div",{className:"".concat(n,"-item-container")},(b||0===b)&&r.createElement("span",{className:l()("".concat(n,"-item-label"),(0,o.Z)({},"".concat(n,"-item-no-colon"),!g)),style:d},b),(f||0===f)&&r.createElement("span",{className:l()("".concat(n,"-item-content")),style:m},f)))};function g(e,t,n){var o=t.colon,c=t.prefixCls,a=t.bordered,l=n.component,i=n.type,s=n.showLabel,d=n.showContent,m=n.labelStyle,p=n.contentStyle;return e.map((function(e,t){var n=e.props,b=n.label,u=n.children,g=n.prefixCls,y=void 0===g?c:g,v=n.className,h=n.style,x=n.labelStyle,S=n.contentStyle,Z=n.span,C=void 0===Z?1:Z,E=e.key;return"string"===typeof l?r.createElement(f,{key:"".concat(i,"-").concat(E||t),className:v,style:h,labelStyle:Object.assign(Object.assign({},m),x),contentStyle:Object.assign(Object.assign({},p),S),span:C,colon:o,component:l,itemPrefixCls:y,bordered:a,label:s?b:null,content:d?u:null}):[r.createElement(f,{key:"label-".concat(E||t),className:v,style:Object.assign(Object.assign(Object.assign({},m),h),x),span:1,colon:o,component:l[0],itemPrefixCls:y,bordered:a,label:b}),r.createElement(f,{key:"content-".concat(E||t),className:v,style:Object.assign(Object.assign(Object.assign({},p),h),S),span:2*C-1,component:l[1],itemPrefixCls:y,bordered:a,content:u})]}))}var y=function(e){var t=r.useContext(E),n=e.prefixCls,o=e.vertical,c=e.row,a=e.index,l=e.bordered;return o?r.createElement(r.Fragment,null,r.createElement("tr",{key:"label-".concat(a),className:"".concat(n,"-row")},g(c,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:"content-".concat(a),className:"".concat(n,"-row")},g(c,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:a,className:"".concat(n,"-row")},g(c,e,Object.assign({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},v=n(5564),h=n(9922),x=n(7521),S=function(e){var t,n,c=e.componentCls,a=e.descriptionsExtraColor,l=e.descriptionItemPaddingBottom,i=e.descriptionsItemLabelColonMarginRight,r=e.descriptionsItemLabelColonMarginLeft,s=e.descriptionsTitleMarginBottom;return(0,o.Z)({},c,Object.assign(Object.assign(Object.assign({},(0,x.Wf)(e)),function(e){var t,n=e.componentCls,c=e.descriptionsSmallPadding,a=e.descriptionsDefaultPadding,l=e.descriptionsMiddlePadding,i=e.descriptionsBg;return(0,o.Z)({},"&".concat(n,"-bordered"),(t={},(0,o.Z)(t,"".concat(n,"-view"),{border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),(0,o.Z)(t,"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:a,borderInlineEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),(0,o.Z)(t,"".concat(n,"-item-label"),{color:e.colorTextSecondary,backgroundColor:i,"&::after":{display:"none"}}),(0,o.Z)(t,"".concat(n,"-row"),{borderBottom:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}}),(0,o.Z)(t,"&".concat(n,"-middle"),(0,o.Z)({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:l})),(0,o.Z)(t,"&".concat(n,"-small"),(0,o.Z)({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:c})),t))}(e)),(n={},(0,o.Z)(n,"&-rtl",{direction:"rtl"}),(0,o.Z)(n,"".concat(c,"-header"),{display:"flex",alignItems:"center",marginBottom:s}),(0,o.Z)(n,"".concat(c,"-title"),Object.assign(Object.assign({},x.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,o.Z)(n,"".concat(c,"-extra"),{marginInlineStart:"auto",color:a,fontSize:e.fontSize}),(0,o.Z)(n,"".concat(c,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),(0,o.Z)(n,"".concat(c,"-row"),{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}}),(0,o.Z)(n,"".concat(c,"-item-label"),(0,o.Z)({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat(r,"px ").concat(i,"px")}},"&".concat(c,"-item-no-colon::after"),{content:'""'})),(0,o.Z)(n,"".concat(c,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),(0,o.Z)(n,"".concat(c,"-item-content"),{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),(0,o.Z)(n,"".concat(c,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(t={display:"flex"},(0,o.Z)(t,"".concat(c,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),(0,o.Z)(t,"".concat(c,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),t)}),(0,o.Z)(n,"&-middle",(0,o.Z)({},"".concat(c,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),(0,o.Z)(n,"&-small",(0,o.Z)({},"".concat(c,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})),n)))},Z=(0,v.Z)("Descriptions",(function(e){var t=e.colorFillAlter,n=e.fontSizeSM*e.lineHeightSM,o=e.colorText,c="".concat(e.paddingXS,"px ").concat(e.padding,"px"),a="".concat(e.padding,"px ").concat(e.paddingLG,"px"),l="".concat(e.paddingSM,"px ").concat(e.paddingLG,"px"),i=e.padding,r=e.marginXS,s=e.marginXXS/2,d=(0,h.TS)(e,{descriptionsBg:t,descriptionsTitleMarginBottom:n,descriptionsExtraColor:o,descriptionItemPaddingBottom:i,descriptionsSmallPadding:c,descriptionsDefaultPadding:a,descriptionsMiddlePadding:l,descriptionsItemLabelColonMarginRight:r,descriptionsItemLabelColonMarginLeft:s});return[S(d)]})),C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(e);c<o.length;c++)t.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]])}return n},E=r.createContext({}),w={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function O(e,t,n){var o=e;return(void 0===n||n>t)&&(o=(0,s.Tm)(e,{span:t})),o}function j(e){var t,n=e.prefixCls,a=e.title,s=e.extra,b=e.column,u=void 0===b?w:b,f=e.colon,g=void 0===f||f,v=e.bordered,h=e.layout,x=e.children,S=e.className,j=e.rootClassName,N=e.style,L=e.size,P=e.labelStyle,k=e.contentStyle,B=C(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle"]),I=r.useContext(m.E_),M=I.getPrefixCls,T=I.direction,z=M("descriptions",n),W=r.useState({}),H=(0,c.Z)(W,2),G=H[0],R=H[1],X=function(e,t){if("number"===typeof e)return e;if("object"===typeof e)for(var n=0;n<d.c.length;n++){var o=d.c[n];if(t[o]&&void 0!==e[o])return e[o]||w[o]}return 3}(u,G),A=(0,p.Z)(L),D=Z(z),F=(0,c.Z)(D,2),K=F[0],_=F[1],q=(0,d.Z)();r.useEffect((function(){var e=q.subscribe((function(e){"object"===typeof u&&R(e)}));return function(){q.unsubscribe(e)}}),[]);var J=function(e,t){var n=(0,i.Z)(e).filter((function(e){return e})),o=[],c=[],a=t;return n.forEach((function(e,l){var i,r=null===(i=e.props)||void 0===i?void 0:i.span,s=r||1;if(l===n.length-1)return c.push(O(e,a,r)),void o.push(c);s<a?(a-=s,c.push(e)):(c.push(O(e,a,s)),o.push(c),a=t,c=[])})),o}(x,X),Q=r.useMemo((function(){return{labelStyle:P,contentStyle:k}}),[P,k]);return K(r.createElement(E.Provider,{value:Q},r.createElement("div",Object.assign({className:l()(z,(t={},(0,o.Z)(t,"".concat(z,"-").concat(A),A&&"default"!==A),(0,o.Z)(t,"".concat(z,"-bordered"),!!v),(0,o.Z)(t,"".concat(z,"-rtl"),"rtl"===T),t),S,j,_),style:N},B),(a||s)&&r.createElement("div",{className:"".concat(z,"-header")},a&&r.createElement("div",{className:"".concat(z,"-title")},a),s&&r.createElement("div",{className:"".concat(z,"-extra")},s)),r.createElement("div",{className:"".concat(z,"-view")},r.createElement("table",null,r.createElement("tbody",null,J.map((function(e,t){return r.createElement(y,{key:t,index:t,colon:g,prefixCls:z,vertical:"vertical"===h,bordered:v,row:e})}))))))))}j.Item=b;var N=j}}]);
//# sourceMappingURL=818.cbd38621.chunk.js.map