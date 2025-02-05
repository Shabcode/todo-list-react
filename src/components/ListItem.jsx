import React from "react";

const ListItem = ({item, onDelete}) => {
    return (
        <li className="p-2 border-b flex justify-between items-center">
            <span>{item.text}{item.isCompleted ? "✅" : "❌"}</span>
        <button
            onClick = {() => onDelete(item.id)}
            className="bg-red-500 text-white px-2 py-1 rounded">
                Delete
        </button>
        </li>
    );
};

export default ListItem;