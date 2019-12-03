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
    handgleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({
            newTask: ''
        });
    };

    render(){
        return (
            <form onSubmit={this.handgleSubmit}>
                <input
                    placeholder='..what to do'
                    type = 'text'
                    value ={this.state.newTask}
                    onChange = {this.handleChanges}
                    
                     
                />
                <button onClick={this.handgleSubmit}>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;