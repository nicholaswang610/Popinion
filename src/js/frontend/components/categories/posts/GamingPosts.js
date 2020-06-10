import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRev} from '../../../actionCreators/postActions';
import {NavLink} from 'react-router-dom';
import NavbarHome from '../../NavbarHome.js';
import Post from './Post.js';

class GamingPosts extends Component
{
    state= {
        search: ''
    }
    componentDidMount(){
        this.props.fetchReviews(this.props.match.params.title);
    }
    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        });
    }
    render(){
        const filteredList = this.props.reviews.filter((review)=>{
            return (
                review.review_title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                review.author_first_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                review.author_last_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            );
        });
        const list = filteredList.map(review=>{
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
                    <div className='game-input'>
                        <input className='search-game' type='text' placeholder='Search' onChange={e=>{this.handleChange(e)}}></input>
                        <i className="fas fa-search"></i>
                        <h4 className='mx-3 mt-1'>or</h4>
                        <NavLink to='/gaming/add-review'><button type='button' className='btn'>MAKE A REVIEW</button></NavLink>
                    </div>
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