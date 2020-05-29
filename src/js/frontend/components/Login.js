import React, {Component} from 'react';
import woman from '../../../style/woman.jpg'

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
        e.target.reset();
        console.log(this.state);
    }
    render(){
        return(
            <div className='row mt-5 mx-5'>
                <div className='sign-in col-3'>
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
                    </form>
                </div>
                <div className='sign-in-image col-sm'>
                    <img src={woman}></img>
                </div>
            </div>
        );
    }
}

export default Login;