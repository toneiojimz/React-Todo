import React from 'react';


class TodoForm extends React.Component{
    //constructor with state

    constructor(){
        super();
        this.state = {
            newTask: ''
        };
    }

    handleChanges = e => {
        //update state with each entry
        this.setState({ newTask: e.target.value});
    };

    //class property to submit form
    handgleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({
            newTask: ''
        });
    };

    render(){
        console.log('let it render now');

        return (
            <form onSubmit={this.handgleSubmit}>
                <input
                    value ={this.state.newTask}
                    onChange = {this.handleChanges}
                    type = 'text'
                    name = 'task' 
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;