import React, { Component } from "react";
interface IState{}
interface IProps{}
class Mobiles extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <h1>Mobiles Soon...!</h1>
            </React.Fragment>
        )
    }
}
export default Mobiles;