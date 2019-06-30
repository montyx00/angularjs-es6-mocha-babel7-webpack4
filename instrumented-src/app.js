"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("angular/angular.js");

require("font-awesome/css/font-awesome.css");

var _angularjs = _interopRequireDefault(require("@uirouter/angularjs"));

var _home = _interopRequireDefault(require("./home/home.module"));

var _app = _interopRequireDefault(require("./app.config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stockAppModule = angular.module('stockApp', [_angularjs.default, _home.default]);
stockAppModule.run(function () {
  console.log('App started');
});
stockAppModule.config(_app.default);
var _default = stockAppModule;
exports.default = _default;