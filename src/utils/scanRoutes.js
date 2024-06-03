let fs;
let path;
if (typeof window === 'undefined') {
  fs = require('fs');
  path = require('path');
}

const scanRoutes = (dir) => {
  if (typeof window !== 'undefined') {
    throw new Error('scanRoutes can only be run on the server');
  }

  const pagesDir = path.join(dir, 'pages');
  const files = fs.readdirSync(pagesDir);

  const routes = files.map(file => {
    const route = file.replace(/\.[^/.]+$/, '');
    return route === 'index' ? '/' : `/${route}`;
  });

  return routes;
};

export default scanRoutes;
