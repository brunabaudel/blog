"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function u(e){try{i(n.next(e))}catch(e){a(e)}}function l(e){try{i(n.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,l)}i((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDbModel=void 0;var database_1=require("database"),js_util_1=require("js-util"),getDbModel=function(
/**
 * the interfaceName you want to get
 */
e,
/**
 * optionally, provide a configuration
 */
t,
/**
 * This search should be done on the deepest JSON value's of the whole thing. The purpose is not limiting the content to user, but rather just a nice user experience where one can quickly search
 */
r){return __awaiter(void 0,void 0,void 0,(function(){var n,o,a,u,l,i,s,c,v,d,f,b;return __generator(this,(function(h){switch(h.label){case 0:return e?[4/*yield*/,database_1.db.get(e)]:[2/*return*/,{data:[],hasMore:!1,message:"No interfaceName posted"}];case 1:return n=h.sent(),o=n.slice(null==t?void 0:t.startFromIndex),a=(null==t?void 0:t.maxRows)?o.slice(0,t.maxRows):o,u=a.length<o.length,l=(null===(d=null==t?void 0:t.filter)||void 0===d?void 0:d.length)?null==t?void 0:t.filter.reduce((function(e,t){return e.filter((function(e){var r=e[t.objectParameterKey];if("equal"===t.operator)return String(r)===t.value;if("notEqual"===t.operator)return String(r)===t.value;var n=String(r).toLowerCase(),o=String(t.value).toLowerCase();return"endsWith"===t.operator?n.endsWith(o):"startsWith"===t.operator?n.startsWith(o):"includes"===t.operator?n.includes(o):"includesLetters"===t.operator?(0,js_util_1.hasAllLetters)(n,o):"greaterThan"===t.operator&&null!==t.value&&void 0!==t.value?Number(r)>Number(t.value):"lessThan"===t.operator&&null!==t.value&&void 0!==t.value?Number(r)<Number(t.value):"greaterThanOrEqual"===t.operator&&null!==t.value&&void 0!==t.value?Number(r)>=Number(t.value):"lessThanOrEqual"===t.operator&&null!==t.value&&void 0!==t.value&&Number(r)<=Number(t.value)}))}),a):a,i=(null==t?void 0:t.sort)?t.sort.reduce((function(e,t){return e.sort((function(e,r){
// @ts-ignore
var n=e[t.objectParameterKey],o=r[t.objectParameterKey],a="ascending"===t.sortDirection?1:-1;
// @ts-ignore
return Number(n)<Number(o)?a:-1*a}))}),l):l,s=r&&r.length>0?i.filter((function(e){return Object.values(e).map((function(e){return JSON.stringify(e)})).join(",").toLowerCase().includes(r.toLowerCase())})):i,c=(null===(f=null==t?void 0:t.objectParameterKeys)||void 0===f?void 0:f.length)?s.map((function(e){return(0,js_util_1.getSubsetFromObject)(e,t.objectParameterKeys)})):s,v=(null===(b=null==t?void 0:t.ignoreObjectParameterKeys)||void 0===b?void 0:b.length)?c.map((function(e){return(0,js_util_1.removeOptionalKeysFromObjectStrings)(e,t.ignoreObjectParameterKeys)})):c,[2/*return*/,{datasetConfig:t,data:v,hasMore:u}]}}))}))};exports.getDbModel=getDbModel;
//# sourceMappingURL=getDbModel.js.map