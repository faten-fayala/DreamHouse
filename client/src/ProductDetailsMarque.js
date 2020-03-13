import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import {getproduct} from './actions/ProductAction'
import {  Link } from 'react-router-dom'
import {loadUser} from './actions/AuthActions';

export class ProductDetailsMarque extends Component {

    componentDidMount(){
        this.props.getproduct()
        this.props.loadUser()
    }

    render() {
        return (
            <div>

                {this.props.products.filter(el=> el._id=== this.props.match.params.id).map(x=>
                
                <div className="product-description">
      <img className="img-product" src={x.Name} />
      {/* <p className="marque-product">Marque: {x.Marque}</p> */}
      <p className="marque-product"> {x.Categorie}</p>
      {/* <p className="marque-product">Style: {x.Style}</p> */}
      <p className="price-product">{x.Price} DT</p>
      </div>   )}
      
            </div>
      )
    }
}
const mapStateToProps = state=>{
    return{
        products:state.ProductReducer.product
    }
}
export default connect(mapStateToProps,{getproduct,loadUser})(ProductDetailsMarque)
