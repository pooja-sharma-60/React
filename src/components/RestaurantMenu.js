import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    try {
      const res = await fetch(FETCH_MENU_URL + resId);
      const data = await res.json();
      console.log(data);
      setResInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.data?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  //   const { cards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  //   console.log(cards);
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{info?.name}</h1>
      <h3>{info?.cuisines.join(" , ")}</h3>
      <h3>{info?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      {itemCards &&
        itemCards.map((menu) => (
          <ul key={menu?.card?.info?.id}>
            <li>
              {menu?.card?.info?.name} - Rs.{menu?.card?.info?.price / 100}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default RestaurantMenu;
