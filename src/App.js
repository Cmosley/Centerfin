import React from 'react';
// import { useRoutes } from "react-router-dom";
// import router from './router';
import  Amplify from 'aws-amplify'
import awsconfig from "./aws-exports";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import "./App.css";

import ThemeProvider from './theme/ThemeProvider'
import Home from './pages/Home'
import Dashboard from './layouts/Dashboard'

Amplify.configure(awsconfig);

function App() {
    const { route } = useAuthenticator((context)=> [context.route])
    return route === 'authenticated' ? <Dashboard /> :  <Home />          
}

export default function AppWithProvider() {
  return (
    <Authenticator.Provider>
      <ThemeProvider>
        <App></App>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

