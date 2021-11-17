import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Route } from 'react-router-dom';
import file1 from "./file1";
import file2 from "./file2"

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
    <Route path="/file1" exact component={file1} /> 
    <Route path="/file2" exact component={file2} />
  </BrowserRouter>,
  document.getElementById('root')
);

