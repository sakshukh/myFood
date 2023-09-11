import React, { useState } from "react";
import ItemCard from "./ItemCard";

const MenuItems = ({ itemCard, showItems, setShowIndex }) => {
  //console.log(itemCard);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div
      className="bg-gray-50 p-4 shadow-lg w-6/12 mx-auto my-2 "
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {itemCard.title} ({itemCard?.itemCards?.length})
        </span>
        <span>⌄</span>
      </div>
      <div>
        {itemCard?.itemCards?.map(
          (card) =>
            showItems && (
              <ItemCard item={card.card.info} key={card.card.info.id} />
            )
        )}
      </div>
    </div>
  );
};

export default MenuItems;
