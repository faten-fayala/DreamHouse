import React, { Component } from 'react'
import ProductItem from './ProductItem'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getproduct} from './actions/ProductAction';
import {loadUser} from './actions/AuthActions';
import { addPanier} from './actions/PanierActions'

import './product.css';
export class Marque extends Component {
    componentDidMount(){
        this.props.getproduct()
        this.props.loadUser()
    }

    render() {
        return (
    //         <div className="products">
    //             {this.props.products.filter(el=> el.Marque.toLowerCase().includes(this.props.match.params.marque.toLowerCase().trim())).map(x=> 
    //             <div>
                
    //             <div className="product-description">
    //             <Link to={`/product/Marque/${x._id}`}>
    //   <img className="img-product" src={x.Name} /></Link>
    //   {/* <p className="marque-product">Marque: {x.Marque}</p> */}
    //   <p className="marque-product"> {x.Categorie}</p>
    //   {/* <p className="marque-product">Style: {x.Style}</p> */}
    //   <p className="price-product">{x.Price} DT</p>
    //   </div>
    //             </div>
    //             )}
    //         </div>

<div className="products"> 
{this.props.products.filter(el=> el.Marque.toLowerCase().includes(this.props.match.params.marque.toLowerCase().trim())).map(x=>
    <div class="product-card">
   <div class="product-tumb">
   <Link to={`/product/Marque/${x._id}`}>
    <img src={x.Name} alt=""/></Link> 
</div>
<div class="product-detail">
    <span class="product-catagory">{x.Marque}</span>
    <h4 ><a className="product-lien" href="">{x.Categorie}</a></h4>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}
    <div class="product-bottom-details">
        <div class="product-price">{x.Price} DT</div>
        <div class="product-links">
            <a href="#"><i class="fa fa-heart"></i></a>
            <a href="#"><i onClick={()=>this.props.addPanier(x)} class="fa fa-shopping-cart"></i></a>
        </div>
    </div>
</div>
</div>)}
</div>
	

        )
    }
}
const mapStateToProps = state=>{
    return{
        products:state.ProductReducer.product
    }
}
export default connect(mapStateToProps,{addPanier,getproduct,loadUser})(Marque)
