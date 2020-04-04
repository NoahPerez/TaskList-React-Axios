import React, { Component } from 'react';
import PropType from "prop-types";


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.task.completed ? 'line-through' : 'none',
        }
    }
    // getStyle = () => {
    //     if (this.props.lists.completed) {
    //         return {
    //             textDecoration: 'line-through'
    //         }
    //     } else {
    //         return {
    //             textDecoration: 'none's
    //         }
    //     }
    // }
    render() {
        const { id, title } = this.props.task;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    /> {' '}
                    {title}
                    <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>
                        &#10005;</button>
                </p>
            </div>
        )
    }
}

//Property Type
// props should have some sort of validation for properties  that a component should have 
// We can set the type and also to et them to be required or not 
// here we are taking a single object from lists our state
// item you can give it any name 
TodoItem.protoType = {
    item: PropType.object.isRequired,
    markComplete: PropType.func.isRequired,
    delTask: PropType.func.isRequired
}



const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: "50%",
    cursor: 'pointer',
    float: 'right'
}



export default TodoItem;


