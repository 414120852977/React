import React from 'react';
import logo from '../../assets/img/bridgLogo.png';
import './home.css';

class Home extends React.Component {
  url = 'https://www.bridgelabz.com'
  constructor() {
    super()
    this.state = {
      username:"",
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
      <h1>Hello {this.state.username} from Bridgelabz</h1>
      <img src = {logo} onClick = {this.onClick}
      alt="The Bridgelabz Logo a bridgelabz through employement through lab works"/>
      </div>
      
      <div>
        <input onChange = {this.onNameChange}/>
        <span className = "error-output">{this.state.nameError}</span>
      </div>
      <p>At Bridgelabz, we're a community of</p>
      <ul>
      <li>technologiest</li>
      <li>thinkers</li>
      <li>builders</li>
      </ul>
      <p> Working together to keep the tech employability of engineers alive 
and accessible, so tech companies wordwide can get contributions
and creators for technology solutions. we belive this act 
of human collaborations across an employability olatform is essential to indivisual 
growth and our collective future</p>
  <p>To Know about us, visit <a href = "http://bridgelabz.com">Bridgelabz</a> to learn more about our mission i.e. <b>Employability to all</b></p>
    </div>
   
  );
  }
}

export default Home;