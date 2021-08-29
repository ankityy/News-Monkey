import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;
  
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
              <Route exact path="/"  key="general"><News apiKey={this.apiKey} country="in" category="general"/></Route>
              <Route exact path="/business" key="business"><News apiKey={this.apiKey} country="in" category="business"/></Route>
              <Route exact path="/entertainment" key="entertainment"><News apiKey={this.apiKey} country="in" category="entertainment"/></Route>
              <Route exact path="/general" key="general"><News apiKey={this.apiKey} country="in" category="general"/></Route>
              <Route exact path="/health" key="health"><News apiKey={this.apiKey} country="in" category="health"/></Route>
              <Route exact path="/science" key="science"><News apiKey={this.apiKey} country="in" category="science"/></Route>
              <Route exact path="/sports" key="sports"><News apiKey={this.apiKey} country="in" category="sports"/></Route>
              <Route exact path="/technology" key="technology"><News apiKey={this.apiKey} country="in" category="technology"/></Route>
          </Switch>
        </Router>
       
      </div>
    )
  }
}



