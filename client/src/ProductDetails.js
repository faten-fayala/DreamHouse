import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import { getproduct } from "./actions/ProductAction";
import { loadUser } from "./actions/AuthActions";
import { Link } from "react-router-dom";
import { addPanier} from './actions/PanierActions'
export class ProductDetails extends Component {
  componentDidMount() {
    this.props.getproduct();
    this.props.loadUser()
  }

  render() {
    return (
      <div>
        {this.props.products
          .filter(el => el._id === this.props.match.params.id)
          .map(x => (
            <div className="product-details">
              <div>
                <img className="img-details" src={x.Name} />
              </div>

              
              <div className="product-descri">
              <p className="categorie-details"> {x.Categorie}</p>
                  <table>
                
                <tr>
                  <td className="style-details">Fournisseur</td>
                  <td>{x.Marque}</td>
                </tr>
                <tr>
                  <td className="style-details">Style</td>
                  <td>{x.Style}</td>
                </tr>
                <tr>
                  <td className="style-details">Prix</td>
                  <td>{x.Price} DT</td>
                </tr>
              </table>
                {/* <p className="categorie-details"> {x.Categorie}</p>
                <p className="marque-details">Vendu par: {x.Marque}</p>

                <p className="style-details">Style: {x.Style}</p>
                <p className="price-details">Prix: {x.Price} DT</p> */}
              </div>
              <button onClick={()=>this.props.addPanier(x)}>Panier </button>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.ProductReducer.product
  };
};
export default connect(mapStateToProps, {loadUser,addPanier, getproduct })(ProductDetails);
