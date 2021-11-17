import React, { Component } from "react";
import { BrowserRouter, NavLink as NavLink, Route } from "react-router-dom";
import { History, LocationState } from "history";
import product from "./product";
import "./Dasbord.css";
interface IState { }
interface IProps {
    history: History<LocationState>;
}
class Dashboard extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
    }

    logout = () => {
        window.localStorage.removeItem("miniproject");
        this.props.history.push("/");
    };

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>

                    <NavLink to="/" style={{ color: 'red' }}>
                        <i className="fa fa-arrow-left" style={{ color: "red" }}></i>
                    </NavLink>

                    <div className="category">
                        <NavLink to="/cameras/cameras"
                            exact={true}
                            strict
                            activeStyle={{ color: "red" }}
                            style={{ marginRight: 150 }} >Cameras</NavLink>
                        <NavLink to="/acs/acs"
                            exact={true}
                            strict
                            activeStyle={{ color: "red" }}
                            style={{ marginRight: 150 }}>ACS</NavLink>
                        <NavLink to="/washingmachines/Washing_Machine" 
                                exact={true} 
                                strict 
                                activeStyle={{color:"red"}}
                                style={{marginRight:150}}>Washing Machines</NavLink>

                        <button onClick={this.logout}>Logout</button>
                    </div>
                    <div className="RouteElement">
                        <Route path="/cameras/:item" component={product} exact={true} strict></Route>
                        <Route path="/acs/:item" component={product} exact={true} strict></Route>
                        <Route path="/washingmachines/:item" component={product} exact={true} strict></Route>
                    </div>
                </BrowserRouter>
                {/* <BrowserRouter>
                    <Nav>
                        <Bars />
                        <NavMenu>
                            <NavLink to='/cameras/cameras' activeStyle={{ color: "blue" }}>Cameras</NavLink>
                            <NavLink to='/acs/acs' activeStyle={{ color: "blue" }}>ACS</NavLink>
                            <NavLink to='/washingmachines/Washing_Machine' activeStyle={{ color: "blue" }}>Washing Machines</NavLink>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/signin'>Logout</NavBtnLink>
                        </NavBtn>
                        <br></br>
                        <Route path="/cameras/:item" component={product} exact={true} strict></Route>
                        <Route path="/acs/:item" component={product} exact={true} strict></Route>
                        <Route path="/washingmachines/:item" component={product} exact={true} strict></Route>
                    </Nav>

                </BrowserRouter> */}
            </React.Fragment >
        )
    }
}
export default Dashboard;