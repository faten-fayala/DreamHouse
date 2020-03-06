import React, { Component } from "react";
// import axios from 'axios';
import { connect } from "react-redux";
import Image from "./dreamhouse.png";
import Creations from "./Creations";
// import { Link } from "react-router-dom";
import Logo from "./Logo-DreamHouse.png";
import { Redirect, Link } from "react-router-dom";

class Acceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [
        {
          classe: "moderne",
          imgURL:
            "https://st.hzcdn.com/simgs/7261dfa30d9364c0_8-6609/moderno-salon.jpg",
          clicked: false
        },
        {
          classe: "classique",
          imgURL:
            "https://st.hzcdn.com/simgs/3691efcc0ca74c89_8-0171/classique-chic-salon.jpg",
          clicked: false
        },
        {
          classe: "scandinave",
          imgURL:
            "https://www.heyho.fr/wp-content/uploads/2019/01/deco-scandinave.jpg",
          clicked: false
        },
        {
          classe: "campagne",
          imgURL:
            "https://www.joliplace.com/wp-content/uploads/2017/10/salle-a-manger-deco-interieur-style-campagne-chic-1024x768.jpg",
          clicked: false
        },
        {
          classe: "contemporain",
          imgURL:
            "https://static.cotemaison.fr/medias_10999/w_420,c_limit,g_north/v1467732984/un-salon-contemporain-de-style-industriel_5631935.jpg",
          clicked: false
        },
        {
          classe: "tounsi",
          imgURL:
            "https://www.ideomagazine.com/wp-content/uploads/2018/12/3-7.jpg",
          clicked: false
        },
        {
          classe: "vintage",
          imgURL:
            "https://sf1.viepratique.fr/wp-content/uploads/sites/8/2012/02/Salon3-550x410.jpg",
          clicked: false
        },
        {
          classe: "bistro",
          imgURL:
            "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/deco/pieces/cuisine/decoration-bistrot/70534804-1-fre-FR/La-deco-bistrot-s-invite-chez-vous.jpg",
          clicked: false
        },
        {
          classe: "boheme",
          imgURL:
            "https://i.pinimg.com/originals/10/ab/62/10ab627107fac4b4abb5a7bea5952038.jpg",
          clicked: false
        },
        {
          classe: "naturel",
          imgURL:
            "https://www.deco.fr/sites/default/files/styles/card_480x275/public/2019-12/d%C3%A9co-jungle-chic.jpg?itok=rMGg9dkY",
          clicked: false
        },
        {
          classe: "electrique",
          imgURL:
            "https://st.hzcdn.com/simgs/51c1f70f058bc291_8-6206/eclectique-salon.jpg",
          clicked: false
        },
        {
          classe: "industriel",
          imgURL:
            "https://st.hzcdn.com/simgs/b311b9680bbeaf03_8-3312/industriel-salon.jpg",
          clicked: false
        }
      ]
    };
  }
  render() {
    return (
      <div>
        
        <div>
          <div className="navbar">
            <div className="title">
              <Link to="/Acceuil">
                <img src={Image} className="img-dream-house" />
              </Link>
              
            </div>
            <div className="Header-menu">
  
            </div>
          </div>
        </div> 

        <div
          id="carouselExampleControls"
          class="carousel slide "
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-slider-img-1-N.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/h-1-slider-img-3-1.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://cdn.shopify.com/s/files/1/0291/8242/7276/files/slideshow-1-1.jpg?v=1577691282"
                alt="Third slide"
              />
            </div>
            <div>
              <img src={Logo} className="Logo-dream-house" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="mon-projet">
          <img
            className="img1"
            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/landing-img-2.png"
          />
          <img
            className="img2"
            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/landing-img-1.png"
          />
          <img
            className="img3"
            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/landing-img-3.png"
          />
          <img
            className="img4"
            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/landing-img-5.png"
          />
          <img
            className="img5"
            src="https://all4home.qodeinteractive.com/wp-content/uploads/2017/03/landing-img3.png"
          />
          <span className="description-projet">
            Offrez-vous les conseils d’un décorateur d’intérieur
          </span>
          <hr className="line" />
          <Link to="/projectcreation" >
          <button className="button-mon-projet">DÉMARRER MON PROJET</button>
          </Link>
        </div>

        <div className="nos-travaux">
          <div className="border">
            <div className="nos-creations">
              <Link to="/Creations">
                <span className="title-nos-travaux">NOS CREATIONS</span>
              </Link>
            </div>
          </div>
          <div className="border">
            <div className="nos-marques">
              <Link to="/Fournisseurs">
                <span className="title-nos-travaux">NOS MARQUES</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="choisissez-votre-style wrappers">
          <h2 className="title-choisissez-votre-style">
            <p>
              <strong className="choisissez">Choisissez</strong>
              <strong className="votre">votre</strong>
              <strong className="STYLE">STYLE</strong>
            </p>
          </h2>
          <div className="scroll_to_top">
            <a href="#top">
             
              <svg className="img-scroll-top" version="1.1" id="IconsRepoEditor" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 346.078 346.078" stroke="#000000" stroke-width="0"><g id="IconsRepo_bgCarrier"></g> <path  d="M0,173.111C0,77.695,77.629,0.072,173.039,0.072c95.416,0,173.039,77.623,173.039,173.039 c0,93.405-74.407,169.722-167.06,172.89l0.376-193.565l33.588,33.588l8.437-8.437l-47.962-47.962l-48.797,48.797l8.437,8.437 l34.369-34.363l-0.382,193.512C74.425,342.844,0,266.528,0,173.111z"></path> </svg>
              </a>
          </div>
          {this.state.imgs.map(el =>  <Link to={`/style/${el.classe}`}  >
            <div>
            <img className =  {`style ${el.classe}`} src={el.imgURL}/>
   
    {/* <span className={`${el.classe} texton`} >{el.classe}</span> */}

   </div>
          </Link>)}
          {/* {this.state.imgs.map(el =>  <img 
          //   onLoad={e => e.target.className = `style ${el.classe}`}
          //   onClick={(e) => {this.setState({
          //     imgs: this.state.imgs.map(x => x.classe === el.classe ? {...x, clicked: !x.clicked} : {...x, clicked: 'abc'})
          //   })
          //   let selectedIndex = Array.from(e.target.classList).includes("selected")
          //   selectedIndex && () => this.setState({navigate: true})

          //   // console.log(e.target.classList)
          // }
          // }
          //   className={el.clicked === 'abc' ? `style ${el.classe}` : `style ${el.classe} selected`}
          //   src={el.imgURL}
          // />
          // this.state.navigate && <Link to={`/test/${el.classe}`}>GO</Link>
          )
        } */}
        </div>
      
      </div>
    );
  }
}

export default Acceuil;
