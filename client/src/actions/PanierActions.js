import axios from 'axios'
import {DELETE_FROM_CART, ADD_TO_CART, GET_ITEMS_CART, CLEAR_CART,GET_ORDER,SUBMIT_ORDER,ORDER_ERROR} from './types'

export const addPanier = NewCommande =>{
    return{
        type:ADD_TO_CART,
        payload:NewCommande
    }
}
export const getPanier = () =>{
    return{
        type:GET_ITEMS_CART
    }
}
export const clearPanier = () =>{
    return{
        type:CLEAR_CART
    }
}
export const deleteItem = id =>{
    return{
        type: DELETE_FROM_CART,
        payload: id
    }
}



// GET_ORDER_BY ADMIN
export const getOrder = () =>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    axios.get('/api/cart',config)
        .then(res=>dispatch({
            type : GET_ORDER,
            payload:res.data
        }))
        .catch(err=> dispatch({
            type:ORDER_ERROR,
            payload:err.response.msg
        }))
    }


// SUBMIT ORDER
    export const  submitOrder = newOrder =>dispatch=>{
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios.post('/api/cart', newOrder ,config)
            .then(res => dispatch({
                type:SUBMIT_ORDER,
                payload : res.data
            })  
        )
            .catch(err=> dispatch({
                type:ORDER_ERROR,
                payload:err.msg
            }) )
    }