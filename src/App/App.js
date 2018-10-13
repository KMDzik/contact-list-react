import React, { Component } from 'react'

import './App.css';
import ContactForm from '../ContactForm/ContactForm';


class App extends Component {

  state = {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
    previousState: null
  }

  toggleContactFavorites = contactId => {
    this.setState({
      contacts: this.state.contacts.map(
        contact => contactId !== contact.id ? contact : {
          ...contact,
          isFavorite: !contact.isFavorite
        }

      )
    })
  }

  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contactId !== contact.id
      )
    })
  }

  addContact = name => {
    this.setState({
      previousState: this.state,
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name: name,
        isFavorite: false
      })
    })
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  } 

  render() {
    return (
      <div className="app">
        <div className="title">Contact List App</div>
        <ContactForm addContactsFunction={this.addContact} />
        <ul> {
          this.state.contacts.map(
            contact => (
              <li key={contact.id}>
                {contact.isFavorite ?  
                <span onClick={() => this.toggleContactFavorites(contact.id)}>&#9733;</span> :
                <span onClick={() => this.toggleContactFavorites(contact.id)}>&#9734;</span>}
                {contact.name} {contact.surname} <br /> {contact.number}
                <button onClick={() => this.removeContact(contact.id)}>Delete contact</button>
              </li>
            )
          )
        }
        </ul>
      </div>
    )
  }

}

export default App