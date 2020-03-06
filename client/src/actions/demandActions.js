import axios from 'axios'
import {ADD_DEMAND,DEMAND_ERROR, GET_DEMAND, DELETE_DEMAND, UPDATE_DEMAND} from './types'

// GET_DEMANDS_BY ADMIN
export const getDemand = () =>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    axios.get('/api/demand',config)
        .then(res=>dispatch({
            type : GET_DEMAND,
            payload:res.data
        }))
        .catch(err=> dispatch({
            type:DEMAND_ERROR,
            payload:err.response.msg
        }))
    }

// DELETE DEMAND_BY ADMIN
export const deleteDemand =id=>dispatch=>{
    axios.delete(`/api/demand/${id}`)
        .then(()=> dispatch({   
            type: DELETE_DEMAND,
            payload:id
        }))
        .catch(err=> dispatch({
            type:DEMAND_ERROR,
            payload:err.msg
        }) )
    }

    // UPDATE DEMAND BY ADMIN
    export const editDemand=(id, updatedDemand)=>dispatch=>{
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios.put(`/api/demand/${id}`,updatedDemand,config)
            .then(res => dispatch({
                type:UPDATE_DEMAND,
                payload:updatedDemand
            }))
            .catch(err=> dispatch({
                type:DEMAND_ERROR,
                payload:err.msg
            }) )
    }
// CREATE PROJECT
export const  createProject = newDemand =>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    axios.post('/api/demand', newDemand ,config)
        .then(res => dispatch({
            type:ADD_DEMAND,
            payload : res.data
        })  
    )
        .catch(err=> dispatch({
            type:DEMAND_ERROR,
            payload:err.msg
        }) )
}