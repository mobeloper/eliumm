"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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

var RouteButtons = function RouteButtons(_ref) {
  var _ref$routes = _ref.routes,
    routes = _ref$routes === void 0 ? [] : _ref$routes;
  if (!routes.length) {
    return /*#__PURE__*/_react["default"].createElement("p", null, "No routes available");
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap justify-center"
  }, routes.map(function (route, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: index,
      href: route,
      className: "px-4 py-2 m-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    }, "Go to ", route);
  }));
};
var _default = exports["default"] = RouteButtons;