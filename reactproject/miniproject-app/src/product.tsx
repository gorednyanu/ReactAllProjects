import axios from "axios";
import "./product.css";
import React, { Component } from "react";
import { match as Match } from "react-router-dom";
import Rating from "./Rating";
import LodingBox from "./LodingBox";
interface IState {
    result: any;
}
interface IProps {
    match: Match<routeParmas>;
}

interface routeParmas {
    item: string;
}

class product extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            result: []
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/catgory/${this.props.match.params.item}`, {
            headers: {
                "token": window.localStorage
                    .getItem("miniproject")
            }
        })
            .then((posRes) => {
                const { data } = posRes;
                this.setState({
                    result: data
                })
            }, (errRes) => {
                console.log(errRes);
            });
    }


    render() {
        return (
            <React.Fragment>
                {this.state.result.length <= 0 ? (<LodingBox></LodingBox>) :
                    (<div className="row top">
                        {this.state.result.map((element: any, index: number) => (
                            <div className="card">
                                <img src={element.image}></img>
                                <div className="card-body">
                                    <h2>{element.name}</h2>
                                    <Rating rating={element.rating}></Rating>
                                    <div className="price">
                                       Price: {element.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>)
                }
            </React.Fragment>
        )
    }
}
export default product;