import React, { Children } from 'react';
import Image from '../dreamhouse.png';
import {Link , withRouter} from 'react-router-dom';
import {logout} from '../actions/AuthActions'
import {connect} from 'react-redux'
import Avatars from './Avatars'
import NavbarDrawer from './NavbarDrawer'
import LockRoundedIcon from '@material-ui/icons/LockRounded';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
class Navbar extends React.Component {
constructor(props){
  super(props)
  this.state={
    
  }
}
     
componentWillReceiveProps(nextProps) {
  this.setState({username: nextProps.auth.user})
}
  
  componentDidMount() {
            window.addEventListener('scroll', ()=>{
                const isTop = window.scrollY < 100
                if(isTop !== true){
                    this.setState({scrolled: true})
                }else{
                    this.setState({scrolled: false})
                }
            })
        }
  render(){
    console.log(this.props.location.pathname)
 
   
    const Guest = () => {
      return (
        <div>
          <div className="login">
           
                        <Link  className="login" to="/login"> <LockRoundedIcon/>   LOGIN </Link>
                        
          </div>
        
        {/* <li className="col">
            <Link to="/register">Register </Link>
          </li> */}
    </div>
      );
    };
    

    const userConnected  =()=>{
      //  let logo=this.state.username.firstname.slice(0,1)+this.state.username.lastname.slice(0,1)
          return(
            <div >
              <ul className="profiler">
            
            {/* <FavoriteIcon/>
            <ShoppingCartIcon/> */}

            <NavbarDrawer auth={this.props.auth}  />
          </ul>
        </div>
      );
    };

    return (
    <div className={(this.props.location.pathname === "/register" || this.props.location.pathname === "/login" || this.props.location.pathname === "/Admin" ) ? "hidden" : this.state.scrolled? "navbar-dreamhouse-scrolled": "navbar-dreamhouse"}>
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
              <Link className="dropdownlink" to={`/Creations/cuisine`}>
                <span >Cuisine</span>
                </Link>
                <Link className="dropdownlink" to={`/Creations/salon`}>
                <span >Salon</span>
                </Link>
                <Link className="dropdownlink"   to={`/Creations/salle de bains`}>
                <span >Salle de bains</span>
                </Link>
              </div>
              <div>
              <Link className="dropdownlink" to={`/Creations/chambre`}>
                <span >Chambre</span>
                </Link>
                <Link className="dropdownlink" to={`/Creations/entrée`}>
                <span >Entrée</span>
                </Link>
                <Link className="dropdownlink" to={`/Creations/chambre enfant`}>
                <span >Chambre enfant</span>
                </Link>
              </div>
              <div>
              <Link className="dropdownlink" to={`/Creations/jardin`}>
                <span >Jardin</span>
                </Link>
                <Link className="dropdownlink" to={`/Creations/salle a manger`}>
                <span >Salle à manger</span>
                </Link>
                <Link className="dropdownlink" to={`/Creations/Bureau`}>
                <span >Bureau</span>
                </Link>
              </div>
            </div> 
          </div>
        </div>

        <span className="ligne-item" />
        <div className="pros">
          <div className="pros-navbar">TROUVER DES PROS</div>
          <div class="dropdown-content pros">
          <Link className="dropdownlink" to={`/Architecte`}>
            <span>Architectes d'intérieur</span>
            </Link>
            <span>Paysagistes</span>
            <span>Cuisinistes et concepteurs de cuisine</span>
            <span>Carrelage et revêtements de sol</span>
            <span>Fenêtres, portes, volets et stores</span>
          </div>
        </div>

        <span className="ligne-item" />
        <Link className="dropdownlink" to="/ProductList">
        <div className="produits-navbar dropdownlink">PRODUITS</div>
        </Link>
        <span className="ligne-item" />
        {/* <Link to="/Fournisseurs"> */}

        <div className="marques">
        <div className="produits-navbar">MARQUES</div>
        <div class="dropdown-content pros">
          <Link className="dropdownlink" to={`/product/meublatex`}>
            <span>Meublatex</span>
            </Link>
            <Link className="dropdownlink" to={`/product/El Mezghani`}>
            <span>Mezghani</span>
            </Link>
            <Link className="dropdownlink" to={`/product/Zen Home`}>
            <span>Zen Home</span></Link>
            <Link className="dropdownlink" to={`/product/Polysiége`}>
            <span>Polysiége</span></Link>
            <Link className="dropdownlink" to={`/product/Conforta`}>
            <span>Conforta</span></Link>
            <Link className="dropdownlink" to={`/product/Sotufab`}>
            <span>Sotufab</span></Link>
          </div>
        </div>



        {/* </Link> */}
        <span className="ligne-item" />
        <div className="blog-navbar">BLOG</div>
      </div>
      {localStorage.token ? userConnected() : Guest()}
    </div>
  );}
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps, { logout })(withRouter(Navbar));

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
