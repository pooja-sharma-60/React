import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data, showItems, onShowItems }) => {
  // const [showItems, setShowItem] = useState(false);

  const handleClick = () => {
    // setShowItem(!showItems)
    onShowItems();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray shadow-lg p-4 ">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>

        {!showItems ? <span>🔽</span> : <span>🔼</span>}
      </div>
      {/* body */}
      {showItems && <MenuItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
