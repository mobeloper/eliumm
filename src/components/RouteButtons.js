// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import scanRoutes from '../utils/scanRoutes';

// const RouteButtons = ({ appDir }) => {
//   const [routes, setRoutes] = useState([]);
//   const [buttonTexts, setButtonTexts] = useState({});

//   useEffect(() => {
//     const fetchRoutes = async () => {
//       const scannedRoutes = scanRoutes(appDir);
//       setRoutes(scannedRoutes);

//       // TODO:
//       // Mock implementation for fetching button text from an AI service
//       const fetchButtonText = async (route) => {
//         const response = await axios.post('https://ai-service.com/analyze', { route });
//         return response.data.buttonText;
//       };

//       const texts = {};
//       for (const route of scannedRoutes) {
//         texts[route] = await fetchButtonText(route);
//       }
//       setButtonTexts(texts);
//     };

//     fetchRoutes();
//   }, [appDir]);

//   return (
//     <div className="space-x-2 mt-4">
//       {routes.map((route) => (
//         <button
//           key={route}
//           onClick={() => window.location.href = route}
//           className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//         >
//           {buttonTexts[route] || route}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default RouteButtons;


import React from 'react';

const RouteButtons = ({ routes = [] }) => {
  if (!routes.length) {
    return <p>No routes available</p>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {routes.map((route, index) => (
        <a
          key={index}
          href={route}
          className="px-4 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Go to {route}
        </a>
      ))}
    </div>
  );
};

export default RouteButtons;
