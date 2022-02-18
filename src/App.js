import React from 'react';
import { useRoutes } from "react-router-dom";

import router from './router';
// import useAuth from '../src/hooks/useAuth';
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { amplifyConfig } from "./awsconfig";


import "./App.css";
import logo from "./logo.svg";

Amplify.configure(amplifyConfig)

function App() {
  // const auth = useAuth();
    const content = useRoutes(router);
    // const auth = useAuth();


  
    return (
      <>
        <main>
          <div className="App">
            <header className="App-header">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <Authenticator>
                {({ signOut, user }) => {}}
              </Authenticator>
            </header>
            {content}
          </div>
        </main>
        
      </>
    );
}

export default (App);
