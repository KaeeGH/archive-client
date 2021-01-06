"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.writeBinaries = void 0;
var promises_1 = require("fs/promises");
function writeBinaries(frameindex, BinaryArray) {
    var e_1, _a;
    try {
        for (var BinaryArray_1 = __values(BinaryArray), BinaryArray_1_1 = BinaryArray_1.next(); !BinaryArray_1_1.done; BinaryArray_1_1 = BinaryArray_1.next()) {
            var buffer = BinaryArray_1_1.value;
            var arrayBuffer = new Uint8Array(buffer);
            promises_1.writeFile(frameindex + ".bin", arrayBuffer);
            frameindex += 1;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (BinaryArray_1_1 && !BinaryArray_1_1.done && (_a = BinaryArray_1["return"])) _a.call(BinaryArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.writeBinaries = writeBinaries;
