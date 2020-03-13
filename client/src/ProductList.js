import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import { getproduct } from "./actions/ProductAction";
import { Link } from "react-router-dom";
import {loadUser} from './actions/AuthActions';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
      this.props.getproduct()
      this.props.loadUser()
  }
  render() {
    return (<div>
      <div  className="product_list_page">
        {/* <h1 className="title">Products</h1> */}
        <div className="products">
          {this.props.products.map(el => (
          
          <ProductItem product={el} />
          
        ))}
        </div>
        
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.ProductReducer.product
  };
};
export default connect(mapStateToProps, { getproduct , loadUser })(ProductList);