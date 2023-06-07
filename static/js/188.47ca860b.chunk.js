/*! For license information please see 188.47ca860b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkagented=self.webpackChunkagented||[]).push([[188],{188:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(7128),o=n(4942),i=n(9439),a=n(7462),s=n(2791),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},u=n(4291),c=function(e,t){return s.createElement(u.Z,(0,a.Z)({},e,{ref:t,icon:l}))};var h,d,f=s.forwardRef(c),v=n(1694),g=n.n(v),m=n(5671),E=n(3144),y=n(7762),C=Object.defineProperty,w=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,p=function(e,t,n){return t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},k=function(e,t){for(var n in t||(t={}))M.call(t,n)&&p(e,n,t[n]);if(w){var r,o=(0,y.Z)(w(t));try{for(o.s();!(r=o.n()).done;){n=r.value;R.call(t,n)&&p(e,n,t[n])}}catch(i){o.e(i)}finally{o.f()}}return e},N=function(e,t){var n={};for(var r in e)M.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&w){var o,i=(0,y.Z)(w(e));try{for(i.s();!(o=i.n()).done;){r=o.value;t.indexOf(r)<0&&R.call(e,r)&&(n[r]=e[r])}}catch(a){i.e(a)}finally{i.f()}}return n};!function(e){var t=function(){function t(e,n,r,o){if((0,m.Z)(this,t),this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var a=[],s=0;s<this.size;s++)a.push(!1);for(var l=0;l<this.size;l++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var u=this.addEccAndInterleave(r);if(this.drawCodewords(u),-1==o)for(var c=1e9,h=0;h<8;h++){this.applyMask(h),this.drawFormatBits(h);var d=this.getPenaltyScore();d<c&&(o=h,c=d),this.applyMask(h)}i(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return(0,E.Z)(t,[{key:"getModule",value:function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),n=t.length,r=0;r<n;r++)for(var o=0;o<n;o++)0==r&&0==o||0==r&&o==n-1||r==n-1&&0==o||this.drawAlignmentPattern(t[r],t[o]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,n=t,r=0;r<10;r++)n=n<<1^1335*(n>>>9);var a=21522^(t<<10|n);i(a>>>15==0);for(var s=0;s<=5;s++)this.setFunctionModule(8,s,o(a,s));this.setFunctionModule(8,7,o(a,6)),this.setFunctionModule(8,8,o(a,7)),this.setFunctionModule(7,8,o(a,8));for(var l=9;l<15;l++)this.setFunctionModule(14-l,8,o(a,l));for(var u=0;u<8;u++)this.setFunctionModule(this.size-1-u,8,o(a,u));for(var c=8;c<15;c++)this.setFunctionModule(8,this.size-15+c,o(a,c));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^7973*(e>>>11);var n=this.version<<12|e;i(n>>>18==0);for(var r=0;r<18;r++){var a=o(n,r),s=this.size-11+r%3,l=Math.floor(r/3);this.setFunctionModule(s,l,a),this.setFunctionModule(l,s,a)}}}},{key:"drawFinderPattern",value:function(e,t){for(var n=-4;n<=4;n++)for(var r=-4;r<=4;r++){var o=Math.max(Math.abs(r),Math.abs(n)),i=e+r,a=t+n;0<=i&&i<this.size&&0<=a&&a<this.size&&this.setFunctionModule(i,a,2!=o&&4!=o)}}},{key:"drawAlignmentPattern",value:function(e,t){for(var n=-2;n<=2;n++)for(var r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,1!=Math.max(Math.abs(r),Math.abs(n)))}},{key:"setFunctionModule",value:function(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}},{key:"addEccAndInterleave",value:function(e){var n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");for(var o=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],a=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),l=o-s%o,u=Math.floor(s/o),c=[],h=t.reedSolomonComputeDivisor(a),d=0,f=0;d<o;d++){var v=e.slice(f,f+u-a+(d<l?0:1));f+=v.length;var g=t.reedSolomonComputeRemainder(v,h);d<l&&v.push(0),c.push(v.concat(g))}for(var m=[],E=function(e){c.forEach((function(t,n){(e!=u-a||n>=l)&&m.push(t[e])}))},y=0;y<c[0].length;y++)E(y);return i(m.length==s),m}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var n=0,r=this.size-1;r>=1;r-=2){6==r&&(r=5);for(var a=0;a<this.size;a++)for(var s=0;s<2;s++){var l=r-s,u=0==(r+1&2)?this.size-1-a:a;!this.isFunction[u][l]&&n<8*e.length&&(this.modules[u][l]=o(e[n>>>3],7-(7&n)),n++)}}i(n==8*e.length)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var n=0;n<this.size;n++){var r=void 0;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}},{key:"getPenaltyScore",value:function(){for(var e=0,n=0;n<this.size;n++){for(var r=!1,o=0,a=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[n][s]==r?5==++o?e+=t.PENALTY_N1:o>5&&e++:(this.finderPenaltyAddHistory(o,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[n][s],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,a)*t.PENALTY_N3}for(var l=0;l<this.size;l++){for(var u=!1,c=0,h=[0,0,0,0,0,0,0],d=0;d<this.size;d++)this.modules[d][l]==u?5==++c?e+=t.PENALTY_N1:c>5&&e++:(this.finderPenaltyAddHistory(c,h),u||(e+=this.finderPenaltyCountPatterns(h)*t.PENALTY_N3),u=this.modules[d][l],c=1);e+=this.finderPenaltyTerminateAndCount(u,c,h)*t.PENALTY_N3}for(var f=0;f<this.size-1;f++)for(var v=0;v<this.size-1;v++){var g=this.modules[f][v];g==this.modules[f][v+1]&&g==this.modules[f+1][v]&&g==this.modules[f+1][v+1]&&(e+=t.PENALTY_N2)}var m,E=0,C=(0,y.Z)(this.modules);try{for(C.s();!(m=C.n()).done;){E=m.value.reduce((function(e,t){return e+(t?1:0)}),E)}}catch(R){C.e(R)}finally{C.f()}var w=this.size*this.size,M=Math.ceil(Math.abs(20*E-10*w)/w)-1;return i(0<=M&&M<=9),i(0<=(e+=M*t.PENALTY_N4)&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),n=[6],r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}},{key:"finderPenaltyCountPatterns",value:function(e){var t=e[1];i(t<=3*this.size);var n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}},{key:"finderPenaltyAddHistory",value:function(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}}],[{key:"encodeText",value:function(n,r){var o=e.QrSegment.makeSegments(n);return t.encodeSegments(o,r)}},{key:"encodeBinary",value:function(n,r){var o=e.QrSegment.makeBytes(n);return t.encodeSegments([o],r)}},{key:"encodeSegments",value:function(e,n){var o,s,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,h=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(t.MIN_VERSION<=l&&l<=u&&u<=t.MAX_VERSION)||c<-1||c>7)throw new RangeError("Invalid value");for(o=l;;o++){var d=8*t.getNumDataCodewords(o,n),f=a.getTotalBits(e,o);if(f<=d){s=f;break}if(o>=u)throw new RangeError("Data too long")}for(var v=0,g=[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH];v<g.length;v++){var m=g[v];h&&s<=8*t.getNumDataCodewords(o,m)&&(n=m)}var E,C=[],w=(0,y.Z)(e);try{for(w.s();!(E=w.n()).done;){var M=E.value;r(M.mode.modeBits,4,C),r(M.numChars,M.mode.numCharCountBits(o),C);var R,p=(0,y.Z)(M.getData());try{for(p.s();!(R=p.n()).done;){var k=R.value;C.push(k)}}catch(b){p.e(b)}finally{p.f()}}}catch(b){w.e(b)}finally{w.f()}i(C.length==s);var N=8*t.getNumDataCodewords(o,n);i(C.length<=N),r(0,Math.min(4,N-C.length),C),r(0,(8-C.length%8)%8,C),i(C.length%8==0);for(var A=236;C.length<N;A^=253)r(A,8,C);for(var P=[];8*P.length<C.length;)P.push(0);return C.forEach((function(e,t){return P[t>>>3]|=e<<7-(7&t)})),new t(o,n,P,c)}},{key:"getNumRawDataModules",value:function(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");var n=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;n-=(25*r-10)*r-55,e>=7&&(n-=36)}return i(208<=n&&n<=29648),n}},{key:"getNumDataCodewords",value:function(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var n=[],r=0;r<e-1;r++)n.push(0);n.push(1);for(var o=1,i=0;i<e;i++){for(var a=0;a<n.length;a++)n[a]=t.reedSolomonMultiply(n[a],o),a+1<n.length&&(n[a]^=n[a+1]);o=t.reedSolomonMultiply(o,2)}return n}},{key:"reedSolomonComputeRemainder",value:function(e,n){var r,o=n.map((function(e){return 0})),i=(0,y.Z)(e);try{var a=function(){var e=r.value^o.shift();o.push(0),n.forEach((function(n,r){return o[r]^=t.reedSolomonMultiply(n,e)}))};for(i.s();!(r=i.n()).done;)a()}catch(s){i.e(s)}finally{i.f()}return o}},{key:"reedSolomonMultiply",value:function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var n=0,r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(t>>>r&1)*e;return i(n>>>8==0),n}}]),t}(),n=t;function r(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(var r=t-1;r>=0;r--)n.push(e>>>r&1)}function o(e,t){return 0!=(e>>>t&1)}function i(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;var a=function(){function e(t,n,r){if((0,m.Z)(this,e),this.mode=t,this.numChars=n,this.bitData=r,n<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return(0,E.Z)(e,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(t){var n,o=[],i=(0,y.Z)(t);try{for(i.s();!(n=i.n()).done;){r(n.value,8,o)}}catch(a){i.e(a)}finally{i.f()}return new e(e.Mode.BYTE,t.length,o)}},{key:"makeNumeric",value:function(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");for(var n=[],o=0;o<t.length;){var i=Math.min(t.length-o,3);r(parseInt(t.substr(o,i),10),3*i+1,n),o+=i}return new e(e.Mode.NUMERIC,t.length,n)}},{key:"makeAlphanumeric",value:function(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");var n,o=[];for(n=0;n+2<=t.length;n+=2){var i=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));r(i+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),11,o)}return n<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,o),new e(e.Mode.ALPHANUMERIC,t.length,o)}},{key:"makeSegments",value:function(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}},{key:"makeEci",value:function(t){var n=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)r(t,8,n);else if(t<16384)r(2,2,n),r(t,14,n);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,n),r(t,21,n)}return new e(e.Mode.ECI,0,n)}},{key:"isNumeric",value:function(t){return e.NUMERIC_REGEX.test(t)}},{key:"isAlphanumeric",value:function(t){return e.ALPHANUMERIC_REGEX.test(t)}},{key:"getTotalBits",value:function(e,t){var n,r=0,o=(0,y.Z)(e);try{for(o.s();!(n=o.n()).done;){var i=n.value,a=i.mode.numCharCountBits(t);if(i.numChars>=1<<a)return 1/0;r+=4+a+i.bitData.length}}catch(s){o.e(s)}finally{o.f()}return r}},{key:"toUtf8ByteArray",value:function(e){e=encodeURI(e);for(var t=[],n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}}]),e}();a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=a}(h||(h={})),function(e){var t=(0,E.Z)((function e(t,n){(0,m.Z)(this,e),this.ordinal=t,this.formatBits=n})),n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n}((d=h||(h={})).QrCode||(d.QrCode={})),function(e){!function(e){var t=function(){function e(t,n){(0,m.Z)(this,e),this.modeBits=t,this.numBitsCharCount=n}return(0,E.Z)(e,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),e}(),n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n}(e.QrSegment||(e.QrSegment={}))}(h||(h={}));var A=h,P={L:A.QrCode.Ecc.LOW,M:A.QrCode.Ecc.MEDIUM,Q:A.QrCode.Ecc.QUARTILE,H:A.QrCode.Ecc.HIGH},b="#FFFFFF",I="#000000",S=4,x=.1;function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[];return e.forEach((function(e,r){var o=null;e.forEach((function(i,a){if(!i&&null!==o)return n.push("M".concat(o+t," ").concat(r+t,"h").concat(a-o,"v1H").concat(o+t,"z")),void(o=null);if(a!==e.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?n.push("M".concat(a+t,",").concat(r+t," h1v1H").concat(a+t,"z")):n.push("M".concat(o+t,",").concat(r+t," h").concat(a+1-o,"v1H").concat(o+t,"z"))}}))})),n.join("")}function _(e,t){return e.slice().map((function(e,n){return n<t.y||n>=t.y+t.h?e:e.map((function(e,n){return(n<t.x||n>=t.x+t.w)&&e}))}))}function z(e,t,n,r){if(null==r)return null;var o=n?S:0,i=e.length+2*o,a=Math.floor(t*x),s=i/t,l=(r.width||a)*s,u=(r.height||a)*s,c=null==r.x?e.length/2-l/2:r.x*s,h=null==r.y?e.length/2-u/2:r.y*s,d=null;if(r.excavate){var f=Math.floor(c),v=Math.floor(h);d={x:f,y:v,w:Math.ceil(l+c-f),h:Math.ceil(u+h-v)}}return{x:c,y:h,h:u,w:l,excavation:d}}var L=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function F(e){var t=e,n=t.value,r=t.size,o=void 0===r?128:r,a=t.level,l=void 0===a?"L":a,u=t.bgColor,c=void 0===u?b:u,h=t.fgColor,d=void 0===h?I:h,f=t.includeMargin,v=void 0!==f&&f,g=t.style,m=t.imageSettings,E=N(t,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),y=null==m?void 0:m.src,C=(0,s.useRef)(null),w=(0,s.useRef)(null),M=(0,s.useState)(!1),R=(0,i.Z)(M,2),p=(R[0],R[1]);(0,s.useEffect)((function(){if(null!=C.current){var e=C.current,t=e.getContext("2d");if(!t)return;var r=A.QrCode.encodeText(n,P[l]).getModules(),i=v?S:0,a=r.length+2*i,s=z(r,o,v,m),u=w.current,h=null!=s&&null!==u&&u.complete&&0!==u.naturalHeight&&0!==u.naturalWidth;h&&null!=s.excavation&&(r=_(r,s.excavation));var f=window.devicePixelRatio||1;e.height=e.width=o*f;var g=o/a*f;t.scale(g,g),t.fillStyle=c,t.fillRect(0,0,a,a),t.fillStyle=d,L?t.fill(new Path2D(O(r,i))):r.forEach((function(e,n){e.forEach((function(e,r){e&&t.fillRect(r+i,n+i,1,1)}))})),h&&t.drawImage(u,s.x+i,s.y+i,s.w,s.h)}})),(0,s.useEffect)((function(){p(!1)}),[y]);var x=k({height:o,width:o},g),F=null;return null!=y&&(F=s.createElement("img",{src:y,key:y,style:{display:"none"},onLoad:function(){p(!0)},ref:w})),s.createElement(s.Fragment,null,s.createElement("canvas",k({style:x,height:o,width:o,ref:C},E)),F)}var T=n(7309),B=n(1929),Z=n(4e3),H=n(43),D=n(737),U=n(5564),Q=n(9922),j=n(7521),Y=(0,U.Z)("QRCode",(function(e){return function(e){var t,n,r=e.componentCls;return n={},(0,o.Z)(n,r,Object.assign(Object.assign({},(0,j.Wf)(e)),(t={display:"flex",justifyContent:"center",alignItems:"center",padding:e.paddingSM,backgroundColor:e.colorWhite,borderRadius:e.borderRadiusLG,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),position:"relative",width:"100%",height:"100%",overflow:"hidden"},(0,o.Z)(t,"& > ".concat(r,"-mask"),(0,o.Z)({position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:e.colorText,lineHeight:e.lineHeight,background:e.QRCodeMaskBackgroundColor,textAlign:"center"},"& > ".concat(r,"-expired"),{color:e.QRCodeExpiredTextColor})),(0,o.Z)(t,"&-icon",{marginBlockEnd:e.marginXS,fontSize:e.controlHeight}),t))),(0,o.Z)(n,"".concat(r,"-borderless"),{borderColor:"transparent"}),n}((0,Q.TS)(e,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"}))})),V=D.Z.useToken;var W=function(e){var t=e.value,n=e.icon,r=void 0===n?"":n,a=e.size,l=void 0===a?160:a,u=e.iconSize,c=void 0===u?40:u,h=e.color,d=void 0===h?"#000":h,v=e.errorLevel,m=void 0===v?"M":v,E=e.status,y=void 0===E?"active":E,C=e.bordered,w=void 0===C||C,M=e.onRefresh,R=e.style,p=e.className,k=e.rootClassName,N=e.prefixCls,A=e.bgColor,P=void 0===A?"transparent":A,b=(0,(0,s.useContext)(B.E_).getPrefixCls)("qrcode",N),I=Y(b),S=(0,i.Z)(I,2),x=S[0],O=S[1],_=V().token,z=(0,s.useMemo)((function(){var e={src:r,x:void 0,y:void 0,height:c,width:c,excavate:!0};return{value:t,size:l-2*(_.paddingSM+_.lineWidth),level:m,bgColor:P,fgColor:d,imageSettings:r?e:void 0}}),[m,d,r,c,l,t,P]),L=(0,Z.Z)("QRCode"),D=(0,i.Z)(L,1)[0];if(!t)return null;var U=g()(b,p,k,O,(0,o.Z)({},"".concat(b,"-borderless"),!w));return x(s.createElement("div",{style:Object.assign(Object.assign({},R),{width:l,height:l,backgroundColor:P}),className:U},"active"!==y&&s.createElement("div",{className:"".concat(b,"-mask")},"loading"===y&&s.createElement(H.Z,null),"expired"===y&&s.createElement(s.Fragment,null,s.createElement("p",{className:"".concat(b,"-expired")},null===D||void 0===D?void 0:D.expired),M&&s.createElement(T.ZP,{type:"link",icon:s.createElement(f,null),onClick:M},null===D||void 0===D?void 0:D.refresh))),s.createElement(F,Object.assign({},z))))},X=n(7257),G=n(7689),K=n(383),$=n(184);var J=(0,X.Pi)((function(){var e=(0,G.s0)();return(0,$.jsxs)("div",{className:"App-Home",children:[(0,$.jsxs)(r.Z,{children:[(0,$.jsx)(W,{errorLevel:"H",value:window.location.href,icon:"".concat(window.location.href,"/favicon.ico")}),"QR Code"]}),(0,$.jsx)("p",{className:"line animation",children:"\u79d1 \u6280 \u521b \u672a \u6765"}),(0,$.jsx)("p",{className:"line animation2",children:"\u94f6 \u6cb3 \u5b9a \u5236 \u6210 \u5c31 \u751f \u6d3b \u4e4b \u7f8e !"}),(0,$.jsx)(T.ZP,{type:"primary",size:"middle",onClick:function(){if(!0===K.H.isAgent)e("/product");else e("/")},style:{width:"50%"},children:"\u5f00 \u59cb !"})]})}))}}]);
//# sourceMappingURL=188.47ca860b.chunk.js.map