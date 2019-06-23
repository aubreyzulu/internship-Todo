import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';


class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '', isCompleted: false },
    }
  }
  inputElement = React.createRef();

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }


  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem }
          inputElement={this.inputElement}
          currentItem={this.currentItem}
          handleInput={this.handleInput}
        />
        <TodoItems entries={this.state.items}
          deleteItem={this.deleteItem} />
      </div>
    )
  }
}


export default App;
