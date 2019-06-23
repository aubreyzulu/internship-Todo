import React, { Component } from 'react'

class TodoItems extends Component {

  // createTasks = item => {
  //   return (
     
  //       <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
  //         {item.text}
  //       </li>
      
  //   )
  // }
  constructor() {
    super()
    this.state = {
      updatedText: '',
    }
    this.updateText = this.updateText.bind(this);

  }


  updateText(event) {
    this.setState({ updatedText: event.target.value })
  }

  createTasks = item => {

    var txtClass = item.completed ? 'completed' : 'uncompleted';

    return (
      <li key={item.key}>

        {!item.show &&
          <div className="item-container">

            <input className="status-checkbox"
              type="checkbox" name="status"
              value="" checked={item.completed}
              onChange={() => this.props.changeStatus(item.key)}></input>

            <span className={`item-text ${txtClass}`}
              onClick={() => this.props.showEditItemForm(item.key)}>{item.text}</span>

            <button className="delete-button"
              onClick={() => this.props.deleteItem(item.key)}>Delete</button>
          </div>
        }
        
        {item.show &&
          <div>
            <input className="edit-input"
              type="text" name="ItemText"
              title="Item Text"
              autoFocus={true}
              defaultValue={item.text}
              onFocus={this.updateText}
              onChange={this.updateText} />
            <button className="save"
              onClick={() => this.props.editItem(item.key,
                this.state.updatedText)} >Save</button>
            <button className="cancel"
              onClick={() => this.props.showEditItemForm(item.key)}>Close</button>

          </div>
        }

      </li>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default TodoItems