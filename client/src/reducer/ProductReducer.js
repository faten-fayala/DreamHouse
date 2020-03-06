import { GET_PRODUCT } from '../actions/types';


const initialState= { product:[]
};


const ProductReducer = ( state = initialState , action) => {

    switch(action.type){
        case GET_PRODUCT : 
        return {
          ...state,
          product:action.payload.data
        };
        
        
        default : return state ;
    }

}
export default ProductReducer;