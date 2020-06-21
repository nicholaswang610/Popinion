import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const SignedOut = (props) =>{
    return(
        <div className='navbar-collapse signed-out'>
            <ul className='navbar-nav text-white'>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/choose-category'>Write a Review</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/about'>About</NavLink>
                </li>
            </ul>
            <ul className='login-buttons navbar-nav text-white'>
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

export default SignedOut;

