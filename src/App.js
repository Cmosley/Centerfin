import React from 'react';
import { useRoutes } from "react-router-dom";
import router from './router';
import "./App.css";

// import useAuth from 'src/hooks/useAuth';
import logo from "./logo.svg";
// import { CssBaseline } from "@mui/material";


function App() {
  // const auth = useAuth();
    const content = useRoutes(router);
  
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
