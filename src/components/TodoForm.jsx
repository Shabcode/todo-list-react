import React, { useState } from 'react';

function TodoForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask({
        task: newTask,
        completed: false
      });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;