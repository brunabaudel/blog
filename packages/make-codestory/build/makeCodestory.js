"use strict";var __awaiter=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(e){a(e)}}function s(e){try{u(n.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(i,s)}u((n=n.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeCodestory=void 0;var read_markdown_file_1=require("read-markdown-file"),addCodeStoryToSection_1=require("./addCodeStoryToSection"),mapMarkdownParseSections_1=require("./mapMarkdownParseSections"),markdown_parse_js_1=require("markdown-parse-js"),fs_util_1=require("fs-util"),makeCodestory=function(e,r,t){return __awaiter(void 0,void 0,void 0,(function(){var n,o,a,i,s;return __generator(this,(function(u){switch(u.label){case 0:return[4/*yield*/,(0,read_markdown_file_1.readMarkdownFile)(e)];case 1:return(n=u.sent())?(o=(0,mapMarkdownParseSections_1.mapMarkdownParseSections)(n,(function(e){return(0,addCodeStoryToSection_1.addCodestoryToSection)(e,r,t)})),a=(0,markdown_parse_js_1.markdownParseToMarkdownStringFromContent)(o),i=fs_util_1.path.parse(e),s=fs_util_1.path.join(i.dir,"".concat(i.name,".codestory").concat(i.ext)),[4/*yield*/,fs_util_1.fs.writeFile(s,a||"","utf8")]):[2/*return*/];case 2:return u.sent(),[2/*return*/,s]}}))}))};exports.makeCodestory=makeCodestory;
//# sourceMappingURL=makeCodestory.js.map