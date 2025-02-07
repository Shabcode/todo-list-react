import React from "react";
import Footer from "../components/Footer";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import tasksData from "../data/tasks.json";


const Home = () => {
  const [tasks, setTasks] = useState(tasksData);

  const addTask = (taskText) => {
    const newTask = {task: taskText, completed: false};
    setTasks({...tasks, newTask});
  };

  return (
    <div>
      <main>
        <h2>Welcome to the To-Do App</h2>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;