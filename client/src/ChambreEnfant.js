import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {loadUser} from './actions/AuthActions';

import uuid from "uuid";

class ChambreEnfant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
            "https://st.hzcdn.com/simgs/2e317cad0cccb83c_8-7271/moderne-chambre.jpg",
          Name: "Chambre classique colorée",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/a9/1e/e4/a91ee48d5ebde3a1f57a72e496839a56.jpg",
          Name: "Chambre enfant style cocooning",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/ae/a0/e7/aea0e7300dbdbb5e935af99429bcfbdb.jpg",
          Name: "Chambre enfant scandinave",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://i.pinimg.com/564x/5c/dc/63/5cdc6399881ee1dee778d4cc43d7acc9.jpg",
          Name: "Chambre enfant bohéme",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/24/f8/ac/24f8ac5791e752cd27af00385b8d24d0.jpg",
          Name: "Chambre enfant forêt",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/b2/4e/7a/b24e7a447bd1d5cc41aeadf1a3706e39.jpg",
          Name: "Chambre enfant fille jungle",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
            Img:
            "http://blog.rhinov.fr/wp-content/uploads/2019/03/after1-3.jpg",
          Name: "Chambre enfant style cocooning",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/8a41206a02bb10de_8-3899/moderne-chambre-d-enfant.jpg",
          Name: "Chambre enfant moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/2e/57/fb/2e57fba2ea60cb78d51945ae11123a68.jpg",
          Name: "Chambre bébé bleu",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
          "https://i.pinimg.com/564x/84/16/0c/84160cf8e290fc34e893cb7d5e4597df.jpg",
        Name: "Chambre enfant théme moon",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/25/54/1a/25541ac61810363e3e7882b424a42cc0.jpg",
          Name: "Chambre enfant théme marin",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/a061d99408cf2a39_8-3258/moderne-chambre-d-enfant.jpg",
          Name: "Chambre enfant bleu",
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

export default connect(null,{loadUser})(ChambreEnfant);