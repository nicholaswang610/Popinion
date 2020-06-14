import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavbarHome from '../../NavbarHome.js';
import {NavLink, Redirect} from 'react-router-dom';
import {post} from '../../../actionCreators/postActions.js';
 
class AddReview extends Component{
    state = {
        incomplete: false,
        cancel: false,
        genre: null,
        title: null,
        reviewTitle: null,
        reviewContent: null
    }

    componentDidMount(){
        const genre = this.props.match.url.split('/')[1];
        const title = this.props.match.url.split('/')[2];
        this.setState({
            ...this.state,
            genre:genre,
            title:title
        });
    }
    //might need to make this async/await so that i can conditionally redirect
    handleSubmit(e){
        e.preventDefault();
        if(this.state.reviewTitle && this.state.reviewContent){
            const postPayload = {
                genre: this.state.genre,
                title: this.state.title,
                reviewTitle: this.state.reviewTitle,
                reviewContent: this.state.reviewContent
            }
            this.props.postReview(postPayload); 
            this.props.history.goBack();
        }
        else{
            this.setState({
                ...this.state,
                incomplete:true
            })
        }
        
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    cancelPost(e){
        this.setState({
            ...this.state,
            cancel:true
        })
    }

    //note: will change 'game-banner' and etc. class names to template strings later, based on genre
    render(){
        if(this.state.cancel){
            return(<Redirect to={'/'+this.state.genre+'/'+this.state.title}></Redirect>);
        }
        else if(!(this.props.loggedIn)){
            this.props.loginRedirectMsg();
            return(<Redirect to='/login'></Redirect>);
        }
        else{
            return(
                <div style={{backgroundColor:'gray', height:"100%"}}>
                    <div className='game-banner'>
                        <NavbarHome className='game-navbar'/>
                    </div>
                    <div className='path-container'>
                        <span className='path-to-gaming'>
                            <NavLink to="/" style={{display:"inline-block", marginRight:"1em"}}><h4>Home</h4></NavLink>
                            <h4 style={{display:'inline-block'}}>></h4> 
                            <NavLink to='/gaming' style={{display:"inline-block", marginLeft:'1em', marginRight:'1em'}}><h4>Gaming</h4></NavLink>
                            <h4 style={{display:'inline-block'}}>></h4>
                            <NavLink to={'/gaming/'+this.state.title} style={{display:"inline-block", marginLeft:'1em', marginRight:'1em'}}><h4>{this.state.title}</h4></NavLink>
                            <h4 style={{display:'inline-block'}}>></h4>
                            <NavLink to={'/gaming/'+this.state.title+'/add-review'} style={{display:"inline-block", marginLeft:'1em', marginRight:'1em'}}><h4>Add a Review</h4></NavLink>
                        </span>
                    </div>
                    <div className='container my-3'>
                        <div className='card py-3'>
                            <form onSubmit={e=>{this.handleSubmit(e)}}>
                                <div className='form-group px-3'>
                                    <input type='text' id='reviewTitle' placeholder='Title' className='form-control my-3' onChange={e=>{this.handleChange(e)}}></input>
                                    <textarea id='reviewContent' cols="1" rows="8" placeholder='Text (required)' className='form-control my-3' onChange={e=>{this.handleChange(e)}}></textarea>
                                    {this.state.incomplete ? (<div className='alert alert-danger'>Missing field(s)</div>) : null}
                                    <button className='btn btn-outline-dark mr-3' onClick={e=>{this.cancelPost(e)}}>CANCEL</button>
                                    <input type='submit' value="POST" className='btn btn-dark'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}

const mapStateToProps = (state) => {
    return({
        loggedIn: state.auth.loginSuccess
    })
}
const mapDispatchToProps = (dispatch) => {
    return({
        loginRedirectMsg: ()=>{dispatch({type: 'LOGIN_FAIL', error: 'You must be logged in to make a review'})},
        postReview: (reviewPayload)=>{dispatch(post(reviewPayload))}
    });
}
export default connect(mapStateToProps,mapDispatchToProps)(AddReview);