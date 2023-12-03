import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import awsConfig from './aws-exports';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

Amplify.configure(awsConfig);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Use Amplify's authentication-related components */}
      {/* For example: Authenticator, withAuthenticator, useAuthenticator */}
      {/* Replace AmplifyProvider with the appropriate component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
