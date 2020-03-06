import {REGISTER_SUCCESS, REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,AUTH_ERROR,CLEAR_ERROR, USER_LOADED,LOGOUT} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

// LOAD USER
export const loadUser = () =>dispatch =>{
    // Set the token inside the request's header
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    axios.get('/api/auth')
        .then(user=> dispatch({
            type:USER_LOADED,
            payload:user.data   
        }))
        .catch(()=>dispatch({
            type:AUTH_ERROR  }) )
    
}

// REGISTER USER
export const  register =formData=>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    axios.post('/api/user',formData,config)
        .then(res => {dispatch({
            type:REGISTER_SUCCESS,
            payload : res.data
        })  
        dispatch(loadUser())
    })
        .catch(err=> dispatch({
            type:REGISTER_FAIL,
            payload:err.response.data.msg
        }) )
}
// LOGIN USER
export const  login =formData=>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    axios.post('/api/auth',formData,config)
        .then(res => {dispatch({
            type:LOGIN_SUCCESS,
            payload : res.data
        })  
        dispatch(loadUser())
    })
        .catch(err=> dispatch({
            type:LOGIN_FAIL,
            payload:err.response.data.msg
        }) )
}

// LOGOUT USER
export const logout = ()=>dispatch=>{
    dispatch({
        type:LOGOUT
    })
}

// CLEAR ERRORS
export const clearError =()=>dispatch=>{
     dispatch({
         type:CLEAR_ERROR,
         })
}