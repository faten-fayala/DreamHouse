import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";
import "./architecte.css";
class Creations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:"https://img-3.journaldesfemmes.fr/Y3ch_C7nQEsYB8A3nBZddy-owUw=/819x546/smart/4f719ad330174db09ad726e07629f85e/ccmcms-jdf/12086633.jpg",
          Name: "cuisine"
        },
        {
            Img:"https://besthqwallpapers.com/Uploads/18-8-2019/101673/thumb2-blue-living-room-4k-blue-interior-modern-design-blue-walls.jpg",
            Name: "salon"
          },
          {
            Img:"https://s1.lmcdn.fr/multimedia/501501712505/13fb025bb6e69f/esprit-zen-pour-la-salle-de-bains.jpg",
            Name: "salle de bains"
          },
          {
            Img:"https://st.hzcdn.com/simgs/195117580b98c41b_8-1260/eclectique-chambre.jpg",
            Name: "chambre"
          },
          {
            Img:"https://images.homify.com/c_fill,f_auto,h_700,q_auto/v1508838206/p/photo/image/2285786/07.jpg",
            Name: "entrée"
          },
          {
            Img:"https://cache.magicmaman.com/data/photo/w1000_ci/56/chambreenfant.jpg",
            Name: "chambre enfant"
          },
          {
            Img:"https://www.deco.fr/sites/default/files/styles/card_480x275/public/2019-12/shutterstock_1087490177.jpg?itok=5SVF0bpm",
            Name: "jardin"
          },
          {
            Img:"https://previews.123rf.com/images/bialasiewicz/bialasiewicz1708/bialasiewicz170800973/84011080-appartement-tendance-%C3%A0-la-mode-avec-salle-%C3%A0-manger-moderne.jpg",
            Name: "salle a manger"
          },
          {
            Img:"https://st.hzcdn.com/simgs/b88115d8068d30ef_8-7692/contemporain-bureau-a-domicile.jpg",
            Name: "Bureau"
          },
      ]
    };
  }
  render() {
    return (
        <div>
            
      <div className="creations-piece">
     
        {this.state.Piece.map(el => (
          <div className="border-piece">
            <div className="piece">
              {/* <Link to="/Creations"> */}
              <Link to={`/Creations/${el.Name}`}>
                <img className="piece-img" src={el.Img} />
                <span className="name-piece">{el.Name}</span>
              </Link>
            </div>
          </div>
        ))}
       
      </div>
      </div>
    );
  }
}

export default Creations;
