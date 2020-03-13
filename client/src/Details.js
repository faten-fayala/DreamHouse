
import { connect } from "react-redux";
import {loadUser} from './actions/AuthActions';
import {getproduct} from './actions/ProductAction'

import { Link } from "react-router-dom";
import './product.css';
import React, { Component } from 'react'

export class Details extends Component {

    componentDidMount(){
        this.props.getproduct()
        this.props.loadUser()
    }
    render() {
        return (
            <div className="Top">
                { this.props.products.filter(el=> el._id=== this.props.match.params.id).map(x=>
    <div class="product-card">
		
		<div class="product-tumb">
			<img src={x.Name} alt=""/>
		</div>
		<div class="product-detail">
			<span class="product-catagory">{x.Marque}</span>
			<h4 ><a className="product-lien" href="">{x.Categorie}</a></h4>
			{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
			<div class="product-bottom-details">
				<div class="product-price">{x.Price} DT</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
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

export default connect(mapStateToProps,{loadUser,getproduct})(Details);
