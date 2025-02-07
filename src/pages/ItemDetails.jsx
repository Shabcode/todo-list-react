import React from 'react';

const ItemDetails = ({ match }) => {
  const itemId = match.params.id;
  return (
    <div className="item-details">
      <h1>Item Details for ID: {itemId}</h1>
    </div>
  );
};

export default ItemDetails;