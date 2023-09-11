import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Search = ({ setRestaurants, restaurants, restaurantDetails }) => {
  const { setUserName, loggedInUser } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    //console.log("Search", searchInput, restaurants);
    setRestaurants(
      searchInput
        ? restaurantDetails.filter(
            (item) => item.info.name.toUpperCase() === searchInput.toUpperCase()
          )
        : restaurantDetails
    );
  };

  return (
    <div className="flex justify-center">
      <input
        className="p-2 mx-20 my-4 border border-soid border-black w-200"
        type="text"
        placeholder="Type Something..."
        data-testid="searchInput"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />
      <button
        className="p-2 my-4 mx-20 bg-black rounded-md text-white"
        onClick={handleSearch}
      >
        Search
      </button>

      <input
        className="p-2 mx-20 my-4 border border-soid border-black w-200"
        type="text"
        value={loggedInUser}
        placeholder="Type User Name..."
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default Search;
