import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import TimeChooser from './TimeChooser';
import DateChooser from './DateChooser';
import SchoolChooser from './SchoolChooser';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey400, redA200, redA100, redA700, darkBlack, grey50, white, grey300, cyan500, fullBlack} from 'material-ui/styles/colors';
import TimePicker from 'material-ui/TimePicker';
import styles from './SearchBar.css'
import Map from '../../map/Map'
import { Link } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';

const MUIStyles = {
  toolbarStyle: {
    width: 650,
    backgroundColor: white,
    justifyContent: 'space-around',
    height: 50,
    zDepth: 3,
  },

  ToolbarSeparatorStyle: {
    height: 0
  },
}

export default class SearchBar extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Toolbar className={styles.container} style={MUIStyles.toolbarStyle}>
          <ToolbarGroup className={styles.toolbar1} firstChild={true}>
            <TextField style={{width: '150', fontSize: '16'}} hintText="Any Course" />
          </ToolbarGroup>
          <ToolbarSeparator className={styles.toolbarSeparator} style={MUIStyles.ToolbarSeparatorStyle} />
          <ToolbarGroup className={styles.toolbar1}>
            <TextField style={{width: '150', fontSize: '16'}} hintText="Any School" />
          </ToolbarGroup>
          <ToolbarSeparator style={MUIStyles.ToolbarSeparatorStyle} />
          <ToolbarGroup className={styles.toolbar1}>
            <DateChooser />
          </ToolbarGroup>
          <ToolbarSeparator style={MUIStyles.ToolbarSeparatorStyle} />
          <ToolbarGroup className={styles.goButton}>
            <RaisedButton
              label="GO"
              primary={true}
              containerElement={<Link to='/matchingPage' />}
              style={{margin: 0,}}
            />
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    );
  }
}
