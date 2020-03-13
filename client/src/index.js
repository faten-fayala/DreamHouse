import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Creations from './Creations';
import Fournisseurs from './Fournisseurs';
import ProductList from './ProductList';
import ProductItem from './ProductItem';

import Acceuil from './Acceuil';
import Style from './Style';
import Cuisine from './Cuisine';
import Chambre from './Chambre';
import ChambreEnfant from './ChambreEnfant';
import Entree from './Entree';
import Salledebain from './Salledebain';
import Salon from './Salon';
import SalleAManger from './SalleAManger';
import Jardin from './Jardin';
import Bureau from './Bureau';
import store from './store';
import Publicite from './Publicite';
import Architecte from './architecte';


// import Store from "./Store/Store";


import './App.css';
import Navbar from './components/Navbar'
// import Home from './components/Home';
import MesDemandes from './components/MesDemandes';
import ProductDetails from './ProductDetails'
import ProductDetailsMarque from './ProductDetailsMarque'

import Login from './components/Login';
import Register from './components/Register';
import Alerts from './components/pieces/Alerts'
import PrivateRoute from './components/PrivateRoute'
import Admin  from "./Admin";  

import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Style from '../src/Style'
import Stepper from './components/Stepper'
import 'bootstrap/dist/css/bootstrap.min.css';
import Marque from './Marque';
import Footer from './Footer';
import NavbarDrawer from './components/NavbarDrawer';
import Panier from './components/Panier';


ReactDOM.render(
<BrowserRouter>
<Provider store={store}>


    <Navbar />


    <Switch>
        <Route exact path="/" component={App} />
        {/* <Route exact path="/test/:style" component={Style} /> */}
        <Route exact path="/Creations" component={Creations} />
        <Route exact path="/Fournisseurs" component={Fournisseurs} />
        <Route exact path="/ProductList" component={ProductList} />
        <Route exact path="/Architecte" component={Architecte} />
        <PrivateRoute exact path="/projectcreation" component={Stepper} />
        {/* <Route exact path="/Creations/:Name" component={Salledebain} /> */}
        <Route exact path="/Creations/Cuisine" component={Cuisine} />
        <Route exact path="/Creations/salon" component={Salon} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path='/style/:style' component={Style} />
        <Route exact path='/product/:marque' component={Marque} />
        <Route exact path='/product/Style/:id' component={ProductDetails} />
        <Route exact path='/product/Marque/:id' component={ProductDetailsMarque} />
        <Route exact path='/products/:id' component={ProductItem}/>
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/Panier" component={Panier} />
        <PrivateRoute exact path="/MesDemandes" component={MesDemandes} />
        <Route exact path="/Creations/salle de bains" component={Salledebain} />
        <Route exact path="/Creations/chambre" component={Chambre} />
        <Route exact path="/Creations/chambre enfant" component={ChambreEnfant} />
        <Route exact path="/Creations/entrée" component={Entree} />
        <Route exact path="/Creations/jardin" component={Jardin} />
        <Route exact path="/Creations/Bureau" component={Bureau} />
        <Route exact path="/Creations/salle a manger" component={SalleAManger} />
        {/* <Route exact path="/Acceuil" component={Acceuil} /> */}
        <Route exact path="/Publicite" component={Publicite} />
    </Switch>
    <Footer/>
</Provider>
</BrowserRouter> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
