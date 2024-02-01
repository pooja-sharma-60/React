import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  const handleFilterClick = () => {
    let filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.data.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
