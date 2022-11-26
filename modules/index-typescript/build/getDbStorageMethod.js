"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDbStorageMethod=void 0;var convert_case_1=require("convert-case"),getFrontmatterDbStorageMethod_1=require("./getFrontmatterDbStorageMethod"),getSpecialExtensionDbStorageMethod_1=require("./getSpecialExtensionDbStorageMethod"),getDbStorageMethod=function(e){var t=e.typeName,o=e.frontmatter,r=e.extensions,a=(0,getFrontmatterDbStorageMethod_1.getFrontmatterDbStorageMethod)(o);
// NB: can also become null if isDbModel is specifically set to false!
if(void 0!==a)return a||void 0;var n=(0,getSpecialExtensionDbStorageMethod_1.getSpecialExtensionDbStorageMethod)(r);if(n)return n;var g=(0,convert_case_1.lowerCaseArray)(t),i=g.length>=2&&["model","db"].includes(g.pop())?"jsonMultiple":null;return i||void 0};exports.getDbStorageMethod=getDbStorageMethod;
//# sourceMappingURL=getDbStorageMethod.js.map