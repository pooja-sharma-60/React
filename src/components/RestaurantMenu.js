import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.data?.cards[0]?.card?.card?.info;

  const cards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
      
  const menuItems = cards?.itemCards || cards?.carousel;

  console.log(menuItems);

  return (
    <div className="menu">
      <h1>{info?.name}</h1>
      <h3>{info?.cuisines.join(" , ")}</h3>
      <h3>{info?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      {menuItems &&
        menuItems.map((menu) => (
          <ul key={menu?.dish?.info?.id}>
            <li>
              {menu?.card?.info?.name || menu?.dish?.info?.name} - Rs.
              {menu?.card?.info?.defaultPrice / 100 ||
                menu?.card?.info?.price / 100 ||
                menu?.dish?.info?.defaultPrice / 100 ||
                menu?.dish?.info?.price / 100}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default RestaurantMenu;
