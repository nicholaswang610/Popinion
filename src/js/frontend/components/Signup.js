import React, {Component} from 'react';

class Signup extends Component{
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
                            <input type='submit' value="Log in" className='btn btn-dark'></input>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;