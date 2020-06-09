//import React, { Component, BrowserRouter } from 'react';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Container from './Container';
import About from './Components/Pages/About';
import Header from './Components/Layout/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>

      <div className="navbar" style={{ marginTop: 40, fontsize: 16 }}>

          <Header />
          <Route exact path="/" component={Container} />
          <Route path="/About" component={About} />

      </div>
      </BrowserRouter> 
      </div>
    );
  }
}

export default App;
