"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _match = _interopRequireDefault(require("./match"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express.Router)();
routes.get("/ping", function (req, res) {
  res.status(200).json({
    pong: true
  });
});
routes.use("/match", _match["default"]);
var _default = routes;
exports["default"] = _default;