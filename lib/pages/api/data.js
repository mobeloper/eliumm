"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;
function handler(req, res) {
  res.status(500).json({
    message: 'Internal Server Error'
  });
}