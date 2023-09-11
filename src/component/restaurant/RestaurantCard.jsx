import React, { useContext } from "react";
import { IMAGE_URL } from "../../utils/Urls";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const RestaurentCard = ({ res, handleCardClick }) => {
  const { loggedInUser } = useContext(UserContext);
  //console.log(res);

  return (
    <Link to={`/restaurant-details/${res.id}`} className="bg-gray-50">
      <div
        className="w-[250px] rounded-xl overflow-hidden m-4 h-[420px]"
        onClick={() => handleCardClick(res.id)}
        data-testid="resCard"
      >
        <div className="w-[100%] h-15 rounded-xl">
          <img
            src={`${IMAGE_URL}${res.cloudinaryImageId}`}
            alt="res-logo"
            className="h-[150px] w-[100%] rounded-xl"
          />
        </div>
        <div className="res-details p-4">
          <div className="font-bold py-4 text-lg">{res.name}</div>
          <div className="cuisines-container">
            {res.cuisines.map((cuisine) => (
              <span className="p-[4px] text-gray-500" key={cuisine}>
                {cuisine}
              </span>
            ))}
          </div>
          <div className="other-info">
            <div className="flex items-center">
              <AiTwotoneStar color="57E326" />
              {res.avgRating === "--" ? (
                <span className="ml-1">new</span>
              ) : (
                <span className="ml-1">{res.avgRating}</span>
              )}
            </div>
            <span>{res.sla.deliveryTime} min</span>
            <span>{res.costForTwo}</span>
          </div>
          <div className="font-bold">{loggedInUser}</div>
          <div className="h-[2px] bg-gray-400 mx-0 my-2"></div>
          <div className="flex justify-center">
            <span className="text-blue-700 font-bold">Quick View</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const withIsOpenLabelRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute my-5 mx-5 p-1 font-bold bg-green-600 text-white rounded z-10">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
