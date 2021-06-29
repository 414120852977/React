import React from 'react';
import './App.css';
import logo from './bridgLogo.png'

class App extends React.Component {
  url = 'https://www.bridgelabz.com'
  constructor() {
    super()
    this.state = {
      username:"Ashok"
    }
  }
  // onclick function
  onClick = ($event) => {
    console.log("Save button is clicked!!", $event);
    window.open(this.url,"_blank");
  }
  onNameChange = (event) => {
    console.log("value is:",event.target.value);
    this.setState({username:event.target.value})
  }

  render() {
  return (
      <div>
      <h1>{this.state.username} from Bridgelabz</h1>
      <img src = {logo} onClick = {this.onClick}
      alt="The Bridgelabz Logo a bridgelabz through employement through lab works"/>
      </div>
  
  );
  }
}

export default App;
