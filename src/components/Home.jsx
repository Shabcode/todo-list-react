import React ,{useState} from "react";
import SideBar from "./Sidebar";
import List from "./List";

const Home = () => {
    const [tasts,setTasks] = useState([
            { "task": "Read the project brief", "completed": true},
            { "task": "Create a project repository", "completed": false},
            { "task": "Create React application using Vite", "completed": false},
            { "task": "Finish Day 1 Development Tasks", "completed": false},
            { "task": "Finish Day 1 Research Tasks", "completed": false},
            { "task": "Finish Day 2 Development Tasks", "completed": false},
            { "task": "Finish Day 2 Research Tasks", "completed": false}
    ]);

    const deleteTask = (id) => {
        setTasks(setTasks.filter(task => task.id !== id));
    };

    return (
        <div className="flex">
            <SideBar />
            <main className="p-8 flex-1">
                <h2 className="text-2x1 font-bold">
                    Welcome  to the To-do List App</h2>
                <p className="mt-2">Organize your tasks</p>
                <List items={task} onDelete={deleteTask} />
            </main>
        </div>
    );
};

export default Home;
