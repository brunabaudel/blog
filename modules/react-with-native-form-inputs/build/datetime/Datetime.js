"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},__assign.apply(this,arguments)},__rest=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.DatetimeInput=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_datetime_1=__importDefault(require("react-datetime")),react_1=require("react"),react_with_native_ui_1=require("react-with-native-ui"),DatetimeInput=function(e){var t=e.extra,a=e.value,r=e.onChange,n=__rest(e,["extra","value","onChange"]),i=(__assign(__assign({},t),{type:"dateTime"}),(0,react_1.useState)(new Date)),s=i[0],_=i[1];return(0,jsx_runtime_1.jsx)("div",{children:
// @ts-ignore
(0,jsx_runtime_1.jsx)(react_datetime_1.default,__assign({},n,{value:a?new Date(a):new Date,initialValue:s,onChange:function(e){!function(e){console.warn("A date has been picked: ",e),_(e),r(e)}(new Date(e))},className:react_with_native_ui_1.UI.dateInput}))})};exports.DatetimeInput=DatetimeInput,exports.DatetimeInput.defaultInitialValue=new Date;
//# sourceMappingURL=Datetime.js.map