import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const scrollToCategory = () =>{
    window.scrollTo(0, 628);
}

const SignedIn = (props) =>{
    return(
        <div className='navbar-collapse signed-in'>
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
            <ul className='login-buttons navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link text-white' exact to='/notifications'>Notifications</NavLink>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-white' href="/" onClick={props.logout}>Log Out</a>
                </li>
            </ul>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        logout: ()=>dispatch({type:"LOGOUT"})
    });
}
export default connect(null, mapDispatchToProps)(SignedIn);