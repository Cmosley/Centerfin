import  Amplify from 'aws-amplify'
import awsconfig from "./aws-exports";
// import { Link } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import router from "./router";

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import "./App.css";

import { CssBaseline } from "@mui/material";

import ThemeProvider from './theme/ThemeProvider'
import Home from './pages/Home'
// import Dashboard from './layouts/Dashboard'

Amplify.configure(awsconfig);


function App() {
  // 'content' is using the 'router' for app navigation
  const content = useRoutes(router);
  // 'route' is used to access auth state of authenticator
  //  https://ui.docs.amplify.aws/components/authenticator#access-auth-state
  const { route } = useAuthenticator((context) => [context.user]);

  return route === "authenticated" ? content : <Home />;
}

export default function AppWithProvider() {
  return (
    <Authenticator.Provider>
      <ThemeProvider>
        <CssBaseline />
        <App></App>
      </ThemeProvider>
    </Authenticator.Provider>
  );
}

