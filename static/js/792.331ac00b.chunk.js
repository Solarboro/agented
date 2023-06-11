"use strict";(self.webpackChunkagented=self.webpackChunkagented||[]).push([[792],{8792:function(t,e,n){n.d(e,{ZM:function(){return j},ZP:function(){return P}});var a=n(4942),c=n(9439),i=n(3433),o=n(1694),r=n.n(o),l=n(2791),d=n(1929),m=n(7908),s=n(7545),g=n(2832),p=n(4099),f=n(43),u=n(635),h=n(9585),Z=n(9752),x=n(1113),v=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},S=function(t,e){var n=t.prefixCls,c=t.children,i=t.actions,o=t.extra,m=t.className,s=t.colStyle,g=v(t,["prefixCls","children","actions","extra","className","colStyle"]),p=(0,l.useContext)(j),f=p.grid,u=p.itemLayout,h=(0,l.useContext)(d.E_).getPrefixCls,S=h("list",n),y=i&&i.length>0&&l.createElement("ul",{className:"".concat(S,"-item-action"),key:"actions"},i.map((function(t,e){return l.createElement("li",{key:"".concat(S,"-item-action-").concat(e)},t,e!==i.length-1&&l.createElement("em",{className:"".concat(S,"-item-action-split")}))}))),b=f?"div":"li",E=l.createElement(b,Object.assign({},g,f?{}:{ref:e},{className:r()("".concat(S,"-item"),(0,a.Z)({},"".concat(S,"-item-no-flex"),!("vertical"===u?o:!function(){var t;return l.Children.forEach(c,(function(e){"string"===typeof e&&(t=!0)})),t&&l.Children.count(c)>1}())),m)}),"vertical"===u&&o?[l.createElement("div",{className:"".concat(S,"-item-main"),key:"content"},c,y),l.createElement("div",{className:"".concat(S,"-item-extra"),key:"extra"},o)]:[c,y,(0,x.Tm)(o,{key:"extra"})]);return f?l.createElement(Z.Z,{ref:e,flex:1,style:s},E):E},y=(0,l.forwardRef)(S);y.Meta=function(t){var e=t.prefixCls,n=t.className,a=t.avatar,c=t.title,i=t.description,o=v(t,["prefixCls","className","avatar","title","description"]),m=(0,(0,l.useContext)(d.E_).getPrefixCls)("list",e),s=r()("".concat(m,"-item-meta"),n),g=l.createElement("div",{className:"".concat(m,"-item-meta-content")},c&&l.createElement("h4",{className:"".concat(m,"-item-meta-title")},c),i&&l.createElement("div",{className:"".concat(m,"-item-meta-description")},i));return l.createElement("div",Object.assign({},o,{className:s}),a&&l.createElement("div",{className:"".concat(m,"-item-meta-avatar")},a),(c||i)&&g)};var b=y,E=n(7521),C=n(5564),k=n(9922),O=function(t){var e,n,c=t.listBorderedCls,i=t.componentCls,o=t.paddingLG,r=t.margin,l=t.padding,d=t.listItemPaddingSM,m=t.marginLG,s=t.borderRadiusLG;return n={},(0,a.Z)(n,"".concat(c),(e={border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder),borderRadius:s},(0,a.Z)(e,"".concat(i,"-header,").concat(i,"-footer,").concat(i,"-item"),{paddingInline:o}),(0,a.Z)(e,"".concat(i,"-pagination"),{margin:"".concat(r,"px ").concat(m,"px")}),e)),(0,a.Z)(n,"".concat(c).concat(i,"-sm"),(0,a.Z)({},"".concat(i,"-item,").concat(i,"-header,").concat(i,"-footer"),{padding:d})),(0,a.Z)(n,"".concat(c).concat(i,"-lg"),(0,a.Z)({},"".concat(i,"-item,").concat(i,"-header,").concat(i,"-footer"),{padding:"".concat(l,"px ").concat(o,"px")})),n},z=function(t){var e,n,c,i,o=t.componentCls,r=t.screenSM,l=t.screenMD,d=t.marginLG,m=t.marginSM,s=t.margin;return i={},(0,a.Z)(i,"@media screen and (max-width:".concat(l,")"),(e={},(0,a.Z)(e,"".concat(o),(0,a.Z)({},"".concat(o,"-item"),(0,a.Z)({},"".concat(o,"-item-action"),{marginInlineStart:d}))),(0,a.Z)(e,"".concat(o,"-vertical"),(0,a.Z)({},"".concat(o,"-item"),(0,a.Z)({},"".concat(o,"-item-extra"),{marginInlineStart:d}))),e)),(0,a.Z)(i,"@media screen and (max-width: ".concat(r,")"),(c={},(0,a.Z)(c,"".concat(o),(0,a.Z)({},"".concat(o,"-item"),(0,a.Z)({flexWrap:"wrap"},"".concat(o,"-action"),{marginInlineStart:m}))),(0,a.Z)(c,"".concat(o,"-vertical"),(0,a.Z)({},"".concat(o,"-item"),(n={flexWrap:"wrap-reverse"},(0,a.Z)(n,"".concat(o,"-item-main"),{minWidth:t.contentWidth}),(0,a.Z)(n,"".concat(o,"-item-extra"),{margin:"auto auto ".concat(s,"px")}),n))),c)),i},I=function(t){var e,n,c,i,o,r,l=t.componentCls,d=t.antCls,m=t.controlHeight,s=t.minHeight,g=t.paddingSM,p=t.marginLG,f=t.padding,u=t.listItemPadding,h=t.colorPrimary,Z=t.listItemPaddingSM,x=t.listItemPaddingLG,v=t.paddingXS,S=t.margin,y=t.colorText,b=t.colorTextDescription,C=t.motionDurationSlow,k=t.lineWidth,O={};return["start","center","end"].forEach((function(t){O["&-align-".concat(t)]={textAlign:t}})),r={},(0,a.Z)(r,"".concat(l),Object.assign(Object.assign({},(0,E.Wf)(t)),(i={position:"relative","*":{outline:"none"}},(0,a.Z)(i,"".concat(l,"-header, ").concat(l,"-footer"),{background:"transparent",paddingBlock:g}),(0,a.Z)(i,"".concat(l,"-pagination"),Object.assign(Object.assign({marginBlockStart:p},O),(0,a.Z)({},"".concat(d,"-pagination-options"),{textAlign:"start"}))),(0,a.Z)(i,"".concat(l,"-spin"),{minHeight:s,textAlign:"center"}),(0,a.Z)(i,"".concat(l,"-items"),{margin:0,padding:0,listStyle:"none"}),(0,a.Z)(i,"".concat(l,"-item"),(c={display:"flex",alignItems:"center",justifyContent:"space-between",padding:u,color:y},(0,a.Z)(c,"".concat(l,"-item-meta"),(e={display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%"},(0,a.Z)(e,"".concat(l,"-item-meta-avatar"),{marginInlineEnd:f}),(0,a.Z)(e,"".concat(l,"-item-meta-content"),{flex:"1 0",width:0,color:y}),(0,a.Z)(e,"".concat(l,"-item-meta-title"),{margin:"0 0 ".concat(t.marginXXS,"px 0"),color:y,fontSize:t.fontSize,lineHeight:t.lineHeight,"> a":(0,a.Z)({color:y,transition:"all ".concat(C)},"&:hover",{color:h})}),(0,a.Z)(e,"".concat(l,"-item-meta-description"),{color:b,fontSize:t.fontSize,lineHeight:t.lineHeight}),e)),(0,a.Z)(c,"".concat(l,"-item-action"),(n={flex:"0 0 auto",marginInlineStart:t.marginXXL,padding:0,fontSize:0,listStyle:"none"},(0,a.Z)(n,"& > li",(0,a.Z)({position:"relative",display:"inline-block",padding:"0 ".concat(v,"px"),color:b,fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"center"},"&:first-child",{paddingInlineStart:0})),(0,a.Z)(n,"".concat(l,"-item-action-split"),{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:k,height:Math.ceil(t.fontSize*t.lineHeight)-2*t.marginXXS,transform:"translateY(-50%)",backgroundColor:t.colorSplit}),n)),c)),(0,a.Z)(i,"".concat(l,"-empty"),{padding:"".concat(f,"px 0"),color:b,fontSize:t.fontSizeSM,textAlign:"center"}),(0,a.Z)(i,"".concat(l,"-empty-text"),{padding:f,color:t.colorTextDisabled,fontSize:t.fontSize,textAlign:"center"}),(0,a.Z)(i,"".concat(l,"-item-no-flex"),{display:"block"}),i))),(0,a.Z)(r,"".concat(l,"-grid ").concat(d,"-col > ").concat(l,"-item"),{display:"block",maxWidth:"100%",marginBlockEnd:S,paddingBlock:0,borderBlockEnd:"none"}),(0,a.Z)(r,"".concat(l,"-vertical ").concat(l,"-item"),(o={alignItems:"initial"},(0,a.Z)(o,"".concat(l,"-item-main"),{display:"block",flex:1}),(0,a.Z)(o,"".concat(l,"-item-extra"),{marginInlineStart:p}),(0,a.Z)(o,"".concat(l,"-item-meta"),(0,a.Z)({marginBlockEnd:f},"".concat(l,"-item-meta-title"),{marginBlockStart:0,marginBlockEnd:g,color:y,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG})),(0,a.Z)(o,"".concat(l,"-item-action"),{marginBlockStart:f,marginInlineStart:"auto","> li":(0,a.Z)({padding:"0 ".concat(f,"px")},"&:first-child",{paddingInlineStart:0})}),o)),(0,a.Z)(r,"".concat(l,"-split ").concat(l,"-item"),(0,a.Z)({borderBlockEnd:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)},"&:last-child",{borderBlockEnd:"none"})),(0,a.Z)(r,"".concat(l,"-split ").concat(l,"-header"),{borderBlockEnd:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)}),(0,a.Z)(r,"".concat(l,"-split").concat(l,"-empty ").concat(l,"-footer"),{borderTop:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)}),(0,a.Z)(r,"".concat(l,"-loading ").concat(l,"-spin-nested-loading"),{minHeight:m}),(0,a.Z)(r,"".concat(l,"-split").concat(l,"-something-after-last-item ").concat(d,"-spin-container > ").concat(l,"-items > ").concat(l,"-item:last-child"),{borderBlockEnd:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorSplit)}),(0,a.Z)(r,"".concat(l,"-lg ").concat(l,"-item"),{padding:x}),(0,a.Z)(r,"".concat(l,"-sm ").concat(l,"-item"),{padding:Z}),(0,a.Z)(r,"".concat(l,":not(").concat(l,"-vertical)"),(0,a.Z)({},"".concat(l,"-item-no-flex"),(0,a.Z)({},"".concat(l,"-item-action"),{float:"right"}))),r},N=(0,C.Z)("List",(function(t){var e=(0,k.TS)(t,{listBorderedCls:"".concat(t.componentCls,"-bordered"),minHeight:t.controlHeightLG,listItemPadding:"".concat(t.paddingContentVertical,"px 0"),listItemPaddingSM:"".concat(t.paddingContentVerticalSM,"px ").concat(t.paddingContentHorizontal,"px"),listItemPaddingLG:"".concat(t.paddingContentVerticalLG,"px ").concat(t.paddingContentHorizontalLG,"px")});return[I(e),O(e),z(e)]}),{contentWidth:220}),w=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},j=l.createContext({});j.Consumer;function L(t){var e,n,o=t.pagination,Z=void 0!==o&&o,x=t.prefixCls,v=t.bordered,S=void 0!==v&&v,y=t.split,b=void 0===y||y,E=t.className,C=t.rootClassName,k=t.children,O=t.itemLayout,z=t.loadMore,I=t.grid,L=t.dataSource,P=void 0===L?[]:L,H=t.size,M=t.header,B=t.footer,W=t.loading,G=void 0!==W&&W,T=t.rowKey,X=t.renderItem,A=t.locale,D=w(t,["pagination","prefixCls","bordered","split","className","rootClassName","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),R=Z&&"object"===typeof Z?Z:{},V=l.useState(R.defaultCurrent||1),_=(0,c.Z)(V,2),K=_[0],F=_[1],J=l.useState(R.defaultPageSize||10),Y=(0,c.Z)(J,2),q=Y[0],Q=Y[1],U=l.useContext(d.E_),$=U.getPrefixCls,tt=U.renderEmpty,et=U.direction,nt=function(t){return function(e,n){F(e),Q(n),Z&&Z[t]&&Z[t](e,n)}},at=nt("onChange"),ct=nt("onShowSizeChange"),it=$("list",x),ot=N(it),rt=(0,c.Z)(ot,2),lt=rt[0],dt=rt[1],mt=G;"boolean"===typeof mt&&(mt={spinning:mt});var st=mt&&mt.spinning,gt="";switch(H){case"large":gt="lg";break;case"small":gt="sm"}var pt=r()(it,(e={},(0,a.Z)(e,"".concat(it,"-vertical"),"vertical"===O),(0,a.Z)(e,"".concat(it,"-").concat(gt),gt),(0,a.Z)(e,"".concat(it,"-split"),b),(0,a.Z)(e,"".concat(it,"-bordered"),S),(0,a.Z)(e,"".concat(it,"-loading"),st),(0,a.Z)(e,"".concat(it,"-grid"),!!I),(0,a.Z)(e,"".concat(it,"-something-after-last-item"),!!(z||Z||B)),(0,a.Z)(e,"".concat(it,"-rtl"),"rtl"===et),e),E,C,dt),ft=(0,h.Z)({current:1,total:0},{total:P.length,current:K,pageSize:q},Z||{}),ut=Math.ceil(ft.total/ft.pageSize);ft.current>ut&&(ft.current=ut);var ht=Z?l.createElement("div",{className:r()("".concat(it,"-pagination"),"".concat(it,"-pagination-align-").concat(null!==(n=null===ft||void 0===ft?void 0:ft.align)&&void 0!==n?n:"end"))},l.createElement(p.Z,Object.assign({},ft,{onChange:at,onShowSizeChange:ct}))):null,Zt=(0,i.Z)(P);Z&&P.length>(ft.current-1)*ft.pageSize&&(Zt=(0,i.Z)(P).splice((ft.current-1)*ft.pageSize,ft.pageSize));var xt=Object.keys(I||{}).some((function(t){return["xs","sm","md","lg","xl","xxl"].includes(t)})),vt=(0,g.Z)(xt),St=l.useMemo((function(){for(var t=0;t<u.c.length;t+=1){var e=u.c[t];if(vt[e])return e}}),[vt]),yt=l.useMemo((function(){if(I){var t=St&&I[St]?I[St]:I.column;return t?{width:"".concat(100/t,"%"),maxWidth:"".concat(100/t,"%")}:void 0}}),[null===I||void 0===I?void 0:I.column,St]),bt=st&&l.createElement("div",{style:{minHeight:53}});if(Zt.length>0){var Et=Zt.map((function(t,e){return function(t,e){return X?((n="function"===typeof T?T(t):T?t[T]:t.key)||(n="list-item-".concat(e)),l.createElement(l.Fragment,{key:n},X(t,e))):null;var n}(t,e)}));bt=I?l.createElement(s.Z,{gutter:I.gutter},l.Children.map(Et,(function(t){return l.createElement("div",{key:null===t||void 0===t?void 0:t.key,style:yt},t)}))):l.createElement("ul",{className:"".concat(it,"-items")},Et)}else k||st||(bt=l.createElement("div",{className:"".concat(it,"-empty-text")},A&&A.emptyText||(null===tt||void 0===tt?void 0:tt("List"))||l.createElement(m.Z,{componentName:"List"})));var Ct=ft.position||"bottom",kt=l.useMemo((function(){return{grid:I,itemLayout:O}}),[JSON.stringify(I),O]);return lt(l.createElement(j.Provider,{value:kt},l.createElement("div",Object.assign({className:pt},D),("top"===Ct||"both"===Ct)&&ht,M&&l.createElement("div",{className:"".concat(it,"-header")},M),l.createElement(f.Z,Object.assign({},mt),bt,k),B&&l.createElement("div",{className:"".concat(it,"-footer")},B),z||("bottom"===Ct||"both"===Ct)&&ht)))}L.Item=b;var P=L}}]);
//# sourceMappingURL=792.331ac00b.chunk.js.map