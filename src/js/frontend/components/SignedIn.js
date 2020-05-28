import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const SignedOut = (props) =>{
    return(
        <div className='navbar-collapse justify-content-end'>
            <ul className='login-buttons signed-out navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/notifications'>Notifications</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/login'>Log Out</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SignedOut;