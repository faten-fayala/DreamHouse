import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPanier, clearPanier, deleteItem,submitOrder } from '../actions/PanierActions'
import { loadUser} from '../actions/AuthActions'

class Panier extends Component {
    constructor(props) {
        super(props);
        
    }
    
// handlePanier = product =>{
//     const existingProduct = this.props.panier.filter(el=> el._id === product._id)
//     if (existingProduct.length>0){
//         const withoutExistingProduct = this.props.panier.filter(el=> el._id !== product._id)
//         const updatedUntisProduct = {
//             ...existingProduct[0],
//             units : existingProduct[0].units+ product.units
//         };
        
//     }
// }
componentDidMount() {
    this.props.getPanier()
    this.props.loadUser()
    
}

    componentWillReceiveProps(nextProps){
        console.log(nextProps.panier)
        // action setItem to localstorage
    }
    render() {
        console.log(this.props)
        return (
            <div style={{paddingTop: '120px'}}>
                <button onClick={() => {
                this.props.clearPanier()
                this.props.getPanier()
                }}>Clear Cart</button>
                        <button onClick={()=>{this.props.submitOrder(["tarek","aaaa"])
                        this.props.getPanier()
                        }}>SUBMIT</button>
                
                <div>
                    {this.props.panier.length !== 0 ? this.props.panier.map(el=> (
                        <div>
                        <h1>{el.Categorie} </h1>
                        <button onClick={() => this.props.deleteItem(el._id)}>delete</button>
                        </div>
                        )
                        ) : <h1>Your cart is empty</h1>}
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        panier:state.PanierReducer
    }
}


export default connect(mapStateToProps, {loadUser, getPanier, clearPanier, deleteItem,submitOrder })(Panier)
