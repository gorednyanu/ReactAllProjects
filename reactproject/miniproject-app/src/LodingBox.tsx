import React,{ Component } from 'react';

interface IState{}
interface IProps{}

export default class LoadingBox extends Component<IProps,IState> {
    // constructor(props:IProps){
    //     super(props);
    // }
    render(){
            return (
            <div className="loading">
                <i className="fa fa-spinner fa-spin"></i> Loading...
            </div>
        );
    }
}