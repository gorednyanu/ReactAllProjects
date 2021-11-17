import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }
  fun_one = () => {
    this.props.ageup();
  }
  fun_two = () => {
    this.props.agedown();
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.age}</h1>
        <br></br>
        <div className="container">
          <div class="vertical-center">
          <button onClick={this.fun_one}>AGE_UP</button>
          <button onClick={this.fun_two}>AGE_DOWN</button>
          </div>
        </div>
      </React.Fragment >
    )
  }
};
const receive = (state) => {
  return {
    age: state.age
  }
};
const send = (dispatch) => {
  return {
    ageup: () => { dispatch({ type: "AGE_UP", value: 1 }) },
    agedown: () => { dispatch({ type: "AGE_DOWN", value: 1 }) }
  }
};



export default connect(receive, send)(App);