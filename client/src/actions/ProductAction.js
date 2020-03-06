import {GET_PRODUCT} from "./types";
import axios from 'axios'

export const getproduct = () => dispatch => {
    return axios.get("/product/products")
        .then(data => dispatch({
        type: GET_PRODUCT,
        payload: data
        })
      )
      .catch(err => console.log(err))
  };

// export const addproduct =newproduct => dispatch => {
// return axios.post("/new_product",newproduct)
// .then(()=> dispatch(getproduct()))
// .catch(err => console.log(err))

// };
// export const deleteproduct = id => dispatch=>{
//   return axios.delete(`/delete_product/${id}`)
//   .then(()=>dispatch(getproduct()))
//   .catch(err => console.log(err))
// };


// export const editproduct = (id,editproduct) => dispatch => {
//     return axios.put(`/update_product${id}`,editproduct)
// .then(() => dispatch(editproduct()))
// .catch(err => console.log(err))
//   };