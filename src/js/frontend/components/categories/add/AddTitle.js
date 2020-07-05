import React, {Component} from 'react';
import NavbarHome from '../../NavbarHome.js';
import {NavLink, Redirect} from 'react-router-dom';
import Footer from '../../Footer.js';
import {addTitle} from '../../../actionCreators/postActions';
import {connect} from 'react-redux';


class AddTitle extends Component{
    state = {
        incomplete: false,
        complete:false,
        cancel: false,
        category: '',
        title: null,
        publisher:null,
        genre: null,
        releaseYear:null
    }
    componentDidMount(){
        const category = this.props.match.url.split('/')[1];
        this.setState({
            ...this.state,
            category:category,
        });
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.title && this.state.publisher && this.state.genre && this.state.releaseYear){
            const titlePayload = {
                category: this.state.category,
                title: this.state.title,
                publisher: this.state.publisher,
                genre: this.state.genre,
                releaseYear: this.state.releaseYear
            }
            console.log(titlePayload);
            this.props.addTitle(titlePayload);
            this.setState({
                ...this.state,
                incomplete:false,
                complete: true
            })
        }
        else{
            this.setState({
                ...this.state,
                complete:false,
                incomplete:true
            })
        }
        
    }
    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    cancel(e){
        this.setState({
            ...this.state,
            cancel:true
        })
    }
    render(){
        if(this.state.cancel){
            return(<Redirect to={'/'+this.state.category}></Redirect>);
        }
        else if(!(this.props.loggedIn)){
            this.props.loginRedirectMsg();
            return(<Redirect to='/login'></Redirect>);
        }
        else{
            return(
                <div className='add-body'>
                    <div>
                        <NavbarHome/>
                    </div>
                    <div className='path-container'>
                        <span className='path'>
                            <NavLink to="/" style={{display:"inline-block", marginRight:"1em"}}><h4>Home</h4></NavLink>
                            <h4 style={{display:'inline-block'}}>></h4> 
                            <NavLink to={`/${this.state.category}`} style={{display:"inline-block", marginLeft:'1em', marginRight:'1em'}}><h4>{this.state.category.replace(this.state.category.charAt(0), this.state.category.charAt(0).toUpperCase())}</h4></NavLink>
                            <h4 style={{display:'inline-block'}}>></h4>
                            <NavLink to={`/${this.state.category}/`+'add-title'} style={{display:"inline-block", marginLeft:'1em', marginRight:'1em'}}><h4>Add a Title</h4></NavLink>
                        </span>
                    </div>
                    <div className='container my-4'>
                        <div className='card py-3'>
                            <div style={{textAlign:'center', fontWeight:'bold', marginBottom:'1em'}}>Want to suggest a title? Fill in the details below.</div>
                            <form onSubmit={e=>{this.handleSubmit(e)}}>
                                <div className='form-group px-3'>
                                    <div>What's the name of the product?</div>
                                    <input type='text' id='title' placeholder='Product name' className='form-control mb-3' onChange={e=>{this.handleChange(e)}}></input>
                                    <div>Who published it?</div>
                                    <input type='text' id='publisher' placeholder='Publisher' className='form-control mb-3' onChange={e=>{this.handleChange(e)}}></input>
                                    <div>Best-fitting genre</div>
                                    <input type='text' id='genre' placeholder='Genre' className='form-control mb-3' onChange={e=>{this.handleChange(e)}}></input>
                                    <div>Year the product was released</div>
                                    <input type='text' id='releaseYear' placeholder='Release year' className='form-control mb-3' onChange={e=>{this.handleChange(e)}}></input>
                                    {this.state.incomplete ? (<div className='alert alert-danger'>Missing field(s)</div>) : null}
                                    {this.state.complete ? (<div className='alert alert-success'>Thank you! We will review your request as soon as possible.</div>) : (null)}
                                    <button className='btn btn-outline-dark mr-3' onClick={e=>{this.cancel(e)}}>CANCEL</button>
                                    <input type='submit' value="POST" className='btn btn-dark'></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer/>
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
        loginRedirectMsg: ()=>{dispatch({type: 'LOGIN_FAIL', error: 'You must be logged in to suggest a product'})},
        addTitle: (titlePayload)=>{dispatch(addTitle(titlePayload))}
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTitle);