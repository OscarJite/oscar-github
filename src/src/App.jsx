import React from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet';
import './index.css';
import HomeImage from "../src/home-page.png";
import TopBar from "../src/layouts/Topbar";

function App() {


  return (


    <div className="container">
    <TopBar />
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet = 'utf-8' />
      <meta name="description" content="Iruoje Faith's Github repositories" />
      <meta name= "keywords" content= "Frontend, reactjs, git, github, frontend developer, Iruoje Faith, github API, Github REST API" />
      <meta name= "author" content= "Iruoje Faith" />
      <title>Welcome | Iruoje Faith Github Repositories</title>
    </Helmet>
    <div className="main-container">
    <div className="welcome-text">
      <h1>welcome</h1>
        <p>This Website contains list of IRUOJE FAITH's <br></br>Github Repositories</p>
         <Link to="/components"><button>View Here</button></Link>
    </div>
    <div>
      <img src={HomeImage} alt="homepage picture" />
    </div>
    </div>
</div>
  );
}

export default App;
