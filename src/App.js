import React from 'react';
import './App.css';
import Home from './component/home/home';
import Homes from './components/home/homes';

// import react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
    <div className="app-main">
    <Router>
      <Switch>
        <Route path = "">
        <Home/>
        <Homes/>
        </Route>
      </Switch>
    </Router>
    </div>
    );
    }
}
export default App;