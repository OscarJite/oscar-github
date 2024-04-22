import React, { useState, useEffect } from 'react';
import ErrorBoundary from "../utillitis/ErrorBoundary";
import {Helmet } from 'react-helmet'
import TopBar from "../layouts/Topbar";
import Sidebar from "../layouts/Sidebar";
import "./githubcard.css"

const RepoCard = () => {
  const [getRepo, setGetRepo] = useState([])
  const [getCommits, setGetCommits] = useState([])
  const [getLanguages, setGetLanguages] = useState( {})

  const location = window.location.search
  let params = new URLSearchParams(location)

  const repoName = params.get('name')

   const FetchAPIFromServer = async () => {
      const response = await fetch(`https://api.github.com/repos/iruojefaith/${repoName}`);
      const result = await response.json();
        setGetRepo(result);
        // console.log(result)
      };

      useEffect(() => {
        FetchAPIFromServer();
      }, []);

      useEffect(() => {
        const FetchAPIFromServer = async () => {
      const response = await fetch(`https://api.github.com/repos/iruojefaith/${repoName}/commits`);
      const result = await response.json();
        setGetCommits(result);
      };

      FetchAPIFromServer()
      }, []);

      useEffect(() => {
        const FetchAPIFromServer = async () => {
      const response = await fetch(`https://api.github.com/repos/iruojefaith/${repoName}/languages`);
      const result = await response.json();
        setGetLanguages(result);
        console.log(result)
      };

      FetchAPIFromServer()
      }, []);

  console.log(repoName)
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet = 'utf-8' />
        <meta name="description" content={`${repoName} by Iruoje Faith`} />
        <meta name= "keywords" content= "Frontend, reactjs, react project git, github, frontend developer, Iruoje Faith, github API, Github REST API" />
        <meta name= "author" content= "Iruoje Faith" />
        <title>{repoName} | Iruoje Faith </title>
      </Helmet>
        <Sidebar />
    <div>
    <TopBar />
    <ErrorBoundary>
   <>
    <div className="main">
    <div className='details'>
    <div className='details_one'>
   <h1 className='details_h1'>{repoName}</h1>
   <p className="cardName">Description: {getRepo.description}</p>
   <p className="cardName">No of Forks: {getRepo.forks} </p>
   </div>
   <div className='details_two'>
   <p className="cardName">Repo URL: <a href={getRepo.html_url} >Repository Link</a> </p>
   <p className="cardName">Commits:{getCommits.length} </p>
   <p className="cardName">Languages</p>
   {
        Object.keys(getLanguages).map((repo) => (
            <p>- {repo}</p>
        ))
        }

    </div>
    </div>
    </div>
      </>
      </ErrorBoundary>
      </div>
      </div>

);
};




export default RepoCard;

{/*
Languages
Commits
Tags
Files/folders */}
