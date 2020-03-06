import React from 'react'
import { connect } from 'react-redux'
import {getproduct} from './actions/ProductAction'
import ProductItem from './ProductItem'
class Style extends React.Component{
  componentDidMount(){
      this.props.getproduct()
  }
    render(){
       return(
        <div className="products">
            
            {this.props.products.filter(el=> el.Style.toLowerCase().includes(this.props.match.params.style.toLowerCase().trim())).map(x=>  <ProductItem product={x}/>
                )}
        </div>
    ) }}
const mapStateToProps = state=>{
    return{
        products: state.ProductReducer.product
    }
}
export default connect(mapStateToProps,{getproduct})(Style)