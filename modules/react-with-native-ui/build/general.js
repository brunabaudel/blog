"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = exports.inputClass = exports.bareInputClass = void 0;
exports.bareInputClass = "text-sm px-3 text-gray-700 border-gray-300 border rounded-md focus:outline-none";
exports.inputClass = "w-full ".concat(exports.bareInputClass);
exports.UI = {
    bareInput: exports.bareInputClass,
    textInput: "".concat(exports.inputClass, " py-4"),
    input: "".concat(exports.inputClass, " py-4"),
    // NB: py doens't work for a select-input on safari
    selectInput: "".concat(exports.inputClass, " bg-white h-9"),
    dateInput: "".concat(exports.inputClass, " py-3"),
};
//# sourceMappingURL=general.js.map