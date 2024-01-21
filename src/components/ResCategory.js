import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordian Header */}
      <div className="w-9/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {/* Accordian Body */}
        <div>{showItems && <ItemList items={data.itemCards} />} </div>
      </div>
    </div>
  );
};

export default ResCategory;
