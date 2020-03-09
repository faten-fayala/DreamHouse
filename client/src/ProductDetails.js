import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import {getproduct} from './actions/ProductAction'
import {  Link } from 'react-router-dom'

export class ProductDetails extends Component {

    componentDidMount(){
        this.props.getproduct()
    }

    render() {
        return (
            <div>
                {this.props.products.filter(el=> el._id=== this.props.match.params.id).map(x=>
               
                <div className="product-details">
      <img className="img-details" src={x.Name} />
      <p className="marque-details">Marque: {x.Marque}</p>
      <p className="marque-details"> {x.Categorie}</p>
      <p className="marque-details">Style: {x.Style}</p>
      <p className="price-details">{x.Price} DT</p>
      </div>


                 )}
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        products:state.ProductReducer.product
    }
}
export default connect(mapStateToProps,{getproduct})(ProductDetails)
