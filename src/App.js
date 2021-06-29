import React from 'react';
import './App.css';
import logo from './bridgLogo.png'

class App extends React.Component {
  url = 'https://www.bridgelabz.com'
  constructor() {
    super()
    this.state = {
      username:"ashok",
      nameError:""
    }
  }
  // onclick function
  onClick = ($event) => {
    console.log("Save button is clicked!!", $event);
    window.open(this.url,"_blank");
  }
  onNameChange = (event) => {
    console.log("value is:",event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s{2,}$]');
    this.setState({username:event.target.value})
    if (nameRegex.test(event.target.value)) {
      this.setState({nameError:''});
    }
    else {
      this.setState({nameError:'name is incorrect'})
    }
  }

  render() {
  return (
    <div>
      <div>
      <h1>{this.state.username} from Bridgelabz</h1>
      <img src = {logo} onClick = {this.onClick}
      alt="The Bridgelabz Logo a bridgelabz through employement through lab works"/>
      </div>
      
      <div>
        <input onChange = {this.onNameChange}/>
        <span className = "error-output">{this.state.nameError}</span>
      </div>
     </div>
  
  );
  }
}

export default App;
