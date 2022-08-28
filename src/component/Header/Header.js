import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" />
            {/* <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review</a>
                <a href="/manage"> Manage Inventory</a>
            </nav> */}

        <nav>
            <NavLink to="/" className='nav-link'>Shop</NavLink>
            <NavLink to="/review" className='nav-link'>Review</NavLink>
            <NavLink to="/manage" className='nav-link'>Manage Inventory</NavLink>
        </nav>
        </div>
    );
}

export default Header;