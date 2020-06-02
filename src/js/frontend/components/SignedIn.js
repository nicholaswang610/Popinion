import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const SignedOut = (props) =>{
    return(
        <div className='navbar-collapse justify-content-end'>
            <ul className='login-buttons signed-out navbar-nav'>
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
export default connect(null, mapDispatchToProps)(SignedOut);