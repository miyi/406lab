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
        <DatePicker hintText="Anytime" mode="landscape" textFieldStyle={{width: '115', fontSize: '16'}} inputStyle={{color:'rgb(117, 117, 117)'}} hintStyle={{color:'rgb(117, 117, 117)'}}  underlineShow={false} style={{marginLeft:15}} />
      </div>
    )
  }
}
