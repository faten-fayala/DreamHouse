import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PieceList from './pieces/PieceList'
import Gamme from './gamme/Gamme';
import Partage from './partage/Partage';
import Style from './styles/Style';
import Upload from './uploading/Upload';
import { connect } from 'react-redux'
import { loadUser } from '../actions/AuthActions'
import { createProject } from '../actions/demandActions'
import ColorList from '../Couleur/ColorList';
import {setAlert,removeAlert} from '../actions/AlertActions'
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
 MarginBoutton: {
    marginBottom: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Step1', 'Step2', 'Step3','Step4','Step5','Step6'];
}



class Stepp extends React.Component {
     state = {
    activeStep: 0,
    completed: {},
    gamme:'',
    piece:'',
    thespace:'',
    inspiration:"",
    color:"",
    actualpiece:"",
    styledemanded:"",
    speceficdemand:""
  };

  componentDidMount(){
    this.props.loadUser()
  }



  handleStyle =styledemanded=>{
    this.setState({styledemanded: styledemanded})
  }
  handleChange =input=>e=>{
    this.setState({[input]: e.target.value})
  }

  handleColor =color=>{
    this.setState({color: color})
  }

  handleGamme =gamme=>{
    this.setState({gamme: gamme})
  }

  handleSpace =thespace=>{
    this.setState({thespace: thespace})
  }

  handlePiece =piece=>{
  this.setState({piece: piece})
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  
  getStepContent = () =>{
 
        switch (this.state.activeStep) {
          case 0:
            return <PieceList handlePiece={x=>this.handlePiece(x)} piece={this.state.piece}/>;
          case 1:
            return <Gamme handleChange={input=>this.handleChange(input)}/>;
          case 2:
            return <Partage handleChange={(input)=>this.handleChange(input)} />;
          case 3:
            return <Style handleStyle={x=>this.handleStyle(x)  } 
                          styledemanded={this.state.styledemanded}
            />;
          case 4:
              return <Upload   handleChange={(input)=>this.handleChange(input)}
              /> ;
          case 5 : 
            return <ColorList handleColor={x=>this.handleColor(x)} color={this.state.color}/>
          default:
            return 'Unknown step';
        }
      }
    
      // UNSAFE_componentDidMount =()=> {
      //   if(localStorage.token){
      //     this.props.loadUser()
      //   }
      // }
      
      send = () =>{ if(this.state.piece ===''||this.state.gamme ===''||this.state.thespace ===''||this.state.inspiration ===''
      ||this.state.actualpiece ===''||this.state.speceficdemand ===''||this.state.styledemanded ===''||this.state.color ===''){
        let id=uuidv4()
        this.props.setAlert('please all fields are required','warning',id)
        setTimeout(() => {
            this.props.removeAlert(id)
        }, 5000);
    }else 
        {this.props.createProject({piece:this.state.piece,
            styledemanded:this.state.styledemanded,
            speceficdemand:this.state.speceficdemand,
            thespace:this.state.thespace ,
            color:this.state.color ,
            actualpiece:this.state.actualpiece ,
            gamme:this.state.gamme,
            inspiration:this.state.inspiration})
            this.props.history.push('/')
    }
    }
   
  render() {
    
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Container>
      <div className={classes.root}>
        
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent()}</Typography>
              <div className={classes.MarginBoutton}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary"  id="next"
                onClick={activeStep === steps.length - 1 ? this.send : this.handleNext }>
                  {activeStep === steps.length - 1 ? 'Send' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </Container>
    );
  }
}

Stepp.propTypes = {
  classes: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    auth : state.auth
  }
}

export default connect(mapStateToProps, { loadUser,createProject,setAlert,removeAlert })(withStyles(styles)(Stepp));


