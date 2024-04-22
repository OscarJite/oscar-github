import React from 'react';
import { Link } from "react-router-dom";
// import FiSearch  from "react-icons/fi";
function Topbar() {
  return (
     <div className="topbar">
        <div className='topbar_box'>
        <div className="App_logo">
                <h1>OMJ</h1>
            </div>

            <div className="search">
                <label >
                    <input type="text" placeholder="Search..." />
                    {/* <FiSearch /> */}
                </label>
            </div>
            <div className='home'>
                 <Link to={`/`}>Home</Link>
            </div>

            </div>

        </div>
  );
}

export default Topbar;