import React, { Component } from 'react'
import ProductItem from './ProductItem'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getproduct} from './actions/ProductAction'
export class Marque extends Component {
    componentDidMount(){
        this.props.getproduct()
    }

    render() {
        return (
            <div className="products">
                {this.props.products.filter(el=> el.Marque.toLowerCase().includes(this.props.match.params.marque.toLowerCase().trim())).map(x=> 
                <div>
                
                <div className="product-description">
                <Link to={`/product/Marque/${x._id}`}>
      <img className="img-product" src={x.Name} /></Link>
      {/* <p className="marque-product">Marque: {x.Marque}</p> */}
      <p className="marque-product"> {x.Categorie}</p>
      {/* <p className="marque-product">Style: {x.Style}</p> */}
      <p className="price-product">{x.Price} DT</p>
      </div>
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
export default connect(mapStateToProps,{getproduct})(Marque)
