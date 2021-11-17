import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';  
import App from './App';
import demo2 from './demo2'

const routing = (  
  <Router>  
    <div>  
      <Route path="/" component={App} /> 
      <Route exact path="/demo2" component={demo2} />
     
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  