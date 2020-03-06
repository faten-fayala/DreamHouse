import React, { Component } from "react";
import Image from "./dreamhouse.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "uuid";

class Salon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        {
          Img:
          "https://s2.best-wallpaper.net/wallpaper/3840x2160/1808/Villa-living-room-sofa-sea_3840x2160.jpg",
          Name: "Salon bord de mer",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://pic.pimg.tw/urhouseurs/1337744692-3567043248.jpg",
          Name: "Salon Contemporain",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://pic.pimg.tw/house108service/1317177887-592670707.jpg",
          Name: "Salon rétro moderne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
          "https://previews.123rf.com/images/zhudifeng/zhudifeng1507/zhudifeng150700133/41952343-int%C3%A9rieur-luxueux-salon.jpg",
          Name: "Salon classique ",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://i.pinimg.com/originals/b0/6c/36/b06c36f62d6cecd25882d3e1b2f99df1.jpg",
          Name: "Salon moderne",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://i.pinimg.com/564x/36/1e/49/361e498d10ea6008f015bc4edc37fd1b.jpg",
          Name: "Salon bistro",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
          "https://hdmag.net/guide/wp-content/uploads/2018/02/Edwards-meuble-luxe-design-1-1.jpg",
          Name: "Salon moderne chic",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://i.pinimg.com/564x/ee/b1/9a/eeb19ab9a9fd01d915c51804550f3210.jpg",
          Name: "Salon moderne bleu et beige",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://i.pinimg.com/564x/6a/b7/45/6ab745db588523f3a1fca1f5703f3f5c.jpg",
          Name: "Salon marocaine moderne",
          Realizedby: "Par BEN ABBES Aroua"
        },
        {
          Img:
          "https://i.pinimg.com/564x/7d/a9/50/7da950a0ba1791a2cafe473c861c8e38.jpg",
          Name: "Salon bistro",
          Realizedby: "Par AMOURI Zied"
        },
        {
          Img:
          "https://i.pinimg.com/originals/37/61/36/376136a9296f3420cdec98e79890f9c6.jpg",
          Name: "Salon moderne ",
          Realizedby: "Par AYADI Faten"
        },
        {
          Img:
          "https://st.hzcdn.com/simgs/c811fc1b0ed27ea3_4-7836/home-design.jpg",
          Name: "Salon rétro",
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

export default Salon;