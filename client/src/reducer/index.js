import {combineReducers} from 'redux'
import ProductReducer from "./ProductReducer";
import DemandReducer from './DemandReducer'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
import PanierReducer from './PanierReducer'

export default combineReducers({PanierReducer,ProductReducer,demand:DemandReducer,auth:AuthReducer,alert:AlertReducer})