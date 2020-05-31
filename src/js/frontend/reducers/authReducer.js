import axios from "axios";

const initState = {
    authError: null,
    authSuccess: null
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
        default:
            return state;
    }
}

export default authReducer;