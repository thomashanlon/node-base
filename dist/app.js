"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.disable("x-powered-by");
app.use((0, _morgan["default"])("combined"));
app.use(_bodyParser["default"].json()); // Routes

app.use("/", _routes["default"]); // Catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
}); // Error handler

app.use(function (err, req, res) {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 500).render("error", {
    message: err.message
  });
});
var _default = app;
exports["default"] = _default;