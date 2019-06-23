import React, { Component } from 'react'

class TodoItems extends Component {

  createTasks = item => {
    return (
      <div>
        <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
          {item.text}
        </li>
        <input type="checkbox" />
      </div>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default TodoItems