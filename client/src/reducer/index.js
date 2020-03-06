import {combineReducers} from 'redux'
import ProductReducer from "./ProductReducer";
import DemandReducer from './DemandReducer'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'

export default combineReducers({ProductReducer,demand:DemandReducer,auth:AuthReducer,alert:AlertReducer})