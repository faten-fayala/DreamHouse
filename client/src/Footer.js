// import Footer from 'rc-footer';
// import 'rc-footer/assets/index.css';
// import 'rc-footer/assets/index.less';
// // import 'rc-footer/assets/index.css'; 
// // import 'rc-footer/asssets/index.less';
// import { render } from 'react-dom';

// render(
//   <Footer
//     columns={[
//       {
//         icon: (
//           <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
//         ),
//         title: '语雀',
//         url: 'https://yuque.com',
//         description: '知识创作与分享工具',
//         openExternal: true,
//       },
//     ]}
//     bottom="Made with ❤️ by AFX"
//   />,
//   mountNode,
// );


import React, { Component } from "react";
import Image from "./dreamhouse.png";
import Publicite from './Publicite';
import { connect } from "react-redux";
import { Link , withRouter} from "react-router-dom";
import "./footer.css";
import Fb from "./facebook.png";
import Insta from "./instagram.png";
import Youtube from "./youtube.png";


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        
      ]
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({username: nextProps.auth.user})
  }
  render() {
    return (
    <div className={(this.props.location.pathname === "/register" || this.props.location.pathname === "/login" || this.props.location.pathname === "/Admin" ) ? "hidden" :"footer"}>
      
        <div className="footer-items">
        <div className="footer-logo" >
       <a href="/" ><img src={Image} className="img-footer" /></a>
        </div>
        <div className="footer-description">
          <div className="footer-title">
          À PROPOS
          </div>
      <div className="footer-description-items">
        <span>Qui sommes-nous ?</span>
      </div>
      <div className="footer-description-items">
      <a className="footerlink" href="/Fournisseurs">
        <span className="footer-description-items">Nos Marques</span>
        </a>
      </div>
      <div className="footer-description-items">
      <a className="footerlink" href="/ProductList">
      <span className="footer-description-items">Nos Produits</span>
        </a>
      </div>
        
        </div>
        <div className="footer-description ligne">
        
        </div>
        <div className="footer-description">
        
        <div className="footer-title-publicite">
         <a className="footerlink" href="/Publicite">
         <span className="footer-description-items-publicite">Publicité</span>
        </a>
        </div>
        <div className="footer-description-items">
        <div className="footer-contacts">
         <span className="service-client">SERVICE CLIENT</span> 
         <span>(+216) 40 149 044</span>
         <span>Du lundi au vendredi</span>
         <span>de 9h à 18h30</span>
          </div>
      </div>
        </div>
        <div className="footer-description ligne">
        
        </div>
        <div className="footer-description connexion">
        {/* RESTONS CONNECTÉS */}
        <div className="nous-suivre">
         NOUS SUIVRE 
        </div>
        <div className="logo-connexion" >
          <a href="https://www.facebook.com/">
        <img src={Fb} className="logo-connexion-items" /></a>
        <a href="https://www.instagram.com/">
        <img src={Insta} className="logo-connexion-items" /></a>
        <a href="https://www.youtube.com/">
        <img src={Youtube} className="logo-connexion-items" /></a>
        
       
        </div></div>
        <div>
      
        </div>
        </div>
        
     </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps)(withRouter(Footer));


  {/* <div className="title">
            <Link to="/Acceuil">
            <img src={Image} className="img-dream-house" />
            </Link>
            
          </div> */}