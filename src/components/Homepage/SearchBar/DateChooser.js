import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */

export default class DateChooser extends Component {
  render() {
    return(
      <div>
        <DatePicker hintText="Today" mode="landscape" textFieldStyle={{width: '12vw', fontSize: '1vw'}} />
      </div>
    )
  }
}
