#! /usr/bin/env node
"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
var readline = require("readline");
var login_1 = require("./APIFuncs/login");
var getFrame_1 = require("./APIFuncs/getFrame");
var writeBinaries_1 = require("./utils/writeBinaries");
var ParseArgv_1 = require("./utils/ParseArgv");
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    //set stdin as email
    rl.question("email:\n", function (email) {
        console.log("email:", email);
        //set stdin as password
        rl.question('password: \n', function (pass) {
            console.log("pass:", pass);
            login_1.Login(email, pass)
                .then(function (res) {
                var e_1, _a;
                console.log('Authorized! \n');
                //parse commandline arg and set frame index and sensorid
                var _b = __read(ParseArgv_1.ParseArgv(), 2), FrameData = _b[0], SensorId = _b[1];
                var requestiterator = getFrame_1.getFrame(FrameData.startFrame, FrameData.endFrame, SensorId, res.data);
                var BinaryArray = [];
                var frameindex;
                frameindex = FrameData.startFrame;
                try {
                    for (var requestiterator_1 = __values(requestiterator), requestiterator_1_1 = requestiterator_1.next(); !requestiterator_1_1.done; requestiterator_1_1 = requestiterator_1.next()) {
                        var request = requestiterator_1_1.value;
                        request
                            .then(function (res) {
                            BinaryArray.push(res.data);
                            // if fetched all frames
                            if (frameindex === FrameData.endFrame) {
                                //バイナリデータのインデックスは1からなのでインデックスをずらす
                                writeBinaries_1.writeBinaries(frameindex - BinaryArray.length + 1, BinaryArray);
                            }
                            else if (BinaryArray.length === 5) {
                                writeBinaries_1.writeBinaries(frameindex - 4, BinaryArray);
                                //5つまでレスポンスのバイナリデータをバッファリングします
                                //書き出したあとは長さを0にして全部削除します
                                BinaryArray.length = 0;
                            }
                            frameindex += 1;
                            console.log(BinaryArray);
                        })["catch"](function (err) { return console.log(err); });
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (requestiterator_1_1 && !requestiterator_1_1.done && (_a = requestiterator_1["return"])) _a.call(requestiterator_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            })["catch"](function (err) { return console.log('erronlogin'); });
            rl.close();
        });
    });
}
main();
