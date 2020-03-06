import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";

class Salledebain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
          "https://st.hzcdn.com/simgs/4701a7f8038c4994_8-9312/moderne-salle-de-bain.jpg",
          Name: "Salle de bain moderne",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://www.sm-devis.tn/wp-content/uploads/2019/10/Guide-des-prix-salle-de-bains-Tunisie-sm-devis.jpg",
          Name: "Salle de bain moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://www.espace-aubade.fr/uploads/blog/picture/630x410/des-idees-pour-une-salle-de-bains-classique-une.jpg",
          Name: "Salle de bain classique",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
          "https://cimondesign.com/wp-content/uploads/2017/06/17.jpg",
          Name: "Salle de bain scandinave",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://designmag.fr/wp-content/uploads/2016/03/modele-salle-de-bain-design-deco-luxe.jpg",
          Name: "Salle de bain luxe méditerranéenne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://i.pinimg.com/originals/4a/c4/e8/4ac4e83858db1b92ab168f914b160a69.jpg",
          Name: "Salle de bain campagne chic",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
          "https://static.cotemaison.fr/medias_11926/w_2048,h_1146,c_crop,x_0,y_225/w_640,h_360,c_fill,g_north/v1558943162/les-tendances-2019-selon-envie-de-salle-de-bain-4_6106530.jpg",
          Name: "Salle de bain industriel",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://designmag.fr/wp-content/uploads/2014/12/salles-de-bain-2015-bambou.jpg",
          Name: "Salle de bain asiatique",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://i.pinimg.com/564x/01/17/af/0117afd4ea87a3a89e440891f7a0e6eb.jpg",
          Name: "Douche design italienne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
          "https://i.pinimg.com/564x/29/9e/1f/299e1ff6c902fcd3c85f041abdcd793d.jpg",
          Name: "Salle de bain théme nature",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://i.pinimg.com/564x/87/b7/b9/87b7b9499c5d2b2934dfc4e67396f8da.jpg",
          Name: "Douche moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://i.pinimg.com/564x/39/70/c9/3970c9954d33baed17c3d3c92f545095.jpg",
          Name: "Salle de bain carrelage moderne noir et blanc",
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

export default Salledebain;