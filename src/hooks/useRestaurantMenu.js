import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS } from "../utils/Urls";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const { data } = await axios.get(RESTAURANT_DETAILS + resId);
    const json = await fetch(RESTAURANT_DETAILS + "23847");
    const data = await json.json();
    setResInfo(data.data.cards);
  };

  return resInfo;
};

export default useRestaurantMenu;
