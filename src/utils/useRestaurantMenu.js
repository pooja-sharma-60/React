import { FETCH_MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

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

  return resInfo;
};

export default useRestaurantMenu;
