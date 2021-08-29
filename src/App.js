import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />
          <NavBar />
          
          <Switch>
              <Route exact path="/"  key="general"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="general"/></Route>
              <Route exact path="/business" key="business"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="business"/></Route>
              <Route exact path="/entertainment" key="entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="entertainment"/></Route>
              <Route exact path="/general" key="general"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="general"/></Route>
              <Route exact path="/health" key="health"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="health"/></Route>
              <Route exact path="/science" key="science"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="science"/></Route>
              <Route exact path="/sports" key="sports"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="sports"/></Route>
              <Route exact path="/technology" key="technology"><News setProgress={this.setProgress} apiKey={this.apiKey} country="in" category="technology"/></Route>
          </Switch>
        </Router>
       
      </div>
    )
  }
}



