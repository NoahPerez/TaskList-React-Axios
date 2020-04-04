import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTask from './components/AddTask';
import About from './components/layout/pages/About';
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid';



import './App.css';

class App extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ tasks: res.data }))
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed  // we are toggling the completed 
        }
        return task;
      })
    })
  }

  //Delete Task
  // we use the spread operator to to take everything in task.// it copies of the state
  // we want to return any id that is not equal to the one we passed in //It will filter out the one we are deleting )
  delTask = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)] }))
  }

  // Add Todo
  addTask = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ tasks: [...this.state.tasks, res.data] }));

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTask addTask={this.addTask} />
                <Todos tasks={this.state.tasks}
                  markComplete={this.markComplete}
                  delTask={this.delTask} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;

