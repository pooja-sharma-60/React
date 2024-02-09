import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurantData();

  const handleFilterClick = () => {
    let filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant?.info?.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
    console.log(filteredList);
  };

  const handleSearch = () => {
    console.log(searchText);
    const searchedRestaurants = listOfRestaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searchedRestaurants);
    setSearchText("");

    console.log(searchedRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection.
      </h1>
    );

  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex">
        <div className="p-4">
          <input
            type="text"
            className="mr-4 border border-solid border-black rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 border border-solid border-gray rounded-md hover:bg-gray-100"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 m-4 border border-solid border-gray rounded-md hover:bg-gray-100"
          onClick={handleFilterClick}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
