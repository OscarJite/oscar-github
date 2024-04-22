import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import RepoCard from "./components/RepoCard";
import ErrorPage from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GithubCards from "./components/GithubCards";



const GitHubRepoAPI = "https://api.github.com/users/iruojefaith/repos";

const IndexPage = () => {
  const [ apiResult, setApiResult] = useState([]);

           useEffect(() => {
            FetchAPIFromServer();
              }, []);

    const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/components/*",
      element: <GithubCards apiResult={apiResult} />,
    },
    {
      path: "/components/repocard",
      element: <RepoCard />,
    },
      {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

        const FetchAPIFromServer = async () => {
      const response = await fetch(GitHubRepoAPI);
      const result = await response.json();
        setApiResult(result);
      };

      return <RouterProvider router={router} />
      ;
     };


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>
);
