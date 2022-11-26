"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function l(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}u((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeSdkEnvPublicOperation=void 0;var get_path_1=require("get-path"),new_operation_1=require("new-operation"),db_1=require("db"),js_util_1=require("js-util"),makeSdkEnvPublicOperation=function(
/**
 * NB: if this is not a bundle, a more general purpose bundle config should be used
 */
e,n){return __awaiter(void 0,void 0,void 0,(function(){var t,r,i,o,a,l,u,s,c,p,b;return __generator(this,(function(f){switch(f.label){case 0:return t="sdk-env-public",r="Any public environment variables of your full-stack app go here.",(i=(null==n?void 0:n.manualProjectRoot)||(0,get_path_1.getProjectRoot)())?(o=e.publicEnvironmentVariables,a=o&&"object"==typeof o||{},l="export const publicEnvironmentVariables = ".concat(JSON.stringify(a,null,2),";"),"Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!",u='import { publicEnvironmentVariables } from "./public";\n// '.concat("Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!","\nexport const publicLocalEnvironmentVariables: Partial<typeof publicEnvironmentVariables> = {};"),s={"public-local.ts":u,"public.ts":l},p=js_util_1.takeFirst,[4/*yield*/,db_1.db.get("OperationConfig",{operation:t})]):[2/*return*/];case 1:return c=p.apply(void 0,[f.sent()]),b=__assign(__assign({},c),{name:t,markdown:r}),[4/*yield*/,(0,new_operation_1.newOperationWithFiles)(b,s,{manualProjectRoot:i})];case 2:return[2/*return*/,f.sent()]}}))}))};exports.makeSdkEnvPublicOperation=makeSdkEnvPublicOperation;
//# sourceMappingURL=sdkEnvPublicWriteToFile.js.map