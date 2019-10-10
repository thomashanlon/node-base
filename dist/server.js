"use strict";

var _app = _interopRequireDefault(require("./app"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_config.appConfig.port, function () {
  return console.log("Listening on port ".concat(_config.appConfig.port));
}); // eslint-disable-line no-console