import React from 'react';
import { useRoutes } from "react-router-dom";

import router from './router';
import useAuth from '../src/hooks/useAuth';

import "./App.css";
import logo from "./logo.svg";

function App() {
  // const auth = useAuth();
    const content = useRoutes(router);
    const auth = useAuth();
  
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

export default App;
