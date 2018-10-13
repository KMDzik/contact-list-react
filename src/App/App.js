import React, { Component } from 'react'

import './App.css';

const contacts = [

  {
    id: 1,
    name: 'Aleksandra',
    number: '508 234 405'
  },
  {
    id: 2,
    name: 'Joanna',
    number: '987 356 387'
  },
  {
    id: 3,
    name: 'Zenon',
    number: '598 387 467'
  },
  {
    id: 4,
    name: 'Kunegunda',
    number: '675 987 476'
  }
]
class App extends Component {
  render() {
    return (
      <ul> {
        contacts.map(
          contact => (
            <li key={contact.id}> {contact.name} {contact.number} </li>
          )
        )
      }
      </ul>
    )
  }

}

export default App