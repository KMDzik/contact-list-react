import React, { Component } from 'react'
import './ContactForm.css'

class ContactForm extends Component {

  state = {
    contactData: '',
    error: null
  }

handleSubmit = event => {
  event.preventDefault()
  if (this.state.contactData === '') {
    this.setState({
      error: new Error('Please add name, surename and number')
    })
    return;
  }
  this.setState({contactData: '', error: null})
}

handleChange = event => {
  this.setState({
    contactData: event.target.value
  })
}

  render() {
    return (
        <form onSubmit= {this.handleSubmit}>
          {
          this.state.error && <p>{this.state.error.message}</p>
        }
        <input value={this.state.contactData} onChange={this.handleChange}/>
        <button>Add</button>
      </form>
    )
  }
}

export default ContactForm