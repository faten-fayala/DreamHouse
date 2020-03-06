import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import family from './family.png'
import man from './man.png'
import couple from './love.png'
import './partage.css'
const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Partage extends React.Component {
  state = {
    partage: '',
  };

  handleChange = event => {
    this.setState({ partage: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
     
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Qui partage cet espace ?*</FormLabel>
          <RadioGroup
            aria-label="Partage"
            name="Partage"
            className={classes.group}
            value={this.state.value}
            onChange={this.props.handleChange('thespace')}
          >
            <FormControlLabel value="une famille" control={<Radio />} label={<img className="partage" src={family}/>   } />
            <FormControlLabel value="un couple" control={<Radio />} label={<img className="partage" src={couple}/>} />
            <FormControlLabel value="une seule personne" control={<Radio />} label={<img className="partage" src={man}/> }/>
           
          </RadioGroup>
        </FormControl>
     
      </div>
    );
  }
}

Partage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Partage);
