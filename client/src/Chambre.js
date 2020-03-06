import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";

class Chambre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
            "https://i.pinimg.com/564x/f8/aa/50/f8aa50a7d714d74f2a62a35d93dae1b9.jpg",
          Name: "Chambre classique chic",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/ca/a9/7e/caa97e89f6ccb1161e069506c3c8d8bf.jpg",
          Name: "Chambre rose et gris",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/8691ad100c6ee8bd_8-2424/contemporain-chambre.jpg",
          Name: "Chambre contemporain ",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://www.joliplace.com/wp-content/uploads/2014/03/chambre-d-C3-A9co-style-scandinave-id-C3-A9e-o-C3-B9-acheter1-e1408275593538.jpg",
          Name: "Chambre scandinave",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/dcc15d8c0ab11ed0_8-9483/moderne-chambre.jpg",
          Name: "Chambre moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/d7/1c/61/d71c61a852e4cef61d8513833db142c3.jpg",
          Name: "Chambre campagne chic moderne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
            Img:
            "https://i.pinimg.com/564x/c7/25/17/c725176fae972c2275a68c962241d9e1.jpg",
          Name: "Chambre rose",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/43/dd/0c/43dd0c0d4407c391981fc1dfafaa8923.jpg",
          Name: "Chambre campagne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/a7/a8/b7/a7a8b7510824d733608374b84c423a59.jpg",
          Name: "Chambre traditionelle tunisienne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://i.pinimg.com/564x/ba/74/75/ba74757951f9056bf15917a4aa2dae56.jpg",
          Name: "Chambre moderne",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/fa/db/00/fadb00573dee9eb2eb1bb352d7b0cfc9.jpg",
          Name: "Chambre classique chic",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/d0/73/2c/d0732c63186649ab739cc092c9da2eb5.jpg",
          Name: "Chambre moderne",
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

export default Chambre;