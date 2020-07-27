import React, {Component} from 'react';
import logo from '../../../style/logo.png';
import {NavLink} from 'react-router-dom';

const Footer = (props) => {
    return(
        <div className='footer'>
            <div className='footer-addresses'>
                <img src={logo}></img>
                <div style={{textAlign:'left'}}>
                    <div className='number'>562.123.4567</div>
                    <div>contact@welp.com</div>
                    <div>12 Grimmauld Place</div>
                    <div>London, UK</div>
                </div>
            </div>
            <div className='footer-links'>
                <div className='resources'>
                    <div className='footer-header'>Resources</div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/choose-category'>Reviews</NavLink>
                    <NavLink to='/faq'>FAQ</NavLink>
                    <NavLink to='/choose-category'>Suggest a Title</NavLink>
                    <NavLink to='/feedback'>Feedback</NavLink>
                </div>
                <div className='company-info'>
                    <div className='footer-header'>Our Company</div>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/partners'>Our Partners</NavLink>
                    <NavLink to='/terms-of-use'>Terms of Use</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Footer;