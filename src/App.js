
import React from "react";
import TodoItem from "./components/TodoItem";
import './App.css'

import data from "./TodoData";


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
          todo:data
    }
  }

  render(){
    const dataComponent = this.state.todo.map(datas => <TodoItem key={datas.id} dataTodo ={datas}/>)
    return (
     
      <div  className="todo_list">
         {dataComponent}
    </div>
    )
  }
}

export default App