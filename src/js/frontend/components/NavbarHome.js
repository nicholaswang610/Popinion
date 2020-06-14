import React from 'react';
import SignedIn from './SignedIn.js';
import SignedOut from './SignedOut.js';
import {connect} from 'react-redux';

const NavbarHome = (props) =>{
    const userAuthStatus = props.loggedIn ? (<SignedIn/>) : (<SignedOut/>);  //next steps: every component accessed thru navbar should make an api call when mounted, and jwt.verify the token.
    return(
        <nav className="navbar navbar-expand-lg navbar-light py-5">
            {userAuthStatus}
        </nav>  
    );
} 

const mapStateToProps = (state) => {
    return({
        loggedIn: state.auth.loginSuccess
    });
}
export default connect(mapStateToProps, null)(NavbarHome);