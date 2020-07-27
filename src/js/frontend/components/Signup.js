import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signup} from '../actionCreators/authActions.js';
import {Redirect} from 'react-router-dom'; 
import Footer from './Footer.js';
class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            firstName: '',
            lastName: ''
        };
        this.initState={
            email: '',
            password: '',
            passwordConfirm: '',
            firstName: '',
            lastName: ''
        }
    }
    handleChange = e =>{
        this.setState({
            [e.target.id]:e.target.value
        });
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.signUp(this.state);
    }

    cancel = e => {
        this.props.history.goBack();
    }

    render(){
        if(this.state.cancel){
            return(<Redirect to="/"></Redirect>);
        }
        return(
            <div className='signup-body row mt-5 mx-5'>
                <div className='card py-3 sign-up col'>
                    <form onSubmit={e=>{this.handleSubmit(e)}}>
                        <h4 className='text-center mb-3'>Create an account</h4>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First name</label>
                            <input type='text' id='firstName' className='form-control' placeholder='Enter first name' onChange={e=>{this.handleChange(e)}}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last name</label>
                            <input type='text' id='lastName' className='form-control' placeholder='Enter last name' onChange={e=>{this.handleChange(e)}}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email address</label>
                            <input type='email' id='email' className='form-control' placeholder='Enter email' onChange={e=>{this.handleChange(e)}}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' className='form-control' placeholder='Password' onChange={e=>{this.handleChange(e)}}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='passwordConfirm'>Confirm password</label>
                            <input type='password' id='passwordConfirm' className='form-control' placeholder='Confirm password' onChange={e=>{this.handleChange(e)}}></input>
                        </div>
                        <div>
                            {this.props.authError ? (<div className="alert alert-danger">{this.props.authError}</div>) : null}
                            {this.props.authSuccess ? (<div className="alert alert-success">{this.props.authSuccess}</div>): null}
                        </div>
                        <div className='form-group'>
                            <input type='submit' value="Sign up" className='btn btn-dark'></input>
                            <button className='btn btn-outline-dark mr-3 ml-3' onClick={e=>{this.cancel(e)}}>Go back</button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        authError: state.auth.authError,
        authSuccess: state.auth.authSuccess
    });
}
const mapDispatchToProps = (dispatch) => {
    return({
        signUp: (credentials) => {dispatch(signup(credentials))}
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);