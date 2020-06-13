const initState = {
    authError: null,
    authSuccess: null,
    loginError: null,
    loginSuccess: null,
    accessToken: null
}

const authReducer = (state=initState, action) =>{
    switch(action.type){
        case 'SIGNUP_FAIL':
            return({
                ...state,
                authSuccess: null,
                authError: action.error
            });
        case 'SIGNUP_SUCCESS':
            return({
                ...state,
                authError: null,
                authSuccess: action.msg
            });
        case 'LOGIN_FAIL':
            return({
                ...state,
                loginSuccess: null,
                accessToken: null,
                loginError: action.error
            });
        case 'LOGIN_SUCCESS':
            return({
                ...state,
                loginError:null,
                loginSuccess: action.msg,
                accessToken: action.accessToken
            });
        case 'LOGOUT':
            localStorage.clear();
            return({
                ...state,
                loginError:null,
                loginSuccess:null,
                accessToken:null,
                authError: null,
                authSuccess: null,
            });
        case 'VALID_TOKEN':
            return({
                ...state,
                loginError:null,
            })
        case 'EXPIRED_TOKEN':
            return({
                ...state,
                loginError: "Your access token expired, please log in again",
                loginSuccess: null,
                accessToken: null
            })
        default:
            return state;
    }
}

export default authReducer;