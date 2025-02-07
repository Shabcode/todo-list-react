import React, { useState } from 'react';
import TodoItem from './TodoItem';
import tasksData from '../data/tasks.json';

function TodoList() {
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter(task => task.task !== taskToDelete));
  };

  const handleToggleComplete = (taskToToggle) => {
    setTasks(tasks.map(task => 
      task.task === taskToToggle 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem 
          key={index} 
          task={task} 
          onDelete={handleDelete}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;