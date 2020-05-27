import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
const Navbar = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' exact to='/'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' exact to='/login'>Login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>  
    );
} 

export default Navbar;