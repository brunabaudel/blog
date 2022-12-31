"use strict";var __awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.newEnvSdk=exports.generateEnvSdks=void 0;var get_path_1=require("get-path"),new_template_1=require("new-template"),getSdkDescription_1=require("./getSdkDescription"),generateEnvSdks=function(e,n){return __awaiter(void 0,void 0,void 0,(function(){var t;return __generator(this,(function(r){switch(r.label){case 0:return t=[(0,exports.newEnvSdk)(e,"public",n),(0,exports.newEnvSdk)(e,"private",n)],[4/*yield*/,Promise.all(t)];case 1:return[2/*return*/,r.sent()]}}))}))};exports.generateEnvSdks=generateEnvSdks;
/**

# Environment variables

As a full stack app we need a good solution for environment variables that need to be accessible anywhere and can be customized, some `.gitignore'd`, some not. Some public, some only in the backend.

conifg:
- public (local, remote) = sdk-env-public
- private (local, remote) = sdk-env-private

This information will be fetched from the bundleconfig
 */
var newEnvSdk=function(
/**
 * NB: if this is not a bundle, a more general purpose bundle config should be used
 */
e,n,t){return __awaiter(void 0,void 0,void 0,(function(){var r,o,a,i,l,c,s,u,p,v,f;return __generator(this,(function(d){switch(d.label){case 0:return r="sdk-env-".concat(n),[4/*yield*/,(0,getSdkDescription_1.getSdkDescription)(r)];case 1:return o=d.sent(),(a=(null==t?void 0:t.manualProjectRoot)||(0,get_path_1.getProjectRoot)())?(i=null==t?void 0:t.skipYarnInstall,l=null==t?void 0:t.dryrun,c=e.customisableBundleConfig["".concat(n,"EnvironmentVariables")],s=c&&"object"==typeof c?c:{},u="export const ".concat(n,"EnvironmentVariables = ").concat(JSON.stringify(s,null,2),";"),"Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!",p="import { ".concat(n,'EnvironmentVariables } from "./').concat(n,'";\n// ').concat("Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!","\nexport const ").concat(n,"LocalEnvironmentVariables: Partial<typeof ").concat(n,"EnvironmentVariables> = {};"),(f={})["src/".concat(n,"-local.ts")]=p,f["src/".concat(n,".ts")]=u,v=f,[4/*yield*/,(0,new_template_1.newOperationWithFiles)(r,o,v,{manualProjectRoot:a,skipYarnInstall:i,dryrun:l})]):[2/*return*/];case 2:return[2/*return*/,d.sent()]}}))}))};exports.newEnvSdk=newEnvSdk;
//# sourceMappingURL=generateEnvSdks.js.map