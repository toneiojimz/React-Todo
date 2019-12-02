import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos =[
  {
    task: 'Read React',
    completed: false
  },
  {
    task: 'Review docs',
    completed: false
  }

]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todos,
      anotherTask: ''
    };
  }

  addTask = newTaskText =>{
    //add new task to the todo list
    const newTask = {
      task: newTaskText,
      id:Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  };

  render() {
    console.log('please render witn no issues');
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList todos={this.state.todos}/>
        </div>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
