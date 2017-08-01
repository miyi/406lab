import React, { Component }from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import TimeChooser from './TimeChooser';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey400, redA200, redA100, redA700, darkBlack, grey50, white, grey300, cyan500, fullBlack} from 'material-ui/styles/colors';
import TimePicker from 'material-ui/TimePicker';
import styles from './SearchBar.css'
import Map from '../../map/Map'
import { Link } from 'react-router';

const muiTheme = getMuiTheme()

const MUIStyles = {
  toolbarStyle: {
    backgroundColor: grey50,
    justifyContent: 'space-around',
    margin: 130,
    height: 50,
    borderColor: 'red',
  },

  ToolbarSeparatorStyle: {
    height: 39,
    margin: 6
  },

  buttonStyle: {
    margin: 12,
  }
}

export default class SearchBar extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Toolbar style={MUIStyles.toolbarStyle}>
          <ToolbarGroup firstChild={true}>
            <TextField className={styles.textField1} hintText="Course" />
          </ToolbarGroup>
          <ToolbarSeparator style={MUIStyles.ToolbarSeparatorStyle} />
          <ToolbarGroup>
            <TimePicker
              hintText="Anytime"
              okLabel="OK"
              cancelLabel="CANCEL"
            />
          </ToolbarGroup>
          <ToolbarSeparator style={MUIStyles.ToolbarSeparatorStyle} />
          <ToolbarGroup>
            <RaisedButton
              label="GO"
              style={MUIStyles.buttonstyle}
            />
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    );
  }
}
