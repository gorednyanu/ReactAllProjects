import React, { Component } from "react";
interface IState{}
interface IProps{}
class Kids extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                 <h1 style={{color:"blue"}}>Kids Wear Soon....!</h1>
            </React.Fragment>
        )
    }
}
export default Kids;