import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const SignedIn = (props) =>{
    return(
        <div className='navbar-collapse'>
            <ul className='navbar-nav text-white'>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/choose-category'>Write a Review</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/about'>About</NavLink>
                </li>
            </ul>
            <ul className='login-buttons signed-in navbar-nav text-white'>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/login'>Login</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/signup'>Sign Up</NavLink>
                </li>
            </ul>
        </div>
    );
    
}

export default SignedIn;

