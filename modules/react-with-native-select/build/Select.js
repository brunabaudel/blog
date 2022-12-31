"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Select=void 0;var jsx_runtime_1=require("react/jsx-runtime"),react_1=require("react"),util_1=require("./util"),Select=function(e){var t=e.options,n=e.onChange,r=e.value,i=e.title,a=e.containerClassName,l=e.selectFirstOption,s=e.autoSuggest,u=(e.children,e.className),o=e.noPlaceholder,c=e.placeholder,_=(e.ios,(0,react_1.useState)("")),v=_[0],d=_[1],g=(0,react_1.useState)("list".concat(String(Math.round(1e5*Math.random()))))[0],h=((0,util_1.getRealValue)({value:r,selectFirstOption:l,options:t,title:i}),function(){return(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children:t.map((function(e,t){return(0,jsx_runtime_1.jsx)("option",__assign({value:String(e.value)},{children:e.label}),t)}))})});return(0,jsx_runtime_1.jsx)("div",__assign({className:a},{children:s?(0,jsx_runtime_1.jsxs)("span",{children:[(0,jsx_runtime_1.jsx)("input",{list:g,placeholder:o?void 0:c||"Type or select one",onChange:function(e){var r=e.target.value,i=t.find((function(e){return e.value===r}));i?(null==n||n(i),d("")):d(r)},className:u,value:v&&v.length>0?v:(null==r?void 0:r.value)?String(null==r?void 0:r.value):""}),(0,jsx_runtime_1.jsx)("datalist",__assign({placeholder:i,id:g},{children:h()}))]}):(0,jsx_runtime_1.jsx)("select",__assign({onChange:function(e){var r=e.target.value,i=t.find((function(e){return String(e.value)===r}))||null;null==n||n(i)},className:u,value:String(null==r?void 0:r.value)},{children:h()}))}))};exports.Select=Select;
//# sourceMappingURL=Select.js.map