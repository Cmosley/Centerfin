// import { useRoutes } from "react-router-dom";
// import router from 'src/router';

// import useAuth from 'src/hooks/useAuth';


import logo from "./logo.svg";
import "./App.css";

import { CssBaseline } from "@mui/material";


function App() {
  // const content = useRoutes(router);
  // const auth = useAuth();

  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* {auth.isInitialized ? content : content} */}
    </div>
  );
}

export default App;
