import React from 'react'
import TodoForm from './todo_form'
import TodoList from './todo_list'
import TodoFilter from './todo_filter'

export default class TodoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      filter: 'ALL'
    }
  }

  onNew (newTodo) {
    const newState = Object.assign({}, this.state, {
      todos: this.state.todos.concat([newTodo])
    })
    this.setState(newState)
  }

  onChangeFilter (newFilter) {
    const newState = Object.assign({}, this.state, {
      filter: newFilter
    })
    this.setState(newState)
  }

  visibleTodos () {
    switch (this.state.filter) {
      case 'ALL':
        return this.state.todos
      case 'DONE':
        return this.state.todos.filter((todo) => {
          return todo.done === true
        })
      case 'UNDONE':
        return this.state.todos.filter((todo) => {
          return todo.done === false
        })
      default: 
        return this.state.todas
    }
     
  }

  render () {
    return (
      <div>
        <TodoForm onSubmit={this.onNew.bind(this)} />
        <TodoList visibleTodos={this.visibleTodos()}/>
        <TodoFilter onChangeFilter={this.onChangeFilter.bind(this)} filter={this.state.filter}/>
      </div>
    )
  }
}
