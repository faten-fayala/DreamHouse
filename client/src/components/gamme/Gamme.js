import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

class Gamme extends React.Component {
  state = {
    gamme: '',
  };

  handleChange = event => {
    this.setState({ gamme: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
     
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gamme</FormLabel>
          <RadioGroup
            aria-label="Gamme"
            name="Gamme"
            className={classes.group}
            value={this.state.value}
            onChange={ this.props.handleChange('gamme')      }
            >
            <FormControlLabel value="Haute Gamme"  control={<Radio color="warning"  />} label="Haute Gamme" />
            <FormControlLabel value="Moyenne Gamme" control={<Radio color="warning"  />} label="Moyenne Gamme" />
            <FormControlLabel value="Basse Gamme" control={<Radio color="warning"  />} label="Basse Gamme" />
           
          </RadioGroup>
        </FormControl>
     
      </div>
    );
  }
}

Gamme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gamme);
