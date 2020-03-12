import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login,clearError } from '../actions/AuthActions'
import {setAlert,removeAlert} from '../actions/AlertActions'
import { v4 as uuidv4 } from 'uuid';
import Alerts from './pieces/Alerts'
import {Link} from 'react-router-dom';
import Image from '../dreamhouse.png';

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
            // <div className="moez">
            // <div className="container">
            // <input name="email" type="email" onChange={this.handleChange} placeholder="Enter your email" />    
            // <input name="password" type="password" onChange={this.handleChange} placeholder="Enter your password" />    
            // </div>
            // <button onClick={this.loginNow} className="btn btn-info">Login</button>
            // </div>



            <div className="login-page">
            <div className="loginn">
              <div
                id="carouselExampleControls"
                class="carousel slide loginn "
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="https://connect.rhinov.fr/img/bg_sidebar_1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://connect.rhinov.fr/img/bg_sidebar_2.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://connect.rhinov.fr/img/bg_sidebar_3.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <div>
                    <img src={Image} className="img-dream-house-login" />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div> 
    
       
            <div className="coordonnee">
              <div className="login-nav">
              <Link className="backtomenu" to="/">
                <div className="login-retour">
                  <i class="fas fa-arrow-left"></i>
                  <span>Retour à l'accueil</span>
                </div>

                </Link>

                <div>
                  <span>Vous n'avez pas encore de compte ?</span>
                  {/* <span className="text-inscri">C'est votre première visite ?
    DREAM HOUSE vous invite à cliquer sur Créer un compte.</span> */}
     <Link to="/register">
                  <button className="button-inscription">CREER UN COMPTE!</button></Link>
                </div>
              </div>
              <span className="text-connexion">Connectez-vous à DREAM HOUSE</span>
              <input
                className="email"
                name="email"
                type="email"
                onChange={this.handleChange}
                placeholder="ADRESSE EMAIL"
              />
              <input
                className="email"
                name="password"
                type="password"
                onChange={this.handleChange}
                placeholder="MOT DE PASSE"
              />
              <button onClick={this.loginNow}  className="button-connexion">SE CONNECTER</button>
            </div>
            <Alerts/>
          </div>


        );
    }
}
const mapStateToProps = state =>{
    return{
        auth:state.auth 
    }
}
export default connect(mapStateToProps,{login,clearError,setAlert,removeAlert})(Login)
