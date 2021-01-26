"use strict";
exports.__esModule = true;
exports.validateFrames = void 0;
var axios_1 = require("axios");
var BaseData_1 = require("../BaseData");
function validateFrames(startFrame, endFrame, sensorId, onReponse) {
    axios_1["default"]
        .post(BaseData_1.apiServerUrl + '/api/validate', {
        firstFrame: startFrame,
        lastFrame: endFrame,
        sensorId: parseInt(sensorId)
    })
        .then(function (res) { return onReponse(res.data); })["catch"](function (err) { return console.log(err); });
}
exports.validateFrames = validateFrames;
