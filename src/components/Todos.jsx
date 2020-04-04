import React, { Component } from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        return this.props.tasks.map((task) => (
            <TodoItem key={task.id} task={task}
                markComplete={this.props.markComplete}
                delTask={this.props.delTask}
            />
        ));
    }
}

// PropTypes
// props should have some sort of validation for properties  that a component should have 
// We can set the type and also to et them to be required or not 

Todos.propTypes = {
    tasks: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTask: PropTypes.func.isRequired

}

export default Todos;




