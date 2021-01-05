#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var readline = require("readline");
var login_1 = require("./APIFuncs/login");
var getFrame_1 = require("./APIFuncs/getFrame");
var ParseArgv_1 = require("./utils/ParseArgv");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("email:\n", function (email) {
    console.log("email:", email);
    rl.question('password: \n', function (pass) {
        console.log("pass:", pass);
        login_1.Login(email, pass)
            .then(function (res) {
            console.log('Authorized! \n');
            var _a = ParseArgv_1.ParseArgv(), FrameData = _a[0], SensorId = _a[1];
            getFrame_1.getFrame(FrameData.startFrame, FrameData.endFrame, SensorId, res.data)
                .then(function (binArray) { return console.log(binArray); });
        })["catch"](function (err) { return console.log('erronlogin'); });
        rl.close();
    });
});
//console.log(ParseArgv())
