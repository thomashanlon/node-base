"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var routes = (0, _express.Router)();
routes.get("/:id", function (req, res) {
  var id = req.params.id;
  res.status(200).json({
    matchId: id
  });
});
var _default = routes;
exports["default"] = _default;