import {DELETE_FROM_CART, ADD_TO_CART, GET_ITEMS_CART, CLEAR_CART,GET_ORDER,SUBMIT_ORDER,ORDER_ERROR} from '../actions/types'
import { v4 as uuidv4 } from 'uuid';

const initialState = []
const PanierReducer =(state= initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            localStorage.setItem('cart', JSON.stringify(state.concat(action.payload)))
            return JSON.parse(localStorage.getItem('cart'))
        case GET_ITEMS_CART:
            let items = localStorage.getItem('cart')
            if(items.length !== 0){
                return JSON.parse(items)
            }else{
                return state
            }
        case CLEAR_CART:
            localStorage.setItem('cart', [])
            return []
        case DELETE_FROM_CART:
            let allItems = JSON.parse(localStorage.getItem('cart'))
            let result = allItems.filter(el => el._id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(result))
            return result
        // case GET_ORDER :
        //     return{
        //              state:action.payload
        //             }
            // case ADD_DEMAND :
            //     return{
            //         state:{...state, action.payload}
            //     } 
        
        default:
            return state
    }
}
export default PanierReducer