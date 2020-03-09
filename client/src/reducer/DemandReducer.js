import {ADD_DEMAND , DELETE_DEMAND, UPDATE_DEMAND,DEMAND_ERROR, GET_DEMAND} from '../actions/types'

const initialState={
    demand:[],
 
    error:null
}

const DemandReducer  = (state=initialState,action)=>{
    switch(action.type){
        case GET_DEMAND :
            return{
                ...state,
                demand :action.payload
            }
        case UPDATE_DEMAND :
            return{
                ...state,
                demand : state.demand.map(el=> el._id== action.payload._id ? action.payload : el)
            }
        case DELETE_DEMAND :
            return{
                ...state,
                demand : state.demand.filter(el=> el._id!== action.payload)
            }
        case ADD_DEMAND :
            return{
                ...state,
                demand:[...state.demand, action.payload]
            } 
            case DEMAND_ERROR :
                return{
                    ...state,
                    error:action.payload
                } 
             
        default:
             return state
    }
}
export default DemandReducer