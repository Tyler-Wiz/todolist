import React from "react";


function TodoItem(props){
   const completedStyle = {
       fontStyle:'italic',
       textDecoration:"line-through",
       color:"#c3c3c3"
   }

    return(
        <div>
            <div className="todo_item">
                <input type="checkbox" 
                 checked= {props.item.completed}
                 onChange={() => props.handleChange(props.item.id)}
                 
                 />
                <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
            </div>
        </div>
   )
}

export default TodoItem