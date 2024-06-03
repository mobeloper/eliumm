import React from 'react';
import App from 'next/app';
import '../styles/global.css';

import { ErrorBoundary, RouteButtons, scanRoutes } from 'eliumm';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ErrorBoundary appDir={__dirname}>
          {/* ... */}
          <Component {...pageProps} />
          {/* ... */}
        </ErrorBoundary>
        
      </>
    );
  }
}

export default MyApp;
