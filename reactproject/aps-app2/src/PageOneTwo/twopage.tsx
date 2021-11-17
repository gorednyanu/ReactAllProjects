import React, { Component } from "react";
import {Location } from "history";
import { match as Match } from "react-router-dom";
interface IState{}
interface IProps{
    location:Location;
    match:Match<routeParams>;
}
interface routeParams{
    sub:string
}

class twopage extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);

    }
    render(){
        console.log( this.props.match.params.sub );
        return(
            <React.Fragment>
                <h1>{this.props.location.search.split("=")[1]}</h1>
            </React.Fragment>
        );
    }
}
export default twopage;