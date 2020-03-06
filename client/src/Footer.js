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
        À PROPOS
        </div>
        <div className="footer-description">
        PUBLICITÉ
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