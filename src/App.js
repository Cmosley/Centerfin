import React from 'react';
import { useRoutes } from "react-router-dom";

import router from './router';
// import useAuth from '../src/hooks/useAuth';
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { amplifyConfig } from "./awsconfig";


import "./App.css";
import logo from "./logo.svg";

Amplify.configure(amplifyConfig)

function App({signOut, user}) {
  // const auth = useAuth();
    const content = useRoutes(router);
    // const auth = useAuth();
  
    return (
      <>   
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        </header>
         {content} 
        </div>
      </>
    );
}

export default withAuthenticator(App);
