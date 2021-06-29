import React from 'react';
import './App.css';
import logo from './bridgLogo.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title:"Hello From Bridgelabz"
    }
  }
  render() {
  return (
      <div>
      <h1>{this.state.title}</h1>
      <img src = {logo}
      alt="The Bridgelabz Logo a bridgelabz through employement through lab works"/>
      </div>
  
  );
  }
}

export default App;
