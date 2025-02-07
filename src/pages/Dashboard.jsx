import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import tasksData from '../data/tasks.json';

function Dashboard() {
  const [tasks, setTasks] = useState(tasksData);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <TodoForm onAddTask={handleAddTask} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Dashboard;