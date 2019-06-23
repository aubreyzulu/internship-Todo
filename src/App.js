import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

let data = [];
class App extends Component {
  constructor() {
    super()
    this.state = {
      items: data,
      currentItem: { text: '', key: '', show: true, completed: false },
    }
  }
  inputElement = React.createRef();

  editItem = (key, NewText) => {
    const tempItems = this.state.items.slice()
    tempItems.forEach((item) => {
      if (item.key === key) {
        item.text = NewText
        item.show = false
        item.completed = false
      }
    })
    this.setState({
      items: tempItems,
    })
  }


  showEditedItemform = (key) => {
    const tempItems = this.state.items.slice()

    tempItems.forEach((item) => {
      if (item.key === key && !item.completed) {
        item.show = !item.show;
      }
      else {
        item.show = false
      }
    })
    this.setState({
      items: tempItems,
    })
  }

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
        currentItem: { text: '', key: '' }
      })
      data = JSON.stringify(this.state.item)
    }
  }

  changeStatus = key => {
    const tempItems = this.state.items.slice()

    tempItems.forEach((item) => {
      if (item.key === key) {
        item.completed = !item.completed;
      }
    })
    this.setState({
      items: tempItems,
    })
  }


  render() {
    return (
      <div className="App">
      <div className="nav"><h2>Create Things to do and be productive</h2></div>
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem}
          showEditedItemform={this.showEditedItemform} changeStatus={this.changeStatus} />
      </div>
    );
  }
}


export default App;
