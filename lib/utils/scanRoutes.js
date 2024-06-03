"use strict";

var fs = require('fs');
var path = require('path');
var scanRoutes = function scanRoutes(dir) {
  var routes = [];
  var readDir = function readDir(directory) {
    fs.readdirSync(directory).forEach(function (file) {
      var fullPath = path.join(directory, file);
      var stat = fs.lstatSync(fullPath);
      if (stat.isDirectory()) {
        readDir(fullPath);
      } else if (file === 'index.js' || file.endsWith('.js')) {
        var relativePath = path.relative(dir, fullPath);
        var routePath = '/' + relativePath.replace(/\\/g, '/').replace(/\/index.js$/, '').replace(/.js$/, '');
        routes.push(routePath);
      }
    });
  };
  readDir(dir);
  return routes;
};
module.exports = scanRoutes;