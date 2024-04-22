import {Helmet} from 'react-helmet';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet = 'utf-8' />
        <meta name="description" content="Page not found!" />
        <meta name= "keywords" content= "Frontend, reactjs, git, github, frontend developer, Iruoje Faith, github API, Github REST API" />
        <meta name= "author" content= "Iruoje Faith" />
        <title>Error | Page not found</title>
      </Helmet>
      <h1>Oooooops Error 404 </h1>
        <h2>You clicked the wrong link page</h2>
    </>
  );
};

export default ErrorPage;
