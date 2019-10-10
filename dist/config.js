"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.databaseInfo = exports.appConfig = void 0;
var appConfig = {
  port: process.env.PORT || 3000
}; // Database

exports.appConfig = appConfig;
var databaseInfo = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};
exports.databaseInfo = databaseInfo;