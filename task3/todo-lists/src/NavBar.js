import 'animate.css';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const NavBar = () => {
    return ( 
        <div className="navbar animate__animated animate__fadeIn animate__delay-1s">
            <div className="navbarElement"><Link to="/create">Add Task</Link></div>
            {/* <div className="navbarElement"><Link to="/history">History</Link></div> */}
        </div>
     );
}
 
export default NavBar;