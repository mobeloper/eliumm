// pages/api/routes.js

export default function handler(req, res) {
    const routes = [
        '/',
        '/about', // Add all your static routes here
        // Add more routes as needed
    ];
    res.status(200).json(routes);
}
