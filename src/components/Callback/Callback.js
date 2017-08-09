import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Callback extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <CircularProgress />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Callback;
