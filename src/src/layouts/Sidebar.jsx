import React,{ useState, useEffect } from 'react'

import { Link } from "react-router-dom";
import '../components/githubcard.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../src/profile-picture.jpg';


function Sidebar() {
  const [ profile, setProfile] = useState([])

  useEffect(() =>{
  const fetchRepos = async () =>{
const results = await fetch("https://api.github.com/users/oscarjite")
           results.json().then(data => {
            setProfile(data)
          }
           )}
           fetchRepos()
},[])
  return (
    <div className="repo_container">
    <Navbar className='navigation'>
        <ul>
        <div className='profile-picture'>
           <img src={`${profile.avatar_url}`} alt="Oscar" />
        </div>


        <Navbar href="#" className='nav_brand'>
        <h3>Oscar Jite-Orimiono</h3>
        </Navbar>

          <Nav className="me-auto">
            <Nav.Link className='nav_link'>
            <Link to={"1"}>Go to Repository</Link>
            </Nav.Link>
            <Nav.Link  className="nav_link">
            <Link to={-1}>Back</Link>
            </Nav.Link>
            </Nav>
        </ul>

      </Navbar>
    </div>
  )
}

export default Sidebar