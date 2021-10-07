
import React from "react";
import TodoItem from "./components/TodoItem";
import './App.css'

import data from "./TodoData";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
          todos:data
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
     this.setState(prevState => {
       const updatedTodo = prevState.todos.map(todo => {
         if(todo.id === id){
           todo.completed = !todo.completed
         }
         return todo
       })
         return {
           todos:updatedTodo
         }
     })
  }

  render(){
    const dataComponent = this.state.todos.map(data => <TodoItem key={data.id} item ={data} handleChange={this.handleChange} />)
    return (
     
      <div className="todo_list">
         {dataComponent}
    </div>
    )
  }
}

export default App