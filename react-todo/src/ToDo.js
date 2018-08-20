import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          'todo': 'feed pets'
        },
        {
          'todo': 'learn to read'
        }
      ],
      todo: ''
    };
  };

  createNewToDoItem = () => {
    this.setState(({list, todo}) => ({
      list: [
        ...list, { todo }
      ],
      todo: ''
    }));
  };

  deleteItem = indexToDelete => {
    this.setState(({list}) => ({
      list: list.filter((toDo, index) => index !== indexToDelete)
    }));
  };

  handleKeyPress = e => {
    if(e.target.value !== '') {
      if  (e.key === 'Enter') {
        this.createNewToDoItem();
      }
    }
  };

  handleInput = e => {
    //console.log(e.target.value)
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    return (
      <div className="todoApp">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="header">React To Do</h1>
        <div className="container">
          <div className="container-flex">
            <input className="input" type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
            <div className="btn-add" onClick={this.createNewToDoItem}>+</div>
          </div>
          <ul className="list">
            {this.state.list.map((item,key) => {
              return <ToDoItem key={key} item={item.todo} deleteItem={this.deleteItem.bind(this,key)}/>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDo;
