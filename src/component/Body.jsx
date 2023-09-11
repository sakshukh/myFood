import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestaurentCard, {
  withIsOpenLabelRestaurant,
} from "./restaurant/RestaurantCard";
import axios from "axios";
import { GET_ALL_RESTAUANTS } from "../utils/Urls";

const RestaurantOpen = withIsOpenLabelRestaurant(RestaurentCard);

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      //const data = await axios.get(GET_ALL_RESTAUANTS);

      const json = await fetch(GET_ALL_RESTAUANTS);

      const data = await json.json();

      //console.log(data.data.data.cards[2].data.data.cards);
      setRestaurants(
        data.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
      );

      setRestaurantDetails(
        data.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
      );
      // console.log(
      //   data.data.cards[2].card.card.gridElements?.infoWithStyle?.restaurants
      // );
    }

    getRestaurants();
  }, []);

  const handleCardClick = async function (id) {
    const data = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&lat=25.2138156&lng=75.8647527&restaurantId=${id}`
    );

    //console.log("card-details", data.data.data.cards);
    //setRestaurantDetails(data.data.data.cards);
  };

  return (
    <div className="body">
      <Search
        setRestaurants={setRestaurants}
        restaurants={restaurants}
        restaurantDetails={restaurantDetails}
      />
      <div className="flex flex-wrap m-4 items-center justify-center">
        {restaurants?.map((res) =>
          res.info.sla.deliveryTime < 45 ? (
            <RestaurantOpen
              res={res.info}
              key={res.info.id}
              handleCardClick={handleCardClick}
            />
          ) : (
            <RestaurentCard
              res={res.info}
              key={res.info.id}
              handleCardClick={handleCardClick}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
