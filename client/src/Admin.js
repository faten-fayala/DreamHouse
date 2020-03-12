// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getDemand , editDemand } from "./actions/demandActions";
// import { Button } from 'react-bootstrap';   
// export class Admin extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     this.props.getDemand();
//   }
//   render() {
//     return (
//       <div className="displayDemand">
//         {this.props.demand.filter(el => !el.denied).map(el => 
//           <div className="oneDemand">
//             <div className="idstyle">
//                           <h1> UserID : {el.user} </h1>
//             </div>
//             <div className="idstyle">
//                           <h3> DemandID : {el._id} </h3>
//             </div>
//             <div className="styletext">
//               <p> La piece à changer: {el.piece} </p>
//             </div>
//             <div className="styletext">
//               <p> la gamme choisisse: {el.gamme} </p>
//             </div> <div className="styletext">
//               <p> L'espace est partagé par : {el.thespace} </p>
//             </div> <div className="styletext">
//               <p> La palettes des couleurs choisisse est : {el.color} </p>
//             </div>
//             <div className="styletext">
//               <p> Le style demandé: {el.styledemanded} </p>
//                 </div>
//             <div className="styletext">
             
//             </div>
//            {(el.confirmed) ? (<div className="styletext confirmation">
//               <p> La demande est confirmé </p>
//                 </div>)  
//                 : (<div> <Button  onClick={()=>this.props.editDemand(el._id, {confirmed:true, denied: false})}  variant="success" >Confirm</Button>
//             <Button onClick={()=>this.props.editDemand(el._id, {confirmed: false, denied:true})} variant="danger">Deny</Button></div>)}
//           </div>
          
//         )}
        
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     demand: state.demand.demand
//   };
// };
// export default connect(mapStateToProps, {editDemand, getDemand })(Admin);

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getDemand} from './actions/demandActions'
import {loadUser} from './actions/AuthActions'
import { connect } from 'react-redux'
import {  editDemand } from "./actions/demandActions";
import { Button } from 'react-bootstrap';   
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(id,piece, style, gamme, espace, inspiration, demande,couleur,peiceatuel ) {
  return { id,piece, style, gamme, espace, inspiration, demande,couleur,peiceatuel  };
}

const rows = [];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class MesDemandes extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                rows: []
            }
    }
    
    componentDidMount(){
        this.props.loadUser()
        this.props.getDemand()
        this.setState({rows: this.props.demand})
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        this.setState({rows: nextProps.demand})
        
    }
  render(){
      
    return (
      <div >
      <TableContainer id="paddingTop" component={Paper}>
        <Table className={useStyles.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID USER</StyledTableCell>
              <StyledTableCell align="center">ID DEMANDE</StyledTableCell>
              <StyledTableCell align="center">Piéce</StyledTableCell>
              <StyledTableCell align="center">Style&nbsp;</StyledTableCell>
              <StyledTableCell size="small" align="center">Gamme&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Qui Partage l'espace&nbsp;</StyledTableCell>
              <StyledTableCell size="small" align="center">Couleur&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Piéce Actuel&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Inspiration&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Demandes Spécefiques&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Status&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.user}
                </StyledTableCell>
                <StyledTableCell align="right">{row._id}</StyledTableCell>

                <StyledTableCell align="right">{row.piece}</StyledTableCell>
                <StyledTableCell align="right">{row.styledemanded}</StyledTableCell>
                <StyledTableCell align="right">{row.gamme}</StyledTableCell>
                <StyledTableCell align="right">{row.thespace}</StyledTableCell>
                <StyledTableCell align="right">{row.color}</StyledTableCell>
                <StyledTableCell align="right">{row.actualpiece}</StyledTableCell>
                <StyledTableCell align="right">{row.inspiration}</StyledTableCell>
                <StyledTableCell align="right">{row.speceficdemand}</StyledTableCell>
                <StyledTableCell align="right"> {(row.confirmed) ? (<div className="styletext confirmation">
              <p> La demande est confirmé </p>
                 </div>)  
                 : (<div> <Button  onClick={()=>this.props.editDemand(row._id, {confirmed:true, denied: false})}  variant="success" >Confirm</Button>
             <Button onClick={()=>this.props.editDemand(row._id, {confirmed: false, denied:true})} variant="danger">Deny</Button></div>)}
           
          
         </StyledTableCell>

               
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
}
}
const mapStateToProps = state=>{
    return{
        demand:state.demand.demand
    }
}
export default connect(mapStateToProps, {getDemand,loadUser,editDemand})(MesDemandes)



// import React, { Component } from 'react'
// import {getDemand} from '../actions/demandActions'
// import {loadUser} from '../actions/AuthActions'
// import { connect } from 'react-redux'
// export class MesDemandes extends Component {

//     componentDidMount(){
//         this.props.getDemand()
//         this.props.loadUser()

//     }
//     render() {
//         return (
//             <div>
//                 {this.props.demand.map(el=> 
//                 <div>
//                 {(!el.confirmed && !el.denied)?<p>votre demande est en attente de confirmation</p> : (el.confirmed)? 'votre demande a été prise en charege': 'votre demande a été refusé' }
//                  <p>{el.user}</p>
//                 </div>
//                  )}
//             </div>
//         )
//     }
// }
// const mapStateToProps = state=>{
//         return{
//             demand:state.demand.demand,
//             auth:state.auth
//         }
//     }
    
// export default connect(mapStateToProps,{getDemand,loadUser})(MesDemandes)
