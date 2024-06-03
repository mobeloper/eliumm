import React, { useEffect, useState } from 'react';
import axios from 'axios';
import scanRoutes from '../utils/scanRoutes';

const RouteButtons = ({ appDir }) => {
  const [routes, setRoutes] = useState([]);
  const [buttonTexts, setButtonTexts] = useState({});

  useEffect(() => {
    const fetchRoutes = async () => {
      const scannedRoutes = scanRoutes(appDir);
      setRoutes(scannedRoutes);
      
      // Call Google Gemini API for each route (mock implementation)
      const fetchButtonText = async (route) => {
        // Replace this with the actual Google Gemini API call
        const response = await axios.post('https://google-gemini-api.com/analyze', { route });
        return response.data.buttonText;
      };

      const texts = {};
      for (const route of scannedRoutes) {
        texts[route] = await fetchButtonText(route);
      }
      setButtonTexts(texts);
    };

    fetchRoutes();
  }, [appDir]);

  return (
    <div>
      {routes.map((route) => (
        <button key={route} onClick={() => window.location.href = route}>
          {buttonTexts[route] || route}
        </button>
      ))}
    </div>
  );
};

export default RouteButtons;
