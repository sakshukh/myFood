import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
// import "../../styles/restaurantDetails.scss";
import Shimmer from "../Shimmer";
import MenuItems from "./MenuItems";
import RestaurantAddress from "./RestaurantAddress";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState();

  //console.log("Restaurant Menu");

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const itemCards = resInfo[2].groupedCard.cardGroupMap.REGULAR.cards;

  return (
    <div className="text-center">
      <div className="font-bold text-2xl my-6 text-gray-700">
        {resInfo[0]?.card.card.info.name}
      </div>
      <div className="font-bold text-lg my-2 text-gray-500">
        {resInfo[0]?.card.card.info.cuisines.join(", ")}
      </div>
      <div className="font-bold text-lg my-2 text-gray-500">
        {resInfo[0]?.card.card.info.city}
      </div>
      <div className="font-bold text-lg my-2 text-gray-500">
        {resInfo[0]?.card.card.info.locality}{" "}
        {resInfo[0]?.card.card.info.sla.slaString}
      </div>
      {itemCards.map((itemCard, index) => {
        if (
          itemCard.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress" ||
          itemCard.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo"
        ) {
          return <RestaurantAddress address={itemCard.card.card} key={index} />;
        } else if (
          itemCard.card.card["@type"] !==
          "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
        ) {
          return (
            <MenuItems
              itemCard={itemCard.card.card}
              key={index}
              showItems={index === showIndex && true}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        }
      })}
    </div>
  );
};

export default RestaurantMenu;
