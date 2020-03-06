import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED,AUTH_ERROR,CLEAR_ERROR,LOGOUT} from "../actions/types";

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    user:null,
    error:null
}

const AuthReducer =(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
        return{
            ...state,
            ...action.payload,
            isAuthenticated:true,

            }
            case LOGOUT: 
            case LOGIN_FAIL:
            case AUTH_ERROR:
            case REGISTER_FAIL:
                localStorage.removeItem('token')
                return{
                    ...state
                    ,token:null,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload 
                }

            case CLEAR_ERROR:
                return{
                    ...state,
                    error:null
                }
                case USER_LOADED:
                return{
                    ...state,
                    isAuthenticated:true,
                    user:action.payload
                }
                default:
          return state
    }
}
export default AuthReducer  