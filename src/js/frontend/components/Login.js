import React, {Component} from 'react';
import woman from '../../../style/woman.jpg'
import {connect} from 'react-redux';
import {login} from '../actionCreators/authActions.js';
import {Redirect} from 'react-router-dom';
import Footer from './Footer.js';

class Login extends Component{
    state = {
        email: '',
        password: ''
    };
    handleChange = e =>{
        this.setState({
            [e.target.id]:e.target.value
        });
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.props.logIn(this.state);
    }
    render(){
        return(
            <div className='login-body row mt-5'>
                <div className='card py-3 login col-3'>
                    <form onSubmit={e=>{this.handleSubmit(e)}}>
                        <h4 className='text-center mb-3'>Sign in to Welp</h4>
                        <div className='form-group'>
                            <label htmlFor='email'>Email address</label>
                            <input type='email' id='email' className='form-control' placeholder='Enter email' onChange={e=>{this.handleChange(e)}}></input>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' className='form-control' placeholder='Password' onChange={e=>{this.handleChange(e)}}></input>
                        </div>
                        <div className='form-group'>
                            <input type='submit' value="Log in" className='btn btn-dark'></input>
                        </div>
                        <div>
                            {this.props.loginError ? (<div className="alert alert-danger">{this.props.loginError}</div>) : null}
                            {this.props.loginSuccess ? (this.props.history.goBack()): null}
                        </div>
                    </form>
                </div>
                <div className='sign-in-image col-sm'>
                    <img src={woman}></img>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        loginError: state.auth.loginError,
        loginSuccess: state.auth.loginSuccess
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        logIn: (credentials) => {dispatch(login(credentials))}
    });
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);