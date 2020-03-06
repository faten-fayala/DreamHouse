import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";

class Entree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
            "https://designmag.fr/wp-content/uploads/2015/07/d%C3%A9co-entr%C3%A9e-maison-moderne.jpg",
          Name: "Entrée maison moderne",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/originals/55/a0/72/55a072ba67f69d8924e8579e668afbbf.jpg",
          Name: "Entrée maison moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/styles/article_images__s640_/public/field/image/entree-deco-originale-idee-astuces.jpg?itok=xEXpCVn1",
          Name: "Entrée maison campagne moderne ",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/images/deco-maison-rustique-idee-astuce-design-interieur.jpg",
          Name: "Entrée maison campagne chic",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/images/residence-secondaire-campagne-vacances-deco.jpg",
          Name: "Entrée maison chic",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/images/deco-entree-maison-moderne-original-design.jpg",
          Name: "Entrée maison moderne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
            Img:
            "https://www.designferia.com/sites/default/files/images/interieur-maison-citadine-deco-luxe.jpg",
          Name: "Entrée maison classique luxieux",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://i.pinimg.com/originals/3b/f4/4d/3bf44db91b1eac5ab1b2ee3a773027c5.jpg",
          Name: "Entrée maison bistro",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/images/deco-entree-originale-elegante-luxe.jpg",
          Name: "Entrée maison classique chic",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/images/belle-demeure-idee-deco-entree.jpg",
          Name: "Entrée maison campagne",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/images/maison-de-luxe-deco-entree.jpg",
          Name: "Entrée maison moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://www.designferia.com/sites/default/files/images/rustique-originale-idee-deco-maison-entree.jpg",
          Name: "Entree maison au bord de mer",
          Realizedby: "Par BEN ABBES Aroua"
        }
      ]
    };
  }
  render() {
    return (
      <div className="creations-piece-body">
        <div className="creations-piece">
          {this.state.Piece.map(el => (
            <div className="cuisine">
              <img className="img-cuisine" src={el.Img} />
              <span className="name-cuisine">{el.Name}</span>
              <span className="cuisine-realizedby">{el.Realizedby}</span>
              <div class="middle">
                <div>
                  <svg
                    class="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 485.3 485.3"
                    stroke="#000000"
                    stroke-width="0"
                  >
                    <g id="IconsRepo_bgCarrier"></g>{" "}
                    <path d="M349.6,28.95c-36.3,0-70.5,14.2-96.2,39.9l-10.6,10.6L232,68.65c-25.7-25.7-59.9-39.9-96.2-39.9 c-36.2,0-70.3,14.1-96,39.8S0,128.35,0,164.65s14.2,70.4,39.9,96.1l190.5,190.5l0.4,0.4c3.3,3.3,7.7,4.9,12,4.9 c4.4,0,8.8-1.7,12.1-5l190.5-190.5c25.7-25.7,39.9-59.8,39.9-96.1s-14.1-70.5-39.8-96.1C419.9,43.05,385.8,28.95,349.6,28.95z M421.2,236.75l-178.3,178.4L64.2,236.45c-19.2-19.2-29.8-44.7-29.9-71.9c0-27.1,10.5-52.6,29.7-71.8 c19.2-19.1,44.7-29.7,71.7-29.7c27.2,0,52.7,10.6,72,29.9l22.9,22.9c6.4,6.4,17.8,6.4,24.3,0l22.8-22.8 c19.2-19.2,44.8-29.8,71.9-29.8s52.6,10.6,71.8,29.8c19.2,19.2,29.8,44.7,29.7,71.9C451.1,192.05,440.5,217.55,421.2,236.75z"></path>{" "}
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Entree;