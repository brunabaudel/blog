"use strict";var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPublicBundleConfig=void 0;var fs_util_1=require("fs-util"),get_path_1=require("get-path"),read_json_file_1=require("read-json-file"),getPublicBundleConfig=function(){return __awaiter(void 0,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(r){switch(r.label){case 0:return(e=(0,get_path_1.getProjectRoot)())?(t=fs_util_1.path.join(e,"public-bundle-config.json"),[4/*yield*/,(0,read_json_file_1.readJsonFile)(t)]):[2/*return*/];case 1:return(n=r.sent())?[2/*return*/,n]:[2/*return*/]}}))}))};exports.getPublicBundleConfig=getPublicBundleConfig;
//# sourceMappingURL=getPublicBundleConfig.js.map