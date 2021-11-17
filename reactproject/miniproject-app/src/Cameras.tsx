import React, { Component } from "react";
interface IState{}
interface IProps{}
class Cameras extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>Cameras Soon...!</h1>
            </React.Fragment>
        );
    }
}
export default Cameras;