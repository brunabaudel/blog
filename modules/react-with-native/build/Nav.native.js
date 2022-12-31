"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Nav=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_native_1=require("react-native"),tailwind_rn_1=require("tailwind-rn"),trimClassName_1=require("../../util/trimClassName"),util_1=require("../../util/util"),Nav=function(e){var t=e.native,r=e.textClassName,i=e.className,n=e.children,a=(0,tailwind_rn_1.useTailwind)(),s=t||{},l=s.style,_=__rest(s,["style"]),o=i?a((0,trimClassName_1.trimClassName)(i)):{};return(0,jsx_runtime_1.jsx)(react_native_1.View,__assign({style:[o,l,{flexDirection:"row",alignItems:"center",elevation:0}]},_,{children:(0,util_1.wrapInTextIfNeeded)(n,r)}))};exports.Nav=Nav;
//# sourceMappingURL=Nav.native.js.map