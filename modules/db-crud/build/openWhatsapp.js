"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openWhatsapp=void 0;var rest_util_1=require("rest-util"),openWhatsapp=function(e){var t,p=e.phone,o=e.text,s="https://api.whatsapp.com/send/"+(0,rest_util_1.toQueryString)({phone:p,text:o,app_absent:0});null===(t=window.open(s,"_blank"))||void 0===t||t.focus()};exports.openWhatsapp=openWhatsapp;
//# sourceMappingURL=openWhatsapp.js.map