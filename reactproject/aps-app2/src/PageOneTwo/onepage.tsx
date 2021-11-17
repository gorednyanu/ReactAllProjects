import React, { Component } from "react";
import { History, LocationState } from "history";
interface IState{}
interface IProps{
    history:History<LocationState>;
}
class onepage extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    myfun = ()=>{
        this.props.history.push(`/page_two/reactjs?qty=100`);
    };
    render(){
        return(
            <React.Fragment>
                <button onClick={this.myfun}>click</button>
            </React.Fragment>
        )
    }
}
export default onepage;