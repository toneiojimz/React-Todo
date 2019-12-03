import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const dos =[
  {
    task: 'Read React',
    id: 234679,
    completed: false
  }];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      dos: dos,  
    };
  }

  addTask = event =>{
    //add new task to the todo list
    const newTask = {
      name: event,
      id:Date.now(),
      completed: false
    };
    this.setState({
      dos: [...this.state.dos, newTask]
    });
  };

  render() {
    console.log('please render witn no issues');
    return (
      <div className='App'>
        <h2>Welcome to Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <div>
          <TodoList dos={this.state.name}/>
        </div>
        
      </div>
    );
  }
}

export default App;
