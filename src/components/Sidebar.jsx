import React from "react";

const SideBar = () => {
    // add more elements dynamically ? 
    return (
        <aside className="bg-gray-200 w-48 p-4 min-h-screen">
            <ul className="space-y-2">
                <li><a href="/" className="text-blue-600"></a></li>
                <li><a href="/about" className="text-blue-600"></a></li> 
            </ul>
        </aside>
    );
};

export default SideBar;