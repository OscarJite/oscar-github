import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';
import './index.css';
import TopBar from "../src/layouts/Topbar";

function App() {


  return (


    <div className="container">
    <TopBar />
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet = 'utf-8' />
      <title>Oscar's Repos</title>
    </Helmet>
    <div className="main-container">
    <div className="welcome-text">
      <h2>Hello!</h2>
      <h1>I'm Oscar Jite-Orimiono</h1>
        <p>Click the link below to access my GitHub repositories</p>
         <Link to="/components"><button>Click Me</button></Link>
    </div>
    </div>
</div>
  );
}

export default App;
