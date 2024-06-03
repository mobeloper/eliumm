"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fs;
var path;
if (typeof window === 'undefined') {
  fs = require('fs');
  path = require('path');
}
var scanRoutes = function scanRoutes(dir) {
  if (typeof window !== 'undefined') {
    throw new Error('scanRoutes can only be run on the server');
  }
  var pagesDir = path.join(dir, 'pages');
  var files = fs.readdirSync(pagesDir);
  var routes = files.map(function (file) {
    var route = file.replace(/\.[^/.]+$/, '');
    return route === 'index' ? '/' : "/".concat(route);
  });
  return routes;
};
var _default = exports["default"] = scanRoutes;