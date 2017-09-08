import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import TimeChooser from './TimeChooser';
import DateChooser from './DateChooser';
import SchoolChooser from './SchoolChooser';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {orange400, white} from 'material-ui/styles/colors';
import TimePicker from 'material-ui/TimePicker';
import styles from './SearchBar.css'
import Map from '../../map/Map'
import { Link } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import searchBarFind from './searchBarFind.svg'
import searchBarCalendar from './searchBarCalendar.svg'
import searchBarLocation from './searchBarLocation.svg'

const MUIStyles = {
  toolbarStyle: {
    width: 650,
    backgroundColor: white,
    justifyContent: 'space-around',
    height: 50,
    zDepth: 3,
  },

  ToolbarSeparatorStyle: {
    height: 'auto'
  },
}

export default class SearchBar extends Component {
  render() {
    return (
      this.props.isHomepage?
      <Paper className={styles.container} style={{width: '450', height: '48', display:'flex', flexDirection:'row', margin:'auto', borderRadius:'4', alignItems:'center', justifyContent:'center'}}>
        <img src={searchBarFind} style={{width:17, height:17, margin:'auto', marginLeft:'15'}} />
        <TextField style={{width: '150', fontSize: '16', marginLeft: '10'}} inputStyle={{color:'rgb(117, 117, 117)'}} hintStyle={{color:'rgb(117, 117, 117)'}} hintText="Any course" underlineShow={false} />
        <ToolbarSeparator style={{marginLeft: 10, marginRight:10, height:'48'}}/>
        <img src={searchBarLocation} style={{width:17, height:17, margin:'auto', marginLeft:'5'}} />
        <TextField style={{width: '150', fontSize: '16', marginLeft: '15'}} inputStyle={{color:'rgb(117, 117, 117)'}} hintStyle={{color:'rgb(117, 117, 117)'}} hintText="Any school" underlineShow={false} />
        <ToolbarSeparator style={{marginLeft: 10, marginRight:10, height:'48'}}/>
        <img src={searchBarCalendar} style={{width:17, height:17, margin:'auto', marginLeft:'5'}} />
        <DateChooser />
      </Paper>
      :
      <Paper style={{width: '450', height: '35', display:'flex', flexDirection:'row', margin:'auto', marginLeft:100, borderRadius:'4', alignItems: 'center', justifyContent: 'center'}}>
        <img src={searchBarFind} style={{width:17, height:17, margin:'auto', marginLeft:'15'}} />
        <TextField style={{width: '150', fontSize: '16', marginLeft: '10'}} inputStyle={{color:'rgb(117, 117, 117)'}} hintStyle={{color:'rgb(117, 117, 117)'}} hintText="Any course" underlineShow={false} />
        <ToolbarSeparator style={{marginLeft: 10, marginRight:10, height:'35'}}/>
        <img src={searchBarLocation} style={{width:17, height:17, margin:'auto', marginLeft:'5'}} />
        <TextField style={{width: '150', fontSize: '16', marginLeft: '15'}} inputStyle={{color:'rgb(117, 117, 117)'}} hintStyle={{color:'rgb(117, 117, 117)'}} hintText="Any school" underlineShow={false} />
        <ToolbarSeparator style={{marginLeft: 10, marginRight:10, height:'35'}}/>
        <img src={searchBarCalendar} style={{width:17, height:17, margin:'auto', marginLeft:'5'}} />
        <DateChooser />
      </Paper>
      /* <MuiThemeProvider>
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
              containerElement={<Link to='/dashboard' />}
              style={{margin: 0,}}
            />
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider> */

    );
  }
}
