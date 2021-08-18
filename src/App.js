import './App.css';
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Features from './components/Features'
import Menu from './components/Navbar/Menu'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/services" component={Services}/>
          <Route path="/features" component={Features}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
