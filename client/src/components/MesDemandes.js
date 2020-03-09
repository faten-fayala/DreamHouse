// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import getproduct from '../actions/ProductAction'
// import { connect } from 'react-redux'
// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }))(TableRow);

// function createData(piece, style, gamme, espace, inspiration, demande,couleur,peiceatuel ) {
//   return { piece, style, gamme, espace, inspiration, demande,couleur,peiceatuel  };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// class MesDemandes extends React.Component {
    
//     componentDidMount(){
//         this.props.getproduct()
//     }
//   render(){
      
//     return (
        
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>ID demande</StyledTableCell>
//               <StyledTableCell align="right">Piéce</StyledTableCell>
//               <StyledTableCell align="right">Style&nbsp;</StyledTableCell>
//               <StyledTableCell align="right">Gamme&nbsp;</StyledTableCell>
//               <StyledTableCell align="right">Qui Partage l'espace&nbsp;</StyledTableCell>
//               <StyledTableCell align="right">Couleur&nbsp;</StyledTableCell>
//               <StyledTableCell align="right">Piéce Actuel&nbsp;</StyledTableCell>
//               <StyledTableCell align="right">Inspiration&nbsp;</StyledTableCell>
//               <StyledTableCell align="right">Demandes Spécefiques&nbsp;</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(row => (
//               <StyledTableRow key={row.name}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                 <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                 <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                 <StyledTableCell align="right">{row.protein}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     );
// }
// }
// 
// export default connect(mapStateToProps)(MesDemandes)

// const mapStateToProps = state=>{
//     return{
//         products:state.ProductReducer.product
//     }
// }

import React, { Component } from 'react'
import {getDemand} from '../actions/demandActions'
import {loadUser} from '../actions/AuthActions'
import { connect } from 'react-redux'
export class MesDemandes extends Component {

    componentDidMount(){
        this.props.getDemand()
        this.props.loadUser()

    }
    render() {
        return (
            <div>
                {this.props.demand.map(el=> 
                <div>
                {(!el.confirmed && !el.denied)?<p>votre demande est en attente de confirmation</p> : (el.confirmed)? 'votre demande a été prise en charege': 'votre demande a été refusé' }
                 <p>{el.user}</p>
                </div>
                 )}
            </div>
        )
    }
}
const mapStateToProps = state=>{
        return{
            demand:state.demand.demand,
            auth:state.auth
        }
    }
    
export default connect(mapStateToProps,{getDemand,loadUser})(MesDemandes)
