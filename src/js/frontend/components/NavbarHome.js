import React, {Component} from 'react';
import SignedIn from './SignedIn.js';
import SignedOut from './SignedOut.js';

const NavbarHome = (props) =>{
    const userAuthStatus = <SignedOut/>;
    return(
        <nav className="navbar navbar-expand-lg navbar-light py-5">
            {userAuthStatus}
        </nav>  
    );
} 

export default NavbarHome;