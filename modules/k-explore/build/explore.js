"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,a)}l((r=r.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},__rest=this&&this.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},__spreadArray=this&&this.__spreadArray||function(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.exploreMultiple=exports.explorePreset=exports.exploreGitRepoFolders=exports.findAllDotGitFolders=exports.findFilesRecursively=exports.explore=exports.determineFileType=void 0;var fs_util_1=require("fs-util"),read_json_file_1=require("read-json-file"),fs_util_js_1=require("fs-util-js"),js_util_1=require("js-util"),markdown_parse_js_1=require("markdown-parse-js"),filename_conventions_1=require("filename-conventions"),get_path_1=require("get-path"),filename_conventions_2=require("filename-conventions"),isSearchContentExtension=function(e){return filename_conventions_2.allowedSearchContentExtensions.map((function(e){return e})).includes(e)},determineFileType=function(e){var n=fs_util_1.path.parse(e).ext.substring(1);if(!isSearchContentExtension(n))return null;var t=filename_conventions_2.fileTypes.findIndex((function(e){return filename_conventions_2.extensions[e].includes(n)}));return filename_conventions_2.fileTypes[t]};exports.determineFileType=determineFileType;
/**
 *
 */
var getOutline=function(e){return console.log("outline is currently just filename"),e.split("/").pop()},isMatch=function(e){var n=e.exact,t=e.searchContender,r=e.searches;return 0===r.length||(n?r.includes(t):r.find((function(e){return t.includes(e)})))},getContents=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:return n=(0,fs_util_js_1.getExtension)(e),isSearchContentExtension(n)?"json"!==n?[3/*break*/,1]:[2/*return*/,(0,read_json_file_1.readJsonFile)(e)]:[2/*return*/];case 1:return filename_conventions_2.markdownExtensions.includes(n)?[4/*yield*/,fs_util_1.fs.readFile(e,"utf8")]:[3/*break*/,3];case 2:return t=r.sent(),[2/*return*/,(0,markdown_parse_js_1.mdToJsonParse)(t)];case 3:return[2/*return*/,fs_util_1.fs.readFile(e,"utf8")]}}))}))},explore=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t,r,o=e.basePath,i=e.searchLevel,s=void 0===i?"fileName":i,a=e.debug,l=__rest(e,["basePath","searchLevel","debug"]);return __generator(this,(function(e){switch(e.label){case 0:return n=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,("outline"===s||"full"===s?fs_util_1.canRead:fs_util_1.canSee)(e)];case 1:return[2/*return*/,n.sent()]}}))}))},t=(0,js_util_1.makeArray)(o||(0,get_path_1.getProjectRoot)()).filter(fs_util_1.fs.existsSync).filter(n),a&&console.log("finding files in ".concat(t.join(","))),r=t.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,(0,exports.findFilesRecursively)(__assign({basePath:e,searchLevel:s,debug:a},l))]}))}))})),[4/*yield*/,Promise.all(r)];case 1:return[2/*return*/,e.sent().flat()]}}))}))};exports.explore=explore;
/**
Explores your files with many possibilities.

NB: this function only searches one basePath, while explore can do multiple

TODO: since this not only finds files but also explores them, naming should be exploreFilesRecursively, probably.

TODO: TextJson[] is a bit weird name for the resulting type interface...
*/
var findFilesRecursively=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,t,r,o,i,s,
//booleans:
a,l,c,u,d,f,_,p,h,v,m,x,g,b,y,F,w,j;return __generator(this,(function(P){switch(P.label){case 0:return n=e.basePath,t=e.ignore,r=e.searchLevel,o=e.extension,i=e.subExtension,s=e.search,a=e.includeFoldersWithResults,l=e.doNotExploreMatch,c=e.doNotExploreChildFolders,u=e.debug,d=e.exact,f=e.readmeOnTop,_=e.includeStats,p=e.includeMetaData,h=e.cancelRecursionOn,v=(0,js_util_1.makeArray)(i),m=(0,js_util_1.makeArray)(o),x=(0,js_util_1.makeArray)(s),g=(0,js_util_1.makeArray)(t),[4/*yield*/,fs_util_1.fs.readdir(n,{withFileTypes:!0,encoding:"utf8"})];case 1:
// if contents should not be explored, return an empty array
return b=P.sent(),y=f?b.findIndex((function(e){return"readme.md"===e.name.toLowerCase()})):-1,F=-1!==y?__spreadArray([b[y]],(0,js_util_1.removeIndexFromArray)(b,y),!0):b,w=F.map((function(e){return fs_util_1.path.join(n,e.name)})),(null==h?void 0:h(w))?[2/*return*/,a?[{path:n,isCancelRecursionResult:!0,isFolder:!1}]:[]]:(u&&console.log("contents contains ".concat(F.length," files/folders")),j=F.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){var f,b,y,F,w,j,P,E,A,O,R,k,C,M,L,S,N,D,G,T,q,I;return __generator(this,(function(J){switch(J.label){case 0:
// don't check files if search level is folder
return"folder"===r&&e.isFile()?[2/*return*/,null]:
//if dir/file name should be ignored, skip it
g.includes(e.name)?(u&&console.log("Ignoring",e.name),[2/*return*/,null]):
// if we want specific sub-extensions and this file isn't one of them, return
e.isFile()&&v&&v.length>0&&!v.find((function(n){return(0,fs_util_js_1.getSubExtension)(e.name)===n}))?(u&&console.log("ignoring ".concat(e.name," because of subextension mismatch")),[2/*return*/,null]):
// if we want specific extensions and this file isn't one of them, return
e.isFile()&&m&&m.length>0&&!m.find((function(n){return(0,fs_util_js_1.getExtension)(e.name)===n}))?(u&&console.log("ignoring ".concat(e.name," because of extension mismatch")),[2/*return*/,null]):(f=fs_util_1.path.join(n,e.name),e.isFile()?(b=(0,fs_util_js_1.getExtension)(e.name)||"",y=filename_conventions_2.jsonExtensions.includes(b),filename_conventions_2.typescriptExtensions.includes(b),F=filename_conventions_2.markdownExtensions.includes(b),"folder"!==r?[3/*break*/,1]:(w=e.name,[3/*break*/,11])):[3/*break*/,18]);case 1:return"fileName"!==r?[3/*break*/,2]:(j=e.name,[3/*break*/,10]);case 2:return"filePath"!==r&&isSearchContentExtension(b)?[3/*break*/,3]:(P=f,[3/*break*/,9]);case 3:return"outline"!==r?[3/*break*/,4]:(E=getOutline(f),[3/*break*/,8]);case 4:return"full"!==r?[3/*break*/,6]:[4/*yield*/,getContents(f)];case 5:return A=J.sent(),[3/*break*/,7];case 6:A="SHOULD_NEVER_HAPPEN",J.label=7;case 7:E=A,J.label=8;case 8:P=E,J.label=9;case 9:j=P,J.label=10;case 10:w=j,J.label=11;case 11:return D=w,u&&console.log("searchContender: ".concat(D)),G=isMatch({exact:d,searchContender:D,searches:x}),O=y&&"full"===r?getContents(f):void 0,F&&"full"===r?[4/*yield*/,getContents(f)]:[3/*break*/,13];case 12:return k=J.sent(),[3/*break*/,14];case 13:k=void 0,J.label=14;case 14:return R=k,C=void 0,_?[4/*yield*/,fs_util_1.fs.stat(f)]:[3/*break*/,16];case 15:return L=J.sent(),[3/*break*/,17];case 16:L=void 0,J.label=17;case 17:return M=L,u&&console.log("".concat(e.name,"? match ").concat(G)),[2/*return*/,G?[{path:f,json:O,isFolder:!1,markdownJson:R,typescriptJson:C,stats:M?{createdAt:M.ctimeMs,updatedAt:M.mtimeMs}:void 0}]:null];case 18:return!e.isDirectory()||c?[3/*break*/,21]:(S=[],N=!0,"folder"===r&&(D=e.name,(G=isMatch({searchContender:D,exact:d,searches:x}))&&(S.push({path:f,isFolder:!0}),N=!l)),N?(T=fs_util_1.path.join(n,e.name),[4/*yield*/,(0,exports.findFilesRecursively)({basePath:T,extension:o,search:s,searchLevel:r,subExtension:i,ignore:t,debug:u,exact:d,
// NB: I think we just need to fill in everything in the recursion, right?
cancelRecursionOn:h,includeFoldersWithResults:a,includeMetaData:p,includeStats:_,doNotExploreChildFolders:c,doNotExploreMatch:l})]):[3/*break*/,20]);case 19:(q=J.sent()).length>0&&(S=S.concat(q),a&&(void 0,I={path:T,metaData:undefined,isFolder:!0},S.push(I))),J.label=20;case 20:return[2/*return*/,S];case 21:return[2/*return*/,null]}}))}))})),[4/*yield*/,Promise.all(j)]);case 2:return[2/*return*/,P.sent().filter(js_util_1.notEmpty).flat()]}}))}))};exports.findFilesRecursively=findFilesRecursively;var findAllDotGitFolders=function(e){return(0,exports.explore)({basePath:null==e?void 0:e.basePath,search:".git",exact:!0,searchLevel:"folder",doNotExploreMatch:!0,
// I guess we can assume there will never be git folders inside an operation on a deeper level, that would be strange... Therefore, these can be ignored
ignore:["node_modules","build",".next","src","assets","data"]})};exports.findAllDotGitFolders=findAllDotGitFolders;
/**
 find all active git folders (folders having `.git`)
 */
var exploreGitRepoFolders=function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:return[4/*yield*/,(0,exports.findAllDotGitFolders)(e)];case 1:return[2/*return*/,n.sent().map((function(e){return e.path})).map((function(e){return fs_util_1.path.resolve(e,"..")}))]}}))}))};exports.exploreGitRepoFolders=exploreGitRepoFolders;var explorePreset=function(e,n){var t=null==n?void 0:n.basePath,r="packages"===e?[{basePath:t,search:"package.json",exact:!0,extension:"json",ignore:filename_conventions_1.generatedFolders}]:"markdown"===e?[{basePath:t,extension:["md","mdx"],ignore:filename_conventions_1.generatedFolders}]:"todo"===e?// finds all `*.todo.md`,` todo/**/*.md` and returns the path + content
[{basePath:t,extension:["md","mdx"],search:"/todo/",searchLevel:"filePath",ignore:filename_conventions_1.generatedFolders},{basePath:t,extension:["md","mdx"],search:"todo.md",exact:!0,searchLevel:"fileName",ignore:filename_conventions_1.generatedFolders},{basePath:t,extension:["md","mdx"],subExtension:"todo",exact:!1,searchLevel:"fileName",ignore:filename_conventions_1.generatedFolders}]:"docs"===e?[{basePath:t,extension:["md","mdx"],search:"/docs/",searchLevel:"filePath",ignore:filename_conventions_1.generatedFolders},{basePath:t,extension:["md","mdx"],search:"readme.md",exact:!0,searchLevel:"fileName",ignore:filename_conventions_1.generatedFolders},{basePath:t,extension:["md","mdx"],subExtension:["readme"],exact:!1,searchLevel:"fileName",ignore:filename_conventions_1.generatedFolders}]:"src"===e?[{basePath:t,searchLevel:"folder",exact:!0,search:"src",doNotExploreMatch:!0,ignore:filename_conventions_1.generatedFolders}]:[];return(0,exports.exploreMultiple)(r)};exports.explorePreset=explorePreset;
/**
 * DEPRECATED: not sure if we still need it, look up usecases, can prob be replaced now
 */
var exploreMultiple=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n;return __generator(this,(function(t){switch(t.label){case 0:return n=e.map((function(e){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){return[2/*return*/,(0,exports.explore)(e)]}))}))})),[4/*yield*/,Promise.all(n)];case 1:return[2/*return*/,t.sent().flat()]}}))}))};exports.exploreMultiple=exploreMultiple;
//# sourceMappingURL=explore.js.map