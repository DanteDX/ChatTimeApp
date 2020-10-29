import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="headerContent">
            <h2><Link to="/">ChatTime: A place where you can chat with your friends</Link></h2>
        </div>
    )
}

export default Header;
