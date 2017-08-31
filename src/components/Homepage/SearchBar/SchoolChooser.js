import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: '12vw',
  },
};

export default class SchoolChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange({event, index, value}) {
     this.setState({value});
  }

  render() {
    return (
      <div>
        <DropDownMenu
          hintText="Any School"
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="UBC" />
          <MenuItem value={2} primaryText="SFU" />
          <MenuItem value={3} primaryText="BCIT" />
        </DropDownMenu>
      </div>
    );
  }
}
