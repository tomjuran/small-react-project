import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Vinyl from './Vinyl';
import Hardwood from './Hardwood';
import Eng from './Eng';
import Lam from './Lam';
import Contact from './Contact';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';
//import Container from '@material-ui/core/Container';


function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/vinyl" component={Vinyl} />
     <Route path="/lam" component={Lam} />
     <Route path="/eng" component={Eng} />
     <Route path="/hardwood" component={Hardwood} />
     <Route path="/contact" component={Contact} />
    </Switch>
    </div>
    </Router>
  );
}



export default App;
