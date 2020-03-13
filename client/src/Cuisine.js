import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";
import {loadUser} from './actions/AuthActions';


class Cuisine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
            "https://img-3.journaldesfemmes.fr/Y3ch_C7nQEsYB8A3nBZddy-owUw=/819x546/smart/4f719ad330174db09ad726e07629f85e/ccmcms-jdf/12086633.jpg",
          Name: "Cuisine Scandinave noir et bois",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/6c814d150a71e2a3_8-8240/contemporain-cuisine.jpg",
          Name: "Cuisine Contemporain rouge",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/4de1b88f0c5b105d_8-0707/classique-chic-cuisine.jpg",
          Name: "Cuisine Classique Campagne chic",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/06c1fba3065470dc_8-5497/contemporain-cuisine.jpg",
          Name: "Cuisine industrielle",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/3b0118040baceb91_8-0437/contemporain-cuisine.jpg",
          Name: "Cuisine Contemporain coloré",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/907112cb0bb37ae0_8-8247/mediterraneen-cuisine.jpg",
          Name: "Cuisine méditerranéenne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/c7b1b55d09a5d530_8-6959/retro-cuisine.jpg",
          Name: "Cuisine contemporaine épurée blanc/bois",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/6021c47404e2212f_8-9055/contemporain-cuisine.jpg",
          Name: "Cuisine Scandinave noir et bois",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/91c1c121060bf565_8-1506/eclectique-cuisine.jpg",
          Name: "Cuisine électrique",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/6301c9ab0bf59ef7_8-7547/scandinave-cuisine.jpg",
          Name: "Cuisine Bleu Blanc Bois",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/75012f0f07c04ef5_8-1162/contemporain-cuisine.jpg",
          Name: "Cuisine rétro",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/c6d1c1a50c2f9a4b_8-3572/scandinave-cuisine.jpg",
          Name: "Cuisine Scandinave noir et bois",
          Realizedby: "Par BEN ABBES Aroua"
        }
      ]
    };
  }
  componentDidMount(){
    this.props.loadUser()
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

export default connect(null,{loadUser})(Cuisine);
