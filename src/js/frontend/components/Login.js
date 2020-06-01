import React, {Component} from 'react';
import woman from '../../../style/woman.jpg'
import {connect} from 'react-redux';
import {login} from '../actionCreators/authActions.js';

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
        this.props.history.push('/');
    }
    render(){
        return(
            <div className='row mt-5 mx-5'>
                <div className='card py-3 sign-in col-3'>
                    <form onSubmit={e=>{this.handleSubmit(e)}}>
                        <h4 className='text-center mb-3'>Sign in to Reviews</h4>
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
                            {this.props.authError ? (<div className="alert alert-danger">{this.props.authError}</div>) : null}
                            {this.props.authSuccess ? (<div className="alert alert-success">{this.props.authSuccess}</div>): null}
                        </div>
                    </form>
                </div>
                <div className='sign-in-image col-sm'>
                    <img src={woman}></img>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        authError: state.auth.authError,
        authSuccess: state.auth.authSuccess,
        accessToken: state.auth.accessToken
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        logIn: (credentials) => {dispatch(login(credentials))}
    });
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);