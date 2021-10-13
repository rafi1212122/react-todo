import React from "react";

class Add extends React.Component{
    state = {term:''}

    onInputChange = (e) =>{
        this.setState({term:e.target.value})
    }

    onFormSubmit = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="mb-4 todo">
                <input type="text" name="todo" placeholder="Add Todo.." onChange={this.onInputChange} value={this.state.term} className="form-control"/>
                <button type="submit" className="btn btn-primary"><i className="fa fa-plus"></i></button>
            </form>
        )
    }
}

export default Add