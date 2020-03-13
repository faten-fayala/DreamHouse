import React from 'react'
import { connect } from 'react-redux'
import {getproduct} from './actions/ProductAction'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
import { addPanier} from './actions/PanierActions'
import { loadUser} from './actions/AuthActions'

class Style extends React.Component{
  componentDidMount(){
      this.props.getproduct()
      this.props.loadUser()
  }
    render(){
       return(
        <div className="products">
            
            {/* {this.props.products.filter(el=> el.Style.toLowerCase().includes(this.props.match.params.style.toLowerCase().trim())).map(x=>  
            <div className="product-description">
                <Link to={`/product/Style/${x._id}`}>
                
      <img className="img-product" src={x.Name} /></Link>
     
      <p className="marque-product"> {x.Categorie}</p>
      
      <p className="price-product">{x.Price} DT</p>
      </div>


                 )} */}
               {this.props.products.filter(el=> el.Style.toLowerCase().includes(this.props.match.params.style.toLowerCase().trim())).map(x=>  
    <div class="product-card">
   <div class="product-tumb">
   <Link to={`/product/Style/${x._id}`}>
    <img src={x.Name} alt=""/> </Link>
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
    ) }}
const mapStateToProps = state=>{
    return{
        products: state.ProductReducer.product
    }
}
export default connect(mapStateToProps,{loadUser,addPanier,getproduct})(Style)