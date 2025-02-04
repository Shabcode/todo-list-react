import React from "react";

const Home = () => {
    return (
        <div className="flex">
            <SideBar />
            <main className="p-8 flex-1">
                <h2 className="text-2x1 font-bold">
                    Welcome  to the To-do List App</h2>
                <p className="mt-2">Organize your tasks</p>
            </main>
        </div>
    );
};