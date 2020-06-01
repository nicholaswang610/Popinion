const initState = {
    authError: null,
    authSuccess: null,
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
                authSuccess: null,
                accessToken: null,
                authError: action.error
            });
        case 'LOGIN_SUCCESS':
            return({
                ...state,
                authError:null,
                authSuccess: action.msg,
                accessToken: action.accessToken
            });
        default:
            return state;
    }
}

export default authReducer;