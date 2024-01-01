import 'animate.css';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    return ( 
        <div className="header animate__animated animate__fadeInLeftBig animate__fast"><Link to="/">To-Do List</Link></div>
     );
}
 
export default Header;