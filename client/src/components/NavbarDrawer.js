import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatars from './Avatars'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({username: nextProps.auth.user})
  }


                      
                      
  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={`${classes.list}`}>
        <List>
          {['',`${ this.props.auth.user && this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname}`,'', 'Demandes', 'WhishList', 'Panier'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index=== 0 && 
               }</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </div>
    );

    // const fullList = (
    //   <div className={classes.fullList}>
    //     <List>
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </div>
    // );

    return (
      <div>
        
        <Button onClick={this.toggleDrawer('right', true)}> <Avatars id="profil" Name={this.props.auth.user && this.state.username.firstname.slice(0,1).toUpperCase()+this.state.username.lastname.slice(0,1).toUpperCase()} /> </Button>
           
       
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };
export default connect(mapStateToProps)(withStyles(styles)(TemporaryDrawer));
