import React from 'react';
import {connect} from 'react-redux';
import Architecte from './architecte';
import Acceuil from './Acceuil';
import Fournisseurs from './Fournisseurs';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Publicite from './Publicite';
 import ProductList from './ProductList';
 import setAuthToken from './utils/setAuthToken';
 import Sac from './sac';
import Login from './components/loginn';
// SET THE TOKEN INSIDE THE REQUEST'S HEADER
if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <div className="App">

    {/* <Login/> */}
{/* <Sac/> */}
      {/* <Navbar/> */}
      {/* <Architecte/> */}
       <Acceuil/>
      {/* <ProductList />  */}
      {/* <Fournisseurs/> */}
      {/* <Footer/> */}
      {/* <Publicite/> */}
    </div>
  );
}

export default App;
