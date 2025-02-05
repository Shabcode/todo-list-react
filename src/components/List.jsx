import React from "react";
import ListItem from "./ListItem";

const List = ({items, onDelete}) => {
    return (
        <ul className="bg-white p-4 shadow-md rounded">
            {items.map((item) => ( 
                <ListItem key={item.id} item={item} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default List;