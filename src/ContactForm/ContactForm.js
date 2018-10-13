import React, { Component } from 'react'
import './ContactForm.css'

class ContactForm extends Component {

  state = [
    {
      ContactName: '',
      error: null
    },
    {
      ContactSurname: '',
      error: null
    },
    {
      ContactNumber: '',
      error: null
    }
  ]

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.ContactName === '') {
      this.setState({
        error: new Error('Please add name, surename and number')
      })
      return;
    }
    this.props.addContactsFunction(this.state.ContactName);
    this.setState({ ContactName: '', error: null })
  }

  handleChange = event => {
    this.setState({
      ContactName: event.target.value
    })
  }




  handleSubmit = event => {
    event.preventDefault()
    if (this.state.ContactSurename === '') {
      this.setState({
        error: new Error('Please add name, surename and number')
      })
      return;
    }
    this.props.addContactsFunction(this.state.ContactSurename);
    this.setState({ ContactSurename: '', error: null })
  }

  handleChange = event => {
    this.setState({
      ContactSurename: event.target.value
    })
  }




  handleSubmit = event => {
    event.preventDefault()
    if (this.state.ContactNumber === '') {
      this.setState({
        error: new Error('Please add name, surename and number')
      })
      return;
    }
    this.props.addContactsFunction(this.state.ContactNumber);
    this.setState({ ContactNumber: '', error: null })
  }

  handleChange = event => {
    this.setState({
      ContactName: event.target.value
    })
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {
          this.state.error && <p>{this.state.error.message}</p>
        }
        <input value={this.state.ContactName} onChange={this.handleChange} />
        <button>Add name</button>
        <input value={this.state.ContactSurename} onChange={this.handleChange} />
        <button>Add surename</button>
        <input value={this.state.ContactNumber} onChange={this.handleChange} />
        <button>Add number</button>
      </form>

    )
  }
}

export default ContactForm