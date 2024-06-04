# Eliumm 🔬🧪✅

Eliumm uses A.I. to find out the best solution on-the-fly to redirect users when there is an error or problem in your app making a crashless seamless experience for your users.


# Installing the library
```bash
npm install eliumm
```

# How to use Eliumm

### IMPORTANT!!! Create your Routes

Create a routes.js to add your app routes inside your api folder.
./pages/api/routes.js
For example:
```
// pages/api/routes.js

export default function handler(req, res) {
    const routes = [
        '/',
        '/about', // Add all your static routes here
        // Add more routes as needed
    ];
    res.status(200).json(routes);
}

```



### Wrap your app with Eliumm

Wrap your Next.js app with the ErrorBoundary component:
```
// pages/_app.js
import React from 'react';
import App from 'next/app';
import { ErrorBoundary } from 'eliumm';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ErrorBoundary>
        .
        .
        ...your home page
        <Component {...pageProps} />
        .
        .
      </ErrorBoundary>
    );
  }
}

export default MyApp;
```

### Use it in your pages.

This is an example of a Home page that makes an HTTP request and uses Eliumm to handle errors:
```
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


```

If used correctly your home page should render properly:
<img width="1171" alt="EliummDemo" src="https://github.com/mobeloper/eliumm/assets/29370196/f1d4f0cf-149e-4b70-a069-8f88d4f7aa62">






# For Dev. Contributions
Building the code:
```
npm run build

or npm run build-ts
```

Publish to NPM:
```
npm publish
```

# Keywords
eliumm, crashless, webapp

# References
