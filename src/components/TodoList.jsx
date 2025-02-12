import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete, onToggleComplete }) {  // Receive props
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={onDelete}  // Pass down from Dashboard
          onToggleComplete={onToggleComplete} // Pass down from Dashboard
        />
      ))}
    </div>
  );
}

export default TodoList;