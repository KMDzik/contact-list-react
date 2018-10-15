import React, { Component } from 'react'

import './App.css';
import ContactForm from '../ContactForm/ContactForm';


class App extends Component {

  state = {
    name: '',
    surname: '',
    phone: '',
  }
 
   render() {
     return (
         <form>
           <input placeholder='First name' value={this.state.name}
           onChange={event => this.setState({ name: event.target.value})}/>

           <input placeholder='Surname' value={this.state.surname}
           onChange={event => this.setState({ surname: event.target.value})}/>

           <input placeholder='Phone number' value={this.state.phone}
           onChange={event => this.setState({ phone: event.target.value})}/>
         </form>
     )
   }
 }

export default App