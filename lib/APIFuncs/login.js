"use strict";
exports.__esModule = true;
exports.Login = void 0;
var axios_1 = require("axios");
var md5 = require("md5");
var BaseData_1 = require("../BaseData");
function Login(email, password) {
    var hashed = md5(password);
    return axios_1["default"].post(BaseData_1.apiServerUrl + '/api/login', { email: email, password: hashed });
}
exports.Login = Login;
