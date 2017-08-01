import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimeChooser= () => (
  <div>
    <TimePicker
      hintText="Anytime"
      okLabel="OK"
      cancelLabel="CANCEL"
    />
  </div>
);

export default TimeChooser;
