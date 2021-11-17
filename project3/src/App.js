import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from './actions/ProductAction';
import Loading from "./Loading";
import MessageBox from "./MessageBox";
import Rating from "./rating";

function App() {
  const res = useSelector(state => state);
  const { loading, products, err } = res;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getProducts());
  }, []);
  return (
    <React.Fragment>
      {!loading ? (<Loading></Loading>) : err === "Network Error" ? (<MessageBox></MessageBox>) : (
        <div className="myClass">
          {products.map((products, index) => (
            <div className="card" style={{ width: 180, marginLeft: 20}}>
              <img className="card-img-top" src={products.image} style={{ width: 100}}></img>
              <div className="card-body">
                <p className="card-title">{products.name}</p>
                <p className="card-text">price: $ {products.cost}</p>
                <Rating rating={products.rating}></Rating>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  )
};
export default App;