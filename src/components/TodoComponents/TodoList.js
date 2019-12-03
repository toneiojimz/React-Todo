import React from 'react';
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


const TodoList = props =>{

    return (
        <div>
            {props.dos.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>


    );
};

export default TodoList;