const fetchRoutes = async () => {
    const response = await fetch('/api/routes');
    const routes = await response.json();
    return routes;
};

export default fetchRoutes;