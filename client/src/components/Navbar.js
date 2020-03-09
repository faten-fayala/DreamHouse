import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../actions/AuthActions'
import {connect} from 'react-redux'
import Avatars from './Avatars'
const Navbar = (props) => {

    const userConnected  =()=>{
        console.log(props)
    //  let logo=props.auth.user.firstname.slice(0,1)+props.auth.user.lastname.slice(0,1)
        return(
            <ul className="row d-flex w-40">
                <li className="col d-flex w-40">
                <Avatars Name={'TB'} />
                    
                     { props.auth.user && props.auth.user.firstname + ' ' + props.auth.user.lastname}

                </li>
                
                {/* <li className="col">
             <Link to="/" >HOME</Link>
             </li> */}
             <li className="col">
             <Link to="/projectcreation" >Project</Link>
             </li>
             <li className="col">
             <Link to="/MesDemandes" >Mes Demandes </Link>
             </li>
                <a  onClick={props.logout} href="#!"> 
                <i  className="fas fa-sign-out-alt"></i>
                LOGOUT
                </a>
            </ul>
        )
    }
    
    
    const Guest = () => {
        return (
            <ul className="row d-flex w-25">
            <li className="col">
             <Link to="/login" >Login </Link>
             </li>
             <li className="col">
             <Link to="/register" >Register </Link>
             </li>
             </ul>
        )
    }
    
 
    

    return (
        <div className="navbar">
             <h1>DReaMHOuSE</h1>
             {
                (localStorage.token)? userConnected() : Guest()
             }
        </div>
    )
}
const mapStateToProps =state =>{
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps,{logout})(Navbar)




// class Navbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { }
//     }
//     componentDidMount() {
//         window.addEventListener('scroll', ()=>{
//             const isTop = window.scrollY < 300
//             if(isTop !== true){
//                 this.setState({scrolled: true})
//             }else{
//                 this.setState({scrolled: false})
//             }
//         })
//     }
//     render() {
//         return ( 
//             <div>
                
//                 {this.state.scrolled ? (<h1>11111</h1>) : ( <div className="navbar">
//             <div className="title">
             
//                 <img src={Image} className="img-dream-house" />
//             </div>
//             <div className="Header-menu">
    
//             </div>
//           </div>) }

//             </div>
//          );
//     }
// }
 
// export default Navbar;