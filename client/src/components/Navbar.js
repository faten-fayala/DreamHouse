import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../actions/AuthActions'
import {connect} from 'react-redux'
import Avatars from './Avatars'
const Navbar = (props) => {

    const userConnected  =()=>{
        console.log(props)
    //  let logo=props.auth.user.firstname.slice(0,1)+props.auth.user.lastname.slice(0,1)
        return(
            <ul className="row d-flex w-40">
                <li className="col d-flex w-40">
                <Avatars Name={'TB'} />
                    
                     { props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}


          {/* <li className="col">
             <Link to="/" >HOME</Link>
             </li> */}
          <li className="col">
            <Link to="/projectcreation">Project</Link>
          </li>
          <li className="col">
            <Link to="/MesDemandes">Mes Demandes </Link>
          </li>
          <a onClick={props.logout} href="#!">
            <i className="fas fa-sign-out-alt"></i>
            LOGOUT
          </a>
        </ul>
      </div>
    );
  };

  const Guest = () => {
    return (
      <ul className="row d-flex w-25">
        <li className="col login">
          <Link to="/login">Login </Link>
        </li>
        <li className="col">
          <Link to="/register">Register </Link>
        </li>
      </ul>
    );
  };

  return (
    <div className="navbar-dreamhouse">
      <div className="navbar-left">
        <div className="title">
          <Link to="/">
            <img src={Image} className="img-dream-house" />
          </Link>
        </div>
        <div className="photos">
          <div className="photos-navbar">PHOTOS</div>
          <div class="dropdown-content ">
            <div className="inspiration">
              <div>
              <Link to={`/Creations/cuisine`}>
                <span>Cuisine</span>
                </Link>
                <Link to={`/Creation/salon`}>
                <span>Salon</span>
                </Link>
                <Link to={`/Creations/salle de bains`}>
                <span>Salle de bains</span>
                </Link>
              </div>
              <div>
              <Link to={`/Creations/chambre`}>
                <span>Chambre</span>
                </Link>
                <Link to={`/Creations/entrée`}>
                <span>Entrée</span>
                </Link>
                <Link to={`/Creations/chambre enfant`}>
                <span>Chambre enfant</span>
                </Link>
              </div>
              <div>
              <Link to={`/Creations/jardin`}>
                <span>Jardin</span>
                </Link>
                <Link to={`/Creations/salle a manger`}>
                <span>Salle à manger</span>
                </Link>
                <Link to={`/Creations/Bureau`}>
                <span>Bureau</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <span className="ligne-item" />
        <div className="pros">
          <div className="pros-navbar">TROUVER DES PROS</div>
          <div class="dropdown-content pros">
          <Link to={`/Architecte`}>
            <span>Architectes d'intérieur</span>
            </Link>
            <span>Paysagistes</span>
            <span>Cuisinistes et concepteurs de cuisine</span>
            <span>Carrelage et revêtements de sol</span>
            <span>Fenêtres, portes, volets et stores</span>
          </div>
        </div>

        <span className="ligne-item" />
        <Link to="/ProductList">
        <div className="produits-navbar">PRODUITS</div>
        </Link>
        <span className="ligne-item" />
        {/* <Link to="/Fournisseurs"> */}

        <div className="marques">
        <div className="produits-navbar">MARQUES</div>
        <div class="dropdown-content pros">
          <Link to={`/product/meublatex`}>
            <span>Meublatex</span>
            </Link>
            <Link to={`/product/El Mezghani`}>
            <span>Mezghani</span>
            </Link>
            <Link to={`/product/Zen Home`}>
            <span>Zen Home</span></Link>
            <Link to={`/product/Polysiége`}>
            <span>Polysiége</span></Link>
            <Link to={`/product/Conforta`}>
            <span>Conforta</span></Link>
            <Link to={`/product/Sotufab`}>
            <span>Sotufab</span></Link>
          </div>
        </div>



        {/* </Link> */}
        <span className="ligne-item" />
        <div className="blog-navbar">BLOG</div>
      </div>
      {localStorage.token ? userConnected() : Guest()}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps, { logout })(Navbar);

// class Navbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { }
//     }
//     componentDidMount() {
//         window.addEventListener('scroll', ()=>{
//             const isTop = window.scrollY < 300
//             if(isTop !== true){
//                 this.setState({scrolled: true})
//             }else{
//                 this.setState({scrolled: false})
//             }
//         })
//     }
//     render() {
//         return (
//             <div>

//                 {this.state.scrolled ? (<h1>11111</h1>) : ( <div className="navbar">
//             <div className="title">

//                 <img src={Image} className="img-dream-house" />
//             </div>
//             <div className="Header-menu">

//             </div>
//           </div>) }

//             </div>
//          );
//     }
// }

// export default Navbar;
