import React, { Component } from 'react'
import {setAlert, removeAlert} from '../actions/AlertActions'
import {register,clearError} from '../actions/AuthActions'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
export class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
firstname:"",
lastname:"",
email:"",
password:"",
gender:"",
adress:"",
birthday:"",
phone:null
        }
    }
    handleChange = e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    registerNow = () =>{
        if(this.state.firstname ===''||this.state.lastname ===''||this.state.email ===''||this.state.password ===''){
            let id=uuidv4()
            this.props.setAlert('please all fields are required','warning',id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        }else {this.props.register({firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password ,
            gender:this.state.gender,
            birthday:this.state.birthday  ,
            phone:this.state.phone   ,
            adress:this.state.adress  })
    }
    }
componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
   this.props.history.push('/')
    }
    if(nextProps.auth.error ==="User already exists"){
        let id=uuidv4()
        this.props.setAlert(nextProps.auth.error,'danger',id)
        setTimeout(() => {
            this.props.removeAlert(id)
            this.props.clearError()
        }, 5000);   
    }
}
    render() {
      
        return (
            <div>
            <div className="container">
            <input name="firstname" type="text" onChange={this.handleChange} placeholder="Enter your firstname" />    
            <input name="lastname" type="text" onChange={this.handleChange} placeholder="Enter your lastname" />    
            <input name="email" type="email" onChange={this.handleChange} placeholder="Enter your email" />    
            <input name="password" type="password" onChange={this.handleChange} placeholder="Enter your password" /> 
            <input name="phone" type="text" onChange={this.handleChange} placeholder="Enter your phone" />    
            <input name="gender" type="text" onChange={this.handleChange} placeholder="Enter your gender" />    
            <input name="birthday" type="text" onChange={this.handleChange} placeholder="Enter your birthday" />    
            <input name="adress" type="text" onChange={this.handleChange} placeholder="Enter your adress" />    

            </div>
            <button onClick={this.registerNow} className="btn btn-info">Register</button>
            </div>
        )
    }
}
// const mapDispatchToProps = dispatch =>{
//     return{
//         setAlert : (msg,type,id) => dispatch(setAlert(msg,type,id)),
//         clearAlert : id => dispatch(removeAlert(id))
//     }
// }
const mapStateToProps = (state)=>{
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps,{setAlert,clearError,removeAlert,register})(Register)
