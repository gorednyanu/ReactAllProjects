import React, { Component } from "react";
interface IState{}
interface IProps{}
class Laptops extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>Loptops Soon...!</h1>
            </React.Fragment>
        )
    }
}
export default Laptops;