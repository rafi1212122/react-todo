import React from "react";
import ReactDOM from "react-dom";
import Add from "./components/Add";
import Todos from "./components/Todos"
import Header from "./components/Header";
import "./styles.css"
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component{
    state = {
        todos: []
    }

    onTermSubmit = (e) =>{
        var a = {
            id: uuidv4(),
            title: e,
            completed: false
        }

        var join = this.state.todos.concat(a)

        this.setState({todos: join})
    }

    changeHandler = (id) => {
        this.setState({todos:this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
            })
        })
    }

    deleteTodo = id => {
        this.setState({
            todos:[
                ...this.state.todos.filter(todo => {
                return todo.id !== id;
              })
            ]
        })
    }

    render(){
        return(
            <div>
                <Header text="React Todo App"/>
                <div className="container">
                    <Add onSubmit={this.onTermSubmit}/>
                    <Todos changeHandler={this.changeHandler} deleteTodo={this.deleteTodo} data={this.state}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)