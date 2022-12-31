"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(e){o(e)}}function l(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},__spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDbModelNames=void 0;var bundle_util_1=require("bundle-util"),database_1=require("database"),db_util_1=require("db-util"),fs_util_1=require("fs-util"),get_path_1=require("get-path"),k_explore_1=require("k-explore"),sdk_db_1=require("sdk-db"),getDbModelNames=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,a,o;return __generator(this,(function(i){switch(i.label){case 0:return t=null==e?void 0:e.bundleId,r=void 0,t?[4/*yield*/,database_1.db.get("BundleConfig")]:[3/*break*/,3];case 1:return(n=i.sent().find((function(e){return e.id===t})))?[4/*yield*/,(0,bundle_util_1.getDbModelsForBundle)(n)]:[3/*break*/,3];case 2:r=i.sent(),i.label=3;case 3:return a=(0,get_path_1.getProjectRoot)(),(0,get_path_1.isBundle)(a)&&a?[4/*yield*/,(0,k_explore_1.exploreOperationFolders)({basePath:fs_util_1.path.join(a,"packages")})]:[3/*break*/,6];case 4:return o=i.sent().map(fs_util_1.getLastFolder),[4/*yield*/,(0,db_util_1.getDbModelsFromOperations)(o)];case 5:r=i.sent(),i.label=6;case 6:return[2/*return*/,r?null==r?void 0:r.map((function(e){return e.name})):__spreadArray([],sdk_db_1.dbModelKeys,!0)]}}))}))};exports.getDbModelNames=getDbModelNames;
//# sourceMappingURL=getDbModelNames.js.map