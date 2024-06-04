"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _router = require("next/router");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useEffect, useState } from 'react';
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
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    inputText = _useState2[0],
    setInputText = _useState2[1];
  var router = (0, _router.useRouter)();
  var handleButtonClick = function handleButtonClick(route) {
    router.push(route);
  };
  var handleInputChange = function handleInputChange(event) {
    setInputText(event.target.value);
  };
  if (!routes.length) {
    return /*#__PURE__*/_react["default"].createElement("p", null, "No routes available");
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, " Hey, it appears your request cannot be processed"), /*#__PURE__*/_react["default"].createElement("p", null, " Here is something you can try instead:")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap justify-center mb-4"
  }, routes.map(function (route, index) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: index,
      onClick: function onClick() {
        return handleButtonClick(route);
      },
      className: "px-8 py-4 m-2 bg-green-400 bg-gradient-to-r from-green-400 to-blue-500 text-black text-xl rounded-xl hover:from-green-500 hover:to-blue-600 transform hover:scale-105 transition focus:outline-none"
    }, "Go to ", route);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full max-w-md"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, " Not what you need? "), /*#__PURE__*/_react["default"].createElement("p", null, " Write down what you need and I will assit you:")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    value: inputText,
    onChange: handleInputChange,
    placeholder: "Enter your text...",
    className: "w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "w-full px-4 py-2 bg-blue-500 text-black font-bold rounded-lg hover:bg-blue-700 transition focus:outline-none",
    onClick: function onClick() {
      return alert("We are processing your request: ".concat(inputText, " ..."));
    }
  }, "Submit")));
};
var _default = exports["default"] = RouteButtons;