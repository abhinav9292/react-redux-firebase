
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log("login error");
            return {
                ...state,
                authError: 'login failed'
            }

        case 'LOGIN_SUCCESS':
            console.log("login success");
            return {
                ...state,
                authError: null
            }
            
        case 'SIGN_OUT_SUCCESS':
            console.log("signed out successfully");
            return state;
        
        case 'SIGN_UP_SUCCESS':
            console.log("signed up succesfully");
            return {
                ...state,
                authError : null
            }    
        
        case 'SIGN_UP_FAILED':
            console.log("sign up failed");
            return {
                ...state,
                authError: action.err.message
            }


        default:
            return state;
    }
}

export default authReducer;