import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatars from "./Avatars";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/AuthActions";
import FolderIcon from '@material-ui/icons/Folder';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ username: nextProps.auth.user });
  }

  render() {
    const { classes } = this.props;

    // const sideList = (
    //   <div className={`${classes.list}`}>
    //     <List>
    //       {['',`${ this.props.auth.user && this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname}`,'', 'Demandes', 'WhishList', 'Panier'].map((text, index) => (
    //         <ListItem button key={text}>
    //           {/* <ListItemIcon>{index=== 0 &&
    //            }</ListItemIcon> */}
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />

    //   </div>
    // );

    return (
      <div id="navbarDrawer">
     <div className="drawer" onClick={this.toggleDrawer("right", true)}>
          <Avatars 
              id="profil"
            Name={
              this.props.auth.user &&
              this.state.username.firstname.slice(0, 1).toUpperCase() +
                this.state.username.lastname.slice(0, 1).toUpperCase()
            }
          />
        </div>


        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
        >
          
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("right", false)}
            onKeyDown={this.toggleDrawer("right", false)}
          >
            <div className={`${classes.list}`}>
              <List>
                
                <ListItem divider={true} button key="">
                  <ListItemIcon>{<Avatars 
              id="profil"
            Name={
              this.props.auth.user &&
              this.state.username.firstname.slice(0, 1).toUpperCase() +
                this.state.username.lastname.slice(0, 1).toUpperCase()
            }
          />
               }</ListItemIcon>
                  <ListItemText
                    primary={`${this.props.auth.user &&
                      this.props.auth.user.firstname.toUpperCase() +
                        " " +
                        this.props.auth.user.lastname.toUpperCase()}`}
                  />
                </ListItem>
               
                <ListItem button divider={true} key="">
                  <ListItemIcon>{<FavoriteIcon/>
               }</ListItemIcon>
                  <ListItemText primary="Favoris" />
                </ListItem>
                
                
                <Link className="dropdownlink1" to="/Panier">
                  <ListItem divider={true} button key="">
                    <ListItemIcon>{<ShoppingCartIcon/>
               }</ListItemIcon>
                    <ListItemText primary="Panier" />
                  </ListItem>
                </Link>

                <Link className="dropdownlink1" to="/MesDemandes">
                  <ListItem divider={true} button key="">
                    <ListItemIcon>{<FolderIcon/>     
               }</ListItemIcon>
                    <ListItemText primary="Mes Demandes" />
                  </ListItem>
                  
                </Link>
                
                <Link className="dropdownlink1" to="/projectcreation">
                  <ListItem divider={true} button key="">
                    <ListItemIcon>{<BuildSharpIcon/>}</ListItemIcon>
                    <ListItemText primary="Crée votre projet" />
                  </ListItem>
                  
                </Link>

                <Link className="dropdownlink1" onClick={this.props.logout} to="/">
                  <ListItem divider={true} button key="">
                    <ListItemIcon>{<MeetingRoomIcon/> 
               }</ListItemIcon>
                    <ListItemText primary="Se déconnecter" />
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(mapStateToProps, { logout })(
  withStyles(styles)(TemporaryDrawer)
);
