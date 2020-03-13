import React, { Component } from 'react'
import {setAlert, removeAlert} from '../actions/AlertActions'
import {register,clearError} from '../actions/AuthActions'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';
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
        if(this.state.firstname ===''||this.state.lastname ===''||this.state.email ===''||this.state.password ===''|| !this.state.email.includes('@')) {
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
            // <div>
            // <div className="container">
            // <input name="firstname" type="text" onChange={this.handleChange} placeholder="Enter your firstname" />    
            // <input name="lastname" type="text" onChange={this.handleChange} placeholder="Enter your lastname" />    
            // <input name="email" type="email" onChange={this.handleChange} placeholder="Enter your email" />    
            // <input name="password" type="password" onChange={this.handleChange} placeholder="Enter your password" /> 
            // <input name="phone" type="text" onChange={this.handleChange} placeholder="Enter your phone" />    
            // <input name="gender" type="text" onChange={this.handleChange} placeholder="Enter your gender" />    
            // <input name="birthday" type="text" onChange={this.handleChange} placeholder="Enter your birthday" />    
            // <input name="adress" type="text" onChange={this.handleChange} placeholder="Enter your adress" />    

            // </div>
            // <button onClick={this.registerNow} className="btn btn-info">Register</button>
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
            <span>Vous avez déjà un compte ? </span>
            {/* <span className="text-inscri">C'est votre première visite ?
DREAM HOUSE vous invite à cliquer sur Créer un compte.</span> */}
 <Link to="/login">
            <button className="button-inscription">SE CONNECTER</button></Link>
          </div>
        </div>
        <span className="text-connexion">Bienvenue sur DREAM HOUSE</span>

        <input
          className="email"
          name="firstname"
          type="text"
          onChange={this.handleChange}
          placeholder="NOM"
        />
        <input
          className="email"
          name="lastname"
          type="text"
          onChange={this.handleChange}
          placeholder="PRENOM"
        />
        <input
          className="email"
          name="email"
          type="email"
          onChange={this.handleChange}
          placeholder="EMAIL"
        />
        <input
          className="email"
          name="password"
          type="password"
          onChange={this.handleChange}
          placeholder="MOT DE PASSE"
        />
        <input
          className="email"
          name="phone"
          type="text"
          onChange={this.handleChange}
          placeholder="TELEPHONE"
        />
        <input
          className="email"
          name="gender"
          type="text"
          onChange={this.handleChange}
          placeholder="GENRE"
        />
        <input
          className="email"
          name="birthday"
          type="text"
          onChange={this.handleChange}
          placeholder="DATE DE NAISSANCE"
        />
        <input
          className="email"
          name="adress"
          type="text"
          onChange={this.handleChange}
          placeholder="ADRESSE"
        />
        <button className="button-connexion" onClick={this.registerNow}>S'INSCRIRE</button>
      </div>
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
