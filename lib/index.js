"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodes = exports.Phrases = exports.CodeStatuses = void 0;
var CodeStatuses_1 = require("./CodeStatuses");
Object.defineProperty(exports, "CodeStatuses", { enumerable: true, get: function () { return CodeStatuses_1.default; } });
var Phrases_1 = require("./Phrases");
Object.defineProperty(exports, "Phrases", { enumerable: true, get: function () { return Phrases_1.default; } });
var StatusCodes_1 = require("./StatusCodes");
Object.defineProperty(exports, "StatusCodes", { enumerable: true, get: function () { return StatusCodes_1.default; } });
function getReasonMessage(status) {
    if (CodeStatuses_1.default.hasOwnProperty(status.toString())) {
        return Phrases_1.default[status];
    }
    if (StatusCodes_1.default.hasOwnProperty(status)) {
        return Phrases_1.default[StatusCodes_1.default[status]];
    }
    throw new Error("Status code does not exist: " + status);
}
exports.default = getReasonMessage;
//# sourceMappingURL=index.js.map