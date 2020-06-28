/*
TODO:
    -ABOUT page, should be purely frontend, style copied from business.com
    -FOOTER component
    -ADD GAME page that can send requests to admins' emails
    -ADMIN PANEL
    -WRITE A REVIEW link (should be simple enough)
    -Embellish the home page
*/

import React, {Component} from 'react';
import NavbarHome from './NavbarHome.js';
import gaming from '../../../style/gaming.jpg';
import movies from '../../../style/movies.jpg';
import music from '../../../style/music.jpg';
import books from '../../../style/books.jpg';
import {NavLink} from 'react-router-dom';
import Footer from './Footer.js';

class Home extends Component{
    render(){
        return(
            <div className='home-body'>
                <div className="banner">
                    <NavbarHome/>
                    <div className='logo'></div>
                    <form className='input-group'>
                        <input className='search' type='search' placeholder='Search for something...'></input>
                    </form>
                </div>
                <div className='container text-center'>
                    <h4 className='home-title'>Get an Opinion on it...</h4>
                    <div className='row'>
                        <div className='col'>
                            <div className='card category'>
                                <NavLink className='category-link' style={{textDecoration:'none'}} exact to='/gaming'>
                                    <img className='gaming-img' src={gaming} alt='gaming'></img>
                                    <div className='card-body'>
                                        <h5 className='card-title gaming-title'>Gaming</h5>
                                    </div>
                                </NavLink>
                            </div>
                            
                        </div>
                        <div className='col'>                           
                            <div className='card category'>
                                <NavLink className='category-link' style={{textDecoration:'none'}} exact to='/movies'>
                                    <img className='movie-img' src={movies} alt='movies'></img>
                                    <div className='card-body'>
                                        <h5 className='card-title movie-title'>Movies</h5>
                                    </div>
                                </NavLink>
                            </div>                           
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='card category'>
                                <NavLink className='category-link' style={{textDecoration:'none'}} exact to='/music'>
                                    <img className='music-img' src={music} alt='music'></img>
                                    <div className='card-body'>
                                        <h5 className='card-title music-title'>Music</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card category'>
                                <NavLink className='gaming-link' style={{textDecoration:'none'}} exact to='/books'>
                                    <img className='book-img' src={books} alt='books'></img>
                                    <div className='card-body'>
                                        <h5 className='card-title book-title'>Books</h5>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
            
        );
    }
}
export default Home;