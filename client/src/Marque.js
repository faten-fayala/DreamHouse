import React, { Component } from 'react'
import ProductItem from './ProductItem'
import {connect} from 'react-redux'
import {getproduct} from './actions/ProductAction'
export class Marque extends Component {

    componentDidMount(){
        this.props.getproduct()
    }

    render() {
        return (
            <div>
                {this.props.products.filter(el=> el.Marque.toLowerCase().includes(this.props.match.params.marque.toLowerCase().trim())).map(x=> <ProductItem product={x} />)}
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
