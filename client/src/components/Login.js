import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login,clearError } from '../actions/AuthActions'
import {setAlert,removeAlert} from '../actions/AlertActions'
import { v4 as uuidv4 } from 'uuid';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleChange = e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.auth.isAuthenticated){
       this.props.history.push('/')
        }
         if(nextProps.auth.error ==="please register before" ||nextProps.auth.error ==="wrong password"){
            let id=uuidv4() 
            this.props.setAlert(nextProps.auth.error,'danger',id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000);   
        }
    }
    loginNow = ()=>{
                if(this.state.email ===''||this.state.password ===''){
                    let id=uuidv4()
                this.props.setAlert('please enter your credentials before','warning',id)
                setTimeout(() => {
                    this.props.removeAlert(id)
                }, 5000);
            }else {
                this.props.login({
                email:this.state.email,
                password:this.state.password 
                  })
        }
                }
    
    
    render(){
        return (
            <div>
            <div className="container">
            <input name="email" type="email" onChange={this.handleChange} placeholder="Enter your email" />    
            <input name="password" type="text" onChange={this.handleChange} placeholder="Enter your password" />    
            </div>
            <button onClick={this.loginNow} className="btn btn-info">Login</button>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        auth:state.auth 
    }
}
export default connect(mapStateToProps,{login,clearError,setAlert,removeAlert})(Login)
