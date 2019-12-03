import React from 'react';

const Todo = props => {
    return (
     <div
        className={`item${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggleItem(props.task.taskId)}
    >
      <p>{props.item.name}</p>
    </div>
    );
};

export default Todo;