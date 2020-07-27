import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const scrollToCategory = () =>{
    window.scrollTo(0, 628);
}

const SignedOut = (props) =>{
    return(
        <div className='navbar-collapse signed-out'>
            
            <ul className='navbar-nav text-white'>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <button className='nav-link text-white write-review-button' onClick={e=>{scrollToCategory()}}>Write a Review</button>
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

