import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-xl">{info?.name}</h1>
      <p className="font-bold text-lg">
        {info?.cuisines.join(" , ")} - {info?.costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories &&
        categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            onShowItems={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
