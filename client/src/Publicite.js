import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./footer.css";
import {loadUser} from './actions/AuthActions'
class Publicite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.loadUser()
  }
  render() {
    return (
      <div>
        
        <div>
          <img
            className="publicite-image"
            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/02/Pricing-Title-Image.jpg"
          ></img>
          <h3 className="publicite-introduction">
          Développez votre activité à l'aide de la solution marketing Pro+ de
          DREAM HOUSE
        </h3>
          <div className="publicitee">
            <h1 className="title-publicite">
              Pourquoi travailler avec DREAM HOUSE ?
            </h1>
            <div className="ligne-publicite"></div>
            <h3 className="subtitle-publicite">Développez votre activité</h3>
            <p className="text-publicite">
              Faites-vous connaître et ciblez les prospects qui vous
              correspondent
            </p>
            <h3 className="subtitle-publicite">
              Sélectionnez les projets qui vous intéressent
            </h3>
            <p className="text-publicite">
              Choisissez le budget, la zone géographique et le type de projets
              adaptés à vos besoins
            </p>
            <h3 className="subtitle-publicite">
              Bénéficiez d'un accompagnement personnalisé
            </h3>
            <p className="text-publicite">
              Notre équipe d’experts est à votre disposition pour vous aider à
              atteindre vos objectifs
            </p>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state =>{
//   return{

//   }
// }
export default connect(null,{loadUser})(Publicite);
