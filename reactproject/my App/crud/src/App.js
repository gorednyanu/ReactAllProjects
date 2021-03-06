import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home  from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar'; 
import { Route, BrowserRouter as Router } from 'react-router-dom';
  

function App() {
  return (
    <Router>
      <div className="App">
     <Navbar />
      
     <switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/contact" component={Contact} />
     </switch>
    </div>
    </Router>
  );
}

export default App;
