import React from 'react';
import {connect} from 'react-redux';
import Architecte from './architecte';
import Acceuil from './Acceuil';
import Fournisseurs from './Fournisseurs';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
 import ProductList from './ProductList';
 import setAuthToken from './utils/setAuthToken'

// SET THE TOKEN INSIDE THE REQUEST'S HEADER
if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {
  return (
    <div className="App">
      <span>hi foufou</span>
      {/* <Navbar/> */}
      {/* <Architecte/> */}
      <Acceuil/>
      <ProductList /> 
      {/* <Fournisseurs/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
