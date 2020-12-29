"use strict";
exports.__esModule = true;
exports.ParseArgv = void 0;
function ParseArgv() {
    var startFrame;
    var endFrame;
    if (process.argv[2] === "-start") {
        startFrame = parseInt(process.argv[3]);
    }
    if (process.argv[4] === "-end") {
        endFrame = parseInt(process.argv[5]);
    }
    return {
        startFrame: startFrame,
        endFrame: endFrame
    };
}
exports.ParseArgv = ParseArgv;
