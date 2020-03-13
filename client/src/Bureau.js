import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";
import {loadUser} from './actions/AuthActions';

class Bureau extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
            "https://i.pinimg.com/564x/ac/e1/77/ace177129c161a99caa0f797ad49e1bb.jpg",
          Name: "Bureau scandinave",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://i.pinimg.com/564x/1a/4b/3d/1a4b3dfdb8bf4d99f3ab471c0bf4de7f.jpg",
          Name: "Bureau décoration végétal",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://i.pinimg.com/564x/b7/f7/45/b7f7459b656671955a792ed3e70545df.jpg",
          Name: "Bureau scandinave ",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
            "https://i.pinimg.com/564x/1f/e0/64/1fe0646c38251ae8888ed826d9a270df.jpg",
          Name: "Bureau industriel",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/b7811d670b3f8e25_8-5716/contemporain-bureau-a-domicile.jpg",
          Name: "Bureau bois et blanc",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/b88115d8068d30ef_8-7692/contemporain-bureau-a-domicile.jpg",
          Name: "Bureau moderne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
            Img:
            "https://www.ikea.com/images/6f/1b/6f1bb8f563fd7865ecf655319c0aaef3.jpg?f=s",
          Name: "Bureau scandinave",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/0e8167870ae8c793_8-0521/classique-chic-bureau-a-domicile.jpg",
          Name: "Bureau classique",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
            "https://st.hzcdn.com/simgs/04a197660d9f4d20_8-9627/contemporain-bureau-a-domicile.jpg",
          Name: "Bureau moderne",
          Realizedby: "Par BEN ABBES Aroua"
        }, 
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

export default connect(null,{loadUser})(Bureau);