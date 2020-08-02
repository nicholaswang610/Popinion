import React from 'react';
import {NavLink} from 'react-router-dom';
import gaming from '../../../../style/gaming.jpg';
import movies from '../../../../style/movies.jpg';
import music from '../../../../style/music.jpg';
import books from '../../../../style/books.jpg';
import Footer from '../Footer.js';

const ChooseCategory = (props) =>
{
    return(
        <div className='home-body'>
            <div style={{paddingTop:'4em'}} className='container text-center'>
                <h3 className='home-title' style={{color:'red', fontWeight:'600'}}>Pick a category to get started:</h3>
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

export default ChooseCategory;