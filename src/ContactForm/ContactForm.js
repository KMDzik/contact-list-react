import React, { Component } from 'react'
import './ContactForm.css'

class ContactForm extends Component {

handleSubmit = event => {
  event.preventDefault()
}

  render() {
    return (
      <div>
        <form onSubmit= {this.handleSubmit}>
        <input />
        <button>Add</button>
      </form>
      </div>
    )
  }
}

export default ContactForm