import React, { Component } from "react";
interface IState{}
interface IProps{}
class TVS extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>TVS Soon...!</h1>
            </React.Fragment>
        )
    }
}
export default TVS;