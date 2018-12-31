import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    mail: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
  }


  sendEmail = _ => {
    const { mail } = this.state;
    fetch(`http://localhost:4000/send-email?firstName=${mail.firstName}&lastName=${mail.lastName}&email=${mail.email}&message=${mail.message}`) //query string url
      .catch(err => console.error(err))
      console.log('Data has been sent');
      console.log({mail})
  }


  render() {
    const { mail } = this.state;
    
    return (
      <div className="formClass">
               <h1 className="formTitle"> 
                    Get In Touch!
               </h1>
                    <div className="firstName">
                         <label className="label"> First Name </label>
                         <input 
                         name="firstName"
                         type="text"
                         className="input"
                         value={mail.firstName}
                         onChange={e => this.setState({ mail: { ...mail, firstName: e.target.value } })}/>
                         
                    </div>
                    <div className="lastName">
                         <label className="label"> Last Name </label>
                         <input 
                         name="lastName"
                         type="text"
                         className="input"
                         onChange={e => this.setState({ mail: { ...mail, lastName: e.target.value } })}>
                         </input>
                    </div>
                    <div className="email">
                         <label className="label"> Email </label>
                         <input 
                         name="email"
                         type="text"
                         className="input"
                         onChange={e => this.setState({ mail: { ...mail, email: e.target.value } })}>
                         </input>
                    </div>
                    <div className="message">
                         <label className="label"> Message </label>
                         <textarea
                         name="message"
                         type="text"
                         className="inputMessage"
                         onChange={e => this.setState({ mail: { ...mail, message: e.target.value } })}>
                         </textarea>
                         
                    </div>
                    <div className="button">
                    <button 
                    className="submit"
                    onClick={this.sendEmail}
                  >Get In Touch</button>
                </div>
              </div>
          );
  }
}

export default App;