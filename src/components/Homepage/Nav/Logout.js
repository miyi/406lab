import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey400, redA200, redA100, redA700, darkBlack, grey50, white, grey300, cyan500, fullBlack} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton'
import Auth from '../../Auth/Auth'
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Styles from './Nav.css'
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSingle: '0',
      profile: {},
    };
  }

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log(err);
        });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { profile } = this.state;

    return(
      <IconMenu
          menuStyle={{width: '135px'}}
          iconButtonElement={
            <IconButton>
              <Avatar
                src= {profile.picture}
                size={30}
                className={Styles.LoginStyle}
               />
            </IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <ListItem value="1" primaryText="Profile" containerElement={<Link to="/map" />} />
        <ListItem value="2" primaryText="Logout" onClick={this.logout.bind(this)} />
      </IconMenu>


        // <FlatButton
        //   label="Logout"
        //   secondary={true}
        //   style={loginStyle}
        //   onClick={this.logout.bind(this)}
        // />
      // <FlatButton label="Login" secondary={true} style={loginStyle} />
    )
  }
}
