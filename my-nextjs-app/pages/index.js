// pages/index.js

import React, { useState } from 'react';

import axios from 'axios';

import { RouteButtons } from 'eliumm';


const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showRouteButtons, setShowRouteButtons] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // This will cause an error as per the setup
      setData(response.data);
      setError(null); // Clear any previous errors
      setShowRouteButtons(false); // Hide RouteButtons if data is fetched successfully
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setShowRouteButtons(true);
      }
      setError(err);
      setData(null); // Clear any previous data
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App</h1>
      <button
        onClick={fetchData}
        className="px-4 py-2 mb-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Fetch Data
      </button>
      {error && <p className="text-red-500 mb-4">An error occurred: {error.message}</p>}
      {data && <div className="text-lg text-gray-800">Data: {JSON.stringify(data)}</div>}
      {showRouteButtons && <RouteButtons />} {/* Render RouteButtons if showRouteButtons is true */}
    </div>
  );
};

export default Home;
