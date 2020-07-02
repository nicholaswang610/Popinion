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
import {connect} from 'react-redux';
import NavbarHome from './NavbarHome.js';
import gaming from '../../../style/gaming.jpg';
import movies from '../../../style/movies.jpg';
import music from '../../../style/music.jpg';
import books from '../../../style/books.jpg';
import {NavLink} from 'react-router-dom';
import Footer from './Footer.js';
import {preloadRecentReviews} from '../actionCreators/preloadActions.js';
import RecentPost from './categories/posts/RecentPost.js';

class Home extends Component{
    componentDidMount(){
        this.props.getRecentReviews();
    }
    render(){
        const recentReviews = this.props.recentReviews.map(review=>{
            return(<RecentPost key={review.id} review={review}/>)
        })
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
                    <h3 className='home-title' style={{color:'red', fontWeight:'600'}}>Find an Opinion...</h3>
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
                <h3 style={{color:'red', fontWeight:'600'}} className='mt-5 text-center'>Recent Activity</h3>
                <div className='recent-reviews container'>
                    {recentReviews}
                </div>
                <Footer/>
            </div>   
        );
    }
}

const mapStateToProps = (state) => {
    return({
        recentReviews: state.preload.titles
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        getRecentReviews: () => dispatch(preloadRecentReviews())
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);