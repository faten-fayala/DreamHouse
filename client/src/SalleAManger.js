import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";
import {loadUser} from './actions/AuthActions';

class SalleAManger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
            "https://st.hzcdn.com/simgs/77c1dc7504d876a8_8-8166/contemporain-salle-a-manger.jpg",
          Name: "Salle a manger contemporain",
          Realizedby: "Par AMOURI Zied"
        },
        {Img:
          "https://i.pinimg.com/564x/e1/3a/7f/e13a7f81a9bbba1405e8cf49f7392f74.jpg",
        Name: "Salle a manger moderne",
         
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/4d/23/ca/4d23ca04dc933b088f486276697fea32.jpg",
          Name: "Salle a manger scandinave ",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://i.pinimg.com/564x/bc/62/96/bc62962a2318d4cc0da1248e49d477e0.jpg",
          Name: "Salle a manger velours vert",
          Realizedby: "Par AMOURI Zied"
        },
        { Img:
          "https://st.hzcdn.com/simgs/132177480106eecb_8-3839/moderne-salle-a-manger.jpg",
        Name: "Salle a manger moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/dc/43/95/dc4395496c233b6091d203345d422051.jpg",
          Name: "Salle a manger moderne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/c5515cde0593a821_8-5760/contemporain-salle-a-manger.jpg",
          Name: "Salle a manger contemporain",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/13/2e/d0/132ed0b0b0f9e100a3ae54ffd99792af.jpg",
          Name: "Salle a manger montagne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/dc/5c/6d/dc5c6d2f0d5ccac1dfbb32dd5a9c25e8.jpg",
          Name: "Salle a manger rustique",
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

export default connect(null,{loadUser})(SalleAManger);
