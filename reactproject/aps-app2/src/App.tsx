import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dasbord from "./Login page/Dasbord";
// import Shirts from "./Routerfoldre/shirts";
// import Jeans from "./Routerfoldre/jeans";
// import kids from "./Routerfoldre/kids";
import login from "./Login page/login";
import onepage from "./PageOneTwo/onepage";
import twopage from "./PageOneTwo/twopage";
interface IState{}
interface IProps{}
class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
    }
    render(){
       return(
          <React.Fragment>
              <Router>
                  {/* <NavLink to="/"
                           activeStyle={{color:"red"}}
                           exact={true} strict
                           style={{marginRight:150}}>
                      <b>Shirts</b>
                  </NavLink>
                <NavLink to="/jeans"
                         activeStyle={{color:"red"}}
                         exact={true} strict
                         style={{marginRight:150}}>
                    <b>Jeans</b>
                </NavLink>
                <NavLink to="/kids"
                         activeStyle={{color:"red"}}
                         exact={true} strict>
                    <b>Kids</b>
                </NavLink> */}
                {/* <br></br><br></br>
                <Route path="/" component={Shirts} exact={true} strict></Route>
                <Route path="/jeans" component={Jeans} exact={true} strict></Route>
                <Route path="/kids" component={kids} exact={true} strict></Route> */}
                {/* <Route path="/" component={login} exact={true} strict></Route>
                <Route path="/Dashboard" component={Dasbord} exact={true} strict></Route> */}
                <Route path="/" component={onepage} exact={true} strict></Route>
                <Route path="/page_two" component={twopage} exact={true} strict></Route>
              </Router>
          </React.Fragment>
       )
    }
};

export default App;