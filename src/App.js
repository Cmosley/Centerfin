import React from 'react';
import { useRoutes } from "react-router-dom";
import router from './router';
import  Amplify from 'aws-amplify'
import awsconfig from "./aws-exports";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import "./App.css";
import logo from "./logo.svg";

Amplify.configure(awsconfig);


function App() {
    const content = useRoutes(router);

    return (
      <>
        <main>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Authenticator>
                {({ signOut, user }) => {}}
                  {content}
              </Authenticator>
            </header>
          </div>
        </main>
        
      </>
    );
}

export default (App);
