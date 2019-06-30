"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _angular = _interopRequireDefault(require("angular"));

var _angularjs = _interopRequireDefault(require("@uirouter/angularjs"));

var _home = _interopRequireDefault(require("./home.controller"));

var _home2 = _interopRequireDefault(require("./home.routes"));

require("./home.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var homeModule = _angular.default.module('stockApp.home', [_angularjs.default]);

homeModule.controller('HomeController', _home.default);
homeModule.config(_home2.default);

var _default = homeModule = homeModule.name;

exports.default = _default;