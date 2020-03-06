import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Upload extends React.Component {
  state={inspiration:"",
speceficdemand:"",
actualpiece:""
  }
  handleChange =input=>e=>{
    this.setState({[input]: e.target.value})
  }
    render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <TextField  
          
          onChange={this.props.handleChange('actualpiece')}
          id="outlined-full-width"
          label="A quoi ressemble la piéce aujourd'hui"
          style={{ margin: 8 }}
          placeholder="http://example.com"
          helperText="Entrer un URL"
          fullWidth
          margin="normal"
          
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField onChange={this.props.handleChange("inspiration")}
          id="outlined-full-width"
          label="Ajoutez des photos d'inspiration"
          style={{ margin: 8 }}
          placeholder="http://example.com"
          helperText="Entrer un URL"
          fullWidth
          margin="normal"
          defaultValue={this.state.inspiration}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

<TextField onChange={this.props.handleChange("speceficdemand")         }
          id="outlined-multiline-static"
          label="Avez vous des demandes spécefiques?"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

      
      </form>
    );
  }
}

Upload.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Upload);
