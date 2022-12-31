"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function u(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,o)}s((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,a,i,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(a=2&i[0]?n.return:i[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,i[1])).done)return a;switch(n=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(a=u.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){u.label=i[1];break}if(6===i[0]&&u.label<a[1]){u.label=a[1],a=i;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(i);break}a[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createDb=void 0;var schema_util_1=require("schema-util"),fs_util_1=require("fs-util"),log_1=require("log"),js_util_1=require("js-util"),measure_performance_1=require("measure-performance"),mergeConfigs_1=require("./convention/mergeConfigs"),alter_functions_1=require("./alter/alter-functions"),getDatabaseFiles_1=require("./convention/getDatabaseFiles"),getAugmentedData_1=require("./util/getAugmentedData"),groupByFile_1=require("./util/groupByFile"),augmentItemWithReferencedDataRecursively_1=require("./util/augmentItemWithReferencedDataRecursively"),getDbFileLocation_1=require("./convention/getDbFileLocation"),maxConcurrency=1024,createDb=function(e){
// need to get
var t=function(t,n){return __awaiter(void 0,void 0,void 0,(function(){var a,i,u,o,s,c,l,_,f,m,g;return __generator(this,(function(d){switch(d.label){case 0:return a=(0,measure_performance_1.generateUniqueId)(),i=[],(0,measure_performance_1.getNewPerformance)("start",a,!0),u=(0,mergeConfigs_1.mergeConfigs)(t,e,n),i.push((0,measure_performance_1.getNewPerformance)("mergeConfigs",a)),[4/*yield*/,(0,getDatabaseFiles_1.getDatabaseFiles)(t,u)];case 1:return o=d.sent(),i.push((0,measure_performance_1.getNewPerformance)("getDatabaseFiles",a)),s={},c=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,a;return __generator(this,(function(i){switch(i.label){case 0:return e.referenceKey&&((t=(0,schema_util_1.getReferenceParameterInfo)(e.referenceKey)).isReferenceParameter&&t.interfaceName)?s[t.interfaceName]?[3/*break*/,2]:[4/*yield*/,r(t.interfaceName,{manualProjectRoot:u.manualProjectRoot})]:[2/*return*/];case 1:n=i.sent(),s[t.interfaceName]=n,i.label=2;case 2:return e.include?(a=(0,js_util_1.makeArray)(e.include),[4/*yield*/,Promise.all(a.map(c))]):[3/*break*/,4];case 3:i.sent(),i.label=4;case 4:return[2/*return*/]}}))}))},l=!(!(null==n?void 0:n.include)||Array.isArray(n.include))&&!0===n.include.auto,_=l||!(null==n?void 0:n.include)?[]:(0,js_util_1.makeArray)(null==n?void 0:n.include),[4/*yield*/,Promise.all(_.map(c))];case 2:return d.sent(),i.push((0,measure_performance_1.getNewPerformance)("processInclude",a)),f=o.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,a,i;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,(0,getAugmentedData_1.getAugmentedData)(e,u.dbStorageMethod)];case 1:return(t=o.sent())?(r=(null==n?void 0:n.filter)?t.filter(n.filter):t,a=_?r.map((function(e){return(0,augmentItemWithReferencedDataRecursively_1.augmentItemWithReferencedDataRecursively)(e,_,s)})):r,l&&
/**
                                        TODO:
                                
                                        Go over all keys in the first item of augmentedItems, and see if it contains reference keys.
                                
                                        For every reference key, create an `Include`. call `includes.map(processInclude)`
                                        
                                        Call augmentItemRecursively with the includes.
                                
                                        */
(0,log_1.log)("auto is not supported yet",{type:"warning"}),[2/*return*/,(i={},i[e.absolutePath]=a,i)]):[2/*return*/]}}))}))})),i.push((0,measure_performance_1.getNewPerformance)("dbContentPromises",a)),[4/*yield*/,Promise.all(f)];case 3:
// console.log({ dbContentObject });
return m=d.sent().filter(js_util_1.notEmpty),i.push((0,measure_performance_1.getNewPerformance)("dbContent",a)),g=(0,js_util_1.mergeObjectsArray)(m),i.push((0,measure_performance_1.getNewPerformance)("dbContentObject",a)),
// console.log("get performance", performance);
(0,measure_performance_1.cleanupTimer)(a),[2/*return*/,g]}}))}))},r=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a;return __generator(this,(function(i){switch(i.label){case 0:return a=(n=Object).values,[4/*yield*/,t(e,r)];case 1:return[2/*return*/,a.apply(n,[i.sent()]).flat()]}}))}))},n=function(t,r,n){return __awaiter(void 0,void 0,void 0,(function(){var a,i,u,o,s;return __generator(this,(function(c){switch(c.label){case 0:return a=(0,mergeConfigs_1.mergeConfigs)(t,e,n),i=a.dbStorageMethod,[4/*yield*/,(0,groupByFile_1.groupByFile)(r,a,t)];case 1:return u=c.sent(),[4/*yield*/,(0,getDatabaseFiles_1.getDatabaseFiles)(t,a)];case 2:return o=c.sent(),[4/*yield*/,(0,js_util_1.mapMany)(o,(function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return fs_util_1.fs.existsSync(e.absolutePath)?((0,log_1.log)("Removing ".concat(e.absolutePath),{type:"debug"}),[4/*yield*/,fs_util_1.fs.rm(e.absolutePath)]):[3/*break*/,2];case 1:t.sent(),t.label=2;case 2:return[2/*return*/]}}))}))}),maxConcurrency)];case 3:return c.sent(),[4/*yield*/,(0,js_util_1.mapMany)(Object.keys(u),(function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n;return __generator(this,(function(a){switch(a.label){case 0:return(t=u[e])?(r=t.dbFileLocation,n=t.items,(0,log_1.log)("set new values to there: ".concat(n.length),{type:"debug"}),
// if the item-array is empty, upsert nothing.
0===n.length?[2/*return*/]:[4/*yield*/,(0,alter_functions_1.upsertItems)(i,r,n)]):[2/*return*/];case 1:return[2/*return*/,a.sent()]}}))}))}))];case 4:return s=c.sent().filter(js_util_1.notEmpty),[2/*return*/,{isSuccesful:!0,amountInserted:(0,js_util_1.sum)(s.map((function(e){return e.amountInserted||0})))}]}}))}))};return{get:r,getDbFileLocationPath:function(t,r,n,a){return __awaiter(void 0,void 0,void 0,(function(){var i,u;return __generator(this,(function(o){switch(o.label){case 0:return i=(0,mergeConfigs_1.mergeConfigs)(n,e,a),[4/*yield*/,(0,getDbFileLocation_1.getDbFileLocation)(t,r,i,n)];case 1:return[2/*return*/,null==(u=o.sent())?void 0:u.absolutePath]}}))}))},getByFile:t,clear:function(t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a;return __generator(this,(function(i){switch(i.label){case 0:return n=(0,mergeConfigs_1.mergeConfigs)(t,e,r),[4/*yield*/,(0,getDatabaseFiles_1.getDatabaseFiles)(t,n)];case 1:return a=i.sent(),[4/*yield*/,(0,js_util_1.mapMany)(a,(function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,fs_util_1.fs.existsSync(e.absolutePath)&&fs_util_1.fs.rm(e.absolutePath)]}))}))}),maxConcurrency)];case 2:return i.sent(),[2/*return*/,{amountRemoved:a.length,isSuccesful:!0,message:"".concat(a.length," files removed")}]}}))}))},upsert:function(t,r,n){return __awaiter(void 0,void 0,void 0,(function(){var a,i,u,o,s;return __generator(this,(function(c){switch(c.label){case 0:return a=(0,mergeConfigs_1.mergeConfigs)(t,e,n),i=a.dbStorageMethod,u=(0,js_util_1.makeArray)(r),[4/*yield*/,(0,groupByFile_1.groupByFile)(u,a,t)];case 1:return o=c.sent(),[4/*yield*/,(0,js_util_1.mapMany)(Object.keys(o),(function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,a;return __generator(this,(function(u){switch(u.label){case 0:return t=o[e],r=t.dbFileLocation,a=t.items,(null==n?void 0:n.removeUntouched)&&fs_util_1.fs.existsSync(e)?[4/*yield*/,fs_util_1.fs.rm(e)]:[3/*break*/,2];case 1:u.sent(),u.label=2;case 2:return[4/*yield*/,(0,alter_functions_1.upsertItems)(i,r,a,null==n?void 0:n.onlyInsert)];case 3:return[2/*return*/,u.sent()]}}))}))}),maxConcurrency)];case 2:return s=c.sent(),[2/*return*/,{isSuccesful:!0,message:"Upserted into ".concat(s.length," files")}]}}))}))},set:n,remove:function(t,r,n){return __awaiter(void 0,void 0,void 0,(function(){var a,i,u,o;return __generator(this,(function(s){switch(s.label){case 0:return a=(0,mergeConfigs_1.mergeConfigs)(t,e,n),[4/*yield*/,(0,getDatabaseFiles_1.getDatabaseFiles)(t,a)];case 1:return i=s.sent(),[4/*yield*/,(0,js_util_1.mapMany)(i,(function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4/*yield*/,(0,alter_functions_1.removeMultiple)(a.dbStorageMethod,e,(function(e){return r(e)}))];case 1:return[2/*return*/,t.sent().amountRemoved||0]}}))}))}),maxConcurrency)];case 2:return u=s.sent(),0===(o=(0,js_util_1.sum)(u))?[2/*return*/,{isSuccesful:!1,message:"Nothing removed",amountRemoved:o}]:[2/*return*/,{amountRemoved:o,isSuccesful:!0,message:"Items removed"}]}}))}))},update:function(e,t,a,i){return __awaiter(void 0,void 0,void 0,(function(){var u,o,s,c,l,_;return __generator(this,(function(f){switch(f.label){case 0:return[4/*yield*/,r(e,i)];case 1:return u=f.sent(),o=0,s=u.map((function(e){var r=!t||t(e);return r&&o++,r?a(e):e})),[4/*yield*/,n(e,s,i)];case 2:return c=f.sent(),l=c.isSuccesful,_=c.message,[2/*return*/,{amountUpdated:o,message:_,isSuccesful:l}]}}))}))}}};exports.createDb=createDb;
//# sourceMappingURL=createDb.js.map