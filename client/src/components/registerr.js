import React, { Component } from "react";
import Image from "../dreamhouse.png";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Register extends Component {
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
              <span>Vous avez déjà un compte ?</span>
              {/* <span className="text-inscri">C'est votre première visite ?
DREAM HOUSE vous invite à cliquer sur Créer un compte.</span> */}
              <button className="button-inscription">SE CONNECTER</button>
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
            placeholder="Enter your email"
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
            placeholder="DATTE DE NAISSANCE"
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
    );
  }
}

export default Register;
