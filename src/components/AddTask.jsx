import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddTask extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title); // to submit what i have interned
        this.setState({ title: " " });// after submitted we want the title fill to be clear fill
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input type="text"
                    name="title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: 1 }}
                />
            </form>
        )
    }
}

AddTask.propTypes = {
    AddTask: PropTypes.func.isRequired

}
export default AddTask;

