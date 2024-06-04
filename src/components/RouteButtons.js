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


import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RouteButtons = ({ routes = [] }) => {
  const [inputText, setInputText] = useState('');
  const router = useRouter();

  const handleButtonClick = (route) => {
    router.push(route);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  if (!routes.length) {
    return <p>No routes available</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h3> Hey, it appears your request cannot be processed</h3>
        <p> Here is something you can try instead:</p>
      </div>
      <div className="flex flex-wrap justify-center mb-4">
        {routes.map((route, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(route)}
            className="px-8 py-4 m-2 bg-green-400 bg-gradient-to-r from-green-400 to-blue-500 text-black text-xl rounded-xl hover:from-green-500 hover:to-blue-600 transform hover:scale-105 transition focus:outline-none"
          >
            Go to {route}
          </button>
        ))}
      </div>
      <div className="w-full max-w-md">
        <div>
          <h2> Not what you need? </h2>
          <p> Write down what you need and I will assit you:</p>
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text..."
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          className="w-full px-4 py-2 bg-blue-500 text-black font-bold rounded-lg hover:bg-blue-700 transition focus:outline-none"
          onClick={() => alert(`We are processing your request: ${inputText} ...`)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RouteButtons;