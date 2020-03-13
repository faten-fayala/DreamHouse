import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getDemand} from '../actions/demandActions'
import {loadUser} from '../actions/AuthActions'
import { connect } from 'react-redux'
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

function createData(piece, style, gamme, espace, inspiration, demande,couleur,peiceatuel ) {
  return { piece, style, gamme, espace, inspiration, demande,couleur,peiceatuel  };
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
    
    componentWillReceiveProps(nextProps) {
      this.setState({username: nextProps.auth.user})
    }
    componentWillMount(){
      this.props.getDemand()
        this.setState({rows: this.props.demand.filter(el => el.user === this.props.auth.user._id)})
    }
    componentDidMount(){
        this.props.loadUser()
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    // componentWillReceiveProps(nextProps) {
    //     this.setState({rows: nextProps.demand})
        
    // }
  render(){
      
    return (
        
      <TableContainer id="paddingTop" component={Paper}>
        <Table className={useStyles.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID demande</StyledTableCell>
              <StyledTableCell align="right">Piéce</StyledTableCell>
              <StyledTableCell align="right">Style&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Gamme&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Qui Partage l'espace&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Couleur&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Piéce Actuel&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Inspiration&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Demandes Spécefiques&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Date&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row._id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.piece}</StyledTableCell>
                <StyledTableCell align="right">{row.styledemanded}</StyledTableCell>
                <StyledTableCell align="right">{row.gamme}</StyledTableCell>
                <StyledTableCell align="right">{row.thespace}</StyledTableCell>
                <StyledTableCell align="right">{row.color}</StyledTableCell>
                <StyledTableCell align="right">{row.actualpiece}</StyledTableCell>
                <StyledTableCell align="right">{row.inspiration}</StyledTableCell>
                <StyledTableCell align="right">{row.speceficdemand}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
               

                <StyledTableCell align="right"> {(!row.confirmed && !row.denied)?"votre demande est en attente de confirmation" : (row.confirmed)? 'votre demande a été prise en charge': 'votre demande a été refusé' }</StyledTableCell>


                {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
    );
}
}
const mapStateToProps = state=>{
    return{
        demand:state.demand.demand,
        auth : state.auth
    }
}
export default connect(mapStateToProps, {getDemand,loadUser})(MesDemandes)



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
