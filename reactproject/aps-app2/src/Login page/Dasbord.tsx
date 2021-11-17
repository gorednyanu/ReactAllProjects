import React, { Component } from "react";
interface IState{}
interface IProps{}
class Dasbord extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:"green"}}>Wel come </h1>
            </React.Fragment>
        )
    }
}
export default Dasbord;