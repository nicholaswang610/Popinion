import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRev} from '../../../actionCreators/postActions';
import {NavLink} from 'react-router-dom';
import NavbarHome from '../../NavbarHome.js';
import Post from './Post.js';

class GamingPosts extends Component{
    componentDidMount(){
        this.props.fetchReviews(this.props.match.params.title);
    }
    render(){
        const list = this.props.reviews.map(review=>{
            return(
                <Post key={review.id} review={review}></Post>
            )});
        return (
            <div className='game-body'>
                <div className='game-banner'>
                    <NavbarHome className='game-navbar'/>
                </div>
                <div className='path-container'>
                    <span className='path-to-gaming'>
                        <NavLink to="/" style={{display:"inline-block", marginRight:"1em"}}><h4>Home</h4></NavLink>
                        <h4 style={{display:'inline-block'}}>></h4> 
                        <NavLink to='/gaming' style={{display:"inline-block", marginLeft:'1em', marginRight:'1em'}}><h4>Gaming</h4></NavLink>
                        <h4 style={{display:'inline-block'}}>></h4>
                        <NavLink to={'/gaming/'+this.props.match.params.title} style={{display:"inline-block", marginLeft:'1em'}}><h4>{this.props.match.params.title}</h4></NavLink>
                    </span>
                </div>
                <div className='container my-3'>
                    <div>{list}</div>
                    <div>
                        + Add a review
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        reviews: state.posts.reviews
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchReviews: (title) => {dispatch(fetchRev(title))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GamingPosts);