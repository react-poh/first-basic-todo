import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errors: []    
    }
  }

  submit (e) {
    e.preventDefault()
    if (e.target[0].value.trim() === '') {
      this.setState(Object.assign({}, this.state, {
        errors: ['Escribe algo marico']
      }))
    } else {
      this.props.onSubmit({
        id: new Date().getTime(),
        done: false,
        text: e.target[0].value
      })
      e.target[0].value = ''
    }
  }

  render () {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input type="text" />
        <button type="submit">Add todo</button>
        {this.state.errors.map((error, index) => {
          return (<p key={index}>{error}</p>)
        })}
      </form>
    )
  }
}
