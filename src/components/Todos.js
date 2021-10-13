import React from "react";
import TodoItem from "./TodoItem"

const Todos = function(props){
    var data = props.data
    return(
        <ul className="list-group">
            <TodoItem deleteTodo={props.deleteTodo} changeHandler={props.changeHandler} data={data}/>
        </ul>
    )
}

export default Todos