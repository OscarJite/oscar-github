import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Pagination  from "../utillitis/Pagination";
import {Helmet } from 'react-helmet'
import TopBar from "../layouts/Topbar";
import Sidebar from "../layouts/Sidebar";



import "./githubcard.css"





const GithubCards = ({ apiResult }) => {
  const [postPerPage] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const ModifiedRepostate = apiResult?.slice(
    indexOfFirstPage,
    indexOfLastPage
  );


    return (
      <div>

     <Sidebar />
     <>
     <div >
     <TopBar />

      {ModifiedRepostate.length !== 0 ? (
        <div>
        <div className="main" >
        <div className="cardBox">
      {ModifiedRepostate.map((data, index) => {
        return (
      <div key={index}  >
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet = 'utf-8' />
          <title>Oscar Jite-Orimiono - Repos</title>
        </Helmet>

           <div className="card">
            <h1 className="title">{data.name}</h1>
            <p className="cardName">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, provident!
            </p>
             <button variant="primary"><Link to={`./repocard?name=${data.name}`}>
                  View Repo
             </Link></button>
          </div>
             </div>


              );
        })}



       </div> <Pagination
            currentPage={currentPage}
            apiResult={apiResult} // to total amount of 100 result
            setcurrentPage={setcurrentPage} // Current Page
            postPerPage={postPerPage} // Post per page
          />
          <br />
          <br />
       </div>
      </div>
          ):(
<div></div>
          )}
          </div>
      </>
      </div>
    );
  };

export default GithubCards;