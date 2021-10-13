import React from "react";

const TodoItem = function(props){
    var data = props.data
    var map = data.todos.map((i)=>{
        return (
            <div key={i.id}>
                <li className="list-group-item">
                    <input onChange={() => props.changeHandler(i.id)} className="form-check-input" type="checkbox" checked={i.completed}></input>
                    <span className={i.completed? "completed" : null}> {i.title}</span>
                    <span onClick={() => props.deleteTodo(i.id)} style={{float:'right',color:'red'}}> <i className="fa fa-times-circle"></i></span>
                </li>
            </div>
            )
    })

    return map
}

export default TodoItem