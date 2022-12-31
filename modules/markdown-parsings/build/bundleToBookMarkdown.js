"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{l(n.next(e))}catch(e){a(e)}}function u(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,u)}l((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},__spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,o=0,a=r.length;o<a;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.bundleToBookMarkdown=void 0;var bundle_util_1=require("bundle-util"),js_util_1=require("js-util"),getOperationSummary_1=require("./getOperationSummary"),operationToMarkdown_1=require("./operationToMarkdown"),merge_1=require("./parsing/merge"),bundleToBookMarkdown=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t,n,o,a,i,u;return __generator(this,(function(l){switch(l.label){case 0:return r=e.bundleConfig,e.coverImagePath,e.title,t=e.isModulesIncluded,n=e.manualProjectRoot,o=(0,bundle_util_1.getBundleSummary)(r),r.createBundleConfig.docsRelativeFolderPath,a=t?[]:o.moduleNames,i=__spreadArray(__spreadArray(__spreadArray([],o.appNames,!0),o.packageNames,!0),a,!0),[4/*yield*/,Promise.all(i.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var r,t;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,(0,getOperationSummary_1.getOperationSummary)({operationName:e,manualProjectRoot:n})];case 1:return(r=o.sent())?[4/*yield*/,(0,operationToMarkdown_1.operationToMarkdown)({operationSummary:r,returnType:"parse"})]:[2/*return*/];case 2:return(t=o.sent())?[2/*return*/,t]:[2/*return*/]}}))}))})))];case 1:return u=l.sent().filter(js_util_1.notEmpty),(0,merge_1.mergeMarkdownParse)(u),[2/*return*/]}}))}))};exports.bundleToBookMarkdown=bundleToBookMarkdown;
//# sourceMappingURL=bundleToBookMarkdown.js.map