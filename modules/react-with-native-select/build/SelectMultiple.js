"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SelectMultipleInput=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_with_native_ui_1=require("react-with-native-ui"),Select_1=require("./Select"),react_with_native_1=require("react-with-native"),SelectMultipleInput=function(e){var t=e.onChange,r=e.options,n=e.className,a=e.value,i=e.autoSuggest,l=e.noPlaceholder,s=e.placeholder,c=e.title,u=e.uniqueFieldId,_=[{label:c||"Choose a value",value:""}].concat(r).filter((function(e){return!a.find((function(t){return e.value===t.value}))}));
//console.log({ value, extraOptions: extra.options });
return(0,jsx_runtime_1.jsxs)(react_with_native_1.Div,__assign({className:"flex flex-row flex-wrap"},{children:[a.map((function(e,r){return(0,jsx_runtime_1.jsx)(react_with_native_1.Button,__assign({onClick:function(){var r=a.filter((function(t){return t.value!==e.value}));t(r)},className:"mr-3 px-3 py-2 rounded-md border border-gray-400"},{children:(0,jsx_runtime_1.jsxs)(react_with_native_1.P,__assign({className:"text-xs"},{children:[e.label," ",(0,jsx_runtime_1.jsx)(react_with_native_1.Span,__assign({textClassName:"text-red-500 text-xs"},{children:"(x)"}))]}))}),"selected".concat(u).concat(r))})),_.length>1?(0,jsx_runtime_1.jsx)(Select_1.Select,{placeholder:s,noPlaceholder:l,autoSuggest:i,className:n||react_with_native_ui_1.UI.selectInput,title:c||"",options:_,onChange:function(e){
// console.log({ selected });
if(e){var r=__spreadArray([],a,!0);r.push(e),
// console.log({ value, newValue });
t(r)}}}):null]}))};exports.SelectMultipleInput=SelectMultipleInput;
//# sourceMappingURL=SelectMultiple.js.map