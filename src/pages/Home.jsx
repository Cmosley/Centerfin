import React from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import logo from "../logo.svg";

function Home() {

  return (
    <>
      <main>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Authenticator />
          </header>
        </div>
      </main>
    </>
  );
}

export default Home;