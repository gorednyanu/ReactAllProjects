import React, { Component } from "react";

interface IState{}

interface IProps{}

class Shirts extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{color:'red'}}>Shirts Soon....!</h1>
            </React.Fragment>
        )
    }
};

export default Shirts;