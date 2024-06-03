const fs = require('fs');
const path = require('path');

const scanRoutes = (dir) => {
  const routes = [];
  
  const readDir = (directory) => {
    fs.readdirSync(directory).forEach((file) => {
      const fullPath = path.join(directory, file);
      const stat = fs.lstatSync(fullPath);
      
      if (stat.isDirectory()) {
        readDir(fullPath);
      } else if (file === 'index.js' || file.endsWith('.js')) {
        const relativePath = path.relative(dir, fullPath);
        const routePath = '/' + relativePath.replace(/\\/g, '/').replace(/\/index.js$/, '').replace(/.js$/, '');
        routes.push(routePath);
      }
    });
  };

  readDir(dir);

  return routes;
};

module.exports = scanRoutes;
