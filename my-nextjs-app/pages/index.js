// // pages/index.js
// import React, { useState } from 'react';

// import axios from 'axios';

// import { RouteButtons } from 'eliumm';

// const Home = () => {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/data'); // This will cause an error as per the setup
//       setData(response.data);
//     } catch (err) {
//       // The error will be caught by ErrorBoundary
//       throw err;
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App</h1>
//       <button
//         onClick={fetchData}
//         className="px-4 py-2 mb-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//       >
//         Fetch Data
//       </button>
//       {data && <div className="text-lg text-gray-800">Data: {JSON.stringify(data)}</div>}
//       <RouteButtons /> {/* Render RouteButtons from Eliumm */}
//     </div>
//   );
// };

// export default Home;




import React, { useState } from 'react';

import axios from 'axios';

import { RouteButtons } from 'eliumm';


const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showRouteButtons, setShowRouteButtons] = useState(false);
  const [routes, setRoutes] = useState([]);

  const fetchRoutes = async () => {
    try {
      const response = await axios.get('/api/routes');
      setRoutes(response.data);
    } catch (err) {
      console.error('Error fetching routes:', err);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // This will cause an error as per the setup
      setData(response.data);
      setError(null); // Clear any previous errors
      setShowRouteButtons(false); // Hide RouteButtons if data is fetched successfully
    } catch (err) {
      if (err.response && err.response.status === 500) {
        await fetchRoutes();
        setShowRouteButtons(true);
      }
      setError(err);
      setData(null); // Clear any previous data
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to Eliumm!</h1>
      <button
        onClick={fetchData}
        className="px-8 py-6 mb-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
      >
        Test Eliumm
      </button>

      {data && <div className="text-lg text-gray-800">Data: {JSON.stringify(data)}</div>}

      {error && <p className="text-black mb-4">
        Instead of your App crashing, showing 404 pages or showing messages like this...      
          <p className="text-red-500 mb-4">
          An error occurred: {error.message}
          </p>
        Eliumm will engage your user to guide them to safe land with something like this...
        </p>}
      
      {showRouteButtons && <RouteButtons routes={routes} />} {/* Render RouteButtons if showRouteButtons is true */}
    </div>
  );
};

export default Home;