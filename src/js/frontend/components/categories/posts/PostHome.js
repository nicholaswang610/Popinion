import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRev} from '../../../actionCreators/postActions';
import {NavLink} from 'react-router-dom';
import NavbarHome from '../../NavbarHome.js';
import Post from './Post.js';
import Footer from '../../Footer.js';

class PostHome extends Component
{
    state= {
        category: '',
        title: this.props.match.params.title,
        search: ''
    }
    componentDidMount(){
        const category = this.props.match.url.split('/')[1];
        this.setState({
            ...this.state,
            category: category
        })
        this.props.fetchReviews(category, this.state.title);
    }
    handleChange = (e) =>{
        this.setState({
            ...this.state,
            search: e.target.value
        });
    }
    render(){
        const title = this.state.title;
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
            <div className='post-home-body'>
                <div className={`${this.state.category}-banner`}>
                    <NavbarHome/>
                </div>
                <div className='path-container'>
                    <span className='path'>
                        <NavLink to="/" style={{display:"inline-block", marginRight:"1em"}}><h4>Home</h4></NavLink>
                        <h4 style={{display:'inline-block'}}>></h4> 
                        <NavLink to={`/${this.state.category}`} style={{display:"inline-block", marginLeft:'1em', marginRight:'1em'}}><h4>{this.state.category.replace(this.state.category.charAt(0), this.state.category.charAt(0).toUpperCase())}</h4></NavLink>
                        <h4 style={{display:'inline-block'}}>></h4>
                        <NavLink to={`/${this.state.category}/`+this.props.match.params.title} style={{display:"inline-block", marginLeft:'1em'}}><h4>{this.props.match.params.title}</h4></NavLink>
                    </span>
                </div>
                <div className='container my-3'>
                    <div className='title-input'>
                        <input className='search-title' type='text' placeholder='Search' onChange={e=>{this.handleChange(e)}}></input>
                        <i className="fas fa-search"></i>
                        <h4 className='mx-3 mt-1'>or</h4>
                        <NavLink to={`/${this.state.category}/`+title+'/add-review'}><button type='button' className='btn'>MAKE A REVIEW</button></NavLink>
                    </div>
                    <div>{list}</div>
                </div>
                <Footer/>
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
        fetchReviews: (category, title) => {dispatch(fetchRev(category, title))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostHome);