import React from 'react';
import './App.css';
import logo from './bridgLogo.png'

class App extends React.Component {
  url = 'https://www.bridgelabz.com'
  constructor() {
    super()
    this.state = {
      title:"Hello From Bridgelabz"
    }
  }
  // onclick function
  onClick = ($event) => {
    console.log("Save button is clicked!!", $event);
    window.open(this.url,"_blank");
  }

  render() {
  return (
      <div>
      <h1>{this.state.title}</h1>
      <img src = {logo} onClick = {this.onClick}
      alt="The Bridgelabz Logo a bridgelabz through employement through lab works"/>
      </div>
  
  );
  }
}

export default App;
