import React from "react";

function handleOnChange(){
    console.log('Changed')
}

function TodoItem(props){
    return(
        <div>
            <div className="todo_item">
                <input type="checkbox" onChange={handleOnChange}/>
                <p>{props.dataTodo.text}</p>
            </div>
        </div>
   )
}

export default TodoItem