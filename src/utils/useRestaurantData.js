import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL } from "./constants";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(FETCH_RESTAURANTS_URL);
    const data = await res.json();
    const restaurantList =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantList);
    setFilteredRestaurants(restaurantList);
  };

  return [listOfRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurantData;
