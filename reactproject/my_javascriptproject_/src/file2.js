import React, { Component } from "react";

class file2 extends Component {
  msg = {
    currentDateTime: Date().toLocaleString()
  }
  render() {
    return (
  
        <Datepicker
          controls={['date', 'time']}
        />
     
    );
  }
}
export default file2;