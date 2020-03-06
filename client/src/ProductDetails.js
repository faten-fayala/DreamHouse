import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import {getproduct} from './actions/ProductAction'

export class ProductDetails extends Component {

    componentDidMount(){
        this.props.getproduct()
    }

    render() {
        return (
            <div>
                {this.props.products.filter(el=> el._id=== this.props.match.params.id).map(x=> <ProductItem product={x} />)}
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
