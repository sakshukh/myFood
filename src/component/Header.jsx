import React, { useContext, useState } from "react";
// import logo from "../assets/app-logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const [btnName, setBtnName] = useState("Login");

  // subscribing to the store using selectore
  const cartItems = useSelector((store) => store.cart.items);

  //console.log(cartItems);

  const handleClick = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="flex justify-between bg-pink-50 m-2">
      {/* <img className="w-20" src={logo} alt="app-logo" /> */}
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>
          <button className="px-4" onClick={() => handleClick()}>
            {btnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
