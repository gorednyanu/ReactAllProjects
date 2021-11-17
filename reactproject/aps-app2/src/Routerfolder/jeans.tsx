import React, { Component } from "react";
interface IState{}
interface IProps{}
class Jeans extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1 style={{color:"green"}}>Jeans Soon....!</h1>
            </React.Fragment>
        )
    }
}
export default Jeans;