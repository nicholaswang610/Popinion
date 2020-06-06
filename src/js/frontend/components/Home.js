import React, {Component} from 'react';
import NavbarHome from './NavbarHome.js';
import gaming from '../../../style/gaming.jpg';
import movies from '../../../style/movies.jpg';
import music from '../../../style/music.jpg';
import books from '../../../style/books.jpg';
import {NavLink} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className='home-body'>
                <div className="banner">
                    <NavbarHome/>
                    <form className='input-group'>
                        <input className='form-control search' type='search' placeholder='Search for something...'></input>
                    </form>
                </div>
                <div className='text-center home-title'>
                    <h4>Get an Opinion...</h4>
                </div>
                <div className='row py-5 px-2 text-center'>
                    <div className='col-sm-3'>
                        <NavLink style={{textDecoration:'none'}} exact to='/gaming'>
                            <div className='card category'>
                                <img className='gaming-img' src={gaming} alt='gaming'></img>
                                <div className='card-body'>
                                    <h5 className='card-title gaming-title'>Gaming</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-sm-3'>
                        <NavLink style={{textDecoration:'none'}} exact to='/movies'>
                            <div className='card category'>
                                <img className='movie-img' src={movies} alt='movies'></img>
                                <div className='card-body'>
                                    <h5 className='card-title movie-title'>Movies</h5>
                                </div>
                            </div>
                        </NavLink>
                        
                    </div>
                    <div className='col-sm-3'>
                        <NavLink style={{textDecoration:'none'}} exact to='/music'>
                            <div className='card category'>
                                <img className='music-img' src={music} alt='music'></img>
                                <div className='card-body'>
                                    <h5 className='card-title music-title'>Music</h5>
                                </div>
                            </div>
                        </NavLink>
                        
                    </div>
                    <div className='col-sm-3'>
                        <NavLink style={{textDecoration:'none'}} exact to='/books'>
                            <div className='card category'>
                                <img className='book-img' src={books} alt='books'></img>
                                <div className='card-body'>
                                    <h5 className='card-title book-title'>Books</h5>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            
            
        );
    }
}
export default Home;