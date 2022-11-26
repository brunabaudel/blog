"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function i(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,s,o,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(s=a.trys,(s=s.length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){a.label=o[1];break}if(6===o[0]&&a.label<s[1]){a.label=s[1],s=o;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(o);break}s[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.upsertDbModel=exports.deleteDbModel=exports.getDbModel=void 0;var db_1=require("db"),fs_orm_1=require("fs-orm"),common_types_1=require("common-types"),convert_case_1=require("convert-case"),getDbModel=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,n,r,s;return __generator(this,(function(o){switch(o.label){case 0:return[4/*yield*/,db_1.db.get("TsInterface")];case 1:return t=o.sent().filter((function(t){return t.name===e})),n=t[0],[4/*yield*/,db_1.db.get(e)];case 2:return r=o.sent(),[4/*yield*/,(0,fs_orm_1.getDatabaseFiles)(e,{},!0)];case 3:return s=o.sent(),[2/*return*/,{data:r,index:n,fileLocations:s}]}}))}))};exports.getDbModel=getDbModel;
/**
 * deletes an instance of an db data interface from the db in a typesafe way
 */
var deleteDbModel=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r;return __generator(this,(function(s){switch(s.label){case 0:return[4/*yield*/,db_1.db.get(e)];case 1:return n=s.sent(),(r=n.filter((function(e){return e.id!==t}))).length===n.length?[2/*return*/,{success:!1,response:"This instance doesn't exist, so it could not be deleted"}]:[4/*yield*/,db_1.db.set(e,r)];case 2:return s.sent(),[2/*return*/,{response:"Successfully deleted",success:!0}]}}))}))};exports.deleteDbModel=deleteDbModel;
/**
 * upserts an instance of an db data interface from the db in a typesafe way
 */
var upsertDbModel=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var n,r,s,o,a,i;return __generator(this,(function(u){switch(u.label){case 0:return n=t.item,r=t.isPartial,[4/*yield*/,db_1.db.get(e)];case 1:return(s=u.sent())?s.find((function(e){return e.id!==n.id}))?(o=s.map((function(e){if(e.id!==n.id)return e;var t={updatedAt:Date.now(),slug:n.name?(0,convert_case_1.slugify)(n.name):e.slug};return __assign(__assign(r?__assign({},e):{},n),t);
// NB: here we assume that item is fully non-partial and has all we need (except the generated stuff)
})),[4/*yield*/,db_1.db.set(e,o)]):[3/*break*/,3]:[2/*return*/,{success:!1,response:"Couldn't find that interface"}];case 2:
// set db to the new data
return u.sent(),[2/*return*/,{success:!0,response:"Updated"}];case 3:
// insert
return n.name?(a={updatedAt:Date.now(),createdAt:Date.now(),deletedAt:0,createdFirstAt:Date.now(),slug:(0,convert_case_1.slugify)(n.name),id:(0,common_types_1.generateId)()},i=__assign(__assign({},n),a),[4/*yield*/,db_1.db.push(e,i)]):[2/*return*/,{success:!1,response:"Name is required"}];case 4:
// push one row to the db
return u.sent(),[2/*return*/,{response:"Successfully inserted",success:!0}]}}))}))};exports.upsertDbModel=upsertDbModel;
//# sourceMappingURL=crud.js.map