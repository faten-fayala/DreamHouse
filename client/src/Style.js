import React from 'react'
import { connect } from 'react-redux'
import {getproduct} from './actions/ProductAction'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
class Style extends React.Component{
  componentDidMount(){
      this.props.getproduct()
  }
    render(){
       return(
        <div className="products">
            
            {this.props.products.filter(el=> el.Style.toLowerCase().includes(this.props.match.params.style.toLowerCase().trim())).map(x=>  
            <div className="product-description">
                <Link to={`/product/Style/${x._id}`}>
                
      <img className="img-product" src={x.Name} /></Link>
      {/* <p className="marque-product">Marque: {x.Marque}</p> */}
      <p className="marque-product"> {x.Categorie}</p>
      {/* <p className="marque-product">Style: {x.Style}</p> */}
      <p className="price-product">{x.Price} DT</p>
      </div>


                 )}
                
        </div>
    ) }}
const mapStateToProps = state=>{
    return{
        products: state.ProductReducer.product
    }
}
export default connect(mapStateToProps,{getproduct})(Style)