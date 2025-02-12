import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import tasksData from '../data/tasks.json';

function Dashboard() {
  const [tasks, setTasks] = useState([]); // Initialize as empty array

  useEffect(() => {
    setTasks(tasksData);
  }, []); 

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

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
    <div className="dashboard">
      <h1>Dashboard</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList 
        tasks={tasks} 
        onDelete={handleDelete} 
        onToggleComplete={handleToggleComplete} 
      />
    </div>
  );
}

export default Dashboard;
