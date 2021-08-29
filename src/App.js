import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {

  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
        <LoadingBar
            color='#f11946'
            progress={progress}
            
          />
          <NavBar />
          
          <Switch>
              <Route exact path="/"  key="general"><News setProgress={setProgress} apiKey={apiKey} country="in" category="general"/></Route>
              <Route exact path="/business" key="business"><News setProgress={setProgress} apiKey={apiKey} country="in" category="business"/></Route>
              <Route exact path="/entertainment" key="entertainment"><News setProgress={setProgress} apiKey={apiKey} country="in" category="entertainment"/></Route>
              <Route exact path="/general" key="general"><News setProgress={setProgress} apiKey={apiKey} country="in" category="general"/></Route>
              <Route exact path="/health" key="health"><News setProgress={setProgress} apiKey={apiKey} country="in" category="health"/></Route>
              <Route exact path="/science" key="science"><News setProgress={setProgress} apiKey={apiKey} country="in" category="science"/></Route>
              <Route exact path="/sports" key="sports"><News setProgress={setProgress} apiKey={apiKey} country="in" category="sports"/></Route>
              <Route exact path="/technology" key="technology"><News setProgress={setProgress} apiKey={apiKey} country="in" category="technology"/></Route>
          </Switch>
        </Router>
       
      </div>
    )

}


export default App;
