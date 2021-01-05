"use strict";
exports.__esModule = true;
exports.ParseArgv = void 0;
function ParseArgv() {
    var startFrame;
    var endFrame;
    var sensorId;
    if (process.argv[2] === '-start') {
        startFrame = parseInt(process.argv[3]);
    }
    if (process.argv[4] === '-end') {
        endFrame = parseInt(process.argv[5]);
    }
    if (process.argv[6] === '-sensorId') {
        sensorId = process.argv[7];
    }
    return [
        {
            startFrame: startFrame,
            endFrame: endFrame
        },
        sensorId
    ];
}
exports.ParseArgv = ParseArgv;
