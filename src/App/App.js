import React, { Component } from 'react'

import './App.css';
import ContactForm from '../ContactForm/ContactForm';


class App extends Component {

  state = {
    contacts: [

      {
        id: 1,
        name: 'Aleksandra',
        surname: 'Nowak',
        number: '508 234 405',
        isFavorite: true
      },
      {
        id: 2,
        name: 'Joanna',
        surname: 'Kuc',
        number: '987 356 387',
        isFavorite: true
      },
      {
        id: 3,
        name: 'Zenon',
        surname: 'Zieliński',
        number: '598 387 467',
        isFavorite: false
      },
      {
        id: 4,
        name: 'Kunegunda',
        surname: 'Pieczarka',
        number: '675 987 476',
        isFavorite: true
      }
    ]
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

  render() {
    return (
      <div className="app">
        <div className="title">Contact List App</div>
        <ContactForm />
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