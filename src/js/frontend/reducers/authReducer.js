import axios from "axios";

const initState = {
    authError: null,
    authSuccess: null
}

const authReducer = (state=initState, action) =>{
    switch(action.type){
        case 'SIGNUP':
            if(!action.signUpCredentials.email || !action.signUpCredentials.password || !action.signUpCredentials.firstName || !action.signUpCredentials.lastName || !action.signUpCredentials.passwordConfirm){
                return({
                    ...state,
                    authSuccess: null,
                    authError: "Missing one or more fields"
                })
            }
            else if(action.signUpCredentials.password.length < 6){
                return({
                    ...state,
                    authSuccess: null,
                    authError: "Password must be at least 6 characters"
                });
            }
            else if(action.signUpCredentials.password !== action.signUpCredentials.passwordConfirm){
                return({
                    ...state,
                    authSuccess: null,
                    authError: "Passwords do not match"
                });
            }
            else{
                axios.post('http://localhost:5000/signup', {
                    email: action.signUpCredentials.email,
                    password: action.signUpCredentials.password,
                    firstName: action.signUpCredentials.firstName,
                    lastName: action.signUpCredentials.lastName
                });
                return ({
                    ...state,
                    authError: null,
                    authSuccess: "Thank you! Your account has been created."
                });
            }
        default:
            return state;
    }
}

export default authReducer;