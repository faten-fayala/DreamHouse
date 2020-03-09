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
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Piece: [
        
      ]
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-items">
        <div className="footer-logo" >
        <img src={Image} className="img-footer" />
        </div>
        <div className="footer-description">
          <div className="footer-title">
          À PROPOS
          </div>
      <div className="footer-description-items">
        <span>Qui sommes-nous ?</span>
      </div>
      <div className="footer-description-items">
      <Link to="/Fournisseurs">
        <span className="footer-description-items">Nos Marques</span>
        </Link>
      </div>
      <div className="footer-description-items">
      <Link to="/ProductList">
        <span>Nos Produits</span>
        </Link>
      </div>
        
        </div>
        <div className="footer-description ligne">
        
        </div>
        <div className="footer-description">
        
        <div className="footer-title-publicite">
         <Link to="/Publicite">
        PUBLICITÉ
        </Link>
        </div>
        <div className="footer-description-items">
        <div className="footer-contacts">
         <span className="service-client">SERVICE CLIENT</span> 
         <span>(216) 40 149 044</span>
         <span>Du lundi au vendredi</span>
         <span>de 9h à 18h30</span>
          </div>
      </div>
        </div>
        <div className="footer-description ligne">
        
        </div>
        <div className="footer-description">
        {/* RESTONS CONNECTÉS */}
        NOUS SUIVRE
        </div>
        <div>
      
        </div>
        </div>
        
     </div>
    );
  }
}

export default Footer;


  {/* <div className="title">
            <Link to="/Acceuil">
            <img src={Image} className="img-dream-house" />
            </Link>
            
          </div> */}