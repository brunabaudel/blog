"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,s){function a(e){try{u(n.next(e))}catch(e){s(e)}}function i(e){try{u(n.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,i)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.uploadAssetWithContext=void 0;var fs_util_1=require("fs-util"),model_types_1=require("model-types"),getTemporaryAssetsFolderPath_1=require("../getTemporaryAssetsFolderPath"),asset_functions_js_1=require("asset-functions-js"),convertToMp3_1=require("../convertToMp3"),convertToMp4_1=require("../convertToMp4"),uploadAssetWithContext=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r,n,o,s,a,i,u,c;return __generator(this,(function(l){switch(l.label){case 0:return(t=null===(c=e.serverContext)||void 0===c?void 0:c.files.file)?(r=Array.isArray(t)?t[0]:t,n={size:r.size,path:r.path,name:r.name,type:r.type},o=(0,model_types_1.generateRandomString)(32),s=(0,getTemporaryAssetsFolderPath_1.getTemporaryAssetsFolderPath)(),a=(0,asset_functions_js_1.getConversionInfoFromType)(r.type),console.log({conversionInfo:a}),i="".concat(o,".").concat(a.targetFormat),u=fs_util_1.path.join(s,i),fs_util_1.fs.existsSync(s)?[3/*break*/,2]:[4/*yield*/,fs_util_1.fs.mkdir(s,{recursive:!0})]):(console.log("Got no file, fuktup"),[2/*return*/,{isSuccessful:!1,message:"No file found"}]);case 1:l.sent(),l.label=2;case 2:return"mp3"!==a.targetFormat?[3/*break*/,4]:[4/*yield*/,(0,convertToMp3_1.convertToMp3)(n.path,u)];case 3:return l.sent(),[3/*break*/,8];case 4:return"mp4"!==a.targetFormat?[3/*break*/,6]:[4/*yield*/,(0,convertToMp4_1.convertToMp4)(n.path,u)];case 5:return l.sent(),[3/*break*/,8];case 6:return[4/*yield*/,fs_util_1.fs.rename(n.path,u)];case 7:l.sent(),l.label=8;case 8:return[2/*return*/,{isSuccessful:!0,message:"File received",temporaryDestination:i}]}}))}))};exports.uploadAssetWithContext=uploadAssetWithContext;
//# sourceMappingURL=uploadAssetWithContext.js.map