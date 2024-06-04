const fetchRoutes = async () => {
    const response = await fetch('/api/routes');
    if (!response.ok) {
      throw new Error('Eliumm failed to fetch routes, make sure you properly created the routes.js file in ./pages/api/routes.js');
    }
    const routes = await response.json();
    return routes;
  };
  
  export default fetchRoutes;
  