/*! For license information please see 915.65f51f05.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkagented=self.webpackChunkagented||[]).push([[915],{8915:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var r,i,o=n(5152),a=n(7128),s=n(4942),l=n(9439),u=n(3605),c=n(1694),h=n.n(c),d=n(5671),f=n(3144),v=n(7762),g=n(2791),m=Object.defineProperty,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,w=function(e,t,n){return t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},M=function(e,t){for(var n in t||(t={}))y.call(t,n)&&w(e,n,t[n]);if(E){var r,i=(0,v.Z)(E(t));try{for(i.s();!(r=i.n()).done;){n=r.value;C.call(t,n)&&w(e,n,t[n])}}catch(o){i.e(o)}finally{i.f()}}return e},p=function(e,t){var n={};for(var r in e)y.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&E){var i,o=(0,v.Z)(E(e));try{for(o.s();!(i=o.n()).done;){r=i.value;t.indexOf(r)<0&&C.call(e,r)&&(n[r]=e[r])}}catch(a){o.e(a)}finally{o.f()}}return n};!function(e){var t=function(){function t(e,n,r,i){if((0,d.Z)(this,t),this.version=e,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var a=[],s=0;s<this.size;s++)a.push(!1);for(var l=0;l<this.size;l++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var u=this.addEccAndInterleave(r);if(this.drawCodewords(u),-1==i)for(var c=1e9,h=0;h<8;h++){this.applyMask(h),this.drawFormatBits(h);var f=this.getPenaltyScore();f<c&&(i=h,c=f),this.applyMask(h)}o(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}return(0,f.Z)(t,[{key:"getModule",value:function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),n=t.length,r=0;r<n;r++)for(var i=0;i<n;i++)0==r&&0==i||0==r&&i==n-1||r==n-1&&0==i||this.drawAlignmentPattern(t[r],t[i]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,n=t,r=0;r<10;r++)n=n<<1^1335*(n>>>9);var a=21522^(t<<10|n);o(a>>>15==0);for(var s=0;s<=5;s++)this.setFunctionModule(8,s,i(a,s));this.setFunctionModule(8,7,i(a,6)),this.setFunctionModule(8,8,i(a,7)),this.setFunctionModule(7,8,i(a,8));for(var l=9;l<15;l++)this.setFunctionModule(14-l,8,i(a,l));for(var u=0;u<8;u++)this.setFunctionModule(this.size-1-u,8,i(a,u));for(var c=8;c<15;c++)this.setFunctionModule(8,this.size-15+c,i(a,c));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^7973*(e>>>11);var n=this.version<<12|e;o(n>>>18==0);for(var r=0;r<18;r++){var a=i(n,r),s=this.size-11+r%3,l=Math.floor(r/3);this.setFunctionModule(s,l,a),this.setFunctionModule(l,s,a)}}}},{key:"drawFinderPattern",value:function(e,t){for(var n=-4;n<=4;n++)for(var r=-4;r<=4;r++){var i=Math.max(Math.abs(r),Math.abs(n)),o=e+r,a=t+n;0<=o&&o<this.size&&0<=a&&a<this.size&&this.setFunctionModule(o,a,2!=i&&4!=i)}}},{key:"drawAlignmentPattern",value:function(e,t){for(var n=-2;n<=2;n++)for(var r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,1!=Math.max(Math.abs(r),Math.abs(n)))}},{key:"setFunctionModule",value:function(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}},{key:"addEccAndInterleave",value:function(e){var n=this.version,r=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");for(var i=t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],a=t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(t.getNumRawDataModules(n)/8),l=i-s%i,u=Math.floor(s/i),c=[],h=t.reedSolomonComputeDivisor(a),d=0,f=0;d<i;d++){var v=e.slice(f,f+u-a+(d<l?0:1));f+=v.length;var g=t.reedSolomonComputeRemainder(v,h);d<l&&v.push(0),c.push(v.concat(g))}for(var m=[],E=function(e){c.forEach((function(t,n){(e!=u-a||n>=l)&&m.push(t[e])}))},y=0;y<c[0].length;y++)E(y);return o(m.length==s),m}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var n=0,r=this.size-1;r>=1;r-=2){6==r&&(r=5);for(var a=0;a<this.size;a++)for(var s=0;s<2;s++){var l=r-s,u=0==(r+1&2)?this.size-1-a:a;!this.isFunction[u][l]&&n<8*e.length&&(this.modules[u][l]=i(e[n>>>3],7-(7&n)),n++)}}o(n==8*e.length)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var n=0;n<this.size;n++){var r=void 0;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}},{key:"getPenaltyScore",value:function(){for(var e=0,n=0;n<this.size;n++){for(var r=!1,i=0,a=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[n][s]==r?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,a),r||(e+=this.finderPenaltyCountPatterns(a)*t.PENALTY_N3),r=this.modules[n][s],i=1);e+=this.finderPenaltyTerminateAndCount(r,i,a)*t.PENALTY_N3}for(var l=0;l<this.size;l++){for(var u=!1,c=0,h=[0,0,0,0,0,0,0],d=0;d<this.size;d++)this.modules[d][l]==u?5==++c?e+=t.PENALTY_N1:c>5&&e++:(this.finderPenaltyAddHistory(c,h),u||(e+=this.finderPenaltyCountPatterns(h)*t.PENALTY_N3),u=this.modules[d][l],c=1);e+=this.finderPenaltyTerminateAndCount(u,c,h)*t.PENALTY_N3}for(var f=0;f<this.size-1;f++)for(var g=0;g<this.size-1;g++){var m=this.modules[f][g];m==this.modules[f][g+1]&&m==this.modules[f+1][g]&&m==this.modules[f+1][g+1]&&(e+=t.PENALTY_N2)}var E,y=0,C=(0,v.Z)(this.modules);try{for(C.s();!(E=C.n()).done;){y=E.value.reduce((function(e,t){return e+(t?1:0)}),y)}}catch(p){C.e(p)}finally{C.f()}var w=this.size*this.size,M=Math.ceil(Math.abs(20*y-10*w)/w)-1;return o(0<=M&&M<=9),o(0<=(e+=M*t.PENALTY_N4)&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),n=[6],r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}},{key:"finderPenaltyCountPatterns",value:function(e){var t=e[1];o(t<=3*this.size);var n=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(n&&e[0]>=4*t&&e[6]>=t?1:0)+(n&&e[6]>=4*t&&e[0]>=t?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}},{key:"finderPenaltyAddHistory",value:function(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}}],[{key:"encodeText",value:function(n,r){var i=e.QrSegment.makeSegments(n);return t.encodeSegments(i,r)}},{key:"encodeBinary",value:function(n,r){var i=e.QrSegment.makeBytes(n);return t.encodeSegments([i],r)}},{key:"encodeSegments",value:function(e,n){var i,s,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,h=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(t.MIN_VERSION<=l&&l<=u&&u<=t.MAX_VERSION)||c<-1||c>7)throw new RangeError("Invalid value");for(i=l;;i++){var d=8*t.getNumDataCodewords(i,n),f=a.getTotalBits(e,i);if(f<=d){s=f;break}if(i>=u)throw new RangeError("Data too long")}for(var g=0,m=[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH];g<m.length;g++){var E=m[g];h&&s<=8*t.getNumDataCodewords(i,E)&&(n=E)}var y,C=[],w=(0,v.Z)(e);try{for(w.s();!(y=w.n()).done;){var M=y.value;r(M.mode.modeBits,4,C),r(M.numChars,M.mode.numCharCountBits(i),C);var p,R=(0,v.Z)(M.getData());try{for(R.s();!(p=R.n()).done;){var k=p.value;C.push(k)}}catch(b){R.e(b)}finally{R.f()}}}catch(b){w.e(b)}finally{w.f()}o(C.length==s);var N=8*t.getNumDataCodewords(i,n);o(C.length<=N),r(0,Math.min(4,N-C.length),C),r(0,(8-C.length%8)%8,C),o(C.length%8==0);for(var A=236;C.length<N;A^=253)r(A,8,C);for(var P=[];8*P.length<C.length;)P.push(0);return C.forEach((function(e,t){return P[t>>>3]|=e<<7-(7&t)})),new t(i,n,P,c)}},{key:"getNumRawDataModules",value:function(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw new RangeError("Version number out of range");var n=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;n-=(25*r-10)*r-55,e>=7&&(n-=36)}return o(208<=n&&n<=29648),n}},{key:"getNumDataCodewords",value:function(e,n){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var n=[],r=0;r<e-1;r++)n.push(0);n.push(1);for(var i=1,o=0;o<e;o++){for(var a=0;a<n.length;a++)n[a]=t.reedSolomonMultiply(n[a],i),a+1<n.length&&(n[a]^=n[a+1]);i=t.reedSolomonMultiply(i,2)}return n}},{key:"reedSolomonComputeRemainder",value:function(e,n){var r,i=n.map((function(e){return 0})),o=(0,v.Z)(e);try{var a=function(){var e=r.value^i.shift();i.push(0),n.forEach((function(n,r){return i[r]^=t.reedSolomonMultiply(n,e)}))};for(o.s();!(r=o.n()).done;)a()}catch(s){o.e(s)}finally{o.f()}return i}},{key:"reedSolomonMultiply",value:function(e,t){if(e>>>8!=0||t>>>8!=0)throw new RangeError("Byte out of range");for(var n=0,r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(t>>>r&1)*e;return o(n>>>8==0),n}}]),t}(),n=t;function r(e,t,n){if(t<0||t>31||e>>>t!=0)throw new RangeError("Value out of range");for(var r=t-1;r>=0;r--)n.push(e>>>r&1)}function i(e,t){return 0!=(e>>>t&1)}function o(e){if(!e)throw new Error("Assertion error")}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=n;var a=function(){function e(t,n,r){if((0,d.Z)(this,e),this.mode=t,this.numChars=n,this.bitData=r,n<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return(0,f.Z)(e,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(t){var n,i=[],o=(0,v.Z)(t);try{for(o.s();!(n=o.n()).done;){r(n.value,8,i)}}catch(a){o.e(a)}finally{o.f()}return new e(e.Mode.BYTE,t.length,i)}},{key:"makeNumeric",value:function(t){if(!e.isNumeric(t))throw new RangeError("String contains non-numeric characters");for(var n=[],i=0;i<t.length;){var o=Math.min(t.length-i,3);r(parseInt(t.substr(i,o),10),3*o+1,n),i+=o}return new e(e.Mode.NUMERIC,t.length,n)}},{key:"makeAlphanumeric",value:function(t){if(!e.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");var n,i=[];for(n=0;n+2<=t.length;n+=2){var o=45*e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));r(o+=e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n+1)),11,i)}return n<t.length&&r(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)),6,i),new e(e.Mode.ALPHANUMERIC,t.length,i)}},{key:"makeSegments",value:function(t){return""==t?[]:e.isNumeric(t)?[e.makeNumeric(t)]:e.isAlphanumeric(t)?[e.makeAlphanumeric(t)]:[e.makeBytes(e.toUtf8ByteArray(t))]}},{key:"makeEci",value:function(t){var n=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)r(t,8,n);else if(t<16384)r(2,2,n),r(t,14,n);else{if(!(t<1e6))throw new RangeError("ECI assignment value out of range");r(6,3,n),r(t,21,n)}return new e(e.Mode.ECI,0,n)}},{key:"isNumeric",value:function(t){return e.NUMERIC_REGEX.test(t)}},{key:"isAlphanumeric",value:function(t){return e.ALPHANUMERIC_REGEX.test(t)}},{key:"getTotalBits",value:function(e,t){var n,r=0,i=(0,v.Z)(e);try{for(i.s();!(n=i.n()).done;){var o=n.value,a=o.mode.numCharCountBits(t);if(o.numChars>=1<<a)return 1/0;r+=4+a+o.bitData.length}}catch(s){i.e(s)}finally{i.f()}return r}},{key:"toUtf8ByteArray",value:function(e){e=encodeURI(e);for(var t=[],n=0;n<e.length;n++)"%"!=e.charAt(n)?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}}]),e}();a.NUMERIC_REGEX=/^[0-9]*$/,a.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,a.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=a}(r||(r={})),function(e){var t=(0,f.Z)((function e(t,n){(0,d.Z)(this,e),this.ordinal=t,this.formatBits=n})),n=t;n.LOW=new t(0,1),n.MEDIUM=new t(1,0),n.QUARTILE=new t(2,3),n.HIGH=new t(3,2),e.Ecc=n}((i=r||(r={})).QrCode||(i.QrCode={})),function(e){!function(e){var t=function(){function e(t,n){(0,d.Z)(this,e),this.modeBits=t,this.numBitsCharCount=n}return(0,f.Z)(e,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),e}(),n=t;n.NUMERIC=new t(1,[10,12,14]),n.ALPHANUMERIC=new t(2,[9,11,13]),n.BYTE=new t(4,[8,16,16]),n.KANJI=new t(8,[8,10,12]),n.ECI=new t(7,[0,0,0]),e.Mode=n}(e.QrSegment||(e.QrSegment={}))}(r||(r={}));var R=r,k={L:R.QrCode.Ecc.LOW,M:R.QrCode.Ecc.MEDIUM,Q:R.QrCode.Ecc.QUARTILE,H:R.QrCode.Ecc.HIGH},N="#FFFFFF",A="#000000",P=4,b=.1;function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[];return e.forEach((function(e,r){var i=null;e.forEach((function(o,a){if(!o&&null!==i)return n.push("M".concat(i+t," ").concat(r+t,"h").concat(a-i,"v1H").concat(i+t,"z")),void(i=null);if(a!==e.length-1)o&&null===i&&(i=a);else{if(!o)return;null===i?n.push("M".concat(a+t,",").concat(r+t," h1v1H").concat(a+t,"z")):n.push("M".concat(i+t,",").concat(r+t," h").concat(a+1-i,"v1H").concat(i+t,"z"))}}))})),n.join("")}function S(e,t){return e.slice().map((function(e,n){return n<t.y||n>=t.y+t.h?e:e.map((function(e,n){return(n<t.x||n>=t.x+t.w)&&e}))}))}function I(e,t,n,r){if(null==r)return null;var i=n?P:0,o=e.length+2*i,a=Math.floor(t*b),s=o/t,l=(r.width||a)*s,u=(r.height||a)*s,c=null==r.x?e.length/2-l/2:r.x*s,h=null==r.y?e.length/2-u/2:r.y*s,d=null;if(r.excavate){var f=Math.floor(c),v=Math.floor(h);d={x:f,y:v,w:Math.ceil(l+c-f),h:Math.ceil(u+h-v)}}return{x:c,y:h,h:u,w:l,excavation:d}}var z=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function O(e){var t=e,n=t.value,r=t.size,i=void 0===r?128:r,o=t.level,a=void 0===o?"L":o,s=t.bgColor,u=void 0===s?N:s,c=t.fgColor,h=void 0===c?A:c,d=t.includeMargin,f=void 0!==d&&d,v=t.style,m=t.imageSettings,E=p(t,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),y=null==m?void 0:m.src,C=(0,g.useRef)(null),w=(0,g.useRef)(null),b=(0,g.useState)(!1),O=(0,l.Z)(b,2),_=(O[0],O[1]);(0,g.useEffect)((function(){if(null!=C.current){var e=C.current,t=e.getContext("2d");if(!t)return;var r=R.QrCode.encodeText(n,k[a]).getModules(),o=f?P:0,s=r.length+2*o,l=I(r,i,f,m),c=w.current,d=null!=l&&null!==c&&c.complete&&0!==c.naturalHeight&&0!==c.naturalWidth;d&&null!=l.excavation&&(r=S(r,l.excavation));var v=window.devicePixelRatio||1;e.height=e.width=i*v;var g=i/s*v;t.scale(g,g),t.fillStyle=u,t.fillRect(0,0,s,s),t.fillStyle=h,z?t.fill(new Path2D(x(r,o))):r.forEach((function(e,n){e.forEach((function(e,r){e&&t.fillRect(r+o,n+o,1,1)}))})),d&&t.drawImage(c,l.x+o,l.y+o,l.w,l.h)}})),(0,g.useEffect)((function(){_(!1)}),[y]);var L=M({height:i,width:i},v),H=null;return null!=y&&(H=g.createElement("img",{src:y,key:y,style:{display:"none"},onLoad:function(){_(!0)},ref:w})),g.createElement(g.Fragment,null,g.createElement("canvas",M({style:L,height:i,width:i,ref:C},E)),H)}function _(e){var t=e,n=t.value,r=t.size,i=void 0===r?128:r,o=t.level,a=void 0===o?"L":o,s=t.bgColor,l=void 0===s?N:s,u=t.fgColor,c=void 0===u?A:u,h=t.includeMargin,d=void 0!==h&&h,f=t.imageSettings,v=p(t,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),m=R.QrCode.encodeText(n,k[a]).getModules(),E=d?P:0,y=m.length+2*E,C=I(m,i,d,f),w=null;null!=f&&null!=C&&(null!=C.excavation&&(m=S(m,C.excavation)),w=g.createElement("image",{xlinkHref:f.src,height:C.h,width:C.w,x:C.x+E,y:C.y+E,preserveAspectRatio:"none"}));var b=x(m,E);return g.createElement("svg",M({height:i,width:i,viewBox:"0 0 ".concat(y," ").concat(y)},v),g.createElement("path",{fill:l,d:"M0,0 h".concat(y,"v").concat(y,"H0z"),shapeRendering:"crispEdges"}),g.createElement("path",{fill:c,d:b,shapeRendering:"crispEdges"}),w)}var L=n(7309),H=n(1929),Z=n(4e3),F=n(43),T=n(3296),B=n(7521),D=n(4873),Q=n(9922),U=(0,D.Z)("QRCode",(function(e){return function(e){var t,n,r=e.componentCls;return n={},(0,s.Z)(n,r,Object.assign(Object.assign({},(0,B.Wf)(e)),(t={display:"flex",justifyContent:"center",alignItems:"center",padding:e.paddingSM,backgroundColor:e.colorWhite,borderRadius:e.borderRadiusLG,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),position:"relative",width:"100%",height:"100%",overflow:"hidden"},(0,s.Z)(t,"& > ".concat(r,"-mask"),(0,s.Z)({position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:e.colorText,lineHeight:e.lineHeight,background:e.QRCodeMaskBackgroundColor,textAlign:"center"},"& > ".concat(r,"-expired"),{color:e.QRCodeExpiredTextColor})),(0,s.Z)(t,"&-icon",{marginBlockEnd:e.marginXS,fontSize:e.controlHeight}),t))),(0,s.Z)(n,"".concat(r,"-borderless"),{borderColor:"transparent"}),n}((0,Q.TS)(e,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"}))})),j=T.Z.useToken;var V=function(e){var t=j().token,n=e.value,r=e.type,i=void 0===r?"canvas":r,o=e.icon,a=void 0===o?"":o,c=e.size,d=void 0===c?160:c,f=e.iconSize,v=void 0===f?40:f,m=e.color,E=void 0===m?t.colorText:m,y=e.errorLevel,C=void 0===y?"M":y,w=e.status,M=void 0===w?"active":w,p=e.bordered,R=void 0===p||p,k=e.onRefresh,N=e.style,A=e.className,P=e.rootClassName,b=e.prefixCls,x=e.bgColor,S=void 0===x?"transparent":x,I=(0,(0,g.useContext)(H.E_).getPrefixCls)("qrcode",b),z=U(I),T=(0,l.Z)(z,2),B=T[0],D=T[1],Q={src:a,x:void 0,y:void 0,height:v,width:v,excavate:!0},V={value:n,size:d-2*(t.paddingSM+t.lineWidth),level:C,bgColor:S,fgColor:E,imageSettings:a?Q:void 0},Y=(0,Z.Z)("QRCode"),W=(0,l.Z)(Y,1)[0];if(!n)return null;var X=h()(I,A,P,D,(0,s.Z)({},"".concat(I,"-borderless"),!R));return B(g.createElement("div",{style:Object.assign(Object.assign({},N),{width:d,height:d,backgroundColor:S}),className:X},"active"!==M&&g.createElement("div",{className:"".concat(I,"-mask")},"loading"===M&&g.createElement(F.Z,null),"expired"===M&&g.createElement(g.Fragment,null,g.createElement("p",{className:"".concat(I,"-expired")},null===W||void 0===W?void 0:W.expired),k&&g.createElement(L.ZP,{type:"link",icon:g.createElement(u.Z,null),onClick:k},null===W||void 0===W?void 0:W.refresh))),"canvas"===i?g.createElement(O,Object.assign({},V)):g.createElement(_,Object.assign({},V))))},Y=n(7257),W=n(7689),X=n(383),G=n(7462),K={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"},$=n(4291),J=function(e,t){return g.createElement($.Z,(0,G.Z)({},e,{ref:t,icon:K}))};var q=g.forwardRef(J),ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"}}]},name:"bar-chart",theme:"outlined"},te=function(e,t){return g.createElement($.Z,(0,G.Z)({},e,{ref:t,icon:ee}))};var ne=g.forwardRef(te),re=n(184);var ie=(0,Y.Pi)((function(){var e=(0,W.s0)(),t=o.Z.useApp().message;return(0,re.jsxs)("div",{className:"App-Home",children:[(0,re.jsxs)(a.Z,{children:[(0,re.jsx)(V,{errorLevel:"H",value:window.location.href}),"QR Code"]}),(0,re.jsx)("p",{className:"line animation",children:"\u79d1 \u6280 \u521b \u672a \u6765"}),(0,re.jsx)("p",{className:"line animation2",children:"\u94f6 \u6cb3 \u5b9a \u5236 \u6210 \u5c31 \u751f \u6d3b \u4e4b \u7f8e !"}),(0,re.jsx)(L.ZP,{icon:(0,re.jsx)(q,{}),type:"primary",size:"middle",onClick:function(){switch(console.log(X.H.isYun),!0){case X.H.isAgent:e("/product");break;case X.H.isStudio:e("/studio");break;case X.H.isYun:e("/yun");break;default:t.info("\u8bf7\u767b\u5f55!").then((function(){return e("/")}))}},style:{width:"50%"},children:"\u5f00 \u59cb"}),X.H.isAgent&&(0,re.jsx)(L.ZP,{icon:(0,re.jsx)(ne,{}),type:"primary",size:"middle",onClick:function(){e("/statistic")},style:{width:"50%"},children:"\u7edf \u8ba1"})]})}))}}]);
//# sourceMappingURL=915.65f51f05.chunk.js.map