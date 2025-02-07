import React from 'react';

function TodoItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(task.task)}>
        {task.completed ? '✅' : '❌'}
      </span>
      <span>{task.task}</span>
      <button onClick={() => onDelete(task.task)}>Delete</button>
    </div>
  );
}

export default TodoItem;