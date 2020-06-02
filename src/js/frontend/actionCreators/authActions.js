import axios from "axios";

const signup = (userObject) => {
    return (dispatch) => {
        if(!userObject.email || !userObject.password || !userObject.firstName || !userObject.lastName || !userObject.passwordConfirm){
            dispatch({type: "SIGNUP_FAIL", error: "Missing one or more fields"});
        }
        else if(userObject.password.length < 6){
            dispatch({type: "SIGNUP_FAIL", error: "Password must be at least 6 characters"});
        }
        else if(userObject.password !== userObject.passwordConfirm){
            dispatch({type: "SIGNUP_FAIL", error: "Passwords do not match"});
        }
        else{
            axios.post('http://localhost:5000/signup', {
                email: userObject.email,
                password: userObject.password,
                firstName: userObject.firstName,
                lastName: userObject.lastName
            }).then(response=>{
                if(response.data.error){
                    dispatch({type: "SIGNUP_FAIL", error: response.data.msg});
                }
                else{
                    dispatch({type: "SIGNUP_SUCCESS", msg: response.data.msg});
                }
            });
        }
    }
}

const login = (userObject) => {
    return (dispatch) => {
        if(!userObject.email || !userObject.password){
            dispatch({type: "LOGIN_FAIL", error: "Missing one or more fields"});
        }
        else{
            axios.post('http://localhost:5000/login', {
                email: userObject.email,
                password: userObject.password
            }).then(response=>{
                if(response.data.error){
                    dispatch({type: 'LOGIN_FAIL', error: response.data.msg});
                }
                else{
                    localStorage.setItem('jwt', response.data.accessToken);
                    dispatch({type: 'LOGIN_SUCCESS', msg: "Successfully logged in", accessToken: response.data.accessToken});
                }
            });
        }
    }
}

export {signup, login};