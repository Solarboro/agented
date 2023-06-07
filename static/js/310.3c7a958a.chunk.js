"use strict";(self.webpackChunkagented=self.webpackChunkagented||[]).push([[310],{6280:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(9439),o=n(9529),c=n(8999),a=n(6061),i=n(7846),s=n(7128),u=n(9389),l=n(184);function d(){var t=a.Z.useApp().modal,e=i.Z.useForm(),n=(0,r.Z)(e,1)[0],d=(0,l.jsxs)(i.Z,{size:"middle",preserve:!1,form:n,initialValues:{username:"solar",password:"abcd1234"},children:[(0,l.jsx)(s.Z,{children:"\u7528\u6237\u767b\u5165 "}),(0,l.jsx)(i.Z.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7!"}],children:(0,l.jsx)(u.Z,{prefix:(0,l.jsx)(o.Z,{className:"site-form-item-icon"}),placeholder:"Username / \u8d26\u6237 / \u624b\u673a\u53f7"})}),(0,l.jsx)(i.Z.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"}],children:(0,l.jsx)(u.Z,{prefix:(0,l.jsx)(c.Z,{className:"site-form-item-icon"}),type:"password",placeholder:"Password / \u5bc6\u7801"})})]});return function(e){t.confirm({icon:!0,okText:"\u767b\u5f55",onOk:function(t){n.validateFields().then((function(n){return e(n,t)})).catch(console.info)},content:d})}}},65:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(1413),o=n(9439),c=n(6061),a=n(7846),i=n(7128),s=n(9555),u=n(8764),l=n(2706),d=n(1306),A=n(7892),f=n.n(A),h=n(184);function p(t){var e=t.title,n=c.Z.useApp().modal,A=a.Z.useForm(),p=(0,o.Z)(A,1)[0],E=(0,h.jsxs)(a.Z,{size:"middle",preserve:!1,form:p,children:[e&&(0,h.jsx)(i.Z,{children:e}),(0,h.jsx)(a.Z.Item,{label:"\u7c7b\u522b",name:"title",children:(0,h.jsx)(s.Z,{options:[{value:"1",label:"\u8ba2\u91d1"},{value:"2",label:"\u671f\u6b3e"},{value:"3",label:"\u5c3e\u6b3e"}]})}),(0,h.jsx)(a.Z.Item,{name:"date",label:"\u652f\u4ed8\u65e5\u671f",rules:[{type:"object"}],children:(0,h.jsx)(u.Z,{inputReadOnly:!0})}),(0,h.jsx)(a.Z.Item,{name:"amount",label:"\u652f\u4ed8\u91d1\u989d",children:(0,h.jsx)(l.Z,{})}),(0,h.jsx)(a.Z.Item,{name:"paid",label:"\u652f\u4ed8\u72b6\u6001",valuePropName:"checked",children:(0,h.jsx)(d.Z,{})})]});return function(t,e){p.setFieldsValue(t),n.confirm({icon:!0,okText:"\u66f4\u65b0",onOk:function(n){p.validateFields().then((function(o){return e((0,r.Z)((0,r.Z)((0,r.Z)({},t),o),{},{date:1e3*f()(o.date).unix()}),n)})).catch(console.info)},content:E})}}},2735:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(9439),o=n(2791);function c(){var t="API_KEY",e=(0,o.useState)(localStorage.getItem(t)),n=(0,r.Z)(e,2),c=n[0],a=n[1];return(0,o.useEffect)((function(){c&&localStorage.setItem(t,c)}),[c]),[c,a]}},8310:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});for(var r=n(7762),o=n(9439),c=n(2622),a=n(5485),i=n(6061),s=n(5820),u=n(2339),l=n(1429),d=n(9555),A=n(7309),f=n(7128),h=n(4248),p=n(6473),E=n(8792),g=n(2242),Q=n(2735),Z=(n(3742),n(6280)),m=n(383),v=n(7257),y=n(1732),B=n(7892),I=n.n(B),j=n(2791),x=n(184),k=[],C=0;C<100;C++)k.push({key:C.toString(),name:"Edward ".concat(C),age:32,address:"London Park no. ".concat(C)});var N=n(65),S=n(7689);a.Z.Title;var J=(0,v.Pi)((function(){(0,j.useEffect)((function(){m.H.isLogin&&y.n.index()}),[]);var t=(0,S.s0)(),e=(0,N.Z)({title:"\u8d26\u5355"}),n=i.Z.useApp().message,v=(0,Z.Z)(),B=(0,Q.Z)(),k=(0,o.Z)(B,2),C=(k[0],k[1]),J=function(t,e){m.H.login(t,(function(t){C(t),e()}),n)},b=function(t){var e=[],n=(0,x.jsxs)(s.Z,{placement:"topRight",title:"\u4ea7\u54c1\u79fb\u9664",description:"".concat(t.style,"-").concat(t.model),onConfirm:function(){return y.n.del(t.id)},okText:"Yes",cancelText:"No",children:[(0,x.jsx)(c.Z,{style:{color:"red"}})," \u79fb\u9664"]}),o=(0,x.jsxs)(u.Z,{color:"success",children:[t.sampleOrder.studioName," ",t.sampleOrder.producerName?t.sampleOrder.producerName+" "+t.sampleOrder.cost+" \u5c0f\u65f6":"\u6392\u961f\u4e2d"]});switch(t.productStatus){case"pending":e.push(n);break;case"studio":e.push(o);break;case"factory":var a,i=0,l=(0,r.Z)(t.materials);try{for(l.s();!(a=l.n()).done;){i+=a.value.amount}}catch(A){l.e(A)}finally{l.f()}var d=(0,x.jsxs)(u.Z,{color:"error",children:[i," \u5143"]});e.push(d)}return e},K=function(t){var e=I()().diff(I()(t),"days");switch(!0){case 0===e:return(0,x.jsx)(u.Z,{color:"success",children:"\u4eca\u5929"});case e<3:return(0,x.jsxs)(u.Z,{color:"warning",children:[e," \u5929\u524d"]});default:return(0,x.jsxs)(x.Fragment,{children:[" ",(0,x.jsx)(u.Z,{color:"error",children:"\u8bf7\u8ddf\u8fdb"})," ",I()(t).format("YYYY.MM.DD")," "]})}};return(0,x.jsxs)("div",{className:"about",children:[(0,x.jsx)(d.Z,{defaultValue:"jack",options:[{value:"jack",label:"Jack"},{value:"solar",label:"Solar"},{value:"boro",label:"Boro"}]}),m.H.user.fullname,(0,x.jsx)(A.ZP,{onClick:function(){return v(J)},children:"called"}),(0,x.jsx)(A.ZP,{onClick:function(){return y.n.index()},children:"products"}),(0,x.jsx)(A.ZP,{onClick:function(){return e((function(t,e){return console.log(t)}))},children:"payment"}),(0,x.jsx)(f.Z,{orientation:"left",children:"\u6982\u8981"}),(0,x.jsx)(h.Z,{default:y.n.filter,onChange:y.n.updateFilter,block:!0,options:y.n.getFilterTemplate.map((function(t){return{label:(0,x.jsx)(l.Z,{title:t.title,value:t.value,valueStyle:{color:t.color}}),value:t.key}}))}),(0,x.jsx)(p.Z,{children:(0,x.jsx)(E.ZP,{size:"middle",itemLayout:"horizontal",pagination:{pageSize:5,simple:!0,position:"bottom",align:"end"},dataSource:y.n.getByFilter(),renderItem:function(e){return(0,x.jsx)(E.ZP.Item,{actions:b(e),children:(0,x.jsx)(E.ZP.Item.Meta,{onClick:function(){return t("/product/".concat(e.id))},avatar:(0,x.jsx)(g.Z,{width:30,height:40,src:"error",fallback:"data:image/png;base64,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"}),title:(0,x.jsxs)(x.Fragment,{children:[e.style?e.style:"-"," ",e.model," "]}),description:(0,x.jsx)(a.Z.Text,{type:"secondary",ellipsis:!0,children:K(e.cdate)})})})}})}),(0,x.jsx)("br",{}),(0,x.jsx)(A.ZP,{onClick:function(){return y.n.new()},size:"large",type:"primary",block:!0,children:" \u5ba2\u5355\u6dfb\u52a0 "})]})}))},1732:function(t,e,n){n.d(e,{n:function(){return l}});var r=n(7762),o=n(3433),c=n(1413),a=n(5671),i=n(3144),s=n(4098),u=n(3760),l=new(function(){function t(){var e=this;(0,a.Z)(this,t),this.filterTemplate=[{key:"pending",title:"\u6d3d\u8c08\u4e2d",value:0,color:"#3f8600"},{key:"studio",title:"\u6837\u677f\u4e2d",value:0,color:"#f56a00"},{key:"factory",title:"\u6295\u4ea7\u4e2d",value:0,color:"#f56a00"},{key:"paid",title:"\u5f85\u5c3e\u6b3e",value:0,color:"#cf1322"}],this.filter="pending",this.product={},this.products=[],this.selectd=function(t){e.product=(0,c.Z)({},t)},this.fallbackStatus=function(t){u.Z.get("product/".concat(t,"/fallbackStatus")).then((function(n){e.products=[].concat((0,o.Z)(e.products.filter((function(e){return e.id!==t}))),[n.data])})).catch(console.log)},this.updateFilter=function(t){return e.filter=t},this.new=function(){u.Z.post("product",{}).then((function(t){e.products=[].concat((0,o.Z)(e.products),[t.data])})).catch(console.log)},this.updateProduct=function(t){u.Z.put("product",t).then((function(n){console.log(n.data),e.products=[].concat((0,o.Z)(e.products.filter((function(e){return e.id!==t.id}))),[n.data]),e.product=(0,c.Z)({},n.data)})).catch(console.log)},this.index=function(){u.Z.get("product").then((function(t){e.products=(0,o.Z)(t.data)})).catch((function(t){console.log(t)}))},this.del=function(t){u.Z.delete("product/".concat(t)).then((function(n){return e.products.splice(e.products.findIndex((function(e){return e.id===t})),1)})).catch(console.log)},this.getByFilter=function(){var t=e.products.filter((function(t){return t.productStatus===e.filter}));switch(e.filter){case"pending":return t.sort((function(t,e){return t.cdate-e.cdate}));case"studio":return t.sort((function(t,e){return t.sampleOrder.manufactureDates-e.sampleOrder.manufactureDates}));case"factory":return t.sort((function(t,e){return t.mdate-e.mdate}));default:return t}},this.updateStudio=function(t){console.log(t),u.Z.put("/product/".concat(e.product.id,"/studio"),{id:t}).then((function(t){return e.product=(0,c.Z)((0,c.Z)({},e.product),{},{sampleOrder:t.data})})).catch(console.log)},this.newPayment=function(t,n){u.Z.post("product/".concat(t,"/payment"),(0,c.Z)({},n)).then((function(n){var o,a=(0,r.Z)(e.products);try{for(a.s();!(o=a.n()).done;){var i=o.value;i.id===t&&i.payments.push((0,c.Z)({},n.data))}}catch(s){a.e(s)}finally{a.f()}})).catch(console.error)},this.updatePayment=function(t,n,o){u.Z.put("product/".concat(t,"/payment"),(0,c.Z)({},n)).then((function(n){var a,i=n.data,s=(0,r.Z)(e.products);try{for(s.s();!(a=s.n()).done;){var u=a.value;if(u.id===t){var l=u.payments.findIndex((function(t){return t.id===i.id}));u.payments.splice(l,1,(0,c.Z)({},i))}}}catch(d){s.e(d)}finally{s.f()}o()})).catch(console.error)},this.deletePayment=function(t,n){u.Z.delete("product/".concat(t,"/payment/").concat(n)).then((function(o){var c,a=(0,r.Z)(e.products);try{for(a.s();!(c=a.n()).done;){var i=c.value;if(i.id===t){var s=i.payments.findIndex((function(t){return t.id===n}));i.payments.splice(s,1)}}}catch(u){a.e(u)}finally{a.f()}})).catch(console.error)},this.newCustOrder=function(t,n){u.Z.post("product/".concat(t,"/custOrder"),(0,c.Z)({},n)).then((function(n){var o,a=(0,r.Z)(e.products);try{for(a.s();!(o=a.n()).done;){var i=o.value;i.id===t&&i.custOrders.push((0,c.Z)({},n.data))}}catch(s){a.e(s)}finally{a.f()}})).catch(console.error)},this.updateCustOrder=function(t,n,o){u.Z.put("product/".concat(t,"/custOrder"),(0,c.Z)({},n)).then((function(n){var a,i=n.data,s=(0,r.Z)(e.products);try{for(s.s();!(a=s.n()).done;){var u=a.value;if(u.id===t){var l=u.custOrders.findIndex((function(t){return t.id===i.id}));u.custOrders.splice(l,1,(0,c.Z)({},i))}}}catch(d){s.e(d)}finally{s.f()}o()})).catch(console.error)},this.deleteCustOrder=function(t,n){u.Z.delete("product/".concat(t,"/custOrder/").concat(n)).then((function(o){var c,a=(0,r.Z)(e.products);try{for(a.s();!(c=a.n()).done;){var i=c.value;if(i.id===t){var s=i.custOrders.findIndex((function(t){return t.id===n}));i.custOrders.splice(s,1)}}}catch(u){a.e(u)}finally{a.f()}})).catch(console.error)},this.newMaterials=function(t,n){u.Z.post("product/".concat(t,"/material"),(0,c.Z)({},n)).then((function(n){var o,a=(0,r.Z)(e.products);try{for(a.s();!(o=a.n()).done;){var i=o.value;i.id===t&&i.materials.push((0,c.Z)({},n.data))}}catch(s){a.e(s)}finally{a.f()}})).catch(console.error)},this.updateMaterials=function(t,n,o){u.Z.put("product/".concat(t,"/material"),(0,c.Z)({},n)).then((function(n){var a,i=n.data,s=(0,r.Z)(e.products);try{for(s.s();!(a=s.n()).done;){var u=a.value;if(u.id===t){var l=u.materials.findIndex((function(t){return t.id===i.id}));u.materials.splice(l,1,(0,c.Z)({},i))}}}catch(d){s.e(d)}finally{s.f()}o()})).catch(console.error)},this.deleteMaterials=function(t,n){u.Z.delete("product/".concat(t,"/material/").concat(n)).then((function(o){var c,a=(0,r.Z)(e.products);try{for(a.s();!(c=a.n()).done;){var i=c.value;if(i.id===t){var s=i.materials.findIndex((function(t){return t.id===n}));i.materials.splice(s,1)}}}catch(u){a.e(u)}finally{a.f()}})).catch(console.error)},(0,s.ky)(this)}return(0,i.Z)(t,[{key:"getFilterTemplate",get:function(){var t=this;return this.filterTemplate.forEach((function(e){e.value=t.products.filter((function(t){return t.productStatus===e.key})).length})),this.filterTemplate}}]),t}())}}]);
//# sourceMappingURL=310.3c7a958a.chunk.js.map