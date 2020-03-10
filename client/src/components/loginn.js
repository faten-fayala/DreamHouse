import React, { Component } from "react";
import Image from "../dreamhouse.png";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
          <a className="login-retour-acceuil" href="/">
            <div className="login-retour">
              <i class="fas fa-arrow-left"></i>
              <span>Retour à l'accueil</span>
            </div>
            </a>
            <div>
              <span>Vous n'avez pas encore de compte ?</span>
              {/* <span className="text-inscri">C'est votre première visite ?
DREAM HOUSE vous invite à cliquer sur Créer un compte.</span> */}
              <button className="button-inscription">CREER UN COMPTE!</button>
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
      </div>
    );
  }
}

export default Login;
