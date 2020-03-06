import React, { Component } from "react";
import { connect } from "react-redux";
import { getDemand , editDemand } from "./actions/demandActions";
import { Button } from 'react-bootstrap';   
export class Admin extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDemand();
  }
  render() {
    return (
      <div className="displayDemand">
        {this.props.demand.filter(el => !el.denied).map(el => 
          <div className="oneDemand">
            <div className="idstyle">
                          <h1> UserID : {el.user} </h1>
            </div>
            <div className="idstyle">
                          <h3> DemandID : {el._id} </h3>
            </div>
            <div className="styletext">
              <p> La piece à changer: {el.piece} </p>
            </div>
            <div className="styletext">
              <p> la gamme choisisse: {el.gamme} </p>
            </div> <div className="styletext">
              <p> L'espace est partagé par : {el.thespace} </p>
            </div> <div className="styletext">
              <p> La palettes des couleurs choisisse est : {el.color} </p>
            </div>
            <div className="styletext">
              <p> Le style demandé: {el.styledemanded} </p>
                </div>
            <div className="styletext">
             
            </div>
           {(el.confirmed) ? (<div className="styletext confirmation">
              <p> La demande est confirmé </p>
                </div>)  
                : (<div> <Button  onClick={()=>this.props.editDemand(el._id, {confirmed:true, denied: false})}  variant="success" >Confirm</Button>
            <Button onClick={()=>this.props.editDemand(el._id, {confirmed: false, denied:true})} variant="danger">Deny</Button></div>)}
          </div>
          
        )}
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    demand: state.demand.demand
  };
};
export default connect(mapStateToProps, {editDemand, getDemand })(Admin);
