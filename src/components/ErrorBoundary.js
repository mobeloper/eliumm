// import React, { Component } from 'react';
// import axios from 'axios';
// import scanRoutes from '../utils/scanRoutes';

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false, routes: [], buttonTexts: {} };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   async componentDidCatch(error, errorInfo) {
//     const routes = scanRoutes(this.props.appDir);
//     this.setState({ routes });

//     try {
//       const fetchButtonText = async (route) => {
//         const response = await axios.post('https://ai-service.com/handle-error', {
//           error: error.toString(),
//           errorInfo,
//           route,
//         });
//         return response.data.buttonText;
//       };

//       const buttonTexts = {};
//       for (const route of routes) {
//         buttonTexts[route] = await fetchButtonText(route);
//       }
//       this.setState({ buttonTexts });
//     } catch (err) {
//       console.error('Failed to get redirection path:', err);
//     }
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//           <h1 className="text-2xl font-bold mb-4 text-red-600">Something went wrong.</h1>
//           <p className="mb-6 text-gray-700">Please choose a different path:</p>
//           <div className="space-x-2">
//             {this.state.routes.map((route) => (
//               <button
//                 key={route}
//                 onClick={() => window.location.href = route}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//               >
//                 {this.state.buttonTexts[route] || route}
//               </button>
//             ))}
//           </div>
//         </div>
//       );
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary;


import React, { Component } from 'react';
import RouteButtons from './RouteButtons';
import fetchRoutes from '../utils/fetchRoutes';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, routes: [] };
  }

  async componentDidMount() {
    try {
      const routes = await fetchRoutes();
      this.setState({ routes });
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-4">{this.state.error ? this.state.error.message : 'An error occurred'}</p>
          <RouteButtons routes={this.state.routes} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;