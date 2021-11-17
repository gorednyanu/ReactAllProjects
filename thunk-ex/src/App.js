import React,{ Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/bank.actions";

class App extends Component {
//   constructor(props){
//     super(props);
// }
  deposit = () => {
    this.props.fun_one(2000);
  }
  withdraw = () => {
    this.props.fun_tow(1000);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Bal: {this.props.bal}</h1>
          <br></br>
          <button onClick={this.deposit}> DEPOSIT</button>
          <button onClick={this.withdraw}>WITHDRAW</button>
        </div>
      </React.Fragment >
    )
  }
};
const receive = (state) => {
  return {
    bal: state.bal
  }
};
const send = (dispatch) => {
  return {
    fun_one: (value) =>  dispatch(actions.depositSync(value)) ,
    fun_tow: (value) =>  dispatch(actions.withdrawSync(value)) 
  }
};
export default connect(receive, send)(App);